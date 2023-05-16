<?php
    header("Content-type:application/json");

    $obj = (object) [];

    $obj->name = (string) "Josue";
    $obj->lastName = (string) "Sierra";
    $obj->age = (integer) 21;

    echo json_encode($obj);
?>