/**
 * Created by sagar.gohil on 18-04-2017.
 */
var restify = require('restify');
var builder = require('botbuilder');
var dateFormat = require('dateformat');

const {Wit, log} = require('node-wit');

//=========================================================
// Bot Setup
//=========================================================

// Setup Restify Server
var server = restify.createServer();
server.listen(process.env.port || process.env.PORT || 3978, function () {
    console.log('%s listening to %s', server.name, server.url);
});

// Create chat bot
var connector = new builder.ChatConnector({
    appId: '24ac1657-cd00-4df0-9629-41a6fd555387',
    appPassword:'YxbQYBFgU01MiKJdLHgXm0R'
});
var bot = new builder.UniversalBot(connector);
server.post('/api/messages', connector.listen());

//=========================================================
// Bots Dialogs
//=========================================================

// Root dialog for entry point in application
bot.dialog('/', [
    function (session) {

        // Changes suggested by rakhi for demo 04-05-2017
        builder.Prompts.text(session,"Hi Sagar! How can i help you?");
    },
    function (session,results) {
        session.send("You Said : " + results.response);
    }
]);