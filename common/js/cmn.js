(function($){
	$(window).on('load',function(){
		$('body').removeClass('loading');
		setTimeout(function(){
			$('body').addClass('loaded');
		},0);
	});
})(jQuery);



//
// サブメニュー設定
//
// SP : アコーディオンメニュー
// PC : メガメニュー
//
(function($){
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
})(jQuery);
