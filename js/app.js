$(document).ready(function() { 

   $(".pure-input-1-2") // <- Add this
	.keypress(function (e) {
        var key = e.which;
        console.log(key);
        if(key == 13) {
        	e.preventDefault();
            $('li').show();
			var text = $(this).val(); // <- Add these  -v    
            $('ul').append('<li><div class="popup">' + text + '</div><i class="fa fa-check-circle-o fa-2x"><i class="fa fa-times fa-1x"></i></i></li>');
		} 
        $('.fa-times').click(function() {
        $(this).parents('li').remove();
    });
    
    $('.fa-check-circle-o').click(function() {
        $(this).closest('li').css("opacity", "0.4");
    });
})
    
   
    
});

