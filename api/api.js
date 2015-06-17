var article 		= require('./model/article')

function setup(app) {
  app.post('*/article',function (request,response) {
		article.save(request,response);
  });
  app.put('/article', function () {
		//TODO
	});
	app.delete('/article/:id', function (request, response) {
		article.deleteArticle(request, response);
	});
	app.get('*/article/:id', function (request,response) {
		article.getById(request, response);
	});
	app.get('*/articles',function(request, response){
		article.getAll(request, response);
	});
}
 
exports.setup = setup;