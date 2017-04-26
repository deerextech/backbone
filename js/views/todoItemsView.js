//view for collection

var TodoItemsView = Backbone.View.extend({
render:function(){
  //need to make a reference for 'this' because its context is going to change inside the item map. #javascriptNinja
  var self = this;

  this.model.each(function(todoItem){
    var view = new TodoItemView({model: todoItem});
    //see, the self refers to model
    console.log('this keyword', this);
    console.log('self variable', self); 
    self.$el.append(view.render().$el);
  });

  return this;
}
});
