$(document).ready(function() {
		$('#modalData').on('show.bs.modal',function (event) {
			console.log('sdgsdgd');
			var button = $(event.relatedTarget);
			var recip = button.data('whatever');
			var modal = $(this);
			modal.find('.modal-title').text('New message '+ recip);
			modal.find('.modal-body input').val(recip);
		})
		$('#modalData').on('hide.bs.modal',function(event){
			alert("you are closing model");
		})
		$('#modalData').on('hidden.bs.modal',function(event){
			alert('you closed your modal');
		})


		$('button[data-target="#myModal"]').on('click',function(){
			$('#myModal').modal({
				keyboard: false,
				backdrop: false
			});
		});
	});
