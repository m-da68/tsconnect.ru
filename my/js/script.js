function download(url) {
    document.location = url;
}

function redirect(url) {
    document.location = url;
}

function showMonitor() {
    let page_1 = document.getElementById("page-monitor");
    let page_2 = document.getElementById("page-settings");
    page_1.hidden = false;
    page_2.hidden = true;
}

function showSettings() {
    alert('К сожалению, за такой короткий срок - 2 дня - физически не возможно реализовтаь столь глобальный проект на всех платформах. Понравилась работа и вы хотите пригласить нас в свой проект, пишите нам team@tsconnect.ru!');
    // let page_1 = document.getElementById("page-monitor");
    // let page_2 = document.getElementById("page-settings");
    // page_1.hidden = true;
    // page_2.hidden = false;
}

function logout() {
    document.location = "logout.php?redirect_url=https://controlbase.tsconnect.ru/";
}