$(function(){
    var app = $(function(){

        //Show selected file for upload
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

        $(function(){
            // Get current url
            // Select an a element that has the matching href and apply a class of 'active'. Also prepend a - to the content of the link
            //var url = window.location.href;
            //$('.menu a[href="'+url+'"]').addClass('current_page_item');
            //
            //console.log(url);

            $('.nav li a').each(function(index) {
                if(this.href.trim() == window.location)
                    $(this).addClass("active");
            });
        });
    });
});
