$(function(){
	var carouselList = $("#carousel ul");
	setInterval(function(){
	$(carouselList).animate({marginLeft :'-400px'}, 2000, function(){

		$(this).find("li:first").after($(this).find("li:last"));
		$(this).css({marginLeft: 0});

	});
	}, 4000);
});
