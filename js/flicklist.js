
var api = {
  root: "https://api.themoviedb.org/3",
  token: "50fa0b2623e5e2a9dfd28e354b414ad9"
}

var flicklistView = new Vue({
	el: '#mount-target',
	data: function() {
		return {
			// This is the data model.
			// Whenever it changes, Vue will automatically re-render
			// the html for us.
			watchlistItems: [],
			browseItems: [],
			query: '',
      // TODO 8B
		};
	},
	methods: {
		checkAdded: function(movie){
			console.log(this.watchlistItems.includes(movie))
			return this.watchlistItems.includes(movie)

		},
		discoverMovies: function () {
			/**
			 * Makes an AJAX request to themoviedb.org, asking for some movies
			 * if successful, updates the data.browseItems appropriately
			 */

			fetch(`${api.root}/discover/movie?api_key=${api.token}`)
					.then(resp => resp.ok ? resp.json() : Promise.reject(resp))
					.then((response) => {
						console.log("We got a response from The Movie DB!");
						console.log(response);

						this.browseItems = response.results;

					});
    },
    searchMovies: function(searchTerm) {
			alert('poop')
			alert(searchTerm)
      // Make an AJAX request to the /search/movie endpoint
      // of the API, using the query string that was passed in.
      //
      // if successful, update this.browseItems appropriately.
			// This update will automatically trigger a re-render.
			this.browseItems = []
			for (var x = 0; x < this.watchlistItems.length; x++){
				browseItems.push(this.watchListItems[x])


			}
			console.log('searching for movies with '+searchTerm+' in their title...');

      // TODO 9
      // implement this function as described in the comment above
      // you can use the body of discoverMovies as a jumping off point
    },
		addToWatchlist: function(movie) {
			this.watchlistItems.push(movie.title);
		},
	},
	mounted: function () {
		this.discoverMovies();
	},
});
