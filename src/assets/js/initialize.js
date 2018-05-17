$(function () {
	console.log('demo1');
	// Animations init
	new WOW().init();

	// Tooltip init

	$(function () {
		$('[data-toggle="tooltip"]').tooltip()
	});

	/*
	$(document).ready(function () {
		$("#license").addClass("mdb-select price-select");
		$("#billing_country").addClass("mdb-select");
		$('.mdb-select').material_select();
		$("#license").hide();
		$("#billing_country").hide();
	});
	*/
	
	// SideNav init
	$(".button-collapse").sideNav();
	var el = document.querySelector('.custom-scrollbar');
	Ps.initialize(el);

	$('body').scrollspy({
		target: '#scrollspy'
	})

	$(function () {
		$(".sticky").sticky({
			topSpacing: 90,
			zIndex: 2,
			stopper: "#footer"
		});
	});
});

