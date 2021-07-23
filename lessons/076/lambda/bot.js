const security = require('./security');

const signingSecret = process.env.SLACK_SIGNING_SECRET;
const token = process.env.SLACK_BOT_TOKEN;

const verify = (event, callback) => {
    const body = JSON.parse(event.body);
    console.log("request body:", body)

    if (security.validateSlackRequest(event, signingSecret)) callback(null, body.challenge);
    else callback("verification failed");
};

const processEvent = (event, callback) => {
    if (!event.bot_id && /(aws|lambda)/ig.test(event.text)) {
        var text = `<@${event.user}> isn't AWS Lambda awesome?`;
        var message = {
            token: token,
            channel: event.channel,
            text: text
        };
        var query = qs.stringify(message); // prepare the querystring
        https.get(`https://slack.com/api/chat.postMessage?${query}`);
    }

    callback(null);
}

exports.handler = (event, context, callback) => {
    console.log("slack request event:", event);
    const body = JSON.parse(event.body);

    switch (body.type) {
        case "url_verification": verify(event, callback); break;
        default: callback(null);
    }
};
