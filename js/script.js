function software() {
    let page_1 = document.getElementById("page-1");
    let page_2 = document.getElementById("page-2");
    page_1.hidden = true;
    page_2.hidden = false;
}

function buy() {
    let page_1 = document.getElementById("page-1");
    let page_3 = document.getElementById("page-3");
    page_1.hidden = true;
    page_3.hidden = false;
}

function main() {
    let page_1 = document.getElementById("page-1");
    let page_2 = document.getElementById("page-2");
    let page_3 = document.getElementById("page-3");
    let page_4 = document.getElementById("page-4");
    page_1.hidden = false;
    page_2.hidden = true;
    page_3.hidden = true;
    page_4.hidden = true;
}

function about() {
    let page_1 = document.getElementById("page-1");
    let page_4 = document.getElementById("page-4");
    page_1.hidden = true;
    page_4.hidden = false;
}


function download(url) {
    document.location = url;
}

function redirect(url) {
    document.location = url;
}