<?php

include 'queries.php';
include 'connection.php';

$conn = Connexion::dbConnect();

$info_query = new CRUD($conn);

$fetchinfo = $info_query->fetchInfo();
if(!isset($fetchinfo)){
	echo "cannot fetch info";
}

//ajax controller
if(!isset($_POST['action']))
{
	return $fetchinfo = $info_query->fetchInfo();
}


switch($_POST['action']){
	case 'edit_info':
		echo json_encode(editInfo($_POST));
	break;
	case 'delete_info':
	 echo json_encode(deleteInfo($_POST));
	 break;
	case 'create_info':
		echo json_encode(createInfo($_POST));
	break;
	default:
		echo "no action sent";
		break;
	}


//ajax function

function editInfo($post){
	global $info_query;

	$updateinfo = $info_query->update($post);

}

function deleteInfo($post){

	global $info_query;

	$id = $post['pt_id'];

	$deleteinfo = $info_query->deleteBy($id);

}

function createInfo($post){
	global $info_query;

	$createinfo = $info_query->createNew($post);
}
