$('document').ready(function() {

	$( '.menu1' ).click(function() {
		$( '.menu2' ).hide( 'slow' )
		$( '.questionnaire1, .retour' ).show( 'slow' )
	});

	$( '.menu2' ).click(function() {
		$( '.menu1' ).hide( 'slow' )
		$( '.questionnaire2, .retour' ).show( 'slow' )
	});

	$( '.retour').click(function() {
	 	$('.menu1, .menu2').show( 'slow')
		$('.questionnaire1, .questionnaire2, .retour, .thank').hide('slow')
	});

	$( '.serrurerie' ).click(function() {
		$( '.chauf-vent, .isola, .plomb, .revet, .cable, .balcon' ).hide( 'slow' )
		$( '.questionnaire1, #retour' ).show( 'slow' )
	});

	$( '.chauf-vent' ).click(function() {
		$( '.serrurerie, .isola, .plomb, .revet, .cable, .balcon' ).hide( 'slow' )
		$( '.questionnaire1, #retour' ).show( 'slow' )
	});

	$( '.isola' ).click(function() {
		$( '.chauf-vent, .serrurerie, .plomb, .revet, .cable, .balcon' ).hide( 'slow' )
		$( '.questionnaire1, #retour' ).show( 'slow' )
	});

	$( '.plomb' ).click(function() {
		$( '.chauf-vent, .isola, .serrurerie, .revet, .cable, .balcon' ).hide( 'slow' )
		$( '.questionnaire1, #retour' ).show( 'slow' )
	});

	$( '.revet' ).click(function() {
		$( '.chauf-vent, .isola, .plomb, .serrurerie, .cable, .balcon' ).hide( 'slow' )
		$( '.questionnaire1, #retour' ).show( 'slow' )
	});

	$( '.cable' ).click(function() {
		$( '.chauf-vent, .isola, .plomb, .revet, .serrurerie, .balcon' ).hide( 'slow' )
		$( '.questionnaire1, #retour' ).show( 'slow' )
	});

	$( '.balcon' ).click(function() {
		$( '.chauf-vent, .isola, .plomb, .revet, .cable, .serrurerie' ).hide( 'slow' )
		$( '.questionnaire1, #retour' ).show( 'slow' )
	});

	// $( '#precedent1').click(function() {
	// 	$('.appartement, .menu1').show( 'slow')
	// 	$('.questionnaire1, #precedent1').hide('slow')
	// });


	$( '.coll1' ).click(function() {
		$( '#coll1' ).show( 'slow' )
		$( '#coll2, #coll3, #coll4, #coll5, .questionnaire2' ).hide( 'slow' )
	});

	$( '.coll2' ).click(function() {
		$( '#coll2' ).show( 'slow' )
		$( '#coll1, #coll3, #coll4, #coll5, .questionnaire2' ).hide( 'slow' )
	});

	$( '.coll3' ).click(function() {
		$( '#coll3' ).show( 'slow' )
		$( '#coll2, #coll1, #coll4, #coll5, .questionnaire2' ).hide( 'slow' )
	});

	$( '.coll4' ).click(function() {
		$( '#coll4' ).show( 'slow' )
		$( '#coll2, #coll3, #coll1, #coll5, .questionnaire2' ).hide( 'slow' )
	});

	$( '.coll5' ).click(function() {
		$( '#coll5' ).show( 'slow' )
		$( '#coll2, #coll3, #coll1, #coll4, .questionnaire2' ).hide( 'slow' )
	});

	// $( '#precedent2').click(function() {
	// 	$('.coll1, .coll2, .coll3, .coll4, .coll5, .menu2').show( 'slow')
	// 	$('#coll1, #coll2, #coll3, #coll4, #coll5, #precedent2').hide('slow')
	// });

	$( '.menu3' ).click(function() {
		$( '.menu1, .menu2' ).hide( 'slow' )
		$( '.questionnaire3, #retour' ).show( 'slow' )
	});

	$( '.immeuble' ).click(function() {
		$( '#immeuble' ).show( 'slow' )
		$( '.poubelle, .enfant, .escal-pal, .hall').hide( 'slow' )
	});

    $( '.poubelle' ).click(function() {
		$( '#poubelle' ).show( 'slow' )
		$( '.immeuble, .enfant, .escal-pal, .hall').hide( 'slow' )
	});

    $( '.enfant' ).click(function() {
		$( '#enfant' ).show( 'slow' )
		$( '.poubelle, .immeuble, .escal-pal, .hall').hide( 'slow' )
	});

    $( '.escal-pal' ).click(function() {
		$( '#escal-pal' ).show( 'slow' )
		$( '.poubelle, .enfant, .immeuble, .hall').hide( 'slow' )
	});

    $( '.hall' ).click(function() {
		$( '#hall' ).show( 'slow' )
		$( '.poubelle, .enfant, .escal-pal, .immeuble, .hall, .menu3').hide( 'slow' )
	});

	// $( '#precedent3').click(function() {
	// 	$('.immeuble, .poubelle, .enfant, .escal-pal, .hall, .menu3').show( 'slow')
	// 	$('#hall, #escal-pal, #enfant, #poubelle, #immeuble, #precedent3').hide('slow')
	// });

	$('#voie').change(function(){
		$.get('/appartements', {voie: $(this).val()}, function(data) {
			console.log(data)
			if($('#numero')) {
				$('#numero').remove()
			}
			
			$('#voie').after(data)
		})
	})

	$('#voie1').change(function(){
		$.get('/interieurs1', {voie1: $(this).val()}, function(data) {
			console.log(data)
			if($('#numero')) {
				$('#numero').remove()
			}
			
			$('#voie1').after(data)
		})
	})

	$('#voie2').change(function(){
		$.get('/interieurs2', {voie2: $(this).val()}, function(data) {
			console.log(data)
			if($('#numero')) {
				$('#numero').remove()
			}
			
			$('#voie2').after(data)
		})
	})


	$('#voie5').change(function(){
		$.get('/interieurs3', {voie5: $(this).val()}, function(data) {
			console.log(data)
			if($('#numero')) {
				$('#numero').remove()
			}
			
			$('#voie5').after(data)
		})
	})

	$('#voie6').change(function(){
		$.get('/interieurs4', {voie6: $(this).val()}, function(data) {
			console.log(data)
			if($('#numero')) {
				$('#numero').remove()
			}
			
			$('#voie6').after(data)
		})
	})

	$('#voie7').change(function(){
		$.get('/interieurs5', {voie7: $(this).val()}, function(data) {
			console.log(data)
			if($('#numero')) {
				$('#numero').remove()
			}
			
			$('#voie7').after(data)
		})
	})

	$('#voie3').change(function(){
		$.get('/exterieurs1', {voie3: $(this).val()}, function(data) {
			console.log(data)
			if($('#numero')) {
				$('#numero').remove()
			}
			
			$('#voie3').after(data)
		})
	})

	$('#voie4').change(function(){
		$.get('/exterieurs2', {voie4: $(this).val()}, function(data) {
			console.log(data)
			if($('#numero')) {
				$('#numero').remove()
			}
			
			$('#voie4').after(data)
		})
	})	

	$('#voie8').change(function(){
		$.get('/exterieurs3', {voie8: $(this).val()}, function(data) {
			console.log(data)
			if($('#numero')) {
				$('#numero').remove()
			}
			
			$('#voie8').after(data)
		})
	})

	$('#voie9').change(function(){
		$.get('/exterieurs4', {voie9: $(this).val()}, function(data) {
			console.log(data)
			if($('#numero')) {
				$('#numero').remove()
			}
			
			$('#voie9').after(data)
		})
	})	

	$('#voie10').change(function(){
		$.get('/exterieurs5', {voie10: $(this).val()}, function(data) {
			console.log(data)
			if($('#numero')) {
				$('#numero').remove()
			}
			
			$('#voie10').after(data)
		})
	})
});