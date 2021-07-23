const axios = require('axios');
const security = require('./security');

const signingSecret = process.env.SLACK_SIGNING_SECRET;
const token = process.env.SLACK_BOT_TOKEN;

const processAppMention = (body, callback) => {
    const message = {
        token: token,
        channel: body.channel,
        text: "ura!!! :)"
    };
    axios({
        method: 'post',
        url: 'https://slack.com/api/chat.postMessage',
        headers: { 'Content-Type': 'application/json' },
        data: message
    })
        .then(function (response) {
            console.debug("responce from slack:", response);
            callback(null);
        })
        .catch(function (error) {
            console.error(error);
            callback("failed to process app_mention");
        });
};

const processRequest = (body, callback) => {
    switch (body.event.type) {
        case "app_mention": processAppMention(body, callback); break;
        default: callback(null);
    }
};

exports.handler = (event, context, callback) => {
    console.debug("slack request event:", event);

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
