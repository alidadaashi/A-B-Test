var FP_LP_DONATIONS_TRUST = {
    init: function() {
        if ($(window).width() > 1225) {
            this.changeBtns();
            this.addCTA();
            this.attachEvents();
        }
    },
    changeBtns: function() {
        // change the text of original cta
        $('.cta_container > a.elButton').closest('a').text('Yes! I’m Ready To Take Control')

        $('.elButton span:contains("RESERVE YOUR SPOT")').closest('a').text('Yes! I’m Ready To Take Control')
        $('.elButton span:contains("CHALLENGE ACCEPTED")').closest('a').text('Yes! I’m Ready To Take Control')
        $('.elButton span:contains("ready to start this challenge")').closest('a').text('Yes! I’m Ready To Take Control')

        $('a.elButton:contains("Yes! I’m Ready To Take Control")').closest('a').addClass('fp__new__cta')


    },
    addCTA: function() {




        var that = this;



        var sticky = '<div class="fp_new_sticky_container">'
        sticky += '<img class="fp_new_sticky_image" src="https://gravitychallenges.com/hosted/images/ca/0796f0530f11e8b28695bada5c63d9/Mobile-Workouts.png" >'
        sticky += '<div class="fp_new_sticky_slogan"><p> It’s not a program, it’s a lifestyle change </p> <span>Money-Back Guarantee ı Lifetime Access</span></div> <a target="_blank" class="fp_new_sticky_btn" href="#" > Yes! I’m ready to take control </a>'
        sticky += '</div>'

        $('body').prepend(sticky);

        var height;

        $(window).on('load', function() {

            // $('.cta_container .fp__new__cta').removeClass('fp__new__cta')

            if (window.location.href.includes('muscle-program5')) {

                $('.fp_new_sticky_btn').attr('href', $('a.elButton:contains("Yes! I’m Ready To Take Control")').eq(2).closest('a').attr('href'))

            } else {
                $('.fp_new_sticky_btn').attr('href', $('.elButton span:contains("RESERVE YOUR SPOT")').eq(2).closest('a').attr('href'))

            }




        })

        $(window).scroll(function() {

            if (window.location.href.includes('muscle-program5')) {
                // Muscle page
                height = $('div:contains("Before you run off with your macros")').closest('.container').offset().top
            } else {
                // Optin page
                height = $('div:contains("6 WEEK BODY TRANSFORMATION CHALLENGE")').closest('.container').offset().top
            }

            if ($(this).scrollTop() + window.innerHeight > height) {
                // console.log($(this).scrollTop(), 'HEIGHT>>>>>: ', height)
                $('.fp_new_sticky_container').css('bottom', '0')
            }
            if ($(this).scrollTop() + window.innerHeight < height) {
                // console.log($(this).scrollTop(), 'HEIGHT<<<: ', height)
                $('.fp_new_sticky_container').css('bottom', '-150px')
            }
        })

    },
    attachEvents: function() {


        $('.fp_new_sticky_btn').on('click', function() {
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