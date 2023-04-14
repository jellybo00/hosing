$(function(){
    // --------------- 맨위로 버튼
    $( '.go_top button' ).click( function() {
        $( 'html, body' ).animate( { scrollTop : 0 },400 );
        return false;
    } );


    // --------------- 웹 gnb호버시 메뉴
    $('#gnb .depth_cont').on('mouseover', function() {
        $(this).addClass('on');
    })
    $('#gnb .depth_cont ').on('mouseleave', function() {
        $(this).removeClass('on');
    })

    // --------------- 라인배너
    $('.line_banner .close_btn').on('click',function(){
        $('.line_banner').slideUp()
    })



    $('.wish_btn').on('click',function(){
        $(this).toggleClass('on');
        
    })

    $('.hover_box .wish_btn').on('click',function(){
        $(this).parents('li').find('.wish_btn').toggleClass('on');
        
    })
})

$(document).mouseup(function (e){
    var fliterDown = $(".filter_sel");
    if(fliterDown.has(e.target).length === 0){
        fliterDown.removeClass("on");
    }
});
