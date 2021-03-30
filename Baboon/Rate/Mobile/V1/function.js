var FP_LP_DONATIONS_TRUST = {
    init: function() {
        if (window.location.href.includes('/collections/')) {
            this.sendRequests();
            this.switchColors()
        } else {

            this.attachEvents();
        }
    },
    sendRequests: function() {
        var junip = '<div class="junip-product-summary-stars-wrapper"> <div class="junip-product-summary-star-ratings-container" tabindex="0" aria-label="4.900855920114123 stars"> <div key="rating-0" class="junip-product-summary-star junip-star-filled"> <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" role="img"><title>Filled star</title><path d="m3.2 16.0001081c-.1687782 0-.33328968-.0531313-.47-.1521081-.24051968-.174488-.36451194-.4679107-.322-.762l.743-5.203-2.917-2.917c-.21191095-.21196521-.28756133-.52460199-.196-.81.09130759-.2851682.3345701-.49522345.63-.544l4.398-.734 2.218-4.435c.13744692-.27145241.41573373-.4426761.72-.443.3045618.00166772.58175678.1761261.715.45l2.123 4.362 4.498.801c.2933158.05211246.5333796.26289081.623.547.0898959.28455453.0135125.59548872-.198.806l-2.917 2.917.744 5.203c.042199.2957461-.0839008.5903645-.327.764-.2421349.1739598-.5609835.1986349-.827.064l-4.382-2.22-4.502 2.223c-.10996656.0547452-.23116004.0831081-.354.0831081z" fill="#000DDD"></path></svg> </div><div key="rating-1" class="junip-product-summary-star junip-star-filled"> <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" role="img"><title>Filled star</title><path d="m3.2 16.0001081c-.1687782 0-.33328968-.0531313-.47-.1521081-.24051968-.174488-.36451194-.4679107-.322-.762l.743-5.203-2.917-2.917c-.21191095-.21196521-.28756133-.52460199-.196-.81.09130759-.2851682.3345701-.49522345.63-.544l4.398-.734 2.218-4.435c.13744692-.27145241.41573373-.4426761.72-.443.3045618.00166772.58175678.1761261.715.45l2.123 4.362 4.498.801c.2933158.05211246.5333796.26289081.623.547.0898959.28455453.0135125.59548872-.198.806l-2.917 2.917.744 5.203c.042199.2957461-.0839008.5903645-.327.764-.2421349.1739598-.5609835.1986349-.827.064l-4.382-2.22-4.502 2.223c-.10996656.0547452-.23116004.0831081-.354.0831081z" fill="#000DDD"></path></svg> </div><div key="rating-2" class="junip-product-summary-star junip-star-filled"> <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" role="img"><title>Filled star</title><path d="m3.2 16.0001081c-.1687782 0-.33328968-.0531313-.47-.1521081-.24051968-.174488-.36451194-.4679107-.322-.762l.743-5.203-2.917-2.917c-.21191095-.21196521-.28756133-.52460199-.196-.81.09130759-.2851682.3345701-.49522345.63-.544l4.398-.734 2.218-4.435c.13744692-.27145241.41573373-.4426761.72-.443.3045618.00166772.58175678.1761261.715.45l2.123 4.362 4.498.801c.2933158.05211246.5333796.26289081.623.547.0898959.28455453.0135125.59548872-.198.806l-2.917 2.917.744 5.203c.042199.2957461-.0839008.5903645-.327.764-.2421349.1739598-.5609835.1986349-.827.064l-4.382-2.22-4.502 2.223c-.10996656.0547452-.23116004.0831081-.354.0831081z" fill="#000DDD"></path></svg> </div><div key="rating-3" class="junip-product-summary-star junip-star-filled"> <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" role="img"><title>Filled star</title><path d="m3.2 16.0001081c-.1687782 0-.33328968-.0531313-.47-.1521081-.24051968-.174488-.36451194-.4679107-.322-.762l.743-5.203-2.917-2.917c-.21191095-.21196521-.28756133-.52460199-.196-.81.09130759-.2851682.3345701-.49522345.63-.544l4.398-.734 2.218-4.435c.13744692-.27145241.41573373-.4426761.72-.443.3045618.00166772.58175678.1761261.715.45l2.123 4.362 4.498.801c.2933158.05211246.5333796.26289081.623.547.0898959.28455453.0135125.59548872-.198.806l-2.917 2.917.744 5.203c.042199.2957461-.0839008.5903645-.327.764-.2421349.1739598-.5609835.1986349-.827.064l-4.382-2.22-4.502 2.223c-.10996656.0547452-.23116004.0831081-.354.0831081z" fill="#000DDD"></path></svg> </div><div key="rating-4" class="junip-product-summary-star junip-star-filled"> <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" role="img"><title>Filled star</title><path d="m3.2 16.0001081c-.1687782 0-.33328968-.0531313-.47-.1521081-.24051968-.174488-.36451194-.4679107-.322-.762l.743-5.203-2.917-2.917c-.21191095-.21196521-.28756133-.52460199-.196-.81.09130759-.2851682.3345701-.49522345.63-.544l4.398-.734 2.218-4.435c.13744692-.27145241.41573373-.4426761.72-.443.3045618.00166772.58175678.1761261.715.45l2.123 4.362 4.498.801c.2933158.05211246.5333796.26289081.623.547.0898959.28455453.0135125.59548872-.198.806l-2.917 2.917.744 5.203c.042199.2957461-.0839008.5903645-.327.764-.2421349.1739598-.5609835.1986349-.827.064l-4.382-2.22-4.502 2.223c-.10996656.0547452-.23116004.0831081-.354.0831081z" fill="#000DDD"></path></svg> </div><div class="junip-product-summary-review-count"> '

        function getRatings() {



            $('.product-grid__items > li').each(function() {
                var url = $(this).children('.product-card').children('a').attr('href');
                var that = this;
                jQuery.ajax({
                    url: url,
                    type: 'get',
                }).then(function(data) {
                    a = $('<div>' + data + '');
                    var rate = a.find('.junip-product-summary').eq(0);
                    var num = $(rate).attr('data-product-rating-count')
                    if (num && !$(that).children('.product-card__meta').children('p').children('div').length) {
                        $(that).children('.product-card__meta').children('p').append(junip + '(' + num + ') </div></div></div>')
                    }

                })



            })


        }

        getRatings();


    },
    switchColors: function() {
        var that = this;
        $(document).on('click', '.product-grid__options__swatch', function() {
            $('.junip-product-summary-stars-wrapper').remove();
            that.sendRequests();
        })

    },
    attachEvents: function() {
        $('document').on('click', '#add-to-cart', function() {
            window._fpEvent.push(["eventConversion", {
                value: "addToCart_click"
            }]);
        })








    }

}.init();