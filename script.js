'use strict'

$('#convers').ionRangeSlider({
    min: 0, // минимальное значение
    max: 30, // максимальное значение
    from: 3, // предустановленное значение ОТ
    type: "single", // тип слайдера
    step: 5, // шаг слайдера
    skin: "round"
});

$('#budget').ionRangeSlider({
    min: 0, // минимальное значение
    max: 200000, // максимальное значение
    from: 60000, // предустановленное значение ОТ
    type: "single", // тип слайдера
    step: 20000, // шаг слайдера
    skin: "round"
});

$('#click').ionRangeSlider({
    min: 0, // минимальное значение
    max: 500, // максимальное значение
    from: 10, // предустановленное значение ОТ
    type: "single", // тип слайдера
    step: 100, // шаг слайдера
    skin: "round"
});

var width=screen.width;

if (width<=768){
    $("footer .call").attr("href", "https://api.whatsapp.com/send?phone=745333355566")
}

// console.log(width);
