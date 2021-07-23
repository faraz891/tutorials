const crypto = require("crypto");

exports.validateSlackRequest = (event, signingSecret) => {
    const requestBody = event["body"]
    const timestamp = event["headers"]["x-slack-request-timestamp"]
    const baseString = 'v0:' + timestamp + ':' + requestBody

    const result = crypto.createHmac("sha256", signingSecret)
    .update(baseString)
    .digest("hex");

    return "v0=" + result;
};
