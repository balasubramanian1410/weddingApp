<?php
	
	$servername = isset($_POST['hostName']) ? $_POST['hostName'] : 'fff';
	$dbname = isset($_POST['hostDB']) ? $_POST['hostDB'] : 'fff';
	$username = isset($_POST['hostUser']) ? $_POST['hostUser'] : 'fff';
	$password = isset($_POST['hostPass']) ? $_POST['hostPass'] : 'fff';
	
	
	
	
	$name = isset($_POST['name']) ? $_POST['name'] : 'fff';
	$name = urldecode($name);
	$details = isset($_POST['details']) ? $_POST['details'] : 'fff';
	$details = urldecode($details);
	$guests = isset($_POST['guests']) ? $_POST['guests'] : 'ff';
	$guests = urldecode($guests);
	$answer = isset($_POST['answer']) ? $_POST['answer'] : 'fff';
	$answer = urldecode($answer);
	$comments = isset($_POST['comments']) ? $_POST['comments'] : 'ff';
	$comments = urldecode($comments);
	$song = isset($_POST['song']) ? $_POST['song'] : 'ff';
	$song = urldecode($song);
	$guestSide = isset($_POST['guestSide']) ? $_POST['guestSide'] : 'ff';
	$guestSide = urldecode($guestSide);
	$checkInTime = isset($_POST['checkInTime']) ? $_POST['checkInTime'] : 'ff';
	$checkInTime = urldecode($checkInTime);
	
	// Create connection
	$conn = new mysqli($servername, $username, $password, $dbname);

	// Check connection
	if ($conn->connect_error) {
		die("Connection failed: " . $conn->connect_error);
	} 
	$sql = "INSERT INTO inviteDetails (name, details, guests, answer, comments, song, guestSide, checkInTime)
	VALUES ('$name', '$details', '$guests','$answer', '$comments', '$song', '$guestSide', '$checkInTime')";
	
  
	if ($conn->query($sql) === TRUE) {
		//echo "New record created successfully";
		$arr = array('a' => 1, 'b' => 2, 'c' => 3, 'd' => 4, 'e' => 5);
		  echo json_encode($arr);
	} else {
		//echo "Error: " . $sql . "<br>" . $conn->error;
		$arr = array('a' => 6, 'b' => 7, 'c' => 8, 'd' => 9, 'e' => 0);
		  echo json_encode($arr);
	}

	$conn->close();
	
	
	
?>