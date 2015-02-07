$(function () {
    var app = $(function () {

        var contact_Form = $('#contactForm'),
            upload_Form = $('#add_project_form'),
            inputs1 = contact_Form.find('input, textarea').not('input[type="file"], input[type="hidden"]'),
            inputs2 = upload_Form.find('input, textarea').not('input[type="file"], input[type="hidden"]'),
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
                        }).done(function(){
                            $(contact_Form).trigger("reset");
                            $(inputs2).removeClass('has-succes has-error');
                            $(mail_status).html("<span class='mail_sent'> Your mail was sent.</span>");


                        }).fail(function(){
                            $(mail_status).html("<span class='mail_sent_error'> Problem on server, please try later</span>");
                        })

                } else {
                    //alert("stop!");
                }
            });
            return false
        });

        // Submit Upload form
        $(upload_Form).on('submit', function () {
            var inputs = upload_Form.find('input, textarea').not('input[type="file"], input[type="hidden"]'),
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
                        placement: 'left',
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

            });
            return false

        });

        //Remove tooltip from invalid input's when typing on CONTACT FORM
        $(inputs1).on('keydown', function (){
            $(this).tooltip('destroy');
            if ($(this).val === 0) {
                $(this).removeClass('has-succes')
                $(this).addClass('has-error');
            } else {
                $(this).removeClass('has-error');
                $(this).addClass('has-succes');
            }
        });

        //Remove tooltip from invalid input's when typing on UPLOAD FORM
        $(inputs2).on('keydown change', function (){
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
            var fake_upl = $('#fake_upload'), upload_btn = $('#upload_btn');

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
            var menu_btn = $('.menu_btn'),
                side = $('.left_side_bar');

                menu_btn.on('click', function () {
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

        //reset form on close modal
        $(function(){
            var close_md = $('.btn-close-modal');

                close_md.on('click', function(){
                    $(inputs2).tooltip('destroy');
                    $(upload_Form).trigger("reset");
                    inputs2.removeClass('has-succes has-error');
            });
        });
    });
});


