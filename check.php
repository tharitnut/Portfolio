<?php
session_start();

// ตรวจสอบว่ามีการส่งข้อมูลรหัสผ่านและชื่อผู้ใช้หรือไม่
if(isset($_POST['username']) && isset($_POST['password'])) {
    $conn = new mysqli('localhost', 'username', 'password', 'database');

    if($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }

    // ใช้ mysql_real_escape_string เพื่อป้องกันการ injection
    $username = $conn->real_escape_string($_POST['username']);
    $password = $conn->real_escape_string($_POST['password']);

    // เรียกใช้ฟังก์ชัน hash เพื่อเข้ารหัสรหัสผ่าน
    $hashed_password = md5($password);

    $sql = "SELECT * FROM users WHERE username='$username' AND password='$hashed_password'";
    $result = $conn->query($sql);

    if($result->num_rows > 0) {
        // ถ้าเข้าสู่ระบบได้ให้สร้าง session และ Redirect ไปยังหน้า home.php
        $_SESSION['username'] = $username;
        header("Location: home.php");
        exit();
    } else {
        // ถ้าไม่สามารถเข้าสู่ระบบได้ให้ Redirect กลับไปยังหน้า login.php
        header("Location: login.php");
        exit();
    }

    $conn->close();
} else {
    // ถ้าไม่มีการส่งข้อมูล username และ password ให้ Redirect กลับไปยังหน้า login.php
    header("Location: login.php");
    exit();
}
?>