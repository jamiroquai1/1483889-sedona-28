function myFunction() {
    var element = document.querySelector(".modal");
    element.classList.toggle("active");
}

// пытаюсь сделать валидность формы, если одно из полей не заполнено
var formorder = document.querySelector(".form_order");
var dates = document.querySelector(".form_order_item_control");
var person = document.querySelector(".form_order_item_control_person");


formorder.addEventListener("submit", function (evt) {
    if (!dates.value || !person.value) {
      evt.preventDefault();
    }
  });

