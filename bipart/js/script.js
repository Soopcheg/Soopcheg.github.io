'use strict';

window.onload = function () {

    // inView('.coin1').on('enter', function (el) {
    //     el.style.opacity = 0.5;
    // })

    // inView('.plus').on('enter', function(el){
    //     setInterval(function(){
    //         el.style['boxShadow'] ='0 0 0 10px #dafbf1';
    //     }, 1000)
    // })

    function GetSingle(selector) {
        return document.querySelector(selector);
    }

    function GetAll(selector) {
        return document.querySelectorAll(selector);
    }

    function Validation() {
        this.validateName = function (name) {
            var ren = /([а-яёa-z]{2,}[\-\s]?)/;
            return ren.test(String(name).toLowerCase());
        }

        this.validatePhone = function (phone) {
            var rep = /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/;
            return rep.test(phone);
        }        

        this.validateEmail = function (email) {
            var ree = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return ree.test(String(email).toLowerCase());
        }
    }

    var valid = new Validation();

    GetAll('.quick_reg-top input, .quick_reg-bottom input').forEach(function (item) {
        item.onchange = function () {
            var selector = '.' + item.parentNode.parentNode.classList[0] + ' input[name="' + item.getAttribute('name') + '"]';

            var getField = GetSingle(selector);

            if (getField.getAttribute('name') === 'firstname') 
                valid.validateName(getField.value) ?  getField.classList.remove('input-error') : getField.classList.add('input-error');
            else if (getField.getAttribute('name') === 'phone') 
                valid.validatePhone(getField.value) ?  getField.classList.remove('input-error') : getField.classList.add('input-error');
            else if (getField.getAttribute('name') === 'email')
                valid.validateEmail(getField.value) ?  getField.classList.remove('input-error') : getField.classList.add('input-error');
        }
    })

    GetAll('.quick_reg-top button, .quick_reg-bottom button').forEach(function (item) {
        item.onclick = function () {
            var check = 0;
            var input = GetAll('.' + item.parentNode.parentNode.classList[0] + ' input');
            input.forEach(function (item) {
                if ((item.value === '') || (!(valid.validateName(item.value)))) {
                    item.classList.add('input-error')
                } else {
                    check++;
                }
            })
            if (check === input.length) {
                var steps = GetAll('.step');
                steps[0].classList.remove('current');
                steps[2].classList.remove('current');
                steps[1].classList.add('current');
                steps[3].classList.add('current');
                GetAll('.quick_reg-top form, .quick_reg-bottom form').forEach(function (item) {
                    item.childNodes.forEach(function (item) {
                        item.remove();
                    })
                    var newElem = document.createElement('div');
                    newElem.innerText = "Рот ебал";
                    newElem.style.margin = 'auto';
                    item.appendChild(newElem, item);
                })
            }
        }
    })

    function Slider() {
        var button = GetAll('.pick button')
        var current = parseInt(button.length / 2);
        var items = GetAll('.slider .block')

        function Left() {
            if (current) {
                button[current].classList.remove('active');
                items[current].className = "right_item block"
                if (current < items.length - 1)
                    items[current + 1].className = "right_item-hide block"
                current--;
                button[current].classList.add('active');
                items[current].className = "center_item block"
                if (current != 0)
                    items[current - 1].className = "left_item block"
            }
        }

        function Right() {
            if (current < button.length - 1) {
                button[current].classList.remove('active');
                items[current].className = "left_item block"
                if (current != 0)
                    items[current - 1].className = "left_item-hide block"
                current++;
                button[current].classList.add('active');
                items[current].className = "center_item block"
                if (current < items.length - 1)
                    items[current + 1].className = "right_item block"
            }
        }

        document.getElementById('left').onclick = function () {
            Left();
        }

        document.getElementById('right').onclick = function () {
            Right();
        }

        button.forEach(function (elem, number) {
            elem.onclick = function () {
                do {
                    if (current > number) {
                        Left();
                    } else {
                        Right();
                    }
                } while (current != number)
            }
        })
    }

    Slider();
}