const AWS = require('aws-sdk');
const { v4: uuidv4 } = require('uuid');

AWS.config.update({ region: 'us-east-1' });

var ddb = new AWS.DynamoDB({ apiVersion: '2012-08-10' });

exports.saveItem = (item, callback) => {
    var params = {
        TableName: 'todos',
        Item: {
            'uuid': { S: uuidv4() },
            'item': { S: item }
        }
    };
    ddb.putItem(params, (err, data) => {
        if (err) {
            callback(new Error(err));
        } else {
            callback(null, "success");
        }
    });
};
