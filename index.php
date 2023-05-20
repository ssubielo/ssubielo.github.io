<?php
include_once('config.php');
session_start();

if (isset($_SESSION['token']) && !empty($_SESSION['token']))
{
	$data = api_req("/v2/me");
	$name = strtoupper($data->last_name) . " " . $data->first_name;
	echo($name);
	echo("<br />");
} else {
	echo("<a href=\"login.php\">Connectez-vous</a>");
}
