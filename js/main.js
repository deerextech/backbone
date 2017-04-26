$(document).ready(function(){

// for rendering single toDO.
  // var todoItems = new TodoItems();
  // var todoItem = new TodoItem({description: "todo 1"});
  // var todoItemView = new TodoItemView({model: todoItem})

//getting view to render list of models aka the collection model ^.^
var todoItems = new TodoItems([
  new TodoItem({description:"To Do 1"}),
  new TodoItem({description:"To Do 2"}),
  new TodoItem({description:"To Do 3"}),
  new TodoItem({description:"To Do 4"}),
  new TodoItem({description:"To Do 5"})
]);
//pass to view
var todoItemsView = new TodoItemsView({model: todoItems});

//don't forget to add s to items now.
  $("body").append(todoItemsView.render().$el);

});
