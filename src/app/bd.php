<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

$conn = new mysqli("localhost", "root", "", "pruebaAngular");

$result = $conn->query("SELECT nombre, city, country FROM prueba");

$outp = "";
while($rs = $result->fetch_array(MYSQLI_ASSOC)) {
  if ($outp != "") {$outp .= ",";}
  $outp .= '{"Name":"'  . $rs["nombre"] . '",';
  $outp .= '"City":"'   . $rs["city"]        . '",';
  $outp .= '"Country":"'. $rs["country"]     . '"}';
}
$outp ='{"records":['.$outp.']}';
$conn->close();

echo($outp);
?>