function createPartners() {
	return $('<div/>', {'class': 'list__item'})
		.append($('<img/>', {'src': 'img/epic-logo.png'}));
};

function createGallery() {
	return $('<div/>', {'class': 'gallery__item'})
		.append($('<img/>', {'src': 'img/rooms.jpg'}))
		.append($('<span/>').text('Квартира-студия'))
		.append($('<span/>').text('Однокомнатная квартира-студия, 50м², возле станции метро «Выхино». Цена 10 000 000 рублей.'))
};

function renderPartners() {
	for (var i = 0; i < 12; i++) {
		$('.partners').find('.list').append(createPartners());
	}
};

function renderGallery() {
	for (var i = 0; i < 8; i++) {
		$('.gallery').append(createGallery());
	}
};

$(function() {
	renderGallery();
	renderPartners();
	$()
});


