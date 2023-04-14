$(function(){
    
    // ------------------ 베스트 탭에 슬라이드


   
    let tagOptions = {
        slidesPerView: 'auto',
        slidesPerGroup:2,
        preventClicks: true,
        preventClicksPropagation: false,
        observer: true,
        observeParents: true,
        touchRatio: 0,
        navigation: true,
        navigation: {   
            nextEl: ".tag-next",
            prevEl: ".tag-prev",
        },
        breakpoints: {
            850: {
                navigation: false,
                
            }
        }
    };

    var viewTagSlider = new Swiper('#tag_slider', tagOptions); 
    var popTagSlider = new Swiper('#pop_tag_slider', tagOptions); 


})