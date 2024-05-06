$(document).ready(function() {
    var envelope = $('#envelope');
    var btn_open = $("#open");
    var btn_reset = $("#reset");
    var mensaje = $("#mensaje")[0]; // Obtenemos el elemento de mensaje
    var audio = $("#miAudio")[0]; // Obtenemos el elemento de audio

    envelope.click(function() {
        open();
    });
    btn_open.click(function() {
        open();
        mensaje.classList.add("aparecer"); // Agregamos la clase para la animación del mensaje
        audio.play(); // Reproducimos el audio
    });
    btn_reset.click(function() {
        close();
        mensaje.classList.remove("aparecer"); // Removemos la clase para la animación del mensaje
    });

    function open() {
        envelope.addClass("open")
           .removeClass("close");
    }
    function close() {
        envelope.addClass("close")
           .removeClass("open");
    }
});