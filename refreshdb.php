<?php
	$con=mysqli_connect("localhost","root","","photodb");
		if (mysqli_connect_errno($con))
		{
			echo "Failed to connect to MySQL: " . mysqli_connect_error();
		}
		#photodb.php me dekh main database banane ka taraika thoda change karne bola h wo padh
		$a;
		#since every row is a array of 3 columns and there are many rows.. so we need a 2 dimensional array i.e array of rows. Idar apun $a use karenge
	$result = mysqli_query($con,"SELECT * FROM save");
#since all the values in save databse must me displayed after refreshing we need to extract data after every refresh..so uska ajax apun ne document.ready me likha
while($row = mysqli_fetch_array($result))
  {
  
  $a[$row['id']]=array($row['name'],$row['x'],$row['y']);
  }
#ab pura table aa gaya $a me. $a ko ab photo.js ke function(data) ko bhejna h so echo karenge
echo json_encode($a);
	
	//mysqli_close($con);	
	
?>