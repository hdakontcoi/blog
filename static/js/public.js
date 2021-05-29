/**
 * Created by Administrator on 2018/4/13.
 */
$(document).ready(function(){
    //导航滑过动画
    $('.nav>li').hover(function() {
        //$(this).find('ul').slideDown(200);
    }, function() {
        //$(this).find('ul').slideUp(200);
    });
    //分类列表动画
    $('.plinks li').hover(function() {
        $(this).addClass('animated swing');
    }, function() {
        $(this).removeClass('animated swing');
    });
    //导航固定顶部
    var nav=$("nav"); //得到导航对象
    var win=$(window); //得到窗口对象
    var sc=$(document);//得到document文档对象。
    win.scroll(function(){
        if(sc.scrollTop()>=100){
            nav.addClass("fixed-nav");
        }else{
            nav.removeClass("fixed-nav");
        }
    })
    //项目展示区分奇偶
    var itemList = $('.item-list-area ul li');
    for(var i = 0;i<itemList.length;i++){
        if(i%2 == 0){
            $(itemList[i]).find('.port-7').addClass('effect-3');//奇数
        }else{
            $(itemList[i]).find('.port-7').addClass('effect-1');//偶数
        }
    }
    //遍历评论区分类
    var wordsList = $('.words-ul-area>li');
    for(var i = 0;i<wordsList.length;i++){
        if(i%2 == 0){
            $(wordsList[i]).addClass('leave-area');//奇数
        }else{
            $(wordsList[i]).addClass('cut-rule');//偶数
        }
    }
})