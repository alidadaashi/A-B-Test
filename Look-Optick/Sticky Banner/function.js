var benefits = [{
        text: 'One-Year Guarantee',
        icon: 'https://figpii-test-assets.s3.amazonaws.com/variations/look+optic/home+page/Benefits+icon/shield.png'
    },
    {
        text: '90-Day Trial',
        icon: 'https://figpii-test-assets.s3.amazonaws.com/variations/look+optic/home+page/Benefits+icon/trial.png'
    },
    {
        text: 'Free Shipping & Returns',
        icon: 'https://figpii-test-assets.s3.amazonaws.com/variations/look+optic/home+page/Benefits+icon/desktop+shipping.png'
    }
];

var FP_BENEFITS = {
    benefits: [],
    init: function(benefits) {
        var selector = $('#navbar');
        $(this.buildSection()).insertAfter(selector);
        if ($('body#your-shopping-cart').length) {
            $('.fp__benefits').css('top', '0px')
        }

    },
    buildSection: function() {
        var html = '';

        html += '<div class="fp__benefits">';

        for (var i = 0; i < benefits.length; i++) {
            html += '<div class="fp__benefits-box">';
            html += '<div style="background: url(' + benefits[i].icon + ') no-repeat; background-size: 70%; background-position: center;" class="fp__benefits-box-icon"></div>';
            html += '<span class="fp__benefits-box-title">' + benefits[i].text + '</span>';
            html += '</div>';
        }

        html += '</div>';

        return html;
    }
};

FP_BENEFITS.init(benefits);