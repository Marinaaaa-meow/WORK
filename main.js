$(function() {
  let menuMainItem = $('.menuMain__item');


    menuMainItem.on('click', function() {
        let $this = $(this);


        menuMainItem.removeClass('active');
        $this.addClass('active');
        blocks.css('display', 'none');
     });
});