var FP_LP_DONATIONS_TRUST = {
    init: function() {
        this.addLogo();
        this.addHero();
        this.freePlan();
        this.aboveVideo();
        this.fixVideo();
        this.attachEvents();
    },
    addLogo: function() {
        var logo = '<div class="fp_logo"> <img src="https://variations-cdn.figpii.com/variations/gravitychallenges/optin-lp/logo-desktop.png"> </div>'
        $('.containerWrapper').prepend(logo);
    },
    addHero: function() {
        var watchVideo = '<a class="fp_watch" href="#"> Watch Video To Learn More </a>';
        var cta = $('.elButtonSubtle').parent('div')[0].innerHTML

        var hero = '<div class="fp_hero"><div class="w-50 pr-50"> <h1 class="title"> WE CAN HELP YOU IMPLEMENT YOUR DIET PLAN ABSOLUTELY FREE </h1> <h3 class="subtitle"> More diet plans are available if you join our 6 Week Challenge</h3><p> we will help you to understand which workout, diet, training plan is right for you. Your personal coach will help you succeed and keep you on track. </p> <div class="cta_container"> ' + cta + watchVideo + '</div></div></div>'
        $('.fp_logo').after(hero);

        $('.fp_hero .elButton .elButtonMain').text('Reserve Your Spot')

        $('.fp_hero .elButton').css('font-size', '')
        $('.fp_hero .elButton').addClass('cta')
    },
    freePlan: function() {


        $('.fp_hero').after('<div class="fp_freeplan_container"></div>');
        var freePlan = '<div class="fp_freeplan w-50"> <h3 class="title"> Your Free Diet Plan </h3> <h6 class="subtitle"> Lose 20 LBS or 5% Body Fat in 6 Weeks with our 6 Week Challenge </h6> <div class="fp_freeplan_list"> </div> </div>';



        // Add Static data
        $('.fp_hero').append(freePlan);


        // Add Progressbar
        var progressbar = '<div class="fp_progressbar_container"><div class="fp_progressbar"> <div class="overlay"></div><div class="carbohydrate"></div> <div class="protein"></div> <div class="fat"></div> </div></div>';
        $('.fp_freeplan_list').prepend(progressbar);

        var labels = '<div class="fp_progressbar_labels"><div class="carbohydrate"> <img src="https://variations-cdn.figpii.com/variations/gravitychallenges/optin-lp/carbohydrate-min.svg"> <span> ... </span> </div>  <div class="protein"> <img src="https://variations-cdn.figpii.com/variations/gravitychallenges/optin-lp/protein-min.svg"> <span> ... </span> </div>  <div class="fat"> <img src="https://variations-cdn.figpii.com/variations/gravitychallenges/optin-lp/fat-min.svg"> <span> ... </span> </div></div>'
        $('.fp_progressbar_container').append(labels);

        function fillDietPlan(planData) {
            $('#carbohydrateValue').text(planData.carbs + ' G')
            $('#proteinValue').text(planData.protein + ' G')
            $('#fatValue').text(planData.fat + ' G')
            $('#activityValue').text(planData.activity)

            var sum = parseInt(planData.carbs) + parseInt(planData.protein) + parseInt(planData.fat);

            var carbs = Math.ceil((parseInt(planData.carbs) / sum) * 100)
            $('.carbohydrate > span').text(carbs + ' %')
            $('.fp_progressbar .carbohydrate').css('width', carbs + '%')

            var protein = Math.ceil((parseInt(planData.protein) / sum) * 100)
            $('.protein > span').text(protein + ' %')
            $('.fp_progressbar .protein').css('width', protein + '%')
            $('.fp_progressbar .protein').css('left', carbs + '%')

            var fat = 100 - (carbs + protein)
            $('.fat > span').text(fat + ' %')
            $('.fp_progressbar .fat').css('width', fat + '%')
            $('.fp_progressbar .fat').css('left', carbs + protein + '%')

        }



        window.addEventListener("message", function(event) {
            if (event.origin === "https://gravitytransformation.com" && typeof event.data.substr === "function" && event.data.substr(0, 11) === "[fpsetdata]") {
                var planData = JSON.parse(event.data.substr(11));
                console.log(">>>>>>>", planData)
                if (planData) {
                    clearInterval(getDataFromIframe)
                    fillDietPlan(planData);
                }
            }
        });

        var getDataFromIframe = setInterval(function() {
            var iframe = document.getElementById("resultIframe");

            if (iframe) {
                iframe.contentWindow.postMessage("[fpgetdata]", "https://gravitytransformation.com");
            }
        }, 500);






        $('.fp_freeplan_list').append('<div class="fp_freeplan_item"> <div class="label"> <img src="https://variations-cdn.figpii.com/variations/gravitychallenges/optin-lp/carbohydrate.svg"> Carbohydrates </div> <div class="value" id="carbohydrateValue"> ... </divhjn> </div>');

        $('.fp_freeplan_list').append('<div class="fp_freeplan_item"> <div class="label"> <img src="https://variations-cdn.figpii.com/variations/gravitychallenges/optin-lp/protein.svg"> Protein </div> <div class="value" id="proteinValue"> ... </divhjn> </div>');

        $('.fp_freeplan_list').append('<div class="fp_freeplan_item"> <div class="label"> <img src="https://variations-cdn.figpii.com/variations/gravitychallenges/optin-lp/fat.svg"> Fat </div> <div class="value" id="fatValue"> ... </divhjn> </div>');

        $('.fp_freeplan_list').append('<div class="fp_freeplan_item"> <div class="label"> <img src="https://variations-cdn.figpii.com/variations/gravitychallenges/optin-lp/activity.svg"> Activity </div> <div class="activityProgressbar"></div><div class="value" id="activityValue"> </div> </div>');
    },
    aboveVideo: function() {
        $(window).on('load', function() {

            var text = $('.elHeadline b:contains("In The")').html()
            text = text.split(' and ')
            var h1 = '<h4 class="fp_newHeadline">' + text[0].replace(' Exactly', '') + '</h4>';
            var h2 = '<p class="fp_newDescription">' + text[1] + '. </p>';

            $('.elHeadline b:contains("In The")').hide();
            $('.fp_freeplan_container').after('<div class="fp_newHeadline_container">' + h1 + h2 + '</div>')
        })
    },
    fixVideo: function() {
        $(window).on('load', function() {

            $('div[data-title=cf-vimeo-video]').addClass('fp_video');

            $('iframe[src*="https://player.vimeo.com"]').closest('.bgCover').addClass('fp_video_container');

            $('div[data-title=cf-vimeo-video]').removeClass('elVideoSkin2');

            // Remove progress bar under the video
            $($('.fullContainer > .containerInner.ui-sortable > .row.bgCover:nth-child(4)')[0]).hide()

            // Hide an empty div above the video
            $('div.progress-bar:contains(Loading Your)').closest(".row.bgCover").hide()

            // Remove the top padding of video-container
            $($('.container.fullContainer')[0]).css('padding-top', '0')

            // Remove main Iframe
            $($('.fullContainer > .containerInner.ui-sortable > .row.bgCover:nth-child(1) .elCustomJs')[0]).hide()

            // Add CTA
            var cta = $('.elButtonSubtle').parent('div')[2].innerHTML;
            var ctaBottom = '<div class="fp_join"> Join Our Money-Back Guarantee Challenge </div>'
            $('.fp_video').append(cta + ctaBottom)

            $('.fp_video .elButton .elButtonMain').text('Reserve Your Spot')


            // Video's sound overlay
            console.log("VIDEO: ", $('.video-sound-overlay'))

            // scroll to video 
            $('.fp_watch').on('click', function() {
                $('html, body').animate({
                    scrollTop: ($('.fp_video_container').offset().top)
                }, 500);
                setTimeout(function() { $('.video-sound-overlay').click() }, 500)
            })


            window.addEventListener('scroll', function(event) {
                event.stopPropagation();
            }, true);


        })



    },

    attachEvents: function() {


        $('.cta_container a.elButton').on('click', function() {
            window._fpEvent.push(["eventConversion", {
                value: "reserveAboveFold"
            }]);
        })


        $('.fp_video_container a.elButton').on('click', function() {
            window._fpEvent.push(["eventConversion", {
                value: "reserveUnderVideo"
            }]);
        })


        $('.fp_watch').on('click', function() {
            window._fpEvent.push(["eventConversion", {
                value: "goToVideo"
            }]);
        })
    }

}.init();