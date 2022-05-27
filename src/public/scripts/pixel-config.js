/*
    Pixel Configuration File
    Brandon Asuncion <me@brandonasuncion.tech>
*/

(function(window) {
    "use strict";

    // Pixel Settings
    var Pixel = {
        PIXEL_SERVER: "ws://127.0.0.1:3001",
        CANVAS_WIDTH: 18, // The width and height must be the same as the values set for the server
        CANVAS_HEIGHT: 18,
        CANVAS_INITIAL_ZOOM: 50,
        CANVAS_MIN_ZOOM: 50,
        CANVAS_MAX_ZOOM: 1000,
        CANVAS_COLORS: ["#eeeeee", "red", "orange", "yellow", "green", "blue", "purple", "#614126", "white", "black"],
        CANVAS_ELEMENT_ID: "pixelCanvas",

        // optional onload()
        onload: function() {
            toastr["info"]("Select a color with the 1 - 9 keys\r\nPress 0 to erase", "Instructions");
            setTimeout(function() {
                toastr["info"]("Keep in mind, you have a 1 minute delay between each pixel you draw");
            }, 4000);
            setTimeout(function() {
                toastr["info"]("Most importantly, have fun! Full sourcecode is on my GitHub.");
            }, 8000);
        }
    };
    window.Pixel = Pixel;

    // toastr Notifications
    toastr.options = {
        "closeButton": false,
        "debug": false,
        "newestOnTop": false,
        "progressBar": false,
        "positionClass": "toast-bottom-center",
        "preventDuplicates": true,
        "onclick": null,
        "showDuration": "300",
        "hideDuration": "100",
        "timeOut": "3500",
        "extendedTimeOut": "100",
        "showEasing": "swing",
        "hideEasing": "linear",
        "showMethod": "fadeIn",
        "hideMethod": "fadeOut"
    };

})(window);
