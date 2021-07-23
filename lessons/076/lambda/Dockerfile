FROM public.ecr.aws/lambda/nodejs:14

COPY bot.js security.js package*.json  /var/task/

RUN npm ci --production

CMD [ "bot.handler" ]
