<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    exit(json_encode(['success' => false, 'message' => 'Método no permitido']));
}

$data = json_decode(file_get_contents('php://input'), true);

// Validación básica
if (!$data['nombre'] || !$data['email'] || !$data['telefono']) {
    exit(json_encode(['success' => false, 'message' => 'Faltan datos requeridos']));
}

// Configuración de SMTP para Gmail
$smtp_host = 'smtp.gmail.com';
$smtp_username = 'monky6602@gmail.com'; // Tu correo de Hostinger
$smtp_password = 'Susanthc123'; // Tu contraseña de correo
$smtp_port = 465;
$smtp_secure = 'ssl';

// Configuración del email
$to = 'davidecondet@gmail.com'; // El correo donde quieres recibir los mensajes
$subject = $data['tipoSeguro'] 
    ? "Nueva solicitud de seguro: {$data['tipoSeguro']}" 
    : "Nuevo contacto web";

$message = "
<html>
<head>
    <style>
        body { font-family: Arial, sans-serif; }
        .header { background: #f0f9ff; padding: 20px; }
        .content { padding: 20px; }
    </style>
</head>
<body>
    <div class='header'>
        <h2>Nueva Solicitud de Información</h2>
    </div>
    <div class='content'>
        <p><strong>Nombre:</strong> {$data['nombre']}</p>
        <p><strong>Email:</strong> {$data['email']}</p>
        <p><strong>Teléfono:</strong> {$data['telefono']}</p>
        " . ($data['tipoSeguro'] ? "<p><strong>Tipo de Seguro:</strong> {$data['tipoSeguro']}</p>" : "") . "
        <p><strong>Mensaje:</strong> {$data['mensaje']}</p>
    </div>
</body>
</html>
";

// Usar PHPMailer para enviar a través de SMTP
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'PHPMailer/PHPMailer.php';
require 'PHPMailer/SMTP.php';
require 'PHPMailer/Exception.php';

$mail = new PHPMailer(true);

try {
    // Configuración del servidor
    $mail->isSMTP();
    $mail->Host = $smtp_host;
    $mail->SMTPAuth = true;
    $mail->Username = $smtp_username;
    $mail->Password = $smtp_password;
    $mail->SMTPSecure = $smtp_secure;
    $mail->Port = $smtp_port;
    $mail->CharSet = 'UTF-8';

    // Remitentes y destinatarios
    $mail->setFrom($smtp_username, 'Brow Asociados');
    $mail->addAddress($to);
    $mail->addReplyTo($data['email'], $data['nombre']);
    // Contenido
    $mail->isHTML(true);
    $mail->Subject = $subject;
    $mail->Body = $message;

    // Enviar email principal
    $success = $mail->send();

    if ($success) {
        // Preparar email de confirmación al cliente
        $mail->clearAddresses();
        $mail->addAddress($data['email']);
        $mail->Subject = "Recibimos tu solicitud - Brow Asociados";
        
        $clientMessage = "
        <html>
        <body>
            <h2>Gracias por contactar a Brow Asociados</h2>
            <p>Hemos recibido tu solicitud de información" . ($data['tipoSeguro'] ? " sobre {$data['tipoSeguro']}" : "") . ".</p>
            <p>Uno de nuestros asesores se pondrá en contacto contigo en las próximas 24 horas.</p>
            <p>Atentamente,<br>Equipo de Brow Asociados</p>
        </body>
        </html>";

        $mail->Body = $clientMessage;
        $mail->send();

        echo json_encode(['success' => true, 'message' => 'Mensaje enviado correctamente']);
    }
} catch (Exception $e) {
    echo json_encode(['success' => false, 'message' => 'Error al enviar el mensaje: ' . $mail->ErrorInfo]);
}
?>
