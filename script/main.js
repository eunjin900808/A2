$(function(){
    // 메뉴

    $(".sub, .sub_bg").hide();

    $(".main > li, .sub_bg").hover(function(){
        $(".sub, .sub_bg").stop().slideDown();
    }, function(){
        $(".sub, .sub_bg").stop().slideUp();
    })//hover

    // 이미지슬라이드

    var n =0; //0 left: 0    1 left: -1200px   2 left: -2400px

    setInterval(function(){
        if(n == 2){
            n=0;
        }else{
            n++;
        }//if
        console.log(n);

        pos = n *(-1200) + "px";
        $(".left_move").animate({left: pos}, 500);
        // $(".left_move").animate({left: n * (-1200) + "px"}, 500);
    }, 2000);

    //팝업

    $(".p_click").click(function(){
        $(".modal, .popup").show()
    })//click

    $(".close").click(function(){
        $(".modal, .popup").hide()
    })


})//end