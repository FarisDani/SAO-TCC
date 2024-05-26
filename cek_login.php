<?php
    session_start();
    $username=$_POST['id'];
    $password=$_POST['pw'];
    $connect = new mysqli('34.101.187.105', 'root', '', 'sao');
    $query = mysqli_query($connect, "SELECT * from admin where id='$username' AND password='$password'");
    $data=mysqli_num_rows($query);
    if($data>0){
        $_SESSION['id']=$username;
        header("location: admin.php");
    }else{
        header("location: login.php?status=failed");
    }
?>