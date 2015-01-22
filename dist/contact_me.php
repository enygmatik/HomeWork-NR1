<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta http-enquiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="">
    <meta name="author" content="John Manoil">
    <title>Contact Me</title>
    <link rel="stylesheet" href="css/framework/bootstrap.min.css">
    <link rel="stylesheet" href="css/main.css">
</head>
<body>
<div class="wrapper">
    <?
    require_once('blocks/header.php');
    ?>
    <!--contact me-->
    <div class="content">
        <div class="container-fluid">
            <div class="row">
                <div class="col-sm-12">
                    <div class="left_side_bar col-sm-3">
                        <?
                        require_once('blocks/nav.php');
                        ?>
                        <div class="contact_bar container-fluid">
                            <div class="row">
                                <div class="social_bar_head">Контакты</div>
                                <div class="col-sm-12 contact_tel">
                                    <div class="row">
                                        <div class="icon_tel col-xs-2"><i class="icon-phone"></i></div>
                                        <div class="col-xs-10">
                                            <p>+37379868007</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-sm-12 contact_mail">
                                    <div class="row">
                                        <div class="icon_mail col-xs-2"><i class="icon-mail"></i></div>
                                        <div class="col-xs-10">
                                            <p>ionmnl@gmail.com</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-sm-12 contact_skype">
                                    <div class="row">
                                        <div class="icon_skype col-xs-2"><i class="icon-skype"></i></div>
                                        <div class="col-xs-10">
                                            <p>ionmnl</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="contact_wrapper col-sm-9">
                        <div class="container-fluid">
                            <div class="row">
                                <div class="form_header col-sm-12">
                                    <div>У вас интересный проект? Напишите мне</div>
                                </div>
                                <div class="form_section col-sm-12">
                                    <div class="form_wrapper">
                                        <form method="post" name="sentMessage" id="contactForm" action="contact.php">
                                            <div class="col-sm-6 input_box">
                                                <div>Имя</div>
                                                <input type="text" name="name" placeholder="Name" class="input_theme">
                                            </div>
                                            <div class="col-sm-6 input_box">
                                                <div>Email</div>
                                                <input type="email" name="email" placeholder="Email" class="input_theme">
                                            </div>
                                            <div class="col-sm-12">
                                                <div class="message_box">
                                                    <div>Сообщение</div>
                                                    <textarea rows="13" cols="60" name="message" placeholder="message"></textarea>
                                                </div>
                                            </div>
                                            <div class="captcha_section col-sm-12"><span>Введите код, указанный на картинке</span></div>
                                            <div class="col-xs-6">
                                                <div class="captcha_image_box"><img src="img/captcha.jpg"></div>
                                            </div>
                                            <div class="col-xs-6">
                                                <div class="captcha_input_box">
                                                    <input type="text" name="captcha" class="input_theme input_captcha">
                                                </div>
                                            </div>
                                            <div class="col-sm-12">
                                                <div class="col-xs-6 button_box">
                                                    <button type="submit" class="btn_default">Отправить</button>
                                                </div>
                                                <div class="col-xs-6 button_box">
                                                    <button type="reset" class="btn_disable">Очистить</button>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<?
require_once('blocks/footer.php');
?>
<!--javascript-->
<script src="//code.jquery.com/jquery-1.11.2.min.js"></script>
<script>window.jQuery || document.write('<script src="js/vendor/jquery-1.11.2.min.js">')</script>
<script src="js/vendor/bootstrap.min.js"></script>
<script src="js/main.js"></script>
</body>
</html>