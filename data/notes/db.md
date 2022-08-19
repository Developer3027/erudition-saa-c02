---
title: 'Databases'
excerpt: 'Relational Database Service, Aurora, DynamoDB'
link: 'https://acloudguru.com/course/aws-certified-solutions-architect-associate-saa-c02'
---

# Databases

**RDS - Relational Databases Service**

Data organized in tables. Rows are considered records and columns are considered the field.

Several relational database engines

- PostgreSql
- MariaDB
- Sql Server
- Oracle
- MySql
- Aurora - AWS

Highlights

- Multi-AZ
- Failover capability built in
- runs on a ec2 instance but you only have access to the database.
- Can be up and running in 5 minuets.
- Automated backups - everyday, every week
- Used for OnLine Transactional Processing (OLTP)

_OLTP_ - RDS

Processes data from transactions in real time (e.g. customer orders, banking transactions, payments and booking systems)

All about processing and completing large numbers of small transactions in real time.

_OLAP_ - RedShift (big data)

Processes complex queries to analyze historical data (e.g. analyzing net profit figures from the past 3 years and sales forecasting)

All about data analysis using large amounts of data, as well as complex queries that take a long time to complete.

**Multi AZ**

All but Aurora databases can be configured for multi AZ, only Aurora can not be configured for single AZ. _Aurora is always multi AZ._

Multi-AZ create an exact copy of your production database in another AZ. Writes to DB are synchronized to standby DB

Multi AZ is for diaster recovery, not for performance.

Typical config is outside traffic hits load balancer. Load balancer will direct to running instance of ec2 running rds. Traffic hits primary rds and primary is copied to secondary rds. If primary goes down then AWS automatically points to secondary rds. Traffic is not pointed to secondary just because traffic on primary rds is heavy.

**Improve Performance**

Read Replica - Create an exact copy of the database that is read only. Any traffic wanting to simply read data gets directed to the read only version of the database.

- Must have auto backups enabled.
- It can cross different AZ and different regions. Will have separate end point address. One uri for primary and one uri for read only.
- Multiple Read Replicas are supported.
  - MySQL, MariaDB, PostgresSQL, Oracle, and SQL Server - up to 5 RR, each
- Not for diaster recovery.
- Read Replica can be promoted to be it's own database and break the replication.

**Aurora**

MySQL and PostgresSQL compatible relational database engine combines speed and availability of high-end commercial db with the simplicity and cost-effectiveness of open-source db.

Up to 5 times better performance than MySQL and 3 times better than PostgreSQL db at much lower price point, while delivering similar performance and availability.

_specs_

- starts with 10 GB. Scales in GB increments to 128 TB (storage auto scaling)
- compute resources can scale up to 96 vPUs and 768 GB of memory.
- 2 copies of data stored in each AZ. (With a minimum of 3 AZ then 6 copies of data.)

_Scaling_

- designed to transparently handle the loss of up to 2 copies of data without affecting db write availability and up to 3 copies without affecting read availability.
- Self healing storage - data blocks and disks are continuously scanned for errors and repaired automatically.

- You can create and share snapshots with other AWS accounts.
- **3 type of replica available.** Aurora replica, MySql replica, PostgreSql replica. Automated failover only available for Aurora replicas.
- Aurora has automated backups on by default

**Aurora serverless**
If you need the performance of Aurora but have spiky workloads - Aurora Serverless. Automatically starts up, shuts down, and scales capacity up or down based on application need.

- Aurora serverless for simple, cost-effective option for infrequent, intermittent workloads

**DynamoDB**

- NoSql database
- Stored of ssd
- spread across 3 geographical distinct data centers
- default is _eventually consistent reads_
- can have strongly consistent reads
  - difference between consistent reads is about a second

**DynamoDB Accelerator (DAX)**

- Fully managed, highly available, in-memory cache
- 10x performance improvement
- reduces request time from milliseconds to microseconds - even under load
- No need for developers to manage caching logic
- Compatible with DynamoDB API Calls

**On-Demand Capacity**

- Pay-per-request pricing
- Balance cost and performance
- No minimum capacity
- Pay more per request than with provisioned capacity
- Use for new product launches

**Security**

- Encryption at rest with KMS
- Site to Site VPN
- Direct Connect (DX)
- IAM policies and roles
- Fine-grained access
- CloudWatch and CloudTrail
- VPC endpoints - use the AWS backbone

**DynamoDB Transactions**
_Atomic, Consistent, Isolated, Durable - (ACID)_
**ACID** - Basically is all or nothing. Multiple all or nothing operations. Must turn on DynamoDB Transactions for acid to work. Provides developers **atomicity, consistency, isolation** and **durability** across 1 or more tables with a single AWS account and region. Up to 25 items or 4 MB of data per transaction across 1 or more tables within a single AWS account and region.

_3 options for reads_

- eventual consistency
- strong consistency
- transactional

_2 options for writes_

- standard
- transactional

_use examples_

- Processing Financial transactions
- Fulfilling and managing orders
- Building multiplayer game engines
- Coordinating actions across distributed components and services

**DynamoDB Backups**

_On demand backup and restore_

- zero impact on table performance
- Full backups at anytime
- consistent within seconds and retained until deleted
- operates with same region as source table

_Point in time recovery (PITR)_

- Not enabled by default
- protects against accidental writes or deletes
- restore to any point in the last 35 days
- incremental backups
- last restorable is 5 min in past

_Streams_

- Time ordered sequence of item-level changes in a table
- _Shard_ group of data stream records - sequential records
- stored for 24 hours
- inserts, updates, deletes
- Combine with Lambda for functionality like stored procedures

**Global Tables**
_Managed multi master, multi region replication_

- Based on DynamoDB Streams so turn on streams to use
- Globally distributed apps
- Multi region redundancy for disaster recovery or high availability
- No Applications rewrites - just turn it on
- replication latency is under 1 sec
