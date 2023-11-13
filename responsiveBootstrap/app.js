"use strict";

$(document).ready(function () {
    $("#hamburgerMenu").click(function () {
        $("nav a").slideToggle(); // linklerin gizledilib ve ya gorsedilmesi
        $(this).toggleClass("fa-bars fa-times"); // icon change
    });


    $("nav a").click(function () {
        $("nav a").slideUp(); // linklerin yuxariya dogru gizledilmesi
        $("#hamburgerMenu").removeClass("fa-times").addClass("fa-bars"); // cancel iconun legv edib menu iconun elave edir 
    });

});
