$(document).ready(function() { 

    $(".pure-input-1-2")
    .keyup(function() {
    var value = $( this ).val();
    $(".popup").text( value );
    })
    .keyup(); 
    })
    .keypress(function (e) {
        var key = e.which;
        console.log(key);
        if(key == 13) 
            {
                e.preventDefault();
                $('li').show();
                $('ul').append('<li><div class="popup"></div><i class="fa fa-check-circle-o fa-2x"><i class="fa fa-times fa-1x"></i></i></li>');
  }
    

    
    
});

