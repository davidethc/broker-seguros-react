<?php
// Configuración de correo
$smtp_host = 'smtp.hostinger.com';
$smtp_username = 'tu-correo@dominio.com';
$smtp_password = 'tu-contraseña';
$smtp_port = 465;
$smtp_secure = 'ssl';

// Destinatario
$to_email = 'info@browasociados.com';
$to_name = 'Brow Asociados';

// Validación y limpieza de datos
function cleanInput($data) {
    $data = trim($data);
    $data = stripslashes($data);
    $data = htmlspecialchars($data);
    return $data;
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Recoger y limpiar datos del formulario
    $nombre = cleanInput($_POST['nombre'] ?? '');
    $telefono = cleanInput($_POST['telefono'] ?? '');
    $email = cleanInput($_POST['email'] ?? '');
    $mensaje = cleanInput($_POST['mensaje'] ?? '');
    $tipo_seguro = cleanInput($_POST['tipo_seguro'] ?? '');
    
    // Validaciones básicas
    $errors = [];
    
    if (empty($nombre)) {
        $errors[] = "El nombre es requerido";
    }
    
    if (empty($telefono)) {
        $errors[] = "El teléfono es requerido";
    }
    
    if (empty($email)) {
        $errors[] = "El correo electrónico es requerido";
    } elseif (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $errors[] = "El formato del correo electrónico no es válido";
    }

    // Si no hay errores, enviar el correo
    if (empty($errors)) {
        require 'PHPMailer/PHPMailer.php';
        require 'PHPMailer/SMTP.php';
        require 'PHPMailer/Exception.php';

        $mail = new PHPMailer\PHPMailer\PHPMailer(true);

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

            // Remitente y destinatario
            $mail->setFrom($smtp_username, 'Formulario Web');
            $mail->addAddress($to_email, $to_name);
            $mail->addReplyTo($email, $nombre);

            // Contenido
            $mail->isHTML(true);
            $mail->Subject = "Nueva solicitud de cotización - $tipo_seguro";
            
            // Cuerpo del correo
            $mail->Body = "
                <h2>Nueva solicitud de cotización</h2>
                <p><strong>Tipo de seguro:</strong> $tipo_seguro</p>
                <p><strong>Nombre:</strong> $nombre</p>
                <p><strong>Teléfono:</strong> $telefono</p>
                <p><strong>Email:</strong> $email</p>
                <p><strong>Mensaje:</strong><br>$mensaje</p>
                <hr>
                <p><small>Este mensaje fue enviado desde el formulario de cotización en www.browasociados.com</small></p>
            ";

            $mail->send();
            
            // Enviar correo de confirmación al cliente
            $mail->clearAddresses();
            $mail->addAddress($email, $nombre);
            $mail->Subject = "Recibimos tu solicitud de cotización - Brow Asociados";
            $mail->Body = "
                <h2>¡Gracias por contactarnos!</h2>
                <p>Hola $nombre,</p>
                <p>Hemos recibido tu solicitud de cotización para un seguro de $tipo_seguro. Uno de nuestros asesores se pondrá en contacto contigo en las próximas 24 horas.</p>
                <p>Mientras tanto, si tienes alguna pregunta urgente, no dudes en llamarnos al (07) 123-4567.</p>
                <br>
                <p>Saludos cordiales,</p>
                <p><strong>Equipo Brow Asociados</strong></p>
                <hr>
                <p><small>Este es un mensaje automático, por favor no respondas a este correo.</small></p>
            ";
            
            $mail->send();
            
            // Respuesta exitosa
            header('Content-Type: application/json');
            echo json_encode([
                'success' => true,
                'message' => 'Tu solicitud ha sido enviada. Te contactaremos pronto.'
            ]);
            
        } catch (Exception $e) {
            header('Content-Type: application/json');
            echo json_encode([
                'success' => false,
                'message' => 'Hubo un error al enviar el mensaje. Por favor, intenta nuevamente.'
            ]);
        }
    } else {
        // Si hay errores, devolver mensaje de error
        header('Content-Type: application/json');
        echo json_encode([
            'success' => false,
            'message' => 'Por favor, corrige los siguientes errores:',
            'errors' => $errors
        ]);
    }
} else {
    // Si no es POST, redirigir a la página principal
    header('Location: /');
    exit();
}
?>
