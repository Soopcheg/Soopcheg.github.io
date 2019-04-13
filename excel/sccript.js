$("#download").click(function () {
    $("#tableId").table2excel({
        filename: "new.xls"
    });
});

let mas = ["59:01:4413627:37",
    "59:01:4411368:8",
    "59:32:3480001:1665"
]

for (let x = 0; x < mas.length; x++) {
    let url = "https://egrp365.ru/list5.php?id=" + mas[x] + "&link=page"
    $.ajax({
        url: url,
        type: "GET",
        success: function (res) {
            let result = $(res);
            console.log(result)
            $(".response-hidden").html(result);
            $('tr:last').after('<tr></tr>')
            $('tr:last').prepend('<td class="response-cad"></td>').append('<td class="response-add"></td>')
            $(".response-cad").eq(x).html($(".response-hidden .rs_kad_number a"));
            // $(".response-cad").eq(x).html(mas[x]);
            $(".response-add").eq(x).html($(".response-hidden .rs_address a"));
        },

    });
}