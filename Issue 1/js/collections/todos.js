
define(['underscore', 'backbone', 'backbone.localStorage', 'models/todo'], function(_, Backbone, BackboneLocalStorage, Todo) {
	 var Todos = Backbone.Collection.extend({
	   localStorage: new BackboneLocalStorage('todos-backbone'),
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
		},
		//Get length of existing array
		getlength: function(){
			return this.length;
		},
		//Get the specific child to delete
		getChild: function(){
			return this(function(todo){
				return todo.all();
			});
		}
	 });
	
	return new Todos();
});