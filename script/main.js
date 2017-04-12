window.onload = function() {
  var header = document.querySelector('header')
  var headroom = new Headroom(header)

  headroom.init()

  $('.designers-slick').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
  })

  $('.quotes-content').slick({
    dots: true,
    arrow: false
  })

}
