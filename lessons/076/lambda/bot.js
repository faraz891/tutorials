const axios = require('axios');
const security = require('./security');

const signingSecret = process.env.SLACK_SIGNING_SECRET;
const token = process.env.SLACK_BOT_TOKEN;

const verify = (event, callback) => {
    const body = JSON.parse(event.body);
    console.log("request body:", body)

    if (security.validateSlackRequest(event, signingSecret)) callback(null, body.challenge);
    else callback("verification failed");
};

const processAppMention = (body, callback) => {
    if (security.validateSlackRequest(body, signingSecret)) {
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
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });

        callback(null);
    }
    else callback("verification failed");
}

exports.handler = (event, context, callback) => {
    console.log("slack request event:", event);
    const body = JSON.parse(event.body);

    switch (body.type) {
        case "url_verification": verify(event, callback); break;
        case "app_mention": processAppMention(body, callback); break;
        // case "message": processMessage(event, callback); break;
        default: callback(null);
    }
};
