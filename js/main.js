/*  ---------------------------------------------------
  Template Name: DJoz
  Description:  DJoz Music HTML Template
  Author: Colorlib
  Author URI: https://colorlib.com
  Version: 1.0
  Created: Colorlib
---------------------------------------------------------  */

'use strict';

(function ($) {

    /*------------------
        Preloader
    --------------------*/
    $(window).on('load', function () {
        $(".loader").fadeOut();
        $("#preloder").delay(200).fadeOut("slow");
    });

    /*------------------
        Background Set
    --------------------*/
    $('.set-bg').each(function () {
        var bg = $(this).data('setbg');
        $(this).css('background-image', 'url(' + bg + ')');
    });

    /*------------------
		Navigation
	--------------------*/
    $(".mobile-menu").slicknav({
        prependTo: '#mobile-menu-wrap',
        allowParentLinks: true
    });
    
    /*--------------------------
        Event Slider
    ----------------------------*/
    $(".event__slider").owlCarousel({
        loop: true,
        margin: 0,
        items: 3,
        dots: false,
        nav: true,
        navText: ["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
        smartSpeed: 1200,
        autoHeight: false,
        autoplay: true,
        responsive: {
            992: {
                items: 3,
            },
            768: {
                items: 2,
            },
            0: {
                items: 1,
            },
        }
    });
    
    /*--------------------------
        Videos Slider
    ----------------------------*/
    $(".videos__slider").owlCarousel({
        loop: true,
        margin: 0,
        items: 4,
        dots: false,
        nav: true,
        navText: ["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
        smartSpeed: 1200,
        autoHeight: false,
        autoplay: true,
        responsive: {
            992: {
                items: 4,
            },
            768: {
                items: 3,
            },
            576: {
                items: 2,
            },
            0: {
                items: 1,
            }
        }
    });

    /*------------------
		Magnific
	--------------------*/
    $('.video-popup').magnificPopup({
        type: 'iframe'
    });

    /*------------------
        CountDown
    --------------------*/
    // For demo preview
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();

    if(mm == 12) {
        mm = '01';
        yyyy = yyyy + 1;
    } else {
        mm = parseInt(mm) + 1;
        mm = String(mm).padStart(2, '0');
    }
    var timerdate = mm + '/' + dd + '/' + yyyy;
    // For demo preview end
    var targetDate=new Date("Sep 10,2024 00:00:00").getTime();

    // Use this for real timer date
    /* var timerdate = "2020/01/01"; */

	$("#countdown-time").countdown(targetDate, function(event) {
        $(this).html(event.strftime("<div class='countdown__item'><span>%D</span> <p>Days</p> </div>" + "<div class='countdown__item'><span>%H</span> <p>Hours</p> </div>" + "<div class='countdown__item'><span>%M</span> <p>Minutes</p> </div>" + "<div class='countdown__item'><span>%S</span> <p>Seconds</p> </div>"));
    });

    /*------------------
		Barfiller
	--------------------*/
    $('#bar1').barfiller({
        barColor: "#ffffff",
    });

    $('#bar2').barfiller({
        barColor: "#ffffff",
    });

    $('#bar3').barfiller({
        barColor: "#ffffff",
    });

    /*-------------------
		Nice Scroll
	--------------------- */
    $(".nice-scroll").niceScroll({
        cursorcolor: "#111111",
        cursorwidth: "5px",
        background: "#e1e1e1",
        cursorborder: "",
        autohidemode: false,
        horizrailenabled: false
    });

    // Show all images/videos when the page loads
    $(".image").addClass('show');  // Initially show all without blur
     // Functionality for clicking on filter buttons
    $(".buttons").click(function() {
         $(this).addClass('active').siblings().removeClass("active");
        var filter = $(this).attr("data-filter");
            if (filter == "all") {
                 // Show all items with blur-to-clear transition
                 $(".image").hide().removeClass('show');  // Hide first to reset the transition
                     setTimeout(function() {
                      $(".image").show().addClass('show');  // Then show with transition
                     }, 200);
                     } else {
                         // Show filtered items with blur-to-clear transition
                         $(".image").hide().removeClass('show');
                         setTimeout(function() {
                         $(".image").filter("." + filter).show().addClass('show');
                          }, 200);
                         }
         // Re-initialize magnificPopup to only target visible images


        reinitMagnificPopup();
    });

    // Initialize magnificPopup
    function reinitMagnificPopup() {
        $('.image-container').magnificPopup({
            delegate: 'a:visible', // Only select visible images and videos
            type: 'image', // Default type is image
            gallery: {
                enabled: true // Enables gallery mode
            },
            callbacks: {
                elementParse: function(item) {
                    // If the element has a 'vdo' class, treat it as a video
                    if(item.el.hasClass('video')) {
                        item.type = 'inline'; // Use 'inline' type for custom video handling

                        item.src = '<video controls autoplay muted style="display:block; margin: 0 auto; max-width:100%; max-height:80vh;">' +

                                   '<source src="' + item.el.attr('href') + '" type="video/mp4">' +
                                   'Your browser does not support the video tag.' +
                                   '</video>';
                    } else {
                        item.type = 'image'; // Default to image
                    }
                }
            }
        });
    
    }

    // Initialize on document ready
    reinitMagnificPopup();

    

    $("#submit-form").submit((e)=>{
        e.preventDefault()
        $.ajax({
            url:"https://script.google.com/macros/s/AKfycbzERXMWUH6adfr137wKohfiN7cFZ9YX-zaQ4iq0-qje4sadpQCQja3jlpUW2Wr9Jcw1og/exec",
            data:$("#submit-form").serialize(),
            method:"post",
            success:function (response){
                alert("Aravam Kalakshethra Will Contact you Soon!!")
                window.location.reload()
               //window.location.href="https://google.com"
            },
            error:function (err){
                alert("Something Error")

            }
        })
    })

})(jQuery);