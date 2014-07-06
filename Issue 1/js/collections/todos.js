
define(['underscore', 'backbone', 'backbone.localStorage', 'models/todo' ,'app'], function(_, Backbone, BackboneLocalStorage, Todo, app) {
	 var Todos = Backbone.Collection.extend({
	   localStorage: new Backbone.LocalStorage('todos-backbone'),
	   model: Todo,
	   completed: function() {
	     return this.filter(function (todo) {
				return todo.get('completed');
			});
	   },
	   remaining: function() {
	     if (!this.length) {
				return 1;
			}
			return this.last().get('order') + 1;
	   },
	   nextOrder: function () {
			if (!this.length) {
				return 1;
			}
			return this.last().get('order') + 1;
		},
		comparator: function (todo) {
			return todo.get('order');
		}
	 });
	
	app.todos = new Todos();
});