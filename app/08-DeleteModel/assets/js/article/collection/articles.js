var app = app || {};

app.ArticleCollection = Backbone.Collection.extend({
	model : app.ArticleModel,

	initialize: function() {
    this.fetchAllArticles()
  },

  fetchAllArticles: function () {
  	this.fetch();
  },
  
  url: function() {
    return '/articles'
  }
});



