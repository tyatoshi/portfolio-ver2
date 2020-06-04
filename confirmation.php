<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>satoshi@portfolio</title>
  <meta name="description" content="satoshiのポートフォリオです。">
  <meta name="keywords" content="Ruby, Web, デザイン, デザイナー, ポートフォリオ, Web制作">
  <link rel="stylesheet" href="css/portfolio.css">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.0.0/animate.min.css" />
  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css">
</head>
 
<body>
  <div class="page">
    <h2>問合せ内容</h2>    
    <form action="mailto.php" method="post">
    <table border="1">
    <tr>
    <td>名前</td>
    <td><?php echo $_POST["name"]; ?></td>
    </tr>
    <tr>
    <td>メールアドレス</td>
    <td><?php echo $_POST["mail"]; ?></td>
    </tr>
    <tr>
    <td>問い合わせ内容</td>
    <td><?php echo $_POST["inquiry"]; ?></td>
    </tr>
    </table>
 
    <input type="submit" value="送信" />
    </form>

   </div>
</body>
    
</html>