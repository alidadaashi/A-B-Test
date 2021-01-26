var FP_LP_DONATIONS_TRUST = {
    init: function() {
        this.attachEvents();
    },
    attachEvents: function() {
        $('body > div > div > div:nth-child(3) > table:first-child a:contains("Learn More")').on('click', function() {
            console.log('sign up')

            window._fpEvent.push(["eventConversion", {
                value: "learn_more_click"
            }]);
        })
        $('body > div > div > div:nth-child(3) > table:first-child a:contains("Continue")').on('click', function() {
            console.log('sign up')

            window._fpEvent.push(["eventConversion", {
                value: "Continue_click"
            }]);
        })
    }

}.init();