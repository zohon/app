define(
	['jquery', 'underscore', 'backbone', 'bootstrap', 'masonry' , 'modules/realisations', 'modules/footer'], 
	function ($, _, Backbone, bootstrap, Masonry, realisations, footer) {

	window.realisationsCollections = new realisations.collection.realisationsCollections();

	var description = "Etiam sodales accumsan nisl, eu dictum arcu bibendum vitae. Aenean orci diam, venenatis in mollis eu, porta eget nunc. Etiam vitae purus ultricies, egestas lectus sed, laoreet tortor. Praesent id eleifend tellus. Integer ac dolor lacus. Etiam bibendum mi urna, vitae bibendum sem imperdiet et. Aenean interdum felis eu mattis porttitor. Aliquam eget leo faucibus, mattis turpis eget, ornare tortor. Proin vitae felis quis velit imperdiet dictum. Sed ullamcorper augue vitae ullamcorper porta. Sed magna dui, efficitur nec tincidunt sed, vehicula vitae sem. Aenean aliquam leo et mi maximus, a sollicitudin lorem hendrerit. Vivamus quis sollicitudin dolor, non hendrerit erat. Proin non cursus tortor. Duis vel consectetur elit.";

	window.realisationsCollections.add({
		title : "Commode d'appui de style L.XVI",
		img : 'realisations/rea1.jpg',
		width : 1,
		description : description
	});

	window.realisationsCollections.add({
		title : "Commode d'appui de style L.XVI",
		img : 'realisations/rea2.jpg',
		width : 1,
		description : description
	});

	window.realisationsCollections.add({
		title : "Commode d'appui de style L.XVI",
		img : 'realisations/rea3.jpg',
		width : 2,
		description : description
	});

	window.realisationsCollections.add({
		title : "Commode d'appui de style L.XVI",
		img : 'realisations/rea4.jpg',
		width : 1,
		description : description
	});

	window.realisationsCollections.add({
		title : "Commode d'appui de style L.XVI",
		img : 'realisations/rea5.jpg',
		width : 2,
		description : description
	});

		window.realisationsCollections.add({
		title : "Commode d'appui de style L.XVI",
		img : 'realisations/rea6.jpg',
		width : 2,
		description : "Commode d'appui de style L.XVI"
	});


	window.RealisationView = new realisations.view.realisationView({collection : realisationsCollections});

	$('.realisationView').html(RealisationView.render().$el);

	console.log(footer);

	window.FooterView = new footer.view.FooterView();
	$('.footerView').html(FooterView.render().$el);


});