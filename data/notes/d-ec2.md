---
title: 'EC2'
excerpt: 'Elastic Compute Cloud, Server in AWS'
link: 'https://acloudguru.com/course/aws-certified-solutions-architect-associate-saa-c02'
---

# EC2 Elastic Compute Cloud

Secure, resizable compute capacity in the cloud. Game changer in 2006 for the industry. You can now get a server up and running in minuets instead of waiting weeks, or buying and storing the equipment in house. Machine hosted in AWS, designed to make web-scale computing easier for developers. Capacity you want when you need it. You are in complete control of your instances.

## ec2 pricing

[calculator.aws](https://calculator.aws/#/) is tool to figure out ec2 pricing

- Four general categories
  - On-Demand
    - Pay by the hour or second depending on the type of instance you run.
      - Flexible - low cost and no contract.
      - Short Term - Applications with irregular workloads that can not be interrupted.
      - Testing - developing or testing application
  - Reserved
    - Can be used with Lambda and Fargate.
    - Reserve capacity for 1-3 years. Largest discount at 72% on hourly charges.
      - pay up front
      - predictable usage
      - specific capacity requirements
        - Standard RI - up to 72% off on demand price
        - Convertable RI - up to 54% on demand price. Can change to another RI of equal or greater value.
        - Scheduled RI - Launch within a time window you define. Match capacity reservation to a predictable recurring schedule that only requires a fraction of a day, week, or month.
  - Spot
    - Purchase unused capacity at a discount of up to 90%. Prices fluctuate depending on supply and demand.
    - Use when you need stateless, fault-tolerant, or flexible apps.
    - Set a max spot price and as long as the price is below your max, spot will run. If spot is reached you will have a few min to stop of terminate the instance.
    - You can set a spot block for 1 to 6 hours that will keep your instance running even if the max price is reached or exceeded.
    - Terminate spot request, set to persistent, by first canceling the spot request and then terminating the ec2 instances
    - **SpotFleet** will try to match the target capacity with your price restraint
      - capacity optimized - come from the pool with optimal capacity for the number of instances launching
      - diversified - distributed across pools
      - lowest price - from the pool with the lowest price. (default)
      - InstantPoolsToUseCount - distributed across number of pools specified, only valid when used in combo with lowest price.
  - Dedicated
    - **any special licensing requirements, _use dedicated_**
    - A physical server dedicated to your use. The most expensive option.
      - **When would dedicated be used**
        - Dedicated - may have regulatory requirements that does not support multi tenant virtualization.
        - Licensing - may not support cloud deploy or multi tenant virtualization
        - On-Demand - can be purchased hourly
        - Reserved - can be purchased for up to 70% off on demand price

## Roles in ec2

1. Roles are preferred
   - preferred from a security perspective. They can grant temp access. They allow a service or compute to access permissions.
2. Avoid hard coding credentials.
   - Roles allow you to provide access without the use of access key id's and secret key id's
3. Policies
   - Policies control role permissions
4. Updates
   - You can update a policy attached to a role and have immediate effect.
5. Attaching and Detaching
   - You can attach and detach roles to running ec2 instances without having to stop or terminate the instance

Go to IAM first and create the role. Remember to rule of least privilege. During setting up the ec2 instance you can attach the role. If the ec2 instance is created you can add the role under actions.

## Security

**Ports**
Linux - SSH - 22
Windows - RDP - 3389
http - web browsing - 80
https - SSL web - 443

EC2 instance, by default, are protected by firewall called security group. Get access through security group by opening up ports. Public access address is 0.0.0.0/0.

Remember that in order to communicate with EC2 with SSH/RDP/HTTP you need to allow access.

**Bootstrap Script**
When setting up a EC2 instance you can use bootstrap scripts to automate some tasks. Write the code in the _"user data"_ section when you configure the instance details. The below script you give the path to the interpreter. Run update for security patches. Install the apache web server called httpd. Start the web server. Change directories into html. Create a index.html doc, with the head, body, and h1 tags, in the html directory.

```
#!/bin/bash
yum update -y
yum install httpd -y
service httpd start
cd /var/www/html
echo <head><body><h1>"Today is gonna be the day"</h1></body></head> > index.html
```

Once the EC2 instance starts, the web server will be installed and you can view at the public address, if you have set the security group access to public.

**Meta Data** is data about data. You can use it in writing **User Data** to get specific information. Using curl you can get meta data from your ec2 instance. Once running and you have ssh into it, cd into the html directory and use the command to see the meta data.

```
  curl http://169.254.169.254/letest/meta-data
```

## Networking

There are several types of virtual networking cards you can apply to a EC2 instance.

**ENI**
Elastic Network Interface, for basic day to day networking

**EN**
Enhanced Networking, uses single root I/O virtualization (SR-IOV) to provide high performance

- Two types
  - **ENA** Elastic Network Adapter, supports network speeds of 100 Gbps for supported instance types
  - **intel 82599 VF interface**, supports network speeds of 10 Gbps for supported instance types. Older instances.

**EFA**
Elastic Fabric Adapter, accelerates high performance computing (HPC) and machine learning applications.

- OS-bypass, allows to bypass the os kernel and talk directly with the EFA device providing for much lower latency and increased speed to already fast and low latency EFA. Linux only.

## Placement groups

3 types of placement groups

- Cluster
  - group instances in a single AZ.
  - Recommended for apps that need low network latency, high network throughput, or both.
  - Only certain types of EC2 instance can be launched into a cluster placement group.
- Spread
  - group of instances that are placed on distinct underlying hardware.
  - recommended for apps that have a small number of critical instances that should be kept separate from each other.
  - _Used for individual instances_
- Partition
  - isolate the impact of hardware failure within your application
  - Each group has it's own rack and each rack has it's own power source and network.
  - _EC2 divides each group into logical segments called partitions_

A **cluster placement group** can **not span** multiple AZ. A spread placement group and partition placement group can.

Certain types of instances can be launched into placement groups. (compute optimized, GPU, memory optimized, storage optimized)

AWS recommends homogenous instances within cluster placement groups.

You can not merge placement groups

You can move an existing instance into a placement group but the instance must be in a stopped state. You have to use cli or sdk but not via console.
