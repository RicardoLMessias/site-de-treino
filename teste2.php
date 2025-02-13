<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

$to_email = "djcontaenter@gmail.com";
$subject = "Teste de envio de e-mail";
$body = "Olá, este é um e-mail de teste enviado pelo XAMPP.";
$headers = "From: djcontaenter@gmail.com";

if (mail($to_email, $subject, $body, $headers)) {
    echo "E-mail enviado com sucesso!";
} else {
    echo "Falha no envio do e-mail.";
}