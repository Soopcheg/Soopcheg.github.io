'use strict'

$('#convers').ionRangeSlider({
    min: 0, // минимальное значение
    max: 30, // максимальное значение
    from: 3, // предустановленное значение ОТ
    type: "single", // тип слайдера
    step: 1, // шаг слайдера
    // grid: "true",
    // grid_snap: "true",
    skin: "round"
});

$('#budget').ionRangeSlider({
    min: 1000, // минимальное значение
    max: 100000, // максимальное значение
    from: 60000, // предустановленное значение ОТ
    type: "single", // тип слайдера
    step: 1, // шаг слайдера
    // grid: "true",
    // grid_snap: "true",
    skin: "round"
});

$('#click').ionRangeSlider({
    min: 20, // минимальное значение
    max: 1500, // максимальное значение
    from: 10, // предустановленное значение ОТ
    type: "single", // тип слайдера
    step: 1, // шаг слайдера
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

function showRequests() {
    function isInteger(num) {
        return (num ^ 0) === num;
    }

    function delSpaces(str) {
        str = str.replace(/\s/g, '');
        return parseFloat(str);
    }

    function cutNumber(number) {
        if (!isInteger(number))
            return number.toFixed(2);
        return number;
    }

    convers = parseFloat(values["0"].innerText);
    budget = delSpaces(values["1"].innerText);
    click = delSpaces(values["2"].innerText);
    var countClick = budget / click;
    now = cutNumber(countClick * convers / 100);
    withbot = cutNumber(countClick * 65 / 100);
    dif = cutNumber(withbot - now);
    $("#requests__now").text(now);
    $("#requests__withbot").text(withbot);
    $(".requests__dif").text(dif + " заявок");
}

showRequests();

window.onload = function () {
    $(".uselanding form").change(function (e) {
        showRequests();
    });

    var width = screen.width;

    if (width <= 768) {
        $("footer .call").attr("href", "https://api.whatsapp.com/send?phone=745333355566")
    }

}