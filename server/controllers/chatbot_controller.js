require('dotenv').config();

const builder = require('botbuilder');
// Create chat connector for communicating with the Bot Framework Service
const connector = new builder.ChatConnector({
    appId: process.env.MICROSOFT_APP_ID,
    appPassword: process.env.MICROSOFT_APP_PASSWORD
});

// Receive messages from the user and respond.
var bot = new builder.UniversalBot(connector, function (session) {
    console.log("you said: " , session.message.text);
    session.send("Hallo, ik ben Alfred. Wat kan ik voor je doen?");
});

const WitRecognizer = require('botbuilder-wit');
const recognizer = new WitRecognizer(process.env.WIT_ACCESS_TOKEN);


exports.process_new_message = connector.listen();
