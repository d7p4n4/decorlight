      window.onload = function() {

        var num = 1;
    
        $('.termekek').on('click', function() { 
      
      if (num == 1) {
        $('.termek').slideDown(300, function() {
          $(this).addClass('termek-active'); 
        })
        num++;
      } else {
              
        $('.termek').slideUp(300, function() {
          $(this).removeClass('termek-active'); 
        })
        num--;
      }
    });
  
      }