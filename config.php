<?php
	$website="https://ssubielo.github.io";
	$uid="u-s4t2ud-4f0e0b8033a2729e298eca567f7d9f8ae5b43838b3c335497b7d533acd800d32";
	$secret="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";

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
