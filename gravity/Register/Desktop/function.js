var FP_LP_DONATIONS_TRUST = {
    init: function() {
        if ($(window).width() > 1024) {
            this.addLogo();
            this.addHero();
            this.hideExtras();
            this.paymentForm();
            this.addComments();
            // this.addLifetime();
            this.addVideo();
            this.lastCTA();
            this.attachEvents();
        }
    },
    addLogo: function() {
        var logo = '<div class="fp_logo fullContainer"> <div class="containerInner"> <img src="https://variations-cdn.figpii.com/variations/gravitychallenges/optin-lp/logo.png"> </div> </div>'
        $('.containerWrapper').prepend(logo);
    },
    addHero: function() {
        var hero, moneyBackText;
        if (window.location.href.includes('order-2849')) {
            hero = '<div class="fp_hero"> <h2>  It\'s a win-win! </h2> <p>Be 20LBs or 5% Leaner In 6 Weeks And Get Your Money Back!</p> </div>';
            moneyBackText = "You put down a $100 refundable security deposit. Don't Cheat, Don't Quit, Be 20LBs or 5% Leaner In 6 Weeks, And You Get The Whole Thing Back. It's a free challenge, but you have to earn it."
        } else if (window.location.href.includes('order-2845')) {
            hero = '<div class="fp_hero"> <h2> It\'s a win-win! </h2> <p> Gain 15 LBS in 12 Weeks and Get Your Money Back! </p> </div>';
            moneyBackText = "You put down a $100 refundable security deposit. Don't Cheat, Don't Quit, gain 15 pounds in 12 weeks, And You Get The Whole Thing Back. It's a free challenge, but you have to earn it."
        } else {
            hero = '<div class="fp_hero"> <h2> It\'s a win-win! </h2> <p> Lose the weight in 6 weeks and Get Your Money Back! </p> </div>';
            moneyBackText = "You put down a $100 refundable security deposit. Don't Cheat, Don't Quit, Lose 20lbs or 5% Bodyfat in 6 weeks, And You Get The Whole Thing Back. It's a free challenge, but you have to earn it."
        }

        $('.fp_logo').after(hero);
        var successText = "Over 15,000 people have been through this program and 93% of them hit their goals because they have skin in the game. The way our business makes money is after you lose a whole bunch of weight, you'll get addicted and want to continue training."
        var close = '<svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="0.987419" y="0.0805664" width="15.3606" height="1.39642" rx="0.69821" transform="rotate(45 0.987419 0.0805664)" fill="#C4C4C4"/><rect x="11.8698" y="0.987427" width="15.3606" height="1.39642" rx="0.69821" transform="rotate(135 11.8698 .987427)" fill="#C4C4C4"/></svg>';
        var tooltip = '<div class="fp_tooltip_container">'
        tooltip += '<div class="fp_tooltip money"> <div class="fp_tooltip_number"> 100% </div>       <div class="fp_tooltip_title"> Money-Back <br> Guarantee <div class="fp_tooltip_icon" ><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAOCAYAAAASVl2WAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADoSURBVHgBlY69ccJAFIR3T8KxS1AB2HODG3AJ7oBxB3YGTuQMMpsOpAosVwA0ABp+YqACyCAQ93jHgAYNQ8BGe2/fvf0IVctOX0nGIKw+HyHIheh1R/WEX415LJBvHS6F8q8LGwqbuhyp/wydkxWM9Lrjpw+c1LLjhKwt1MbEDbUbs7WvMzfCHx8KkFQu6OmIQe1PeRRWsq0r3lkJzUNfg8jDdUb1Xz8vKxgE/lfkz57DyoII7ckOL2vD0rkiEYSDHYoc96iEbL9M3iBBE26fdvLn7LoCJlYSC+NhkV1BYo/0CAuXXlYcAOnKUYqj6fKnAAAAAElFTkSuQmCC"> <div class="fp_tooltip_text"> ' + moneyBackText + '</div> </div> </div>    </div>'
        tooltip += '<div class="fp_tooltip access"> <div class="fp_tooltip_number"> Lifetime </div>       <div class="fp_tooltip_title"> Access To <br> Materials </div>    </div>'
        tooltip += '<div class="fp_tooltip success"> <div class="fp_tooltip_number"> 93% </div>       <div class="fp_tooltip_title"> Success <br> Rate <div class="fp_tooltip_icon" ><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAOCAYAAAASVl2WAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADoSURBVHgBlY69ccJAFIR3T8KxS1AB2HODG3AJ7oBxB3YGTuQMMpsOpAosVwA0ABp+YqACyCAQ93jHgAYNQ8BGe2/fvf0IVctOX0nGIKw+HyHIheh1R/WEX415LJBvHS6F8q8LGwqbuhyp/wydkxWM9Lrjpw+c1LLjhKwt1MbEDbUbs7WvMzfCHx8KkFQu6OmIQe1PeRRWsq0r3lkJzUNfg8jDdUb1Xz8vKxgE/lfkz57DyoII7ckOL2vD0rkiEYSDHYoc96iEbL9M3iBBE26fdvLn7LoCJlYSC+NhkV1BYo/0CAuXXlYcAOnKUYqj6fKnAAAAAElFTkSuQmCC"> <div class="fp_tooltip_text">' + successText + '</div> </div>     </div>    </div>'
        tooltip += '</div>'

        $('.fp_hero').append(tooltip)

        // $(document).on('click','.fp_tooltip_icon',function(){
        // 	var that = this
        // 	setTimeout(function() {$(that).addClass('active')}, 1);	
        // })

        $('.fp_tooltip_icon').hover(function() {
            var that = this
            setTimeout(function() { $(that).addClass('active') }, 1);
        }, function() {
            $('.fp_tooltip_icon').removeClass('active')
        })



        // $(document).on('click', '.fp_close',function(){
        //  setTimeout(function() {$('.fp_tooltip_icon').removeClass('active')}, 100);	
        // })
        // $(document).on('click','.containerWrapper',function(){
        // 	$('.fp_tooltip_icon').removeClass('active')
        // })
    },
    hideExtras: function() {
        $(window).on('load', function() {
            $('.elVideoWrapper').closest('.row').hide()
            $('b:contains("Gain 15 LBS in 12 Weeks")').closest('.row').hide()
            $('img[src*="Untitled-design.png"]').closest('.container').hide();
            $('img[src*="Untitled-design2.png"]').closest('.container').hide();
            $('.elOrderProductOptinItem:contains("Item")').closest('.elProductOptionsBox').hide();
            $('div.ne:contains("Over 10,000 people have been through this program and")').closest('.row').hide();

            $('div:contains("Disclaimer: Results")').closest('.containerInner').removeClass('containerInner');
            $('div:contains("Disclaimer: Results")').closest('.container').css('padding-bottom', '0px')


            $('img.credit-card-icon').attr('src', 'data:image/png;base64,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');
            $('.panel').closest('.de').css('margin-top', '10px')
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
        cartTable += '<div class="fp_cart_item"> <div> Challenge Security Deposit </div> <div> <span> Was <i>$500</i> </span> <div>Now $100</div> </div> </div>'
        cartTable += '</div>'

        $('.fp_cta_container').prepend(cartTable)

        $('div.ne:contains("Secure Order Form - 100% Protected & Safe")').closest('.de').addClass('fp_cta_slogan')

        $('.fp_cta_slogan').next('.de').hide();


        $('div:contains("Disclaimer: Results")').closest('.row').addClass('footer')


    },
    addComments: function() {
        $('.fp_payment_form_container > div').addClass('fp_form')
        $('.fp_payment_form_container').append('<iframe src="https://embedsocial.com/api/reviews/widget/d1303b3bbcb11bd8f87d42551c858e3437982fa3"> </iframe>')
    },
    addLifetime: function() {
        var moneyBackText;

        if (window.location.href.includes('order-2845')) {
            moneyBackText = "You put down a $100 refundable security deposit. Don't Cheat, Don't Quit, gain 15 pounds in 12 weeks, And You Get The Whole Thing Back. It's a free challenge, but you have to earn it."
        } else if (window.location.href.includes('order-2849')) {
            moneyBackText = "You put down a $100 refundable security deposit. Don't Cheat, Don't Quit, Be 20LBs or 5% Leaner In 6 Weeks, And You Get The Whole Thing Back. It's a free challenge, but you have to earn it."
        } else {
            moneyBackText = "You put down a $100 refundable security deposit. Don't Cheat, Don't Quit, Lose 20lbs or 5% Bodyfat in 6 weeks, And You Get The Whole Thing Back. It's a free challenge, but you have to earn it."
        }

        var successText = "Over 15,000 people have been through this program and 93% of them hit their goals because they have skin in the game. The way our business makes money is after you lose a whole bunch of weight, you'll get addicted and want to continue training."

        var close = '<svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="0.987419" y="0.0805664" width="15.3606" height="1.39642" rx="0.69821" transform="rotate(45 0.987419 0.0805664)" fill="#C4C4C4"/><rect x="11.8698" y="0.987427" width="15.3606" height="1.39642" rx="0.69821" transform="rotate(135 11.8698 .987427)" fill="#C4C4C4"/></svg>';

        var lifetime = '<div class="fp_lifetime">'
        lifetime += '<div class="fp_lifetime_item money">          <span> 100% </span>                 <div class="fp_lifetime_text"> Money-Back <br> Guarantee                <div class="fp_tooltip_icon" ><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAOCAYAAAASVl2WAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAACESURBVHgBnVBBDYAwEGtQgAQkIAEJSEACDsABOCAoQAJBwSRMwiSMG3RhWXYfmjR3Wy9dd4DAe98JT6HzL4xwAMWJl1a4Cmf2AWMYGIKABHJuOOCgIT6niQsdNhSsDcVDWOfiF65g25dsq6RvWS8owRourMYvMENI3msD8XsWSsg9qw9uQ52lFsHvl30AAAAASUVORK5CYII="> <div class="fp_tooltip_text">' + moneyBackText + '<div class="fp_close">' + close + '</div></div> </div>             </div> </div>'

        lifetime += '<div class="fp_lifetime_item access"><span> Lifetime </span> <div class="fp_lifetime_text"> Access <br> To Materials </div> </div>'

        lifetime += '<div class="fp_lifetime_item success">          <span> 93% </span>                 <div class="fp_lifetime_text"> Success <br> Rate                <div class="fp_tooltip_icon" ><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAOCAYAAAASVl2WAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAACESURBVHgBnVBBDYAwEGtQgAQkIAEJSEACDsABOCAoQAJBwSRMwiSMG3RhWXYfmjR3Wy9dd4DAe98JT6HzL4xwAMWJl1a4Cmf2AWMYGIKABHJuOOCgIT6niQsdNhSsDcVDWOfiF65g25dsq6RvWS8owRourMYvMENI3msD8XsWSsg9qw9uQ52lFsHvl30AAAAASUVORK5CYII="> <div class="fp_tooltip_text">' + successText + '<div class="fp_close">' + close + '</div></div> </div>              </div> </div>'

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
    },
    lastCTA: function() {

        $('span:contains("Ready To Start My Transformation!")').closest('a').addClass('fp_lastCTA')
        $('span:contains("Ready To Start My Transformation!")').closest('a').text('Start My Challenge');
    },
    attachEvents: function() {

        $(document).on('click', '.fp_cta', function() {
            window._fpEvent.push(["eventConversion", {
                value: "orderConfirm"
            }]);
        })

        $(document).on('click', '.fp_lastCTA', function() {
            window._fpEvent.push(["eventConversion", {
                value: "activeGoToTop"
            }]);
        })

        $(document).on('click', '.money', function() {
            window._fpEvent.push(["eventConversion", {
                value: "moneyBack"
            }]);
        })
        $('.money img').hover(function() {
            window._fpEvent.push(["eventConversion", {
                value: "moneyBack"
            }]);
        })

        $(document).on('click', '.success', function() {
            window._fpEvent.push(["eventConversion", {
                value: "Success"
            }]);
        })
        $('.success img').hover(function() {
            window._fpEvent.push(["eventConversion", {
                value: "Success"
            }]);
        })

        $(document).on('click', '.p-3', function() {
            window._fpEvent.push(["eventConversion", {
                value: "videoClick"
            }]);
        })

    }

}.init();