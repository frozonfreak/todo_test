
define(['underscore', 'backbone','models/todo' , 'collections/todos', 'views/app-view', 'views/todo-view'], function(_,Backbone,Todo, Todos, AppView, TodoView) {
	var app = app || {};
	var ENTER_KEY = 13;
	var ESC_KEY = 27;

	return {
	   AppView: AppView,
	   Todo: Todo,
	   todos: Todos,
	   TodoView: TodoView
	 };
});	