//model view
//view is focused on changes of todoItem model
// is interested in changes in model & refreshes itself automatically
//handles events raised by DOM
// This view will not know anything about adding items to list



var TodoItemView = Backbone.View.extend({

  initialize:function(options){
    if(!(options && options.model))
    //if model isn't passed to a view, this error will be thrown
    throw new Error("model is not specified");


  },
  render:function(){
    this.$el.html(this.model.get("description"));
    return this;
  }
})
