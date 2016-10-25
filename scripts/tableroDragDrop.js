$(document).ready(function() {

    $("#backlog").sortable({ //inicio sortable
		connectWith: "#pendiente, #proceso, #finalizada",
		receive: function(event, ui) { //inicio receive
			var id = $(ui.item).attr('id');
			var estado = this.id;
			$.ajax({ //inicio ajax
			   url: "ajax/conexion-multiple.ajax.php",
			   type: "GET",
			   data: {
				'id': id,
				'estado': estado
				},
			}); //fin ajax
		}, //fin receive
	}); //fin sortable

    $("#pendiente").sortable({ //inicio sortable
		connectWith: "#backlog, #proceso, #finalizada",
		receive: function(event, ui) { //inicio receive
            var id = $(ui.item).attr('id');
			var estado = this.id;
			$.ajax({ //inicio ajax
			   url: "ajax/conexion-multiple.ajax.php",
			   type: "GET",
			   data: {
				'id': id,
				'estado': estado
				},
			}); //fin ajax
		}, //fin receive
	}); //fin sortable

    $("#proceso").sortable({ //inicio sortable
		connectWith: "#pendiente, #backlog, #finalizada",
		receive: function(event, ui) { //inicio receive
            var id = $(ui.item).attr('id');
			var estado = this.id;
			$.ajax({ //inicio ajax
			   url: "ajax/conexion-multiple.ajax.php",
			   type: "GET",
			   data: {
				'id': id,
				'estado': estado
				},
			}); //fin ajax
		}, //fin receive
	}); //fin sortable

    $("#finalizada").sortable({ //inicio sortable
		connectWith: "#pendiente, #proceso, #backlog",
		receive: function(event, ui) { //inicio receive
            var id = $(ui.item).attr('id');
			var estado = this.id;
			$.ajax({ //inicio ajax
			   url: "ajax/conexion-multiple.ajax.php",
			   type: "GET",
			   data: {
				'id': id,
				'estado': estado
				},
			}); //fin ajax
		}, //fin receive
	}); //fin sortable


    //Para los efectos de drag and drop
    $('li').on('mousedown', function() {
		$(this).css(
			{
				'backgroundColor' : 'black',
				'color' : 'white'
			}
		);
	}).on('mouseup', function() {
		$('li').css(
			{
				'backgroundColor' : '',
				'color' : ''
			}
		)
	});

    function testAjax() {
        return $.ajax({
        url: "getvalue.php"
    });
    }

    //Al  hacer doble click sobre las tareas se despliega su detalle
    $('.tarea').on('dblclick',function(){
        $.get("ajax/detalle-tarea.ajax.php",function(data){
            alert(data);
        });
    })
});
