$('#login-btn').click(() => {
    if ($("input[name=username]").val() == $("input[name=password]").val()) {

        alert("Login Successful!");
        $('#login-btn').attr("href", "./index.html")

    //     $.post('https://5fc1a1c9cb4d020016fe6b07.mockapi.io/api/v1/login',(loginData, status) => {
    //     alert("dataloaded: "+ loginData + "\nstatus: "+status)

        

    // }).fail(() => console.log("POST failed"))
    } else {
        alert("Please enter valid credentials!")
        location.href = "./login.html"
    }
});

$('nav').click(() => alert("Not Logged-in! Do Login."))