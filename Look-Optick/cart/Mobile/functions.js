var currentId, currentColor, currentMagnification, nextId, nextColor, nextMagnification, quantity;
var FP_LP_DONATIONS_TRUST = {
    init: function() {
        if ($(window).width() < 1025) {
            this.virtualMirror();
            this.addProgressBar();
            this.addTitle();
            this.editProductModal();
            this.orderSummary();
            this.belowSummaryImages();
            this.clickEvents();
            this.reviews();
            this.selectOtherColor();
            this.updateCart();
            this.attachEvents();
        }

    },
    addProgressBar: function() {
        var rightArrow = '<svg viewBox="0 0 40.055 72.062" class="svg svg--slideArrow svg--slideArrowRight svg--arrow-right arrow-right glide-arrow"><path stroke="currentColor" fill="currentColor" d="M.006 70.168a2 2 0 003.406 1.313l36-34a2 2 0 000-2.938l-36-34a2.012 2.012 0 10-2.75 2.938L35.1 36.012.66 68.543a2 2 0 00-.655 1.625z"></path></svg>'
        var progressBar = '<div class="fp_progressbar"><span> Cart </span> <span> ' + rightArrow + '</span> <span> Information </span> <span>' + rightArrow + ' </span><span> Shipping </span><span>' + rightArrow + ' </span><span> Payment</span> </div>'
        $('.continue-shopping').after(progressBar)
    },
    addTitle: function() {
        $('.fp_progressbar').after('<h1 class="fp_page-title"> SHOPPING CART </h1>')
    },
    virtualMirror: function() {

        $('.cart__product-info-wrapper .cart__product-title').after($('.fyl__section__btn.vm__trigger'))
        $('.fyl__section__btn.vm__trigger').hide()
        $(window).on('load', function() {
            $('body').append('<script defer src="//cdn.shopify.com/s/files/1/0797/7215/t/312/assets/virtual_mirror.bundle.js?v=8574063332416305004" type="text/javascript"></script>')
            $('.fyl__section__btn.vm__trigger').show()
        })




        $('div.fyl__virtual-mirror').css('padding', 0)
        $('.fyl__section__btn.vm__trigger').text('Try On')
        var counter = 0;
        $(document).on('click', '.cart__product-info-wrapper .fyl__section__btn.vm__trigger', function() {

            // show the element that are hidden by lookoptic devs
            $('.cartReviewOuterWrapper').next('div').show();

            // select clicked product between virtual products
            var clickedProductName = $(this).prev('.cart__product-title').text().split(' ');
            var that = this;

            if (counter == 0) {
                var firstTimeSelect = setInterval(function() {
                    for (var i = 0; i < clickedProductName.length; i++) {

                        var a = $(that).prev('.cart__product-title').text().split(' ');
                        $('.vm__frame[data-product-title=' + a[i] + ']').click();
                    }
                }, 1000)
                setTimeout(function() {
                    clearInterval(firstTimeSelect)
                }, 4000);
                counter++
            } else {
                for (var i = 0; i < clickedProductName.length; i++) {

                    var a = $(that).prev('.cart__product-title').text().split(' ');
                    $('.vm__frame[data-product-title=' + a[i] + ']').click();
                }
            }






            // Hide nonselected products
            var selectedProducts = [];
            $('.cart__product-title span').each(function(item) {
                selectedProducts.push($(this).text().replace(/\s/g, ''))
            })


            $('.vm__frame').hide();
            $('.vm__frame').each(function() {
                var that = this;
                for (var i = 0; i < selectedProducts.length; i++) {
                    if ($(this).attr('data-product-title') == selectedProducts[i]) {

                        $(this).show();
                    }
                }
            })
        })
        $(document).on('click', '.vm__modalClose', function() {
            $('.cartReviewOuterWrapper').next('div').hide()
        })













    },
    editProductModal: function() {
        $('.cart__product-info').closest('div').append('<div class="fp_editBtn"> Edit </div>');
        var determineModal = '<div class="fp_modal_container fp_modal_container--edit"><div class="fp_modal_klaviyo-bis-close fadein"><div class="w-100" id="klaviyo-bis-modal"><div class="fp_container"><div class="fp_loading"> </div><div class="fp_appended"></div><button type="button" class="fp_close klaviyo-bis-close" data-dismiss="modal"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 1L15 15" stroke="white" stroke-width="2" stroke-miterlimit="1.5" stroke-linejoin="round"/><path d="M15 1L1 15" stroke="white" stroke-width="2" stroke-miterlimit="1.5" stroke-linejoin="round"/></svg></button></div></div></div></div>';
        $('body').append(determineModal);



        $(document).on('click', '.fp_close', function() {
            handleClose()
        })


        function handleClose() {
            $('.fp_modal_container').hide();
            $('body').removeClass('modal-open');
            $('.fp_modal_container--edit .fp_container .fp_appended').html("");

        }
    },
    fetchData: function(url, img) {
        $('.fp_loading').show()
        $('.fp_modal_container--edit').show();
        $('body').addClass('modal-open');
        jQuery.ajax({
            url: url,
            type: 'get',
        }).then(function(data) {

            $('.fp_loading').hide()

            a = $('<div>' + data + '');

            // append hero image
            var src = a.find('.popup-image img').eq(0).attr('src')
            $('.fp_modal_container--edit .fp_container .fp_appended').append('<img id="ProductPhotoImg" src="' + src + '">')

            // append title and price
            var titleAndPrice = a.find('.product-single__header-wrapper')
            $('.fp_modal_container--edit .fp_container .fp_appended').append(titleAndPrice)
            $('.fp_appended .product-single__classification--wrapper').hide();

            $('.fp_modal_container--edit .fp_container .fp_appended').append(a.find('.variant-options'))
                // Make new datas compatible with modal

            $('.fp_appended .klaviyo-bis-trigger').hide();
            $('.fp_appended .swatch-element').each(function() {
                $(this).attr('data-onclick', $(this).attr('onclick'));
            })


            // Fix color's text
            fixColor();

            function fixColor() {
                $('.swatch-active').parent('.color').css('z-index', '9')
                var selectedColor = $($('.swatch-active').parent()[0]).children('.tooltip').text()
                var limitedEditionColor = $('.fp_container .variant-options div[layout=column]:nth-child(2) div[layout=row]:nth-child(2) .swatch-element .tooltip')


                var limitedEdition = ''
                for (var i = 0; i < limitedEditionColor.length; i++) {
                    if (selectedColor == $(limitedEditionColor[i]).text()) {
                        limitedEdition = '<span class="fp_limited"> Limited Edition </span>'
                    }
                }

                if ($('.swatch .lens__title:contains("Limited Edition")').length) {
                    // $('.mobile-swatch div[layout-align="row space-between end"').append($('.swatch .lens__wrapper:contains("Limited Edition") div[layout-align="end end"]').html())
                    $('.swatch .lens__wrapper:contains("Limited Edition")').css('padding-top', '37px')
                    $('.swatch .lens__header:contains("Limited Edition")').hide()
                }
                $('.swatch__title').html('Color: <span class="fp_selectedColor">' + selectedColor + '</span>' + limitedEdition);
            }







            $('.fp_appended .swatch-element').attr('onclick', '')
            $('.fp_modal_container--edit .fp_container .fp_appended .hide-small').removeClass('hide-small')
            $('.fp_modal_container--edit .fp_container .fp_appended .hide-medium').removeClass('hide-medium')
            $('.fp_appended').append('<button id="AddToCart" disabled type="submit" name="add" fullwidth=""  class="lo-btn AddToCart"><span id="AddToCartText">UPDATE ITEM</span></button>')






            nextId = $('#productSelect option:contains(' + currentMagnification + ')').attr('value').replace(/\s/g, '');

            $(".swatch-element.magnify[data-value='" + currentMagnification + "'] input").click()
            console.log('currentId:   ', currentId);



        })
    },
    orderSummary: function() {

        // Hide subtotal from order summary
        $('.cart__subtotal-title:contains("Subtotal")').closest('.cart__subtotal-wrapper').hide();



        $('.cart__subtotal-title:contains("Shipping")').closest('.cart__subtotal-wrapper').append('<div class="fp_shipping"> Your Glasses Ship in 1-2 Business Days </div>')
        $('.cart__subtotal-title:contains("Total")').closest('.cart__subtotal-wrapper').append('<div class="fp_total"> Taxes & discounts calculated at checkout. </div>')

        $('.cart__subtotal-title:contains("Total")').closest('.cart__subtotal-wrapper').css('cssText', 'border-bottom: none !important');

        $('.cart__subtotal-title:contains("Total")').removeClass('cart__subtotal-title--bold');

        $('#CartSubmit').text('Continue Secure Checkout')

        $('.cart__subtotal-title:contains("Order Summary")').css('text-transform', 'uppercase');
    },
    belowSummaryImages: function() {
        var list = '<div class="fp_list"> <ul> <li> <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.76595 2.32931L16.0098 6.03599M10.976 21V7.82068M10.976 7.82068L1 4.15979M10.976 7.82068L20.5859 4.29708M1 4.74437V17.0366C1 17.3813 1.22031 17.6874 1.54716 17.7969L10.722 20.8692C10.8869 20.9244 11.0652 20.9245 11.2301 20.8695L20.0377 17.9337C20.3651 17.8245 20.5859 17.5182 20.5859 17.1731V4.86714C20.5859 4.52582 20.3698 4.22192 20.0474 4.10985L11.2292 1.04445C11.0649 0.987334 10.8864 0.985206 10.7208 1.03839L1.55663 3.98102C1.22495 4.08752 1 4.39601 1 4.74437Z" stroke="#515152"/></svg> Free Shipping </li>         <li> <svg width="17" height="21" viewBox="0 0 17 21" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.13788 7.2069V5.13793C4.13788 2.85261 5.99049 1 8.27581 1C10.5611 1 12.4137 2.85262 12.4137 5.13793V7.2069" stroke="#515152" stroke-linecap="round"/><path d="M0.5 4.55855C0.5 4.39286 0.634316 4.25854 0.8 4.25854H15.7517C15.9174 4.25854 16.0517 4.39286 16.0517 4.55854V20.1999C16.0517 20.3656 15.9174 20.4999 15.7517 20.4999H0.800001C0.634314 20.4999 0.5 20.3656 0.5 20.1999V4.55855Z" stroke="#515152"/></svg> 90-day Risk Free Trial </li>        <li> <svg width="19" height="22" viewBox="0 0 19 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17.9021 4.79436L4.79436 17.9021M9.50682 1.00384C13.3262 0.87257 15.0401 4.14604 17.8328 4.68792C17.9095 4.70279 17.967 4.77205 17.9673 4.85016C18.0252 18.3413 10.198 20.8135 9.54947 20.9952C9.51848 21.0039 9.48979 21.0002 9.45971 20.9888C0.431539 17.5615 0.946395 6.13106 1.03507 4.8321C1.04009 4.75852 1.09601 4.70426 1.1685 4.69074C3.6575 4.22676 5.22338 1.16069 9.50682 1.00384Z" stroke="#515152"/></svg> One Year Guarantee</li>        </ul> </div>'
        $('.cart__checkout-list').after(list);

        var carts = '<div class="fp_carts"> <img src="https://variations-cdn.figpii.com/variations/look+optic/Cart/cart-1.svg" > <img src="https://variations-cdn.figpii.com/variations/look+optic/Cart/cart-2.png" > <img src="https://variations-cdn.figpii.com/variations/look+optic/Cart/cart-3.png" > <img src="https://variations-cdn.figpii.com/variations/look+optic/Cart/cart-4.png" > <img src="https://variations-cdn.figpii.com/variations/look+optic/Cart/cart-5.png" class="afterpay" > <span class="fp_carts_question"> <img src="https://variations-cdn.figpii.com/variations/look+optic/Cart/icon-question.svg" > </span> </div> <div class="fp_split"> Split your purchase into four easy interest free payments. </div>';

        $('.fp_list').after(carts);



    },
    clickEvents: function() {
        setTimeout(function() {




            $(document).on('click', '.afterpay', function() {
                $('.fp_split').show();
            })
            $(document).on('click', '.fp_carts_question', function() {
                $('.fp_split').show();
            })



        }, 1000)

    },
    reviews: function() {
        var title = '<h1 class="fp_reviews_title"> Customers Love Look </h1>'
        var stars = '<div><svg width="69" height="13" viewBox="0 0 69 13" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.5 0L7.95934 4.49139H12.6819L8.86126 7.26722L10.3206 11.7586L6.5 8.98278L2.6794 11.7586L4.13874 7.26722L0.318133 4.49139H5.04066L6.5 0Z" fill="#435A6F"/><path d="M20.5 0L21.9593 4.49139H26.6819L22.8613 7.26722L24.3206 11.7586L20.5 8.98278L16.6794 11.7586L18.1387 7.26722L14.3181 4.49139H19.0407L20.5 0Z" fill="#435A6F"/><path d="M34.5 0L35.9593 4.49139H40.6819L36.8613 7.26722L38.3206 11.7586L34.5 8.98278L30.6794 11.7586L32.1387 7.26722L28.3181 4.49139H33.0407L34.5 0Z" fill="#435A6F"/><path d="M48.5 0L49.9593 4.49139H54.6819L50.8613 7.26722L52.3206 11.7586L48.5 8.98278L44.6794 11.7586L46.1387 7.26722L42.3181 4.49139H47.0407L48.5 0Z" fill="#435A6F"/><path d="M62.5 0L63.9593 4.49139H68.6819L64.8613 7.26722L66.3206 11.7586L62.5 8.98278L58.6794 11.7586L60.1387 7.26722L56.3181 4.49139H61.0407L62.5 0Z" fill="#435A6F"/></svg></div>'
        var reviewSample = '<div class="fp_review"> <div class="fp_review_head"><span class="title"></span> <span class="stars_container">' + stars + ' <span>5.0 </span></span></div> <div class="reviewDescription">  </div> </div>'

        var dots = '<div class="fp_review_dots"> </div>'

        var reviewsText = '<div class="fp_reviews">' + title + reviewSample + dots + ' </div>'

        $('.cartReviewOuterWrapper').before(reviewsText);


        var getReviewArray = setInterval(function() {
            if (typeof reviewArray !== "undefined" && typeof titleArray !== "undefined") {
                clearInterval(getReviewArray)
                makeReviews(reviewArray, titleArray);
            }
        }, 1000)

        function makeReviews(reviews, titles) {
            for (var j = 0; j < reviews.length; j++) {
                $('.fp_review_dots').append('<div class="dot"> </div>')
            }
            var i = 0;
            $('.fp_review .title').text(titles[i % reviews.length])
            $('.fp_review .reviewDescription').text(reviews[i % reviews.length])
            $('.fp_review_dots .dot:first-child').addClass('active')

            setInterval(function() {
                i++;
                // $('.fp_review .title').text(titles[i%reviews.length])
                // $('.fp_review .reviewDescription').text(reviews[i%reviews.length])

                $(".fp_review .title").fadeOut(600, function() {
                    $(this).text(titles[i % reviews.length]).fadeIn(200);
                });

                $(".fp_review .reviewDescription").fadeOut(600, function() {
                    $(this).text(reviews[i % reviews.length]).fadeIn(200);
                });

                $(".fp_review_head span:nth-child(2)").fadeOut(600, function() {
                    $(this).fadeIn(200);
                });

                $(".fp_review_dots .dot").removeClass('active');
                $(".fp_review_dots .dot").eq(i % reviews.length).addClass('active')






            }, 6000)
        }

    },
    selectOtherColor: function() {

        var that = this
        $(document).on('click', '.fp_editBtn', function() {
            var url = $($(this).closest('.cart__product-info-wrapper')[0]).children('div').children('a.cart__product-title').attr('href')
            var img = $($(this).closest('.cart__product-wrapper')[0]).children('.cart__product-image-wrapper').children('a.cart__image').children('img')






            // current Product 
            var temp = $(this).closest('.cart__product-info-wrapper').children('div:first-child').children('a.cart__product-title').attr('href');
            currentColor = temp.split('?variant=')[1]

            // current Magnification
            currentMagnification = $(this).closest('.full-width').children('.cart__product-info').text().split('Magnification:')[1].replace(/\s/g, '')

            // current quantity
            quantity = $(this).closest('.cart__product-info-wrapper').children('div:last-child').children('div').children('input.cart__quantity-selector').attr('value');
            console.log('quantity: ', quantity)



            console.log('currentMagnification:', currentMagnification);
            currentId = url.split('?variant=')[1].replace(/\s/g, '');


            that.fetchData(url, img);


        });

        $(document).on('click', '.fp_appended .swatch-element.color', function() {
            $('.fp_appended .swatch-element label').removeClass('swatch-active');
            $(this).children('label').addClass('swatch-active');

            // New Product
            nextColor = $(this).attr('data-onclick').replace("location.href='", "").replace("'", "")
            $('.fp_modal_container--edit .fp_container .fp_appended').html("");
            that.fetchData(nextColor)

            console.log(nextColor);




            nextId = $(this).attr('data-onclick').replace("location.href='", "").replace("'", "").split('variant=')[1]
            console.log('nextId:', nextId)
            if (currentId && nextId && currentId !== nextId) {
                console.log("Button Enabled", currentId, nextId)
                setTimeout(function() {
                    $('.fp_appended #AddToCart').prop('disabled', false);
                }, 1000)
            } else {
                console.log('Button Disabled')
                $('.fp_appended #AddToCart').prop('disabled', true);
            }
        })

        $(document).on('click', '.swatch-element.magnify input', function() {

            nextId = $('#productSelect option:contains(' + $(this).attr('value') + ')').attr('value')
            console.log('nextId:', nextId)
            if (currentId && nextId && currentId !== nextId) {
                console.log("Button Enabled", currentId, nextId)
                $('.fp_appended #AddToCart').prop('disabled', false);
            } else {
                console.log('Button Disabled')
                $('.fp_appended #AddToCart').prop('disabled', true);
            }
        })
    },
    updateCart: function() {

        $(document).on('click', '.fp_appended #AddToCart', function() {
            console.log("UPDATE: ", currentId, nextId)
            update(currentId, nextId);
        })

        function update(currentId, nextId) {
            var updates = {};
            updates[currentId] = 0;
            updates[nextId] = quantity;
            jQuery.ajax({
                url: '/cart/update.js',
                type: 'post',
                dataType: 'json',
                data: {

                    updates


                }
                // Optional: success/error functions
            }).then(function(data) {
                console.log(data);
                $('.fp_modal_container').hide();
                location.reload();
            }).catch(function(data) {
                alert(data.message);
            })
        }









    },
    attachEvents: function() {


        $(document).on('click', '.fyl__section__btn.vm__trigger', function() {
            window._fpEvent.push(["eventConversion", {
                value: "tryOn"
            }]);
        })


        $(document).on('click', '.continue-shopping > a', function() {
            window._fpEvent.push(["eventConversion", {
                value: "continueShopping"
            }]);
        })


        $(document).on('click', '.fp_editBtn', function() {
            window._fpEvent.push(["eventConversion", {
                value: "editButton"
            }]);
        })


        $(document).on('click', '#CartSubmit', function() {
            window._fpEvent.push(["eventConversion", {
                value: "secureCheckout"
            }]);
        })


        $(document).on('click', '.cart__remove', function() {
            window._fpEvent.push(["eventConversion", {
                value: "cartRemove"
            }]);
        })



    }


}.init();