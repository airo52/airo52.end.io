<?php
include 'connection.php';
$control=$_POST['control'];

switch($control){
    case 'Login':
       $email    = mysqli_real_escape_string($con,$_POST['email']);
       $password =mysqli_real_escape_string($con,$_POST['password']);


       $query = mysqli_query($con,"SELECT * FROM user WHERE email='".$email."'");
       $check = mysqli_num_rows($query);
       if($check !==0){
       
        $row = mysqli_fetch_assoc($query);
        if($row['password']===md5($password)){
            session_start();
            $_SESSION['id'] = $row['id'];
        echo '3';
        }else{
                 echo '2';
             }
       
    }else{
        echo '1';
    } 
    break;
    case 'check':
        session_start();
        $ID = $_SESSION['id'];
        $query = mysqli_query($con,"SELECT * FROM user WHERE id='".$ID."'");
        $check = mysqli_num_rows($query);
        if($check !==0){
        $row= mysqli_fetch_assoc($query);
        echo json_encode($row);
             }else{
                 echo 'no';
             }
    break; 
    
    
    case 'check1':
        session_start();
        $ID = $_SESSION['id'];
        $query = mysqli_query($con,"SELECT * FROM user WHERE id='".$ID."'");
        $check = mysqli_num_rows($query);
        if($check !==0){
        $row= mysqli_fetch_assoc($query);
       echo  json_encode($row);
             }else{
                 echo 'no';
             }
    break;  
    case 'contact':
        $ID = $_POST['id'];
        $sql = "update `contact` set status='1' WHERE id='".$ID."'";
        if($con->query($sql)){
           
        $query = mysqli_query($con,"SELECT * FROM contact WHERE id='".$ID."'");
        $row = mysqli_fetch_assoc($query);
        echo json_encode($row);
        }else{
            echo 'failed';
        }
        



    break;  
    case 'contactss':
       
       $name = mysqli_real_escape_string($con,$_POST['fullName']);
       $email = mysqli_real_escape_string($con,$_POST['email']);
       $message = mysqli_real_escape_string($con,$_POST['message']);
       $telphone = mysqli_real_escape_string($con,$_POST['telephone']);
       $query="INSERT INTO contact(username,email,phone,message,status) VALUES ('$name','$email','$telphone','$message','0')";

       //$query="INSERT INTO `contact` (username,email,phone,message,status) VALUES ('$name','$email','$telphone','0')";
       if($con->query($query)){
           echo 'YOUR MESSAGE IS SENT';
          //echo $message;
       }else{
           echo 'failed';
       }



    break;  


    case 'update1':
        session_start();
        $ID = $_SESSION['id'];
        $oldPass = mysqli_real_escape_string($con,$_POST['oldPass']);
        $newPass = mysqli_real_escape_string($con,$_POST['newPass']);
        $username = mysqli_real_escape_string($con,$_POST['username']);
        $email = mysqli_real_escape_string($con,$_POST['email']);
          $query = mysqli_query($con,"SELECT * FROM user WHERE id='".$ID."'");
          $row=mysqli_fetch_assoc($query);
          if($row['password'] === md5($oldPass)){
            $sql = "update `user` set email='".$email."' WHERE id='".$ID."'";
            $sql2 = "update `user` set password='".md5($newPass)."' WHERE id='".$ID."'";
            $sql3 = "update `user` set username='".$username."' WHERE id='".$ID."'";

            if($con->query($sql)){
            if($con->query($sql2)){
            if($con->query($sql3)){  
                echo 'update succesfull';
            } else{
                echo 'failed3';
            }

            }else{
                echo 'failed2';
            }
               // echo 'updated';
            }else{
                echo 'failed1';
            }


          }else{
              echo 'your old password dint match';
          }

        break;
    case 'update2':
        session_start();
        $ID = $_SESSION['id'];
        $username = mysqli_real_escape_string($con,$_POST['username']);
        $email = mysqli_real_escape_string($con,$_POST['email']);
        $sql = "update `user` set email='".$email."' WHERE id='".$ID."'";
        if($con->query($sql)){
        $sql2 = "update `user` set username='".$username."' WHERE id='".$ID."'";
        if($con->query($sql2)){
        echo 'updated'; 
        }
           // echo 'updated';
        }else{
            echo 'failed';
        }
    break;
    case 'contacts':
        $query = mysqli_query($con,"SELECT * FROM contact WHERE status='0'");
        $check = mysqli_num_rows($query);
        if($check !==0){
        $list = '<div>';
        while($row = mysqli_fetch_assoc($query)){
             $id=$row['id'];
             $message = $row['message'];
           $list.='<div onclick="read('.$id.')"  id="'.$id.'" class="alert alert-info alert-with-icon" data-notify="container">';
        
        
           $list.= "<span data-notify='icon' class='pe-7s-bell'></span>";
            $list.="<span data-notify='message' id='message3'>$message</span>";
            $list.="</div>";

      }
      $list.='</div>';

      echo $list;
    }else{
        echo '<center><h4>No notifictation</h4></center>';
    }
        

    break;  
    case 'logout':
    
      session_start();
      unset($_SESSION['id']);
      session_unset();
      echo 'ok';

    break;
}







?>