var PersonModel = Backbone.Model.extend({
  defaults: {
    name: null
  }
});

var badGuy = new PersonModel({name: 'oddjob'});
console.log(badGuy);

var greetingTemplate = _.template(
  "<h1>Hey there, <%= name %></h1>"
);
console.log(greetingTemplate(badGuy.toJSON()));

$(document).ready(function () {
  $('body').append(greetingTemplate(badGuy.toJSON()));
})
