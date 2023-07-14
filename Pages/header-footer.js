/*
===========================================
; Title:  header-footer.js
; Author: Nolan Berryhill
; Date:   12 July 2023
; Description: Applying strings to list in html
;==========================================
*/

// Dynamically load the header and footer using JavaScript
document.addEventListener('DOMContentLoaded', function() {
    //Load the header
    const headerContainer = document.getElementById('header');
    const headerRequest = new XMLHttpRequest();
    headerRequest.open('GET', 'header.html', true);
    headerRequest.onreadystatechange = function() {
        if (headerRequest.readyState === 4 && headerRequest.status === 200) {
            headerContainer.innerHTML = headerRequest.responseText;
        }
    };
    headerRequest.send();

    //Load the footer
    const footerContainer = document.getElementById('footer');
    const footerRequest = new XMLHttpRequest();
    footerRequest.open('GET', 'footer.html', true);
    footerRequest.onreadystatechange = function() {
        if (footerRequest.readyState === 4 && footerRequest.status === 200) {
            footerContainer.innerHTML = footerRequest.responseText;
        }
    };
    footerRequest.send();
})