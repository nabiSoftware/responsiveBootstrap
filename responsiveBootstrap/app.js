"use strict";

$(document).ready(function () {
    $("#hamburgerMenu").click(function () {
        $("nav a").slideToggle();
        $(this).toggleClass("fa-bars fa-times");
    });


    $("nav a").click(function () {
        $("nav a").slideUp();
        $("#hamburgerMenu").removeClass("fa-times").addClass("fa-bars");
    });

});
