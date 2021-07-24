const axios = require('axios');
const security = require('./security');
const db = require('./db');

const signingSecret = process.env.SLACK_SIGNING_SECRET;
const token = process.env.SLACK_BOT_TOKEN;

const processAppMention = (body, callback) => {
    const item = body.event.text.split(":").pop().trim();
    db.saveItem(item, (error, result) => {
        if (error !== null) {
            callback(error)
        } else {
            const message = {
                channel: body.event.channel,
                text: `Item: \`${item}\` is saved to *Amazon DynamoDB*!`
            };
            axios({
                method: 'post',
                url: 'https://slack.com/api/chat.postMessage',
                headers: { 'Content-Type': 'application/json; charset=utf-8', 'Authorization': `Bearer ${token}` },
                data: message
            })
                .then((response) => {
                    callback(null);
                })
                .catch((error) => {
                    callback("failed to process app_mention");
                });
        }
    });
};

const processMessages = (body, callback) => {
    console.debug("message:", body.event.text)
    callback(null)
};

const processRequest = (body, callback) => {
    switch (body.event.type) {
        case "app_mention": processAppMention(body, callback); break;
        case "message": processMessages(body, callback); break;
        default: callback(null);
    }
};

exports.handler = (event, context, callback) => {
    console.debug("slack request event:\n", event);

    if (security.validateSlackRequest(event, signingSecret)) {
        const body = JSON.parse(event.body);
        switch (body.type) {
            case "url_verification": callback(null, body.challenge); break;
            case "event_callback": processRequest(body, callback); break;
            default: callback(null);
        }
    }
    else callback("verification failed");
};
