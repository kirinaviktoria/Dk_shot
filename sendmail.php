<?php

  use PHPMailer\PHPMailer\PHPMailer;
  use PHPMailer\PHPMailer\Exception;

  require "PHPMailer/src/Exception.php";
  require "PHPMailer/src/PHPMailer.php";

  $mail = new PHPMailer(true); /* Создаем объект MAIL */
  $mail->CharSet = "UTF-8"; /* Задаем кодировку UTF-8 */
  $mail->IsHTML(true); /* Разрешаем работу с HTML */
 

  // from:
  $mail->setFrom('info@dkshot.ru', 'DK shot');
  // to:
  $mail->addAddress('kirinaviktoria@yandex.ru');
  // $mail->addAddress('info@dkshot.ru');
  // theme mail
  $mail->Subject = 'Заявка с сайта DK shot';

  $date_today = date("m.d.y"); //присвоено 12.03.15
  $today[1] = date("H:i:s"); //присвоит 1 элементу массива 18:32:17
  // echo("Текущее время: $today[1] и дата: $date_today .");
  $dateTime = "$date_today $today[1]";

  // $dateTime = date('l jS \of F Y h:i:s A');

  $name = $_POST['name']; /* Принимаем имя пользователя с формы .. */
  $phone = $_POST['phone']; /* Телефон */
  $email = $_POST['email']; /* Почту */
  $description = $_POST['description']; /* Сообщение с формы */
  $background = $_POST['background'];
  $format = $_POST['format-select'];
  $messanger = $_POST['messanger'];

  if(isset($_POST['walking']) && $_POST['walking'] == 'Yes') {
    $walking = 'Да';
  } else {
    $walking = 'Нет';
  }

  if(isset($_POST['reels']) && $_POST['reels'] == 'Yes') {
    $reels = 'Да';
  } else {
    $reels = 'Нет';
  }

  if(isset($_POST['styling']) && $_POST['styling'] == 'Yes') {
    $styling = 'Да';
  } else {
    $styling = 'Нет';
  }

  $email_template = "template_mail.html"; // Считываем файл разметки
  $body = file_get_contents($email_template); // Сохраняем данные в $body
  $body = str_replace('%name%', $name, $body); // Заменяем строку %name% на имя
  $body = str_replace('%email%', $email, $body); // строку %email% на почту
  $body = str_replace('%phone%', $phone, $body); // строку %phone% на телефон
  $body = str_replace('%description%', $description, $body); // строку %description% на сообщение
  $body = str_replace('%background%', $background, $body);
  $body = str_replace('%format%', $format, $body);
  $body = str_replace('%messanger%', $messanger, $body);

  $body = str_replace('%walking%', $walking, $body);
  $body = str_replace('%reels%', $reels, $body);
  $body = str_replace('%styling%', $styling, $body);

  $body = str_replace('%dateTime%', $dateTime, $body);

  // 
  $mail->Body = strval($body);
  // 

  /* Проверяем отправлено ли сообщение */
  if (!$mail->send()) {
    $message = "Ошибка отправки";
  } 
  else {
    $message = "Данные отправлены!";
  }

  /* Возвращаем ответ */	
  $response = ["message" => $message];

  /* Ответ в формате JSON */
  header('Content-type: application/json');
  echo json_encode($response);
?>