<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");

include 'db.php';

$sql = "SELECT * FROM games";
$result = $conn->query($sql);

$games = [];
while ($row = $result->fetch_assoc()) {
    $games[] = $row;
}

echo json_encode($games);
?>
