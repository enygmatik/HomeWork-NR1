<?php
$name = $_POST['name'];
$email_address = $_POST['email'];
$message = $_POST['message'];
$captcha = $_POST['captcha'];
$userip = ($_SERVER['X_FORWARDED_FOR']) ? $_SERVER['X_FORWARDED_FOR'] : $_SERVER['REMOTE_ADDR'];


// Create the email and send the message
$to = 'ionmnl@gmail.com'; // Add your email address inbetween the '' replacing yourname@yourdomain.com - This is where the form will send a message to.
$email_subject = "Website Contact Form:  $name";
$email_body = "You have received a new message from your website contact form.\n\n"."DETAILS:\n\nName: $name\n\nEmail: $email_address\n\nMessage:\n\n$message\n\nCaptcha:  $captcha\n\n"."\n=======================\nUser's IP: $userip";
$headers = "From: noreply@metaform.me\n"; // This is the email address the generated message will be from. We recommend using something like noreply@yourdomain.com.
$headers .= "Reply-To: $email_address";	
mail($to,$email_subject,$email_body,$headers);

return true;
