const crypto = require("crypto");


const result = crypto.createHmac("sha256", "0726fa5c951306c31fbe0c329d2ce736")
  .update('v0:1626992929:' + '{"token":"UdG3UFNsPGoobvRzK5F2oIqe","challenge":"6KaNtlamllYYaLZ7qhHxZbzyYut62TlDKu2wAZXp4rZlInRbcDTH","type":"url_verification"}')
  .digest("hex");

console.log(result);
