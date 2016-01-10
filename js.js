	$(document).ready(function($){
          var parPosition = [];
        $('.par').each(function() {
            parPosition.push($(this).offset().top);
        });
        
		$('a').click(function(){
			$('html, body').animate({
				scrollTop: $( $.attr(this, 'href') ).offset().top
			}, 1000);
			return false;
		});
        
        
        	$('nav ul li a').click(function () {
			$('nav ul li a').removeClass('active');
				$(this).addClass('active');
		}); 
        
       $('nav a').hover(function() {
           $(this).find('.label').show();
           }, function() {
           $(this).find('.label').hide();
       });
        
           $(document).scroll(function(){
        var position = $(document).scrollTop(),
                index; 
                for (var i=0; i<parPosition.length; i++) {
                if (position <= parPosition[i]) {
                    index = i;
                    break;
                }
            }
      $('nav ul li a').removeClass('active');
            $('nav ul li a:eq('+index+')').addClass('active');
        });
        
        	$('nav ul li a').click(function () {
			$('nav ul li a').removeClass('active');
				$(this).addClass('active');
		});   
	});
