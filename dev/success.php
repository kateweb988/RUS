<?php
header("Content-Type: text/html; charset=utf-8");
$name = htmlspecialchars($_POST["name"]);
$mail = htmlspecialchars($_POST["mail"]);
$company = htmlspecialchars($_POST["company"]);
$text = htmlspecialchars($_POST["text"]);
$sel = htmlspecialchars($_POST["sel"]);

$refferer = getenv('HTTP_REFERER');
$date=date("d.m.y"); // число.месяц.год  
$time=date("H:i"); // часы:минуты:секунды 
$myemail = "info@rusitproject.ru";

$tema = "Новая заявка";
$message_to_myemail = "
<br><br>
Тема: $sel<br>
Имя: $name<br>
Почта: $mail<br>
Компания: $company<br>
Текст: $text<br>

Источник (ссылка): $refferer
";

mail($myemail, $tema, $message_to_myemail, "From: RUP <admin@kateweb.ru> \r\n  \r\n"."MIME-Version: 1.0\r\n"."Content-type: text/html; charset=utf-8\r\n" );



?>
