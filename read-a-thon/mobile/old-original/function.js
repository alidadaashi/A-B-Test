var FP_BENEFITS = {
	init: function () {
		if (!window._fpEvent) window._fpEvent = [];
		if (window.location.pathname.indexOf('/reader/select_amount') === -1) {
			var ctaButtonDiv = this.findCtaButtonDiv();
			if (ctaButtonDiv) {
				ctaButtonDiv.before(this.buildDonation());
				ctaButtonDiv.before(this.buildBarMessage());
				this.attachEvents();
			}
		} else {
			jQuery('#Don-Btn > a').on('click', function (e) {
				window._fpEvent.push(["eventConversion", {
					value: "select_amount_click"
				}]);
			});
		}

		// styles for Safari
        var isSafari = /constructor/i.test(window.HTMLElement) || (function (p) {
            return p.toString() === "[object SafariRemoteNotification]";
        })(!window['safari'] || (typeof safari !== 'undefined' && window['safari'].pushNotification));
        if (isSafari) {
            // about "$" sign,inside input
            $('.fp__label').css('top', '22px');
            $('.fp__sticky-donation .fp__label').css('top', '14px');
        }
	},
	symbols: function() {
		var existingCurr = $('#Currency').text();
		var currencies = [
			{
				name: 'USD',
				symbol: '$'
			},
			{
				name: 'CAD',
				symbol: '$'
			},
			{
				name: '',
				symbol: ''
			}
		];
		var matchedCurrency = currencies.find(function(currency) {
			return existingCurr === currency.name;
		});
		
		return matchedCurrency.symbol;
	},
	findCtaButtonDiv: function () {
		var container = $('body > div:nth-child(2) > div > div > div');
		var result = null;
		container.children().each(function () {
			var a = $(this).find('a');
			if (a.length > 0 && a.attr('href').indexOf('reader/select_amount') !== -1) {
				result = $(this);
				return false;
			}
			return true;
		});
		return result;
	},
	buildDonation: function () {
		var dateSection = this.buildExpireDate();
		var contentSection = this.buildDonationContent();
		var html = '<div class="fp__donation"><div class="fp__validation-error" id="donation-validation-error"></div>';
		html += '' + dateSection + '';
		html += '<div class="fp__donation-box">';
		html += '' + contentSection + '';
		html += '</div>';
		html += '</div>';

		return html;
	},
	buildDonationContent: function () {
		var currSYM = this.symbols();
		var studentText = $('body > div:nth-child(2) > div > div > div a > strong').html();
		var studentName = studentText.replace('I Want to Help ', '');

		var barText = $('body > div:nth-child(2) > div > div > div:nth-child(2) > div:nth-child(2) > div:nth-child(2)').html();
		var paidAmount = parseFloat($('body > div:nth-child(2) > div > div > div:nth-child(2) > div:nth-child(2) > div:nth-child(2) > span').text().slice(1));
		var totalAmountMatches = $('body > div:nth-child(2) > div > div > div:nth-child(2) > div:nth-child(2) > div:nth-child(2)').text().match(/\$\d+/g);
		var totalAmount = totalAmountMatches.length >= 2 ? parseInt(totalAmountMatches[1].slice(1)) : paidAmount;
		var leftAmountInt = totalAmount - paidAmount;
		var leftAmountFix = leftAmountInt.toFixed(2);
		var leftAmount = parseInt(leftAmountFix);


		// Hide original CTA
		$('body > div:nth-child(2) > div > div > div a > strong').parent().css('display', 'none');

		var html = '<div class="fp__donation-box-default">';
		html += '<div class="fp__donation-box-default-first">';
		html += '<div class="fp__formBox">';
		html += '<span class="fp__label">'+currSYM+'</span>';
		html += '<input type="text" id="donation-amount-input" maxlength="5" name="donation" class="fp__donation-amount-input" value="">';
		html += '</div>';
		html += '<div class="fp__donation-CTA" id="donation-cta">Donate now</div>';
		html += '</div>';
		if (leftAmount === 0) {
			// when left amount is equal to zero
			var totalSub = barText.substring(
				barText.lastIndexOf("</span>")
			);
			var totalAmount = totalSub.replace('</span> raised so far of ', '');
			html += '<p id="fp__new" class="fp__donation-box-default-second"><span>'+currSYM+'' + totalAmount + '</span> - Donate '+currSYM+'' + totalAmount + ' to help ' + studentName + ' reach goal!<a href=""></a></p>';
		} else {
			// when left amount is greater then zero
			html += '<p id="fp__new" class="fp__donation-box-default-second"><span>'+currSYM+'' + leftAmount + '</span> - Donate '+currSYM+'' + leftAmount + ' to help ' + studentName + ' reach goal!<a href=""></a></p>';
		}
		html += '</div>';

		return html;
	},
	buildExpireDate: function () {
		var daysLeft = $('div#DaysLeft').html();
		var daysLeftInt = parseInt(daysLeft);
		var now = Date.now();
		var expireDate = now + daysLeftInt * 24 * 60 * 60 * 1000;
		var exactDate = new Date(expireDate);
		var exactDateMonth = exactDate.getMonth() + 1;
		var exactMonth = exactDateMonth.toString();
		var exactDateDay = exactDate.getDate();
		switch (exactMonth) {
			case "1":
				name = 'Jan';
				break;
			case "2":
				name = 'Feb';
				break;
			case "3":
				name = 'Mar';
				break;
			case "4":
				name = 'Apr';
				break;
			case "5":
				name = 'May';
				break;
			case "6":
				name = 'Jun';
				break;
			case "7":
				name = 'Jul';
				break;
			case "8":
				name = 'Aug';
				break;
			case "9":
				name = 'Sep';
				break;
			case "10":
				name = 'Oct';
				break;
			case "11":
				name = 'Nov';
				break;
			case "12":
				name = 'Dec';
				break;
			default:
		}
		var expireDateHtml = '<span class="fp__date">Expires ' + name + ' ' + exactDateDay + '</span>';
		return expireDateHtml;
	},
	buildBarMessage: function () {
		var currSYM = this.symbols();
		var studentText = $('body > div:nth-child(2) > div > div > div a > strong').html();
		var studentName = studentText.replace('I Want to Help ', '');
		var barText = $('body > div:nth-child(2) > div > div > div:nth-child(2) > div:nth-child(2) > div:nth-child(2)').html();

		var paidAmount = parseFloat($('body > div:nth-child(2) > div > div > div:nth-child(2) > div:nth-child(2) > div:nth-child(2) > span').text().slice(1));
		var totalAmountMatches = $('body > div:nth-child(2) > div > div > div:nth-child(2) > div:nth-child(2) > div:nth-child(2)').text().match(/\$\d+/g);
		var totalAmount = totalAmountMatches.length >= 2 ? parseInt(totalAmountMatches[1].slice(1)) : paidAmount;
		var leftAmountInt = totalAmount - paidAmount;
		var leftAmountFix = leftAmountInt.toFixed(2);
		var leftAmount = parseInt(leftAmountFix);

		if (leftAmount === 0) {
			// when left amount is equal to zero
			var totalSub = barText.substring(
				barText.lastIndexOf("</span>")
			);
			var totalAmount = totalSub.replace('</span> raised so far of ', '');
			var newBarText = '<p class="fp__barText"><span>Only '+currSYM+'' + totalAmount + ' left</span> for ' + studentName + ' to reach goal</p>';
			$('body > div:nth-child(2) > div > div > div:nth-child(2) > div:nth-child(2) > div:nth-child(2)').html(newBarText);

		} else {
			// when left amount is greater then zero
			var newBarText = '<p class="fp__barText"><span>Only '+currSYM+'' + leftAmount + ' left</span> for ' + studentName + ' to reach goal</p>';
			$('body > div:nth-child(2) > div > div > div:nth-child(2) > div:nth-child(2) > div:nth-child(2)').html(newBarText);
		}
	},
	buildAmountButtons: function (leftAmount) {
		var currSYM = this.symbols();
		var amounts = [25, 50, 75, 100];
		if (amounts.indexOf(leftAmount) === -1) {
			amounts.push(leftAmount);
		}

		var buttonHtmls = amounts.map(function (amount) {
			return '<div class="fp__donation-box-amount-button" data-amount="' + amount + '"><span class="fp__donation-box-amount-button-dollar">'+currSYM+'</span>' + amount + '</div>';
		});
		return '<div class="fp__donation-box-amount-button-row">' + buttonHtmls.join('') + '</div>';
	},
	showValidationError: function (errorText) {
		$('.fp__formBox').removeClass('fp__formBox--highlight');
		$('#donation-validation-error').text(errorText);
	},
	hideValidationError: function () {
		$('#donation-validation-error').text('');
	},
	validateDonationAmount: function (onSubmit) {
		var currSYM = this.symbols();
		var textValue = $('#donation-amount-input').val().trim();
		if (onSubmit && textValue.length === 0) {
			FP_BENEFITS.showValidationError('Select amount!');
			$('.fp__donation-amount-input').addClass('fp__donation-amount-input-error');
			return false;
		}
		if (onSubmit && parseInt(textValue) < 10) {
			FP_BENEFITS.showValidationError('You should make a donation of at least '+currSYM+'10!');
			$('.fp__donation-amount-input').addClass('fp__donation-amount-input-error');
			return false;
		}
		FP_BENEFITS.hideValidationError();
		$('.fp__donation-amount-input').removeClass('fp__donation-amount-input-error');
		return true;
	},
	goToCheckout: function (amountToPay) {
		var pathname = window.location.pathname;
		var id = pathname.split('/')[2];
		if ($('#Currency').text() === 'USD') {
			jQuery.ajax({
				url: '/reader/select_amount/' + id + '/A',
				success: function (data) {
					var htmlString = data;
					var invoiceRegex = /Donor-[0-9]+-[a-z0-9]+/;
					var matches = htmlString.match(invoiceRegex);
					var invoiceId = matches[0];
					// create new URL
					var newURL = 'https://readathontx.securepayments.cardpointe.com/pay?&mini=1&total=' + amountToPay + '&invoice=' + invoiceId + '';
					window.location.href = newURL;
				}
			});
		} else {
			// create new URL
			var newURL = 'https://www.read-a-thon.com/reader/paypal_checkout/' + id + '/' + amountToPay + '';
			window.location.href = newURL;
		}
	},
	attachEvents: function () {
		var bodySelector = $('body');

		bodySelector.on('click', '.fp__donation-box-amount-button:last-child', function () {
			window._fpEvent.push(["eventConversion", {
				value: "behero_leftamount_click"
			}]);
		});

		bodySelector.on('click', '#donation-amount-input', function () {
			window._fpEvent.push(["eventConversion", {
				value: "amounts_click"
			}]);
		});
		var leftAmount = Number($('.fp__barText span').html().replace(/\D+/g, ''));

		$('body').on('click', '#fp__new', function () {
			var popAmount = $('.fp__donation-box-default-second > span').html().replace('$', '');
			var popAmountInt = parseInt(popAmount);
			$('#donation-amount-input').val(popAmountInt);
			if (popAmountInt > 0) {
				$('.fp__formBox').addClass('fp__formBox--highlight');
				FP_BENEFITS.goToCheckout(popAmountInt);
				window._fpEvent.push(["eventConversion", {
					value: "popup_message_click"
				}]);
			}
		});
		$('body').on('click', '.fp__formBox', function () {
			$('.fp__donation-box-default-second').replaceWith(FP_BENEFITS.buildAmountButtons(Math.ceil(leftAmount)));
		});
		$('.fp__donation-box-default').on('click', '.fp__donation-box-amount-button', function (e) {
			var $button;
			if ($(e.target).hasClass('fp__donation-box-amount-button')) {
				$button = $(e.target);
			} else {
				$button = $(e.target).parents('.fp__donation-box-amount-button');
			}
			$button.siblings().removeClass('fp__donation-box-amount-button--selected');
			$button.addClass('fp__donation-box-amount-button--selected');
			$('#donation-amount-input').val($button.data('amount'));
			$('.fp__formBox').addClass('fp__formBox--highlight');
			window._fpEvent.push(["eventConversion", {
				value: "amount_box_click"
			}]);
		});
		$('#donation-cta').on('click', function () {
			if (FP_BENEFITS.validateDonationAmount(true)) {
				FP_BENEFITS.goToCheckout(parseFloat($('#donation-amount-input').val().trim()))
				window._fpEvent.push(["eventConversion", {
					value: "donate_now_click"
				}]);
			}
		});
		$('#donation-amount-input').on('change', function () {
			FP_BENEFITS.validateDonationAmount(false);
		});

		$('body').on('keypress', '#donation-amount-input', function (e) {
			var charCode = (e.which) ? e.which : e.keyCode;
			if (charCode > 31 && (charCode < 48 || charCode > 57) && charCode !== 46)
				return false;
			return true;
		});
	}
};

FP_BENEFITS.init();