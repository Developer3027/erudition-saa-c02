---
title: 'AWS VPC from the CLI'
excerpt: 'From PluralSight: Architect for availability and reliability'
link: 'https://app.pluralsight.com/library/courses/architecting-reliability-aws/table-of-contents'
---

# Working with VPC from the command line

For this article you will need to have your own AWS account and have configured and installed the AWS CLI.

## Elastic IP Address

An Elastic IP address is a public IP address that is reachable over the public internet. You can allocate an EIP to your account and keep it as long as you want. This allows the instance to retain the same public IP address even if you stop and restart it. It is bound to the ENI which is bound to the instance. The ENI (Elastic Network Interface) is a logical networking component in a VPC that represents a virtual network card. You can move an EIP to a different ENI but you can only have one assigned at a time. If an instance has a public IP address then allocating an EIP will replace the public IP.

There are two types of EIP. Amazon owned and Customer owned. From Amazon an EIP is tied to a Region and it is picked for you. You can bring your own IP (BYOIP) and as such you can choose any address you want.

Command to allocate an EIP:

```bash
aws ec2 allocate-address
```

Will return a object similar to below:

```bash
{
  "PublicIp": "52.6.69.153",
  "AllocationId" : "eipalloc-04f126e9d9b71aaadc",
  "PublicIpv4Pool": "amazon",
  "NetworkBorderGroup": "us-east-1",
  "Domain": "vpc"
}
```
