//view for collection

var TodoItemsView = Backbone.View.extend({

tagName:"ul",
id:"todoItems",
initialize:function(options){
  if(!(options && options.model))
  throw new Error("model is not specified.");

  //listening for add event of collection.
  this.model.on("add", this.onAddTodoItem, this);
},
events:{
  "click #add" : "onClickAdd"
},
onAddTodoItem: function(todoItem){
  //targeting todoItem model, because it is a single to do item, not the whole collection.
  //remember it by just thinking about how it's a new list item. li
  // not a whole collection of thangs.

  var view = new TodoItemView({model:todoItem});
  this.$el.append(view.render().$el);

},
onClickAdd: function(e){
  var $textBox = this.$("#newTodoItem");
  //check for empty values
  if($textBox.val()){
    //if value, add it
    var todoItem = new TodoItem({description: this.$($textBox).val()});
  }
  // The following 3 lines are for adding a static item... won't need that soon, but keep reference here, just in case
  //when button is clicked, add static item
  // //will need listener to update actual list on webpage
  // var todoItem = new TodoItem({description:"new item"});



  //will instruct view to add item in initalize..
  this.model.add(todoItem);

  //clear textbox
  this.$($textBox).val("");
},
render:function(){
  //need to make a reference for 'this' because its context is going to change inside the item map. #javascriptNinja
  var self = this;

  //
  this.$el.append("<input type='text' autofocus id='newTodoItem'></input")

  this.$el.append("<button id='add'>Add</button>");

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
