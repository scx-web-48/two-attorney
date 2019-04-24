$(function () {
    $('.btn').popover();
    //切换效果
        //给元素添加上  data-select='select'  自定义属性，就可以调用这个方法
    $("[data-select='select']").click(function(){
        var srcStr = $(this).find('img').attr('src'); //选中元素的子元素img的src值
        $(this).addClass('active').siblings("[data-select='select']").removeClass('active');
        console.log(srcStr)
        //$(this).find('img').attr('src', '111.png') //可以用这个方法设置img的src属性的值
    });
    var swiper = new Swiper('.swiper-container', {
        slidesPerView: 5,
        // spaceBetween: 20,
        // loopAdditionalSlides : 2,
        loopFillGroupWithBlank: true,
        centeredSlides: true,
        loop: true,
        slideToClickedSlide: false,
        snapOnRelease: false,
        navigation: {
            nextEl: '.swiper-btn-next',
            prevEl: '.swiper-btn-prev',
        },
        // scrollbar: {
        //     el: '.swiper-scrollbar',
        //     dragSize: 300,
        //     draggable: true,
        // },
        pagination: {
            el: '.swiper-scrollbar',
            clickable: true,
          },
      });
      
})