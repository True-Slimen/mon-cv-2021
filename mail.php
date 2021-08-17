<?php
if(isset($_POST['name'])){
    $name = verify_data(($_POST['name']));
    $email = verify_data(($_POST['email']));
    $message = verify_data(($_POST['message']));
}else{
    echo "Formulaire vide.";
}

function verify_data($data){
    $data = trim($data);
    $data = stripslashes($data);
    $data = htmlspecialchars($data);
    return $data;
}

if (!empty($name)
    && !empty($email)
    && !empty($message)
    && filter_var($email, FILTER_VALIDATE_EMAIL)){
        $message.= ' Envoyer depuis : ' . $email;
        $destinataire = 'metatidj.slimen@gmail.com';
        $expediteur = $email;
        $objet = 'Un message de ' . $name;
        $headers  = 'MIME-Version: 1.0' . "\n";
        $headers .= 'From: <'.$expediteur.'>'."\n";
        $headers .= 'Delivered-to: '.$destinataire."\n";
        if (mail($destinataire, $objet, $message, $headers))
        {
            echo 'true';
        }
        else
        {
            echo "false";
        }

    }else{
        echo "Données invalides";
    }
?>