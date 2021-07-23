const https = require('https')
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
        const message = JSON.stringify({
            token: token,
            channel: body.channel,
            text: "ura!!! :)"
        });

        const options = {
            hostname: 'slack.com',
            port: 443,
            path: '/api/chat.postMessage',
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            }
        }

        const req = https.request(options, res => {
            console.log(`statusCode: ${res.statusCode}`)

            res.on('data', d => {
                process.stdout.write(d)
            })
        })

        req.on('error', error => {
            console.error(error)
        })

        req.write(data)
        req.end()
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
