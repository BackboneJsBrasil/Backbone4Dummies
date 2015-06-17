var app = app || {};

app.ArticleModel = Backbone.Model.extend({
  defaults: {
    title:   'No title',
    content: 'No content'
  },
  url: function() {
    return '/article/' + this.get('id');
  },
  removeArticle: function (id) {
  	this.set("id",id);
  	this.destroy(id);
  }
});
