<?php
$your_lastname = trim($_REQUEST['your-lastname']);
$your_firstname = trim($_REQUEST['your-firstname']);
$name = trim($_REQUEST['your-lastname'])." ".trim($_REQUEST['your-firstname']);
$your_email = trim($_REQUEST['your-email']);
$your_tel = trim($_REQUEST['your-tel']);
$your_company = trim($_REQUEST['your-company']);
$goods = trim($_REQUEST['goods']);

mb_language("Japanese");
mb_internal_encoding("UTF-8");


$subject  = "お見積り依頼がありました";
//メール本文
$body = "お見積り依頼フォームよりお問合せがありました。\n\n";
$body .= "下記内容でお見積り依頼を受け付けました。\n\n";
$body .= "・会社名：";
$body .= urldecode(htmlspecialchars($your_company,  ENT_QUOTES))."\n\n";
$body .= "・お名前：";
$body .= urldecode(htmlspecialchars($name,  ENT_QUOTES))."\n\n";
$body .= "・メールアドレス：";
$body .= urldecode(htmlspecialchars($your_email,  ENT_QUOTES))."\n\n";
$body .= "・電話番号：";
$body .= urldecode(htmlspecialchars($your_tel,  ENT_QUOTES))."\n\n";
$body .= "・機種--------------\n";
$body .= urldecode(htmlspecialchars($goods,  ENT_QUOTES))."\n";
$body .= "-----------------------------------\n\n\n";

//メール送信
if (mb_send_mail("moon@3botan.com", $subject, $body, "From: info@knk-k.jp")) {
  echo "メールが送信されました。";
} else {
  echo "メールの送信に失敗しました。";
}

$go_curl = '';
$data = [];
$url = 'https://go.pardot.com/l/1031411/2023-06-04/6mt';

// 送信データの準備
$data['your-lastname'] = $your_lastname;
$data['your_firstname'] = $your_firstname;
$data['your_email'] = $your_email;
$data['your_tel'] = $your_tel;
$data['your_company'] = $your_company;
$data['goods'] = $goods;

// 送信データをURLエンコードと文字コードエンコード
$data = mb_convert_encoding($data, "UTF-8", "auto");
$data = http_build_query($data, "", "&");
// curlを初期化
$ch = curl_init();
// 設定!
curl_setopt($ch, CURLOPT_URL, $url); // 送り先
curl_setopt($ch, CURLOPT_POST, true); // POST
curl_setopt($ch, CURLOPT_POSTFIELDS, $data); // 送信データ
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true); // 実行結果取得の設定
// 実行！
//$output = curl_exec($ch);

header('Location: thanks.html');
exit();
?>