$(document).ready(function (){
	$(".how-it-works .image").on("inview", function (){
		$(".how-it-works .image .request").addClass("visible");
		setTimeout(function(){
			$(".how-it-works .image .response").addClass("visible");
		}, 500);
	});
	
	$(".client-side").cycle({
		timeout: (Math.random()*2000+10000),
		speed: 200
	});
	
	$(".server-side").cycle({
		timeout: (Math.random()*2000+10000),
		speed: 200
	});
	
	$(".code-sample-navigate-previous").click(function (){
		$(this).parents(".code-sample-side").cycle("prev");
	});
	
	$(".code-sample-navigate-next").click(function (){
		$(this).parents(".code-sample-side").cycle("next");
	});
});