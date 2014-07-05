define(['underscore', 'backbone', 'backbone.localStorage'], function(_, Backbone, BackboneLocalStorage) {
	var Todo = Backbone.Model.extend({
		defaults: {
		  title: '',
		  completed: false
		},
		toggle: function () {
			this.save({
				completed: !this.get('completed')
			});
		}
	});
	return {
    Model: Todo
  };
});