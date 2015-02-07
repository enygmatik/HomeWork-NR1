<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta http-enquiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="">
    <meta name="author" content="John Manoil">
    <title>Ivan Manoil</title>
    <link rel="stylesheet" href="css/style.css">
</head>
<body>
<div class="wrapper">
    <?
    require_once ('blocks/header.php')
    ?>
    <!--contact me-->
    <div class="content">
        <div class="container-fluid">
            <div class="row">
                <div class="left_side_bar col-sm-3">
                    <?
                    require_once ('blocks/nav.php')
                    ?>
                    <div class="contact_bar container-fluid">
                        <ul class="row">
                            <div class="social_bar_head">Контакты</div>
                            <li class="col-sm-12 contact_tel">
                                <div class="icon_tel col-xs-2"><i class="icon-phone"></i></div>
                                <div class="col-xs-10"><a href="tel:+37379868007" class="contact_bar_li">+37379868007</a></div>
                            </li>
                            <li class="col-sm-12 contact_mail">
                                <div class="icon_mail col-xs-2"><i class="icon-mail"></i></div>
                                <div class="col-xs-10"><a href="mailto:ionmnl@gmail.com" class="contact_bar_li">ionmnl@gmail.com</a></div>
                            </li>
                            <li class="col-sm-12 contact_skype">
                                <div class="icon_skype col-xs-2"><i class="icon-skype"></i></div>
                                <div class="col-xs-10"><a href="skype:ionmnl" class="contact_bar_li">ionmnl</a></div>
                            </li>
                        </ul>
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
                                    <form method="POST" name="sentMessage" id="contactForm" action="">
                                        <div class="status_message_box"></div>
                                        <div class="col-sm-6 input_box form_gr">
                                            <label for="name">Имя</label>
                                            <input type="text" id="name" name="name" placeholder="Name" class="input_theme">
                                        </div>
                                        <div class="col-sm-6 input_box form_gr">
                                            <label for="email2">Email</label>
                                            <input type="email" id="email" name="email" placeholder="Email" class="input_theme">
                                        </div>
                                        <div class="col-sm-12">
                                            <div class="message_box form_gr">
                                                <label for="message">Сообщение</label>
                                                <textarea id="message" rows="13" cols="60" name="message" placeholder="message" class="textarea"></textarea>
                                            </div>
                                        </div>
                                        <div class="captcha_section col-sm-12"><span class="captcha_code">Введите код, указанный на картинке</span></div>
                                        <div class="col-xs-6">
                                            <div class="captcha_image_box"><img src="../back/img/captcha.jpg"></div>
                                        </div>
                                        <div class="col-xs-6">
                                            <div class="captcha_input_box form_gr">
                                                <!--label(for='captcha') Captcha-->
                                                <input type="text" id="captcha" name="captcha" class="input_theme input_captcha input_box">
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
<?
require_once('blocks/footer.php')
?>
<!--javascript-->
<script src="http://code.jquery.com/jquery-1.11.2.min.js"></script>
<script>window.jQuery || document.write('<script src="../back/js/vendor/jquery-1.11.2.min.js">')</script>
<script src="js/core.js"></script>
</body>
</html>