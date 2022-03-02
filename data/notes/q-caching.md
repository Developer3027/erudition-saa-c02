---
title: 'Caching'
excerpt: 'Caching, CloudFront, ElasticCache, DAX, Global Accelerator'
link: 'https://acloudguru.com/course/aws-certified-solutions-architect-associate-saa-c02'
---

# AWS Caching
## Global caching with CloudFront
CloudFront is a fast content delivery network (CDN) service that securely delivers data, videos, applications, and APIs to customers globally. It helps reduce latency and provide higher transfer speeds using AWS edge locations.

Security - defaults to https connections with ability to add custom SSL certs. Allows you to put a secure connection on your s3 static site.

Global Distribution - you can not pick a specific country, just general areas of the globe.

Endpoint Support - can be used to front AWS endpoints along with non-AWS apps

Expiring Content - you can force an expiration of content from the cache if you can't wait for the TTL

Speedy - CloudFront main purpose is to cache content to edge locations to speed up delivery

On-Site support - CDN works both AWS and on-site architecture

Blocking Connections - can be done ( individual countries ) but WAF is way better

All Locations - you can not pick specific edge locations for distribution

## ElastiCache and DAX
ElastiCache is a managed version of 2 open source techs: Memcached and Redis. Neither tool are specific to AWS, but by using ElastiCache you avoid a lot of common issues you might encounter.

Memcached -
* Simple database caching solution (internal)
* Not a database itself
* no failover or multi=AZ support
* No backups

Redis
* Supported as a caching solution
* Functions as a standalone database
* failover and Multi-AZ support
* supports backups

DynamoDB Accelerator (DAX)
In Memory Cache - DAX can reduce DynamoDB response times from milliseconds to microseconds.

Location, Location - This cache is highly available and lives inside the VPC you specify.

You're in Control - You determine the node size and count for the cluster, TTL for the data, and maintenance windows for changes and updates.

**How to choose the cache to use.**

DAX - only for DynamoDb

ElastiCache - gives a bit more flexibility then DAX. It can be front just about any database, but really excels in front of RDS

## Fix IP Caching with Global Accelerator
Network service that sits in front of apps. Uses edge locations to increase performance and help deal with IP caching.

When a user visits your site, they cache the ip of the ELB, assuming your using a ELB. If that ELB goes down and another pops up, the ELB IP changes. Your user is cached to a ELB that doesn't exist. Global Accelerator always gives 2 IP address to cache and sits in front of ELB.

Masks Complex Architecture - As the application grows and change, and deployments happen, the user's will not notice. The same IP is always used.

Speeds things up - Traffic is routed through AWSs global infrastructure.

Weighted Pools - Create weighted groups behind the IPs to test out new features or handle failure in your environment.

Accelerator solves IP caching problems. Those two IP address will solve the problem of users not being able to access the proper end point. Those two IP addresses are not going to change. You do have the option to bring your own.

## Tips
* can it be cached?
* What type of cache solution?
  * Redis, MemCache, DAX are database solutions
  * distribute content to users? cloudFront
* How does content fgt updated? TTL
  * how to get content out of CloudFront? Purge? change expire, wait for TTL?
* Does cache solution help with anything besides speed?
  * CloudFront allows WAF for security
  * Global Accelerator helps with IP caching
* CloudFront is the only option to add HTTPS to static site being hosted in an S3 bucket
* Always favor answers that include caching
* If you see IP caching, auto think Global Accelerator
* "in-memory database" = DynamoDB or Redis. If the question offers Dynamo, choose that.
* If comparing feature of ElasticCache, Redis and Memcache, Redis has more features. Memcache is just a cache. Redis is both a data store and a cache.
* Redis is the only in-memory data store that provides a backups solution. Memcache and DEX do not have a backup solution.