//model for to do list
//all this class does, is focus on the model.. it knows nothing of the view
var TodoItem = Backbone.Model.extend({
validate:function(attrs){
  if(!attrs.description)
  return "description is required"
}
});
