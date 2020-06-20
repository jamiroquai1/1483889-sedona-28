
(function () {
    var form = document.querySelector('.form_order')
    var openModalbtn = document.querySelector('.section_order_button');
    form.classList.remove('form_order_active');
    openModalbtn.addEventListener('click', function (evt) {
        evt.preventDefault();
        form.classList.toggle('form_order_active');
    })
}());