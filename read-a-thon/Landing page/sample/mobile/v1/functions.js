var FP_LP_DONATIONS_TRUST = {
    init: function() {
        this.makeNewDivs();
        this.howSectionContent();
        this.initRangeColors();
        this.addCalculatorFunctionality();
        this.addWhySectionContent();
        this.attachEvents();
    },
    makeNewDivs: function() {
        $('body > div > div > div:nth-child(3) > table:first-child').parent().html('<div class="fp__how"></div><div class="fp__why"></div>')
        $('body > div > div > div:nth-child(3) > table:first-child').hide();
    },
    howSectionContent: function() {
        var html = '';
        html += '<h1 class="fp__how__title">How Much Could You Raise?</h1>'
        html += '<div class="calculator-container"> <div class="calculator-inputs"> <div class="calculator-input-block"> <span class="calculator-input-title">The Number of Students</span> <input class="calculator-input" type="range" min="1" step="1" max="200" value="100" id="students"> <span class="calculator-input-value" style="left: 50%;">100</span> </div><div class="calculator-input-block"> <span class="calculator-input-title">Percent Participation</span> <input class="calculator-input" type="range" min="50" step="1" max="100" value="75" id="percent"> <span class="calculator-input-value" style="left: 50%;">75</span> </div><div class="calculator-input-block"> <span class="calculator-input-title">Donors Per Student</span> <input class="calculator-input" type="range" min="1" step="1" max="25" value="5" id="donors"> <span class="calculator-input-value" style="left: 20%;">5</span> </div><p class="calculator-paragraph"> Calculations are based on the current average donation of only <span class="blue">$38</span> per donor, if <span class="blue">75% </span>of your students just got <span class="blue">5</span> sponsors each. </p></div><div class="calculator-result"> <div class="calculator-result-title"> <h3 id="annualCost">$100</h3> <span>AVERAGE <br>TOTAL DONATION</span> </div><div class="calculator-result-button"> <a href="/info/signup" class="purple-btn">Signup for FREE!</a> </div><div class="calculator-result-bullets"> <ul> <li>No Upfront Cost</li><li>No Copy</li><li>No Obligation</li></ul> </div></div></div>'
        $('.fp__how').html(html)
    },
    initRangeColors: function() {
        var inputs = document.querySelectorAll('input[type=range]');
        for (var i = 0; i < inputs.length; i++) {
            handleRangeColorChange(inputs[i]);
        }

        function handleRangeColorChange(el) {
            var leftRangeColor = '#FEC8C0';
            var rightRangeColor = '#C4C4C4';
            var offset = el.min / 2;
            el.style.background = 'linear-gradient(to right, ' + leftRangeColor + ' 0%, ' + leftRangeColor + ' ' + (el.value - offset) + '%, ' + rightRangeColor + ' ' + (el.value - offset) + '%, ' + rightRangeColor + ' 100%)';
        }
    },
    addCalculatorFunctionality: function() {
        function getValuePosition(el) {
            var id = $(el).attr('id')


            var diff = $(el).attr('max') - $(el).attr('min'),
                realVal = $(el).val() - $(el).attr('min');
            // console.log(diff, realVal)
            return (realVal / diff) * 100;
        }

        function updateCalculatorUI(student, percent, donor) {
            var competitorCost = 34.10 * donor * student * (percent / 100);
            var competitorCostEl = document.querySelector('#annualCost');

            var priceFormat = Intl.NumberFormat('en-US', {
                style: 'currency',
                maximumFractionDigits: 2,
                minimumFractionDigits: 0,
                currency: 'USD',
                currencyDisplay: 'symbol'
            });

            competitorCostEl.innerHTML = priceFormat.format(competitorCost);

        }


        function handleCalculatorRangeChange() {
            var leftPosition = getValuePosition(this);
            var valueHolder = this.nextElementSibling;
            var prevValue = valueHolder.innerText;
            var newValue = this.value; //value of changed range

            if (isNaN(prevValue)) {
                newValue = '$' + newValue;
            }
            valueHolder.innerText = newValue;
            valueHolder.style.left = leftPosition + '%';
            handleRangeColorChange(this);

            var otherValue = null;

            var student, percent, donor;
            student = document.querySelector('#students').value;
            donor = document.querySelector('#donors').value;
            percent = document.querySelector('#percent').value;

            if (this.id === 'percent') {
                otherValue = document.querySelector('#students').value;
            } else {
                otherValue = document.querySelector('#percent').value;
            }
            // console.log('all', student, percent, donor)
            // console.log('OTHER', otherValue)
            updateCalculatorUI(parseInt(student), parseInt(percent), parseInt(donor));
        }

        function handleRangeColorChange(el) {
            var leftRangeColor = '#4094F6';
            var rightRangeColor = '#DFDFDF';
            var offset = el.min / 4;
            el.style.background = 'linear-gradient(to right, ' + leftRangeColor + ' 0%, ' + leftRangeColor + ' ' + (getValuePosition(el)) + '%, ' + rightRangeColor + ' ' + (getValuePosition(el)) + '%, ' + rightRangeColor + ' 100%)';
        }

        function initRangeColors() {
            var inputs = document.querySelectorAll('input[type=range]');
            for (var i = 0; i < inputs.length; i++) {
                handleRangeColorChange(inputs[i]);
            }
        }



        document.querySelector('#students').addEventListener('input', handleCalculatorRangeChange);
        document.querySelector('#percent').addEventListener('input', handleCalculatorRangeChange);
        document.querySelector('#donors').addEventListener('input', handleCalculatorRangeChange);

        initRangeColors();
        updateCalculatorUI(20, 30, 12);
    },
    addWhySectionContent: function() {
        var html = '<h2 class="fp__why__title"> Why use Read-A-Thon? </h2>'
        html += '<p class="fp__why__paragraph"> Our award winning Read-A-Thon platform makes it easy for you to raise more money while boosting the education of your students. Whether your campus is in person, virtual or hybrid Read-A-Thon is safe, secure and simple to run.</p>'
        html += '<a href="https://www.read-a-thon.com/info/landing_page" class="fp__why__btn"> Learn More</a>';
        $('.fp__why').html(html);
    },
    attachEvents: function() {
        $('.calculator-result-button a').on('click', function() {
            window._fpEvent.push(["eventConversion", {
                value: "signup_click"
            }]);
        })
        $('.fp__why__btn').on('click', function() {
            window._fpEvent.push(["eventConversion", {
                value: "learn_more_click"
            }]);
        })
    }

}.init();