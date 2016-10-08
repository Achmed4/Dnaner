$(function() {
    
    //Product
    //Initiate ZOOM Plugin
    var dataZoomImage = $('.img_02').data('zoom-image');

    $('.product-images > img').wrap('<span class="image-parent" style="display:block; width: 300px; height: 300px; margin: 0 auto 10px;"></span>')
    .css('display', 'block')
    .parent()
    .zoom({
        url: dataZoomImage,
    });

    var linkImage, newDataZoomImage;

    $('#gal1 a').on('click', function() {
        newDataZoomImage = $(this).children().data('zoom-image');
        linkImage = $(this).html();
        $('.product-images > span').html(linkImage).zoom({
            url: newDataZoomImage,
        });
        $(this).addClass('active').siblings().removeClass('active');
    });

});
