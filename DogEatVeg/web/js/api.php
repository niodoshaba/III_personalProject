<?php 

try{

require_once("mysql_connect.php");

$userId = $_GET['userId'];
$userPsw = $_GET['userPsw'];

$sql = "SELECT cus_name, cus_phone
        FROM  `dogeatveg`
        WHERE cus_id = `$userId` AND cus_password = `$userPsw`
        ";
$customApi = $pdo->prepare($sql);
$customApi->execute();

if( $customApi->rowCount()==0){ //查無此人
    echo "沒這人";
}else{ //登入成功
  //自資料庫中取回資料
  $customInfo = array();
  while($customRow = $customApi->fetch(PDO::FETCH_ASSOC)){ 
    $customInfo[] = $customRow;
  }

  echo json_encode($customInfo);
}

}catch(PDOException $e){
  echo "錯誤行號", $e->getLine(), "<br>";
  echo "錯誤原因", $e->getMessage();
}


// echo "登入成功";


?>