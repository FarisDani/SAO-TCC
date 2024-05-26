<?php
    session_start();
    if (empty($_SESSION['id'])) {
        header("location: login.php?status=notlogin");
    }
    $hapus=$_POST['id'];
    $tabel=$_POST['program'];
    $jenis=$_POST['jenis'];
    $connect = new mysqli('34.101.187.105', 'root', '', 'sao');
    if($hapus==0){
        $query = mysqli_query($connect, "INSERT INTO $tabel VALUES (NULL, '$jenis')");
    }else{
        $query = mysqli_query($connect, "DELETE FROM $tabel WHERE id=$hapus");
    }
    if($query){
        header("location: admin.php");
    }
    
?>