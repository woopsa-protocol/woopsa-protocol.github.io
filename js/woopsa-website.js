$(document).ready(function (){
	$(".how-it-works .image").on("inview", function (){
		$(".how-it-works .image .request").addClass("visible");
		setTimeout(function(){
			$(".how-it-works .image .response").addClass("visible");
		}, 500);
	});
});