$(function(){
	$( ".main-mobile" ).click(function() {
		if ($(".contain--navmobile").css("display")=="none") {
			$(".contain--navmobile").css("display","block");
		}else{
			$(".contain--navmobile").css("display","none");
		};
});
	$( ".second--parent" ).click(function() {
		if ($(".JS-menu").css("display")=="none") {
	  		$(".JS-nomenu").css("display","none");
	  		$(".JS-menu").css("display","block");
	  	}else{
			$(".JS-nomenu").css("display","block");
	  		$(".JS-menu").css("display","none");
	  	};
});
}); 