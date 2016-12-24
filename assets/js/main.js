$(function(){
  //Cache the window object
  var $window = $(window);

  //Parallax background effect
  $('section[data-type="background"]').each(function(){
    var $bgobj = $(this);

    $(window).scroll(function(){
      //scroll the background at var speed
      // yPos is negative value because we scroll up
      var yPos = -($window.scrollTop() / $bgobj.data('speed'));

      var coords= '50%' + yPos + 'px';

      $bgobj.css({ background-position: coords });
    });// End window scroll
  });
});
