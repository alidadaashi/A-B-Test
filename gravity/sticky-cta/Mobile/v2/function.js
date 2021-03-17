var FP_LP_DONATIONS_TRUST = {
    init: function() {
        this.addCTA();
        this.attachEvents();
    },

    addCTA: function() {







        var height;
        if ($('.elButton span:contains("CHALLENGE ACCEPTED")').length) {
            height = $('div:contains("Before you run off with your macros")').closest('.container').offset().top
        } else {
            height = $('div:contains("6 WEEK BODY TRANSFORMATION CHALLENGE")').closest('.container').offset().top
        }





        $(window).on('load', function() {

            if ($('.elButton span:contains("CHALLENGE ACCEPTED")').length) {
                var sticky = '<a target="_blank" href="' + $('.elButton span:contains("CHALLENGE ACCEPTED")').eq(2).closest('a').attr('href') + '" class="fp_new_sticky_cta"> Yes! I’m ready to take control </a>'

                $('.elButton span:contains("CHALLENGE ACCEPTED")').closest('a').addClass('fp_new_sticky_btn')
                $('.elButton span:contains("CHALLENGE ACCEPTED")').closest('a').text('Yes! I’m ready to take control')

                $('.elButton span:contains("ready to start this challenge")').closest('a').addClass('fp_new_sticky_btn')
                $('.elButton span:contains("ready to start this challenge ")').closest('a').text('Yes! I’m ready to take control')


                $('body').prepend(sticky)

            } else {
                var sticky = '<a target="_blank" href="' + $('.elButton span:contains("RESERVE YOUR SPOT")').eq(2).closest('a').attr('href') + '" class="fp_new_sticky_cta"> Yes! I’m ready to take control </a>'

                $('.elButton span:contains("RESERVE YOUR SPOT")').closest('a').text('Yes! I’m ready to take control')

                $('body').prepend(sticky)


            }



        })

        $(window).scroll(function() {

            if (window.location.href.includes('muscle-program5')) {
                height = $('div:contains("Before you run off with your macros")').closest('.container').offset().top
            } else {
                height = $('div:contains("6 WEEK BODY TRANSFORMATION CHALLENGE")').closest('.container').offset().top
            }


            if ($(this).scrollTop() + window.innerHeight > height) {
                // console.log($(this).scrollTop()+ window.innerHeight, 'HEIGHT: ', height)
                $('.fp_new_sticky_cta').css('bottom', '0px')
            }
            if ($(this).scrollTop() + window.innerHeight < height) {
                // console.log($(this).scrollTop()+ window.innerHeight, 'HEIGHT: ', height)
                $('.fp_new_sticky_cta').css('bottom', '-100px')
            }
        })






    },
    attachEvents: function() {


        $('.fp_new_sticky_cta').on('click', function() {
            window._fpEvent.push(["eventConversion", {
                value: "stickyCTA"
            }]);
        })


        // All original cta clicks
        // Muscles
        $('.elButton span:contains("CHALLENGE ACCEPTED")').closest('a').on('click', function() {
            window._fpEvent.push(["eventConversion", {
                value: "allCTAsClick"
            }]);
        })

        $('.elButton span:contains("ready to start this challenge")').closest('a').on('click', function() {
            window._fpEvent.push(["eventConversion", {
                value: "allCTAsClick"
            }]);
        })


        // Optin Orange and Red
        $('.elButton span:contains("RESERVE YOUR SPOT")').closest('a').on('click', function() {
            window._fpEvent.push(["eventConversion", {
                value: "allCTAsClick"
            }]);
        })

        $('.elButton span:contains("EVERYTHING FOR JUST $100")').closest('a').on('click', function() {
            window._fpEvent.push(["eventConversion", {
                value: "allCTAsClick"
            }]);
        })



    }

}.init();