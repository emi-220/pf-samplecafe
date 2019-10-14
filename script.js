$(function(){
  $(".main_visual img:not(:first-child)").hide();
  setInterval(function(){
    $(".main_visual img:first-child").fadeOut("slow")
    .next("img").fadeIn("slow").end().appendTo(".main_visual");
  },5000);
});


$(document).ready(function(){
  $(".slide").slick({
  dots: false,
  arrows: true,
  centerMode: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 4000,
});

  $(".slide").slick({
    responsive:({
      breakpoint: 768,
      settings:{
        dots: false,
        arrows: true,
        centerMode: true,
        slideTsshow: 3,
        slideToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
      }
    })
  });
});
