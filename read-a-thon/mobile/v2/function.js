var FP_AD_LP_DONATIONS_TRUST = {
    init: function() {
        var _this = this;
        this.updateElementsStyles();
        this.heroImage();
        this.editHeadLine()
        this.linearProgress();
        this.addBadge();
        this.adjustOverlay();
        this.addId();
        this.attachEvents();
    },
    // Hide the unneccessaary sections of hideHeadline
    editHeadLine: function() {
        var title = $('div:contains("Please encourage")[align="left"]').text();
        var lastChar = title.indexOf('to exceed') - 1;
        var firstChar = 17;
        var fullName = title.substring(firstChar, lastChar).split(" ");

        $('div:contains("to reach goal"):not(:has(div))').parent().hide();
        $('div:contains("Please encourage")[align="left"]').hide();
        $('div:contains("Reading campaign ends soon!")').last().hide();
        $('div div > span:contains("Expires ")').hide();
        $('div:contains("Here is why").orange').parent().hide();

        var html = '<div class="fp__header">'
        html += '<h1> Thanks for helping our child, ' + fullName[0] + '</h1>'
        html += '<h2>' + fullName[0] + ' has raised $' + parseInt(window.totalRaised) + ' so far and has a $' + (window.donationGoal) + ' goal.</h2>'
        html += '<h3>Will you help us reach it?</h3>'
        html += '</div>'

        $('div:contains("Please encourage")[align="left"]').after(html)
    },
    // Create Gradient and margin-bottom
    heroImage: function() {
        $('body > div > div:nth-child(2) > div > :nth-child(1)').addClass('fp__hero__image');
        $('.fp__hero__image').css('max-height', '');
        $('.fp__hero__image img').css('max-width', '');
        $('.fp__hero__image').css('height', '');
        $('.fp__hero__image img').hide();
        var url = $('.fp__hero__image img').attr('src');
        $('.fp__hero__image').css('background-image', 'url(' + url + ')');

    },
    // Circle progress bar of supported friends
    // Horizontal progressbar with book icon
    linearProgress: function() {
        $('body > div > div:nth-child(2) > div > :nth-last-child(3)').css('width', '')
        $('body > div > div:nth-child(2) > div > :nth-last-child(3)').css('padding', '0 20px 0 20px')
        $('body > div > div:nth-child(2) > div > :nth-last-child(3) > div:nth-child(1)').addClass('fp__donation__cta');
        $('body > div > div:nth-child(2) > div > :nth-last-child(3) > div:nth-child(2)').addClass('d-none');
        var percentage = ((window.totalRaised / window.donationGoal) * 100).toFixed();
        var html = '<div class="fp__linearProgress">'
        html += '<div class="fp__remained"> <span> STILL NEEDED </span>$' + (window.donationGoal - window.totalRaised) + '</div>'
        html += '<div class="fp__raised"> <span> RAISED SO FAR </span> $' + parseInt(window.totalRaised) + '</div>'
        html += '<div class="fp-progress-container"><div class="fp-progress fp-progress--green" style="width:' + percentage + '%"></div></div>'

        html += '<div class="fp__emojies">'

        html += '<div class="book"> <svg width="16" height="12" fill="none"><path d="M14.8528 1.2507h-.7531V.6269c0-.0018-.0006-.0032-.0006-.005 0-.0101-.0018-.02-.003-.03-.0012-.008-.0015-.0161-.0032-.024-.0021-.009-.0053-.0175-.0083-.0263-.0028-.0083-.005-.0165-.0085-.0243-.0035-.0079-.008-.0152-.0121-.0224a.2404.2404 0 00-.0135-.0232c-.005-.0072-.0109-.0136-.0168-.0204-.0052-.0065-.0105-.0133-.0166-.0192-.0065-.0063-.0139-.0116-.0212-.0174-.0065-.0051-.0127-.0107-.0198-.0154-.0071-.0047-.0151-.0085-.0227-.0124-.0081-.0043-.0158-.009-.0245-.0124-.0074-.003-.0154-.0049-.023-.0071-.0096-.003-.0192-.006-.0292-.008-.0018-.0003-.0031-.0011-.0046-.0014a8.2993 8.2993 0 00-1.3579-.1118c-1.8112 0-3.518.5757-4.9515 1.6641C6.1293.822 4.4226.2463 2.6114.2463c-.4555 0-.9123.0376-1.3577.1117-.0017.0003-.0032.001-.0048.0014-.01.002-.0195.005-.0292.008-.0077.0022-.0158.004-.0232.007C1.188.378 1.1801.3827 1.172.387c-.0077.004-.0157.0077-.0228.0124-.0071.0045-.0133.0101-.02.0156-.007.0056-.0144.0109-.0209.017-.0062.0061-.0113.013-.0167.0196-.0058.0066-.0118.013-.0167.0202-.0051.0073-.009.0153-.0133.0229-.0042.0075-.009.0148-.0124.0227-.0033.0077-.0056.0158-.0083.024-.003.009-.0062.0174-.0083.0266-.0017.0077-.0021.0158-.0032.0235-.0014.0101-.003.0202-.0032.0307 0 .0016-.0004.0032-.0004.0048v.6238H.2726A.2726.2726 0 000 1.5234v9.8516c0 .1505.122.2727.2726.2727h14.5802a.2728.2728 0 00.2727-.2727V1.5234a.2727.2727 0 00-.2727-.2727zM12.5142.7913c.3484 0 .6969.0248 1.0404.0714v8.569a8.2917 8.2917 0 00-1.0404-.0659c-1.6969 0-3.302.5055-4.677 1.4642V2.3866c1.3494-1.0433 2.963-1.5953 4.677-1.5953zm-5.222 1.5983v8.4431C5.9165 9.8721 4.31 9.3658 2.6112 9.3658c-.3478 0-.6963.0221-1.0403.0658V.8627A7.7522 7.7522 0 012.6113.7913c1.7157 0 3.3308.553 4.6809 1.5983zM.5452 1.796h.4805v7.9505c0 .0076.0016.0147.0022.0221.0006.0077.0002.0153.0014.0227.0003.0018.001.0032.0013.0049.0019.01.005.0193.008.0288.0023.008.0042.016.0072.0233.0035.0087.008.0164.0124.0245.004.0078.0075.0156.0124.0227.0048.0075.0106.0138.016.0207.0056.0069.0106.014.0167.0202.0065.0066.0137.012.0208.0181.0062.005.012.0106.0188.0155.008.0055.0166.0098.0252.0146.0069.0037.0132.0079.0203.011.0086.0037.0177.0063.0268.0091.008.0028.0157.0056.024.0076.0083.002.0171.0026.0257.0035.0094.0012.0188.0027.0285.0029.0016.0001.0033.0006.0051.0006.008 0 .0154-.0019.0233-.0025.0073-.0006.0144-.0001.0216-.0013a7.723 7.723 0 011.2682-.1044c1.4773 0 2.8799.4105 4.103 1.1913H.545V1.796zm14.0352 9.3064H8.4111c1.2234-.7808 2.6258-1.1913 4.1031-1.1913.4255 0 .8522.035 1.2682.1044.0072.0012.0146.0007.0217.0013.0078.0006.0152.0025.023.0025.0018 0 .0034-.0005.005-.0006.01-.0002.0198-.0017.0297-.0031.0081-.001.0165-.0015.0243-.0033.0091-.002.0176-.0051.0263-.0082.0084-.0027.0165-.0048.0244-.0083.0082-.0035.0154-.0083.0228-.0125.0077-.0043.0158-.0082.0227-.013.0074-.0053.0141-.0115.021-.0174.0062-.0053.0129-.0102.0187-.0162.0065-.0067.0119-.0142.0178-.0216.005-.0064.0104-.0125.015-.0193.0047-.0072.0086-.0154.0127-.0231.0041-.008.0086-.0157.0121-.0242.003-.0073.0047-.0151.0071-.0227.003-.0097.0062-.0195.008-.0296.0003-.0017.0011-.0032.0012-.0047.0012-.0074.0009-.0147.0015-.022.0006-.0077.0024-.015.0024-.0228V1.796h.4806v9.3064z" fill="#4B4B4B"/></svg> <span> Increase my love of reading</span> </div>'

        html += '</div>'
        html += '</div>';
        $('.fp__donation__cta').before(html)
        $('.fp__linearProgress').next().addClass('fp__donation')
    },
    // Circle Badge in top right section
    addBadge: function() {
        $('.fp__header').prepend('<div class="fp-donation-box-circle--mini__container"><div class="fp-donation-box-circle--mini"><span>' + $('#SortByAmount').children().length + '</span><div class="fp-donation-box-profile"><div class="fp-donation-box-profile-image"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAXCAYAAADk3wSdAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAKASURBVHgBlVXdcdpAEN49Cc/kDXcgV2D8lvHPIHWAK7BcAbgCQwXYFYArCFQgeYw9eaSD0EF4i4Ok23yLRAYYCeEdNOhWe9/tz7d7TBWSRjehYbkTIl/XTBRbsS9u8DGmGuEypY2vI4C1rNCzkJ0wmaaQtBymLhPPjT+7/RKovN4M4VFnJVnwLfi52PkWffcsO5FhM+H228NRoPkm91cm9uIk+JiXbUiia98wRUbcUw7iZZmN2V5k1GjhlHkVoEojmMU4fpHQqlNl4+54irxZoiXVCPK6wONVfTdfMd463NOCHQXqkDPBFk/zVrUBVEPY7CWUHAeqiVcagZ+jPyjavrEWktmCHTTYZ8YOTpkSnj6hwl18HovQFKomGzonkVBEpm7wHtIBccuUIPwYhG8jdyEzhYVSf3FCWZ9qZI+nflM4HWFzRwHg5asWL8dEcZjarG0r8uAE709U52lO/ATtyQuABTkfS6KAXYK2pTpPN+1nhacA65UZFgOmqzNBGyQVe7/2is2w0C3Q3s86cNagWXw1QpjNqkGhgAxGaNWxjPF0UMg7uLNUR7CeKL9hM0RqBm7ByfCvpGdV4egIzACIKPqFKsYkO4eH3nZkq+iq6bDpGt2g1DnEu7IOYknvjTQudnRrG/FQKG5JHlalKAMs5oKG+V9X4sQ6BSRz7SgMkWxxCBR5e9FmKOuyHVC2j6JDXBeNE/p9yNgN3sbrkQiGlLev39Ri6/tKkoGCLtOVOaMaYXFvNQ0KnEaX4Ua/ii5baJgIr/7mtmBUrOcwD2swl44/O9UXsKWPVDxqcfEPSklPh5BLbn9zE/DG/U/6PNgl2+worp0foNRScqrF27b/AKqhRPmeOIG8AAAAAElFTkSuQmCC" alt=""></div></div></div> <a class="fp__go-to-supporters" href="#fp__supporters"> Supporters </a> </div>')
    },
    adjustOverlay: function() {
        var overlayHeight = $('.fp__header').height() + $('.fp__count').next('div').height()
        $('.fp__hero__image').css('margin-bottom', '-' + (overlayHeight + 90) + 'px');
    },
    addId: function() {
        $($('div:contains("Recent Supporters for"):not(:has("div"))')[0]).attr('id', 'fp__supporters');

        $('div:contains("Recent Supporters for"):not(:has("div"))').parent().hide()
        $('.fp__go-to-supporters').on('click', function() {
            $('div:contains("Recent Supporters for"):not(:has("div"))').parent().show();
            $([document.documentElement, document.body]).animate({
                scrollTop: $("#fp__supporters").offset().top
            }, 500);
        })
    },
    updateElementsStyles: function() {
        var _this = this;
        //update donations titles
        $('.rdb-donation').parent().find('>:not(.rdb-donation, #SortByAmount)').each(function() {
            $(this).css({
                'padding': '17px 0',
                'fontSize': '20px',
                'color': '#000000',
                'borderBottom': '1px solid #E2E2E2',
                'marginTop': '25px'
            })
        });

        var topDonation = $('#SortByAmount .rdb-donation:eq(0)');
        var topDonationName = topDonation.find('table > tbody > tr:nth-child(1) > td.comment > div').text();

        //update donation for reader boxes
        $('#SortByAmount').prevAll('.rdb-donation').each(function() {
            var box = jQuery(this);
            var name = box.find('table > tbody > tr:nth-child(1) > td.comment > div').text();
            var isTop = name === topDonationName;
            _this.updateDonationBox(box, isTop);

        });

        //update donation for school donations
        $('#SortByAmount').nextAll('.rdb-donation').each(function() {
            var box = $(this);
            _this.updateDonationBox(box, false);
        })
    },
    updateDonationBox: function($box, isTop) {
        var price = $box.find('table > tbody > tr:nth-child(1) > td.donation-amt > div').text();
        var name = $box.find('table > tbody > tr:nth-child(1) > td.comment > div').text();
        var comment = $box.find('table > tbody > tr:nth-child(1) > td.comment > p > em').text();
        var date = $box.find('table > tbody > tr:nth-child(2) > td.donationTime').text();
        var imageSource = $box.find('table > tbody img').attr('src');


        //placeholder for image until they add it on original
        var imgSrc = this.getImageSource(imageSource);
        var imageStyle = imgSrc.includes('/upload/') ? '' : 'width: 56%;';

        var html = '';
        html += '<div class="fp-donation-box' + (isTop ? ' fp-donation-box--top' : '') + '">';
        html += '<div class="fp-donation-box-left">';
        if (isTop) {
            html += '<span class="fp-donation-box--top-badge">Top donation</span>'
        }
        html += '<div class="fp-donation-box-circle">';
        html += '<span class="fp-donation-box-donated">donated</span>';
        html += '<span>' + price + '</span>';
        html += '<div class="fp-donation-box-profile">';
        html += '<div class="fp-donation-box-profile-image"><img style="' + imageStyle + '" src="' + imgSrc + '" alt=""></div>';
        html += '</div>';
        html += '</div>';
        html += '</div>';

        html += '<div class="fp-donation-box-right">';
        html += '<span class="fp-donation-name">' + name + '</span>';
        html += '<p class="fp-donation-comment">' + comment + '</p>';
        html += '<span class="fp-donation-date">' + date + '</span>';
        html += '</div>';

        html += '</div>';

        if (isTop) {
            //put element in top and delete original
            $('#SortByAmount').prevAll('div:not(.fp-donation-box, .rdb-donation, .bus-donation)').after(html);
            $box.remove();
        } else {
            //replace element
            $box.replaceWith(html);
        }
    },
    getImageSource: function(originalSource) {
        var imgSrc = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAXCAYAAADk3wSdAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAKASURBVHgBlVXdcdpAEN49Cc/kDXcgV2D8lvHPIHWAK7BcAbgCQwXYFYArCFQgeYw9eaSD0EF4i4Ok23yLRAYYCeEdNOhWe9/tz7d7TBWSRjehYbkTIl/XTBRbsS9u8DGmGuEypY2vI4C1rNCzkJ0wmaaQtBymLhPPjT+7/RKovN4M4VFnJVnwLfi52PkWffcsO5FhM+H228NRoPkm91cm9uIk+JiXbUiia98wRUbcUw7iZZmN2V5k1GjhlHkVoEojmMU4fpHQqlNl4+54irxZoiXVCPK6wONVfTdfMd463NOCHQXqkDPBFk/zVrUBVEPY7CWUHAeqiVcagZ+jPyjavrEWktmCHTTYZ8YOTpkSnj6hwl18HovQFKomGzonkVBEpm7wHtIBccuUIPwYhG8jdyEzhYVSf3FCWZ9qZI+nflM4HWFzRwHg5asWL8dEcZjarG0r8uAE709U52lO/ATtyQuABTkfS6KAXYK2pTpPN+1nhacA65UZFgOmqzNBGyQVe7/2is2w0C3Q3s86cNagWXw1QpjNqkGhgAxGaNWxjPF0UMg7uLNUR7CeKL9hM0RqBm7ByfCvpGdV4egIzACIKPqFKsYkO4eH3nZkq+iq6bDpGt2g1DnEu7IOYknvjTQudnRrG/FQKG5JHlalKAMs5oKG+V9X4sQ6BSRz7SgMkWxxCBR5e9FmKOuyHVC2j6JDXBeNE/p9yNgN3sbrkQiGlLev39Ri6/tKkoGCLtOVOaMaYXFvNQ0KnEaX4Ua/ii5baJgIr/7mtmBUrOcwD2swl44/O9UXsKWPVDxqcfEPSklPh5BLbn9zE/DG/U/6PNgl2+worp0foNRScqrF27b/AKqhRPmeOIG8AAAAAElFTkSuQmCC";
        //return placeholder if original image doesn't exist
        if (!originalSource)
            return imgSrc;

        //check image extension, because sometimes they have faulty image
        var regex = /(\.png|\.jpeg|\.jpg)$/g;
        if (regex.test(originalSource))
            return originalSource;

        return imgSrc;
    },
    attachEvents: function() {
        $('#donation-cta').on('click', function() {
            window._fpEvent.push(["eventConversion", {
                value: "Donate_Now_Click"
            }]);
        })
        $('.fp-donation-box-circle--mini, .fp__go-to-supporters').on('click', function() {
            window._fpEvent.push(["eventConversion", {
                value: "Supporters_Click"
            }]);
        })
    }

}.init();