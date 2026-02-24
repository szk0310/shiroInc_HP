<?php
// reCAPTCHAのシークレットキー
$secretKey = '6LcWEXEnAAAAAPMKOQXGOHegkJOx2xmYXu5BsHBP';

// トークンの検証
$recaptchaToken = $_POST['recaptcha_token'];
$recaptchaResponse = file_get_contents('https://www.google.com/recaptcha/api/siteverify?secret=' . $secretKey . '&response=' . $recaptchaToken);
$recaptchaData = json_decode($recaptchaResponse);

// 検証結果の確認
if ($recaptchaData->success) {
	// reCAPTCHAが成功した場合の処理
	//	echo '成功'.$recaptchaData->score;

	$url = 'https://go.shiro-k.jp/l/942883/2023-07-11/2fy9mv';
	$data = [];

	// $dataに送るデータを詰めます。
	$data['company'] = trim($_REQUEST['company']);
	$data['name'] = trim($_REQUEST['name']);
	$data['email'] = trim($_REQUEST['email']);
	// 送信データをURLエンコード
	$data = http_build_query($data, "", "&");

	// curlを初期化
	$ch = curl_init();

	// 設定!
	curl_setopt($ch, CURLOPT_URL, $url); // 送り先
	curl_setopt($ch, CURLOPT_POST, true); // POSTです
	curl_setopt($ch, CURLOPT_POSTFIELDS, $data); // 送信データ
	curl_setopt($ch, CURLOPT_RETURNTRANSFER, true); // 実行結果取得の設定

	// 実行！
	$output = curl_exec($ch);

	header('Location:https://go.shiro-k.jp/thanks/');
	exit();
} else {
	// reCAPTCHAが失敗した場合の処理
	header('Location:https://go.shiro-k.jp/');
	exit();
}
?>
