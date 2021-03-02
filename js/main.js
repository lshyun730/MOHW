 $(document).ready(function () {


     //상단메뉴
     $('.gnb >li').mouseenter(function () {

         var pGnbSubH = $(this).find('.gnb_sub').outerHeight();

         $('.gnb >li').removeClass('over');
         $(this).addClass('over');
         $('.gnb_shadow').css({
             'height': pGnbSubH + 'px',
             'border-bottom': '5px solid #033075'
         })
     });

     $('.gnb >li').mouseleave(function () {
         $(this).removeClass('over');
         $('.gnb_shadow').css({
             'height': 0 + 'px',
             'border-bottom': '0'
         });

     });


     //메인슬라이드
     var mainslideSwiper = new Swiper('.main-slider', {
         loop: true,
         autoplay: {
             delay: 4000,
         },
     })

     //보도뉴스슬라이드
     var socialSwiper = new Swiper('.mn_tab', {
         slidesPerView: 1,
         spaceBetween: 15,
         breakpoints: {
             360: {
                 slidesPerView: 1
             },
             600: {
                 slidesPerView: 3
             },
             768: {
                 slidesPerView: 4
             },
             1281: {
                 slidesPerView: 3
             }
         }

     })

     //영상으로보는소식
     var maineventSwiper = new Swiper('.vNews_lst', {
         spaceBetween: 15,
         slidesPerView: 1,
         loop: false,
         breakpoints: {
             360: {
                 slidesPerView: 1
             },
             600: {
                 slidesPerView: 3
             },
             768: {
                 slidesPerView: 4
             },
             1281: {
                 slidesPerView: 3
             }
         }
     })

     //이벤트슬라이드
     var maineventSwiper = new Swiper('.event', {
         spaceBetween: 0,
         slidesPerView: 2,
         loop: true,
         autoplay: {
             delay: 2000,
         },
         breakpoints: {
             360: {
                 slidesPerView: 2
             },
             1024: {
                 slidesPerView: 4
             },
             1281: {
                 slidesPerView: 1
             }
         }
     })
     

     //신고신청슬라이드
     var requstSwiper = new Swiper('.req_lst', {
         spaceBetween: 15,
         slidesPerView: 3,
         loop: false,
         autoplay: {
             delay: 8000,
         },
         breakpoints: {
             360: {
                 slidesPerView: 3
             },
             767: {
                 slidesPerView: 6
             },
             1024: {
                 slidesPerView: 6
             },
             1280: {
                 slidesPerView: 6
             }
         }
     })

     //찾아보기슬라이드
     var findSwiper = new Swiper('.find_lst', {
         spaceBetween: 15,
         slidesPerView: 3,
         loop: false,
         autoplay: {
             delay: 8000,
         },
         breakpoints: {
             360: {
                 slidesPerView: 3
             },
             767: {
                 slidesPerView: 6
             },
             1024: {
                 slidesPerView: 6
             },
             1280: {
                 slidesPerView: 6
             }
         }
     })



     //소셜미디어슬라이드
     var socialSwiper = new Swiper('.s_tab', {
         slidesPerView: 1,
         spaceBetween: 15,
         breakpoints: {
             360: {
                 slidesPerView: 1
             },
             767: {
                 slidesPerView: 4
             },
             1024: {
                 slidesPerView: 4
             },
             1280: {
                 slidesPerView: 5
             }
         }

     })


     //메인배너슬라이드
     var mainbannerSwiper = new Swiper('.mb_Lst', {
         spaceBetween: 5,
         slidesPerView: 2,
         loop: true,
         autoplay: {
             delay: 2000,
         },
         breakpoints: {
             360: {
                 slidesPerView: 3
             },
             767: {
                 slidesPerView: 5
             },
             1024: {
                 slidesPerView: 6
             },
             1280: {
                 slidesPerView: 7
             }
         }
     })









     //슬라이드 컨트롤
     //슬라이드 숫자 카운트
     var counter = $('.count');
     var indexNum = mainslideSwiper.slides.length - 2;
     var currentCount = $('<span class="countNum">1 -' + '<em>' + indexNum + '</em></span>');

     counter.append(currentCount);
     mainslideSwiper.on('transitionStart', function () {
         var index = this.realIndex + 1;
         var indexNum = mainslideSwiper.slides.length - 2;
         var prevCount = $('countNum');
         currentCount = $('<span class="countNum next">' + index + ' - ' + '<em>' + indexNum + '</em></span>');
         counter.html(currentCount);
     });

     //메인 컨트롤 //
     $('.visual .controls .btn-prev').on('click', function (e) {
         e.preventDefault();
         mainslideSwiper.slidePrev();
     });

     $('.visual .controls .btn-next').on('click', function (e) {
         e.preventDefault();
         mainslideSwiper.slideNext();

     });

     $(' .visual .controls .btn-stop').on('click', function (e) {
         e.preventDefault();
         mainslideSwiper.autoplay.stop();
         $(this).hide();
         $('.visual .controls .btn-play').css('display', 'inline-block');
     });


     $(' .visual .controls .btn-play').on('click', function (e) {
         e.preventDefault();
         mainslideSwiper.autoplay.start();
         $(this).hide();
         $('.visual .controls .btn-stop').css('display', 'inline-block');
     });
     

     
     //메인이벤트 컨트롤
     $('.main_event .controls .btn-prev').on('click', function (e) {
         e.preventDefault();
         maineventSwiper.slidePrev();
     });

     $('.main_event .controls .btn-next').on('click', function (e) {
         e.preventDefault();
         maineventSwiper.slideNext();

     });

     $('.main_event .controls .btn-stop').on('click', function (e) {
         e.preventDefault();
         maineventSwiper.autoplay.stop();
         $(this).hide();
         $('.main_event .controls .btn-play').css('display', 'inline-block');
     });


     $(' .main_event .btn-play').on('click', function (e) {
         e.preventDefault();
         maineventSwiper.autoplay.start();
         $(this).hide();
         $('.main_event .controls .btn-stop').css('display', 'inline-block');
     });
     
     
     //신고신청 컨트롤
     $('.main_request .controls .btn-prev').on('click', function (e) {
         e.preventDefault();
         requstSwiper.slidePrev();
     });

     $('.main_request .controls .btn-next').on('click', function (e) {
         e.preventDefault();
         requstSwiper.slideNext();
     });

     $('.main_request .controls .btn-stop').on('click', function (e) {
         e.preventDefault();
         requstSwiper.autoplay.stop();
         $(this).hide();
         $('.main_request .controls .btn-play').css('display', 'inline-block');
     });


     $(' .main_request .btn-play').on('click', function (e) {
         e.preventDefault();
         requstSwiper.autoplay.start();
         $(this).hide();
         $('.main_request .controls .btn-stop').css('display', 'inline-block');
     });

     
     //메인베너 컨트롤
     $('.main_banner .controls .btn-prev').on('click', function (e) {
         e.preventDefault();
         mainbannerSwiper.slidePrev();
     });

     $('.main_banner .controls .btn-next').on('click', function (e) {
         e.preventDefault();
         mainbannerSwiper.slideNext();

     });

     $('.main_banner .controls .btn-stop').on('click', function (e) {
         e.preventDefault();
         mainbannerSwiper.autoplay.stop();
         $(this).hide();
         $('.main_banner .controls .btn-play').css('display', 'inline-block');
     });


     $('.main_banner .controls .btn-play').on('click', function (e) {
         e.preventDefault();
         mainbannerSwiper.autoplay.start();
         $(this).hide();
         $('.main_banner  .controls .btn-stop').css('display', 'inline-block');
     });


     
     //탭메뉴 클릭시 슬라이드 새로고침
     var tabInputs = document.querySelectorAll('.tabInput');

     tabInputs.forEach(function (input) {

         input.addEventListener('change', function () {
             var id = input.value;
             var thisSwiper = document.getElementById('swiper' + id);
             thisSwiper.swiper.update();
         });

         input.addEventListener('change', function () {
             var id = input.value;
             var thisSwiper = document.getElementById('mn_swiper' + id);
             thisSwiper.swiper.update();
         });

     });


 });
