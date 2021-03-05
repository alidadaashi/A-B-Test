var FP_LP_DONATIONS_TRUST = {
    init: function() {
        this.addLogo();
        this.addHero();
        this.addTestimonial();
        this.editTabs();
        this.changeModal();
        this.addCalculateButton();
        this.editClickEvents();
        // this.editScrollEvents();
        this.attachEvents();
    },
    addLogo: function() {
        var logo = '<div class="fp_logo"> <div class="container px-0"> <img src="https://variations-cdn.figpii.com/variations/gravitychallenges/optin-lp/logo-desktop.png"> </div> </div>'
        $('.container').before(logo);
    },
    addHero: function() {
        var hero = '<div class="fp_hero"> <div class="container"> <div class="w-50 pr-50"> <h1 class="title"> <span>Transform</span> Your Body with a FREE Personalized Diet Plan in 6 Weeks </h1> <h3 class="subtitle"> Complete this simple quiz to find out FREE diet plan. to lose 20lbs, 5% body fat and gain muscles by eating. by your metabolic type.</h3><div class="cta_container"> </div></div></div></div>'
        $('.fp_logo').after(hero);
    },
    editTabs: function() {
        $('.fp_hero').after($('.heading'))
        $('.sc_item[data-number=1] .sc_item_number').html('<svg width="58" height="47" xmlns="http://www.w3.org/2000/svg"><path d="M56.073 14.229a1.5 1.5 0 01-1.831-1.086l-.968-3.791-4.987 8.603a15.402 15.402 0 015.298 6.97 15.444 15.444 0 01.65 8.74 15.418 15.418 0 01-4.208 7.68 15.352 15.352 0 01-7.705 4.137 15.327 15.327 0 01-8.709-.745 15.372 15.372 0 01-6.894-5.387 15.437 15.437 0 01-.73-16.788v-.008a12.417 12.417 0 00-2.637-15.738 12.337 12.337 0 00-15.916-.078 12.397 12.397 0 00-4.253 7.346 12.418 12.418 0 001.464 8.366 12.364 12.364 0 006.494 5.454c2.738.994 5.739.987 8.472-.02a1.5 1.5 0 011.915.9 1.511 1.511 0 01-.878 1.93c-1.224.45-2.5.74-3.796.868v5.812h4.19a1.502 1.502 0 011.505 1.508 1.502 1.502 0 01-1.504 1.508h-4.182v4.304a1.51 1.51 0 01-1.504 1.508c-.4 0-.782-.159-1.064-.441a1.51 1.51 0 01-.44-1.067v-4.303H9.663a1.502 1.502 0 01-1.505-1.509 1.51 1.51 0 011.505-1.508h4.19v-5.812a15.344 15.344 0 01-8.871-3.973 15.415 15.415 0 01-4.72-8.516 15.44 15.44 0 011.32-9.652 15.384 15.384 0 016.833-6.927 15.327 15.327 0 019.61-1.432 15.351 15.351 0 018.546 4.636 15.438 15.438 0 012.016 18.374 12.419 12.419 0 002.563 15.682 12.337 12.337 0 0015.846.256 12.397 12.397 0 004.355-7.238 12.42 12.42 0 00-1.288-8.353 12.368 12.368 0 00-6.33-5.581 12.326 12.326 0 00-8.427-.213 1.501 1.501 0 01-1.905-.953 1.513 1.513 0 01.95-1.909 15.328 15.328 0 0111.349.647l5.014-8.657-3.853.993a1.502 1.502 0 01-1.867-1.271 1.511 1.511 0 011.119-1.65l7.32-1.887h.01c.023-.006.046-.005.069-.01.072-.016.145-.027.22-.033h.013a.84.84 0 01.112.005c.056 0 .112.003.168.01.046.007.091.018.136.03.05.01.1.022.149.038a1.5 1.5 0 01.163.074c.034.016.068.026.1.045h.007c.085.05.165.109.238.174.024.021.044.049.067.072.047.045.092.094.133.145.024.033.041.069.063.101a1.508 1.508 0 01.19.424v.007l1.884 7.353a1.512 1.512 0 01-1.083 1.835z"/></svg>');

        $('.sc_item[data-number=2] .sc_item_number').html('<svg width="50" height="50" xmlns="http://www.w3.org/2000/svg"><path d="M24.71 20.265a2.249 2.249 0 002.245-2.252V9.007a2.249 2.249 0 00-2.245-2.252 2.249 2.249 0 00-2.246 2.252v9.006a2.249 2.249 0 002.245 2.252zM26.301 28.61a2.256 2.256 0 000 3.185l3.176 3.184c.877.88 2.299.88 3.176 0a2.255 2.255 0 000-3.184l-3.176-3.184a2.241 2.241 0 00-3.176 0zM24.71 27.019a2.249 2.249 0 002.245-2.252 2.249 2.249 0 00-2.245-2.251 2.249 2.249 0 00-2.246 2.251 2.249 2.249 0 002.245 2.252z"/><path fill-rule="evenodd" clip-rule="evenodd" d="M24.713 49.535c13.642 0 24.702-11.09 24.702-24.768S38.355 0 24.713 0C11.071 0 .012 11.089.012 24.767c0 13.679 11.059 24.768 24.701 24.768zm0-4.503c11.162 0 20.21-9.073 20.21-20.265 0-11.191-9.048-20.264-20.21-20.264s-20.21 9.073-20.21 20.264c0 11.192 9.048 20.265 20.21 20.265z"/></svg>');

        $('.sc_item[data-number=3] .sc_item_number').html('<svg width="45" height="50" xmlns="http://www.w3.org/2000/svg"><path d="M22.469 0c-4.235 0-7.965 2.188-10.165 5.504H4.096C1.857 5.504.013 7.369.013 9.632v35.775c0 2.263 1.844 4.128 4.083 4.128h36.746c2.238 0 4.082-1.865 4.082-4.128V9.632c0-2.263-1.844-4.128-4.082-4.128h-8.209C30.433 2.188 26.703 0 22.47 0zm0 2.752c5.277 0 9.526 4.296 9.526 9.632 0 5.335-4.249 9.631-9.526 9.631-5.278 0-9.527-4.296-9.527-9.631 0-5.336 4.249-9.632 9.527-9.632zM27.21 6.17a1.355 1.355 0 00-.936.43L23.17 9.74a2.687 2.687 0 00-.701-.108c-1.488 0-2.722 1.248-2.722 2.752 0 1.503 1.234 2.752 2.722 2.752 1.487 0 2.721-1.249 2.721-2.752 0-.243-.046-.485-.106-.71l3.105-3.139a1.38 1.38 0 00.31-1.52 1.373 1.373 0 00-.515-.623 1.35 1.35 0 00-.773-.222zM4.096 8.256h6.847a12.418 12.418 0 00-.723 4.128c0 6.823 5.5 12.383 12.249 12.383 6.748 0 12.248-5.56 12.248-12.383 0-1.449-.268-2.835-.723-4.128h6.848c.777 0 1.36.59 1.36 1.376v35.775c0 .786-.583 1.376-1.36 1.376H4.096c-.778 0-1.361-.59-1.361-1.376V9.632c0-.786.583-1.376 1.36-1.376zM22.32 27.519a1.352 1.352 0 00-.617.237l-6.124 4.128a1.37 1.37 0 00-.573.88 1.39 1.39 0 00.59 1.41 1.352 1.352 0 001.514-.011l3.998-2.688v11.18a1.39 1.39 0 00.391.986 1.362 1.362 0 00.97.41 1.348 1.348 0 00.969-.41 1.38 1.38 0 00.392-.986v-11.18l3.997 2.688a1.353 1.353 0 001.893-.366 1.383 1.383 0 00.211-1.032 1.385 1.385 0 00-.573-.881l-6.124-4.128a1.35 1.35 0 00-.914-.237z"/></svg>');

        $('.sc_item[data-number=4] .sc_item_number').html('<svg width="64" height="43" xmlns="http://www.w3.org/2000/svg"><path d="M23.885 23.675v-4.697H40.25v4.697H23.885zM57.505 17.979v1h4.675v4.696h-4.675V28.58c0 1.57-1.336 2.906-2.896 2.906-.421 0-.84-.086-1.226-.256V11.422c.386-.17.805-.257 1.226-.257 1.56 0 2.896 1.335 2.896 2.906v3.907zM43.587 4.586c0-1.777 1.43-3.13 3.118-3.13a3.115 3.115 0 013.119 3.13V38.067c0 1.795-1.336 3.13-3.119 3.13a3.115 3.115 0 01-3.118-3.13V4.587zM5.075 18.979h1v-4.907c0-1.57 1.336-2.906 2.896-2.906.422 0 .84.086 1.226.257V31.23c-.385.171-.804.257-1.226.257-1.56 0-2.896-1.335-2.896-2.906V23.675H1.4v-4.697h3.675zM13.646 4.586c0-1.777 1.43-3.13 3.119-3.13a3.114 3.114 0 013.118 3.13v33.482c0 1.7-1.353 3.13-3.118 3.13a3.115 3.115 0 01-3.119-3.13V4.586z" stroke-width="2"/></svg>');

        $('.sc_item[data-number=5] .sc_item_number').html('<svg width="42" height="60" xmlns="http://www.w3.org/2000/svg"><path d="M14.958 13.704h-.002C11.92 13.768 9.4 11.285 9.4 8.23c0-3.055 2.518-5.476 5.558-5.476 3.039 0 5.558 2.486 5.558 5.476 0 2.99-2.52 5.475-5.558 5.475zm9.046 21.819v-7.948h-1.902v9.693h.066v17.198c0 1.884-1.53 3.457-3.51 3.457h-2.782v-20.84h-1.902v20.84h-2.849c-1.915 0-3.51-1.574-3.51-3.457V37.594h.067V27.9H5.78v7.68c-1.895-2.158-2.988-4.897-2.988-7.815 0-6.573 5.427-11.923 12.034-11.923 6.607 0 12.034 5.35 12.034 11.923h0v.005c.126 2.857-.903 5.595-2.856 7.752zM7.432 8.229c0 2.618 1.434 4.924 3.517 6.272C5.156 16.168.89 21.423.89 27.701c0 3.99 1.718 7.784 4.759 10.411v16.354c0 2.935 2.435 5.335 5.345 5.335h7.534c2.977 0 5.345-2.4 5.345-5.335V38.112c3.04-2.626 4.757-6.355 4.758-10.409.261-6.276-3.997-11.528-9.783-13.198 2.138-1.293 3.505-3.602 3.505-6.276 0-4.044-3.362-7.354-7.46-7.354s-7.46 3.31-7.46 7.354z" stroke-width=".25"/><path d="M27.91 6.536h13.018c.463 0 .793-.391.793-.782 0-.39-.396-.781-.793-.781H27.91a.798.798 0 00-.793.781c0 .39.397.782.793.782zM40.928 13.308H27.91a.798.798 0 00-.793.782c0 .456.397.781.793.781h13.018c.463 0 .794-.39.794-.781.066-.456-.33-.782-.794-.782zM40.929 21.84h-7.534a.798.798 0 00-.793.78c0 .392.397.782.794.782h7.533c.463 0 .793-.39.793-.781 0-.39-.33-.782-.793-.782z"/></svg>');

    },
    changeModal: function() {
        var slogan = '<h3 class="modal-slogan">People of all shapes and sizes have transformed their bodies, and lives just in <span> 6  weeks with  FREE diet plan </span></h3>';

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
                    console.log('yessss')
                    $('.sc_item').eq(4).removeClass('sc_item_done')
                    $('.sc_item').eq(4).addClass('sc_item_active')
                } else {
                    console.log('nooooo')
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
                name: 'Jacob Stock',
                avatar: 'https://lh3.googleusercontent.com/a-/AOh14Gjj7XkwAR42gUf3efE5o9nMu2qb3qhd8imhOkhjHQ=c0x00000000-cc-rp-s120',
                text: 'Everything about the program is great. I have emerged much more educated about nutrition, dieting, and exercising. Not only that, it is super easy to follow and most importantly, it works. I lost 15 pounds and over 5% body fat in only 42 days. '
            },
            {
                name: 'Rene Caballero',
                avatar: 'https://lh3.googleusercontent.com/a-/AOh14GhKtNlOB5C0eqn9GV2D9IXi4eYfefPpOWPsSyWZ9PQ=c0x00000000-cc-rp-s120',
                text: 'Great experience. Life changing! I lost 23 pounds in 60 days, from 212 to 189. And even taught me how to follow up with the healthier lifestyle.'
            },
            {
                name: 'Susane Leandro',
                avatar: 'https://lh3.googleusercontent.com/a-/AOh14GineCDVe0hR7bLUX-I3F6VcLnraZDFMHB7GxfaL6A=c0x00000000-cc-rp-s120',
                text: 'GTZ planned the perfect blend of nutrition and exercise for me to kick start my new routine. I now love exercising and the trainers and staff at GTZ are awesome! I lost weight, met their challenge, and feel great.'
            },
            {
                name: 'Maiky Vermeulen',
                avatar: 'https://lh3.googleusercontent.com/a-/AOh14GgEJbiYoCyuRuQfsMokz4f60lngrcZftucWpBBuMA=c0x00000000-cc-rp-s120',
                text: 'I lost 28 lbs with the 6 week gravity program. It\'s been amazing. Would definitely recommend it!! It\'s a lifestyle change program not just another workout program.'
            },
            {
                name: 'Maria Ovalles',
                avatar: 'https://lh3.googleusercontent.com/a-/AOh14GimYEz5j2FGv1-96BjoER_Bl6aeYLswAeZa3lCl=c0x00000000-cc-rp-s120',
                text: 'I lost 22.6lbs doing the 6 week challenge! Great coaches to work with! They have everything detailed out for you from workouts to meal prepping. Highly recommended!'
            },
            {
                name: 'Nirmiti Parekh',
                avatar: 'https://lh3.googleusercontent.com/a-/AOh14GiaD0N54C8c5NvRkUsJM00uJzudTAVw2Y54oafwHg=c0x00000000-cc-rp-s120',
                text: 'At my final weigh in, I lost 5.5% body fat and 9.6 lbs! I’m so surprised at how much I was able to accomplish thanks to GTZ. It really taught me the importance of a healthy lifestyle!!'
            },
            {
                name: 'Erica V Aguirre',
                avatar: 'https://lh3.googleusercontent.com/a-/AOh14Gi5kdgu7LJEIHSeAHoLeqG-ddpn6PDNVMiyctkhig=c0x00000000-cc-rp-s120',
                text: 'This is an amazing program for anyone who is serious about making a change in their health and quality of life.This program has been set up to work but puts the responsibility back on you and I love that!  '
            },
            {
                name: 'Johanna Badenhop',
                avatar: 'https://lh3.googleusercontent.com/a-/AOh14GidJfkbQhbeqz9NCYXZ9pI5u8s0dUyXRguh0S9D=c0x00000000-cc-rp-s120',
                text: 'The Gravity Training Zone produces amazing results. I lost 20.4 lbs and 5.5% body fat in 6 weeks. The have taught me how to eat right (I was never hungry on the program) and the right exercises to tone up the whole body. The end result is amazing, I got a stronger and healthier me in the end.'
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
        $('#submit-form').on('click', function() {
            window._fpEvent.push(["eventConversion", {
                value: "optinlp+musclelp"
            }]);
        })

        $('.gender_selection .selImage').on('click', function() {
            window._fpEvent.push(["eventConversion", {
                value: "genderClick"
            }]);
        })

        $('.age_selection .selImage').on('click', function() {
            window._fpEvent.push(["eventConversion", {
                value: "ageClick"
            }]);
        })


        $('#sb_weight').on('scrolled', function() {
            window._fpEvent.push(["eventConversion", {
                value: "weightClick"
            }]);
        })

        $('.activity_selection .selImage').on('click', function() {
            window._fpEvent.push(["eventConversion", {
                value: "workoutClick"
            }]);
        })

        $('.desc_selection .selImage').on('click', function() {
            window._fpEvent.push(["eventConversion", {
                value: "descClick"
            }]);
        })


    }

}.init();