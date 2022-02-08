---
title: 'ELB'
excerpt: 'Elastic Load Balancer, (Application, Network, Classic)'
link: 'https://acloudguru.com/course/aws-certified-solutions-architect-associate-saa-c02'
---

# Elastic Load Balancer

Elastic Load Balancing automatically distributes incoming application traffic across multiple targets, such as Amazon EC2 instances. This can be done across multiple AZs.

Three different types of Load Balancers

- Application Load Balancer
  - smart load balancer / application aware
  - http / https
  - layer 7

A Listeners checks for connection requests from clients using the protocol and port configured.

Rules determine how the load balancer routes requests to its registered targets. Each rule consists of a priority, one or more actions, and one or more conditions.

Target Group routes requests to one or more registered targets, like a EC2 instance using the protocol and port number you specify.

Can enable sticky sessions but traffic will stick to a target group.

Only support HTTP and HTTPS.
A listener must have at least one SSL/TLS certificate on a load balancer. Uses the certificate to terminate frontend connection and decrypt request before sending to client.

- Network Load Balancer

  - performance
  - operates at connection level / layer 4
  - handle millions of request per sec / low maintenance

- Classic Load Balancer
  - testing / dev
  - balance http / https applications and use layer 7 specific features like x-forwarded and sticky sessions

504 mean the gateway has timed out
use x=forwarded-for for ip of client or end-user.

**Health Checks**
Load Balancer can be configured to do periodic health checks on registered instances to test status. If healthy at the time of the check, then the instance is considered **_in service_**. If unhealthy then it is **_Out of Service_**. Routing will return once it is healthy again.

Sticky session can be enabled if you want to stick to the same EC2 instance. Like if you are storing info locally.

If you remove a EC2 instance from a pool and load balancer continues to send traffic there, it is a sticky session issue and you should disable it.

Deregistration delay / Connection Draining - used to keep existing connection open if EC2 instance becomes unhealthy.
**_Disable_** if you want the connection to close on unhealthy check.
