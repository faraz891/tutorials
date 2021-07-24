var AWS = require('aws-sdk');

AWS.config.update({ region: 'us-east-1' });

var ddb = new AWS.DynamoDB({ apiVersion: '2012-08-10' });

exports.saveItem = (item) => {
    var params = {
        TableName: 'todos',
        Item: {
            'item': { S: item },
        }
    };
    ddb.putItem(params, function (err, data) {
        if (err) {
            console.error("Error", err);
        } else {
            console.log("Success", data);
        }
    });
};
