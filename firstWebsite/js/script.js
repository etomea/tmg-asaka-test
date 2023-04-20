
//お知らせ
function GethashID (hashIDName){
	if(hashIDName){

		//タブ設定
		$('.tab li').find('a').each(function() { //タブ内のaタグ全てを取得
			var idName = $(this).attr('href'); //タブ内のaタグのリンク名（例）#lunchの値を取得	
			if(idName == hashIDName){ //リンク元の指定されたURLのハッシュタグ（例）http://example.com/#lunch←この#の値とタブ内のリンク名（例）#lunchが同じかをチェック
				var parentElm = $(this).parent(); //タブ内のaタグの親要素（li）を取得
				$('.tab li').removeClass("active"); //タブ内のliについているactiveクラスを取り除き
				$(parentElm).addClass("active"); //リンク元の指定されたURLのハッシュタグとタブ内のリンク名が同じであれば、liにactiveクラスを追加
				//表示させるエリア設定
				$(".area").removeClass("is-active"); //もともとついているis-activeクラスを取り除き
				$(hashIDName).addClass("is-active"); //表示させたいエリアのタブリンク名をクリックしたら、表示エリアにis-activeクラスを追加	
			}
		});
	}
}
//タブをクリックしたら
$('.tab a').on('click', function() {
	var idName = $(this).attr('href'); //タブ内のリンク名を取得	
	GethashID (idName);//設定したタブの読み込みと
	return false;//aタグを無効にする
});
// 上記の動きをページが読み込まれたらすぐに動かす
$(window).on('load', function () {
    $('.tab li:first-of-type').addClass("active"); //最初のliにactiveクラスを追加
    $('.area:first-of-type').addClass("is-active"); //最初の.areaにis-activeクラスを追加
	var hashName = location.hash; //リンク元の指定されたURLのハッシュタグを取得
	GethashID (hashName);//設定したタブの読み込み
});




// heder menu
$('#hamburger').on('click', function(){
  $('.icon').toggleClass('close');
  $('.sm').slideToggle();
  });




$('.slider-box').slick({
// autoplay: true,//自動的に動き出すか。初期値はfalse。
autoplay: false,//自動的に動き出すか。初期値はfalse。
infinite: true,//スライドをループさせるかどうか。初期値はtrue。
slidesToShow: 3,//スライドを画面に3枚見せる
slidesToScroll: 3,//1回のスクロールで3枚の写真を移動して見せる
prevArrow: '<div class="slick-prev"></div>',//矢印部分PreviewのHTMLを変更
nextArrow: '<div class="slick-next"></div>',//矢印部分NextのHTMLを変更
dots: true,//下部ドットナビゲーションの表示
responsive: [
  {
  breakpoint: 769,//モニターの横幅が769px以下の見せ方
  settings: {
    slidesToShow: 2,//スライドを画面に2枚見せる
    slidesToScroll: 2,//1回のスクロールで2枚の写真を移動して見せる
  }
},
{
  breakpoint: 426,//モニターの横幅が426px以下の見せ方
  settings: {
    slidesToShow: 1,//スライドを画面に1枚見せる
    slidesToScroll: 1,//1回のスクロールで1枚の写真を移動して見せる
  }
}
]
});


// TMGグループバナー
$('.tmg-slider').slick({
autoplay: true, // 自動でスクロール
autoplaySpeed: 0, // 自動再生のスライド切り替えまでの時間を設定
speed: 5000, // スライドが流れる速度を設定
cssEase: "linear", // スライドの流れ方を等速に設定
slidesToShow: 4, // 表示するスライドの数
swipe: false, // 操作による切り替えはさせない
arrows: false, // 矢印非表示
pauseOnFocus: false, // スライダーをフォーカスした時にスライドを停止させるか
pauseOnHover: false, // スライダーにマウスホバーした時にスライドを停止させるか
responsive: [
  {
    breakpoint: 750,
    settings: {
      slidesToShow: 3, // 画面幅750px以下でスライド3枚表示
    }
  }
]
});

// footer menu
//アコーディオンをクリックした時の動作
$('.title').on('click', function() {//タイトル要素をクリックしたら
var findElm = $(this).next(".box");//直後のアコーディオンを行うエリアを取得し
$(findElm).slideToggle();//アコーディオンの上下動作

if($(this).hasClass('close')){//タイトル要素にクラス名closeがあれば
$(this).removeClass('close');//クラス名を除去し
}else{//それ以外は
$(this).addClass('close');//クラス名closeを付与
}
});

//ページが読み込まれた際にopenクラスをつけ、openがついていたら開く動作※不必要なら下記全て削除
$(window).on('load', function(){
$('.accordion-area li:first-of-type section').addClass("close"); //accordion-areaのはじめのliにあるsectionにopenクラスを追加
$(".open").each(function(index, element){ //openクラスを取得
var Title =$(element).children('.title'); //openクラスの子要素のtitleクラスを取得
$(Title).addClass('close');       //タイトルにクラス名closeを付与し
var Box =$(element).children('.box'); //openクラスの子要素boxクラスを取得
$(Box).slideDown(500);          //アコーディオンを開く
});
});




// //ページトップリンク
//スクロールした際の動きを関数でまとめる
function PageTopAnime() {
  var scroll = $(window).scrollTop();
  if (scroll >= 200){//上から200pxスクロールしたら
    $('#page-top').removeClass('DownMove');//#page-topについているDownMoveというクラス名を除く
    $('#page-top').addClass('UpMove');//#page-topについているUpMoveというクラス名を付与
  }else{
    if($('#page-top').hasClass('UpMove')){//すでに#page-topにUpMoveというクラス名がついていたら
      $('#page-top').removeClass('UpMove');//UpMoveというクラス名を除き
      $('#page-top').addClass('DownMove');//DownMoveというクラス名を#page-topに付与
    }
  }
}

// 画面をスクロールをしたら動かしたい場合の記述
$(window).scroll(function () {
  PageTopAnime();/* スクロールした際の動きの関数を呼ぶ*/
});

// ページが読み込まれたらすぐに動かしたい場合の記述
$(window).on('load', function () {
  PageTopAnime();/* スクロールした際の動きの関数を呼ぶ*/
});

// #page-topをクリックした際の設定
$('#page-top a').click(function () {
    $('body,html').animate({
        scrollTop: 0//ページトップまでスクロール
    }, 500);//ページトップスクロールの速さ。数字が大きいほど遅くなる
    return false;//リンク自体の無効化
});


