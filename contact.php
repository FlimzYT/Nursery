<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $firstName = $_POST['fName'];
    $lastName = $_POST['lName'];
    $phone = $_POST['phone'];
    $email = $_POST['email'];
    $message = $_POST['message'];

    // Set up the email parameters
    $to = 'aon.obeidat@gmail.com'; // Replace this with your email address
    $subject = 'رسالة من استمارة الاتصال';

    $headers = "From: $firstName $lastName <$email>\r\n";
    $headers .= "Reply-To: $email\r\n";
    $headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

    // Compose the email body
    $emailBody = "الاسم الأول: $firstName\r\n";
    $emailBody .= "الاسم الأخير: $lastName\r\n";
    $emailBody .= "رقم الهاتف: $phone\r\n";
    $emailBody .= "البريد الإلكتروني: $email\r\n";
    $emailBody .= "نص الرسالة:\r\n$message";

    // Send the email
    if (mail($to, $subject, $emailBody, $headers)) {
        $response = array('message' => 'تم إرسال الرسالة بنجاح!');
    } else {
        $response = array('message' => 'فشل إرسال الرسالة. يرجى المحاولة لاحقًا.');
    }

    // Return the response as JSON
    echo json_encode($response);
}
?>
