const https = require('https'),
      qs = require('querystring'),
      VERIFICATION_TOKEN = "UdG3UFNsPGoobvRzK5F2oIqe";

function verify(data, callback) {
    console.log("testing: verify");
    if (data.token === VERIFICATION_TOKEN) callback(null, data.challenge);
    else callback("verification failed");   
}

exports.handler = (data, context, callback) => {
    console.log("testing");
    console.log(data);
    const body = JSON.parse(data.body)
    console.log(body)
    switch (body.type) {
        case "url_verification": verify(body, callback); break;
        default: callback(null);
    }
};
