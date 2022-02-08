---
title: 'HA, Scaling'
excerpt: 'High Availability and Scaling, (Templates, EC2, DB)'
link: 'https://acloudguru.com/course/aws-certified-solutions-architect-associate-saa-c02'
---

## Launch Templates vs Launch Configuration

A launch template specifies all the needed **settings** that go into building out an EC2 instance. It is a collection of settings you can **configure** so you don't have to walk through the EC2 wizard over and over.

Templates are better then configurations. They provide more tools and access to resources than configurations do.

### Templates

- More than just autoscaling
- Supports versioning
- More granularity
- AWS recommended

### Configurations

- Only for autoscaling
- Immutable
- Limited configuration options
- Don't use them

Configurations are not wrong, just that Templates are better and are preferred for the test.

Understand what makes a Template. You need to know what goes into a launch template. You need to know it includes the AMI, EC2 instance size, security groups, and potentially networking information.

If you set a VPC (give network info) when setting up the template, you **can not** use it in autoscaling.

Launch templates are the best. The most up to date and flexible way to create a template.

Launch Configurations are the older version. Not wrong, but Templates are certainly preferred.

User Data is included in the template or configuration

Change happens. Templates can be versioned. Configurations are immutable.

Networking - Configurations don't include networking information, templates could.

## Scaling EC2 instance with AutoScaling

An auto scaling group contains a collection of EC2 instances that are treated as a collective group for purpose of scaling and management

### Auto Scaling Steps

1. Define your template
   - You have to pick from your available launch templates or launch configurations
2. Networking and Purchasing
   - Pick your networking space and purchasing options. Using multiple AZs allows for high availability
3. ELB Configuration
   - EC2 instances can be registered behind a load balancer. The Auto Scaling Group can be set to respect the load balancer health checks
4. Set Scaling Policies
   - Min, max, and desired capacity needs to be set to ensure you don't have too many or too few resources
5. Notifications
   - SNS can act as a notification tool, allowing you to let someone know when a scaling event occurs

### Setting capacity limits

**Minimum** - If you set this to zero, then all of your ec2 instances can be terminated. You want a min of 2 for high availability. This is the lowest number of EC2 instances you'll have online. You won't dip below this.

**Maximum** - The roof. The total max EC2 instance you could ever need. The highest ne=umber of EC2 instance you'll ever provision. You won't go above this.

**Desired** - How many instances do you want right now? Never higher than the max or lower than the min, how many do you want at this moment.

You can use spot capacity or spot instances in a auto scaling group.

### Exam Tips

- Auto scaling and High Availability go hand in hand. Auto Scaling is vital to creating a highly available application.
