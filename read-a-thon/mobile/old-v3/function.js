var FP_LP_DONATIONS_TRUST = {
    init: function () {
    	var _this = this;
        if (window.location.pathname.indexOf('/reader/select_amount') === -1) {
            var headerHolder = jQuery('body > div:nth-child(2) > div > div > div:nth-child(2)');
            this.hideElements();
            this.updateElementsStyles();
            headerHolder.append(this.buildHeaderSection());
            // this.attachEvents();
            var headerHolder = jQuery('body > div:nth-child(2) > div > div > div:nth-child(2)');
			var checkEle = setInterval(function () {
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
    	buildHeadline: function () {
		
		
	
		var oldHeadline = $('body > div:nth-child(2) > div > div > div:nth-child(2) > div:nth-child(1)').html();
		var oldCTA = $('body > div:nth-child(2) > div > div > div a').attr('href');
		
		var studentName = oldHeadline.substring(
			oldHeadline.lastIndexOf("encourage ") + 10,
			oldHeadline.lastIndexOf(" to")
		);
		
		var html = '<p class="fp__headline">A small donation can change <br>my world - ' + studentName + '</p>';
		return html;
	},

    	buildBenefits: function () {
		
		// change the text and its color
		$('div.orange').css('color', '#EFB047')
		$('div.orange').css('font-size', '18px')
		var sentence = $('div.orange').text().split(" ");
		sentence[3] = "I";
		sentence[4] = "need";
		sentence = sentence.join(" ");
		$('div.orange').text(sentence)
		
		// change the p color
		$('div.orange').next('div').css('color','#999999')
		$('div.orange').next('div').css('line-height',1.75)
		$('div.orange').next('div').css('text-align','left')
		
		// change the blue paragraoh font-size
		$('body > div:nth-child(2) > div > div > div:nth-child(3) > div > div:nth-child(2)').css({
            'color': '#4094F6',
            'fontSize': '12px',
            'lineHeight': '15px',
            'padding': '5px 20px'
        });
		
		
	},

    buildHeaderSection: function () {
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
        html += '<span class="fp-header-text--small fp-header-clock-icon">' + minutes + ' min read by ' + reader + ' so far</span>';

        html += '<div class="fp-header-row justify-content-between">';
        html += '<div style="text-align: left"><span class="fp-header-text--large">' + priceFormat.format(donationsAmount) + '</span><span class="fp-header-text--small">Raised so far of ' + priceFormat.format(donationsGoal) + '</span></div>';
        html += '<div style="text-align: right" id="supporters"><span class="fp-header-text--large fp-header-donor-icon">' + donationsCount + '</span><span class="fp-header-text--small fp-header-text--underlined">Supporters</span></div>';
        html += '</div>';

        html += '<div class="fp-progress-container">';
        html += '<div class="fp-progress fp-progress--green" style="width: ' + goalPercentage + '%"></div>';
        html += '</div>';

        html += '</div>';

        return html;
    },
    hideElements: function () {
        jQuery('body > div:nth-child(2) > div > div > div:nth-child(2) > div:nth-child(2)').hide();
    },
    updateElementsStyles: function () {
        var _this = this;
        //update cta styles
        jQuery('body > div:nth-child(2) > div > div > div:nth-child(3) > div > div:nth-child(1)').css({
            'width': '100%',
            'padding': '0 20px',
            'boxSizing': 'border-box'
        });
        jQuery('body > div:nth-child(2) > div > div > div:nth-child(3) > div > div:nth-child(1) > a').css({
            'background': '#DC332E',
            'borderRadius': '4px',
            'textShadow': 'none',
            'width': '100%',
            'height': '50px',
            'fontSize': '17px',
            'boxShadow': 'none',
            'padding': '13px',
            'boxSizing': 'border-box',
            'display': 'flex',
            'alignItems': 'center',
            'justifyContent': 'center'
        });

        //update text under cta styles
        jQuery('body > div:nth-child(2) > div > div > div:nth-child(3) > div > div:nth-child(2)').css({
            'color': '#4094F6',
            'fontSize': '12px',
            'lineHeight': '15px',
            'padding': '5px 20px'
        });

        //update donations titles
        jQuery('.rdb-donation').parent().find('>:not(.rdb-donation, #SortByAmount)').each(function () {
            jQuery(this).css({
                'padding': '17px 0',
                'fontSize': '20px',
                'color': '#000000',
                'borderBottom': '1px solid #E2E2E2',
                'marginTop': '25px'
            })
        });


        var topDonation = jQuery('#SortByAmount .rdb-donation:eq(0)');
        var topDonationName = topDonation.find('table > tbody > tr:nth-child(1) > td.comment > div').text();

        //update donation for reader boxes
        jQuery('#SortByAmount').prevAll('.rdb-donation').each(function () {
            var box = jQuery(this);
            var name = box.find('table > tbody > tr:nth-child(1) > td.comment > div').text();
            var isTop = name === topDonationName;
            _this.updateDonationBox(box, isTop);

        });

        //update donation for school donations
        jQuery('#SortByAmount').nextAll('.rdb-donation').each(function () {
            var box = jQuery(this);
            _this.updateDonationBox(box, false);
        })

    },
    updateDonationBox: function ($box, isTop) {
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
    getDonationsCount: function () {
        return jQuery('#ReaderSupporters').text();
    },
    getTotalDonationsAmount: function () {
        var holder = jQuery('body > div:nth-child(2) > div > div > div:nth-child(2) > div:nth-child(2) > div:nth-child(2) > span').text().split('$')[1];
        return parseFloat(holder);
    },
    getDonationGoal: function () {
        var clonedNode = jQuery('body > div:nth-child(2) > div > div > div:nth-child(2) > div:nth-child(2) > div:nth-child(2)').clone();
        clonedNode.find('span').remove();

        var remainingText = clonedNode.text();
        var regex = /\$[0-9]*\.?[0-9]*/;
        var total = remainingText.match(regex)[0];

        total = total.split('$')[1];

        return parseFloat(total);
    },
    getGoalPercentage: function (current, goal) {
        return (current / goal) * 100;
    },
    getReadMinutes: function () {
        return jQuery('#ReaderMinutes').text();
    },
    getReaderName: function () {
        var title = jQuery('body > div:nth-child(2) > div > div > div:nth-child(2) > div:nth-child(1)').text();

        return title.split(' ')[2];
    },
    attachEvents: function () {
        var bodySelector = jQuery('body');

        bodySelector.on('click', '#supporters', function () {
            var scrollToElement = jQuery('body > div:nth-child(2) > div > div > div:nth-child(5) > div:nth-child(1)');
            jQuery('html, body').animate({
                scrollTop: scrollToElement.offset().top
            }, 500);
            window._fpEvent.push(["eventConversion", {
                value: "supporters_click"
            }]);
        });

        bodySelector.on('click', 'div:nth-child(2) > div > div > div:nth-child(3) > div > div:nth-child(1) > a', function (e) {
            window._fpEvent.push(["eventConversion", {
                value: "cta_click"
            }]);
        })
        
        
    },
    addAmountGoal: function () {
        jQuery('#Don-Btn > a').on('click', function (e) {
            window._fpEvent.push(["eventConversion", {
                value: "select_amount_click"
            }]);
        })
    }
}.init();