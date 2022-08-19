---
title: 'Security'
excerpt: 'Security, Cloudtrail, Shield, WAF, GuardDuty, Macie, Secret Manager'
link: 'https://acloudguru.com/course/aws-certified-solutions-architect-associate-saa-c02'
---

# Security
## DDoS
A distributed Denial of Service attack attempts to make your website or application unavailable to your end users.
* Common DDoS attacks include Layer 4 attacks such as SYN floods or NTP amplification attacks
* Common Layer 7 attacks include floods of GET/POST requests.

## Log API calls with cloudTrail

AWS CloudTrail increases visibility into your user and resource activity by recording AWS Management Console actions and API calls. You can identify which users and accounts called AWS, the source IP address from which the calls were made, and when the calls occurred. Think CCTV

CloudTrail does not see RDP or SSH into the EC2

Stores logs in S3 bucket

What is logged?
* Metadata around API calls
* The identity of the API caller
* The time of the API call
* The source IP address of the API caller
* The request parameters
* The response elements returned by the service

Allows for after the fact incident investigation and gives near real time intrusion detection.

Industry and regulatory compliance

## Shield
AWS Shield is Free DDoS protection
* Protects all AWS customers on Elastic Load Balancers (ELB), Amazon CloudFront, and Route 53.
* Protects against SYN / UDP floods, reflection attacks, and other Layer 3 and Layer 4 attacks.
* WAF is protection for applications
* Advanced Shield cost $3000 USD a month but will give you dedicated 24/7 DDoS response team

Shield Advanced
* Provides enhanced protections for your applications running on ELB CloudFront and Route 53 against larger and more sophisticated attacks.
* Offers always-on flow-based monitoring of network traffic and active application monitoring to provide near real time notifications of DDoS attacks.
* Gives you 24/7 access to the DDoS Response Team (DRT) to help manage and mitigate application-layer DDoS attacks.
* Protects your AWS bill against higher fees due to ELB CloudFront and Route 53 usage spikes during a DDoS attack.

## AWS WAF - Web Application Firewall
Lets you monitor the HTTP and HTTPS requests that are forwarded to CloudFront or an Application Load Balancer. You can also control access to your content.

can configure conditions such as what IP addresses are allowed to make this request or what query string param's need to be passed for the request to be allowed. The ALB or CloudFront will either allow this content to be received or give an HTTP 403 status code.

Operate on Layer 7

3 different behaviors
* Allow all requests except the ones you specify.
* Block all requests except the ones you specify.
* Count the requests that match the properties you specify.

Define conditions
* IP address that requests originate from.
* Country that requests originate from.
* Values in request headers
* Presence of SQL code that is likely to be malicious ( known as SQL injection )
* Presence of a script that is likely to be malicious ( known as cross-sire scripting )
* Strings that appear in the requests - either specific strings of strings that match regular expression (regex) patterns

## GuardDuty
Threat detection service that uses machine learning to continuously monitor for malicious behavior.
Takes 7 to 10 days to get baseline.
Uses AI to learn whats normal and alerts you when it sees something not normal.
* Unusual API calls, calls from a known malicious IP
* Attempts to disable CloudTrail logging
* Unauthorized deployments
* Compromised instances
* Reconnaissance be would be attackers
* Port scanning, failed logins

Features
* Alerts appear in the GuardDuty console and CloudWatch Events
Receives feeds from third parties like Proofpoint and CrowdStrike, as well as AWS Security, about known malicious domains and IP addresses, etc
Monitors CloudTrail logs, VPC Flow Logs, and DNS logs
* Centralize threat detection across multiple AWS acounts
* Automated response using CloudWatch Events and Lambda
* Machine learning and anomaly detection

## Macie - monitor s3 buckets
PII - Personal Identifiable Information
* Personal data used to establish an individual's identity
* This data could be exploited by criminals, used in identity theft and financial fraud
* Home address, email address, Social Security number
* Passport number, driver's license number
* Date of birth, phone number, bank account, credit card number

Allows for automated analysis of data
* uses AI to recognize if your se3 objects contain sensitive data, like PII, PHI, and financial data
* Alerts you to un-encrypted buckets
* Alerts you about public buckets
* can also alert you about buckets shared with AWS accounts outside of those defined in your organizations
* Great for frameworks like HIPAA and GDPR and guards against identity theft

