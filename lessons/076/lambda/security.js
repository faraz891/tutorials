const crypto = require("crypto");

exports.validateSlackRequest = (event, signingSecret) => {
    const requestBody = event["body"];
    const timestamp = event["headers"]["x-slack-request-timestamp"];
    const baseString = 'v0:' + timestamp + ':' + requestBody;

    const hmac = crypto.createHmac("sha256", signingSecret)
        .update(baseString)
        .digest("hex");
    const slackSignature = "v0=" + hmac;
    const isValid = slackSignature === event["headers"]["x-slack-signature"];

    return isValid;
};
