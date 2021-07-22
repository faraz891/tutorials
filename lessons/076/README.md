# How to Build Slack Bot? (Node JS | AWS Lambda & DynamoDB - AWS Serverless)

[YouTube Tutorial]()

https://api.slack.com/bot-users
https://api.slack.com/authentication/basics


https://slack.dev/node-slack-sdk/tutorials/local-development
Developing Slack apps locally

https://ngrok.com/

ngrok http 5000

https://slack.dev/bolt-js/tutorial/getting-started
https://github.com/slackapi/bolt-js

mkdir serverless-bot
cd serverless-bot
npm init

https://superuser.com/questions/212150/how-to-set-env-variable-in-windows-cmd-line/212153#212153

export SLACK_SIGNING_SECRET=0f65198107b93895c006844624725c24
export SLACK_BOT_TOKEN=xoxb-1494779483671-2326236521328-V2s5AG7rqbBLwTeGMldA5odK

npm install @slack/bolt

https://53a9ba02d950.ngrok.io/slack/events



// Listen for an event from the Events API
app.event(eventType, fn);

// Convenience method to listen to only `message` events using a string or RegExp
app.message([pattern ,] fn);

// Listen for an action from a Block Kit element (buttons, select menus, date pickers, etc)
app.action(actionId, fn);

// Listen for dialog submissions
app.action({ callback_id: callbackId }, fn);

// Listen for a global or message shortcuts
app.shortcut(callbackId, fn);

// Listen for slash commands
app.command(commandName, fn);

// Listen for view_submission modal events
app.view(callbackId, fn);

// Listen for options requests (from select menus with an external data source)
app.options(actionId, fn);
