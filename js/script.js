// video start
$('.venobox').venobox(); 
// video end

$('.img_slider').slick({
    dots: false,
    arrows:false,
    infinite: false,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: '.text_slider',
    fade: true,
 
  });
  $('.text_slider').slick({
    dots: true,
    arrows:false,
    infinite: false,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: '.img_slider',
    fade: true,
    
  });
// fix mnu
  $(window).scroll(function(){
    var rony=$(this).scrollTop();
    if(rony>300){
      $('.navbar').addClass('stcky_menu');
    }
    else{
      $('.navbar').removeClass('stcky_menu');
    }
  })

 //scroll-spy & Smooth-scrolling
 var scrollLink = $('.scroll-link');
 $(scrollLink).on('click',function(event){
   event.preventDefault();
   $('html,body').animate({scrollTop: $(this.hash).offset().top-98},1000);
 });
 $(window).on('scroll',function(){
   var scrollTop = $(this).scrollTop();
   scrollLink.each(function(){
   var sectionhead = $(this.hash).offset().top-85;
   if(scrollTop >= sectionhead) {
     $(this).parent().addClass('active');
     $(this).parent().siblings().removeClass('active');
   }
   });
 });