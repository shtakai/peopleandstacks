var PersonModel = Backbone.Model.extend({
  defaults: {
    name: null
  }
});

var PersonView = Backbone.View.extend({
  tagName: 'li',
  template: _.template('<h1><%= name %></h1>'),
  render: function(){
    this.$el.html(this.template(this.model.toJSON()));
    $('.people').append(this.$el);
  },
  initialize: function () {
    this.render();
  }
});


var sashimi1 = new PersonModel({ name: 'Sashimi Udon 1' });
var sashimi2 = new PersonModel({ name: 'Sashimi Udon 2' });
var sashimi3 = new PersonModel({ name: 'Sashimi Udon 3' });
var sashimi4 = new PersonModel({ name: 'Sashimi Udon 4' });
var sashimi5 = new PersonModel({ name: 'Sashimi Udon 5' });

var sashimi1View = new PersonView({ model: sashimi1 });
var sashimi2View = new PersonView({ model: sashimi2 });
var sashimi3View = new PersonView({ model: sashimi3 });
var sashimi4View = new PersonView({ model: sashimi4 });
var sashimi5View = new PersonView({ model: sashimi5 });

var StackModel = Backbone.Model.extend({
  defaults: {
    name: null
  }
});

var StackView = Backbone.View.extend({
  tagName: 'li',
   template: _.template('<div><h2><%= name %></h2></div>'),
   render: function () {
     this.$el.html(this.template(this.model.toJSON()));
     $('.stacks').append(this.$el);
   },
   initialize: function()  {
     this.render();
   }
});

var language1 = new StackModel({ name: 'ruby' });
var language2 = new StackModel({ name: 'python' });
var language3 = new StackModel({ name: 'ada' });
var language4 = new StackModel({ name: 'eiffel' });
var language6 = new StackModel({ name: 'Visual Basic' });
var language5 = new StackModel({ name: 'Japanese Basic' });
var language7 = new StackModel({ name: 'Cisco IOS' });

var languageView1 = new StackView({ model: language1 });
var languageView2 = new StackView({ model: language3 });
var languageView3 = new StackView({ model: language3 });
var languageView4 = new StackView({ model: language4 });
var languageView5 = new StackView({ model: language5 });
var languageView6 = new StackView({ model: language6 });
var languageView7 = new StackView({ model: language7 });

