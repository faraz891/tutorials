# How to Build Slack Bot? (Node JS | AWS Lambda & DynamoDB - AWS Serverless)

[YouTube Tutorial]()

Scope
- channels:history
- groups:history
- chat:write

Events:
- app_mention
- message.groups
- message.channels

Name: WALL-E
Description: Compactor robot
#233878

export SLACK_SIGNING_SECRET=0f65198107b93895c006844624725c24
export SLACK_BOT_TOKEN=xoxb-1494779483671-2326236521328-V2s5AG7rqbBLwTeGMldA5odK

npm install @slack/bolt

```
npm install --save-dev jest
```

## 2. Build
```
docker build -t 424432388155.dkr.ecr.us-east-1.amazonaws.com/wall-e:v1.0.0 .
docker push 424432388155.dkr.ecr.us-east-1.amazonaws.com/wall-e:v1.0.0
```

Basic app setup: https://api.slack.com/authentication/basics
Signing secrets: https://api.slack.com/authentication/verifying-requests-from-slack
Features: https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-vs-rest.html
Cost: https://aws.amazon.com/about-aws/whats-new/2019/12/amazon-api-gateway-offers-faster-cheaper-simpler-apis-using-http-apis-preview/
Validating Library for Node: https://nodejs.org/api/crypto.html#crypto_crypto_createhmac_algorithm_key_options
Verify Requst from Slack: https://api.slack.com/authentication/verifying-requests-from-slack
chat.postMessage: https://api.slack.com/methods/chat.postMessage
Definition of $LATEST version of AWS Lambda: https://stackoverflow.com/questions/60703463/definition-of-latest-version-of-aws-lambda
Slack Bold Node JS: https://github.com/slackapi/bolt-js

## Clean Up
- Delete ngrok
- Delete ECR `bot`
- Delete IAM User `admin`
- Delete docker images `docker rm -vf $(docker ps -a -q) && docker rmi -f $(docker images -a -q)`