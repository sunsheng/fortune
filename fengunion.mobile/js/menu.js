/**
 * Created by wjp on 2017/1/24.
 */
$(function(){
    menuFn()
})
/*右侧菜单*/
function menuFn(){
    var slideout = new Slideout({
        'panel': document.getElementById('panel'),
        'menu': document.getElementById('menu'),
        'padding': 414,
        'tolerance': 70,
        'side':"right",
        "duration":500,
        "touch":false
    });
    $(".menuBtn").click(function() {
        $("#menu").show();
        slideout.open();
    })
    $(".closeBtn").click(function() {
        slideout.close();
        slideout.once('close', function() {
            $("#menu").hide();
        });


    })
}