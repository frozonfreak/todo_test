
define(['jquery','backbone', 'collections/todos'], function($, Backbone, todos) {
  	var TodoRouter = Backbone.Router.extend({
		routes: {
			'*filter': 'setFilter'
		},

		setFilter: function (param) {
			// Set the current filter to be used
			var TodoFilter = param || '';

			// Trigger a collection filter event, causing hiding/unhiding
			// of Todo view items
			todos.filterAll;
		}
	});

	var TodoRouter = new TodoRouter();
	Backbone.history.start();
 });