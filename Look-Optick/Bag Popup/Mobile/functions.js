var FP_LP_DONATIONS_TRUST = {
    init: function() {
        this.createPopup();
        this.popupContent();
        this.addToCart();
        this.attachEvents();
    },
    createPopup: function() {
        var popupContainer = '<div class="fp_popup_container"> <div class="fp_popup_content"> </div> </div>'
        $('body').prepend(popupContainer);

        var popupImageSrc = $('a.popup-image').attr('href')
        var popupContent = '<p>Added To Your Cart! </p>     <img src="' + popupImageSrc + '" >     <div class="fp_popup_detail"> </div>     <div class="fp_popup_subtotal"> Subtotal: <span> </span> </div>         <a href="/cart" class="fp_popup_btn"> VIEW YOUR CART </a>           <span class="fp_popup_continue"> Continue Shopping </span>         <div class="fp_popup_icon"><svg width="18" height="12" viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 11L9 2L17 11" stroke="white" stroke-width="2"/></svg></div>'

        $('.fp_popup_content').append(popupContent);
        $(window).on('load', function() {
            if ($('#bannerShow').is(':visible')) {
                $('.fp_popup_container').css('top', '110px')
            }
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

        $('.fp_popup_icon').on('click', function() {
            $('.fp_popup_container').slideUp();
        })

        $('.fp_popup_continue').on('click', function() {
            $('.fp_popup_container').slideUp();
        })

    },
    priceFormat: function(price) {
        price = price.toString()
        var b = ".";
        var position = price.length - 2;
        var output = [price.slice(0, position), b, price.slice(position)].join('');
        return output;
    },
    addToCart: function() {
        $('#AddToCart').attr('type', 'button')
        $(document).on('click', '#AddToCart', function(e) {
            e.preventDefault();

            sendtoCart();
            var magnification = $('input[name="option-1"]:checked').val();
            $('.fp_popup_detail_magnification').text(magnification)

            $('html').animate({ scrollTop: 0 }, 300);
            setTimeout(function() {
                $('.fp_popup_container').slideDown()
            }, 300)
            setTimeout(function() {
                $('.fp_popup_container').slideUp();
            }, 6000);
        })


        function sendtoCart() {
            var url = new URL(window.location);
            var product = url.searchParams.get("variant");
            console.log(product)

            jQuery.ajax({
                url: '/cart/add.js',
                type: 'post',
                dataType: 'json',
                data: {

                    id: product,


                }
                // Optional: success/error functions
            }).then(function(data) {
                return calculateCurrentCart();
            })

        }

        var that = this;

        function calculateCurrentCart() {

            var num = parseInt($('div.cart-indicator').eq(0).text())
            if ($('div.cart-indicator').length) {
                $('div.cart-indicator').text(parseInt(num) + 1)
            } else {
                $('.lo-nav-header .lo-cart > a').prepend('<div layout="" layout-align="center center" class="cart-indicator flex-center">1</div>');
            }

            fetch('/cart.js')
                .then(function(response) { return response.json() })
                .then(function(data) {
                    return $('.fp_popup_subtotal span').text('$ ' + that.priceFormat(data.items_subtotal_price));

                })
                .catch(function(data) {
                    alert(data.message);
                })









        }
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