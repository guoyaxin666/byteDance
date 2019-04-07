<?php 
header("content-type:text/html;charset=utf-8");
$dbhost="localhost";
$dbname="root";
$dbpwd="";
$con=mysqli_connect($dbhost,$dbname,$dbpwd);
if (!$con) {
	die("连接数据库失败".mysqli_error($con));
}
mysqli_select_db($con,"cangku");
mysqli_set_charset($con,"utf8");
$queryStr="SELECT * FROM xiaoyuanzhaopin";
$state=mysqli_query($con,$queryStr);
if (!$state) {
	die("数据库查询失败".mysqli_error($con));
}
$data=array();
while ($row=mysqli_fetch_assoc($state)) {
	$data[]=$row;
}
$jsonStr=json_encode(array(
	"resultCode"=>200,
	"message"=>"查询成功",
	"data"=>$data
),JSON_UNESCAPED_UNICODE);
echo $jsonStr;
mysqli_close($con);
 ?>