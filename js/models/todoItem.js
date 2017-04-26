//model for to do list
//all this class does, is focus on the model.. it knows nothing of the view
var TodoItem = Backbone.Model.extend({
  defaults:{
    completed:false
  },
  ///this has to be urlRoot, otherwise it will throw 404 errors in your face .
urlRoot:"http://jsonplaceholder.typicode.com/todos",

validate:function(attrs){
  if(!attrs.title)
  return "Title is required"
},
toggle: function(){
  //updates state of the model!!! checkbox uses this to set/unset 'checked'

  this.set("completed", !this.get("completed"));
}
});
