let slidePosition = 0;
const slides = document.getElementsByClassName('carousel__item');
const totalSlides = slides.length;

document.
  getElementById('carousel__button--next')
  .addEventListener("click", function() {
    moveToNextSlide();
  });
document.
  getElementById('carousel__button--prev')
  .addEventListener("click", function() {
    moveToPrevSlide();
  });

function updateSlidePosition() {
  for (let slide of slides) {
    slide.classList.remove('carousel__item--visible');
    slide.classList.add('carousel__item--hidden');
  }

  slides[slidePosition].classList.add('carousel__item--visible');
}

function moveToNextSlide() {
  if (slidePosition === totalSlides - 1) {
    slidePosition = 0;
  } else {
    slidePosition++;
  }

  updateSlidePosition();
}

function moveToPrevSlide() {
  if (slidePosition === 0) {
    slidePosition = totalSlides - 1;
  } else {
    slidePosition--;
  }

  updateSlidePosition();
}


let slidePosition = 0;
const slides = document.getElementsByClassName('carousel__item');
const totalSlides = slides.length;

document.
  getElementById('carousel__button--next')
  .addEventListener("click", function() {
    moveToNextSlide();
  });
document.
  getElementById('carousel__button--prev')
  .addEventListener("click", function() {
    moveToPrevSlide();
  });

function updateSlidePosition() {
  for (let slide of slides) {
    slide.classList.remove('carousel__item--visible');
    slide.classList.add('carousel__item--hidden');
  }

  slides[slidePosition].classList.add('carousel__item--visible');
}

function moveToNextSlide() {
  if (slidePosition === totalSlides - 1) {
    slidePosition = 0;
  } else {
    slidePosition++;
  }

  updateSlidePosition();
}

function moveToPrevSlide() {
  if (slidePosition === 0) {
    slidePosition = totalSlides - 1;
  } else {
    slidePosition--;
  }

  updateSlidePosition();
}

        $(document).ready(function () {
            $("h4#barra").click(function () {
                $("nav.menu_mobile ul").slideToggle("slow");
            });
            $("#submit").click(OnSubmitFormCrud);
        });

        function OnSubmitFormCrud() {
            var name = $("#name").val()
            var cpf = $("#cpf").val()
            var telefone = $("#telefone").val()
            var email = $("#email").val()


            $.ajax({
                url: "https://crud-back-end-test.herokuapp.com/api/clientes",
                type: 'post',
                data: {
                    nome: name,
                    cpf: cpf,
                    telefone: telefone,
                    email: email
                },
                beforeSend: function () {
                    $("#submit").html("ENVIANDO...");
                }
            })
                .done(function (msg) {
                    $("#submit").html("Enviar");
                    console.log(msg)
                    alert(JSON.stringify(msg.message));
                })
                .fail(function (jqXHR, textStatus, msg) {
                    alert(msg);
                });
        }
