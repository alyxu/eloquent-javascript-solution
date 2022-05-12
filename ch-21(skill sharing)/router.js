/*
A GET request to /talks returns a JSON document like this:
[{"title": "Unituning",
"presenter": "Jamal",
"summary": "Modifying your cycle for extra style", "comments": []}]


 PUT /talks/How%20to%20Idle HTTP/1.1
 Content-Type: application/json
 Content-Length: 92
{"presenter": "Maureen",
"summary": "Standing still on a unicycle"}
*/

const {parse} = require("url");
 module.exports = class Router {
   constructor() {
     this.routes = [];
   }
   add(method, url, handler) {
     this.routes.push({method, url, handler});
   }
   resolve(context, request) {
     let path = parse(request.url).pathname;
     for (let {method, url, handler} of this.routes) {
       let match = url.exec(path);
       if (!match || request.method != method) continue;
       let urlParts = match.slice(1).map(decodeURIComponent);
       return handler(context, ...urlParts, request);
}
     return null;
   }
};

