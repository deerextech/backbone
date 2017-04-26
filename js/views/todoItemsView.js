//view for collection

var TodoItemsView = Backbone.View.extend({

initialize:function(options){
  if(!(options && options.model))
  throw new Error("model is not specified.");

  //listening for add event of collection.
  this.model.on("add", this.onAddTodoItem, this);
  //subscribe to remove event
  this.model.on("remove", this.onRemoveTodoItem, this);
},
events:{
  "click #add" : "onClickAdd",
  "keypress #newTodoItem": "onKeyPress",
  "click #delete": "onClickDelete"
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
    var todoItem = new TodoItem({title: this.$($textBox).val()});
  }
  // The following 3 lines are for adding a static item... won't need that soon, but keep reference here, just in case
  //when button is clicked, add static item
  // //will need listener to update actual list on webpage
  // var todoItem = new TodoItem({title:"new item"});

  this.model.create(todoItem);
  //long way {
  //todoItem.save();
  //will instruct view to add item in initalize..
  // this.model.add(todoItem); }

  //clear textbox
  this.$($textBox).val("");
},
onKeyPress: function(e){
  //key code 13 references Enter key
  if(e.keyCode ==13)
//don't forget to
  this.onClickAdd();
},
onRemoveTodoItem: function(todoItem){
  console.log('to do', todoItem);
  // console.log('was it actually removed tho', DOM)
  //take id from todoItem & use it to find and remove right li

  // target li & it's todo item, with todoItem's unique id
  this.$("li#" + todoItem.id).remove();
},
render:function(){
  //need to make a reference for 'this' because its context is going to change inside the item map. #javascriptNinja
  var self = this;

  //
  this.$el.append("<input type='text' autofocus id='newTodoItem'></input")

  this.$el.append("<button id='add'>Add</button>");

  this.model.each(function(todoItem){
    var view = new TodoItemView({model: todoItem});
    //uncomment following 2 lines to see the self v. this in action
    // console.log('this keyword', this);
    // console.log('self variable', self);
    self.$el.append(view.render().$el);

  });

  return this;
}
});
