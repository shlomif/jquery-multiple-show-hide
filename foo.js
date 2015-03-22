"use strict";
var next_id_base = 1;
$("#add").on("click", function () {
    var next_id = next_id_base++;
    var button_id = "hider_" + next_id;
    var text_id = "text_" + next_id;
    $("#put_here").append(
        "<div class=\"hider_wrapper\">" +
        "<button id=\"" + button_id + "\">Show/Hide</button>" +
        "<div class=\"text_to_hide\" id=\"" + text_id + "\">Hello there<input /></div>" +
        "</div>"
        );

    $("#" + button_id).on("click", function () {
        $("#" + text_id).toggleClass("hidden");
    });
} );
