---
title: 'Decoupling Workflows'
excerpt: 'Decoupling is the way. SQS, SNS, Dead letter queues'
link: 'https://acloudguru.com/course/aws-certified-solutions-architect-associate-saa-c02'
---

## tightly coupled

Tightly coupling is the actions where the client or end user directly connects to a single ec2 for the frontend the connects directly to the ec2 instance of the backend.

This is never a good idea because if one fails, then the whole site fails.

## loosely coupled

Loosely coupled is the actions where the client or end user connects to the app via a load balancer that will connect to a healthy ec2 instance and the same for the backend.

This way if a instance or region fails, you are still up and running.

## SQS - Simple Que Service

_** Know what the different settings are and do **_

Service works async, like a post man. Frontend generates a message for the backend, sqs can take that message and hold it until the backend calls for it or needs it.

SQS settings

- Delivery Delay; default is 0. Can be set up to 15 min
- Message can be any format but size is up to kb, no larger.
- Encryption in transit, you can add at-rest encryption
- Message Retention by default is 4 days. can be between 1 min and 14 days.
- Short polling is bad, Long polling is not default but better for low cpu cycles, calls, etc. Save money with long polling.
- Queue Depth, can be triggered with autoscaling.
- Visibility Timeout. default is 30 sec. Backend asks for the data and gets it from the sqs. It can process that request and get back to sqs that it is done. Developer will then delete the message. Once the backend says I have it and begins to work on it, sqs hides it so other process or other servers can not see it. If it does not get a reply that the work is done and it can delete the message, it will return it to the que, not delete it.

### DLC - Dead Letter Que

If a message can not be handled by the sqs, then you can set up a dlc that is really just another sqs. The default for the number of tries before sending to dlc is 10 tries. Remember to set up CloudWatch alarm to watch ques depth. Monitor of the sqs and dlc are important.

With standard sqs ordering you get Best-Effort Ordering, may get duplicate messages, nearly unlimited transaction per second. You can opt for **FIFO** ordering of massages out of the que which is First In First Out. With FIFO you get guaranteed ordering, no duplicates but limited to 300 messages per second.

**SNS**

Simple Notification Service
SNS is a push-based messaging service. It will proactively deliver messages to the endpoints subscribed to it. This can be used to alert a system or a person.
_If you see "Alert" on exam, think SNS_

**SNS Settings**

Subscribers

- Kinesis Data Firehose, SQS, Lambda, email, HTTP(s), SMS, platform application endpoint.
- Message Size - kb any format
- DLQ - if messages fail or have trouble
- FIFO or standard - FIFO only supprts SQS as a subscridbe
- Encryption -no at rest by default
- Access Policy - like S3.

CloundWatch and SNS. The easiest way to alert that something happened.

What is the difference between SNS and SES. In general,question will point to SNS.

Only HTTP(s) will retry to send a notification.

### API Gateway

Amazon API Gateway is a fully managed service that allows you to easily publish, create, maintain, monitor and secure your API. It allows you to put a safe "front door" on your app.

- can protect appapi endpoints with (WAF) Web Application Firewall
- stop abuse with dDoS protection and rate limit, etc.
- Easy to use
- allows for versioning.
- No needed for backed in creds in your code.
