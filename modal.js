$(document).ready(function() {
		$('#modalData').on('show.bs.modal',function (event) {
			console.log('sdgsdgd');
			var button = $(event.relatedTarget);
			var recip = button.data('whatever');
			var modal = $(this);
			modal.find('.modal-title').text('New message '+ recip);
			modal.find('.modal-body input').val(recip);
		})

	});
