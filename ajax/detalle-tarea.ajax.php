<?php

require_once '../php-includes/connect.inc.php';

$stmt= mysql_query("SELECT tar_descri FROM ta_tarea WHERE tar_id = 1",$db);

echo $stmt;

?>
