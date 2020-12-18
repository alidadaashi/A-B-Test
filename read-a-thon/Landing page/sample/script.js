(function() {

    function getValuePosition(el) {
        var id = $(el).attr('id')


        var diff = $(el).attr('max') - $(el).attr('min'),
            realVal = $(el).val() - $(el).attr('min');
        console.log(diff, realVal)
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
        console.log('all', student, percent, donor)
        console.log('OTHER', otherValue)
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

})();