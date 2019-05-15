$(function (){


	$("#header__flying-tags").children().first().mouseout(function(){
		$("#header__flying-tags").children().first().addClass("transform-enabled")
	});

  $("#main__my-work_price-button").click(function(){
    
    $("#price-list").show(0);
  });

  $("#header__profile_button").click(function(){
    
    $("#price-list").show(0);
  });


  $(".price-link").click(function(){
    
    $("#price-list").show(0);
    $("#header__top-info_menu-button_mobile-nav").hide();
  });

    $(".header__callme_call-request").click(function(){
    
    $("#call-request").show(0);
    $("#price-list").hide(0);
  });
    $(".header__callme_call-request_mobile").click(function(){
    
    $("#call-request").show(0);
  });

  $("#header__top-info_menu-button").click(function(){
    
    $("#header__top-info_menu-button_mobile-nav").toggle();
  });  



  $('#price-list').click(function(event){
    if(event.target == this){
      $(this).hide(0);
    };
  });

  $('#call-request').click(function(event){
    if(event.target == this){
      $(this).hide(0);
    };
  });










      $(".regular").slick({
        dots: false,
        arrows: true,
        prevArrow: '<button type="button" class="slick-prev arrow"><img src="img/left-arrow.png"></button>',
        nextArrow: '<button type="button" class="slick-next arrow"><img src="img/left-arrow.png"></button>',
        infinite: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
          {
          	breakpoint: 1366,
          	settings: {
          		slidesToShow: 2,
          		arrows: false,
          		dots: true,
          	}
          },

          {
            breakpoint: 776,
            settings: {
              slidesToShow: 1,
              centerMode: true,
              arrows: false,
              dots: true,
            }
          },

          {
          	breakpoint: 640,
          	settings: {
          		slidesToShow: 1,
          		arrows: false,
          		dots: true,
          	}
          },







        ]
      });

});