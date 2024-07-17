<?php
if (isset($_POST['items'])) {
    $itemsArray = $_POST['items'];
    $messageBody = "You have received the following items:\n";

    // Build the email message by appending each item
    foreach ($itemsArray as $itemText) {
        $messageBody .= $itemText . "\n";

    }
    
    // Email settings
    $to = 'f.engineer.f7@gmail.com';  // Set your email address here
    $subject = 'New Submission of Items from Your Website';
    $headers = 'From: fullstack.engineer418@gmail.com' . "\r\n" .
               'Reply-To: fullstack.engineer418@gmail.com' . "\r\n" .
               'X-Mailer: PHP/' . phpversion();

    // Send the email
    if (mail($to, $subject, $messageBody, $headers)) {
        echo "Email sent successfully.";
    } else {
        echo "Failed to send email.";
    }
}
?>
