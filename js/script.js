function software() {
    let page_1 = document.getElementById("page-1");
    let page_2 = document.getElementById("page-2");
    page_1.hidden = true;
    page_2.hidden = false;
}

function download(url) {
    document.location = url;
}

function redirect(url) {
    document.location = url;
}