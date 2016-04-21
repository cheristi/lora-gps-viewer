var express = require("express");
var RestClient = require('node-rest-client').Client;
var handlebars = require('express-handlebars');

var app = express();
app.engine('.html', handlebars({extname: '.html', partialsDir: './src/views/'}));
app.set('view engine', '.html');

var options_proxy = {
	proxy: {
		host: 'proxy.ch11.emea.corp.ads',
		port: 8080
	}
};
var api_key = 'AIzaSyC_b5Ilid1ew72Y7TDjS1G1zIhz3MJcG00';
var client = new RestClient(options_proxy); //just omit the options_proxy if you don't need a proxy...
app.get("/:id",function (req,res)
    {
        urlString = 'http://thethingsnetwork.org/api/v0/nodes/'+req.params.id+'/?format=json'; //, 5A480123

        client.get(urlString, function (data, response) {
        	// parsed response body as js object
          res.render("index", { layout: false, zoom:zoom, lora_data: data, api_key: api_key});
        });

        zoom = 13;
      // now we use the templating capabilities of express and call our template to render the view, and pass a few parameters to it
      });

app.listen(9999);
