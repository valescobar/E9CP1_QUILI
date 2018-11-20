$(function(){
    $(".article").eq(3).children(".article__body").children(".article__socialnetworks").children("li").last().html('<a href="http://www.pinterest.com">Pinterest<a>');

    $("a[href='#']").on("click", function(event){
        event.preventDefault();
    });

    var font=$(".header__main").children("h2").css("font-size");

    var doblefuente=parseInt(font) *2;
    $(".header__main").children("h2").css("font-size", doblefuente);

})
