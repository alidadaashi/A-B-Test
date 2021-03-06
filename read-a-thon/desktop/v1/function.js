var FP_LP_DONATIONS_TRUST = {
    init: function() {
        this.hideExtras();
        this.fixTitle();
        this.heroImage();
        this.addOverlaay();
        this.friendsProgress();
        this.editHeadLine();
        this.addDonationCTA();
        this.linearProgress();
        this.addSupporters();
        this.attachEvents();
    },
    // Hide what we don't Need and add the required playground

    hideExtras: function() {
        $('body > div:nth-child(3) > div:nth-child(2) > div').hide();
        $('body > div:nth-child(3) > div:nth-child(2) > div:nth-child(1)').show()
    },
    // only change the text of title 
    fixTitle: function() {
        var title = $('body > div:nth-child(3) > div:nth-child(2) > div:nth-child(1) p')
        var newTitle = 'Thanks for helping our child, ' + title.text().substring(41).split(" ")[0]
        title.text(newTitle);
    },
    // Create Gradient and margin-bottom
    heroImage: function() {
        $('body > div:nth-child(3) > div:nth-child(2) > div:nth-child(1)').after('<div class="fp__playground"> </div>')
        var heroUrl = $('.wrapper .main >  div:nth-child(1)').css('background-image')
        $('.fp__playground').css('background-image', heroUrl)
    },
    // Add white overlay on image
    addOverlaay: function() {
        var html = ''
        html += '<div class="fp__overlay"><div class="fp__overlay__content"> </div></div>'
        $('.fp__playground').html(html)
    },
    // Circle progress bar of supported friends
    friendsProgress: function() {
        var title = $('body > div:nth-child(3) > div:nth-child(2) > div:nth-child(1) p').text().substring(30)
        var html = '';
        var totalSupporters = $('#SortByAmount').children().length;
        var remainedSupporters = Math.ceil((this.getDonationGoal() - this.getTotalDonationsAmount()) / 20)
        html += '<div class="fp__supporters__container">'
        html += '<a href="#fp__supporters" class="fp-donation-box-circle--mini"><canvas id="canvas" width="120" height="120"></canvas><span>' + totalSupporters + '</span></a>'
        html += '<div class="fp__supporters__description">'
        html += '<div class="fp__supporters__title"> friends supported ' + title + '</div>'
        html += '<div class="fp__supporters__slogan"> <svg width="17" height="19" fill="none"><path d="M7.087 0a4.38 4.38 0 013.059 1.26 4.293 4.293 0 011.26 3.059 4.293 4.293 0 01-1.26 3.058c-.352.351-.765.64-1.24.868a7.123 7.123 0 011.59.64c.228.124.31.413.187.64a.474.474 0 01-.64.187 5.832 5.832 0 00-1.447-.558 6.322 6.322 0 00-1.53-.186 6.123 6.123 0 00-4.36 1.818C1.592 11.902.89 13.431.89 15.126v.847c0 .165.062.31.165.413a.643.643 0 00.454.165h5.93c.27 0 .476.207.476.475a.468.468 0 01-.475.476h-5.89c-.433 0-.826-.166-1.094-.455A1.479 1.479 0 010 15.952v-.847c0-1.943.806-3.74 2.087-5.021a7.145 7.145 0 013.182-1.84 4.233 4.233 0 01-1.219-.867 4.293 4.293 0 01-1.26-3.058c0-1.199.475-2.273 1.26-3.059A4.244 4.244 0 017.087 0zm4.774 11.406c.165-.248.35-.455.558-.62.413-.33.909-.496 1.55-.496.702 0 1.342.29 1.818.765.475.475.764 1.116.764 1.818 0 1.178-.351 2.067-1.116 2.893-.723.764-1.797 1.467-3.326 2.335a.475.475 0 01-.496-.02c-1.364-.827-2.439-1.51-3.182-2.294-.806-.827-1.24-1.715-1.24-2.914 0-.702.29-1.343.764-1.818a2.563 2.563 0 011.819-.765c.64 0 1.116.166 1.55.496.185.165.371.372.537.62zm1.157.124c-.269.207-.496.558-.723 1.033a.403.403 0 01-.207.207c-.227.124-.517.02-.64-.207-.228-.454-.455-.806-.724-1.033-.248-.186-.537-.29-.95-.29a1.64 1.64 0 00-1.157.476 1.64 1.64 0 00-.476 1.157c0 .91.33 1.612.971 2.252.641.662 1.591 1.282 2.77 2.005 1.322-.744 2.252-1.364 2.872-2.005.599-.64.867-1.322.867-2.252 0-.454-.186-.847-.475-1.157a1.64 1.64 0 00-1.157-.475c-.434 0-.744.082-.971.289zM9.484 1.922C8.885 1.322 8.038.93 7.108.93a3.29 3.29 0 00-2.376.992c-.6.599-.992 1.446-.992 2.376 0 .93.372 1.777.992 2.376.6.6 1.446.992 2.376.992a3.29 3.29 0 002.376-.992c.6-.599.992-1.446.992-2.376a3.545 3.545 0 00-.992-2.376z" fill="#E9960A"/></svg> We Are looking for the next ' + remainedSupporters + '</div>'
        html += '</div>'
        html += '</div>'
        $('.fp__overlay__content').html(html);
        this.drawProgressbar();
        var _this = this
        $('.fp-donation-box-circle--mini').on('click', function() {
            $('.fp__overlay__supporters').fadeIn();
            $('.fp__overlay__content .fp__supporters__container').css('visibility', 'hidden')
            _this.drawProgressbar();
        })
        $('.fp__supporters__description').on('click', function() {
            $('.fp__overlay__supporters').fadeIn();
            $('.fp__overlay__content .fp__supporters__container').css('visibility', 'hidden')
            _this.drawProgressbar();
        })
    },
    // Horizontal progressbar with book icon
    drawProgressbar: function() {
        var _this = this

        function draw() {
            var can = document.getElementById("canvas"),
                // spanProcent = document.getElementById("procent"),
                c = can.getContext("2d");

            var posX = 56,
                posY = 56,
                fps = 1000 / 200,
                procent = 0,
                oneProcent = 360 / 100,
                result = oneProcent * ((_this.getTotalDonationsAmount() / _this.getDonationGoal()) * 100);

            c.lineCap = "round";
            arcMove();

            function arcMove() {
                var deegres = 0;
                var acrInterval = setInterval(function() {
                    deegres += 1;
                    c.clearRect(0, 0, can.width, can.height);
                    procent = deegres / oneProcent;

                    // spanProcent.innerHTML = procent.toFixed();

                    c.beginPath();
                    c.arc(
                        posX,
                        posY,
                        56,
                        (Math.PI / 180) * 270,
                        (Math.PI / 180) * (270 + 360)
                    );
                    c.fillStyle = "#636363";
                    c.lineWidth = "3";
                    // c.stroke();
                    c.fill();

                    c.beginPath();
                    c.strokeStyle = "#e9960a";
                    c.lineWidth = "3";
                    c.arc(
                        posX,
                        posY,
                        62,
                        (Math.PI / 180) * 270,
                        (Math.PI / 180) * (270 + deegres)
                    );
                    c.stroke();
                    if (deegres >= result) clearInterval(acrInterval);
                }, fps);
            }
        }
        draw();

    },
    // Horizontal progressbar with book icon
    // Hide the unneccessaary sections of hideHeadline
    editHeadLine: function() {
        var title = $('body > div:nth-child(3) > div:nth-child(2) > div:nth-child(1) p').text()

        var fullName = title.substring(30).split(" ")

        $('div:contains("to reach goal"):not(:has(div))').parent().hide()
        $('div:contains("Please encourage")[align="left"]').hide()
        $('div:contains("Reading campaign ends soon!")').last().hide()
        $('div div > span:contains("Expires ")').hide()

        var html = '<div class="fp__header">'
        html += '<h1> Donate to ' + fullName + '! </h1>'
        html += '<h2> With your help, ' + fullName + ' will<br>reach the goal</h2>'
        html += '</div>'

        $('.fp__supporters__container').after(html)
    },
    // Get donation CTA from page and insert to overlay
    addDonationCTA: function() {

        $('.fp__header').after('<div class="fp__donation fp__side"></div>')
        var checkEle = setInterval(function() {
            var checkExist = $('.sidebar .fp__donation').length > 0;
            if (checkExist) {

                var html = $('.sidebar .fp__donation').html()
                $('.fp__donation.fp__side').html(html)
                clearInterval(checkEle);
            }
        }, 500);




    },
    linearProgress: function() {
        var percentage = ((this.getTotalDonationsAmount() / this.getDonationGoal()) * 100).toFixed();
        var temp = 0;
        if (percentage < 20 || percentage > 40) {
            temp = 42
        } else {
            temp = percentage
        }
        var html = '<div class="fp__linearProgress">'
        html += '<div class="fp__remained" style="right: 22px"> $' + (this.getDonationGoal() - this.getTotalDonationsAmount()).toFixed() + '<span> STILL NEEDED </span> </div>'
        html += '<div class="fp-progress-container"><div class="fp-progress fp-progress--green" style="width:' + percentage + '%"></div></div>'

        html += '<div class="fp__emojies">'
        html += '<div class="happy"> <svg width="21" height="21" fill="none"><path d="M10.5 0C4.708 0 0 4.708 0 10.5 0 16.2919 4.708 21 10.5 21 16.2919 21 21 16.2919 21 10.5 21 4.708 16.2919 0 10.5 0zm0 1.274c5.1024 0 9.226 4.1236 9.226 9.226 0 5.1024-4.1236 9.226-9.226 9.226-5.1024 0-9.226-4.1236-9.226-9.226 0-5.1024 4.1236-9.226 9.226-9.226z" fill="#000"/><path d="M6.9342 13.3233c-.3264 0-.6344.3281-.6344.7234 0 .3952.2936.7233.6344.7233h7.1312c.3408 0 .6344-.3281.6344-.7233 0-.3953-.3079-.7234-.6344-.7234H6.9342zM7.1054 6.4167c-.6052 0-1.1083.503-1.1083 1.1083 0 .6052.5031 1.1083 1.1083 1.1083.6052 0 1.1083-.5031 1.1083-1.1083 0-.6052-.5031-1.1083-1.1083-1.1083zM13.8954 6.4167c-.6051 0-1.1083.503-1.1083 1.1083 0 .6052.5032 1.1083 1.1083 1.1083.6052 0 1.1084-.5031 1.1084-1.1083 0-.6052-.5032-1.1083-1.1084-1.1083z" fill="#000"/></svg></div>'
        html += '<div class="book" style="left: calc(' + temp + '% - 66px);"> <svg width="23" height="17" fill="none"><path d="M21.6231 1.4624h-1.0964V.5542c0-.0026-.0009-.0046-.0009-.0072 0-.0148-.0026-.0293-.0044-.0438-.0017-.0117-.0022-.0234-.0046-.0348-.0031-.0132-.0077-.0256-.0121-.0383-.004-.0122-.0073-.024-.0123-.0355-.0051-.0115-.0117-.022-.0177-.0326-.0061-.0114-.0123-.0231-.0196-.0337-.0072-.0106-.0158-.0198-.0244-.0297-.0077-.0095-.0154-.0194-.0242-.028-.0095-.0092-.0203-.017-.0309-.0253-.0094-.0075-.0184-.0156-.0288-.0225-.0103-.0068-.022-.0123-.033-.018-.0119-.0062-.0231-.013-.0357-.018-.0108-.0045-.0225-.0071-.0335-.0104-.0141-.0044-.0279-.0088-.0425-.0117-.0026-.0004-.0046-.0015-.0068-.002A12.0808 12.0808 0 0018.2186 0c-2.6369 0-5.1217.838-7.2085 2.4226C8.923.8381 6.4385 0 3.8016 0c-.663 0-1.328.0548-1.9766.1627-.0024.0005-.0046.0016-.007.002-.0146.0029-.0284.0073-.0425.0117-.0112.0033-.023.006-.0337.0103-.0123.005-.0238.012-.0357.018-.0112.0058-.0229.0113-.0332.0181-.0104.0066-.0194.0148-.0291.0227-.0101.0082-.021.0159-.0304.025-.009.0087-.0165.0186-.0244.0283-.0084.0097-.0172.019-.0242.0295-.0075.0106-.0133.0223-.0194.0333-.0062.011-.013.0216-.018.033-.005.0112-.0082.0231-.0122.035-.0044.013-.009.0253-.0121.0388-.0024.0112-.003.0229-.0046.0341-.002.0148-.0044.0295-.0047.0447 0 .0024-.0006.0046-.0006.007v.9082H.3968A.397.397 0 000 1.8594v14.3421a.397.397 0 00.3968.397h21.2263a.397.397 0 00.397-.397V1.8594a.397.397 0 00-.397-.397zM18.2186.7936c.5071 0 1.0144.0361 1.5145.104v12.4748a12.0728 12.0728 0 00-1.5145-.0958c-2.4705 0-4.8073.7359-6.8089 2.1315V3.1161C13.3741 1.597 15.7232.7936 18.2186.7936zm-7.6025 2.3269V15.412c-2.0027-1.3985-4.3415-2.1355-6.8145-2.1355-.5065 0-1.0139.0321-1.5146.0958V.8975A11.286 11.286 0 013.8016.7936c2.4977 0 4.849.805 6.8145 2.3269zM.7936 2.2562h.6996v11.5746c0 .011.0024.0214.0033.0322.0009.0112.0002.0222.002.033.0004.0027.0015.0046.002.0071.0026.0145.0072.0281.0114.042.0035.0117.0062.0231.0106.0339.005.0126.0116.0238.018.0357.0057.0112.011.0227.018.033.0071.0108.0155.0201.0234.0302.0082.0099.0154.0203.0242.0293.0095.0097.02.0176.0304.0264.009.0073.0174.0154.0273.0225.0117.0081.0243.0143.0368.0213.01.0053.0192.0115.0295.0159.0126.0055.0258.0092.039.0134.0117.004.0229.0082.035.011.0121.0029.0249.0038.0374.0051.0137.0018.0273.004.0414.0042.0025.0002.0049.0009.0075.0009.0117 0 .0225-.0027.034-.0036.0105-.0008.0209-.0002.0314-.0019a11.2441 11.2441 0 011.8462-.152c2.1507 0 4.1926.5976 5.9732 1.7343H.7936V2.2562zm20.4329 13.5485h-8.9813c1.7809-1.1367 3.8227-1.7343 5.9734-1.7343.6194 0 1.2406.0509 1.8461.152.0106.0017.0214.0011.0317.0019.0113.0009.0221.0036.0335.0036.0026 0 .0048-.0007.0073-.0009.0145-.0002.0288-.0024.0431-.0044.0119-.0016.024-.0022.0355-.0049.0132-.0028.0255-.0075.0383-.0119.0121-.0039.024-.007.0355-.0121.0118-.005.0224-.0121.0332-.0183.0112-.0061.0229-.0118.033-.0189.0108-.0077.0205-.0167.0306-.0253.0091-.0077.0188-.0148.0271-.0236.0095-.0097.0174-.0207.026-.0315.0073-.0092.0152-.018.0218-.0279.0068-.0106.0126-.0225.0185-.0337.006-.0117.0126-.0229.0176-.0353.0044-.0105.0068-.022.0104-.033.0044-.0141.009-.0284.0116-.0431.0005-.0025.0016-.0047.0018-.0069.0018-.0108.0013-.0213.0022-.0319.0009-.0112.0035-.022.0035-.0332V2.2561h.6996v13.5486z" fill="#5BA208"/></svg> <span> Increase my love of reading</span> </div>'
        html += '<div class="sad"> <svg width="21" height="21" fill="none"><path d="M10.5 0C4.708 0 0 4.708 0 10.5 0 16.2919 4.708 21 10.5 21 16.2919 21 21 16.2919 21 10.5 21 4.708 16.2919 0 10.5 0zm0 1.2833c5.1024 0 9.2167 4.1143 9.2167 9.2167 0 5.1024-4.1142 9.2167-9.2167 9.2167-5.1024 0-9.2167-4.1143-9.2167-9.2167 0-5.1024 4.1143-9.2167 9.2167-9.2167z" fill="#5BA208"/><path d="M15.5243 13.8542c.3574-.5448-.0294-1.0622-.5177-1.0428-.223.0089-.4174.1589-.5396.3428-.8916 1.3403-2.4309 2.0125-3.9667 2.0125s-3.0751-.6722-3.9667-2.0125c-.1222-.1839-.3165-.3339-.5396-.3428-.4883-.0194-.8751.498-.5177 1.0428 1.1414 1.7393 3.0893 2.5958 5.024 2.5958 1.9347 0 3.8826-.8565 5.024-2.5958zM7.1054 6.4167c-.6052 0-1.1083.503-1.1083 1.1083 0 .6052.5031 1.1083 1.1083 1.1083.6052 0 1.1083-.5031 1.1083-1.1083 0-.6052-.5031-1.1083-1.1083-1.1083zM13.8954 6.4167c-.6051 0-1.1083.503-1.1083 1.1083 0 .6052.5032 1.1083 1.1083 1.1083.6052 0 1.1084-.5031 1.1084-1.1083 0-.6052-.5032-1.1083-1.1084-1.1083z" fill="#5BA208"/></svg></div>'
        html += '</div>'
        html += '</div>';
        $('.fp__donation.fp__side').after(html)
    },

    getTotalDonationsAmount: function() {
        var holder = jQuery('#overlay > div > div:nth-child(1) > table > tbody > tr > td:nth-child(1) > span').text().split('$')[1];
        return parseFloat(holder);
    },
    getDonationGoal: function() {
        var clonedNode = jQuery('body > div:nth-child(3) > div:nth-child(2) > div.wrapper > div.sidebar > div:nth-child(5) > div:nth-child(1)').clone();
        clonedNode.find('span').remove();
        var remainingText = clonedNode.text();
        var regex = /\$[0-9]*\.?[0-9]*/;
        var total = remainingText.match(regex)[0];
        total = total.split('$')[1];
        return parseFloat(total);
    },
    addSupporters: function() {
        var isEnabled = $('strong:contains("This Read-a-thon has closed and is no longer accepting donations")').length
        var heightNumber;
        if (isEnabled) {
            heightNumber = 11
        } else {
            heightNumber = 136
        }
        var maxHeight = $('.fp__overlay__content').height() + heightNumber;
        $('.fp__overlay').prepend('<div class="fp__overlay__supporters" style="max-height:' + maxHeight + 'px"> </div>')
        var html = ''
        html += '<div class="fp__supporters__container">' + $('.fp__supporters__container').html() + '</div>'

        html += '<span class="fp__close">Close</span><h2 style="font-size: 20px; color: rgb(101, 101, 101);">'

        // check if it has a donor or not
        if ($('h2:contains("Encouragers")').nextAll('.fp-donation-box').length) {
            html += '<h2>' + $('h2:contains("Encouragers")').html() + '</h2>'
            $('h2:contains("Encouragers")').nextAll('.fp-donation-box').each(function(i, elem) {
                html += elem.outerHTML
            })
            html += '<div style="padding: 10px">' + $('div.sidebar > div:last-child').html() + '</div>'
        }

        $('.fp__overlay__supporters').html(html)

        $('.fp__close').on('click', function() {
                $('.fp__overlay__supporters').fadeOut();
                $('.fp__overlay__content .fp__supporters__container').css('visibility', 'visible')
            })
            // $('.fp-donation-box.fp-donation-box--top').next('div').css('padding', '10px 5px 10px 20px')
    },
    attachEvents: function() {
        var checkEle = setInterval(function() {
            var checkExist = $('.sidebar .fp__donation').length > 0;
            if (checkExist) {

                $('.fp__donation-CTA').on('click', function() {
                    window._fpEvent.push(["eventConversion", {
                        value: "Donate_Now_Click"
                    }]);
                })
                $('.fp__supporters__container').children().on('click', function() {
                    window._fpEvent.push(["eventConversion", {
                        value: "Supporters_Click"
                    }]);
                })
                clearInterval(checkEle);
            }
        }, 500);
    }
}.init();