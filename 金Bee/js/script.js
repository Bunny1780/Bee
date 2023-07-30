
$(document).ready(function(){
    $('button').click(function(){
        $('button').removeClass('act');
        $(this).addClass('act');
    });
    $('button:first-child').click(function(){
        $('.tab-page-wrap').removeClass('tab-page-wrap--switch');
        $('.mission-block-wrap').removeClass('mission-block-wrap--open');
        
    });
    $('button:last-child').click(function(){
        $('.tab-page-wrap').addClass('tab-page-wrap--switch');
        $('.mission-block-wrap').addClass('mission-block-wrap--open');
    });


});