function prijava(){
    window.location.replace("/data");

    $.ajax({
        url : "http://52.233.158.172/change/api/hr/account/login",
        method:"POST",
        type : 'POST',
        data : $('form').serialize(),
        contentType: "application/json; charset=UTF-8",
        success : function(data) {
            console.log(data);
            window.location.replace("/data");
        },
        error : function(request,error)
        {
            console.log(error);
        }
    });

}


