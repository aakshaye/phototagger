<?php
	
	/*$sql="CREATE DATABASE photodb";
		if(mysqli_query($con,$sql)){
			 echo "Database photodb created successfully";
		}
		else{
			 echo "Database photodb failed to be created ";
		}*/
		
	$con=mysqli_connect("localhost","root","","photodb");
		if (mysqli_connect_errno($con))
		{
			echo "Failed to connect to MySQL: " . mysqli_connect_error();
		}
		
		/*$predef = array('Aakshaye','Vivek','Gaurav','Rohan','Vaibhavi','Vineet');*/
		
		#data base me save(id,name,x,y) name ka table create kar.. id ko primary key bana and auto increment ka box pe tick kar
		
	$value = $_POST['name'];	
	$x = $_POST['x'];
	$y = $_POST['y'];
	$sql = "INSERT INTO save(name,x,y) VALUES('$value',$x,$y)";
	$result = mysqli_query($con,$sql);
	
	mysqli_close($con);	

?>