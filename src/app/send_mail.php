<?php

########### CONFIG ###############

$recipient = $_POST['recipent'];
// $redirect = '';
$redirect = '/success';

########### CONFIG END ###########



########### Intruction ###########   
#
#   This script has been created to send an email to the $recipient
#   
#  1) Upload this file to your FTP Server
#  2) Send a POST rewquest to this file, including
#     [name] The name of the sender (Absender)
#     [message] Message that should be send to you
#
##################################



###############################
#
#        DON'T CHANGE ANYTHING FROM HERE!
#
#        Ab hier nichts mehr ändern!
#
###############################

switch ($_SERVER['REQUEST_METHOD']) {
    case ("OPTIONS"): //Allow preflighting to take place.
        header("Access-Control-Allow-Origin: *");
        header("Access-Control-Allow-Methods: POST");
        header("Access-Control-Allow-Headers: content-type");
        exit;
    case ("POST"): //Send the email;
        header("Access-Control-Allow-Origin: *");

        $subject = "Contact From " . $_POST['name'];
        $headers = "From:  noreply-leondittrich@leondittrich.com";
        $msgSender = $_POST['message'] . " von: " . $_POST['name'] . "Mail: " . $_POST['email']; 

        $msgReply = "The following message has been sent to Viktor: " . $_POST['message'] . " from: " . $_POST['name'] . "Mail address: " . $_POST['email']; 

       
        mail($recipient, $subject, $msgReply, $headers);
        mail("leon_dittrich@web.de", $subject, $msgSender, $headers);

        header("Location: " . $redirect); 

        break;
    default: //Reject any non POST or OPTIONS requests.
        header("Allow: POST", true, 405);
        exit;
}