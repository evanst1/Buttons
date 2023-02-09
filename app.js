function increaseFontSizeBy1px() {
    txt = document.getElementById('b');
    style = window.getComputedStyle(txt, null).getPropertyValue('font-size');
    currentSize = parseFloat(style);
    txt.style.fontSize = (currentSize + 1) + 'px';
}

$(function(){
    $('.icon').appendTo('.plus-menu').addClass('btn');
    $('.sociais a').appendTo('.plus-menu').addClass('btn');

    $('.plus').not('.plus.close').on('click','i.fa-plus',function(){
        $(this).parents('.plus').addClass('active');
        setTimeout(function(){
            $('.plus').addClass('close')
        },500);
    });

    $(document).on('click','.close i.fa-plus',function(){
        $(this).parents('.close').removeClass('active');
        setTimeout(function(){
            $('.plus').removeClass('close')
        },500);
    });

$('select').on('change',function(){
  var direction = $(this).val();
   $('.plus')
      .removeClass('to-top')
      .removeClass('to-right')
      .removeClass('to-bottom')
      .removeClass('to-left')
      .removeClass('explosion')
      .addClass(direction);
});
});