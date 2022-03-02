---
title: 'Migration'
excerpt: 'Migration, Snow Family, Storage Gateway, Transfer Family'
link: 'https://acloudguru.com/course/aws-certified-solutions-architect-associate-saa-c02'
---

# Migrate Data

How do we get data into the cloud?

- Internet - using your existing connection is convenient but potentially very slow and could be a security risk.
- Direct Connect - This can be faster and more secure, but it's not always practical if it's not needed after migration.
- Physical - What if you bundled your data and physically delivered it to AWS? You could bypass the internet entirely.

## Snow Family

The snow family is a set of secure appliances that provide petabyte-scale data collection and processing solutions at the edge and migrate large-scale data into and out of AWS.They offer built-in computing capabilities, enabling customers to run their operations in remote locations that do not have data center access or reliable network connectivity.

### Snow Cone

The smallest device in the snow family.

- 8TB of storage, 4GB of memory, and 2 vCPUs
- Easily migrate data to AWS after you've processed it.
- IoT sensor integration
- Perfect for edge computing where space and power are constrained.

### Snowball Edge

The jack of all trades

- 48TB of 81TB in storage
- Storage, compute, and GPU flavors
- Varying amount of CPU and RAM
- Perfect for off-grid computing or a migration to AWS

### Snowmobile

The heavy hitter - a semi truck

- 100 PB of storage
- Designed for exabyte-scale data center migration

In the exam, you'll be given a scenario that asks you to pick a solution for data migration. When these come up, make sure to pay attention to restrictions in the situation. Not being able to transfer over the internet, having a large amount of data, ir having a very slow internet connection could all be reasons to use snowball.

**Use Cases** - Know the general use cases for each snow family member.
**SnowCone** - Small, robust edge computing. Can hold up to 8 TB of data.
**SnowBall** - Storage, Compute and GPU. Can hold up to 81 TB of data.
**SnowMobile** - Up to 100 PB of data in a very large truck.
**Both Ways** - The snow family works to get data into AWS as well as shipped back to you.
**Timing** - Generally, turnaround is a week, but that mostly depends on the customer.

## Storage Gateway

A hybrid cloud storage service that helps you merge on-premises resources with the cloud. It can help with a one-time migration or a long-term pairing of architecture with AWS.

### File Gateway

caching local files - Network file share you set up that backs up files to S3 bucket. This is a VM provided by AWS. Keep all your files local and back up to S3, or keep most recent while sending everything to AWS.

- NFS or SMB mount
- Keep local copy of recently used files
- extend on-premises storage
- helps with migrations to AWS

### Volume Gateway

Backup Drives
You have all those VMs working on prem, back that data up with volume gateway.

- iSCSI mount
- cached or stored mode - all backed up in S3
- create EBS snapshots
- Perfect for backup or migration

### Tape Gateway

Ditch the tapes

- Replace physical tapes
- Doesn't change current workflow
- Encrypted communication

This is a hybrid solution. Which version of storage gateway is a good solution.
**Use Cases** - general use cases for each storage type.
**Out of Space?** - out of space on-prem? Which Storage Gateway solution solves the issue?
**Not Tape Gateway** - Have a high level knowledge of tape gateway. The exam won't cover it as much as the other two.
**High Level** - The exam won't dive into the details of how to set these up or troubleshoot.

## DataSync

DataSync is a agent-based solution for migrating on-premises storage to aws. It allows you to easily move between data between NFS and SMB shares and AWS storage solutions.

**migration tool** use to move a lot of data to aws once.
**Agent Based** solution, so you need the agent installed on prem, that transfers data securely to s3, nfs and fsx.

For the exam, keep in mind that DataSync is more of a one time solution, Storage Gateway is more for continuous transfers.

## Transfer Family

Allows you to easily move files in and out of s3 or efs using Secure File Transfer Protocol (SFTP), File Transfer Protocol over SSL (FTPS), or the File Transfer Protocol (FTP)

These protocols are older and are less and less used. However, this service is good for moving data from an older system to aws, and sending data back.

Tool excels with bringing legacy application storage to the cloud.

Important to know the protocols. FTP is for inside the aws or vpc environment. Use SFTP or FTPS for bringing data into aws.

DNS entry stays the same, but the location for storage become s3. So tricking the legacy application to talk to the cloud.

Not many questions on exam. Exam will not dive deep into the details of how to set up or troubleshoot.

## Migration Hub

A gui system that allows you to view migration progress. A single pane of glass to track progress of your application migration to aws. Integrates with Server Migration service (SMS) and Database Migrations Service (DMS).

**SMS** - You have a data center with many expensive VM ware doing it's thing. You don't want to just drop everything in the move. SMS allows you to schedule a migration move for a VM. The VM object will be sent to s3. A ebs snapshot will be taken. From that a AMI is created to spin up a EC2 instance

**SMS** is the tool used to transfer those VM and enables you to easily create your AMI

**DMS** - is a database schema suite of tools who's jobs it is to take a Oracle or MySql database and convert the data and place it in Amazon Aurora Database. You can except from on prem or from Amazon RDS or EC2.

**DMS** is the tool used to migrate that old oracle db into rds, namely Aurora.

**Exam Tips**

- on the exam, the tools solve all application migration needs.
- Schema Conversion - it's easy to migrate to Aurora or RDS.
- Move it all - Focus on answers that include doing a complete migration.
- High Level - The exam won't dive into the details of how to set these up or troubleshoot.
