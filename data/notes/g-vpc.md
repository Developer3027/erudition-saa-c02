---
title: 'VPC'
excerpt: 'Virtual Private Cloud. Your network in the cloud.'
link: 'https://acloudguru.com/course/aws-certified-solutions-architect-associate-saa-c02'
---

# Virtual Private Cloud

## VPC Overview

Be able to build VPC from scratch before taking exam. A VPC is a data center in the cloud. Logically isolated part of AWS cloud where you can define your own network. Complete control of virtual network, including your own IP address range, subnets, route tables, and network gateways (both virtual public and private).

_1 subnet is always in 1 Availability Zone (no spanning over AZ)_

**Fully Customizable Network** - you can leverage multiple layers of security, including groups and network access control lists, to help control access to Amazon EC2 instances in each subnet.
* Web - public facing subnet. Has access to and from the internet.
* Application - Private Subnet. Can only speak to web tier and database tier.
* Database - Private Subnet. Can only speak to application tier.

You can extend you corporate data center into the cloud by creating a hardware Virtual Private Network (VPN) connection between your data center and your VPC.

**CIDR Notation**

The largest network you can create is a /16 which will give you 65,536 addresses. the smallest is a /28 which will give you 16 addresses.
* review (CIDR.xyz)[https://cidr.xyz] for quick network layout.
* IP address contain 4 octets, each consisting of 8 bits giving a value between 0 and 255.

AWS will use 5 IP addresses when you create a subnet. The first four and the last one, for example;
* 10.0.0.0 Network address
* 10.0.0.1 Reserved for VPC router
* 10.0.0.2 Reserved to address the DNS base plus 2 requirements for VPC with multiple CIDR blocks.
* 10.0.0.3 Reserved for future use.
* 10.0.0.255 Network Broadcast. Not supported, so reserved

**What can we do with a VPC?**
* Launch Instances - launch instances into a subnet of your choosing.
* Custom IP Addresses - Assign custom IP address ranges in each subnet.
* Route Tables - Configure route tables between subnets.
* Internet Gateway - Create internet gateway and attach it to our VPC.
* More Control - Much better security control over your AWS resources.
* Access Control Lists - Subnet network access control lists.
* _you can use network access control lists (NACL's) to block specific IP addresses_

**Default VPC vs. Custom VPC**

Default
* Default VPC is user friendly
* All subnets in default VPC have a route out to the internet
* Each EC2 instance has both a public and private IP address

Custom
* Fully Customizable
* Takes time to set up

## Using NAT gateways for internet access

use a NAT (network address translation) gateway to enable instances in a private subnet to connect to the internet or other AWS service while preventing the internet from initiating a connection with those instances.

- redundant inside the AZ - in public subnet, multiple ec2 instances handled by aws
- managed and handled by Amazon
- no need to patch
- Not associated with security groups
- Automatically assigned a public IP address
- Starts a 5 Gbps and scales to 45 Gbps.

## Protecting resources with security groups

Communication port for computers

- Linux SSH Port 22
- Windows RDP Port 3389
- HTTP web - Port 80
- HTTPS web SSL - Prot 443

If having a connection issue, check route table, Network ACL, then the Security Group.

Security Groups are virtual firewalls for an EC2 instance. By default, everything is blocked.

To let everything in: 0.0.0.0/0
To communicate to your EC2 via SSH, RDP, or HTTP, open the correct port

Security Groups are stateful. If you send a request from your instance, the response traffic for that request is allowed to flow in regardless of inbound security group rules.

Responses to allowed inbound traffic are allowed to flow out, regardless of outbound rules.

## Control subnet traffic with Network ACL's
Network ACL's

First line of defense (Security Group is the last line of defense)

A Network Access Control List (ACL) is an optional layer for your VPC that acts as a firewall for controlling traffic in and out of one or more subnets.

You might set up a network ACL with similar rules to your security group in order to add another layer of security to your VPC.

- Every VPC comes automatically with a default network ACL that _by default allows all_ inbound and outbound traffic.
- Create a custom network ACL will, _by default, deny all_ inbound and outbound traffic
- Subnets must have a network ACL. Subnet will automatically associate with the default network ACL if you do not explicitly associate with a custom network ACL
- _Block IP address with network ACL_, not security groups.
- A subnet can be associated with only 1 network ACL at a time, but the network ACL can cover multiple subnets.
- Network ACLs contain a numbered list of rules that are evaluated in order starting with the lowest number. - 
  - best practice for numbering rules is to start with 100 and the next rule number will be the next hundred.
    - 100 allow http(80) / 200 allow ssh(22)
  - Ephemeral Ports - different OS use different ports for different communications. AWS best practice is to allow / open ports 1024 - 65535. You can deny any malicious traffic within that range, just place the rule number earlier in the order than this blanket open rule.
- Network ACLs have separate inbound and outbound rules and each rule can deny or allow traffic.
- Network ACLs are **stateless**. Inbound traffic rules are subject to outbound rules (and vice versa). (security groups are stateful, so traffic allowed in is also allowed out. ACL is stateless so rules are set for traffic in, as well as traffic out.)

## Private communication using VPC Endpoints

Like the NAT gateway but only for AWS services. Enables you to privately connect your VPC to supported AWS services and VPC endpoint services powered by PrivateLink without requiring an internet gateway, NAT device, VPN connection, or AWS Direct Connect connection. This is because it uses the AWS backbone and never touches the internet. Put another way, traffic between your VPC and other services does not leave the Amazon Network.

- VPC endpoints are virtual vpc components that are horizontally scaled, redundant, and highly available that allow your vpc to communicate directly with AWS services without leaving the AWS network.
- Do not impose availability risks or bandwidth constraints to the network.
- when you want to connect to AWS services without leaving the Amazon internal network.
- Two types
  - Interface Endpoint - elastic network interface with private IP address, serves as a entry point for traffic headed to aws service.
  - Gateway Endpoint - similar to NAT gateway, virtual device you provision, supports s3 and dynamoDB
    - The NAT gateway was used to provide access to the internet for the private subnet, so it was placed in the public subnet. Here the Gateway is placed in the private subnet and allows specific traffic to a specific AWS service within AWS.

## Build solutions across VPCs with peering

VPC Peering

- Allows you to connect 1 vpc to another via a direct network route using private IP addresses.
- Transitive peering is not supported and must be a hub and spoke model
- instances behave as if they were on the same private network
- you can peer VPC's with other accounts as well as with other VPC's in the same account
- You can peer between regions
- No overlapping CIDR address ranges

## AWS Private Link

- Allow tens, hundred, thousands of VPCs to share the resources of your VPC.
- No peering, route table or NAT gateway
- Requires a Network Load Balancer on the service VPC and a ENI on the customer VPC

If you see a question asking about peering VPC to tens, hundreds, or thousands of customer VPC, think AWS PrivateLink.


## Securing your network with VPN CloudHub

If you have multiple sites, each with it's own VPN connection, you can use AWS VPN CloudHub to connect those sites together.

- Hub and spoke model
- low cost and easy to manage
- Operates over the internet, but all traffic between the customer gateway and the CloudHub is encrypted

## Connecting On-Premises with Direct Connect

Direct Connect - A cloud service solution that makes it easy to establish a dedicated network connection from your premises to AWS.

Establish a private connection between AWS and your data center or office.

In many cases you can reduce your network cost, increase bandwidth throughput, and provide a more consistent network experience than internet based connections.

2 types of direct connect offered

- Dedicated Connection: physical ethernet connection associated with a single customer. Can be requested through the AWS console , CLI or API.
- Hosted Connection: physical ethernet connection that a AWS direct connect partner provisions on behalf of the customer.

VPN is secure but painfully slow. Direct connect is fast, secure, reliable, and able to take massive throughput.

If you see question talking about VPN drop out, high traffic concerns on VPN, you need to reduce network cost but increase network throughput, think Direct Connect.
* Direct Connect connects AWS directly to your Data Center.
* Useful for high-throughput workloads
* Helpful when you need a stable and reliable secure connection

## Simplify network with transit gateway

AWS Transit Gateway connects VPCs and on-premises networks through a central hub. This simplifies your network and puts and end to complex peering relationships. It acts as a cloud router - each new connection is only made once.

can simplify a larger networks complexity.

- Allows you to have transitive peering between thousands of VPCs and on premise data centers.
- works on hub and spoke model
- works on regional basis, but you can have it multi-region.
- can use it across multiple AWS accounts using RAM (resource access manager)
- you can use route tables to limit how VPCs talk to each other
- works with direct connect as well as VPN connection
- Supports IP multicast (not supported by any other AWS service)
