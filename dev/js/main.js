$(function () {
    var app = $(function () {

        var contact_Form = $('#contactForm'),
            inputs = contact_Form.find('input, textarea').not('input[type="file"], input[type="hidden"]'),
            email = $('#email'),
            mail_status = $('.status_message_box');

        // Check valid email format
        $(email).on("keydown", function () {
            var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            if (re.test($(this).val())) {
                $(this).addClass('has-succes');
            }
            else {
                $(this).addClass('has-error');
            }
        });

        // Submit Contact form
        $(contact_Form).on('submit', function () {
            var inputs = contact_Form.find('input, textarea').not('input[type="file"], input[type="hidden"]'),
                validInputs = 0;

                    $(inputs).tooltip('destroy');

                        $.each(inputs, function (index, val) {
                            var input = $(val),
                                val = input.val(),
                                textError = 'Fill the input';

                            if (val.length === 0) {
                                $(input).addClass('has-error');

                                $(input).tooltip({
                                    trigger : 'manual',
                                    placement: 'auto',
                                    title: textError
                                }).tooltip('show');
                            } else {
                                validInputs++;
                                $(input).addClass('has-succes');
                            }
                            console.log('In Each: ' + validInputs)
                        });
                        console.log('Out Each: ' + validInputs);

            // IF all inputs is VALID go AJAX
            $(function(){

                if ( validInputs === 4) {
                    var data = contact_Form.serialize();

                        $.ajax({
                            type: "POST",
                            data: data,
                            url: './mail.php'
                        }).done(function(status){
                            $(mail_status).css({'background-color': 'rgba(32, 180, 72, 0.51'});
                            $(mail_status).html(status);
                            $(contact_Form).trigger("reset");
                        }).fail(function(status){
                            $(mail_status).css({'background-color': 'rgba(255, 73, 67, 0.51'});
                            $(mail_status).html(status);
                        })

                } else {
                    //alert("stop!");
                }
            });
            return false
        });

        //Remove tooltip from invalid input's when typing
        $(inputs).on('keydown', function (){
            $(this).tooltip('destroy');
            if ($(this).val === 0) {
                $(this).removeClass('has-succes')
                $(this).addClass('has-error');
            } else {
                $(this).removeClass('has-error');
                $(this).addClass('has-succes');
            }
        });

        //Show selected file for upload
        $(function () {
            var fake_upl = $('#fake_upload'), upload_btn = $('#upload_btn'), menu_btn = $('.menu_btn');

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
                    $('.selected-files').val("File: " + fileName);
                }
            });
        });


        //open mobile menu
        $(function () {
            menu_btn.on('click', function () {
                var side = $('.left_side_bar');
                side.toggleClass('collapsed');
            })
        });

        //set active menu item
        $(function () {
            $('.nav li a').each(function (index) {
                if (this.href.trim() == window.location)
                    $(this).addClass("active");
            });
        });
    });
});
