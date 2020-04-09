jQuery(function($){
	$(window).on('load',function(){
		$('body').removeClass('loading');
		setTimeout(function(){
			$('body').addClass('loaded');
		},0);
	});
});



//
// サブメニュー設定
//
// SP : アコーディオンメニュー
// PC : メガメニュー
//
jQuery(function($){
	$(window).on('load',function(){
		$('#gnav .gnav-nav > li').each(function(){
			set($(this));
		});
	});
	function set($th){
		if($th.find(' > p').length>0){
			var $div=$th.find(' > .gnav-nav-sub');
			$th.find(' > p').on('click',function(){
				if($('#gnav .gnav-hamburger').css('display')!='none'){
					if($div.length>0){
						if($th.hasClass('open')){
							$th.removeClass('open');
						}else{
							$th.addClass('open');
						}
						return false;
					}
				}
			});
		}
	}
});

/*////////////////////////////////////////////////////////////////////
ニュースのタブメニュー切替
////////////////////////////////////////////////////////////////////*/
jQuery(function($){
	if($('.news-list ul.nav').length>0){
		$('.news-list ul.nav .tab_label').on('click',function(){
			var $th = $(this).index();
			$('.news-list ul.nav .tab_label').removeClass('active');
			$('.news-list ul.list').removeClass('active');
			$(this).addClass('active');
			$('.news-list ul.list').eq($th).addClass('active');
		});
		// #xx-newsで初期タブ変更
		hash=window.location.hash;
		if(hash!=''){
			if($('#news '+hash).length>0){
				$('#news > ul').removeClass('active');
				$('#news '+hash).addClass('active');
				$('#news .nav li').removeClass('active');
				$('#news .nav li'+hash.replace('#','.')).addClass('active');
			}
		}
	}
});
