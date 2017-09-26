require('dotenv').config();

const builder = require('botbuilder');
const { WitRecognizer } = require('botbuilder-wit');
// Create chat connector for communicating with the Bot Framework Service
const connector = new builder.ChatConnector({
    appId: process.env.MICROSOFT_APP_ID,
    appPassword: process.env.MICROSOFT_APP_PASSWORD
});

// Receive messages from the user and respond.
var bot = new builder.UniversalBot(connector, function (session) {
    console.log("you said: " , session.message.text);
    session.send(JSON.stringify(session.message));
});

bot.recognizer(new WitRecognizer(process.env.WIT_ACCESS_TOKEN));

bot.dialog('/verkeer', [
  function(session, args, next) {
    // Resolve and store any entities passed from LUIS.
    var intent = args.intent;
    var location = builder.EntityRecognizer.findEntity(intent.entities, 'wit/location');
    var destination = builder.dialogData.destination = {
      location: location ? location.entity : null
    };

    // Prompt for title
    if (!alarm.location) {
        builder.Prompts.text(session, 'Naar waar wil je?');
    } else {
        next();
    }
  },
  function(session, results) {
    var destination = builder.dialogData.destination;
    if(results.response) {
      destination.location = results.location;
    }

    session.endDialog('Het verkeer naar %s wordt opgezocht.', destination.location);
  }
]).triggerAction({
  matches: 'intent/verkeer',
  confirmPrompt: 'Dit is een confirmprompt'
})

bot.dialog('/')

exports.process_new_message = connector.listen();
