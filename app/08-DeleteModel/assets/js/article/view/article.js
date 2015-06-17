var app = app || {};

app.ArticleView = Backbone.View.extend({
  el: 'section div',
  template : _.template("<a class='list-group-item active'> <h4 class='list-group-item-heading'> <%=title%> </h4> <p class='list-group-item-text'> <%=content%> </p> <p id=<%=_id%> name='delete' style='cursor:pointer;' class='list-group-item-text'>delete</p> </a><br>"),

  events:{
    "click [name='delete']":"deleteArticle"
  },

  deleteArticle: function (e) {
    var articleId = e.target.id;
    this.model.removeArticle(articleId);
  },
  initialize: function () {
    this.model = new app.ArticleModel();
    this.collection = new app.ArticleCollection();
    this.listenTo(this.collection,'sync', this.render);
    this.listenTo(this.collection,'error', this.error);
    this.listenTo(this.model,'destroy', this.fetchArticles);
  }, 

  fetchArticles: function () {
    this.collection.fetchAllArticles();
  },
  
  render: function () {
    this.$el.html('')
    _.each(this.collection.models, function (model) {
      this.$el.append(this.template(model.toJSON()))
    }.bind(this));
  },

  error: function (data) {
    this.$('.error').text("Could not get the articles")
  }
});
