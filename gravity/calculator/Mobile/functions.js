var FP_LP_DONATIONS_TRUST = {
    init: function() {
        this.addLogo();
        this.addHero();
        this.addCalculateButton();
        this.addTestimonial();
        this.editTabs();
        this.changeModal();
        this.editClickEvents();
        this.attachEvents();
    },
    addLogo: function() {
        var logo = '<div class="fp_logo"> <img src="https://variations-cdn.figpii.com/variations/gravitychallenges/optin-lp/logo-desktop.png"> </div>'
        $('.container').before(logo);
    },
    addHero: function() {
        var hero = '<div class="fp_hero"><div class="w-50 pr-50"> <h1 class="title"> Transform Your Body in just 6 weeks with a FREE <span>Personalized</span> Diet Plan </h1> <h3 class="subtitle"> Complete this simple quiz to get a free diet plan based on your metabolic type to lose 20lbs and 5% body fat while gaining muscle.</h3><div class="cta_container"> </div></div></div>'
        $('.fp_logo').after(hero);


        $(window).scroll(function() {
            var height = $('.fp_hero').outerHeight() + $('.fp_logo').outerHeight();
            console.log(height)
            if ($(this).scrollTop() > height) {
                $('.each_selection').css('padding-top', '80px')
            }
            if ($(this).scrollTop() < height) {
                $('.each_selection').css('padding-top', '0')
            }
        })


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

        for (var i = 0; i < 5; i = i + 1) {
            var content = '<div class="fp_quotes"> <div class="fp_quote"> <div class="fp_quote_left"> <img src="' + quotes[i].avatar + '" > <span class="fp_quote_name">' + quotes[i].name + '</span><span class="fp_quote_stars"> </span></div> <div class="fp_quote_right">' + quotes[i].text + '</div> </div>                     </div>'
            $('.each_selection').eq(j).append(content);
            j++;
        }

        $('.fp_quote_stars').append('<svg height="16" width="16" role="img" aria-label="star"><path d="M8 .391l2.446 5.045 5.555 0.767-4.043 3.885 0.987 5.521-4.944-2.644-4.945 2.462 0.987-5.519-4.043-3.885 5.555-0.526z" fill="#FFDC00"></path><svg height="16" width="16" role="img" aria-label="star"><path d="M8 .391l2.446 5.045 5.555 0.767-4.043 3.885 0.987 5.521-4.944-2.644-4.945 2.462 0.987-5.519-4.043-3.885 5.555-0.526z" fill="#FFDC00"></path></svg></svg><svg height="16" width="16" role="img" aria-label="star"><path d="M8 .391l2.446 5.045 5.555 0.767-4.043 3.885 0.987 5.521-4.944-2.644-4.945 2.462 0.987-5.519-4.043-3.885 5.555-0.526z" fill="#FFDC00"></path><svg height="16" width="16" role="img" aria-label="star"><path d="M8 .391l2.446 5.045 5.555 0.767-4.043 3.885 0.987 5.521-4.944-2.644-4.945 2.462 0.987-5.519-4.043-3.885 5.555-0.526z" fill="#FFDC00"></path></svg></svg><svg height="16" width="16" role="img" aria-label="star"><path d="M8 .391l2.446 5.045 5.555 0.767-4.043 3.885 0.987 5.521-4.944-2.644-4.945 2.462 0.987-5.519-4.043-3.885 5.555-0.526z" fill="#FFDC00"></path><svg height="16" width="16" role="img" aria-label="star"><path d="M8 .391l2.446 5.045 5.555 0.767-4.043 3.885 0.987 5.521-4.944-2.644-4.945 2.462 0.987-5.519-4.043-3.885 5.555-0.526z" fill="#FFDC00"></path></svg></svg><svg height="16" width="16" role="img" aria-label="star"><path d="M8 .391l2.446 5.045 5.555 0.767-4.043 3.885 0.987 5.521-4.944-2.644-4.945 2.462 0.987-5.519-4.043-3.885 5.555-0.526z" fill="#FFDC00"></path><svg height="16" width="16" role="img" aria-label="star"><path d="M8 .391l2.446 5.045 5.555 0.767-4.043 3.885 0.987 5.521-4.944-2.644-4.945 2.462 0.987-5.519-4.043-3.885 5.555-0.526z" fill="#FFDC00"></path></svg></svg><svg height="16" width="16" role="img" aria-label="star"><path d="M8 .391l2.446 5.045 5.555 0.767-4.043 3.885 0.987 5.521-4.944-2.644-4.945 2.462 0.987-5.519-4.043-3.885 5.555-0.526z" fill="#FFDC00"></path><svg height="16" width="16" role="img" aria-label="star"><path d="M8 .391l2.446 5.045 5.555 0.767-4.043 3.885 0.987 5.521-4.944-2.644-4.945 2.462 0.987-5.519-4.043-3.885 5.555-0.526z" fill="#FFDC00"></path></svg></svg>')
    },
    editTabs: function() {
        $('.sc_item[data-number=1] .sc_item_number').html('<svg width="27" height="22" xmlns="http://www.w3.org/2000/svg"><path d="M26.303 6.582a.702.702 0 01-.856-.507l-.453-1.77-2.332 4.018a7.196 7.196 0 012.782 7.34 7.2 7.2 0 01-1.968 3.587 7.183 7.183 0 01-7.677 1.585 7.188 7.188 0 01-3.224-2.517 7.206 7.206 0 01-.341-7.843v-.003A5.796 5.796 0 0011 3.119a5.773 5.773 0 00-7.444-.036 5.79 5.79 0 00-1.304 7.34 5.77 5.77 0 006.999 2.538.702.702 0 01.875.957.704.704 0 01-.39.366 7.217 7.217 0 01-1.775.405v2.715h1.96a.703.703 0 01.497 1.203.703.703 0 01-.498.207H7.966v2.01a.705.705 0 01-1.201.498.705.705 0 01-.206-.498v-2.01h-1.96a.703.703 0 01-.497-1.203.703.703 0 01.497-.207h1.96V14.69a7.18 7.18 0 01-4.15-1.856A7.2 7.2 0 01.82 4.346a7.19 7.19 0 013.195-3.237 7.175 7.175 0 018.492 1.498 7.201 7.201 0 01.942 8.583 5.797 5.797 0 001.199 7.326 5.775 5.775 0 009.447-3.261 5.797 5.797 0 00-.602-3.903 5.77 5.77 0 00-6.901-2.707.703.703 0 01-.854-.983.704.704 0 01.407-.353 7.175 7.175 0 015.307.302l2.345-4.044-1.802.463a.703.703 0 01-.757-1.078.704.704 0 01.408-.286l3.423-.882h.004l.033-.004a.695.695 0 01.102-.016h.007c.017 0 .034 0 .052.003.026 0 .053.001.079.004a.59.59 0 01.063.014c.024.005.047.01.07.018a.7.7 0 01.076.034c.016.008.032.013.047.022h.003c.04.023.077.05.112.08.011.01.02.023.03.034a.67.67 0 01.063.068c.011.015.02.032.03.047a.695.695 0 01.088.199v.003l.882 3.435a.706.706 0 01-.507.857z"/></svg>');

        $('.sc_item[data-number=2] .sc_item_number').html('<svg width="25" height="24" viewBox="0 0 25 24" xmlns="http://www.w3.org/2000/svg"><path d="M12.5062 10.0012C13.0863 10.0012 13.5564 9.5302 13.5564 8.9493V4.74181C13.5564 4.16092 13.0863 3.68994 12.5062 3.68994C11.9262 3.68994 11.4561 4.16092 11.4561 4.74181V8.9493C11.4561 9.5302 11.9262 10.0012 12.5062 10.0012Z"/><path d="M13.2509 13.9004C12.8408 14.3113 12.8408 14.9771 13.2509 15.388L14.7361 16.8756C15.1462 17.2863 15.8112 17.2863 16.2213 16.8756C16.6315 16.4648 16.6315 15.7988 16.2213 15.388L14.7361 13.9004C14.326 13.4896 13.661 13.4896 13.2509 13.9004Z"/><path d="M12.5062 13.1565C13.0863 13.1565 13.5564 12.6854 13.5564 12.1046C13.5564 11.5238 13.0863 11.0527 12.5062 11.0527C11.9262 11.0527 11.4561 11.5238 11.4561 12.1046C11.4561 12.6854 11.9262 13.1565 12.5062 13.1565Z"/><path fill-rule="evenodd" clip-rule="evenodd" d="M12.5081 23.6748C18.8881 23.6748 24.0601 18.4944 24.0601 12.1042C24.0601 5.71406 18.8881 0.533691 12.5081 0.533691C6.12808 0.533691 0.956055 5.71406 0.956055 12.1042C0.956055 18.4944 6.12808 23.6748 12.5081 23.6748ZM12.5081 21.571C17.7282 21.571 21.9598 17.3326 21.9598 12.1042C21.9598 6.87584 17.7282 2.63743 12.5081 2.63743C7.2881 2.63743 3.05643 6.87584 3.05643 12.1042C3.05643 17.3326 7.2881 21.571 12.5081 21.571Z" /></svg>');

        $('.sc_item[data-number=3] .sc_item_number').html('<svg width="22" height="24" xmlns="http://www.w3.org/2000/svg"><path d="M10.634.534c-1.98 0-3.725 1.022-4.754 2.57H2.041c-1.047 0-1.91.872-1.91 1.93v16.712c0 1.058.863 1.929 1.91 1.929h17.185c1.047 0 1.91-.871 1.91-1.929V5.033c0-1.057-.863-1.928-1.91-1.928h-3.839C14.36 1.555 12.614.534 10.634.534zm0 1.285c2.468 0 4.455 2.007 4.455 4.5s-1.987 4.5-4.455 4.5-4.456-2.007-4.456-4.5 1.988-4.5 4.456-4.5zm2.217 1.597a.634.634 0 00-.437.201l-1.452 1.467a1.259 1.259 0 00-.328-.05A1.29 1.29 0 009.36 6.318a1.29 1.29 0 001.273 1.286 1.29 1.29 0 001.273-1.286c0-.113-.022-.226-.05-.331l1.452-1.467a.645.645 0 00-.458-1.105zm-10.81.975h3.203a5.795 5.795 0 00-.339 1.928c0 3.187 2.573 5.785 5.729 5.785s5.728-2.598 5.728-5.785c0-.677-.125-1.324-.338-1.928h3.202c.364 0 .637.275.637.642v16.713a.625.625 0 01-.637.643H2.041a.625.625 0 01-.636-.643V5.033c0-.367.273-.642.636-.642zm8.523 8.999a.633.633 0 00-.288.11L7.412 15.43a.64.64 0 00-.268.411.65.65 0 00.276.659.633.633 0 00.708-.006l1.87-1.255v5.223a.647.647 0 00.39.602.63.63 0 00.836-.354.647.647 0 00.046-.248v-5.223l1.87 1.255a.633.633 0 00.982-.401.649.649 0 00-.266-.663L10.992 13.5a.632.632 0 00-.428-.11z" /></svg>');

        $('.sc_item[data-number=4] .sc_item_number').html('<svg width="31" height="21" xmlns="http://www.w3.org/2000/svg"><path d="M11.75 11.492V9.108h7.846v2.384h-7.845zM27.665 8.736v.372h2.187v2.384h-2.187v2.197c0 .786-.666 1.453-1.45 1.453-.23 0-.46-.052-.669-.155V5.613c.209-.103.439-.155.67-.155.782 0 1.45.667 1.45 1.453v1.825zM20.965 2.479c0-.884.713-1.557 1.554-1.557.881 0 1.554.712 1.554 1.557V18.12c0 .89-.666 1.558-1.554 1.558-.88 0-1.554-.713-1.554-1.557V2.479zM3.05 9.108h.372V6.91c0-.786.667-1.453 1.45-1.453.231 0 .46.052.67.155v9.374a1.514 1.514 0 01-.67.155c-.783 0-1.45-.667-1.45-1.453v-2.197H1.236V9.108H3.05zM6.963 2.479c0-.884.712-1.557 1.554-1.557.88 0 1.554.712 1.554 1.557v15.642c0 .844-.673 1.557-1.554 1.557-.88 0-1.554-.713-1.554-1.557V2.479z" stroke-width=".744"/></svg>');

        $('.sc_item[data-number=5] .sc_item_number').html('<svg width="20" height="28" xmlns="http://www.w3.org/2000/svg"><path d="M7.349 6.145h-.001c-1.427.03-2.61-1.135-2.61-2.57 0-1.433 1.183-2.57 2.61-2.57 1.428 0 2.612 1.167 2.612 2.57 0 1.404-1.184 2.57-2.611 2.57zm4.218 10.212v-3.732H10.702V17.13h.03v8.046c0 .887-.72 1.627-1.653 1.627H7.766V17.067H6.9v9.736H5.556c-.902 0-1.653-.74-1.653-1.627v-7.894h.03v-4.504H3.069v3.606a5.528 5.528 0 01-1.421-3.682c0-3.077 2.543-5.582 5.64-5.582 3.096 0 5.64 2.505 5.64 5.582v.002c.06 1.348-.431 2.64-1.36 3.653zM3.841 3.575c0 1.228.678 2.309 1.661 2.935-2.717.769-4.72 3.226-4.72 6.162 0 1.862.802 3.633 2.224 4.859v7.645c0 1.365 1.134 2.48 2.488 2.48h3.523a2.48 2.48 0 002.488-2.48V17.53a6.355 6.355 0 002.225-4.858c.123-2.936-1.878-5.391-4.592-6.162a3.377 3.377 0 001.656-2.936c0-1.882-1.566-3.423-3.476-3.423S3.84 1.693 3.84 3.575z"  stroke-width=".093"/><path d="M13.406 2.784h6.088c.216 0 .371-.182.371-.365 0-.182-.185-.365-.37-.365h-6.089a.373.373 0 00-.37.365c0 .183.185.365.37.365zM19.494 5.948h-6.088a.373.373 0 00-.37.365c0 .213.185.365.37.365h6.088c.217 0 .371-.182.371-.365.031-.213-.154-.365-.37-.365zM19.495 9.934H15.97a.373.373 0 00-.37.365c0 .183.185.365.37.365h3.524c.216 0 .37-.182.37-.365a.373.373 0 00-.37-.365z"/></svg>');

    },
    changeModal: function() {
        var slogan = '<h3 class="modal-slogan">People of All Shapes and Sizes Have Transformed Their Bodies And Lives In Just 6 Weeks With Our <span>Free Diet Plan and Program</span></h3>';

        $('.modal-form').prepend(slogan)

        $('div.safe').html('<p>No Spam. We Promise.100% Safe and Secure.</p>')

    },
    addCalculateButton: function() {
        var btn = '<button class="fp_calculator"> Calculate </button>'
        $('.desc_selection').append(btn);

        $(document).on('click', '.desc_selection .selItem', function() {
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
            console.log($(that).attr('data-number'))


            if (!$(that).hasClass('sc_item_disabled')) {
                var number = $(that).attr('data-number')
                var scrollPosition = $('.each_selection').eq(number - 1).offset().top
                console.log(scrollPosition)
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
                console.log('nextPosition: ', nextPosition)
            }, 500)

        })
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