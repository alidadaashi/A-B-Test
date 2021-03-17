var FP_LP_DONATIONS_TRUST = {
    init: function() {
        if ($(window).width() > 1024) {
            this.addLogo();
            this.addHero();
            this.freePlan();
            this.aboveVideo();
            this.fixVideo();
            this.attachEvents();
        }
    },
    addLogo: function() {
        var logo = '<div class="fp_logo"> <img src="https://variations-cdn.figpii.com/variations/gravitychallenges/optin-lp/logo-desktop.png"> </div>'
        $('.containerWrapper').prepend(logo);
    },
    addHero: function() {
        var watchVideo = '<a class="fp_watch" href="#"> Watch Video To Learn More </a>';
        var cta = $('.elButtonSubtle').parent('div')[0].innerHTML

        var hero = '<div class="fp_hero"><div class="w-50 pr-50"> <h1 class="title"> WE CAN HELP YOU IMPLEMENT YOUR DIET PLAN ABSOLUTELY FREE </h1> <h3 class="subtitle"> More diet plans are available when you join our 6 Week Challenge</h3><p> we will help you understand which workout, diet, and training plan is right for you. Your personal coach will help you succeed and keep you on track. </p> <div class="cta_container"> ' + cta + watchVideo + '</div></div></div>'
        $('.fp_logo').after(hero);

        $('.fp_hero .elButton .elButtonMain').text('Reserve Your Spot')

        $('.fp_hero .elButton').css('font-size', '')
        $('.fp_hero .elButton').addClass('cta')
    },
    freePlan: function() {
        $('head').append('<link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/morris.js/0.5.1/morris.css">')
        $('body').append('<script src="//cdnjs.cloudflare.com/ajax/libs/raphael/2.1.0/raphael-min.js"></script><script src="//cdnjs.cloudflare.com/ajax/libs/morris.js/0.5.1/morris.min.js">')

        $('.fp_hero').after('<div class="fp_freeplan_container"></div>');
        var freePlan = '<div class="fp_freeplan w-50"> <h3 class="title"> Your Free Diet Plan </h3> <h6 class="subtitle"> Lose 20 LBS or 5% Body Fat in 6 Weeks with our 6 Week Challenge </h6> <div class="fp_freeplan_list"><div class="fp_freeplan_list_items"> </div> </div> </div>';


        // Add Static data
        $('.fp_hero').append(freePlan);


        // Add Progressbar
        var progressbar = '<div class="fp_progressbar_container"><div id="donut-example" class="morris-donut-inverse"></div><div class="carbohydrate"></div> <div class="protein"></div> <div class="fat"></div></div>';
        $('.fp_freeplan_list').prepend(progressbar);

        var labels = '<div class="fp_progressbar_labels"><div class="carbohydrate"> <img src="https://variations-cdn.figpii.com/variations/gravitychallenges/optin-lp/carbohydrate-min.svg"> <span> ... </span> </div>  <div class="protein"> <img src="https://variations-cdn.figpii.com/variations/gravitychallenges/optin-lp/protein-min.svg"> <span> ... </span> </div>  <div class="fat"> <img src="https://variations-cdn.figpii.com/variations/gravitychallenges/optin-lp/fat-min.svg"> <span> ... </span> </div></div>'
        $('.fp_progressbar_container').append(labels);

        function fillDietPlan(planData) {
            $('#carbohydrateValue').text(planData.carbs + ' G')
            $('#proteinValue').text(planData.protein + ' G')
            $('#fatValue').text(planData.fat + ' G')
            $('#activityValue').text(planData.activity);
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

            var donutTotal = '<div class="donutTotal"> Total <span>' + sum + ' G</span> </div>'
            $('#donut-example').append(donutTotal)
        }


        function drawChart(planData) {

            var colorDanger = "#FF1744";
            Morris.Donut({
                element: 'donut-example',
                resize: true,
                colors: [
                    '#E0F7FA',
                    '#B2EBF2',
                    '#80DEEA',
                    '#4DD0E1',
                    '#26C6DA',
                    '#00BCD4',
                    '#00ACC1',
                    '#0097A7',
                    '#00838F',
                    '#006064'
                ],
                //labelColor:"#cccccc", // text color
                //backgroundColor: '#333333', // border color
                data: [
                    { label: "Protein", value: planData.protein, color: '#BDA2DF' },
                    { label: "Fat", value: planData.fat, color: '#C4C4C4' },
                    { label: "Carbohydrate", value: planData.carbs, color: '#5820A0' },
                ]
            });

        }


        $('.fp_freeplan_list_items').append('<div class="fp_freeplan_item"> <img src="https://variations-cdn.figpii.com/variations/gravitychallenges/optin-lp/fat.svg"><div class="text"><div class="label"> Fat </div> <div class="value" id="fatValue"> ... </div> </div> </div>');

        $('.fp_freeplan_list_items').append('<div class="fp_freeplan_item"> <img src="https://variations-cdn.figpii.com/variations/gravitychallenges/optin-lp/protein.svg"><div class="text"><div class="label"> Protein </div> <div class="value" id="proteinValue"> ... </div> </div> </div>');

        $('.fp_freeplan_list_items').append('<div class="fp_freeplan_item">  <img src="https://variations-cdn.figpii.com/variations/gravitychallenges/optin-lp/carbohydrate.svg"><div class="text"><div class="label"> Carbohydrates </div> <div class="value" id="carbohydrateValue"> ... </div> </div></div>');


        $('.fp_freeplan_list_items').append('<div class="fp_freeplan_item">  <div class="activityProgressbar"></div><div class="text"> <div class="label"> Activity:     </div><div class="value" id="activityValue"> </div> </div> </div>');

        var planData = this.calculateDietPlan();
        fillDietPlan(planData);
        if (typeof Morris === 'object') {
            drawChart(planData);
        } else {
            var drawChartIntervalCounter = 0,
                drawChartInterval = window.setInterval(function() {
                    if (typeof Morris === 'object') {
                        clearInterval(drawChartInterval);
                        drawChart(planData);
                    } else {
                        if (++drawChartIntervalCounter > 9) {
                            clearInterval(drawChartInterval);
                        }
                    }
                }, 500)
        }
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
            $('.fullContainer > .containerInner.ui-sortable > .row.bgCover:nth-child(4)').eq(0).hide()

            // Hide an empty div above the video
            $('div.progress-bar:contains(Loading Your)').closest(".row.bgCover").hide()

            // Remove the top padding of video-container
            $('.container.fullContainer').eq(0).css('padding-top', '0')

            // Remove main Iframe
            $('.fullContainer > .containerInner.ui-sortable > .row.bgCover:nth-child(1) .elCustomJs').eq(0).remove()

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

                setTimeout(function() {
                    $('.video-sound-overlay').click()
                }, 500)
            })


        })

        // window.addEventListener('scroll', function(event) {
        //     event.stopPropagation();
        // }, true);


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