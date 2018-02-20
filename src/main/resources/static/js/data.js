$(document).ready(function(){
    $("#button").click(function () {
        $.ajax({
            url : "http://52.233.158.172/change/api/hr/team/details/28",
            method : "GET",
            headers: {
                "X-Authorization": "RkVSTjo6"
            },
            success : function(data) {
                $('#teamname').text(data.TeamName);
                for (var i = 0; i < 4; i++) {
                    var html = "<tr><td>" + data.Members[i].Name + "</td><td>" + data.Members[i].Surname + "</td><td>" + data.Members[i].Mail + "</td></tr>";
                }
            },
            error : function(request,error)
            {
                console.log(error);
            }
        });
    });

    $("#submitData").click(function () {
        $.ajax({
            url : "http://52.223.158.172/change/api/hr/team/confirm?id=28&repository=https://github.com/pvlahovic1/fern_hackathon",
            method : "GET",
            headers: {
                "X-Authorization": "RkVSTjo6"
            },
            success : function(data) {
                console.log(data)
            },
            error : function(request,error)
            {
                console.log(error);
            }
        });
    });

});


