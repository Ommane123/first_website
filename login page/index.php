<?php 
  session_start(); 

  if (!isset($_SESSION['username'])) {
  	$_SESSION['msg'] = "You must log in first";
  	header('location: login.php');
  }
  if (isset($_GET['logout'])) {
  	session_destroy();
  	unset($_SESSION['username']);
  	header("location: login.php");
  }
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Download Page</title>
    <!--Fav Icon-->
    <link rel="shortcut icon" href="img/fav.png" type="image/x-icon">
    <!--Link to CSS-->
    <link rel="stylesheet" href="css/style.css">
    <!--Box Icon-->
    <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'>
    <!-- Swiper CSS File Link -->
    <link rel="stylesheet" href="css/swiper-bundle.min.css">
</head>
<body>
    <!-- Custom Scrollbar -->
    <div class="progress">
        <div class="progress-bar" id="scroll-bar"></div>
    </div>
    <!--header-->
    <header>
        <!--Nav-->
        <div class="nav container">
            <!-- Logo-->
            <a href="index.html" class="logo">Game<span>Store</span></a>
            <!-- Nav Icon -->
            <div class="nav-icons">
                <i class='bx bx-bell bx-tada' id="bell-icon"><span></span></i>
                <i class='bx bxs-download'></i>
                <div class="menu-icon">
                    <div class="line1"></div>
                    <div class="line2"></div>
                    <div class="line3"></div>
                </div>
            </div>
        <!-- Menu -->
            <div class="menu">
                <img src="img/menu.png" alt="">
                <div class="navbar">
                    <li><a href="index.html">Home</a></li>
                    <li><a href="#trending">Trending</a></li>
                    <li><a href="#new">New Games</a></li>
                    <li><a href="#action">Action Games</a></li>
                    <li><a href="#contact">Contact Us</a></li>
                </div>
            </div>
            
</div>

</body>
</html>