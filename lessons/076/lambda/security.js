const crypto = require("crypto");

exports.validateSlackRequest = (event, signingSecret) => {
    const requestBody = event["body"];
    const timestamp = event["headers"]["x-slack-request-timestamp"];
    const slackSignature = event["headers"]["x-slack-signature"];
    const baseString = 'v0:' + timestamp + ':' + requestBody;

    const hmac = crypto.createHmac("sha256", signingSecret)
        .update(baseString)
        .digest("hex");
    const computedSlackSignature = "v0=" + hmac;

    // Debug
    console.log(`slack signature: ${slackSignature}`);
    console.log(`computed slack signature: ${computedSlackSignature}`);

    const isValid = computedSlackSignature === slackSignature;

    return isValid;
};
