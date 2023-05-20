<?php
	$website="http://localhost";
	$uid="";
	$secret="";

	$after_auth="{$website}/token.php";
	$index="{$website}/index.php";
	$logout="{$website}/logout.php";
	$auth = "https://api.intra.42.fr/oauth/authorize?client_id={$uid}&redirect_uri={$after_auth}&response_type=code";

	function api_req($url_api)
	{
		global $logout;

		$url = "https://api.intra.42.fr{$url_api}";

		$curl = curl_init($url);
		curl_setopt($curl, CURLOPT_URL, $url);
		curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);

		$headers = array(
		   "Authorization: Bearer {$_SESSION['token']}"
		);
		curl_setopt($curl, CURLOPT_HTTPHEADER, $headers);

		curl_setopt($curl, CURLOPT_SSL_VERIFYHOST, false);
		curl_setopt($curl, CURLOPT_SSL_VERIFYPEER, false);

		$resp = curl_exec($curl);
		curl_close($curl);

		$data = json_decode($resp);
		if (isset($data->message) && $data->message == "The access token expired")
		{
			header('Location: '.$logout);
			exit();
		}
		return ($data);
	}

?>
