const security = require('./security');

const signingSecret = process.env.SLACK_SIGNING_SECRET;
const token = process.env.SLACK_BOT_TOKEN;

const verify = (event, callback) => {
    console.log("testing: verify");
    const body = JSON.parse(event.body);
    if (security.validateSlackRequest(event, signingSecret)) callback(null, body.challenge);
    else callback("verification failed");
};

exports.handler = (event, context, callback) => {
    switch (body.type) {
        case "url_verification": verify(event, callback); break;
        default: callback(null);
    }
};
