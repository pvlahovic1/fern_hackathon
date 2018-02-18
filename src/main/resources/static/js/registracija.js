$(document).ready(function(){
    var modal = document.getElementById('id01');

    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    };

});

function sendRegister() {
    var formData = getFormData()

    $.ajax({
        url : "http://52.233.158.172/change/api/hr/account/register",
        type : 'POST',
        data : JSON.stringify(getFormData()),
        contentType: "application/json; charset=UTF-8",
        success : function(data) {
            console.log(data)
        },
        error : function(request,error)
        {
            console.log(error);
        }
    });
}

function getFormData() {
    var data = {};
    var teamMembers = [];

    data["teamname"] = $('#Teamname').val();
    data["password"] = $('#Password').val();

    $.each($('.list-group-item', '.list-group'), function (index) {
        var teamMember = {};
        $.each($('input', $(this)), function( index ) {
            teamMember[$(this).attr('name')] = $(this).val();
        });
        teamMembers.push(teamMember);
    });

    data["members"] = teamMembers;

    return data;
}