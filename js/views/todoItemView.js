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
    "click #toggle":"onClickToggle",
    "click #delete": "onClickDelete"
  },
  onClickToggle: function(){
    //moved logic to todoItem model, so it can decide what to do with itself, instead of the view.

    this.model.toggle();
    this.model.save();
    // console.log('i clicked')
  },
  onClickDelete: function(){
    // console.log('delete clicked')
      this.model.destroy();
  },
  render:function(){
    //need to get a id so delete method knows what it's removing from dom
    this.$el.attr("id", this.model.id);

    //toggleClass is a jQuery method.
    this.$el.toggleClass("completed", this.model.get("completed"));
    var checked = this.model.get("completed") ? "checked":"";

    this.$el.html("<input id='toggle' type='checkbox' " + checked + "/> " + this.model.escape("title") +" <button id='delete'>Delete</button>")
    // this.$el.html(this.model.escape("description"));
    return this;
  }
})
