<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nome = htmlspecialchars(trim($_POST["nome"]));
    $email = filter_var(trim($_POST["email"]), FILTER_VALIDATE_EMAIL);
    $mensagem = htmlspecialchars(trim($_POST["mensagem"]));

    if (!$nome || !$email || !$mensagem) {
        die("Preencha todos os campos corretamente!");
    }

    $para = "seuemail@exemplo.com";  // Substitua pelo seu e-mail real
    $assunto = "Novo contato do site";
    $corpo = "Nome: $nome\nE-mail: $email\nMensagem:\n$mensagem";

    $cabecalhos = "From: $email\r\n";
    $cabecalhos .= "Reply-To: $email\r\n";
    $cabecalhos .= "MIME-Version: 1.0\r\n";
    $cabecalhos .= "Content-Type: text/plain; charset=UTF-8\r\n";

    if (mail($para, $assunto, $corpo, $cabecalhos)) {
        echo "E-mail enviado com sucesso!";
    } else {
        echo "Erro ao enviar o e-mail.";
    }
}
?>