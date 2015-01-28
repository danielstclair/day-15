$(document).ready(onReady);

function onReady() {
	// 1. Event listener
	$('#search-button').on('click', onSearchButtonClick);

	function onSearchButtonClick() {
		// 1. Input value
		console.log($('#search-box').val());

		function imdbSearch(a) {
			$.get(
				'http://www.omdbapi.com/',
				{
					s: $('#search-box').val()
				},
				onSearchResults,
				'json'
			);
	}

		function tomatoMeter(x) {
			$.get(
				'http://www.omdbapi.com/',
				{
					i: x,
					tomatoes: true
				},
				onTomatoResults,
				'json'
			);
		}

		function onSearchResults(data) {
			console.log(data);
			console.log(data.Search[0].imdbID);
			for (var i = 0; i < data.Search.length; i++) {
				$('#main-data').append('<tr class = "rows" data-imdbID="' +data.Search[i].imdbID + '"><td>' + data.Search[i].Title + '</td>\
					<td>' + data.Search[i].Year + '</td></tr>');
				tomatoMeter(data.Search[i].imdbID);

			};

			// $('#button').click(function(){
			// 	// $('.want-to') = $('.rows');
			// 	console.log('hello');
			// 	$('#watch-list').append($('.want-to').checked);
			// })
				// console.log('hello');
			// 	$('#watch-list').append('.rows');
			// };

			
			$('.rows').click(function(){
				$('#watch-list').append(this);
			})
		}

		function onTomatoResults(data) {
			console.log(data);
			$('[data-imdbID="'+ data.imdbID + '"]').append('<td>' + data.Genre + '</td>');
			}



		imdbSearch();
		}
}
