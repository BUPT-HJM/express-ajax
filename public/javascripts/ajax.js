
$('.ajax').on('click', function(event) {
	event.preventDefault();
	$.ajax({
		url: '/ajax',
		type: 'get',
		dataType: 'json',
		success:function(data){
			$('#ajax').html(data.tips);
		},
		error:function(data){
			alert('error');
		}
	});

});