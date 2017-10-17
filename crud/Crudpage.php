<?php
 	include 'controller.php'
	?>

<html>
	<body>
    <button id="create" class="create">CREATE NEW INFO</button>
		 <table>
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
			<tr	class="info-row">
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
		$("body").on("click", "#btn_info", function(){

			var info_row = $(this).parents(".info-row");

			var info_id = info_row.find("#id").text();
			var info_title = info_row.find("#title").text();
			var info_date = info_row.find("#date").text();
			var info_message = info_row.find("#message").text();

			var markupEdit = "<table><tr><th>id</th><th>title</th><th>date</th><th>message</th></tr>" +
														"<tr><td><input id='id_val' type='text' value='"+ info_id + "'/></td><td><input id='title_val' type='text' value='" + info_title + "'/></td><td><input id='date_val' type='text' value='" + info_date + "'/></td><td><input id='message_val' type='text' value='" + info_message + "'/></td></tr></table>" +
														"<button id='edit'>Edit</button><button id='delete'>Delete</button>";

			$("#fixed-panel").html(markupEdit);
		});

		$("body").on("click", "#edit", function(){
			object = {
				"action" : "edit_info",
				"pt_id" : $("#id_val").val(),
				"pt_title" : $("#title_val").val(),
				"pt_date"  : $("#date_val").val(),
				"pt_message" : $("#message_val").val()
			}

			$.post('controller.php', object);
		});

    $("body").on("click", "#delete", function(){

      if(confirm("Delete?")){

        object = {
          "action" : "delete_info",
          "pt_id" : $("#id_val").val(),
        }

        $.post('controller.php', object);

      }else{
        console.log("aborted");
      }
		});

    markupCreate = "<td>---</td><td><input type='text' id='create_title'/></td><td><input type='text' id='create_date'/></td><td><input type='text' id='create_message'/></td><td><button id='confirm_create'>Confirm new info</button>";


    $("body").on("click", ".create", function(){
      $("#create_div").prepend(markupCreate);
      $(this).removeClass("create");
    });

    $("body").on("click", "#confirm_create", function(){

      var new_info = $(this).parents("#create_div");

      var create_title = new_info.find("#create_title").val();
      var create_date = new_info.find("#create_date").val();
      var create_message = new_info.find("#create_message").val();

      object = {
        "action" : "create_info",
        "pt_title" : create_title,
        "pt_date" : create_date,
        "pt_message" : create_message
      }

      $.post("controller.php", object);

      console.log("info created");
      $("#create_div").empty();
      $("#create").addClass("create");
    });

	</script>
</html>
