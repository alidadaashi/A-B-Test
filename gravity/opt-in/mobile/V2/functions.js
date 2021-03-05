var FP_LP_DONATIONS_TRUST = {
    init: function() {
        this.addLogo();
        this.addHero();
        this.freePlan();
        this.mobileSection();
        this.expandFunctionality();
        this.aboveVideo();
        this.fixVideo();
        this.attachEvents();
    },
    addLogo: function() {
        var logo = '<div class="fp_logo"> <img src="https://variations-cdn.figpii.com/variations/gravitychallenges/optin-lp/logo.png"> </div>'
        $('.containerWrapper').prepend(logo);
    },
    addHero: function() {
        var hero = '<div class="fp_hero"> <p> We can help you <br> Implement Your Diet Plan <br> <span>absolutely</span> FREE </p> <h3 class="title"> YOUR FREE DIET PLAN </h3> <h6 class="subtitle"> Lose 20 LBS or 5% Body Fat in 6 Weeks with our 6 Week Challenge </h6> </div>'
        $('.fp_logo').after(hero);
    },
    freePlan: function() {


        $('.fp_hero').after('<div class="fp_freeplan_container">' + '</div>');
        var freePlan = '<div class="fp_freeplan"> <div class="fp_freeplan_list"> </div> </div>';


        // Add Static data
        $('.fp_freeplan_container').prepend(freePlan);


        // Add Progressbar
        var progressbar = '<div class="fp_progressbar_container"><div class="fp_progressbar"> <div class="overlay"></div><div class="carbohydrate"></div> <div class="protein"></div> <div class="fat"></div> </div></div>';
        $('.fp_freeplan_list').prepend(progressbar);

        var labels = '<div class="fp_progressbar_labels"><div class="carbohydrate"> <img src="https://variations-cdn.figpii.com/variations/gravitychallenges/optin-lp/carbohydrate-min.svg"> <span> ... </span> </div>  <div class="protein"> <img src="https://variations-cdn.figpii.com/variations/gravitychallenges/optin-lp/protein-min.svg"> <span> ... </span> </div>  <div class="fat"> <img src="https://variations-cdn.figpii.com/variations/gravitychallenges/optin-lp/fat-min.svg"> <span> ... </span> </div></div>'
        $('.fp_progressbar_container').append(labels)


        function fillDietPlan(planData) {
            $('#carbohydrateValue').text(planData.carbs + ' G')
            $('#proteinValue').text(planData.protein + ' G')
            $('#fatValue').text(planData.fat + ' G')
            $('#activityValue').text(planData.activity)
            $('.activityProgressbar').addClass(planData.activity);

            var sum = planData.carbs + planData.protein + planData.fat;

            var carbs = Math.ceil((planData.carbs / sum) * 100)
            $('.carbohydrate > span').text(carbs + ' %')
            $('.fp_progressbar .carbohydrate').css('width', carbs + '%')

            var protein = Math.ceil((planData.protein / sum) * 100)
            $('.protein > span').text(protein + ' %')
            $('.fp_progressbar .protein').css('width', protein + '%')
            $('.fp_progressbar .protein').css('left', carbs + '%')

            var fat = 100 - (carbs + protein)
            $('.fat > span').text(fat + ' %')
            $('.fp_progressbar .fat').css('width', fat + '%')
            $('.fp_progressbar .fat').css('left', carbs + protein + '%')

        }


        $('.fp_freeplan_list').append('<div class="fp_freeplan_item"> <div class="label"> <img src="https://variations-cdn.figpii.com/variations/gravitychallenges/optin-lp/carbohydrate.svg"> Carbohydrates </div> <div class="value" id="carbohydrateValue"> ... </div> </div>');

        $('.fp_freeplan_list').append('<div class="fp_freeplan_item"> <div class="label"> <img src="https://variations-cdn.figpii.com/variations/gravitychallenges/optin-lp/protein.svg"> Protein </div> <div  class="value" id="proteinValue">  </div> </div>');

        $('.fp_freeplan_list').append('<div class="fp_freeplan_item"> <div class="label"> <img src="https://variations-cdn.figpii.com/variations/gravitychallenges/optin-lp/fat.svg"> Fat </div> <div class="value" id="fatValue"></div> </div>');

        $('.fp_freeplan_list').append('<div class="fp_freeplan_item"> <div class="label"> <img src="https://variations-cdn.figpii.com/variations/gravitychallenges/optin-lp/activity.svg"> Activity </div> <div class="activityProgressbar"></div> <div class="value" id="activityValue"> ' + '...' + '</div> </div>');
        fillDietPlan(this.calculateDietPlan());
    },
    mobileSection: function() {
        var watchVideo = '<a class="fp_watch" href="#"> Watch Video To Learn More </a>';
        var content = '<div class="fp_mobile_scetion_container" ><div class="fp_mobile_scetion"> <img src="https://variations-cdn.figpii.com/variations/gravitychallenges/optin-lp/Mobile-Workouts-cropped.png"> <h3 class="title"> More diet plans are available when you join our 6 Week Challenge</h3> </div><p class="content"> we will help you understand which workout, diet, and training plan is right for you. Your personal coach will help you succeed and keep you on track. </p></div>';

        $('.fp_freeplan').after(content);
        $('.fp_mobile_scetion_container').append($('.elButtonSubtle').parent('div')[0].innerHTML)
        $('.fp_mobile_scetion_container').append(watchVideo);

    },
    expandFunctionality: function() {
        $('.fp_accessBtn').on('click', function() {
            $(this).hide()
            $('.fp_freeplan').slideDown();
            $('.fp_mobile_scetion_container').slideDown()
        })
    },
    aboveVideo: function() {
        $(window).on('load', function() {
            var text = $('.elHeadline b:contains("In The")').html()
            text = text.split(' and ')
            var h1 = '<h4 class="fp_newHeadline">' + text[0] + '</h4>';
            var h2 = '<p class="fp_newDescription">' + text[1] + '. </p>';

            $('.elHeadline b:contains("In The")').hide();
            $('.fp_freeplan_container').after('<div class="fp_newHeadline_container">' + h1 + h2 + '</div>')
        })
    },
    fixVideo: function() {
        $(window).on('load', function() {
            $('iframe[src*="https://player.vimeo.com"]').closest('.bgCover').addClass('fp_video_container');

            $('div[data-title=cf-vimeo-video]').addClass('fp_video');
            $('div[data-title=cf-vimeo-video]').removeClass('elVideoSkin2');

            // Remove progress bar under the video
            $('.fullContainer > .containerInner.ui-sortable > .row.bgCover:nth-child(4)').eq(0).remove()

            // Hide an empty dive above the video
            $('div.progress-bar:contains(Loading Your)').closest(".row.bgCover").hide()

            // Remove the top padding of video-container
            $('.container.fullContainer').eq(0).css('padding-top', '0')

            // Hide main Iframe
            $('.fullContainer > .containerInner.ui-sortable > .row.bgCover:nth-child(1) .elCustomJs').eq(0).remove();

            // Add CTA
            var cta = $('.elButtonSubtle').parent('div')[2].innerHTML;
            var ctaBottom = '<div class="fp_join"> Join Our Money-Back Guarantee Challenge </div>'
            $('.fp_video').append(cta + ctaBottom)


            // Video's sound overlay

            // scroll to video
            $('.fp_watch').on('click', function() {

                $('html, body').animate({
                    scrollTop: ($('.fp_video_container').offset().top)
                }, 500);

                setTimeout(function() {
                    $('.video-sound-overlay').click()
                }, 500)

            })


            $('.fp_video_container a.elButton').addClass('fp_newOne');

            window.addEventListener('scroll', function(event) {
                event.stopPropagation();
            }, true);


        })


    },
    attachEvents: function() {

        $('.fp_mobile_scetion_container a.elButton').addClass('fp_newOne')
        $('.fp_mobile_scetion_container a.elButton').on('click', function() {
            window._fpEvent.push(["eventConversion", {
                value: "reserveUnderDietPlan"
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


        $('a.elButton').on('click', function() {
            if (!$(this).hasClass('fp_newOne')) {
                window._fpEvent.push(["eventConversion", {
                    value: "otherReserveButtons"
                }]);
            }
        })
    },
    getUrlParameter: function(query) {
        var vars = query.split('&');
        var query_string = {};
        for (var i = 0; i < vars.length; i++) {
            var pair = vars[i].split('=');
            var key = decodeURIComponent(pair[0]);
            var value = decodeURIComponent(pair[1]);
            // If first entry with this name
            if (typeof query_string[key] === 'undefined') {
                query_string[key] = decodeURIComponent(value);
                // If second entry with this name
            } else if (typeof query_string[key] === 'string') {
                var arr = [query_string[key], decodeURIComponent(value)];
                query_string[key] = arr;
                // If third or later entry with this name
            } else {
                query_string[key].push(decodeURIComponent(value));
            }
        }
        return query_string;
    },
    menmetric: function(weight, height, age) {
        return 66.5 + 13.72 * weight + 5.003 * height - 6.755 * age;
    },

    menimperial: function(weight, height, age) {
        return 66 + 6.2 * weight + 12.7 * height - 6.76 * age;
    },

    wmenmetric: function(weight, height, age) {
        return 655.1 + 9.563 * weight + 1.85 * height - 4.676 * age;
    },

    wmenimperial: function(weight, height, age) {
        return 655.1 + 4.35 * weight + 4.7 * height - 4.7 * age;
    },

    getInches: function(feet, inches) {
        return feet * 12 + inches;
    },

    getInchesCM: function(centimeters) {
        return centimeters / 2.54;
    },

    getPounds: function(kilograms) {
        return kilograms * 2.205;
    },

    generateTdee: function(value, activity) {
        var tdee;
        switch (activity) {
            case 'sedentary':
                tdee = value * 1.1;
                break;
            case 'light':
                tdee = value * 1.2;
                break;
            case 'moderate':
                tdee = value * 1.3;
                break;
            case 'heavy':
                tdee = value * 1.4;
                break;
            case 'athlete':
                tdee = value * 1.5;
                break;
        }
        return tdee;
    },

    calculateDietPlan: function() {
        var data = this.getUrlParameter(window.location.search.substring(1));
        var gender = data.gender;
        var age = parseInt(data.age);
        var activity = data.activity;
        var macrogoal = data.macrogoal;
        var kilograms = data.weight;
        var centimeters = data.height;
        var bmr = 0;
        var ftdee = 0;


        if (data.units == 'metric') {
            if (gender == 'male') {
                bmr = this.menmetric(kilograms, centimeters, age);
                ftdee = Math.round(this.generateTdee(bmr, activity));
            } else {
                bmr = this.wmenmetric(kilograms, centimeters, age);
                ftdee = Math.round(this.generateTdee(bmr, activity));
            }
        } else if (data.units == 'imperial') {
            var height1 = this.getInchesCM(centimeters);
            var weight1 = this.getPounds(kilograms);
            if (gender == 'male') {
                bmr = this.menimperial(weight1, height1, age);
                ftdee = Math.round(this.generateTdee(bmr, activity));
            } else {
                bmr = this.wmenimperial(weight1, height1, age);
                ftdee = Math.round(this.generateTdee(bmr, activity));
            }
        }

        if (macrogoal == 'build-muscle') {
            return {
                carbs: Math.floor((ftdee * 1.25 * 0.55) / 4),
                protein: Math.floor((ftdee * 1.25 * 0.25) / 4),
                fat: Math.floor((ftdee * 1.25 * 0.2) / 9),
                activity: data.activity[0].toUpperCase() + data.activity.slice(1)
            }
        } else if (macrogoal == 'mesomorph') {
            return {
                carbs: Math.floor((ftdee * 0.75 * 0.3) / 4),
                protein: Math.floor((ftdee * 0.75 * 0.4) / 4),
                fat: Math.floor((ftdee * 0.75 * 0.3) / 9),
                activity: data.activity[0].toUpperCase() + data.activity.slice(1)
            }
        } else if (macrogoal == 'endomorph') {
            return {
                carbs: Math.floor((ftdee * 0.7 * 0.25) / 4),
                protein: Math.floor((ftdee * 0.7 * 0.35) / 4),
                fat: Math.floor((ftdee * 0.7 * 0.4) / 9),
                activity: data.activity[0].toUpperCase() + data.activity.slice(1)
            }
        }
    }
}.init();