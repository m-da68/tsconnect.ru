function showRegister() {
    document.title = "Регистрация | ControlBase";
    let page_1 = document.getElementById("page-1");
    let page_2 = document.getElementById("page-2");
    page_1.hidden = true;
    page_2.hidden = false;
}

function showAuth() {
    document.title = "Авторизация | ControlBase";
    let page_1 = document.getElementById("page-1");
    let page_2 = document.getElementById("page-2");
    page_1.hidden = false;
    page_2.hidden = true;
}

function showMsg(text) {
    document.getElementById("alert-msg").innerHTML = text;
}

function resetMsg() {
    document.getElementById("alert-msg").innerHTML = "";
}

function login() {
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    $.ajax({
        url: 'https://controlbase.tsconnect.ru/api/v1/index.php',
        method: 'post',
        dataType: 'json',
        data: {
            group: 'account',
            method: 'login',
            mode: 'api',

            email: email,
            password: password
        },
        success: function(data) {
            console.log(data)
            if (data.payload.authStatus == "authorize") {
                resetMsg();
                document.getElementById("login-form").submit();
            } else if (data.payload.authStatus == "unauthorize") {
                showMsg("Неправильный логин или пароль");
            } else {
                showMsg("Ошибка сервера");
            }
        },
        error: function(data) {
            console.log(data);
            showMsg("Ошибка сервера");
        }
    });
}

function download(url) {
    document.location = url;
}

function redirect(url) {
    document.location = url;
}