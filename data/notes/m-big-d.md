---
title: 'Big Data'
excerpt: 'Big Data, RedShift, EMR, Kinesis, Athena, ElasticSearch'
link: 'https://acloudguru.com/course/aws-certified-solutions-architect-associate-saa-c02'
---

# RedShift
Relational database that can store up to 16PB of data and built to use BI Business Intelligence tools. Not standard and does not take the place of RDS.
What is big data?

3 V's
Volume, Variety, Velocity
The amount of data ranges from terabytes to petabytes of data. It can be in any format and come from any device, and you need to collect, analyze and process the data in a short time period.

# EMR
ETL -Extract Transform Load

We take the large amounts of data from the source, Turn it into something usable, and ship it off to be used.

EMR - Elastic MapReduce

EMR is a AWS's ETL tool. A managed big data platform that allows one to process vasts amounts of data using open-source tools, such as Spark, Hive, HBase, Flink, Hudi, and Presto.

EMR lives inside a VPC and will spin up ec2 instances that are needed. So consider that. Where they may live in the VPC, how muh they cost, etc. It is a open-source cluster or a managed fleet of ec2 instances running open-source tools. like elastic-cache service.

EC2 Rules apply -you can use Rls and spot instances to reduce cost

# Kinesis

Allows you to ingest, process, and analyze real-time streaming data. Like a highway, all about moving the data.

**Data Streams**
 * real time
 * unlimited in where you can send data to
 * You have to figure out how to consume data
 * does not auto scale

A producer is anything that is creating data. e.g. mobile device, ec2 instance, IoT device, Traditional server.

Take the info from the producer and feed into Kinesis Data Stream. Info is organized by shards.

Consumers take the data and deal with it. Direct it to the storage endpoint. e.g. S3, DynamoDb, Redshift, EMR, Kinesis Firehose.

**Firehose**
* Data Transfer tool to get information to S3, Redshift, Elasticsearch, or Splunk.
* near real time (within 60 sec)
* Is plug and play with AWS

Firehose handles the scaling for you. Handles building the consumer. Has support for some third party end points

**Kinesis Data Analytics**
* use standard sql, in real time as data is pushed through
* easy
* no servers
* low cost

SQS does not offer real time message delivery, **Kensis does**

_real time_ - Kinesis data streams
_near real time_ - Kinesis Firehose

# Athena

an inter active query service that makes it easy to analyze data in S3 using SQL. Talk to data without loading it into a database.

Glue - allows one to perform ETL workloads without managing underlying servers (EC2). It is a serverless data integration service that makes it easy to discover, prepare, and combine data. EMR without the BI tools.

You can use Athena to query logs stored in a s3 bucket.

Athena is serverless SQL

Glue is serverless ETL

# QuickSight
Fully managed BI data visualization service. It allows one to easily create dashboards and share them within your company.

# ElasticSearch
