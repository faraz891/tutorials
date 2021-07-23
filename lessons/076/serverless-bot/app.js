const { App } = require('@slack/bolt');

const app = new App({
  token: process.env.SLACK_BOT_TOKEN,
  signingSecret: process.env.SLACK_SIGNING_SECRET
});

app.message(async ({ message, say }) => {
  console.log(message)
  const reversedText = [...message.text].reverse().join("");
  await say(reversedText);
});


app.event('app_mention', async ({ event, say }) => {
  console.log(event)
  await say("asd")
});

(async () => {
  await app.start(process.env.PORT || 5000);

  console.log('Serverless Bolt is running!');
})();