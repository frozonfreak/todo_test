
define(['jquery','backbone', 'collections/todos', 'app'], function($, Backbone, todos, app) {

  	var TodoRouter = Backbone.Router.extend({
		routes: {
			'*filter': 'setFilter'
		},

		setFilter: function (param) {
			// Set the current filter to be used
			app.TodoFilter = param || '';
			// Trigger a collection filter event, causing hiding/unhiding
			// of Todo view items
			todos.trigger('filter');
		}
	});

	return TodoRouter;
 });