$(document).ready(function(){
    $('nav a').click(function(e){
        var href = $(this).attr('href');
        var pos = $(href).offset();

        $('body').animate(function(){
            scrollTop: pos.top;
        },500);
        e.preventDefault();
    });
});

$(document).ready(function(){
    $('#form1 input[type=button]').click(function(){
        var amount1 = parseInt($('input#amount_1').val());
        var amount2 = parseInt($('input#amount_2').val());
        var sign = $('input[name=sign]:checked').val();
        var total = 0;

        switch (sign){
            case 'plus':
                total = amount1 + amount2;
                break;
            case 'minus':
                total = amount1 - amount2;
                break;
            case 'multiply':
                total = amount1 * amount2;
                break;
            case 'divide':
                total = amount1 / amount2;
                break;
        }

        $('#form1 .total span').text(total);
    });
    $('#form2 input[type=button]').click(function(){
        var total = 0;
        var expression = toString($('input#expression').val());
        var exp = expression.split('+');
        alert(exp);

        $('#form2 .total span').text(total);
    });
});