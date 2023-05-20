<?php
	include_once('config.php');

	session_start();

	if (isset($_GET['code']) && empty($_SESSION['token']))
	{
		$url = "https://api.intra.42.fr/oauth/token";

		$postParams = [
			'grant_type' => "authorization_code",
			'client_id' => $uid,
			'client_secret' => $secret,
			'code' => $_GET['code'],
			'redirect_uri'=> $after_auth
		];

		$ch = curl_init();
		curl_setopt($ch, CURLOPT_URL, $url);
		curl_setopt($ch, CURLOPT_POST, 1);
		curl_setopt($ch, CURLOPT_POSTFIELDS, $postParams);
		curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
		curl_setopt($ch, CURLOPT_HTTPHEADER, array('Accept: application/json'));
		$reponse = curl_exec($ch);
		curl_close($ch);

		$data = json_decode($reponse);

		if (isset($data->access_token))
			$_SESSION['token'] = $data->access_token;
	}
	header('Location: '.$index);
	exit();
?>
