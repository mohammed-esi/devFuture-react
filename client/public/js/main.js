$(document).ready(function () {
  // sticky navigation menu;
  let scroll_height = 1080;
  function navbarFixed() {
    if ($(window).length) {
      $(window).scroll(function () {
        let scroll = $(window).scrollTop();
        if (scroll >= scroll_height) {
          $('nav').removeClass('py-5');
          $('nav').addClass('navbar-scroll fixed-top py-3');
          $('.navbar-user').removeClass('py-5 navbar-scroll fixed-top');
          $('.navbar-pagination').removeClass('py-5 navbar-scroll fixed-top');
        } else {
          $('nav').removeClass('navbar-scroll fixed-top py-3');
          $('nav').addClass('py-5');
          $('.navbar-user').removeClass('py-5');
          $('.navbar-pagination').removeClass('py-5');
        }
      });
    }
  }

  navbarFixed();

  // Get the current year for the copyright
  $('#year').text(new Date().getFullYear());

  // Smooth Scrolling
  $('#main-nav a').on('click', function (event) {
    if (this.hash !== '') {
      event.preventDefault();

      const hash = this.hash;

      $('html, body').animate(
        {
          scrollTop: $(hash).offset().top,
        },
        800,
        function () {
          window.location.hash = hash;
        }
      );
    }
  });

  $('.carousel').carousel({
    interval: 3000,
    keyboard: true,
    pause: 'hover',
    wrap: true,
  });


  // Init tooltips
  $('[data-toggle="tooltip"]').tooltip();

  // $('#sidebar-btn').on('click', function() {
  //   $('#sidebar').addClass('visible');
  //   console.log(4)
  // });

  // $('#sidebar-btn-close').on('click', function() {
  //   $('#sidebar').removeClass('visible');
  // });

  // Menu Slide
  // function openNav() {
  //   document.getElementById('mySidenav').style.width = '100%';
  //   document.getElementById('dashboard').style.marginLeft = '0';
  //   document.getElementById('main-footer').style.marginLeft = '0';
  // }

  // function closeNav() {
  //   document.getElementById('mySidenav').style.width = '0';
  //   document.getElementById('dashboard').style.marginLeft = '0';
  //   document.getElementById('main-footer').style.marginLeft = '0';
  // }

  // $('.openbtn').on('click', function () {
  //   openNav();
  // });
  // $('.closebtn').on('click', function () {
  //   closeNav();
  // });
});
