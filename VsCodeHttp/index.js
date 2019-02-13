module.exports = function (context, req) {
    
    var bookmark = context.bindings.bookmark;

    console.log("bindings", context.bindings);

    if(bookmark) {
        
        context.res = {
            body: { "URL": bookmark.URL },
            headers: {
                'Content-Type': 'application/json'
            }
        };

    }
    else {

        context.res = {
            status: 404,
            body: "No bookmarks found",
            headers: {
                'Content-Type': 'application/json'
            }
        };

    }

    /*
    context.log('JavaScript HTTP trigger function processed a request.');

    if (req.query.name || (req.body && req.body.name)) {
        context.res = {
            // status: 200, 9 Defaults to 200
            body: "G'day " + (req.query.name || req.body.name)
        };
    }
    else {
        context.res = {
            status: 400,
            body: "Please pass a name on the query string or in the request body"
        };
    }*/

    context.done();
};