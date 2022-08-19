---
title: 'Availability & Reliability'
excerpt: 'From PluralSight: Architect for availability and reliability'
link: 'https://app.pluralsight.com/library/courses/architecting-reliability-aws/table-of-contents'
---

# Architecting for Reliability and availability on AWS

This lesson is based off of course work from Ben Piper found on PluralSight. [PluralSight](https://app.pluralsight.com/library/courses/architecting-reliability-aws/table-of-contents 'Architecting for Availability')

*try right click and open link in a new tab*

## Reliability or Resiliency

The ability of an application to avoid and recover from failure. Any number of things can cause a failure. Bugs in the code, connectivity issues, data issues and so on. You need to be able to bounce back from these concerns quickly.

## Availability

The percentage of time that an application is performing as expected. Low performance is poor availability. Uptime isn't the same as availability. It is no good if the app is up but can not be used.

## Availability and Annual Downtime

* 99.0% = 3 days 15 hours (87.6 hours)
* 99.9% = 8 hours 45 minutes (8.76 hours)
* 99.99% = about an hour
* 99.999% = 5 minutes

## Traditional vs Cloud concept

Let's consider for a moment what may be considered a traditional web application. For our purposes we will use an application like Instagram in that we have an video reformatting application that takes in a video, does some compression or formatting and returns a link where users can get the end product. This would have a frontend running on a web server that presents the interface and does the processing logic, and a backend consisting of a SQL database. For traditional applications running on a Windows or Linux server that you can "lift and shift" without changing the code with 3 nines availability means it can tolerate up to 8 hours 45 minutes of cumulative downtime per year. Let's consider how this application would be set up in AWS.

To run this application in a local environment you would have the consideration of downtime. Downtime can be caused by a number of things and any downtime cost money. AWS lists the availability of an EC2 at 90% in the SLA (Service Level Agreement). This can not be changed and is out of your control. Servers require maintenance and upgrades. So how to set up a system that will give you three nines availability at minimum?

If we have a 90% uptime then we will have a 10% downtime. This downtime will be decreased if more EC2 servers are running. Running the application through 4 EC2 instances would be 10% X 10% X 10% X 10% = 0.01%. Now subtract the 0.01% downtime from the 100% uptime we are looking for and you get 99.99%. That is four nines availability which is far better than our goal of three. However there are other considerations.

So what all are we going to need, or rather, how will the structure of the application differ from the local environment? Well let's start with understanding what the application requires to perform as expected. It needs the interface to interact with a user. This requires the business logic for processing the data. It needs a place to store that data. Lets's further explore the process.

A user logs into the service and uploads the video. Where is that data being stored while going through processing? Is it the database or is the server using resources directly available to it, like memory and disk space? The database would be used to store data, not process it. The processing of the video is handled by the logic present on the web server within the web interface. The frontend is handling that.

Understanding this flow, we can now create a architecture. For 3 nines availability for this system we will consider a two tier system consisting of a web tier and a data tier. You would need 4 EC2 instances, each running the application. For security and additional availability concerns they would be separated into two subnets in a VPC. Two EC2 instances running in subnet A and two running in subnet B. The data tier would run RDS databases, one for each subnet. To ensure the traffic load to the application is distributed evenly you would use an ELB (Elastic Load Balancer). Let's not forget the video processing requirements. Now we are running 4 web servers. Providing the required resources to each server could get expensive. We could set up EC2 instances with enough compute power and use EFS (Elastic File System) that the servers could use during processing. This way all the servers have a singular file system they are familiar with to use.

Now that we know the architecture we can finish computing the availability. Using 4 EC2 instances give us four nines availability. The ELB has a SLA of 99.99% The ELB will not only distribute the load to the various web servers but it will review the health of those servers before sending anything to it. This makes the ELB a hard dependency and we calculate that availability 99.99% X 99.99% = 99.998%. The EFS is also a hard dependency because if it goes also down the application goes down. The SLA puts the EFS availability also at 99.99%. To calculate this in we 99.998 X 99.99% = 99.97%. The database is SQL so we could use Amazon RDS which offers a multi-zone availability at 99.95%. To calculate that we 99.95% X 99.97% = 99.92% So with everything in place, we have three nines availability.

Note that the above concept also uses the concept of *loose coupling*. The ELB will direct traffic to health server instances. This means that there is a one to many relationship with regards to the URL endpoint. When a user hits the URL they can be sent to one of four servers running the application. This is loosely coupled. Same with the EFS. The EFS is serving four application instances. You can see how loose coupling makes it easier to modify, update, upgrade, expand the application. For instance, using the EFS allows you to adjust for poor performance of the application during processing by increasing CPU or compute power if needed without effecting file storage processing.

One place where tight coupling is a concern for this application is the processes being done on the web server. You have both the interface and the logic for video processing together. Could these be loosely coupled?  Should they be loosely coupled?

There are a number of reasons to make this loosely coupled. Breaking the application down into micro services and moving away from a monolithic architecture has many advantages. It is much easier to update or modify.  It is more resilient. It performs better. It is easier to manage. It is easier to scale. Consider that if you removed the logic for processing and set it up in it's own EC2 instance, then the interface would require much less CPU or memory. The new processing instance would use the SQS (Simple Que Service) to get it's signals from. The SQS would hold requests for the processing instance until they were handled.

The loosely coupled concept can be taken a step further using ECS (Elastic Container Service). Containers allow you to run the application in a contained environment on the EC2 instance. In this way you could run several applications on a single EC2 instance and what would effect one container would not effect any other. This holds true for the processing instance as well.

We can see how using these cloud services are a great advantage and bring great functionality but they also bring questions that should be considered. For instance, now that we have broken out the processing logic and are using the SQS, the application is now dependent on the cloud. You can not download SQS and use it in your local environment. This has brought forth the terminology of *"Service instead of servers"*. Does this mean that cloud services are better and should be used? Is availability just inherently greater using cloud services?

Lets consider the application we have been discussing. We could use Lambda functions for video processing which has a SLA of 99.95% Use S3 for web asset and video storage which has a SLA of 99.9% and would probably require some code change. Then use DynamoDB which with global tables has a SLA of 99.999%. Compare this to our previous calculations and we see that 99.95% X 99.9% X 99.999% = 99.85%. So using these services instead have added about 5 hours of downtime annually. However, if you used these services and made the application multi regional then you are looking at five nines availability, and that cost will reflect that availability.

AWS has a tool to help you figure out the SLA for any service called Trusted Advisor. Use it to access utilization against service limits. It is your friend and will tell you the SLA for services as well as how the SLA pertains to your environment. How many EC2 instances can you spin up for a region? How many VPCs can you create? Resources are not unlimited and Trusted Advisor will give you the information you need to make informed decisions.



