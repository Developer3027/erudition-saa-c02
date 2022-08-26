---
title: 'Automation'
excerpt: 'Guru notes - Why automate, Cloudformation'
link: 'https://acloudguru.com/course/aws-certified-solutions-architect-associate-saa-c02'
---

# Automation
## Why do we automate?
Automation cuts down on mistakes being made by humans. The more you an automate, the more work you will get done.

Benefits
* Save time
* Increase Security
* Be Consistent

3 Service
* CloudFormation - allows you to provision resources quickly and consistently, and manage them throughout their life cycles, by treating infrastructure as code
* Elastic Beanstalk - Easy to use all in one service for deploying and scaling web applications and services developed with a variety of supported languages
* Systems Manager - gives you the ability to patch, update, manage, and configure your ec2 instance along with on-premise architecture

Automate everything - automation is always better than manual work

Benefits - Know that it's more reliable and faster

Tools - Know the right tool for the job

Immutable - Allows you to easily create and destroy your architecture as needed.

## CloudFormation
Step 1 (Write Code ) CloudFormation is a declarative programming language. It supports either JSON or YAML formatting

Step 2 ( Deploy your Template ) When you upload your template, CloudFormation will go through the process of making the needed AWS API calls on your behalf

parameters, questions built into the code that need to be answered. For example, set up on t2.micro

Template is stored in S3 bucket

Mappings map to resources you want set up. If the template works in the us-east-1 region but not the oregon region, add configuration to mapping

Resources are what you give the template to be able to do what it is needed to do.

Hard coded values and resource ID's can be the reason templates fail to create. If you give a IAM role or AMI policy of one region but try to build in a different, that is gonna fail

on template fail, it will role back to the last known good state.

makes the same API calls you can do manually.
