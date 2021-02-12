var FP_LP_DONATIONS_TRUST = {
    init: function() {
        var _this = this;
        if (window.location.pathname.indexOf('/reader/select_amount') === -1) {
            var headerHolder = jQuery('body > div:nth-child(2) > div > div > div:nth-child(2)');
            this.hideElements();
            // this.updateElementsStyles();
            headerHolder.append(this.buildHeaderSection());
            // this.attachEvents();
            var headerHolder = jQuery('body > div:nth-child(2) > div > div > div:nth-child(2)');
            var checkEle = setInterval(function() {
                var checkExist = $('.fp__count').length > 0;
                if (checkExist) {
                    var selector = $('body > div:nth-child(2) > div > div > div:nth-child(2)');
                    selector.after(_this.buildBenefits());
                    selector.before(_this.buildHeadline());

                    // headerHolder.append(_this.buildHeaderSection());

                    _this.attachEvents();
                    clearInterval(checkEle);
                }
            }, 1000);
        } else {
            this.addAmountGoal();
        }
    },
    buildHeadline: function() {
        var oldHeadline = $('body > div:nth-child(2) > div > div > div:nth-child(2) > div:nth-child(1)').html();
        var oldCTA = $('body > div:nth-child(2) > div > div > div a').attr('href');
        var newCTA = '<a href="' + oldCTA + '" class="fp__cta">Donate now</a>';
        $('body').append(newCTA);
        var studentName = oldHeadline.substring(
            oldHeadline.lastIndexOf("encourage ") + 10,
            oldHeadline.lastIndexOf(" to")
        );

        // Add scroll event listener
        $(window).scroll(function() {
            if ($(document).scrollTop() > $('.fp__donation-box-default-first').offset().top) {
                $(".fp__cta").css("bottom", 0)
            } else {
                $(".fp__cta").css("bottom", '-4rem')
            }

        });

        var html = '<p class="fp__headline">A small donation can change <br>my world - ' + studentName + '</p>';
        return html;
    },

    buildBenefits: function() {

        // change the text and its color
        $('div.orange').css('color', '#EFB047')
        $('div.orange').css('font-size', '18px')
        var sentence = $('div.orange').text().split(" ");
        sentence[3] = "I";
        sentence[4] = "need";
        sentence = sentence.join(" ");
        $('div.orange').text(sentence)

        // change the p color
        $('div.orange').next('div').css('color', '#999999')
        $('div.orange').next('div').css('line-height', 1.75)
        $('div.orange').next('div').css('text-align', 'left')

        // change the blue paragraoh font-size
        $('body > div:nth-child(2) > div > div > div:nth-child(3) > div > div:nth-child(2)').css({
            'color': '#4094F6',
            'fontSize': '12px',
            'lineHeight': '15px',
            'padding': '5px 20px'
        });

        var benefitsDetail = [{
                title: 'Poor readers <br> only have',
                bgUrl: 'https://variations-cdn.figpii.com/variations/readathon/Benefits+Icons/9.png',
                subTitle: 'chance to <br> graduate <br> HS'
            },
            {
                title: 'Lack of strong <br> literacy skills ',
                bgUrl: 'https://figpii-test-assets.s3.amazonaws.com/variations/readathon/Benefits+Icons/10.png',
                subTitle: 'actually leads <br> to obesity'
            },
            {
                title: 'Less <br> reading',
                bgUrl: 'https://figpii-test-assets.s3.amazonaws.com/variations/readathon/Benefits+Icons/14.png',
                subTitle: 'reduces <br> success in <br> other subjects'
            },
            {
                title: 'Poor <br> reading',
                bgUrl: 'https://figpii-test-assets.s3.amazonaws.com/variations/readathon/Benefits+Icons/11.png',
                subTitle: 'results in a <br> greater chance <br> of poverty'
            }
        ];
        var html = '<div class="fp__benefits">';
        html += '<p class="fp__benefits-headline">';
        html += sentence
        html += '</p>';
        html += '<div class="fp__benefits-box">';
        for (var i = 0; i < benefitsDetail.length; i++) {
            html += '<div class="fp__benefits-box-content">';
            html += '<span class="fp__benefits-box-content-title">' + benefitsDetail[i].title + '</span>';
            html += '<div style="background: url(' + benefitsDetail[i].bgUrl + ') no-repeat; background-position: center; background-size: 120%;" class="fp__benefits-box-content-icon"></div>';
            html += '<span class="fp__benefits-box-content-title">' + benefitsDetail[i].subTitle + '</span>';
            html += '</div>';
        }
        html += '</div>';
        html += '</div>';

        return html;
    },

    buildHeaderSection: function() {
        var donationsCount = this.getDonationsCount();
        var donationsGoal = this.getDonationGoal();
        var donationsAmount = this.getTotalDonationsAmount();
        var goalPercentage = this.getGoalPercentage(donationsAmount, donationsGoal);
        var minutes = this.getReadMinutes();
        var reader = this.getReaderName();
        var priceFormat = Intl.NumberFormat('en-US', {
            style: 'currency',
            maximumFractionDigits: 2,
            minimumFractionDigits: 0,
            currency: 'USD',
            currencyDisplay: 'symbol'
        });

        var html = '';
        html += '<div class="fp-header-container">';



        html += '<div class="fp-progress-container">';
        html += '<div class="fp-progress fp-progress--green" style="width: ' + goalPercentage + '%"></div>';
        html += '</div>';
        html += '<div class="fp-header-row justify-content-between mt-2">';
        html += '<div style="text-align: left"><span class="fp-header-text--large">' + priceFormat.format(donationsAmount) + '</span><span class="fp-header-text--small">Raised so far of ' + priceFormat.format(donationsGoal) + '</span></div>';
        html += '</div>';

        html += '</div>';

        return html;
    },
    hideElements: function() {
        jQuery('body > div:nth-child(2) > div > div > div:nth-child(2) > div:nth-child(2)').hide();
    },
    updateDonationBox: function($box, isTop) {
        var price = $box.find('table > tbody > tr:nth-child(1) > td.donation-amt > div').text();
        var name = $box.find('table > tbody > tr:nth-child(1) > td.comment > div').text();
        var comment = $box.find('table > tbody > tr:nth-child(1) > td.comment > p > em').text();
        var date = $box.find('table > tbody > tr:nth-child(2) > td.donationTime').text();

        //placeholder for image until they add it on original
        var imgSrc = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAXCAYAAADk3wSdAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAKASURBVHgBlVXdcdpAEN49Cc/kDXcgV2D8lvHPIHWAK7BcAbgCQwXYFYArCFQgeYw9eaSD0EF4i4Ok23yLRAYYCeEdNOhWe9/tz7d7TBWSRjehYbkTIl/XTBRbsS9u8DGmGuEypY2vI4C1rNCzkJ0wmaaQtBymLhPPjT+7/RKovN4M4VFnJVnwLfi52PkWffcsO5FhM+H228NRoPkm91cm9uIk+JiXbUiia98wRUbcUw7iZZmN2V5k1GjhlHkVoEojmMU4fpHQqlNl4+54irxZoiXVCPK6wONVfTdfMd463NOCHQXqkDPBFk/zVrUBVEPY7CWUHAeqiVcagZ+jPyjavrEWktmCHTTYZ8YOTpkSnj6hwl18HovQFKomGzonkVBEpm7wHtIBccuUIPwYhG8jdyEzhYVSf3FCWZ9qZI+nflM4HWFzRwHg5asWL8dEcZjarG0r8uAE709U52lO/ATtyQuABTkfS6KAXYK2pTpPN+1nhacA65UZFgOmqzNBGyQVe7/2is2w0C3Q3s86cNagWXw1QpjNqkGhgAxGaNWxjPF0UMg7uLNUR7CeKL9hM0RqBm7ByfCvpGdV4egIzACIKPqFKsYkO4eH3nZkq+iq6bDpGt2g1DnEu7IOYknvjTQudnRrG/FQKG5JHlalKAMs5oKG+V9X4sQ6BSRz7SgMkWxxCBR5e9FmKOuyHVC2j6JDXBeNE/p9yNgN3sbrkQiGlLev39Ri6/tKkoGCLtOVOaMaYXFvNQ0KnEaX4Ua/ii5baJgIr/7mtmBUrOcwD2swl44/O9UXsKWPVDxqcfEPSklPh5BLbn9zE/DG/U/6PNgl2+worp0foNRScqrF27b/AKqhRPmeOIG8AAAAAElFTkSuQmCC";

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
        html += '<div class="fp-donation-box-profile-image"><img src="' + imgSrc + '" alt=""></div>';
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
            jQuery('#SortByAmount').prevAll('div:not(.fp-donation-box, .rdb-donation)').after(html);
            $box.remove();
        } else {
            //replace element
            $box.replaceWith(html);
        }
    },
    getDonationsCount: function() {
        return jQuery('#ReaderSupporters').text();
    },
    getTotalDonationsAmount: function() {
        var holder = jQuery('body > div:nth-child(2) > div > div > div:nth-child(2) > div:nth-child(2) > div:nth-child(2) > span').text().split('$')[1];
        return parseFloat(holder);
    },
    getDonationGoal: function() {
        var clonedNode = jQuery('body > div:nth-child(2) > div > div > div:nth-child(2) > div:nth-child(2) > div:nth-child(2)').clone();
        clonedNode.find('span').remove();

        var remainingText = clonedNode.text();
        var regex = /\$[0-9]*\.?[0-9]*/;
        var total = remainingText.match(regex)[0];

        total = total.split('$')[1];

        return parseFloat(total);
    },
    getGoalPercentage: function(current, goal) {
        return (current / goal) * 100;
    },
    getReadMinutes: function() {
        return jQuery('#ReaderMinutes').text();
    },
    getReaderName: function() {
        var title = jQuery('body > div:nth-child(2) > div > div > div:nth-child(2) > div:nth-child(1)').text();

        return title.split(' ')[2];
    },
    attachEvents: function() {
        var bodySelector = jQuery('body');

        bodySelector.on('click', '#supporters', function() {
            var scrollToElement = jQuery('body > div:nth-child(2) > div > div > div:nth-child(5) > div:nth-child(1)');
            jQuery('html, body').animate({
                scrollTop: scrollToElement.offset().top
            }, 500);
            window._fpEvent.push(["eventConversion", {
                value: "supporters_click"
            }]);
        });

        bodySelector.on('click', 'div:nth-child(2) > div > div > div:nth-child(3) > div > div:nth-child(1) > a', function(e) {
            window._fpEvent.push(["eventConversion", {
                value: "cta_click"
            }]);
        })

        var bodySelector = $('body');
        bodySelector.on('click', '.fp__cta', function() {
            window._fpEvent.push(["eventConversion", {
                value: "cta_click"
            }]);
        });
    },
    addAmountGoal: function() {
        jQuery('#Don-Btn > a').on('click', function(e) {
            window._fpEvent.push(["eventConversion", {
                value: "select_amount_click"
            }]);
        })
    }
}.init();