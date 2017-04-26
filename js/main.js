$(document).ready(function(){

  // var todoItems = new TodoItems();
  var todoItem = new TodoItem({description: "todo 1"});
  var todoItemView = new TodoItemView({model: todoItem})
  $("body").append(todoItemView.render().$el);

});
