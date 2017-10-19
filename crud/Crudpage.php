<?php
 	include 'controller.php'
	?>

<html>
	<body>
    <div id="error-message" style="height: 78px; color: red"><?php echo $error = "" ?></div>
    <button id="create" class="create">CREATE NEW INFO</button>
		 <table id="table-info">
			 <tr>
				 <th>
					 id
				</th>
				<th>
					title
				</th>
				<th>
					date
				</th>
				<th>
					message
				</th>
			</tr>
      <tr id="create_div"></tr>
			<?php foreach($fetchinfo as $i) { ?>
			<tr	id="row-<?php echo $i['pt_id']; ?>"class="info-row">
					<td id="id"><?php echo $i['pt_id']; ?></td>
					<td id="title"><?php echo $i['pt_title']; ?></td >
					<td id="date"><?php echo $i['pt_date'];?></td>
					<td id="message"><?php echo $i['pt_message']; ?></td>
					<td>
							<button id="btn_info" >Modify</button>
					</td>
			</tr>
		<?php } ?>
		</table>

		<div id="fixed-panel" style="position: fixed; right: 20%"></div>
	</body>
	<script src="https://code.jquery.com/jquery-3.2.1.min.js"
	             integrity="sha256-hwg4gsxgFZhOsEEamdOYGBf13FyQuiTwlAQgxVSNgt4="
	             crossorigin="anonymous" type="text/javascript"></script>
	<script>

var error = $("#error-message");

$("body").on("click", "#btn_info", function(){
  //select the current row wich modify button is bound with it
	var info_row = $(this).parents(".info-row");

	var info_id = info_row.find("#id").text();
	var info_title = info_row.find("#title").text();
	var info_date = info_row.find("#date").text();
	var info_message = info_row.find("#message").text();
  //create input table to edit and delete the selected info
	var markupEdit = "<table><tr><th>title</th><th>date</th><th>message</th></tr>" +
												"<input id='id_val' type='hidden' value='"+ info_id +"'/>"+
                        "<tr><td><input id='title_val' type='text' value='" + info_title + "'/></td>" +
                        "<td><input id='date_val' type='date' value='" + info_date + "'/></td>" +
                        "<td><input id='message_val' type='text' value='" + info_message + "'/></td></tr></table>" +
												"<button id='edit'>Edit</button><button id='delete'>Delete</button>";

	$("#fixed-panel").html(markupEdit);
});
//create object to send it to database
$("body").on("click", "#edit", function(){
  var title = $("#title_val");
  var date = $("#date_val");
  var message = $("#message_val");

  if(title.val() == ""){

    error.text("please enter a title name.");
    title.css("border-color", "red");

  }else if(date.val() == ""){

    error.text("please choose a valid date.");
    date.css("border-color", "red");

  } else if(message.val() == "")
  {
    error.text("please enter a message.");
    message.css("border-color", "red");
  }else{
    //clear errors
    error.text("");
    title.css("border", "1px solid gray");
    date.css("border", "1px solid gray");
    message.css("border", "1px solid gray");

    object = {
    	"action" : "edit_info",
    	"pt_id" : $("#id_val").val(),
    	"pt_title" : title.val(),
    	"pt_date"  : date.val(),
    	"pt_message" : message.val()
    }

    $.post('controller.php', object, function(data){
        // callback info to update the page with ajax
        var row_id = data.pt_id;
        row_title = $("#row-" + row_id).children("#title");
        row_date = $("#row-" + row_id).children("#date");
        row_message = $("#row-" + row_id).children("#message");
        row_title.text(data.pt_title);
        row_date.text(data.pt_date);
        row_message.text(data.pt_message);

    }, "json");
  }
});

$("body").on("click", "#delete", function(){
  //send an alert to prevent misclicked
  if(confirm("Delete?")){
    object = {
      "action" : "delete_info",
      "pt_id" : $("#id_val").val(),
    }

    $.post('controller.php', object,function(data){
      var row_id = data.pt_id;
      $("#row-" + row_id).remove();
    },"json");

  }else{
    console.log("aborted");
  }
});

//prepare new line to create info
$("body").on("click", ".create", function(){
  markupCreate = "<td>---</td><td><input type='text' id='create_title'/></td>"+
                  "<td><input type='date' id='create_date'/></td>"+
                  "<td><input type='text' id='create_message'/></td>"+
                  "<td><button id='confirm_create'>Confirm new info</button>";
  $("#create_div").prepend(markupCreate);
  $(this).removeClass("create");
});

$("body").on("click", "#confirm_create", function(){
  //retreive value to create new info
  new_info = $(this).parents("#create_div");
  create_title = new_info.find("#create_title");
  create_date = new_info.find("#create_date");
  create_message = new_info.find("#create_message");

  if(create_title.val() == ""){

    error.text("please enter a title name.");
    create_title.css("border-color", "red");

  }else if(create_date.val() == ""){

    error.text("please choose a valid date.");
    create_date.css("border-color", "red");

  } else if(create_message.val() == "")
  {
    error.text("please enter a message.");
    create_message.css("border-color", "red");

  }else{

    error.text("");
    create_title.css("border", "1px solid gray");
    create_date.css("border", "1px solid gray");
    create_message.css("border", "1px solid gray");

    object = {
      "action" : "create_info",
      "pt_title" : create_title.val(),
      "pt_date" : create_date.val(),
      "pt_message" : create_message.val()
    }

    $.post("controller.php", object, function(data){
      //append the new info in ajax
      var newInfo_markup = "<tr	id='row-"+ data.pt_id+"' class='info-row'>" +
          "<td id='id'>"+ data.pt_id +"</td>" +
          "<td id='title'>"+ data.pt_title+"</td>" +
          "<td id='date'>"+ data.pt_date +"</td>" +
          "<td id='message'>"+ data.pt_message +"</td>" +
          "<td><button id='btn_info'>Modify</button></td></tr>"

      $("#table-info").append(newInfo_markup);

    },"json");

    console.log("info created");
    $("#create_div").empty();
    $("#create").addClass("create");
  }
});


	</script>
</html>
