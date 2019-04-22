$(function () {
    $('.btn').popover();
    $('.activeToggle').click(function(){
        $(this).addClass('active').siblings().removeClass('active')
    })
})