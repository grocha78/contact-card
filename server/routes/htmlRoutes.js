const path = require('path');

module.exports = function(app) {
    app.get('/', function(req, rees) {
        res.sendFile(path.join(__dirname, '../../client/index.html'));
    });
};