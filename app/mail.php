<?php
session_start();

// Получаем данные из формы
$name = trim($_POST['name']);
$email = trim($_POST['email']);
$message = htmlspecialchars(strip_tags(trim($_POST['message'])), ENT_QUOTES);
$userip = ($_SERVER['X_FORWARDED_FOR']) ? $_SERVER['X_FORWARDED_FOR'] : $_SERVER['REMOTE_ADDR'];

$captcha_code = $_POST['captcha'];
$sess_captcha = $_SESSION['randStrn'];

// Create the email and send the message
$to = 'ionmnl@gmail.com'; // Add your email address inbetween the '' replacing yourname@yourdomain.com - This is where the form will send a message to.
$email_subject = "Website Contact Form:  $name";
$email_body = "You have received a new message from your website contact form.\n\n"."DETAILS:\n\nName: $name\n\nEmail: $email_address\n\nMessage:\n\n$message\n\nCaptcha:  $captcha\n\n"."\n=======================\nUser's IP: $userip";
$headers = "From: noreply@metaform.me\n"; // This is the email address the generated message will be from. We recommend using something like noreply@yourdomain.com.
$headers .= "Reply-To: $email_address";

if($sess_captcha != $captcha_code){
    echo 'Wrong captcha';
} else {
    mail($to,$email_subject,$email_body,$headers);
    echo "Your message was sent";
}

return true;
