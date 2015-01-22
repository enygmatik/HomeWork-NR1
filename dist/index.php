<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta http-enquiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="">
    <meta name="author" content="John Manoil">
    <title>HomeWork</title>
    <link rel="stylesheet" href="css/framework/bootstrap.min.css">
    <link rel="stylesheet" href="css/main.css">
</head>
<body>
<div class="wrapper">
    <?
    require_once('blocks/header.php');
    ?>
    <div class="content">
        <div class="container-fluid">
            <div class="row">
                <div class="col-sm-12">
                    <div class="col-sm-3 left_side_bar">
                        <?
                        require_once('blocks/nav.php');
                        ?>
                        <div class="container-fluid contact_bar">
                            <div class="row">
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
                        </div>
                    </div>
                    <div class="general_info col-sm-9">
                        <div class="row">
                            <div class="section_header col-sm-12"><span>Основная информация</span></div>
                            <div class="col-sm-12">
                                <div class="profile_img_box col-sm-4"><img src="img/me2.jpg" alt="profile" class="profile_img"></div>
                                <div class="about_me col-sm-8">
                                    <p><span class="bold">Меня зовут:<span> Ivan Manoil</span></span></p>
                                    <p><span class="bold">Мой возраст:<span> 23 лет</span></span></p>
                                    <p><span class="bold">Мой город:<span> Chisinau, MD</span></span></p>
                                    <p><span class="bold">Моя специализация:<span> FRONTEND разработчик</span></span></p>
                                    <p><span class="bold">Ключевые навыки:<span class="skill"> html</span><span class="skill"> css</span><span class="skill"> javascript</span><span class="skill"> gulp</span><span class="skill"> git</span></span></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="work_practic col-sm-9">
                        <div class="row">
                            <div class="section_header col-sm-12"><span>Опыт работы</span></div>
                        </div>
                        <div class="row">
                            <div class="col-sm-12 job">
                                <div class="col-sm-2 icon_work"><i class="icon-briefcase"></i></div>
                                <div class="col-sm-10">
                                    <p><b>"ИП Боровицкий" - Продавец дисков</b></p>
                                    <p>Сентябрь 2005 - Август 2008</p>
                                </div>
                            </div>
                            <div class="col-sm-12 job">
                                <div class="col-sm-2 icon_work"><i class="icon-briefcase"></i></div>
                                <div class="col-sm-10">
                                    <p><b>"ООО Системы безопастности" - Системный администратор</b></p>
                                    <p>Июнь 2008 - Июль 2010</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="studies col-sm-9">
                        <div class="row">
                            <div class="section_header col-sm-12"><span>Образование</span></div>
                        </div>
                        <div class="row">
                            <div class="col-sm-12 studies_level">
                                <div class="col-sm-2 icon_studies"><i class="icon-graduation-cap"></i></div>
                                <div class="col-sm-10">
                                    <p>Незаконченное высшее. СПБГУ ИТМО</p>
                                    <p class="thin">Октябрь 2012 - по настоящее время</p>
                                </div>
                            </div>
                            <div class="col-sm-12 studies_level">
                                <div class="col-sm-2 icon_studies"><i class="icon-doc-text"></i></div>
                                <div class="col-sm-10">
                                    <p>Курсы Loftschool.ru</p>
                                    <p class="thin">Ноябрь 2014 - по настоящее время</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!--contact me-->
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