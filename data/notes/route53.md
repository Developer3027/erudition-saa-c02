---
title: 'Route 53'
excerpt: 'DNS, Record Types, Routing Policies'
link: 'https://acloudguru.com/course/aws-certified-solutions-architect-associate-saa-c02'
---

# Route 53

## DNS

DNS is how computers reference addresses on the internet. It translates the domain name into the ip address.

- IPv4 is a 32 bit field and has over 4 billion different addresses. (4,294,967,296)
- \*IPv6 created to solve the depletion issue and is a 128 bit field. Has over 340 undecillion addresses. (340,282,366,920,938,463,463,374,607,431,768,211,456)
- If a ip address was a single grain of sand, then the number of IPv4 addresses would be a dump truck. IPv6 would be the sun.

**Top level domain**
If we look at the web address _"bbc.co.uk_ BBC is the registered domain name. ".co" is the second-level domain name. ".uk" is the top-level domain name.

Top-level domain names are controlled by the **Internet Assigned Numbers Authority** (IANA). The Top-Level domains are stored in a root zone database of all available top-level domains.

- [view database](http://www.iana.org/domains/root/db)

**Domain Registrars**
A registrar is an authority that can assign domain names directly under one or more top-level domains. These domains are registered with InterNIC, a service of ICANN, which enforces the uniqueness of domain names across the internet.

Each domain name becomes registered in a central database known as the WHOIS database.

**SOA** Start of Authority - record stores

**_Where DNS starts_**

- the name of the server that supplied the data for the zone.
- The administrator of the zone
- The current version of the data file.
- The default number of seconds form the time to live file on resource records

**NS** Name Server -

**_Where the DNS records are stored_**

records are used by top-level domain servers to direct traffic to the content DNS server that contains the authoritative DNS records.

- You visit google.com, the browser looks up in .com and finds NS.awsdns.com.
- Browser looks up the NS record and finds the SOA
- SOA contains things like A records, C name, TTL, and such

**A record**
Fundamental type of DNS record used by the computer to translate the name of the domain to an IP address.

**TTL**
Time to live - this is the amount of time the registration stays cached in a server. If you are moving your site from one place to another, then lower the TTL and the move can be reflected in the caches sooner.

**CNAME**
A way to map to your site. For example, you have google.com but want m.google.com to be mapped to the mobile version of the site.

**CNAME record can not** be used for naked domain names (zone apex record). You can not have a CNAME for http://sitename.com

**Alias Records**
used to map resource record sets in your hosted zone to load balancers, CloudFront distributions, or S3 buckets that are configured as websites.

A Alias record is a AWS thing.

Work like C Name records in that you can map one DNS name (www.example.com) to another "target" DNS name (elb123.elb.amazon.com)

A Record / **Alias can** be used for a naked domain name (zone apex record).

**Health Checks**
- You can set health checks on individual record sets.
- If a record set fails a health check, it will be removed from route 53 until it passes a health check.
- you can set SNS notifications to alert you about failed health checks.

**7 Routing Policies with Route 53**

**Simple Routing**
![simple route](https://dev3027public.s3.amazonaws.com/rt53SimpleRoute.png)
  - You can only have one record with multiple IP addresses
  - in the example we had a server running in Virginia and one in Asia. Created a Simple Routing record, left the domain name as default, (empty) and put in both ip address in the value input on separate lines (no comma).


**Weighted Routing**
![weighted route](https://dev3027public.s3.amazonaws.com/rt53WeightedRoute.png)
  - you can assign weighted values to where you want traffic to go.
  - Setting up a health check is optional here and should be done before creating the record.
  - You can send different percentages of traffic to the domain to different servers. 
  - example, you want 30% of traffic to go to us-east1 and 70% of traffic to go to us-west.


**Latency-Based Routing**
  - Route 53 will determine the latency value for visiting the site and send traffic to the one with the least.
  - example - south africa user visits site. One server in eu-west has 53ms latency and one server in ap-southeast has 300ms latency. Route 53 will send user to eu-west.


**Failover Routing**
![failover route](https://dev3027public.s3.amazonaws.com/rt53FailoverRoute.png)
  - Failover routing policies are used when you want to create a active/passive set up.
  - Use failover if you want a primary site but also want a secondary site available if the primary were to go down. Route 53 will do a health check and if it fails then it will route to the secondary site.


- Geolocation Routing
  - ability to route europe customers to europe servers and North America customers to US servers. Can also be done by countries.
- Geoproximity Routing (Traffic Flow Only)
  - can route traffic based on users location and resources.
  - can also route more or less traffic to a specific resource by setting a bias. Bias expands or shrinks a region from which traffic is routed to a resource.
  - You must use Route 53 traffic flow
- Multivalue Answer Routing
  - simple routing but with health check.

You can set up health checks for your instances. If a ec2 instance fails then it will be removed from Route 53 until it passes. You can set up sns messaging to alert you on health checks.

**Tips**

Understand the difference between an Alias record and a CNAME record.

If you are given the choice of choosing between an Alias or CNAME record, dealing with AWS, always choose an Alias record over a CNAME.
