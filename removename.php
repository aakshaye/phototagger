<?php
	
	$con=mysqli_connect("localhost","root","","photodb");
		if (mysqli_connect_errno($con))
		{
			echo "Failed to connect to MySQL: " . mysqli_connect_error();
		}
		
	$value = $_POST['name'];	
	$sql="DELETE FROM save WHERE (name)=('$value')";
	$result = mysqli_query($con,$sql);
	
	mysqli_close($con);	

?>