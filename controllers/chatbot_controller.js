require('dotenv').config();

var builder = require('botbuilder');
const Wit = require('node-wit').Wit;

// Setup Wit Client
const client = new Wit({accessToken: process.env.WIT_ACCESS_TOKEN});

// Create chat connector for communicating with the Bot Framework Service
var connector = new builder.ChatConnector({
    appId: process.env.MICROSOFT_APP_ID,
    appPassword: process.env.MICROSOFT_APP_PASSWORD
});

exports.process_new_message = function(req, res) {
  res.send('not implemented yet');
}

// Receive messages from the user and respond.
var bot = new builder.UniversalBot(connector, function (session) {
    console.log("you said: " , session.message.text);
    client.message(session.message.text, {})
        .then((data) => {
            session.send(JSON.stringify(data));
        })
        .catch(console.error);
});
