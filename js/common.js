$(document).ready(function() {
 
  $("#owl-bg").owlCarousel({
 
      navigation : false, // Show next and prev buttons
      slideSpeed : 300,
      paginationSpeed : 400,
      singleItem:true
 
      // "singleItem:true" is a shortcut for:
      // items : 1, 
      // itemsDesktop : false,
      // itemsDesktopSmall : false,
      // itemsTablet: false,
      // itemsMobile : false
 
  });

   $("#owl-top").owlCarousel({
        items: 4,
        navigation: true,
        pagination: false,
        navigationText: ["&lt", "&gt"]
    })
 
});