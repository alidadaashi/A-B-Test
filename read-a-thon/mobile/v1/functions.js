var FP_BENEFITS = {
	init: function () {
		var _this = this;
		if (window.location.pathname.indexOf('/reader/select_amount') === -1) {
			console.log('SHOD');
			
			var selector = $('body > div:nth-child(2) > div > div > div:nth-child(2)');
			console.log(selector)
			selector.after(_this.buildBenefits());
			selector.before(_this.buildHeadline());
			_this.updateElementsStyles();
			
			_this.attachEvents();
			
			// $('.fp__barText').html(mainText);	

		} else {
			jQuery('#Don-Btn > a').on('click', function (e) {
				window._fpEvent.push(["eventConversion", {
					value: "select_amount_click"
				}]);
			});
		}
	},
	changeText: function(){
		// var headerHolder = jQuery('body > div:nth-child(2) > div > div > div:nth-child(2)');
		console.log(this.init.mainText)
		// $('.fp__barText').html(this.init.mainText);	
	},
	buildHeaderSection: function () {
                
        var donationsGoal = this.getDonationGoal();
        var donationsAmount = this.getTotalDonationsAmount();
        // console.log('donationsGoal: ', donationsGoal)
        // console.log('donationsAmount: ', donationsAmount)

        var priceFormat = Intl.NumberFormat('en-US', {
            style: 'currency',
            maximumFractionDigits: 2,
            minimumFractionDigits: 0,
            currency: 'USD',
            currencyDisplay: 'symbol'
        });

        var html = '';
        html += '<div class="fp-header-container">';
        

        html += '<div class="fp-header-row">';
        html += '<span class="fp-header-text--large">' + 
        priceFormat.format(donationsAmount) 
        + '</span><span class="fp-header-text--small">Raised so far of ' + 
        priceFormat.format(donationsGoal) 
        + '</span>';
        

        html += '</div>';

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
           
        });
        
        var benefitsDetail = [{
				title: 'Poor readers <br> only have',
				bgUrl: 'https://figpii-test-assets.s3.amazonaws.com/variations/readathon/Benefits+Icons/9.png',
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
		html+= sentence
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
	buildHeadline: function () {
		var oldHeadline = $('body > div:nth-child(2) > div > div > div:nth-child(2) > div:nth-child(1)').html();
		var oldCTA = $('body > div:nth-child(2) > div > div > div a').attr('href');
		var newCTA = '<a href="' + oldCTA + '" class="fp__cta">Donate to help me succeed</a>';
		$('body').append(newCTA);
		var studentName = oldHeadline.substring(
			oldHeadline.lastIndexOf("encourage ") + 10,
			oldHeadline.lastIndexOf(" to")
		);
		var html = '<p class="fp__headline">A small donation can change <br>my world - ' + studentName + '</p>';
		return html;
		// Add scroll event listener
		$( window ).scroll(function() {
			if($(document).scrollTop() > $('.fp__donation-box-default-first').offset().top){
				$( ".fp__cta" ).css( "bottom", 0 )
			}else{
				$( ".fp__cta" ).css( "bottom", '-4rem' )
			}
		  
		});

		
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
                // 'padding': '17px 0',
                // 'fontSize': '20px',
                // 'color': '#000000',
                // 'borderBottom': '1px solid #E2E2E2',
                // 'marginTop': '25px'
            })
        });


        var topDonation = jQuery('#SortByAmount .rdb-donation:eq(0)');
        var topDonationName = topDonation.find('table > tbody > tr:nth-child(1) > td.comment > div').text();

        //update donation for reader boxes
        // jQuery('#SortByAmount').prevAll('.rdb-donation').each(function () {
        //     var box = jQuery(this);
        //     var name = box.find('table > tbody > tr:nth-child(1) > td.comment > div').text();
        //     var isTop = name === topDonationName;
        //     _this.updateDonationBox(box, isTop);

        // });

        //update donation for school donations
        // jQuery('#SortByAmount').nextAll('.rdb-donation').each(function () {
        //     var box = jQuery(this);
        //     _this.updateDonationBox(box, false);
        // })
        
        
        
       

    },
    getTotalDonationsAmount: function () {
        var holder = $('body > div:nth-child(2) > div > div > div:nth-child(2) > div:nth-child(2) > div:nth-child(2) > span').text().split('$')[1];
        return parseFloat(holder);
    },
    getDonationGoal: function () {
        var clonedNode = $('body > div:nth-child(2) > div > div > div:nth-child(2) > div:nth-child(2) > div:nth-child(2)').clone();
        clonedNode.find('span').remove();

        var remainingText = clonedNode.text();
        var regex = /\$[0-9]*\.?[0-9]*/;
        var total = remainingText.match(regex)[0];

        total = total.split('$')[1];

        return parseFloat(total);
    },
    
	attachEvents: function () {
		
			
		var bodySelector = $('body');
		bodySelector.on('click', '.fp__cta', function () {
			window._fpEvent.push(["eventConversion", {
				value: "cta_click"
			}]);
		});
	}
}.init();





