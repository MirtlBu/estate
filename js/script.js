function createTemplate() {
	return $('<div/>', {'class': 'list__item'})
		.append($('<img/>', {'src': 'img/epic-logo.png'}));
}

$(function() {
	for (var i = 0; i < 12; i++) {
		$('.partners').find('.list').append(createTemplate());
	}
})