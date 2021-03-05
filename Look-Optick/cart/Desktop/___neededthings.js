jQuery.ajax({
    url: '/cart/add.js',
    type: 'post',
    dataType: 'json',
    data: {

        id: 34325157871675,


    }
    // Optional: success/error functions
}).then(data => console.log(data))




fetch('/cart.js')
    .then(response => response.json())
    .then(data => console.log(data))




jQuery.ajax({
    url: '/cart/update.js',
    type: 'post',
    dataType: 'json',
    data: {

        updates: {
            34325157871675: 2,
            34325157773371: 3
        }


    }
    // Optional: success/error functions
}).then(data => console.log(data))







jQuery.ajax({
    url: '/cart/update.js',
    type: 'post',
    dataType: 'json',
    data: {

        updates: {
            34325157871675: 2,
            34325157773371: 3
        }


    }
    // Optional: success/error functions
}).then(data => console.log(data))











jQuery.ajax({
    url: 'https://www.lookoptic.com/products/sullivan-tortoise?variant=34325157871675',
    type: 'get',

}).then(data => {
    a = $('' + data + '');
    $('body').prepend(a.find('#AddToCartForm'))
})