---
title: 'Governance'
excerpt: 'Governance, organizations, AWS config, Active Directory in AWS'
link: 'https://acloudguru.com/course/aws-certified-solutions-architect-associate-saa-c02'
---
# Governance
## Organizations
A free governance tool that allows you to create and manage multiple AWS accounts. With it, you can control your accounts from a single location rather than jumping from account to account.

Key Features
* Logging Accounts
  * it is best practice to create a specific account dedicated to logging. CloudTrail supports logs aggregation.
* Programmatic Creation
  * Easily create and destroy new AWS accounts
* Reserved Instances
  * RIs can be shared across all accounts
* Consolidated Billing
  * The primary account pays the bills
* Service Control Policies
  * SCPs can limit users' permissions.
  * A SCP is like a IAM policy. Written in JSON, but is the ultimate source of truth once implemented. It applies to every single resource inside an account and even apply to the root account.

SCP - Service Control Policies can never give permissions, they can only take them away. Writing a SCP with an "allow" as an effect will only narrow down that range or resource.

**Control**
* SCPs are the best way to have final say in what you can do in your AWS account.

**Cost** 
* Billing can easily roll up to a single account for payment.

**CloudTrail**
* It's important to know you can designate a single AWS account to hold your logs

**Sharing RIs** (Reserved Instance)
* RIs can be shared across accounts. This allows you to have one billing account to hold RIs.

## RAM Resource Access Manager
is a free service that allows you to share AWS resources with other accounts. Easily share resources rather than having to create duplicate copies in your different accounts.

**What can be shared**
* Transit Gateways
* VPC subnets
* License Manager
* Route 53 Resolver
* Dedicated Hosts
* Much more

RAM vs. VPC Peering?

Should you choose RAM or VPC Peering? If you are sharing resources in the same region, choose RAM, because it is so easy to use. If you are sharing resources across regions, choose VPC Peering. If RAM is not available as a option on the test, then VPC Peering, which is going to be common. VPC Peering is great!

* Sharing resources saves money.
* VPC Peering excels when you're connecting 2 separate networks
* Paying - RAM is free, but the user creating the architecture pays for that architecture they create.
* Organizations - RAM easily allows organizations to share architecture.

## Cross Account Role Access

Roles are your Friend - anytime credentials are mentioned, scan answers looking for roles.

It is preferred to create cross-account roles rather than additional IAM users.

Use roles everywhere

Auditing, any temp employees get role access. No permanent credentials.

Temporary is preferred. You can't permanently assume a role.

You need to know you can set it up, no specifics

## Manage inventory with AWS Config
Inventory Management and Control tool. It allows you to show the history of your infrastructure along with creating rules to make sure it conforms to the best practices you've laid out.

**Query** - You can easily discover what architecture you have in your account. You can query by resource type, tag, and even see deleted infrastructure.

**Enforce** - Rules can be created to flag when something is going wrong. Whenever a rule is violated, you can be alerted or even have it automatically fixed.

**Learn** - What is the history of your environment? When did something change? Who made that call?

Look for config if any question lays out any type of standard that needs to be managed across your accounts. *For example*, you'd use Config to ensure your s3 buckets aren't publicly readable or your users are using the approved AMI in their EC2 instances.

* Standards - Config is the best way to check what standards are applied to your architecture.
* Deleted Resources - You can track previously deleted AWS resources using Config.
* Enforcement - You can use Automation documents or Lambda to enforce your standards.
* Consolidation - You can roll up all your results to a single region.

## Active Directory in AWS
AWS Directory Service is a fully managed version of Active Directory. It allows you to offload the painful parts of keeping AD online to AWS while still giving you the full control and flexibility AD provides.

Each type of Directory Service has a use case.
* Managed Microsoft AD - This is the entire AD suite. You can easily build out AD in AWS.
* AD Connector - Creates a tunnel between AWS and your on-premises AD.
* Simple AD - Standalone directory powered by Linux Samba AD compatible server. Gives you the basic tool kit of AD.

2 primary uses for AWS AD.
  * Managed Microsoft AD is Active Directory in the cloud.
  * AD Connector is leaving Microsoft AD on premises and tunneling into AWS

## Exploring Cost Explorer
Why do we budget? You have to know where the money is going or your just burning cash. Cost Explorer is an easy to use tool that allows you to visualize your cloud cost. You can generate reports based on a variety of factors, including resource tags.

Cost Explorer lets you build reports.
* Service - Easily break down cost on service by service basis
* Time - What was your bil last month? What about next month?
* Filter - Where is the spend coming from? Filter on tags, categories, etc.

If exam is asking about budgeting or controlling spend. Remember you can set filters on regions, tags and more. You have to set tags to track. It can be predictive and show you a possible future.

## AWS Budgets
Budgets allows organizations to easily plan and set expectations around cloud costs. You can easily track ongoing spending and create alerts to let users know when they're close to exceeding their allotted spending.

4 types of budgets you can create
* Cost Budget - How much are we spending?
* Usage Budgets - How much are we using?
* Reservation Budgets - Are we being efficient with our reserved Instances (RIs)
* Saving Plan Budget - Is what we're doing covered by our savings plan?

You can filter using tags when creating a budget and users can be alerted on current spend or projected spend. You can use Cost Explorer when creating a budget. Alerting users are the best way to let them know they are getting close. Be proactive, once the money is gone, it's gone.

## Auditing with Trusted Advisor
A fully managed, best-practice auditing tool. It will scan 5 different parts of your account and look for places where you could improve your adoption of the recommended best practices provided by AWS.

* Cost Optimization - Are you spending money on resources that aren't needed?
* Performance - Are your r services configured properly?
* Security - Is your architecture full of vulnerabilities?
* Fault Tolerance - Are you protected when something fails?
* Service Limits - Do you have room to scale?

Automation is important. Focus on answers that have a automation component. At minimum you can alert a user that something is potentially wrong.

Alerts - Tell someone there is a issue with sns

Cost - To get the most useful checks you will need a Business or Enterprise support plan.

Limits - Trusted Advisor will not **fix** the problem. You need something like Lambda.

Automate - Use CloudWatch Events ( EventBridge) to kick off Lambda to solve the problem.