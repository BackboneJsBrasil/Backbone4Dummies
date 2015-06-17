var path          = require("path");

function setup(app) {

  app.get('/:exampleName', function (request, response) {
    response.sendFile(path.join(__dirname + '/../app/'+request.params.exampleName+'/index.html'));
  });
}
 
exports.setup = setup;
