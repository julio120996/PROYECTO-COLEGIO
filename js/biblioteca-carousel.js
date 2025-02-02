function rotate() {
    let lastChild = $('.container-3 .slider div:last-child').clone();
    $('.container-3 .slider div:last-child').remove();
    $('.container-3 .slider').prepend(lastChild);
}
setInterval(rotate, 4000);