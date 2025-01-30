<?php
// FetchCharacters.php

$gameId = isset($_GET['gameId']) ? $_GET['gameId'] : 0;

include('db.php');

// Check the connection
if ($conn->connect_error) {
    die('Connection failed: ' . $conn->connect_error);
}

// Query to fetch characters based on gameId
$query = "SELECT * FROM characters WHERE game_id = $gameId";
$result = $conn->query($query);

$characters = [];
if ($result->num_rows > 0) {
    while ($row = $result->fetch_assoc()) {
        $characters[] = $row;
    }
}

// Return characters as JSON
echo json_encode($characters);

// Close connection
$conn->close();
?>
