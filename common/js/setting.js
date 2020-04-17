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
		/*////////////////////////////////////////////////////////////////////
		StickyContent、SmoothScrollで使用する高さを測定する機能設定
		////////////////////////////////////////////////////////////////////*/
		$.getHeight.header=function(){
			//return parseInt($('#container').css('padding-top'));
			return $('header .hd-logo').outerHeight()+parseInt($('header').css('top'));
		}
		//ディフォルトのままなので無くてもOK
		$.getHeight.footer=function(){
			return $('footer').outerHeight();
		}
		//ディフォルトのままなので無くてもOK
		$.getHeight.body=function(){
			return $('#container').outerHeight();
		}
		
		/*////////////////////////////////////////////////////////////////////
		ハンバーガーメニュー
		////////////////////////////////////////////////////////////////////*/
		$('#gnav').hamburgerMenu({
			inner:$('#gnav .gnav-inner'),
			hamburger:$('#gnav .gnav-hamburger'),
			closeBtn:$('#gnav .gnav-sp-close'),
		});
		
		/*////////////////////////////////////////////////////////////////////
		スティッキーヘッダー
		////////////////////////////////////////////////////////////////////*/
		$('header').StickyContent({
			hide:{
				header:false,						// ヘッダーが出てきたとき表示 // ディフォルトのままなので無くてもOK
				scrollUp:false,					// 上にスクロール中は表示 // ディフォルトのままなので無くてもOK
				scrollDown:true,				// 下にスクロール中は非表示
				scrollTimeout:3000,			// スクロールが止まった場合、3秒後表示（1/1000秒）
			},
			stickyOff:{
				header:true,						// ヘッダーが画面に出てきたときにsticky機能をオフにする
				footer:false,						// フッターが画面に出てきたときにsticky機能をオフにしない // ディフォルトのままなので無くてもOK
			},
		});

		/*////////////////////////////////////////////////////////////////////
		スティッキーページトップ
		////////////////////////////////////////////////////////////////////*/
		$('#pagetop').StickyContent({
			hide:{
				header:true,						// ヘッダーが出てきたとき非表示
				scrollUp:false,					// 上にスクロール中は表示 // ディフォルトのままなので無くてもOK
				scrollDown:false,				// 下にスクロール中は表示 // ディフォルトのままなので無くてもOK
				scrollTimeout:0,				// 0の場合は、スクロールが止まった場合も非表示のまま
			},
			stickyOff:{
				header:false,						// ヘッダーが画面に出てきたときにsticky機能をオフにしない // ディフォルトのままなので無くてもOK
				footer:true,						// フッターが画面に出てきたときにsticky機能をオフにする
			},
		});
	});
	$(window).on('load',function(){
		// スムーズスクロール
		$.SmoothScroll({
			first:'scroll',
			duration:1000,
			easing:'easeOutQuint',
		});
		// コンテンツスクロール
		//$('#container').ContentsScroll();
	});

})(jQuery);
