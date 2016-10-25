<?php
//Conexion a la BD
require_once 'php-includes/connect.inc.php';
require_once 'classes/classes.php';
$display = new Display($db);
?>

<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8">
        <title>Seguimiento de caso</title>
        <link rel="stylesheet" href="css/style.css">
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js"></script>
        <script src="https://ajax.googleapis.com/ajax/libs/jqueryui/1.12.1/jquery-ui.min.js"></script>
        <script src="scripts/tableroDragDrop.js"></script>
    </head>

    <body>
        <h1>Seguimieto de caso</h1>
        <div>
            <div id="left">
                <h2>Backlog</h2>
                <ul id="backlog">
                    <?php echo $display->backlog(); ?>
                </ul>
            </div>
            <div id="center">
                <h2>Pendientes</h2>
                <ul id="pendiente">
                    <?php echo $display->pendiente(); ?>
                </ul>
            </div>
            <div id="right">
                <h2>En proceso</h2>
                <ul id="proceso">
                    <?php echo $display->proceso(); ?>
                </ul>
            </div>
            <div id="right">
                <h2>Finalizadas</h2>
                <ul id="finalizada">
                    <?php echo $display->finalizada(); ?>
                </ul>
            </div>
        </div>

    </body>
</html>
