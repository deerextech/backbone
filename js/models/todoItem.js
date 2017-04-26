//model for to do list
//all this class does, is focus on the model.. it knows nothing of the view
var TodoItem = Backbone.Model.extend({
  defaults:{
    completed: false
  },
  urlRoot:"https://jsonplaceholder.typicode.com/todos",
  validation: function(attrs){
      if(!attrs.title)
      return "Title is required.";
  },
  toggle: function(){
    //updates state of the model!!! checkbox uses this to set/unset 'checked'
    this.set("completed", !this.get("completed"));
  }
});
