<?php

	$con = mysqli_connect("localhost","root","","photodb");
		if (mysqli_connect_errno($con))
		{
			echo "Failed to connect to MySQL: " . mysqli_connect_error();
		}

	$x = $_POST['name'];
		
		$result = mysqli_query($con,"SELECT * from tags");
		$predef=array();
		
		while($row = mysqli_fetch_array($result))
		  {
		  array_push($predef,$row['Name']);
		  }
				
		$tagname=array();
		
		foreach($predef as $value)
		{
			if(substr_compare($value,$x,0,strlen($x),true)==0)
			{
				array_push($tagname,$value);
			}
		}
		
		echo json_encode($tagname);
?>
		