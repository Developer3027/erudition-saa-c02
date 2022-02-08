---
title: 'AWS Fundamentals'
excerpt: 'Overview of AWS basic, fundamentals'
link: 'https://acloudguru.com/course/aws-certified-solutions-architect-associate-saa-c02'
---

# AWS Fundamentals

## Regions and Zones

**Region**

- A region in aws is a geographical location. A physical location in the world that has two or more Availability Zones. For example, Cape Town in South Africa, or London in England, or Virginia in the United States is us-east-1.

**AZ Availability Zone**

- A AZ is a data center, which is a building full of servers. Has it own redundant power, networking, and connectivity. When they are close together, (within 60 miles) they are grouped onto the same zone.

**Edge Location**

- End point locations used to cache content. CloudFront. They are close to user and many of them.

## Shared Responsibility

The Encryption category is shared between both client and AWS. That is to say that clients are responsible for encrypting data on both the client and server sides. AWS will also encrypt data and access as it regards to AZ and Edge Locations, etc.

**Client**

- In general, if you have access to it in the aws dashboard, (console), then you are responsible for it. So security groups and encryption for your data both client and server side. IAM users. pathcing OS on ec2. Setting up and running ec2 instances. Patching database's to ec2 instances.

**AWS**

- AWS is responsible for everything you can't control. Patching, maintenance, and spinning up or down of servers. Patching RDS OS. Security in AZ. Networking of servers. AWS software. Management of data centers.

_Encryption is a shared responsibility_

## Compute, Storage, Database

**Compute**

- ec2 - virtual machine (VM)
- Lambda - Serverless (code)
- elastic beanstalk - (automation)

**Storage**

- s3 - object storage in the cloud.
- ebs - elastic block store.
- efs - elastic file service.
- fsx - windows file server.
- storage gateway - hybrid cloud storage for on-prem solution

**Databases**

- RDS - relational database service.
- dynamoDB - non relational database service.
- RedShift - warehouse tech. (big data)

**Networking**

- vpc's - virtual private cloud (network in the cloud).
- Direct Connect - a way to connect to aws from client headquarters. (DX)
- Route 53 - DNS.
- API-Gateway - serverless server (way to replace your web servers)
- AWS Global Accelerator - service that provides faithful IP to route traffic through global backbone.

## Fundamentals

- Five Pillars
  - Operational Excellence
  - Security
  - Reliability
  - Performance Efficiency
  - Cost Optimization
  - _Sustainability_ - _**(new 6th pillar)**_ may not be on exam

**Reference**

- [White papers](https://aws.amazon.com/whitepapers)
- [AWS Well-Architected Framework](https://aws.amazon.com/architecture/well-architected)
