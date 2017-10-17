<?php

	Class CRUD {

		public function __construct($conn)
	    {
			$this->conn = $conn;
	    }

		function fetchInfo(){

			$query = "SELECT * FROM practice";

			$stmt = $this->conn->prepare($query);

			if(!$stmt->execute()){ exit(); };

			$info = $stmt;

			return $info;

		}

		function update($arr){
			$values = "";

			$id = $arr['pt_id'];

			unset($arr['action']);

			$keys = array_keys($arr);

			$index = count($arr);

			for($i = 0; $i < $index; $i++){
				//sorting out the key
				$key = $keys[$i];
				//binding it with a equal sign
				$key_string = $key ." = ";
				//preparing syntax for query
				if($i != $index - 1){
					$values .=  $key_string . "'" . $arr[$key] . "', ";
				}
				else{
					$values .=  $key_string . "'" . $arr[$key] . "'";
				}
			}

			$query = "UPDATE practice	SET $values WHERE pt_id= $id";

			$stmt = $this->conn->prepare($query);

			if(!$stmt->execute()){ exit();
		}
	}

	function deleteBy($id){

		$query = "DELETE FROM practice WHERE pt_id= $id";

		$stmt = $this->conn->prepare($query);

		if(!$stmt){ exit(); }

	}
}
