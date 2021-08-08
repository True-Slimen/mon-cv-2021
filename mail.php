<?php

if(isset($_POST['name'])){
    $name = $_POST['name'];
    $mail = $_POST['mail'];
    $message = $_POST['message'];
}

$to_email = 'metatidj.slimen@gmail.com';
$subject = 'Un message de ' . $name;
$headers[] = 'MIME-Version: 1.0';
$headers[] = 'Content-type: text/html; charset=UTF-8';
$headers[] = 'From: ' . $name;

mail($to_email, $subject, $message, implode("\r\n", $headers));

?>