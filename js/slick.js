

// トップページスライドショー
// $('.mainimg-slick').slick({
// 	autoplay: true,
// 	dots: true,				//丸いページナビボタンを表示
// 	arrows: false,			//左右の矢印
// 	autoplaySpeed: 4000,	//切り替えのスピード。デフォルトは3000。
// 	pauseOnHover: false,	//マウスオン時にスライドショーをストップするか。
// });

const pics_src = ["images/1.jpg","images/2.jpg","images/3.jpg"];
let num = -1;

function slideshow_timer(){
  if (num === 2){
    num = 0;
  } 
  else {
    num ++;
  }
  document.getElementById("mypic").src = pics_src[num];
}

setInterval(slideshow_timer, 3000);