$(function () {
    $('.btn').popover();
    $('.activeToggle').click(function(){
        var srcStr = $(this).find('img').attr('src'); //选中元素的子元素img的src值
        $(this).addClass('active').siblings().removeClass('active');
        console.log(srcStr)
        //$(this).find('img').attr('src', '111.png') //可以用这个方法设置img的src属性的值
    })
})