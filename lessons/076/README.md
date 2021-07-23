# How to Build Slack Bot? (Node JS | AWS Lambda & DynamoDB - AWS Serverless)

[YouTube Tutorial]()

https://api.slack.com/bot-users
https://api.slack.com/authentication/basics


https://slack.dev/node-slack-sdk/tutorials/local-development
Developing Slack apps locally

https://ngrok.com/

ngrok http 5000

https://slack.dev/bolt-js/tutorial/getting-started
https://github.com/slackapi/bolt-js

mkdir serverless-bot
cd serverless-bot
npm init

https://superuser.com/questions/212150/how-to-set-env-variable-in-windows-cmd-line/212153#212153

export SLACK_SIGNING_SECRET=0f65198107b93895c006844624725c24
export SLACK_BOT_TOKEN=xoxb-1494779483671-2326236521328-V2s5AG7rqbBLwTeGMldA5odK

npm install @slack/bolt

https://53a9ba02d950.ngrok.io/slack/events


https://api.slack.com/tutorials/events-api-using-aws-lambda

```
npm install --save-dev jest
```

## 2. Build
```
docker build -t 424432388155.dkr.ecr.us-east-1.amazonaws.com/bot:v1.0.0 .
docker push 424432388155.dkr.ecr.us-east-1.amazonaws.com/bot:v1.0.0
```

Signing secrets: https://api.slack.com/authentication/verifying-requests-from-slack
Features: https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-vs-rest.html
Cost: https://aws.amazon.com/about-aws/whats-new/2019/12/amazon-api-gateway-offers-faster-cheaper-simpler-apis-using-http-apis-preview/
Validating Library for Node: https://nodejs.org/api/crypto.html#crypto_crypto_createhmac_algorithm_key_options
Verify Requst from Slack: https://api.slack.com/authentication/verifying-requests-from-slack
chat.postMessage: https://api.slack.com/methods/chat.postMessage

## Clean Up
- Delete ngrok
- Delete ECR `bot`
- Delete IAM User `admin`
- Delete docker images `docker rm -vf $(docker ps -a -q) && docker rmi -f $(docker images -a -q)`