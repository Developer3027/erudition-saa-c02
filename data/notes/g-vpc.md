---
title: 'VPC'
excerpt: 'Virtual Private Cloud. Your network in the cloud.'
link: 'https://acloudguru.com/course/aws-certified-solutions-architect-associate-saa-c02'
---

# Virtual Private Cloud

## VPC Overview

## Using NAT gateways for internet access

use a NAT (network address translation) gateway to enable instances in a private subnet to connect to the internet or other AWS service while preventing the internet from initiating a connection with those instances.

- redundant inside the AZ
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

- Every VPC comes automatically with a default network ACL that by default allows inbound and outbound traffic.
- Create a custom network ACL will, by default, deny all inbound and outbound traffic
- Subnets must have a network ACL. Subnet will automatically associate with the default network ACL if you do not explicitly associate with a custom network ACL
- Block IP address with network ACL, not security groups.
- A subnet can be associated with only 1 network ACL at a time, but the network ACL can cover multiple subnets.
- Network ACLs contain a numbered list of rules that are evaluated in order starting with the lowest number.
- Network ACLs have separate inbound and outbound rules and each rule can deny or allow traffic.
- Network ACLs are **stateless**. Inbound traffic rules are subject to outbound rules

## Private communication using VPC Endpoints

Like the NAT gateway but only for AWS services. Enables you to privately connect your VPC to supported AWS services and VPC endpoint services powered by PrivateLink without requiring an internet gateway, NAT device, VPN connection, or AWS Direct Connect connection.

- VPC endpoints are virtual vpc components that are horizontally scaled, redundant, and highly available that allow your vpc to communicate directly with AWS services without leaving the AWS network.
- Do not impose availability risks or bandwidth constraints to the network.
- when you want to connect to AWS services without leaving the Amazon internal network.
- Two types
  - Interface Endpoint - elastic network interface with private IP address, serves as a entry point for traffic headed to aws service.
  - Gateway Endpoint - similar to NAT gateway, virtual device you provision, supports s3 and dynamoDB

## AWS Private Link

- Allow tens, hundred, thousands of VPCs to share the resources of your VPC.
- No peering, route table or NAT gateway
- Requires a Network Load Balancer on the service VPC and a ENI on the customer VPC

## Build solutions across VPCs with peering

VPC Peering

- Allows you to connect 1 vpc to another via a direct network route using private IP addresses.
- Transitive peering is not supported and must be a hub and spoke model
- You can peer between regions
- No overlapping CIDR address ranges

## Securing your network with VPN CloudHub

If you have multiple sites, each with it's own VPN connection, you can use AWS VPN CloudHub to connect those sites together.

- Hub and spoke model
- low cost and easy to manage
- Operates over the internet, but all traffic between the customer gateway and the CloudHub is encrypted

## Connecting On-Premises with Direct Connect

Direct Connect - A cloud service solution that makes it easy to establish a dedicated network connection from your premises to AWS.

In many cases you can reduce your network cost, increase bandwidth throughput, and provide a more consistent network experience than internet based connections.

2 types of direct connect offered

- Dedicated Connection: physical ethernet connection associated with a single customer. Can be requested through the AWS console , CLI or API.
- Hosted Connection: physical ethernet connection that a AWS direct connect partner provisions on behalf of the customer.

VPN is secure but painfully slow. Direct connect is fast, secure, reliable, and able to take massive throughput.

## Simplify network with transit gateway

can simplify a larger networks complexity.

- Allows you to have transitive peering between thousands of VPCs and on premise data centers.
- works on hub and spoke model
- works on regional basis, but you can have it multi-region.
- can use it across multiple AWS accounts using RAM (resource access manager)
- you can use route tables to limit how VPCs talk to each other
- works with direct connect as well as VPN connection
- Supports IP multicast (not supported by any other AWS service)
