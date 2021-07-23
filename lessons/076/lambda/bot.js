const security = require('../security');

const signingSecret = "";

const verify = (event, callback) => {
    console.log("testing: verify");
    // if (data.token === VERIFICATION_TOKEN) callback(null, data.challenge);
    if (security.validateSlackRequest(event)) callback(null, data.challenge);
    else callback("verification failed");
}

exports.handler = (event, context, callback) => {
    const body = JSON.parse(event.body);
    switch (body.type) {
        case "url_verification": verify(body, callback); break;
        default: callback(null);
    }
};