Macie Alerts
* filter and search alerts in AWS console
* Alert sent to EventBridge can be integrated with security incident and event management system (SIEM)
* Can be integrated with AWS Security ub for a broader analysis of your organizations security posture
* Can also be integrated with other Aws services, such as Step Functions, to automatically take remediation actions

## Secure with Inspector
an automated security assessment service that helps improve the security and compliance of applications deployed on AWS. It produces a detailed list of security findings prioritized by level of security. Can be viewed by inspector console or api. 

2 types
* Network assessment - network configuration checks for ports reachable from outside VPC. Agent not required.
* Host assessment - Vulnerable software (CVE), host hardening (CIS Benchmarks), and security best practices. agent required.

How it works
1) create assessment target
2) install agents on EC2 instances. AWS will automatically install the agent on instances that allow system manager run command.
3) create assessment template
4) perform assessment run
5) review findings

## Security Key Management with SSH and HSM
KMS - Key Management Service. Integrated with other AWS services. EBS, S#, and RDS. Central control over over lifecycle and permissions of keys. Can control who can manage keys separately from who can use them.

CMK - Customer Master Key

includes metadata such as key id, creation date, description, and key state. also contains the key material used to encrypt and decrypt data.

HSM - Hardware Security Module.

physical device that safeguards and manages digital keys and performs encryption and decryption functions. Will contain one or more crypto processor chips.

3 ways to generate a CMK
1) AWS creates for you. Key material generated within HSM managed by KMS.
2) Import your own key material and associate with CMK
3) Generate and use in CloudHSM as part of the custom key store in KMS.

You can choose to have KMS automatically rotate CMK every year, provided those keys were generated within KMS HSM's. Not supported for imported keys, asymmetric keys, or keys generated in CloudHSM cluster using KMS custom key feature.

The primary way to manage your KMS CMKs is with policies. Policies are documents that describe who has access to what. Policies attached to an identity are IAM policies, but policies attached to resources are resource-based policies.

All KMS CMK's have a key policy, which is a resource-based policy, also called a key policy.

CloudHSM / Hardware Security Module
* Dedicated HSM to you
* Full control of underlying hardware
* Full control of users, groups, keys, etc
* No automatic key rotation

## Secrets Manager
service that securely stores, encrypts, and rotates your database credentials and other secrets.
* Encryption in transit and at rest using KMS
* Automatically rotates credentials
* Apply fine-grained access control using IAM policies
* Costs money but is highly scalable
* Your application makes an API call to Secrets Manager to retrieve the secret programmatically
* Reduces the risk of credentials being compromised

What can be stored?
* RDS credentials
* non-RDS credentials
* key-value pair like (SSH and API keys)

Ensure your application are updated and ready to retrieve from credentials manager before turning it on. Turning it on will cause it to rotate credentials to test the configuration.

## Parameter Store
A capability of AWS systems manager that provides secure, hierarchical storage for configuration data management and secrets management. You can store data such as passwords, datbase strings, Amazon Machine Image (AMI) ID's, and license codes as parameter values. You can store values as plain text or encrypted data.

just like secrets manager, but free. Has limits.
* no key rotation
* 10,000 storage limit

## Temp sharing S3 objects using Presigned URLs or Cookies
* Private object in a private S3 can be shared by generating a Presigned URL. Provide your security creds, bucket name, object key and indicate the method (like GET, HTTP method) as well as expiration date and time to generate the presigned URL.
* Presigned Cookie useful when you want to provide access to multiple restricted files. Cookie is downloaded to user computer and used to browse entire contents of restricted content.

## Advanced IAM Policy Documents
ARN Amazon Resource Name (ARN)
ARN is the URL of a Amazon resource. 

arn:partition:service:region:account_id

translation
arn: aws|aws-cn: s3|ec2|rds: us-east-1: 12345

ARN end with the resource or resource_type

Example:

arn:aws:dynamodb:us-east-1:12345:table/orders

IAM policies have no effect until they are attached. The are JSON documents.
* If they are not explicitly allowed, they are implicitly denied
* Explicit deny > everything else, So if you deny perms for a s3 then give Jack s3 perm for that bucket, Jack is up a creek.
* AWS joins all applicable policies
* AWS managed vs customer managed

## AWS Certificate Manager
allows you to create, manage, and deploy public and private SSL certs for use with other AWS services. Integrates with ELB, CloudFront, API Gateway.

* Free, pay for services using SSL like ELB.
* Auto renewals and deployment
* Easy to set up

