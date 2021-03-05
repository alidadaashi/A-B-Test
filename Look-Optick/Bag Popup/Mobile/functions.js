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
        var popupContent = '<p>Added To Your Cart! </p>     <img src="' + popupImageSrc + '" >     <div class="fp_popup_detail"> </div>     <div class="fp_popup_subtotal"> Subtotal: <span> ...$ </span> </div>         <a href="/cart" class="fp_popup_btn"> VIEW YOUR CART </a>           <span class="fp_popup_continue"> Continue Shopping </span>         <div class="fp_popup_icon"><svg width="18" height="12" viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 11L9 2L17 11" stroke="white" stroke-width="2"/></svg></div>'

        $('.fp_popup_content').append(popupContent);


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
            $('.fp_popup_container').fadeOut();
        })

    },
    addToCart: function() {
        $('#AddToCart').attr('type', 'button')
        $(document).on('click', '#AddToCart', function(e) {
            e.preventDefault();

            sendtoCart();
            var magnification = $('input[name="option-1"]:checked').val();
            $('.fp_popup_detail_magnification').text(magnification)

            $('.fp_popup_container').show();
            $('html').animate({ scrollTop: 0 }, 300);
            setTimeout(function() {
                $('.fp_popup_container').fadeOut();
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
            }).then(data => {
                calculateCurrentCart();
                console.log(data)
            })

        }


        function calculateCurrentCart() {


            var num = parseInt($('div.cart-indicator').eq(0).text())
            $('div.cart-indicator').text(parseInt(num) + 1)

            fetch('/cart.js')
                .then(response => response.json())
                .then(data => {
                    $('.fp_popup_subtotal span').text(data.items_subtotal_price / 100 + '$');
                    console.log(data)

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



    }

}.init();