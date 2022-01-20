$(document).ready(function() {

	if (top != self) top.location.replace(self.location.href);

	$('#one').click(function(){
	
		$('li').removeClass('active');
		$(this).addClass('active');
	
		$( ".s" ).fadeOut(180);
		
		setTimeout(function(){
		
			$("body").animate({ backgroundColor: '#c8fdf9'}, 180);
		
			$('#scrollbar1').fadeIn();
			
		}, 180);
		setInterval(draw, 1)
	
	});
	
	$('#two').click(function(){
	
	
		$('li').removeClass('active');
		$(this).addClass('active');
	
		$( ".s" ).fadeOut(180);
		
		setTimeout(function(){
		
            $("body").animate({ backgroundColor: '#FFFFFF'}, 180);
			
			$('#scrollbar2').fadeIn();	
			
		}, 180);
		setInterval(draw, 1)
	});
	
	$('#three').click(function(){
	
		$('li').removeClass('active');
		$(this).addClass('active');
	
		$( ".s" ).fadeOut(180);
		
		setTimeout(function(){
		
			$("body").animate({ backgroundColor: '#d9fdc8'}, 180);
		
			$('#scrollbar3').fadeIn();	
			
		}, 180);
		setInterval(draw, 1)
	});
	
	$('#four').click(function(){
	
		$('li').removeClass('active');
		$(this).addClass('active');
	
		$( ".s" ).fadeOut(180);
		
		setTimeout(function(){
		
			$("body").animate({ backgroundColor: '#97d3d0'}, 180);
		
			$('#scrollbar4').fadeIn();
			
		}, 180);
		setInterval(draw, 1)
	});
	
	$('#five').click(function(){
	
		$('li').removeClass('active');
		$(this).addClass('active');
	
		$( ".s" ).fadeOut(180);
		
		setTimeout(function(){
			
			$("body").animate({ backgroundColor: '#313640'}, 180);
		
			$('#scrollbar5').fadeIn();	
			
		}, 180);
		setInterval(draw, 1)
	});

});