//model view
//view is focused on changes of todoItem model
// is interested in changes in model & refreshes itself automatically
//handles events raised by DOM
// This view will not know anything about adding items to list



var TodoItemView = Backbone.View.extend({
  //probably could use a tagName, ya know?
  tagName:"li",


  initialize:function(options){
    if(!(options && options.model))
    //if model isn't passed to a view, this error will be thrown
    throw new Error("model is not specified");

//subscribe to change event on model
    this.model.on("change", this.render,this);
  },
  events:{
    "click #toggle":"onClickToggle"
  },
  onClickToggle: function(){
    //moved logic to todoItem model, so it can decide what to do with itself, instead of the view.

    this.model.toggle();
    // console.log('i clicked')
  },
  render:function(){

    this.$el.attr("id", this.model.id);
    this.$el.toggleClass("completed", this.model.get("completed"));
    var checked = this.model.get("completed") ? "checked":"";

    this.$el.html("<input id='toggle' type='checkbox' " + checked + "/> " + this.model.escape("description"))
    // this.$el.html(this.model.escape("description"));
    return this;
  }
})
