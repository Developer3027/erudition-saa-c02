---
title: 'Serverless'
excerpt: 'Serverless, Lambda, Container, Kubernetes, EKS, Fargate'
link: 'https://acloudguru.com/course/aws-certified-solutions-architect-associate-saa-c02'
---

# Serverless Overview

What is serverless? History lesson - We used to have data centers which were warehouses of servers. A server was a computer that allowed networking and storing of data. Then came Virtualization and now we can have one computer running many different operating systems. This gave birth to the Cloud so that now, we can dump the physical hardware and rent or purchase compute virtually. With Serverless, we can focus on the code required. The Operating System and all the hardware for storage, memory, and networking is handled by who cares, you are just wanting your code to run.

Easy to use - you just being the code. Everything else is hand led by AWS

Event Based - compute resources can be brought online in response to an event

Billing Model - "Pay as you go". You only pay for your provisioned resources and the length of runtime.

## Lambda
A serverless compute service that lets you run code without provisioning or managing the underlying servers. It's like you're running code without computers.

5 steps to setting up a Lambda Function
1) Runtime
   1) What environment will the function run in? Better yet, what language is the code written in? Do you need Node, Java?
2) Permissions
   1) If you are making a AWS API call, then you need a role attached. 
3) Networking
   1) You may want to talk or interact with protected endpoints. If so you need to define the VPC, subnet, and security groups the function is part of.
   2) Refer to Permissions
4) Resources
   1) Define the amount of resources, memory, cpu, and ram your code gets. The less resources and the quicker your code completes, the less money you pay.
5) Trigger
   1) What alerts the function. It it will hang out until it is called. No trigger, the function never runs.

Lambda has limitations. From 128MB to 10GB of memory and 15 min running. Any more then Lambda is not gonna work.

Lambda excels in running small lightweight functions. **Microservices**.

Plays a major role in the AWS ecosystem and easily integrates with many services.

In general, if it can be done automatically or by flipping a switch, Lambda can use that as a trigger.

# Container Overview
A container is a standard unit of software that packages up code and all its dependencies, so the application runs quickly and reliably from one computing environment to another.

*What is the difference between containers and virtual machines?*

Spinning up a virtual machine uses a hypervisor to run the various Operating Systems. Containers can run in any Operating System. So instead of using resources from many different OS, containers use the resources of just one.

How to make a container
* Dockerfile is a text document that contains all the commands or instructions that will be used to build the image.
* Image is a immutable file that contains the code, libraries, dependencies and config files needed to run a application.
* Registry stores docker images for distribution. They can be both private and public.
* Container is a running copy of the image that has been created.

## ECS - Elastic Container Service

Managed container service by AWS. Integrates native with load balancers. Security is simple with roles. Very easy to use. Built by AWS for AWS.

Preferred method for test unless it asks for a on prem or open source solution. In that case think EKS

## Kubernetes

Open source container service originally built by google. Can run on nearly anything. Will work on prem and AWS but not as easy as ECS 

## EKS - Elastic Kubernetes Service

Kubernetes built by AWS so not as much work as plain Kubernetes.

## Fargate

A serverless compute engine for containers that works with both ECS and EKS. AWS runs and manages infrastructure. Requires ECS or EKS. Not for windows

### Compare EC2 / Fargate

EC2
* Responsible for the os
* EC2 Pricing model
* _Long-running containers_
* Multiple containers share same host

Fargate
* No os
* Pay for resources and time ran
* _Short-running tasks_
* Isolated environments

### Compare Fargate / Lambda
Fargate
* Fargate when you have more consistent workloads
* Allows Docker use across the org and a greater level of control by dev's

Lambda
* Great for unpredictable or inconsistent workloads
* Perfect for apps that can be expressed as a single function

### Lambda is for light weight functions that integrate easily with AWS.
### Fargate is for containers that do not need to run all the time.
### EC2 is for containers that run all the time and worried about cost.

## Event Bridge - CloudWatch Events

A serverless event bus. It allows you to pass events from a source to an endpoint. It's the glue that holds a serverless app together. In short, it says "hey this thing happened so I can do that thing". Any API call that happens in AWS can alert a Lambda function, or a variety of different endpoints, that something happened.

### Steps to creating a Rule
1) Define pattern - Should the rule be invoked based on an event or should it be scheduled.
2) Select Event Bus - AWS-based event? Custom event? Partner?
3) Select Target - What happens when event kicks off? Trigger Lambda function, SQS que, send email?
4) Tag - Tag everything
5) Sit Back - wait for the event or kick it off for test.

### Things to remember
* Lambda loves roles - if your talking about credentials and Lambda, ensure you're attaching roles.
* Be Familiar with Lambda Triggers. Know that S3, Kinesis, and EventBridge are common triggers.
* Know Lambda Limits - 10 GB RAM and 15 min run time.
* Any AWS API call can be triggered to kick off an EventBridge rule, and much faster than trying to scrape through CloudTrail.
* Open source = Kubernetes. Container on prem through AWS, EKS
* Fargate can not work without ECS or EKS
* Containers are flexible - favor using containers rather than EC2 on exam.
* Know the basics - good to know how to start a dockerfile, build a image, upload to repo, run on host.

## Exam tips
* Is the application right for containers? Is a microservice?
* Do you need those servers?
* Is the application AWS specific?
* How long does the code need to run?
