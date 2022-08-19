---
title: 'S3'
excerpt: 'Simple Storage Service, Object Storage'
link: 'https://acloudguru.com/course/aws-certified-solutions-architect-associate-saa-c02'
---

# S3 Simple Storage Service

The oldest of services in AWS. It stores objects, so docs, images, web files and other static data types. You can not install software or a os. It has unlimited storage for both data and objects. Objects can range in size from 0 bytes to 5 terra bytes. A "bucket" is basically a folder.

**Working with S3**

- The s3 is a universal namespace. So names must be unique.
- Objects are stored in a _**key**_, _**value**_, system. For example, you upload a picture of you dog named molly.jpg. Then the _key_ would be "molly.jpg" and the _value_ would be the data of that image.
- An example url:
  ```
  https://bucket-name.s3.Region.amazon.com/key-name;
  https://my-pets.s3.us-east1.amazon.com/molly.jpg
  ```
- after uploading a file your browser will receive a 200 code if successful.
- The **version id** is used in duplicate objects or multiple versions of the same object.
- **Meta Data** is data about data. It can include the date it was created and / or date the object was uploaded, or the content type and much more.
- Data is safe and secure and spread across multiple devices and facilities to ensure availability and durability.
- depending on the tier, built for 99.95% to 99.99% service availability and 99.(9 nines) durability in data stored

## S3 Standard

- High availability and durability
  - Data is stored redundantly across multiple devices in multiple facilities ( >= 3 AZs).
    - 99.99% availability
    - (11 nines) durability
- Designed for Frequent access
- Suitable for most workloads
  - default storage
  - cases may include websites, game applications, content distribution, big data analytics

**Tiered Storage**
Standard is good for most use cases, but not all and there are various tiers available.

**Lifecycle Management**
Define rules to automatically transition objects to a cheaper storage tier or delete objects that are no longer required after a set period of time.

**Versioning**
With Versioning, all versions of a object are stored and can be retrieved, including deleted objects.

## Securing data

**Server-Side Encryption**
You can set default encryption on a bucket to encrypt objects when they are stored.

_All buckets are private by default._

**Access Control Lists ( ACL )**
Define which AWS accounts or groups have access and what type of access. You can attach ACL to specific s3 buckets as well.

- ACL work on a individual object level.
- You can make an object, in the bucket, public with ACL

**Bucket Policies**
bucket policies specify what actions are allowed or denied.

- apply to the entire bucket
- You can make the entire bucket public

**Strong read after write**
after the successful write of a new object or update (put) to an object, you can immediately receive the latest or newest object. **Strong Consistency** allows you to immediately list all objects after object updates or writing new objects, to see all objects.

## Static Website

You can host a static website in a s3 bucket. Few things to keep in mind. These sites must be static and not dynamic, so no database connections. They scale automatically. A good example would be a movie premier site. Whether one person or millions view the site, it will be accessible.

- Create the bucket and make it public.
- Now you can upload your files.
- Go to properties tab and at the bottom, click to enable the static website.
- You want to set the name for the main or home page, which is typically called _"index"_, as well as give the redirect for the error page.
- under permissions for the bucket, create a policy to allow the files in the bucket to have public access. The json would look like this:

  ```
  {
    "Version": "2012-10-17",
    "Statement": [
      {
        "Sid": "PublicReadGetObject",
        "Effect": "Allow",
        "Principal": "*",
        "Action": [
          "s3GetObject"
        ],
        "Resources": [
          "arn:aws:s3:::BUCKET_NAME/*"
        ]
      }
    ]
  }
  ```

  The above code snippet will ensure all objects inside the bucket have public access. This will create, or flag a ui component, warning, to warn that the bucket and all the data is open to the public.

  Now you can return to the properties tab and return to the static site section. Click on the url for the site and view it.

## Versioning

- Versioning is a great backup tool. All versions of the object are stored in the bucket.
- Once versioning is turned on, it can not be turned off or disabled, it **can be suspended**.
- It can be integrated with lifecycle rules.
- It does support MFA

## S3 Tiers

standard and intelligent do not have retrieval cost, all the rest do.

**S3 standard**

- highest cost, but the more data you store the less the cost.
  **S3 Intelligent**
  uses machine learning to give you the best cost depending on how often you access you data.
- monthly fee of 0.0025 per 1,000 objects

**S3 standard IA**
Infrequent Access

- used if you need quick access but not frequent access.
- low per gb charge for storage and retrieval.
- good for long-term storage, diaster recovery, back ups

**S3 One Zone IA**

- cost 20% less than standard IA but data will be restricted to one AZ, so dependability goes down.
- great for non-critical data.
- 95.99% availability

**S3 Glacier**

- cheap storage
- access data only a few times a year
- specific for archiving
- retrieve time 1 min to 12 hours

**S3 Glacier Deep Archive**

- retrieve data time 12 + hours by default

## Lifecycle Management

Withing the s3 bucket you can set up policy that effects the whole bucket or objects in the bucket, to move them to different tiers after so long to save money.

For example, you can set up a lifecycle policy that looks at the entire bucket and moves objects that have not been accessed for longer than 30 days to IA and then from IA to Glacier after 90 days.

## Object locks & Glacier Locks

You can store objects using the write once, read many (WORM) model. Can be applied to single object or the bucket. This is locking the object and protects it from deletion or updating for a specified amount of time. Two modes to this:

- **Governance Mode** - Only a few with specific permissions can update or delete the object.
- **Compliance Mode** - No one, not even root can update or delete the object until the time is up.

**Glacier Vault Lock** is compliance mode for glacier storage tier.

**Legal Lock** can be placed or removed by anyone with the s3:PutObjectLegalHold permission on any object or glacier lock. It prevents updates or deletes until removed.

## Encryption

- encrypt in transit
  - ssl/tls
  - https
- encryption at rest
  - server-side encryption
  - sse-s3 (AES 256-bit) default
  - sse-KMS use kms from amazon to provide you with keys
  - sse-c you get and handle the keys
- Client side encryption
  - you encrypt yourself before uploading
- Enforcing encryption with bucket policy
  - bucket can deny all PUT request that don't include the x-amz-server-side-encryption parameter in the request header

## Optimize S3

- prefix will increase your request per second and a prefix is a folder inside the bucket.
- 3,500 request per second (rps) put/copy/post/delete and 5,500 get/head rps per prefix.
- spreading your reads across different prefixes increase your rps.
- KMS encryption has limits that are region specific, either 5,500, 10,000, or 30,000 rps. You can not request a increase in limits for KMS
- use multipart uploads for over 100MB and must
  be used for over 5G.
- use s3-byte-range fetches when downloading file.

# S3 Replication

used to be called cross region replication

- you can replicate a object in one bucket to another bucket
- existing objects in a bucket are not replicated automatically. If you have objects in the bucket when you decide to turn on replication, they will not be replicated.
- Delete markers are not replicated by default.
