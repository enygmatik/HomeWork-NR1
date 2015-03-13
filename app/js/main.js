(function(){
    var app = {
        //APLICATION START
        initialize: function () {
            console.log('APP Init');

            this.setUpListener();
            this.activeMenuItem();

            //$('input, textarea').placeholder();

        },

        //EVENT KEEPER
        setUpListener: function() {
            var form = $('form'),
                closeModalBtn = $('.btn-close-modal'),
                openMenuBtn = $('.icon-menu');

                $('.btn_disable').on('click', app.clearForm);
                form.on('keydown', '.has-error', app.removeError);
                form.on('submit', app.contactMe);
                closeModalBtn.on('click', app.clearForm);
                openMenuBtn.on('click', app.openMobileMenu);
        },

        //SEND DATA FROM CONTACT FORM
        contactMe: function () {
            if(!app.validateForm()) return false;

            var data = $('form').serialize();
            $.ajax({
                type: 'POST',
                url: './mail.php',
                data: data
            }).done(function(response){
                console.log("sending");
                    if (response === 'Your message was sent') {
                        $('.status_message_box').html('<p class="mail_sent">' + response + '</p>');
                        app.clearForm();
                    }
                    if (response === 'Wrong captcha' ) {
                        $('.status_message_box').html('<p class="mail_sent_error">' + response + '</p>');
                        $('.input_captcha').addClass('has-error');
                    } else {
                        $('.input_captcha').removeClass('has-error');
                    }
            });
            return false;
        },

        //VALIDATE FORM ON CLIENT SIDE
        validateForm: function () {
            console.log('Check form');
            var elements = $('form').find('input, textarea'),
                valid = true;

            $.each(elements, function(index, val) {
                var element = $(val),
                    val = element.val();

                if(val.length === 0){
                    element.addClass('has-error');
                    valid = false;
                }
            });
            return valid;
        },

        //CLEAR FORM
        clearForm: function() {
            console.log('Clear form');
            var form = $('form');
            form.find('.has-error').removeClass('has-error');
            form.find('input, textarea').val('');
        },

        //REMOVE ERROR INPUT STYLE ON TYPE
        removeError: function() {
            $(this).removeClass('has-error');
        },

        activeMenuItem: function() {
            $('.nav li a').each(function (index) {
                if (this.href.trim() == window.location)
                    $(this).addClass("active");
            });
        },

        openMobileMenu: function() {
            var mobileMenu = $('.left_side_bar');

            mobileMenu.toggleClass('collapsed');
        }
    };

    app.initialize();
}());


