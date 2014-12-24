$(document)
  .ready(function() {

/*******************************
          Global
*******************************/

   $('.menu-search').bind('change', function () {
        var search_string = $(this).val(); // get value
        var url = '/search/?q=' + search_string
        if (url) { // require a URL
            window.location = url; // redirect
        }
        return false;
    });

    $('.sidebar').first()
      .sidebar('attach events', '.pagebar');
    
    $('.pagebar')
      .removeClass('disabled');

    $('.masthead .information')
      .transition('scale in', 1000);

/*******************************
          Cards
*******************************/


    $('.special.cards .image').dimmer({
      on: 'hover'
    });
    
    $('.ui.rating')
      .rating({
        maxRating: 5
      });

    $('.ui.rating')
      .rating('disable');
      
    $('.embed-features')
      .popup();

});