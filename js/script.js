$(function () { //Same as document.addEventListener("DOMContentLoaded"...)
    // Same as document.querySelector("#navbarToggle").addEventListener("blur")
    $("#navbarToggle").blur(function(event){
        var screenWidth = window.innerWidth;
        if (screenWidth<768){
            $("#collapsable-nav").collapse('hide');
        }
    });
});

(function (global){
    var dc = {};
    var homeHtml = "snippets/home-snippet.html";

    //convinience function for inserting innerHTML for 'select'
    var inserHtml = function(selector, html) {
        var targetElem = document.querySelector(selector);
        targetElem.innerHTML = html;
    };
    // show loading icon inside element identified by 'selector'.
    var showLoading = function(selector) {
        var html ="<div class='text-center'>";
        html += "<img src='images/pizza sliced.gif'></div>";
        inserHtml(selector,html);
    };
    // On page load (before images or CSS).
    document.addEventListener("DOMContentLoaded",function(event){
        //on first load, show home view
        showLoading("#main-content");
        $ajaxUtils.sendGetRequest(
            homeHtml, 
            function(responseText){
                document.querySelector("#main-content").innerHTML = responseText;
            },
        false);
    });
    global.$dc = dc
})(window);