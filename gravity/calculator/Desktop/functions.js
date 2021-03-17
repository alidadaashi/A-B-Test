var FP_LP_DONATIONS_TRUST = {
    init: function() {
        if ($(window).width() > 1024) {
            this.addLogo();
            this.addHero();
            this.addTestimonial();
            this.editTabs();
            this.changeModal();
            this.addCalculateButton();
            this.editClickEvents();
            // this.editScrollEvents();
            this.attachEvents();
        }
    },
    addLogo: function() {
        var logo = '<div class="fp_logo"> <div class="container px-0"> <img src="https://variations-cdn.figpii.com/variations/gravitychallenges/optin-lp/logo-desktop.png"> </div> </div>'
        $('.container').before(logo);
    },
    addHero: function() {
        var hero = '<div class="fp_hero"> <div class="container"> <div class="w-50 pr-50"> <h1 class="title"> <span>Transform</span> Your Body in just 6 weeks with a FREE Personalized Diet Plan </h1> <h3 class="subtitle"> Complete this simple quiz to get a free diet plan based on your metabolic type to lose 20lbs and 5% body fat while gaining muscle.</h3><div class="cta_container"> </div></div></div></div>'
        $('.fp_logo').after(hero);


        $(window).scroll(function() {
            var height = $('.fp_hero').outerHeight() + $('.fp_logo').outerHeight();
            // console.log(height)
            if ($(this).scrollTop() > height) {
                //$('.sc_container').css('background-image','linear-gradient(180deg, #F2F2F2 0%, #F2F2F2 100%)','!important')
                $('.sc_container').addClass('sticky')
            }
            if ($(this).scrollTop() < height) {
                //$('.sc_container').css('background-image','linear-gradient(180deg, #291347 0%, #1A1027 100%)','!important')
                $('.sc_container').removeClass('sticky')
            }
        })


    },
    editTabs: function() {
        $('.fp_hero').after($('.heading'))
        $('.sc_item[data-number=1] .sc_item_number').html('<svg width="42" height="33"  xmlns="http://www.w3.org/2000/svg"><path d="M40.844 9.84a1.082 1.082 0 01-1.322-.784l-.698-2.736-3.599 6.208a11.114 11.114 0 013.824 5.03 11.145 11.145 0 01-2.568 11.85 11.06 11.06 0 01-11.845 2.447 11.093 11.093 0 01-4.974-3.888 11.137 11.137 0 01-.527-12.114v-.006A8.961 8.961 0 0017.232 4.49a8.903 8.903 0 00-11.485-.056 8.96 8.96 0 00-2.013 11.338 8.922 8.922 0 004.686 3.936 8.894 8.894 0 006.114-.015 1.083 1.083 0 011.382.65 1.091 1.091 0 01-.634 1.393c-.883.323-1.803.534-2.74.626v4.194h3.025a1.084 1.084 0 011.085 1.088 1.09 1.09 0 01-1.085 1.089h-3.018v3.105a1.09 1.09 0 01-1.085 1.088 1.084 1.084 0 01-1.086-1.088v-3.105H7.354a1.084 1.084 0 01-1.085-1.089 1.09 1.09 0 011.085-1.088h3.024v-4.194a11.072 11.072 0 01-6.401-2.867 11.142 11.142 0 01-2.453-13.11 11.102 11.102 0 014.93-5 11.06 11.06 0 0113.102 2.313 11.14 11.14 0 011.454 13.259 8.961 8.961 0 001.85 11.316 8.904 8.904 0 0011.435.185 8.962 8.962 0 002.213-11.25 8.926 8.926 0 00-4.568-4.028 8.896 8.896 0 00-6.081-.154 1.083 1.083 0 01-1.375-.687 1.091 1.091 0 01.686-1.378 11.06 11.06 0 018.19.467l3.617-6.247-2.78.716a1.084 1.084 0 01-1.347-.918 1.09 1.09 0 01.807-1.19l5.283-1.36h.007c.016-.005.033-.004.05-.008.052-.012.105-.02.158-.024h.01c.027 0 .053 0 .08.004.041 0 .082.002.122.006a.904.904 0 01.098.023.936.936 0 01.107.027c.04.015.08.033.118.053.024.012.049.02.073.033h.004c.061.036.12.078.172.125.018.016.031.035.048.052.035.033.067.068.096.105.018.023.03.05.046.073a1.09 1.09 0 01.137.306v.005l1.36 5.305a1.09 1.09 0 01-.782 1.325z"/></svg>');

        $('.sc_item[data-number=2] .sc_item_number').html('<svg width="36" height="37"  xmlns="http://www.w3.org/2000/svg"><path d="M18.14 15.169c.895 0 1.62-.728 1.62-1.625V7.045c0-.897-.725-1.625-1.62-1.625-.895 0-1.62.728-1.62 1.625v6.5c0 .896.725 1.624 1.62 1.624zM19.288 21.192a1.628 1.628 0 000 2.298l2.292 2.298a1.618 1.618 0 002.291 0 1.628 1.628 0 000-2.298l-2.291-2.298a1.617 1.617 0 00-2.292 0zM18.14 20.043c.895 0 1.62-.728 1.62-1.625s-.725-1.624-1.62-1.624c-.895 0-1.62.727-1.62 1.624 0 .897.725 1.625 1.62 1.625z" /><path fill-rule="evenodd" clip-rule="evenodd" d="M18.142 36.29c9.845 0 17.825-8.001 17.825-17.872 0-9.87-7.98-17.872-17.825-17.872C8.298.546.317 8.548.317 18.418c0 9.871 7.98 17.873 17.825 17.873zm0-3.249c8.055 0 14.584-6.547 14.584-14.623S26.196 3.795 18.142 3.795c-8.054 0-14.584 6.547-14.584 14.623s6.53 14.623 14.584 14.623z" /></svg>');

        $('.sc_item[data-number=3] .sc_item_number').html('<svg width="34" height="37"  xmlns="http://www.w3.org/2000/svg"><path d="M17.008.546c-3.056 0-5.747 1.579-7.335 3.972H3.75C2.135 4.518.804 5.863.804 7.496v25.816c0 1.633 1.33 2.979 2.946 2.979h26.516c1.616 0 2.947-1.346 2.947-2.979V7.496c0-1.633-1.331-2.978-2.947-2.978h-5.923C22.756 2.125 20.063.546 17.008.546zm0 1.986c3.809 0 6.875 3.1 6.875 6.95s-3.066 6.95-6.875 6.95c-3.808 0-6.874-3.1-6.874-6.95s3.066-6.95 6.874-6.95zm3.422 2.466a.978.978 0 00-.675.31l-2.24 2.266a1.939 1.939 0 00-.507-.078c-1.073 0-1.964.901-1.964 1.986s.891 1.986 1.964 1.986 1.964-.9 1.964-1.986c0-.175-.033-.35-.076-.512l2.24-2.265a.995.995 0 00.223-1.097.991.991 0 00-.371-.45.974.974 0 00-.558-.16zM3.75 6.503h4.941a8.96 8.96 0 00-.522 2.98c0 4.923 3.97 8.935 8.84 8.935 4.87 0 8.838-4.012 8.838-8.936a8.96 8.96 0 00-.522-2.979h4.941c.561 0 .982.426.982.993v25.816c0 .567-.42.993-.982.993H3.75c-.561 0-.982-.426-.982-.993V7.496c0-.567.42-.993.982-.993zM16.9 20.404a.976.976 0 00-.444.17l-4.42 2.98a.988.988 0 00-.413.635 1.007 1.007 0 00.152.745.99.99 0 00.63.418.972.972 0 00.736-.154l2.885-1.94v8.068a1.002 1.002 0 00.283.711.98.98 0 001.078.22.982.982 0 00.532-.546c.049-.123.073-.253.071-.385V23.26l2.885 1.94a.98.98 0 001.093.008.988.988 0 00.422-.63 1.005 1.005 0 00-.41-1.023l-4.42-2.98a.974.974 0 00-.66-.17z" /></svg>');

        $('.sc_item[data-number=4] .sc_item_number').html('<svg width="46" height="31"  xmlns="http://www.w3.org/2000/svg"><path d="M17.855 16.542V13.71h11.253v2.832H17.855zM41.558 12.71v1h3.374v2.832h-3.374v3.82c0 .98-.84 1.818-1.81 1.818-.208 0-.413-.033-.607-.098V8.17c.194-.065.4-.097.606-.097.971 0 1.811.838 1.811 1.818v2.82zM32.072 3.046c0-1.124.903-1.98 1.972-1.98a1.97 1.97 0 011.972 1.98V27.206c0 1.142-.84 1.98-1.972 1.98a1.969 1.969 0 01-1.972-1.98V3.047zM4.003 13.71h1V9.891c0-.98.84-1.818 1.812-1.818.206 0 .412.032.606.097V22.082c-.194.065-.4.098-.606.098-.972 0-1.812-.838-1.812-1.819v-3.819H1.63V13.71h2.373zM10.467 3.046c0-1.124.902-1.98 1.972-1.98a1.97 1.97 0 011.972 1.98v24.16a1.97 1.97 0 01-1.972 1.98 1.97 1.97 0 01-1.972-1.98V3.047z"  stroke-width="2"/></svg>');

        $('.sc_item[data-number=5] .sc_item_number').html('<svg width="30" height="44"  xmlns="http://www.w3.org/2000/svg"><path d="M10.394 9.792h-.003c-2.17.045-3.973-1.73-3.973-3.917 0-2.184 1.8-3.916 3.976-3.916 2.174 0 3.976 1.779 3.976 3.916 0 2.138-1.802 3.917-3.976 3.917zm6.562 15.688v-5.678h-1.442v7.064h.048V39.24c0 1.34-1.088 2.46-2.498 2.46h-1.973V26.663H9.649V41.7H7.628c-1.363 0-2.498-1.121-2.498-2.46V27.1h.048v-7.064H3.736v5.483c-1.325-1.54-2.087-3.481-2.087-5.546 0-4.723 3.9-8.57 8.65-8.57 4.748 0 8.649 3.847 8.649 8.57h0v.005c.089 2.022-.628 3.962-1.992 5.501zM4.928 5.875c0 1.876 1.013 3.53 2.49 4.514C3.262 11.62.208 15.407.208 19.928a9.947 9.947 0 003.433 7.529V39.24c0 2.137 1.774 3.884 3.893 3.884h5.436a3.883 3.883 0 003.892-3.884V27.456a9.874 9.874 0 003.433-7.527c.188-4.519-2.859-8.303-7.009-9.536 1.514-.947 2.48-2.603 2.48-4.518 0-2.937-2.443-5.34-5.419-5.34-2.976 0-5.418 2.403-5.418 5.34z"   stroke-width=".25"/><path d="M19.741 4.654h9.394a.576.576 0 00.572-.564c0-.282-.286-.564-.572-.564h-9.394a.576.576 0 00-.572.564c0 .282.286.564.572.564zM29.135 9.541h-9.394a.576.576 0 00-.572.564c0 .33.286.564.572.564h9.394a.575.575 0 00.573-.564c.047-.329-.239-.564-.573-.564zM29.135 15.697H23.7a.575.575 0 00-.572.564c0 .282.286.564.572.564h5.436a.576.576 0 00.573-.564.575.575 0 00-.573-.564z" /></svg>');

    },
    changeModal: function() {
        var slogan = '<h3 class="modal-slogan">People of All Shapes and Sizes Have Transformed Their Bodies And Lives In Just 6 Weeks With Our <span> Free Diet Plan and Program </span></h3>';

        $('.modal-form').prepend(slogan)

        $('div.safe').html('<p>No Spam. We Promise.100% Safe and Secure.</p>')

    },
    addCalculateButton: function() {
        var btn = '<button class="fp_calculator"> Calculate </button>'
        $('.desc_selection').append(btn);

        $(document).on('click', '.close', function() {
            setTimeout(function() { $('.fp_calculator').css('display', 'block'); }, 500);
        })

        $(document).on('click', '.fp_calculator', function() {
            $('#myModal').css('display', 'block')
        })
    },
    editClickEvents: function() {


        var old_element = document.querySelector("[data-number='1']");
        var new_element = old_element.cloneNode(true);
        old_element.parentNode.replaceChild(new_element, old_element);

        var old_element = document.querySelector("[data-number='2']");
        var new_element = old_element.cloneNode(true);
        old_element.parentNode.replaceChild(new_element, old_element);

        var old_element = document.querySelector("[data-number='3']");
        var new_element = old_element.cloneNode(true);
        old_element.parentNode.replaceChild(new_element, old_element);

        var old_element = document.querySelector("[data-number='4']");
        var new_element = old_element.cloneNode(true);
        old_element.parentNode.replaceChild(new_element, old_element);

        var old_element = document.querySelector("[data-number='5']");
        var new_element = old_element.cloneNode(true);
        old_element.parentNode.replaceChild(new_element, old_element);



        $(document).on('click', '.sc_item', function() {
            var that = this
                // console.log($(that).attr('data-number'))


            if (!$(that).hasClass('sc_item_disabled')) {
                var number = $(that).attr('data-number')
                var scrollPosition = $('.each_selection').eq(number - 1).offset().top
                    // console.log(scrollPosition)
                $('html').animate({ scrollTop: scrollPosition }, 300);
            }


            setTimeout(function() {




                if (!$(that).hasClass('sc_item_disabled')) {



                    $('.sc_item').each(function(i, item) {
                        if ($(item).hasClass('sc_item_active')) {
                            $(item).removeClass('sc_item_active');
                            $(item).addClass('sc_item_done')
                        }
                    })

                    $('.sc_item').removeClass('sc_item_active');
                    $(that).removeClass('sc_item_done');
                    $(that).addClass('sc_item_active')
                        // if(!$(this).hasClass('sc_item_active')){
                        // }

                    // if($(this).hasClass('sc_item_done')){
                    // 	$(this).removeClass('sc_item_done');
                    // 	$(this).addClass('sc_item_active')
                    // }
                }




            }, 320)


        });









        $(document).on('click', '.selImage', function() {

            var that = this
            setTimeout(function() {
                var nextPosition = $(that).closest('.each_selection').next('.each_selection').offset().top;
                if (nextPosition != 0) {

                    $('html').animate({ scrollTop: nextPosition }, 600);
                }
                // console.log('nextPosition: ', nextPosition)
            }, 500)

        })
    },
    editScrollEvents: function() {
        var genderPosition = $('.gender_selection').offset().top;
        var agePosition = $('.age_selection').offset().top;
        var hwPosition = $('.hw_selection').offset().top;
        var activityPosition = $('.activity_selection').offset().top;
        var descPosition = $('.desc_selection').offset().top;


        window.addEventListener('scroll', function() {
            checkActiveTab();
        });

        function checkActiveTab() {
            var scrollPosition = $(window).scrollTop();

            var genderPosition = $('.gender_selection').offset().top;
            var agePosition = $('.age_selection').offset().top;
            var hwPosition = $('.hw_selection').offset().top;
            var activityPosition = $('.activity_selection').offset().top;
            var descPosition = $('.desc_selection').offset().top;

            if (descPosition) {
                if (scrollPosition > descPosition - 100) {
                    $('.sc_item').eq(4).removeClass('sc_item_done')
                    $('.sc_item').eq(4).addClass('sc_item_active')
                } else {
                    $('.sc_item').eq(4).removeClass('sc_item_active')
                    $('.sc_item').eq(4).addClass('sc_item_done')
                }
            }




        }


    },
    addTestimonial: function() {
        var quotes = [{
                name: 'William Duque',
                avatar: 'https://lh3.googleusercontent.com/a-/AOh14GiUs6_mFU7YgnYa1TLYiGLUTBxHQtd-HxR-F-a6-iY=c0x00000000-cc-rp-s120',
                text: 'Great program. I lost 20lbs in 6 weeks. My accountability was awesome and the meal plans are easy to follow. I definitely recommend this program.'
            },
            {
                name: 'Maria Ovalles',
                avatar: 'https://lh3.googleusercontent.com/a-/AOh14GimYEz5j2FGv1-96BjoER_Bl6aeYLswAeZa3lCl=c0x00000000-cc-rp-s120',
                text: 'I lost 22.6lbs doing the 6 week challenge! Great coaches to work with! They have everything detailed out for you from workouts to meal prepping. Highly recommended!'
            },
            {
                name: 'Rene Caballero',
                avatar: 'https://lh3.googleusercontent.com/a-/AOh14GhKtNlOB5C0eqn9GV2D9IXi4eYfefPpOWPsSyWZ9PQ=c0x00000000-cc-rp-s120',
                text: 'Great experience. Life changing! I lost 23 pounds in 60 days, from 212 to 189. And even taught me how to follow up with the healthier lifestyle.'
            },
            {
                name: 'Johanna Badenhop',
                avatar: 'https://lh3.googleusercontent.com/a-/AOh14GidJfkbQhbeqz9NCYXZ9pI5u8s0dUyXRguh0S9D=c0x00000000-cc-rp-s120',
                text: 'The Gravity Training Zone produces amazing results. I lost 20.4 lbs and 5.5% body fat in 6 weeks. The have taught me how to eat right (I was never hungry on the program) and the right exercises to tone up the whole body. The end result is amazing, I got a stronger and healthier me in the end.'
            },
            {
                name: 'Maiky Vermeulen',
                avatar: 'https://lh3.googleusercontent.com/a-/AOh14GgEJbiYoCyuRuQfsMokz4f60lngrcZftucWpBBuMA=c0x00000000-cc-rp-s120',
                text: 'I lost 28 lbs with the 6 week gravity program. It\'s been amazing. Would definitely recommend it!! It\'s a lifestyle change program not just another workout program.'
            },

            {
                name: 'Nirmiti Parekh',
                avatar: 'https://lh3.googleusercontent.com/a-/AOh14GiaD0N54C8c5NvRkUsJM00uJzudTAVw2Y54oafwHg=c0x00000000-cc-rp-s120',
                text: 'At my final weigh in, I lost 5.5% body fat and 9.6 lbs! I’m so surprised at how much I was able to accomplish thanks to GTZ. It really taught me the importance of a healthy lifestyle!!'
            },
            {
                name: 'Jacob Stock',
                avatar: 'https://lh3.googleusercontent.com/a-/AOh14Gjj7XkwAR42gUf3efE5o9nMu2qb3qhd8imhOkhjHQ=c0x00000000-cc-rp-s120',
                text: 'Everything about the program is great. I have emerged much more educated about nutrition, dieting, and exercising. Not only that, it is super easy to follow and most importantly, it works. I lost 15 pounds and over 5% body fat in only 42 days. '
            },

            {
                name: 'Erica V Aguirre',
                avatar: 'https://lh3.googleusercontent.com/a-/AOh14Gi5kdgu7LJEIHSeAHoLeqG-ddpn6PDNVMiyctkhig=c0x00000000-cc-rp-s120',
                text: 'This is an amazing program for anyone who is serious about making a change in their health and quality of life.This program has been set up to work but puts the responsibility back on you and I love that!  '
            },
            {
                name: 'Joshua Alldredge',
                avatar: 'https://lh3.googleusercontent.com/a-/AOh14Gh49Un3G-LIx7DnzSRMQHOVXuf5c8A8TwmWn7ocLw=c0x00000000-cc-rp-s120',
                text: 'I just finished my 6 weeks and cannot Express how pleased I am with the results. I lost a total of 25 pounds and 3.5% body fat. The program was great, the coaching was perfect, and the encouragement throughout helped to keep me motivated. If you can have a bit of self control and dedication, you too can see the results that I have seen!'
            },
            {
                name: 'Brenda Butler',
                avatar: 'https://lh3.googleusercontent.com/a-/AOh14Gji9aTrTYNgjTIkZ4yiODDW2ZcmyevQyez2Ml9qDw=c0x00000000-cc-rp-s120',
                text: "I have struggled with trying to lose body fat for years. A friend told us about Gravity Transformation, so we decided to try it out. The mindset videos were amazing and encouraging. It expressed exactly what I was thinking and feeling that week. I lost 12.8 pounds and 6.8% body fat. I look and feel much better. I HIGHLY recommend this program to anyone who wants to make a change in their physical condition. "
            },
        ];
        var j = 0;

        for (var i = 0; i < 10; i = i + 2) {
            var content = '<div class="fp_quotes"> <div class="fp_quote"> <div class="fp_quote_left"> <img src="' + quotes[i].avatar + '" > <span class="fp_quote_name">' + quotes[i].name + '</span><span class="fp_quote_stars"> </span></div> <div class="fp_quote_right">' + quotes[i].text + '</div> </div>                      <div class="fp_quote"> <div class="fp_quote_left"> <img src="' + quotes[i + 1].avatar + '" > <span class="fp_quote_name">' + quotes[i + 1].name + '</span><span class="fp_quote_stars"> </span></div> <div class="fp_quote_right">' + quotes[i + 1].text + '</div> </div> </div>'
            $('.each_selection').eq(j).append(content);
            j++;
        }

        $('.fp_quote_stars').append('<svg height="16" width="16" role="img" aria-label="star"><path d="M8 .391l2.446 5.045 5.555 0.767-4.043 3.885 0.987 5.521-4.944-2.644-4.945 2.462 0.987-5.519-4.043-3.885 5.555-0.526z" fill="#FFDC00"></path><svg height="16" width="16" role="img" aria-label="star"><path d="M8 .391l2.446 5.045 5.555 0.767-4.043 3.885 0.987 5.521-4.944-2.644-4.945 2.462 0.987-5.519-4.043-3.885 5.555-0.526z" fill="#FFDC00"></path></svg></svg><svg height="16" width="16" role="img" aria-label="star"><path d="M8 .391l2.446 5.045 5.555 0.767-4.043 3.885 0.987 5.521-4.944-2.644-4.945 2.462 0.987-5.519-4.043-3.885 5.555-0.526z" fill="#FFDC00"></path><svg height="16" width="16" role="img" aria-label="star"><path d="M8 .391l2.446 5.045 5.555 0.767-4.043 3.885 0.987 5.521-4.944-2.644-4.945 2.462 0.987-5.519-4.043-3.885 5.555-0.526z" fill="#FFDC00"></path></svg></svg><svg height="16" width="16" role="img" aria-label="star"><path d="M8 .391l2.446 5.045 5.555 0.767-4.043 3.885 0.987 5.521-4.944-2.644-4.945 2.462 0.987-5.519-4.043-3.885 5.555-0.526z" fill="#FFDC00"></path><svg height="16" width="16" role="img" aria-label="star"><path d="M8 .391l2.446 5.045 5.555 0.767-4.043 3.885 0.987 5.521-4.944-2.644-4.945 2.462 0.987-5.519-4.043-3.885 5.555-0.526z" fill="#FFDC00"></path></svg></svg><svg height="16" width="16" role="img" aria-label="star"><path d="M8 .391l2.446 5.045 5.555 0.767-4.043 3.885 0.987 5.521-4.944-2.644-4.945 2.462 0.987-5.519-4.043-3.885 5.555-0.526z" fill="#FFDC00"></path><svg height="16" width="16" role="img" aria-label="star"><path d="M8 .391l2.446 5.045 5.555 0.767-4.043 3.885 0.987 5.521-4.944-2.644-4.945 2.462 0.987-5.519-4.043-3.885 5.555-0.526z" fill="#FFDC00"></path></svg></svg><svg height="16" width="16" role="img" aria-label="star"><path d="M8 .391l2.446 5.045 5.555 0.767-4.043 3.885 0.987 5.521-4.944-2.644-4.945 2.462 0.987-5.519-4.043-3.885 5.555-0.526z" fill="#FFDC00"></path><svg height="16" width="16" role="img" aria-label="star"><path d="M8 .391l2.446 5.045 5.555 0.767-4.043 3.885 0.987 5.521-4.944-2.644-4.945 2.462 0.987-5.519-4.043-3.885 5.555-0.526z" fill="#FFDC00"></path></svg></svg>')
    },
    attachEvents: function() {
        $(document).on('click', '#submit-form', function() {
            window._fpEvent.push(["eventConversion", {
                value: "optinlp+musclelp"
            }]);
        })

        $(document).on('click', '.gender_selection .selImage', function() {
            window._fpEvent.push(["eventConversion", {
                value: "genderClick"
            }]);
        })

        $(document).on('click', '.age_selection .selImage', function() {
            window._fpEvent.push(["eventConversion", {
                value: "ageClick"
            }]);
        })


        $(document).on('scrolled', '#sb_weight', function() {
            window._fpEvent.push(["eventConversion", {
                value: "weightClick"
            }]);
        })

        $(document).on('click', '.activity_selection .selImage', function() {
            window._fpEvent.push(["eventConversion", {
                value: "workoutClick"
            }]);
        })

        $(document).on('click', '.desc_selection .selImage', function() {
            window._fpEvent.push(["eventConversion", {
                value: "descClick"
            }]);
        })


    }

}.init();