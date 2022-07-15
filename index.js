//* Funcion para mostrar tooltip
$(function () {
    $('[data-bs-toggle="tooltip"]').tooltip()
})

//* Funcion para mostrar una notificacion
var option =
{
    animation: true,
    delay: 2000
};

function Toasty() {
    var toastHTMLElement = document.getElementById('liveToast');

    var toastElement = new bootstrap.Toast(toastHTMLElement, option);

    toastElement.show();
}