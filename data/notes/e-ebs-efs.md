---
title: 'EBS, EFS'
excerpt: 'Elastic Block Storage, Elastic File System'
link: 'https://acloudguru.com/course/aws-certified-solutions-architect-associate-saa-c02'
---

# EBS Elastic Block Storage

This is storage volumes that can be attached to ec2 instances.
**Mission Critical**

1. **Production Workloads** designed for mission critical workloads.
2. **Highly Available** Auto replicates within a single AZ to protect against hardware failure.
3. **Scalable** Dynamically increase capacity and change the volume type with no downtime or performance impact to the live system.

## EBS types

**Standard** (gp2)(gp3)
ssd drive for general purpose. Boot drives and good for testing or development that are not latency sensitive.

- gp2 - 3 IOPS per GB. Up to a max 16,000 IOPS per vol.
- gp2 - vols smaller than 1TB can burst up to 3,000 IOPS
- gp3 - Balance of price and performance
- gp3 - 3,000 IOPS baseline performance and 125 MiB/s regardless of vol size.
- gp3 - Ideal for high performance at low cost. MySql, Cassandra, Virtual Desktop, Hadoop.
- gp3 - can scale up to 16,000 IOPS and 1,000 MB/s for fee.
- gp3 - 4 times faster than max throughput of gp2

**Provisioned IOPS** SSD(io1)
_IOPS is measure of number read or write operations per sec_

_High performance option and most expensive_

- Up to 64,000 IOPS per vol
- 50 IOPS per GiB
- 99.9% durability
- Use if more than 16,000 IOPS is needed
- Designed for I/O intensive apps, large databases, latency sensitive workloads

**Provisioned IOPS** SSD(io2)
_Next generation of high performance, same price io1_

- Up to 64,000 IOPS
- 500 IOPS per GiB
- 99.999% durability
- Designed for I/O intensive apps. Apps that need high levels of durability.

**Throughput Optimized (HHD st1)**
_throughput is measure of number of bits read or write per sec(MB/s)_

- Low cost HD vol
- Baseline throughput 40 MB/s per TB
- burst 250 MB/s per TB
- max throughput 500 MB/s per vol
- Frequently accessed, throughput intensive work
- Big Data, Data Warehousing, ETL, log processing
- can not be a boot vol

**Cold HDD (sc1)**
_lowest cost option_

- baseline throughput 12 MiB/s per TB
- burst 80 MiB/s per TB
- max throughput 250 MiB/s per vol
- good choice for data requiring fewer scans per day
- apps that need low cost where performance is not a factor.

**Snapshot**

- snapshots exist on s3
- like a photo of the drive contents
- snapshots are point in time
- incremental means that only changed data will be captured after the first. The first will be the entire disk, all others will be of what has changed.

  _**snapshot tips**_

  - stop the ec2 instance so that any cached files are written to disk before taking snapshot
  - If drive is encrypted, then snapshot is encrypted
  - can only share in same region. Copy the snap to move to other region

  _**important**_

  - ebs vol will always be in same AZ as the ec2 it is attached to.
  - ebs vols can be resized on the fly. Don't need to stop the ec2 instance but you will have to extend the file sys in the os so the os sees the new vol size.
  - you can change type on the fly. go for gp2 to io1 without stopping ec2

**Encryption**

- data key, industry standard AES-256 algorithm,
- use AWS KMS or CMK when creating vol or snapshot
- data at rest is encrypted inside the vol
- all data in flight is encrypted
- all snapshots are encrypted
- vols created from snapshot is encrypted
  - **how to encrypt**
    - take a snapshot of vol
    - copy snapshot with encryption
    - create AMI with encrypted snapshot
    - create instance with encrypted AMI

**EC2 Hibernation**

