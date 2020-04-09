/*
// ===========================
//
// 基本どのサイトでも設定
//
jQuery(function($){
	// リンクがページ内リンクの場合、smoothScrollを機能させる
	var path=location.pathname+location.search;
	$('a[href^="'+path+'"]').each(function(){
		var href=$(this).attr('href');
		$(this).attr('href',href.replace(path,''));
	});
	// http://もしくはhttps://が付いている、または、PDFファイルはtarget=_blankさせる
	var url=location.href.match(/(http:\/\/.+?|https:\/\/.+?)\//)[0];
	$('a[href^="http://"],a[href^="https://"],a[href$=".pdf"]').not('a[href*=gusdecool]').not('a[href^="'+url+'"]').attr('target','_blank');
});
*/

// ===========================
//
// 各サイト設定
//
jQuery(function($){
	// ハンバーガーメニュー
	$('#gnav').hamburgerMenu({
		inner:$('#gnav .gnav-inner'),
		hamburger:$('#gnav .gnav-hamburger'),
		closeBtn:$('#gnav .gnav-sp-close'),
	});
	// スムーズスクロール
	$(window).on('load',function(){
		$('a[href^="#"]').SmoothScroll({
			duration:1000,
			easing:'easeOutQuint',
			header:$('header'),
		});
	});
});