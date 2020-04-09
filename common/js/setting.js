// ===========================
//
// 基本どのサイトでも設定
//
(function($){
	$(window).on('DOMContentLoaded',function(){
		// http://もしくはhttps://が付いている、または、PDFファイルはtarget=_blankさせる
		var url=location.href.match(/(http:\/\/.+?|https:\/\/.+?)\//)[0];
		$('a[href^="http://"],a[href^="https://"],a[href$=".pdf"]').not('a[href*=gusdecool]').not('a[href^="'+url+'"]').attr('target','_blank');
	});
})(jQuery);

// ===========================
//
// 各サイト設定
//
(function($){
	$(window).on('DOMContentLoaded',function(){
		// ハンバーガーメニュー
		$('#gnav').hamburgerMenu({
			inner:$('#gnav .gnav-inner'),
			hamburger:$('#gnav .gnav-hamburger'),
			closeBtn:$('#gnav .gnav-sp-close'),
		});
	});
	// スムーズスクロール
	$(window).on('load',function(){
		$.SmoothScroll({
			duration:1000,
			easing:'easeOutQuint',
			header:$('header'),
		});
	});
})(jQuery);
