var FP_LP_DONATIONS_TRUST = {
    init: function() {
        this.addLogo();
        this.addHero();
        this.hideExtras();
        this.paymentForm();
        this.addLifetime();
        this.addVideo();
        this.lastCTA();
        this.attachEvents();
    },
    addLogo: function() {
        var logo = '<div class="fp_logo"> <img src="https://variations-cdn.figpii.com/variations/gravitychallenges/optin-lp/logo.png"> </div>'
        $('.containerWrapper').prepend(logo);
    },
    addHero: function() {
        var hero;
        if (window.location.href.includes('order-')) {
            hero = '<div class="fp_hero"> <p> It\'s a win-win! <br> Gain 15 LBS in 12 Weeks <br> and Get Your Money Back! </p> </div>'
        } else {
            hero = '<div class="fp_hero"> <p> It\'s a win-win! <br> Lose the weight in 6 weeks <br> and Get Your Money Back! </p> </div>'
        }
        $('.fp_logo').after(hero);
        var close = '<svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="0.987419" y="0.0805664" width="15.3606" height="1.39642" rx="0.69821" transform="rotate(45 0.987419 0.0805664)" fill="#C4C4C4"/><rect x="11.8698" y="0.987427" width="15.3606" height="1.39642" rx="0.69821" transform="rotate(135 11.8698 .987427)" fill="#C4C4C4"/></svg>';
        var tooltip = '<div class="fp_tooltip_container">'
        tooltip += '<div class="fp_tooltip mopney"> <div class="fp_tooltip_number"> 100% </div>       <div class="fp_tooltip_title"> Money-Back <br> Guarantee <div class="fp_tooltip_icon" ><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAOCAYAAAASVl2WAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADoSURBVHgBlY69ccJAFIR3T8KxS1AB2HODG3AJ7oBxB3YGTuQMMpsOpAosVwA0ABp+YqACyCAQ93jHgAYNQ8BGe2/fvf0IVctOX0nGIKw+HyHIheh1R/WEX415LJBvHS6F8q8LGwqbuhyp/wydkxWM9Lrjpw+c1LLjhKwt1MbEDbUbs7WvMzfCHx8KkFQu6OmIQe1PeRRWsq0r3lkJzUNfg8jDdUb1Xz8vKxgE/lfkz57DyoII7ckOL2vD0rkiEYSDHYoc96iEbL9M3iBBE26fdvLn7LoCJlYSC+NhkV1BYo/0CAuXXlYcAOnKUYqj6fKnAAAAAElFTkSuQmCC"> <div class="fp_tooltip_text"> ' + $('div.ne div:contains("You put down a $100 refundable security deposit. ")').text() + '<div class="fp_close">' + close + '</div> </div> </div> </div>    </div>'
        tooltip += '<div class="fp_tooltip success"> <div class="fp_tooltip_number"> 93% </div>       <div class="fp_tooltip_title"> Success <br> Rate <div class="fp_tooltip_icon" ><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAOCAYAAAASVl2WAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADoSURBVHgBlY69ccJAFIR3T8KxS1AB2HODG3AJ7oBxB3YGTuQMMpsOpAosVwA0ABp+YqACyCAQ93jHgAYNQ8BGe2/fvf0IVctOX0nGIKw+HyHIheh1R/WEX415LJBvHS6F8q8LGwqbuhyp/wydkxWM9Lrjpw+c1LLjhKwt1MbEDbUbs7WvMzfCHx8KkFQu6OmIQe1PeRRWsq0r3lkJzUNfg8jDdUb1Xz8vKxgE/lfkz57DyoII7ckOL2vD0rkiEYSDHYoc96iEbL9M3iBBE26fdvLn7LoCJlYSC+NhkV1BYo/0CAuXXlYcAOnKUYqj6fKnAAAAAElFTkSuQmCC"> <div class="fp_tooltip_text">' + $('div.ne:contains("Over 10,000 people have been through this program and")').text() + '<div class="fp_close">' + close + '</div></div> </div>     </div>    </div>'
        tooltip += '</div>'

        $('.fp_hero').append(tooltip)

        $(document).on('click', '.fp_tooltip_icon', function() {
            var that = this
            setTimeout(function() { $(that).addClass('active') }, 5);
        })



        $(document).on('click', '.fp_close', function() {
            setTimeout(function() { $('.fp_tooltip_icon').removeClass('active') }, 10);
        })
        $(document).on('click', '.containerWrapper', function() {
            $('.fp_tooltip_icon').removeClass('active')
        })
    },
    hideExtras: function() {
        $(window).on('load', function() {
            $('.elVideoWrapper').closest('.row').hide()
            $('b:contains("Gain 15 LBS in 12 Weeks")').closest('.row').hide()
            $('img[src*="Untitled-design.png"]').closest('.container').hide();
            $('.elOrderProductOptinItem:contains("Item")').closest('.elProductOptionsBox').hide();
            $('div.ne:contains("Over 10,000 people have been through this program and")').closest('.row').hide();

            $('.embedsocial-reviews-iframe').closest('.fullContainer').css('padding-bottom', '0px')

        })
    },
    paymentForm: function() {
        $('.elOrderProductOptinItem:contains("Item")').closest('.container').addClass('fp_payment_form_container');


        var formTitle = '<h3 class="fp_form_title"> REGISTER NOW. </h3>'
        $('.elOrderProductOptinItem:contains("Item")').closest('.elProductOptionsBox').after(formTitle);

        $('span:contains("Complete Registration")').closest('a').addClass('fp_cta');
        $('span:contains("Complete Registration")').closest('div').addClass('fp_cta_container');

        $('span:contains("Complete Registration")').text('Start My Challenge')

        var cartTable = '<div class="fp_cart">'
        cartTable += '<div class="fp_cart_header"> <div> Item </div> <div> Price </div> </div>'
        cartTable += '<div class="fp_cart_item"> <div> 6 Week Challenge <br> Security Deposit - Lose 20 lb </div> <div> <span> Was <i>$500</i> </span> <div>Now $100</div> </div> </div>'
        cartTable += '</div>'

        $('.fp_cta_container').prepend(cartTable)

        $('div.ne:contains("Secure Order Form - 100% Protected & Safe")').closest('.de').addClass('fp_cta_slogan')

        $('.fp_cta_slogan').next('.de').hide();

        $('.panel').closest('.de').css('margin-top', '10px')
        $('div:contains("Disclaimer: Results")').closest('.row').addClass('footer')


    },
    addLifetime: function() {
        var close = '<svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="0.987419" y="0.0805664" width="15.3606" height="1.39642" rx="0.69821" transform="rotate(45 0.987419 0.0805664)" fill="#C4C4C4"/><rect x="11.8698" y="0.987427" width="15.3606" height="1.39642" rx="0.69821" transform="rotate(135 11.8698 .987427)" fill="#C4C4C4"/></svg>';

        var lifetime = '<div class="fp_lifetime">'
        lifetime += '<div class="fp_lifetime_item money">          <span> 100% </span>                 <div class="fp_lifetime_text"> Money-Back <br> Guarantee                <div class="fp_tooltip_icon" ><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAOCAYAAAASVl2WAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAACESURBVHgBnVBBDYAwEGtQgAQkIAEJSEACDsABOCAoQAJBwSRMwiSMG3RhWXYfmjR3Wy9dd4DAe98JT6HzL4xwAMWJl1a4Cmf2AWMYGIKABHJuOOCgIT6niQsdNhSsDcVDWOfiF65g25dsq6RvWS8owRourMYvMENI3msD8XsWSsg9qw9uQ52lFsHvl30AAAAASUVORK5CYII="> <div class="fp_tooltip_text">' + $('div.ne div:contains("You put down a $100 refundable security deposit. ")').text() + '<div class="fp_close">' + close + '</div></div> </div>             </div> </div>'

        lifetime += '<div class="fp_lifetime_item access"><span> Lifetime </span> <div class="fp_lifetime_text"> Access <br> To Materials </div> </div>'

        lifetime += '<div class="fp_lifetime_item success">          <span> 93% </span>                 <div class="fp_lifetime_text"> Success <br> Rate                <div class="fp_tooltip_icon" ><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAOCAYAAAASVl2WAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAACESURBVHgBnVBBDYAwEGtQgAQkIAEJSEACDsABOCAoQAJBwSRMwiSMG3RhWXYfmjR3Wy9dd4DAe98JT6HzL4xwAMWJl1a4Cmf2AWMYGIKABHJuOOCgIT6niQsdNhSsDcVDWOfiF65g25dsq6RvWS8owRourMYvMENI3msD8XsWSsg9qw9uQ52lFsHvl30AAAAASUVORK5CYII="> <div class="fp_tooltip_text">' + $('div.ne:contains("Over 10,000 people have been through this program and")').text() + '<div class="fp_close">' + close + '</div></div> </div>              </div> </div>'

        lifetime += '</div>'
        $('.fp_cta').closest('.container').after(lifetime)
    },
    addVideo: function() {


        $(window).on('load', function() {
            if ($('.video-sound-overlay').length) {
                $('.dropZoneForSections').next('.fullContainer').eq(0).after('<div class="p-3"></div>')
                $('.video-sound-overlay').closest('.elVideoWrapper').appendTo('.p-3')
            } else {
                $('.dropZoneForSections').next('.fullContainer').eq(0).after('<div class="fp_imageWrapper"></div>')
                $('.fp_imageWrapper').append($('div:contains("Over 10 Years Lean Bulking")').closest('div.elHeadlineWrapper').prev('.elImageWrapper').html());
                $('.fp_imageWrapper').append($('div:contains("Over 10 Years Lean Bulking")').closest('div.elHeadlineWrapper').html());
            }
        })


        // $(window).on('load', function() {

        //     $('.dropZoneForSections').next('.fullContainer').eq(0).after('<div class="p-3">' + $('.video-sound-overlay').closest('.elVideoWrapper').html() + '</div>')
        // })
    },
    lastCTA: function() {

        $('span:contains("Ready To Start My Transformation!")').closest('a').addClass('fp_lastCTA')
        $('span:contains("Ready To Start My Transformation!")').closest('a').text('Start My Challenge');
    },
    attachEvents: function() {

        $(document).on('click', '.fp_cta', function() {
            console.log("EVENT")
            window._fpEvent.push(["eventConversion", {
                value: "orderConfirm"
            }]);
        })

        $(document).on('click', '.fp_lastCTA', function() {
            console.log("EVENT")
            window._fpEvent.push(["eventConversion", {
                value: "activeGoToTop"
            }]);
        })

        $(document).on('click', '.money', function() {
            console.log("EVENT")
            window._fpEvent.push(["eventConversion", {
                value: "moneyBack"
            }]);
        })

        $(document).on('click', '.success', function() {
            console.log("EVENT")
            window._fpEvent.push(["eventConversion", {
                value: "Success"
            }]);
        })

        $(document).on('click', '.video-sound-overlay', function() {
            console.log("EVENT")
            window._fpEvent.push(["eventConversion", {
                value: "videoClick"
            }]);
        })

    }

}.init();