- preserves the in memory RAM on persistent storage (EBS)
- Much faster boot times, no need to reload os
- Instance RAM must be less than 150 GB
- Instance Families c3, c4, c5 m3, m4, m5, r3, r4, r5
- Available for Windows, Amazon Linux 2 AMI, and Ubuntu
- can not be longer than 60 days
- Available for on-demand and reserved instances

## EFS Elastic File System

Managed NFS (network file system) that can be mounted on many EC2 instances in multiple AZ (Availability Zone). It is highly available, scalable and expensive.

NFS is one of the first network file sharing protocols native to Unix and Linux.

Great for content management or web servers where many EC2 instances in several AZ can share info.

- supports Network File System version 4 (NFSv4)
- for Linux-based AMI, not Windows
- Encryption at rest with KMS
- pay for the storage you use, no provisioning
- scale up to petabytes, no planning required
- supports thousands of concurrent NFS connections
- up to 10 Gbps throughput
- data stored across multiple AZ in region
- Read after write consistency

_question on highly scalable shared storage using NFS think EFS_

**Control Performance**

- General Purpose - things like web servers, CMS and such, (default)
- Max I/O - things like big data, media processing

**Storage Tiers**
can move files from one tier to another with lifecycle management after x number of days. Default is 30 days

- Standard - frequently accessed
- Infrequently Accessed

## FSx Overview

FSx for Windows is a fully managed native Microsoft Windows File System. Easily move Windows based applications that require file storage to AWS. Built on Windows Server.

_if you see "sharepoint migration", "shared storage" for Windows, think FSx_

- Managed Windows Server that runs Windows Server Message Block (SMB) based file services.
- Designed for Windows and Windows Applications
- Supports AD (Active Directory) users, access control lists (ACL), groups, and security policies, along with Distributed File System (DFS) namespaces and replication.

**FSX for Lustre**
All about AI and Machine Learning. Fully managed file system that is optimized for compute-intensive workloads

- high performance computing
- Machine Learning
- Media Data Processing Workflows
- Electronic Design Automation

You can launch and run a Lustre file system that can process massive datasets at up to hundreds of gigabytes per second of throughput, millions of IOPS, and sub-millisecond latencies.

_exam will ask you to choose_

- EFS is for Linux when you need distributed, highly resilient storage
- FSx for Windows when you need centralized storage for SharePoint, SQL Server, Workspaces, IIS Web Server, or any Windows application.
- FSx for Lustre when you need high speed, high capacity distributed storage. Financial Modeling and such. **Can store data directly on S3**

## AMI Amazon Machine Images

Provides the information required to launch an instance. A blueprint for a EC2 instance. 5 things you can base your AMI on:

- Region
- OS (Operating System)
- Architecture (32-bit or 64-bit)
- Launch permissions
- Storage for the root device (root volume)

All AMIs are categorized as either backed by:

- EBS - root device for an instance launched from the AMI is an EBS Vol created from and snapshot.
- Instance Store - root device for an instance launched from AMI is an instance store vol created from a template stored in S3.

Instance store volumes are called _ephemeral storage_. They **cannot be stopped**. If underlying host fails, you loose the data. **You can reboot** without losing data. If you delete the instance, you will lose the instance store volume.

EBS volumes can be stopped and you will not lose the data. You can reboot and not loose data. By default, the root volume will be deleted on termination but you can tell AWS to keep the root device with EBS volumes.

## AWS Backup

Backup allows you to consolidate your backups across multiple AWS services, such as EC2, EBS, EFS, Amazon FSx (Windows and Lustre) and AWS Storage Gateway. It can include services such as databases like RDS and DynamoDB.

**Organizations**
Backup multiple AWS accounts in your organization. Gives you centralized control across all AWS services, in multiple AWS accounts across the entire organization.

- Consolidation - one place to backup many services.
- organizations - backup many accounts
- Benefits - backup gives you centralized control, letting you automate your backups and define lifecycle policies for your data. You get better compliance, as you can enforce your backup policies, ensure your backups are encrypted, and audit them once complete.
