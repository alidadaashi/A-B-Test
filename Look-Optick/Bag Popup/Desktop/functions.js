var FP_LP_DONATIONS_TRUST = {
    init: function() {
        this.createPopup();
        this.popupContent();
        this.addToCart();
        this.attachEvents();
        this.cartDetail();
    },
    createPopup: function() {
        var popupContainer = '<div class="fp_popup_container">      <div class="fp_popup_icon"><svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 1L11 11" stroke="white" stroke-width="2" stroke-miterlimit="1.5" stroke-linejoin="round"/><path d="M11 1L1 11" stroke="white" stroke-width="2" stroke-miterlimit="1.5" stroke-linejoin="round"/></svg></div>     <div class="fp_popup_content"> </div> </div>'
        $('.nav-cart.lo-cart').prepend(popupContainer);

        var popupImageSrc = $('a.popup-image').attr('href')
        var popupContent = '<p>Added To Your Cart! </p>    <div class="fp_case"><div class="fp_popup_detail_container"><img src="' + popupImageSrc + '" >     <div class="fp_popup_detail"> </div></div></div>     <div class="fp_popup_subtotal"> <div>Subtotal (<i></i>) :</div> <span>  </span> </div>         <a href="/cart" class="fp_popup_btn"> VIEW YOUR CART </a>           <span class="fp_popup_continue"> Continue Shopping </span>'

        $('.fp_popup_content').append(popupContent);
        $(window).on('load', function() {
            // Calculate the duration of hovering
            var t2, t1, timer;
            if ($('#bannerShow').is(':visible')) {
                $('.fp_popup_container').css('top', '60px')
                    // $('.fp_popup_container').css('right', '-50px')
            }

            // $('.nav-cart.lo-cart').mouseover(function() {
            //     $('.fp_popup_container').hide();
            //     $('.fp_popup_container2').show();
            //     var t0 = new Date().getTime()
            //     console.log('TO: ', t0)
            // })

            $('.nav-cart.lo-cart > a').hover(function() {
                if (parseInt($('div.cart-indicator').eq(0).text())) {
                    t1 = new Date().getTime()
                        // console.log('T1: ', t1)
                    clearTimeout(timer)
                    $('.fp_popup_container').hide();
                    $('.fp_popup_container2').show();
                }
            }, function() {
                t2 = new Date().getTime();
                // console.log('T2: ', t2)
                // console.log('DELTA: ', t2 - t1);
                if (t2 - t1 > 2000) {
                    $('.fp_popup_container2').hide();
                } else {

                    timer = setTimeout(function() {
                        $('.fp_popup_container2').hide();
                    }, 2000 - (t2 - t1))
                }
            })


        })



    },
    popupContent: function() {
        var title = $('.product-single__header').text();
        var price = $('#ProductPrice').text();

        var selectedColor = $($('.swatch-active').parent()[0]).children('.tooltip').text()
        var limitedEditionColor = $('.swatch .lens__wrapper:contains("Limited Edition") .swatch-element .tooltip')

        var limitedEdition = ''
        for (var i = 0; i < limitedEditionColor.length; i++) {
            if (selectedColor == $(limitedEditionColor[i]).text()) {
                limitedEdition = '<span class="fp_limited"> Limited Edition </span>'
            }
        }

        var content = '<div class="fp_popup_detail_header"> <h2>' + title + '</h2><span>' + price + '</span> </div>               <div> Color: ' + selectedColor + ' ' + limitedEdition + ' </div>        <div> Magnification: <span class="fp_popup_detail_magnification"> +1.0 </span> </div>';

        $('.fp_popup_detail').append(content)

        $(document).on('click', '.fp_popup_icon', function() {
            $('.fp_popup_container').fadeOut();
            $('.fp_popup_container2').fadeOut();
        })

        $(document).on('click', '.fp_popup_continue', function() {
            $('.fp_popup_container').fadeOut();
            $('.fp_popup_container2').fadeOut();
        })


        $('.nav-cart.lo-cart > a').prepend('<div class="fp_popup_container2">' + $('.fp_popup_container').html() + '</div>')

        $('.fp_popup_container2 .fp_popup_content > p').text('YOUR CART');




    },
    addToCart: function() {






        $('#AddToCart').attr('type', 'button')
        $(document).on('click', '#AddToCart', function(e) {
            e.preventDefault();

            sendtoCart();
            var magnification = $('input[name="option-1"]:checked').val();
            $('.fp_popup_detail_magnification').text(magnification)
            $('.fp_popup_container2').hide();
            $('.fp_popup_container').show();
            $('html').animate({ scrollTop: 0 }, 300);
            setTimeout(function() {
                $('.fp_popup_container').fadeOut();
            }, 6000);
        })


        function sendtoCart() {
            var url = new URL(window.location);
            var product = url.searchParams.get("variant");

            jQuery.ajax({
                url: '/cart/add.js',
                type: 'post',
                dataType: 'json',
                data: {

                    id: product,


                }
                // Optional: success/error functions
            }).then(function(data) {
                return calculateCurrentCart(data);
            })

        }
        var that = this

        function calculateCurrentCart() {
            that.cartDetail()

            var num = parseInt($('div.cart-indicator').eq(0).text())
            if ($('div.cart-indicator').length) {
                var a = num + 1
                $('div.cart-indicator').text(a)
            } else {
                $('.fp_popup_container2').after('<a href="/cart" style="position: initial;"><div layout="" layout-align="center center" class="cart-indicator flex-center">1</div></a>');
            }

            fetch('/cart.js')
                .then(function(response) { return response.json() })
                .then(function(data) {
                    $('.fp_popup_subtotal i').text(data.item_count)
                    return $('.fp_popup_subtotal span').text('$ ' + that.priceFormat(data.items_subtotal_price));

                })
                .catch(function(data) {
                    alert(data.message);
                })

        }


    },
    priceFormat: function(price) {
        price = price.toString()
        var b = ".";
        var position = price.length - 2;
        var output = [price.slice(0, position), b, price.slice(position)].join('');
        return output;
    },
    correctName: function(name) {
        var arr = name.split(' ')
        console.log(arr)
        if (arr.length > 1) {
            if (arr[1] == 'screen' || arr[1] == 'Screen') {
                return 'BLUE-LIGHT ' + arr[0]
            } else if (arr[1] == 'Sun' || arr[1] == 'sun') {
                return 'Sun ' + arr[0]
            } else if (arr[1] == 'Kids' || arr[1] == 'kids') {
                return arr[0] + ' ' + arr[1]
            }
        } else {
            return name
        }

    },
    cartDetail: function() {

        $('.fp_popup_container2 .fp_popup_detail_container').remove();
        var that = this;
        fetch('/cart.js')
            .then(function(response) { return response.json() })
            .then(function(data) {
                // console.log('CART: ', data)
                buildCart(data)
                $('.fp_popup_subtotal i').text(data.item_count)
                $('.fp_popup_container2 .fp_popup_subtotal span').html('$' + that.priceFormat(data.total_price))

            })
            .catch(function(data) {
                alert(data.message);
            })


        function buildCart(data) {
            for (var i = 0; i < data.items.length; i++) {
                var html = '<div class="fp_popup_detail_container"><a target="_blank" href="' + data.items[i].url + '"><img src="' + data.items[i].image + '"> <i>' + data.items[i].quantity + '</i> </a> <div class="fp_popup_detail"><div class="fp_popup_detail_header"><a target="_blank" href="' + data.items[i].url + '"><h2>' + that.correctName(data.items[i].product_title) + '</h2></a><span>$' + that.priceFormat(data.items[i].price) + '</span></div> <div> Color: ' + data.items[i].variant_options[0] + '  </div> <div> Magnification: <span class="fp_popup_detail_magnification">' + data.items[i].variant_options[1] + ' </span></div></div></div>'

                $('.fp_popup_container2 .fp_popup_content .fp_case').append(html)
            }
        }




        // $('.fp_popup_container2').on('click', function(e) {
        //     e.preventDefault()
        // })

        $('.fp_popup_container2').closest('a').attr('href', '#')
        $('.svg--cart').wrap('<a style="position: initial;" href="/cart" />');
        $('.cart-indicator').wrap('<a style="position: initial;" href="/cart" />')



    },
    attachEvents: function() {
        $('#AddToCart').on('click', function() {
            window._fpEvent.push(["eventConversion", {
                value: "addToCart_click"
            }]);
        })

        $('.fp_popup_continue').on('click', function() {
            window._fpEvent.push(["eventConversion", {
                value: "continueShopping"
            }]);
        })

        $('.fp_popup_btn').on('click', function() {
            window._fpEvent.push(["eventConversion", {
                value: "viewYourCart"
            }]);
        })

        $('.fp_popup_icon').on('click', function() {
            window._fpEvent.push(["eventConversion", {
                value: "arrowIcon"
            }]);
        })






    }

}.init();