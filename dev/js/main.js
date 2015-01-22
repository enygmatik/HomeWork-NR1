/**
 * Created by ionmnl on 1/14/15.
 */

$(function () {
    var fake_upl = $('#fake_upload'),
        upload_btn = $('#upload_btn'),
        menu_btn = $('.menu_btn');

    $(fake_upl).on('click', function () {
        $(upload_btn).click();
    });


    $(upload_btn).on('change', function () {
        var input = $(this),
            numFiles = input.get(0).files ? input.get(0).files.length : 1,
            label = input.val().replace(/\\/g, '/').replace(/.*\//, '');
        input.trigger('fileselect', [numFiles, label]);
    });

    $(upload_btn).on('fileselect', function (event, numFiles, label) {

        var input = $(this).parents('.upload_form'),
            fileName = numFiles > 1 ? numFiles + ' files selected' : label;
        if (input.length) {
            $('.selected-files').prepend("<div>" + "File: " + fileName + "<div/>");
        }
    });

    $(function () {
        menu_btn.on('click', function () {
            var side = $('.left_side_bar');
            side.toggleClass('collapsed');
        })
    })
});