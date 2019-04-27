'use strict'

$('#convers').ionRangeSlider({
    min: 0, // минимальное значение
    max: 30, // максимальное значение
    from: 3, // предустановленное значение ОТ
    type: "single", // тип слайдера
    step: 5, // шаг слайдера
    // grid: "true",
    // grid_snap: "true",
    skin: "round"
});

$('#budget').ionRangeSlider({
    min: 0, // минимальное значение
    max: 200000, // максимальное значение
    from: 60000, // предустановленное значение ОТ
    type: "single", // тип слайдера
    step: 20000, // шаг слайдера
    // grid: "true",
    // grid_snap: "true",
    skin: "round"
});

$('#click').ionRangeSlider({
    min: 0, // минимальное значение
    max: 500, // максимальное значение
    from: 10, // предустановленное значение ОТ
    type: "single", // тип слайдера
    step: 100, // шаг слайдера
    // grid: "true",
    // grid_snap: "true",
    skin: "round"
});

var convers,
    budget,
    click,
    now,
    withbot,
    dif;

var values = $(".uselanding form .irs-single");

window.onload = function () {
    $(".uselanding form").change(function (e) {
        convers = parseFloat(values["0"].innerText);
        budget = parseFloat(values["1"].innerText) * 1000;
        click = parseFloat(values["2"].innerText);
        now = budget / click * convers / 100;
        withbot = budget / click * convers / 10;
        dif = withbot - now;
        $("#requests__now").text(now);
        $("#requests__withbot").text(withbot);
        $(".requests__dif").text(dif + "заявок");
        console.log(budget + " " + convers + " " + click)
        console.log(now + " " + withbot + " " + dif)
    });

    var width = screen.width;

        if (width <= 768) {
            $("footer .call").attr("href", "https://api.whatsapp.com/send?phone=745333355566")
        }

}