
$(function(){
// ------------------ 메인비주얼
    var swiper = new Swiper("#visual_slider", {
        spaceBetween: 45, 
        slidesPerView : 1,
        autoplay: {    
          delay: 4000, 
        },
        speed : 700,
        loop : true,   // 슬라이드 반복 여부
        loopAdditionalSlides : 1,
        navigation: {   
          nextEl: ".swiper-next",
          prevEl: ".swiper-prev",
        },
        pagination: {
            el: ".swiper-pagination",
        },
    });

  

// ------------------ 베스트 탭에 슬라이드
    var best_tab = new Swiper('#best_tab', {
        slidesPerView: 'auto',
        preventClicks: true,
        preventClicksPropagation: false,
        observer: true,
        observeParents: true,
        navigation: {   
            nextEl: ".best-next",
            prevEl: ".best-prev",
          },
          breakpoints: {
            850: {
                navigation: false,
                
            }
          }
    
    });
    
    var $tabSwiperItem = $('#best_tab .swiper-wrapper .swiper-slide button');
        $tabSwiperItem.click(function(){
        var target = $(this).parent();
        $tabSwiperItem.parent().removeClass('on')
        target.addClass('on');
        muCenter(target);
    })

    function muCenter(target){
        var tabwrap = $('#best_tab .swiper-wrapper');
        var targetPos = target.position();
        var box = $('#best_tab');
        var boxHarf = box.width()/2;
        var pos;
        var listWidth=0;
        
        tabwrap.find('.swiper-slide').each(function(){ listWidth += $(this).outerWidth(); })
        
        var selectTargetPos = targetPos.left + target.outerWidth()/2;
        if (selectTargetPos <= boxHarf) { // left
            pos = 0;
            $('.best-prev').addClass('no_cont ');

        }else if ((listWidth - selectTargetPos) <= boxHarf) { //right
            pos = listWidth-box.width();
            $('.best-next').addClass('no_cont');
        }else {
            pos = selectTargetPos - boxHarf;
        }
        
        setTimeout(function(){tabwrap.css({
            "transform": "translate3d("+ (pos*-1) +"px, 0, 0)",
            "transition-duration": "500ms"
        })}, 200);
    }




// ------------------ 배너 슬라이드
    let bannerOptions = {
        spaceBetween:0, 
        slidesPerView : 1,
        autoplay: {    
          delay: 4000, 
        },
        speed : 700,
        loop : true,   // 슬라이드 반복 여부
        loopAdditionalSlides : 1,
        pagination: {
            el: ".swiper-pagination",
        },
    };

    var bannerSlider1 = new Swiper('#banner_1', bannerOptions); 
    var bannerSlider2 = new Swiper('#banner_2', bannerOptions); 


// ------------------ 갤러리 리스트 탭  + 슬라이드
    var galleryList = new Swiper('#gallery_list_slider',{
        slidesPerView: 1,
        touchRatio: 0,
        spaceBetween:10, 
        autoHeight : true,
    });
    
    $('.gallery_tab button').on('click', function() {
      $(this).addClass('on').siblings().removeClass('on');
      galleryList.slideTo($('.gallery_tab button').index($(this)));
    });

// ------------------ 공간 슬라이드

    let webOptions = {};
    if ( $("#space_slider .swiper-slide").length >= 6 ) {
        webOptions = {
            slidesPerView: 5,
            slidesPerGroup:1,
            speed : 700,
            spaceBetween:30, 
            pagination: {
                el: ".swiper-pagination",
                // type: "progressbar",
            },
        }
        $('#space_slider').addClass('pd_70')
    } else {
        webOptions = {
            slidesPerView: 5,
            slidesPerGroup:1,
            speed : 700,
            spaceBetween:30, 
        }
        $('#space_slider').removeClass('pd_70')
    }

    let tabOptions = {};
    if ( $("#space_slider .swiper-slide").length >= 5 ) {
        tabOptions = {
            slidesPerView:4,
            slidesPerGroup:1,
            speed : 700,
            spaceBetween:20,
            pagination: {
                el: ".swiper-pagination",
                // type: "progressbar",
            },
        }
        $('#space_slider').addClass('pd_70')
    } else {
        tabOptions = {
            slidesPerView: 1,
            slidesPerGroup:1,
            speed : 700,
        }
        $('#space_slider').removeClass('pd_70')
    }


    let moOptions = {};
    if ( $("#space_slider .swiper-slide").length >= 2 ) {
        moOptions = {
            slidesPerView: 1,
            slidesPerGroup:1,
            speed : 700,
            pagination: {
                el: ".swiper-pagination",
                // type: "progressbar",
            },
        }
        $('#space_slider').addClass('pd_70')
    } else {
        moOptions = {
            slidesPerView: 1,
            slidesPerGroup:1,
            speed : 700,
        }
        $('#space_slider').removeClass('pd_70')
    }


    $(window).on('load resize', function () {
        if ($(window).innerWidth() < 851) {
            var spaceSlider = new Swiper('#space_slider', moOptions);
        } else if ($(window).innerWidth() < 1100){
            var spaceSlider = new Swiper('#space_slider', tabOptions);
        } else {
            var spaceSlider = new Swiper('#space_slider', webOptions);
        }
    })

    


})


