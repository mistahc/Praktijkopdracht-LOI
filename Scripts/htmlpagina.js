$(document).ready(function(){

$("#loginForm").hide();


$(".partClick").hover(function(){
	$(".partDropdown").slideDown(10);

});


$(".partDropdown").mouseleave(function(){
	$(".partDropdown").slideUp(10);

});

$("#topnav").mouseleave(function(){
	$(".partDropdown").slideUp(10);

});

$(".bedrijfClick").hover(function(){
	$(".partDropdown").slideUp(10);
	});


/*bedrijf Dropdown*/

$(".bedrijfClick").hover(function(){
	$(".bedrijfDropdown").slideDown(10);
	});
	
$(".bedrijfDropdown").mouseleave(function(){
	$(".bedrijfDropdown").slideUp(10);

});	

$("#topnav").mouseleave(function(){
	$(".bedrijfDropdown").slideUp(10);

});

$(".partClick").hover(function(){
	$(".bedrijfDropdown").slideUp(10);
	});


$(".faqClick").hover(function(){
	$(".bedrijfDropdown").slideUp(10);
	});

	

$(".inloggenClick").click(function(){
	$("#loginForm").fadeIn(1000);
	$("#logo").fadeTo(500, 0.5);
	$("#content").fadeTo(500, 0.5);
	$("#disclaimer").fadeTo(500, 0.5);
	$("#interieurfoto").fadeTo(500, 0.5);
	$("#social-media").fadeTo(500, 0.5);
	$("#top").fadeTo(500, 0.5);
	$("#topnav").fadeTo(500, 0.5);
	$("#welkom").fadeTo(500, 0.5);
	$("#welkomnav").fadeTo(500, 0.5);
	});

$("#closeButton").click(function(){
	$("#loginForm").hide();
	$("#logo").fadeTo(500, 1);
	$("#content").fadeTo(500, 1);
	$("#disclaimer").fadeTo(500, 1);
	$("#interieurfoto").fadeTo(500,1);
	$("#social-media").fadeTo(500, 1);
	$("#top").fadeTo(500, 1);
	$("#topnav").fadeTo(500, 1);
	$("#welkom").fadeTo(500, 1);
	$("#welkomnav").fadeTo(500, 1);
});

$(".login").click(function(){
	window.open("WelkomAccount.html")
		
	}); 

/*Slider*/


	setInterval(function(){
		
		
		var active = $("#Slider .active");
	
		if(active.next().length > 0)
		var next = active.next();
			
	
		else
		var next = $("#Slider img:first");
		
	
		next.css('z-index', '2');
		
		active.fadeOut(2000,function(){

			active.css('z-index', '1').show().removeClass('active')
			
			next.css('z-index', '3').addClass('active');
			
			});
	
		
		},4000);
	

/*Vaste Planten*/


$(".Anemn").click(function(){
	$("#vpVolledigeBeschrijvingAnemn").show().siblings().hide();
	event.preventDefault();
	});
	
$(".Camas").click(function(){
	$("#vpVolledigeBeschrijvingCamas").show().siblings().hide();
	event.preventDefault();
	});
	
$(".Colch").click(function(){
	$("#vpVolledigeBeschrijvingColch").show().siblings().hide();
	event.preventDefault();
	});

$(".Digit").click(function(){
	$("#vpVolledigeBeschrijvingDigit").show().siblings().hide();
	event.preventDefault();
	});
	
$(".Euphlath").click(function(){
	$("#vpVolledigeBeschrijvingEuphlath").show().siblings().hide();
	event.preventDefault();
	});
	
$(".Knaut").click(function(){
	$("#vpVolledigeBeschrijvingKnaut").show().siblings().hide();
	event.preventDefault();
	});
	
$(".Lathra").click(function(){
	$("#vpVolledigeBeschrijvingLathra").show().siblings().hide();
	event.preventDefault();
	});
	
$(".Oxaace").click(function(){
	$("#vpVolledigeBeschrijvingOxaace").show().siblings().hide();
	event.preventDefault();
	});
	
$(".Rosarub").click(function(){
	$("#vpVolledigeBeschrijvingRosarub").show().siblings().hide();
	event.preventDefault();
	});
	
$(".Tulipacum").click(function(){
	$("#vpVolledigeBeschrijvingTulipacum").show().siblings().hide();
	event.preventDefault();
	});
	
$(".Tulipakwe").click(function(){
	$("#vpVolledigeBeschrijvingTulipakwe").show().siblings().hide();
	event.preventDefault();
	});
	
$(".Tulipurum").click(function(){
	$("#vpVolledigeBeschrijvingTulipurum").show().siblings().hide();
	event.preventDefault();
	});
	
$(".Frittmeleagris").click(function(){
	$("#vpVolledigeBeschrijvingFrittmeleagris").show().siblings().hide();
	event.preventDefault();
	});
	
$(".Nicotiana").click(function(){
	$("#vpVolledigeBeschrijvingNicotiana").show().siblings().hide();
	event.preventDefault();
	});
	
$(".Primeliator").click(function(){
	$("#vpVolledigeBeschrijvingPrimeliator").show().siblings().hide();
	event.preventDefault();
	});
	
	$(".Meer").click(function(){
	$("#vastePlantenDivVier, #vastePlantenBeschrijvingVier, #vastePlantenDivVijf, #vastePlantenBeschrijvingVijf").show();
	$("#vastePlantenDivDrie, #vastePlantenBeschrijvingDrie").hide();
	event.preventDefault();
	
	});
	
	
/*FAQ*/

$("#veelgesteldeVragen li").click(function(){
	$(this).find('ul').toggleClass("answer");
	event.preventDefault();
	
	});


/*
$("#veelgesteldeVragen li").click(function(){
	$(this).find('ul').show();
	$(this>ul).siblings().hide();
	});
	
	*/
}); 