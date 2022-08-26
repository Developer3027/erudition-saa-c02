export const ExamPractice = [
  {
    id: "1",
    cat: "2",
    from: "ACloudGuru",
    q: "A large, big-box hardware chain is setting up a new inventory management system. They have developed a system using IoT sensors which captures the removal of items from the store shelves in near real-time and want to use this information to update their inventory system. The company wants to analyze this data in the hopes of being ahead of demand and properly managing logistics and delivery of in-demand items. Which AWS service can be used to capture this data as close to real-time as possible, while being able to both transform and load the streaming data into Amazon S3 or ElasticSearch?",
    options: [
      { id: "a", text: "Amazon Kinesis Data Firehose", correct: true },
      { id: "b", text: "Amazon Redshift", correct: false },
      { id: "c", text: "Amazon Kinesis Data Streams", correct: false },
      { id: "d", text: "Amazon Aurora", correct: false },
    ],
    explain:
      "Amazon Kinesis Data Firehose is the easiest way to reliably load streaming data into data lakes, data stores, and analytics tools. It can capture, transform, and load streaming data into Amazon S3, Amazon Redshift, Amazon Elasticsearch Service, and Splunk, enabling near-real-time analytics with existing business intelligence tools and dashboards you’re already using today. It is a fully-managed service that automatically scales to match the throughput of your data and requires no ongoing administration. It can also batch, compress, transform, and encrypt the data before loading it, minimizing the amount of storage used at the destination and increasing security.",
  },
  {
    id: "2",
    cat: "4",
    from: "ACloudGuru",
    q: "Your company needs to shift an application to the cloud. You are looking for a solution to collect, process, gain immediate insight, and then transfer the application data to AWS. Part of this effort also includes moving a large data warehouse into AWS. The warehouse is 50TB, and it would take over a month to migrate the data using the current bandwidth available. What is the best option available to perform this one time migration considering both cost and performance aspects?",
    options: [
      { id: "a", text: "AWS VPN", correct: false },
      { id: "b", text: "AWS Snowball Edge", correct: true },
      { id: "c", text: "AWS SnowMobile", correct: false },
      { id: "d", text: "AWS Direct Connect", correct: false },
    ],
    explain:
      "The AWS Snowball Edge is a type of Snowball device with on-board storage and compute power for select AWS capabilities. Snowball Edge can undertake local processing and edge-computing workloads in addition to transferring data between your local environment and the AWS Cloud.Each Snowball Edge device can transport data at speeds faster than the internet. This transport is done by shipping the data in the appliances through a regional carrier. The appliances are rugged shipping containers, complete with E Ink shipping labels. The AWS Snowball Edge device differs from the standard Snowball because it can bring the power of the AWS Cloud to your on-premises location, with local storage and compute functionality.Snowball Edge devices have three options for device configurations: storage optimized, compute optimized, and with GPU. When this guide refers to Snowball Edge devices, it's referring to all options of the device. Whenever specific information applies to only one or more optional configurations of devices, like how the Snowball Edge with GPU has an on-board GPU, it will be called out. For more information, see Snowball Edge Device Options.",
  },
  {
    id: "3",
    cat: "3",
    from: "ACloudGuru",
    q: "A small software team is creating an application which will give subscribers real-time weather updates. The application will run on EC2 and will make several requests to AWS services such as S3 and DynamoDB. What is the best way to grant permissions to these other AWS services?",
    options: [
      {
        id: "a",
        text: "Create an IAM policy that you attach to the EC2 instance to give temporary security credentials to applications running on the instance.",
        correct: false,
      },
      {
        id: "b",
        text: "Create an IAM role that you attach to the EC2 instance to give temporary security credentials to applications running on the instance.",
        correct: true,
      },
      {
        id: "c",
        text: "Create an IAM user, grant the user permissions, and pass the user credentials to the application.",
        correct: false,
      },
      {
        id: "d",
        text: "Embed the appropriate credentials to access AWS services in the application.",
        correct: false,
      },
    ],
    explain:
      "Create an IAM role in the following situations: You're creating an application that runs on an Amazon Elastic Compute Cloud (Amazon EC2) instance and that application makes requests to AWS. Don't create an IAM user and pass the user's credentials to the application or embed the credentials in the application. Instead, create an IAM role that you attach to the EC2 instance to give temporary security credentials to applications running on the instance. When an application uses these credentials in AWS, it can perform all of the operations that are allowed by the policies attached to the role. For details, see Using an IAM Role to Grant Permissions to Applications Running on Amazon EC2 Instances.",
  },
  {
    id: "4",
    cat: "3",
    from: "ACloudGuru",
    q: "Your architecture consists of an Application Load Balancer front, an Auto Scaling Group of EC2 instances, backed by an RDS database. Your security team has notified you of cross-site scripting attacks and also SQL injection attacks on the application. You have been asked to take steps to quickly mitigate these attacks. What steps should you take?",
    options: [
      {
        id: "a",
        text: "Configure Amazon GuardDuty to prevent these attacks.",
        correct: false,
      },
      {
        id: "b",
        text: "Immediately block the offending IP address on the NACL.",
        correct: false,
      },
      {
        id: "c",
        text: "Using the AWS WAF service, set up rules which block SQL injection, and cross-site scripting attacks. Associate the rules to the ALB.",
        correct: true,
      },
      {
        id: "d",
        text: "Use Amazon Inspector to detect these attacks and manually block the IP addresses from which these attacks come.",
        correct: false,
      },
    ],
    explain:
      "Correct. AWS WAF is a web application firewall that helps protect your web applications or APIs against common web exploits that may affect availability, compromise security, or consume excessive resources. AWS WAF gives you control over how traffic reaches your applications by enabling you to create security rules that block common attack patterns, such as SQL injection or cross-site scripting, and rules that filter out specific traffic patterns you define. You can get started quickly using Managed Rules for AWS WAF, a pre-configured set of rules managed by AWS or AWS Marketplace Sellers. The Managed Rules for WAF address issues like the OWASP Top 10 security risks. These rules are regularly updated as new issues emerge. AWS WAF includes a full-featured API that you can use to automate the creation, deployment, and maintenance of security rules.",
  },
  {
    id: "5",
    cat: "1",
    from: "ACloudGuru",
    q: "You are working as a Solutions Architect for an online travel company. Your application is going to use an Auto Scaling group of EC2 instances but you need to have some decoupling to store messages because of high volume. Which AWS service can be added to the solution to meet this requirement?",
    options: [
      {
        id: "a",
        text: "Elasticache",
        correct: false,
      },
      {
        id: "b",
        text: "RDS read replicas",
        correct: false,
      },
      {
        id: "c",
        text: "AWS Simple Workflow Service",
        correct: false,
      },
      {
        id: "d",
        text: "AWS SQS",
        correct: true,
      },
    ],
    explain:
      "Amazon Simple Queue Service (SQS) is a fully managed message queuing service that enables you to decouple and scale microservices, distributed systems, and serverless applications. SQS eliminates the complexity and overhead associated with managing and operating message-oriented middleware and empowers developers to focus on differentiating work. Using SQS, you can send, store, and receive messages between software components at any volume, without losing messages or requiring other services to be available. Get started with SQS in minutes using the AWS console, Command Line Interface, or SDK of your choice, and 3 simple commands. SQS offers 2 types of message queues. Standard queues offer maximum throughput, best-effort ordering, and at-least-once delivery. SQS FIFO queues are designed to guarantee that messages are processed exactly once, in the exact order that they are sent.",
  },
  {
    id: "6",
    cat: "1",
    from: "ACloudGuru",
    q: "A gaming company is creating an application which simply provides a leaderboard for specific games. The leaderboard will use DynamoDB for data, and simply needs to be updated in near real-time. An EC2 instance will be configured to house the application which will be accessed by subscribers from the Internet. Which step is NOT necessary for internet traffic to flow to and from the Internet?",
    options: [
      {
        id: "a",
        text: "Ensure that your network access control lists and security group rules allow the relevant traffic to flow to and from your instance.",
        correct: false,
      },
      {
        id: "b",
        text: "Attach an internet gateway to your VPC.",
        correct: false,
      },
      {
        id: "c",
        text: "Add a route to your subnet's route table that directs internet-bound traffic to the internet gateway.",
        correct: false,
      },
      {
        id: "d",
        text: "A route in the route table to the DynamoDB table.",
        correct: true,
      },
    ],
    explain:
      "Correct. The application needs to be able to communicate with the DynamoDB table, but this has nothing to do with the necessary steps for internet traffic flow to and from the application instance.",
  },
  {
    id: "7",
    cat: "3",
    from: "ACloudGuru",
    q: "A consultant is hired by a small company to configure an AWS environment. The consultant begins working with the VPC and launching EC2 instances within the VPC. The initial instances will be placed in a public subnet. The consultant begins to create security groups. What is true of the default security group?",
    options: [
      {
        id: "a",
        text: "You can't delete this group, nor can you change the group's rules.",
        correct: false,
      },
      {
        id: "b",
        text: "You can delete this group, however, you can't change the group's rules.",
        correct: false,
      },
      {
        id: "c",
        text: "You can delete this group or you can change the group's rules.",
        correct: false,
      },
      {
        id: "d",
        text: "You can't delete this group, however, you can change the group's rules.",
        correct: true,
      },
    ],
    explain:
      "Your VPC includes a default security group. You can't delete this group, however, you can change the group's rules. The procedure is the same as modifying any other security group. For more information, see Adding, removing, and updating rules.",
  },
  {
    id: "8",
    cat: "2",
    from: "ACloudGuru",
    q: "You work for a large healthcare provider as an AWS lead architect. There is a need to collect data in real-time from devices throughout the organization. The data will include log and event data from sources such as servers, desktops, and mobile devices. The data initially captured will be technical device data, but the goal is to expand the effort to collecting clinical data in real-time from handheld devices used by nurses and doctors. Which AWS service best meets this requirement?",
    options: [
      {
        id: "a",
        text: "Kinesis Video Streams",
        correct: false,
      },
      {
        id: "b",
        text: "AWS Lambda",
        correct: false,
      },
      {
        id: "c",
        text: "Kinesis Data Streams",
        correct: true,
      },
      {
        id: "d",
        text: "AWS Redshift",
        correct: false,
      },
    ],
    explain:
      "Correct. Kinesis Data Streams can be used to collect log and event data from sources such as servers, desktops, and mobile devices. You can then build Kinesis applications to continuously process the data, generate metrics, power live dashboards, and emit aggregated data into stores such as Amazon S3. ",
  },
  {
    id: "9",
    cat: "1",
    from: "ACloudGuru",
    q: "You have been hired as a Solutions Architect for a company that pairs photos with related story narratives in PDF format. The company needs to be able to store files in several different formats, such as PDF, JPG, PNG, Word, and several others. This storage needs to be highly durable. Which storage type will best meet this requirement?",
    options: [
      {
        id: "a",
        text: "Amazon RDS",
        correct: false,
      },
      {
        id: "b",
        text: "EC2 instance store",
        correct: false,
      },
      {
        id: "c",
        text: "S3",
        correct: true,
      },
      {
        id: "d",
        text: "DynamoDB",
        correct: false,
      },
    ],
    explain:
      "Amazon Simple Storage Service (Amazon S3) is an object storage service that offers industry-leading scalability, data availability, security, and performance. This means customers of all sizes and industries can use it to store and protect any amount of data for a range of use cases, such as websites, mobile applications, backup and restore, archive, enterprise applications, IoT devices, and big data analytics. Amazon S3 provides easy-to-use management features so you can organize your data and configure finely-tuned access controls to meet your specific business, organizational, and compliance requirements. Amazon S3 is designed for 99.999999999% (11 9s) of durability, and stores data for millions of applications for companies all around the world ",
  },
  {
    id: "10",
    cat: "3",
    from: "ACloudGuru",
    q: "A small company has nearly 200 users who already have AWS accounts in the company AWS environment. A new S3 bucket has been created which will allow roughly a third of all users access to sensitive information in the bucket. What is the most time efficient way to get these users access to the bucket?",
    options: [
      {
        id: "a",
        text: "Create a new policy which will grant permissions to the bucket. Create a group and attach the policy to that group. Add the users to this group.",
        correct: true,
      },
      {
        id: "b",
        text: "Create a new policy which will grant permissions to the bucket. Create a role and attach the policy to that role. Add the users to this role.",
        correct: false,
      },
      {
        id: "c",
        text: "Create a new role which will grant permissions to the bucket. Create a group and attach the role to that group. Add the users to this group.",
        correct: false,
      },
      {
        id: "d",
        text: "Create a new bucket policy granting the appropriate permissions and attach it to the bucket.",
        correct: false,
      },
    ],
    explain:
      'An IAM group is a collection of IAM users. Groups let you specify permissions for multiple users, which can make it easier to manage the permissions for those users. For example, you could have a group called Admins and give that group the types of permissions that administrators typically need. Any user in that group automatically has the permissions that are assigned to the group. If a new user joins your organization and needs administrator privileges, you can assign the appropriate permissions by adding the user to that group. Similarly, if a person changes jobs in your organization, instead of editing that user\'s permissions, you can remove him or her from the old groups and add him or her to the appropriate new groups. Note that a group is not truly an "identity" in IAM because it cannot be identified as a Principal in a permission policy. It is simply a way to attach policies to multiple users at one time. ',
  },
  {
    id: "11",
    cat: "1",
    from: "ACloudGuru",
    q: "Your company has recently converted to a hybrid cloud environment and will slowly be migrating to a fully AWS cloud environment. The AWS side is in need of some steps to prepare for disaster recovery. A disaster recovery plan needs to be drawn up and disaster recovery drills need to be performed. The company wants to establish Recovery Time and Recovery Point Objectives, with a major component being a very aggressive RTO, with cost not being a major factor. You have determined and will recommend that the best DR configuration to meet cost and RTO/RPO objectives will be to run a second AWS architecture in another Region in an active-active configuration. Which AWS disaster recovery pattern will best meet these requirements?",
    options: [
      {
        id: "a",
        text: "Warm Standby",
        correct: false,
      },
      {
        id: "b",
        text: "Multi-site",
        correct: true,
      },
      {
        id: "c",
        text: "Pilot Light",
        correct: false,
      },
      {
        id: "d",
        text: "Backup and restore",
        correct: false,
      },
    ],
    explain:
      "Multi-site with the active-active architecture is correct. This pattern will have the highest cost but the quickest failover.",
  },
  {
    id: "12",
    cat: "3",
    from: "ACloudGuru",
    q: "Your company is storing highly sensitive data in S3 Buckets. The data includes personal and financial information. An audit has determined that this data must be stored in a secured manner and any data stored in the buckets already or data coming into the buckets must be analyzed and alerts sent out flagging improperly stored data. Which AWS service can be used to meet this requirement?",
    options: [
      {
        id: "a",
        text: "Amazon Macie",
        correct: true,
      },
      {
        id: "b",
        text: "AWS Inspector",
        correct: false,
      },
      {
        id: "c",
        text: "AWS GuardDuty",
        correct: false,
      },
      {
        id: "d",
        text: "AWS Trusted Advisor",
        correct: false,
      },
    ],
    explain:
      "Amazon Macie is a fully-managed data security and data privacy service that uses machine learning and pattern matching to discover and protect your sensitive data in AWS. Macie automatically provides an inventory of Amazon S3 buckets including a list of unencrypted buckets, publicly accessible buckets, and buckets shared with AWS accounts outside those you have defined in AWS Organizations. Then, Macie applies machine learning and pattern matching techniques to the buckets you select to identify and alert you to sensitive data, such as personally identifiable information (PII). Macie’s alerts, or findings, can be searched and filtered in the AWS Management Console and sent to Amazon CloudWatch Events for easy integration with existing workflow or event management systems, or to be used in combination with AWS services, such as AWS Step Functions to take automated remediation actions.",
  },
  {
    id: "13",
    cat: "2",
    from: "ACloudGuru",
    q: "A team member has been tasked to configure four EC2 instances for four separate applications. These are not high-traffic apps, so there is no need for an Auto Scaling Group. The instances are all in the same public subnet and each instance has an EIP address, and all of the instances have the same Security Group. But none of the instances can send or receive internet traffic. You verify that all the instances have a public IP address. You also verify that an internet gateway has been configured. What is the most likely issue?",
    options: [
      {
        id: "a",
        text: "You are using the default NACL.",
        correct: false,
      },
      {
        id: "b",
        text: "There is no route in the route table to the internet gateway (or it has been deleted).",
        correct: true,
      },
      {
        id: "c",
        text: "The route table is corrupt.",
        correct: false,
      },
      {
        id: "d",
        text: "Each instance needs its own security group.",
        correct: false,
      },
    ],
    explain:
      "The question details all of the configuration needed for internet access, except for a route to the IGW in the route table. This is definitely a key step in any checklist for internet connectivity. It is quite possible to have a subnet with the 'Public' attribute set but no route to the Internet in the assigned Route table. (test it yourself). This may have been a setup error, or someone may have thoughtlessly altered the shared Route table for a special case instead of creating a new Route table for the special case.",
  },
  {
    id: "14",
    cat: "3",
    from: "ACloudGuru",
    q: "You have been evaluating the NACLs in your company. Currently, you are looking at the default network ACL. What is true about the default network ACL?",
    options: [
      {
        id: "a",
        text: "The default NACL denies all traffic.",
        correct: false,
      },
      {
        id: "b",
        text: "You can add or remove rules from the default network ACL.",
        correct: true,
      },
      {
        id: "c",
        text: "You cannot edit the default NACL.",
        correct: false,
      },
      {
        id: "d",
        text: "You can only edit the default NACL if it is the only NACL in the VPC.",
        correct: false,
      },
    ],
    explain:
      "The default network ACL is configured to allow all traffic to flow in and out of the subnets with which it is associated. You are able to add and remove your own rules from the default network ACL. However, each network ACL also includes a rule whose rule number is an asterisk. This rule ensures that if a packet doesn't match any of the other numbered rules, it's denied. You can't modify or remove this rule.",
  },
  {
    id: "15",
    cat: "4",
    from: "ACloudGuru",
    q: "You have been tasked with migrating an application and the servers it runs on to the company AWS cloud environment. You have created a checklist of steps necessary to perform this migration. A subsection in the checklist is security considerations. One of the things that you need to consider is the shared responsibility module. Which option does AWS handle under the shared responsibility model?",
    options: [
      {
        id: "a",
        text: "Firewall Configuration",
        correct: false,
      },
      {
        id: "b",
        text: "Physical Hardware Infrastructure",
        correct: true,
      },
      {
        id: "c",
        text: "User Authentication",
        correct: false,
      },
      {
        id: "d",
        text: "Client-side data encryption",
        correct: false,
      },
    ],
    explain:
      "Security and compliance is a shared responsibility between AWS and the customer. This shared model can help relieve the customer's operational burden as AWS operates, manages, and controls the components from the host operating system and virtualization layer down to the physical security of the facilities in which the service operates. The customer assumes responsibility for, and management of, the guest operating system (including updates and security patches), other associated application software, and the configuration of the AWS provided security group firewall. Customers should carefully consider the services they choose, as their responsibilities vary depending on the services used, the integration of those services into their IT environment, and applicable laws and regulations. The nature of this shared responsibility also provides the flexibility and customer control that permits the deployment. This differentiation of responsibility is commonly referred to as Security “of” the Cloud versus Security “in” the Cloud. AWS responsibility “Security of the Cloud”: AWS is responsible for protecting the infrastructure that runs all of the services offered in the AWS Cloud. This infrastructure is composed of the hardware, software, networking, and facilities that run AWS Cloud services.",
  },
  {
    id: "16",
    cat: "1",
    from: "ACloudGuru",
    q: "A company needs to perform asynchronous processing, and has Amazon SQS as part of a decoupled architecture. The company wants to ensure that the number of empty responses from polling requests are kept to a minimum. What should a solutions architect do to ensure that empty responses are reduced?",
    options: [
      {
        id: "a",
        text: "Increase the maximum message retention period for the queue",
        correct: false,
      },
      {
        id: "b",
        text: "Increase the maximum receives for the redrive policy for the queue.",
        correct: false,
      },
      {
        id: "c",
        text: " Increase the default visibility timeout for the queue.",
        correct: false,
      },
      {
        id: "d",
        text: "Increase the receive message wait time for the queue.",
        correct: true,
      },
    ],
    explain:
      "When the ReceiveMessageWaitTimeSeconds property of a queue is set to a value greater than zero, long polling is in effect. Long polling reduces the number of empty responses by allowing Amazon SQS to wait until a message is available before sending a response to a ReceiveMessage request.",
  },
  {
    id: "17",
    cat: "1",
    from: "ACloudGuru",
    q: "A company currently stores data for on-premises applications on local drives. The chief technology officer wants to reduce hardware costs by storing the data in Amazon S3 but does not want to make modifications to the applications. To minimize latency, frequently accessed data should be available locally. What is a reliable and durable solution for a solutions architect to implement that will reduce the cost of local storage?",
    options: [
      {
        id: "a",
        text: "Deploy an SFTP client on a local server and transfer data to Amazon S3 using AWS Transfer for SFTP",
        correct: false,
      },
      {
        id: "b",
        text: "Deploy an AWS Storage Gateway volume gateway configured in cached volume mode.",
        correct: true,
      },
      {
        id: "c",
        text: "Deploy an AWS DataSync agent on a local server and configure an S3 bucket as the destination.",
        correct: false,
      },
      {
        id: "d",
        text: "Deploy an AWS Storage Gateway volume gateway configured in stored volume mode.",
        correct: false,
      },
    ],
    explain:
      "An AWS Storage Gateway volume gateway connects an on-premises software application with cloudbacked storage volumes that can be mounted as Internet Small Computer System Interface (iSCSI) devices from on-premises application servers. In cached volumes mode, all the data is stored in Amazon S3 and a copy of frequently accessed data is stored locally",
  },
  {
    id: "18",
    cat: "4",
    from: "ACloudGuru",
    q: "A solutions architect wants to design a solution to save costs for Amazon EC2 instances that do not need to run during a 2-week company shutdown. The applications running on the instances store data in instance memory (RAM) that must be present when the instances resume operation. Which approach should the solutions architect recommend to shut down and resume the instances?",
    options: [
      {
        id: "a",
        text: "Modify the application to store the data on instance store volumes. Reattach the volumes while restarting them. ",
        correct: false,
      },
      {
        id: "b",
        text: "Snapshot the instances before stopping them. Restore the snapshot after restarting the instances.",
        correct: false,
      },
      {
        id: "c",
        text: "Run the applications on instances enabled for hibernation. Hibernate the instances before the shutdown",
        correct: true,
      },
      {
        id: "d",
        text: "Note the Availability Zone for each instance before stopping it. Restart the instances in the same Availability Zones after the shutdown.",
        correct: false,
      },
    ],
    explain:
      "Hibernating an instance saves the contents of RAM to the Amazon EBS root volume. When the instance restarts, the RAM contents are reloaded.",
  },
  {
    id: "19",
    cat: "1",
    from: "ACloudGuru",
    q: "A software company has created an application to capture service requests from users and also enhancement requests. The application is deployed on an Auto Scaling group of EC2 instances fronted by an Application Load Balancer. The Auto Scaling group has scaled to maximum capacity, but there are still requests being lost. The cost of these instances should remain the same. What step can the company take to ensure requests aren't lost?",
    options: [
      {
        id: "a",
        text: "Use a Network Load Balancer instead for faster throughput.",
        correct: false,
      },
      {
        id: "b",
        text: "Use larger instances in the Auto Scaling group.",
        correct: false,
      },
      {
        id: "c",
        text: "Use an SQS queue with the Auto Scaling group to capture all requests.",
        correct: true,
      },
      {
        id: "d",
        text: "Use spot instances to save money.",
        correct: false,
      },
    ],
    explain:
      "There are some scenarios where you might think about scaling in response to activity in an Amazon SQS queue. For example, suppose that you have a web app that lets users upload images and use them online. In this scenario, each image requires resizing and encoding before it can be published. The app runs on EC2 instances in an Auto Scaling group, and it's configured to handle your typical upload rates. Unhealthy instances are terminated and replaced to maintain current instance levels at all times. The app places the raw bitmap data of the images in an SQS queue for processing. It processes the images and then publishes the processed images where they can be viewed by users. The architecture for this scenario works well if the number of image uploads doesn't vary over time. But if the number of uploads changes over time, you might consider using dynamic scaling to scale the capacity of your Auto Scaling group",
  },
  {
    id: "20",
    cat: "2",
    from: "ACloudGuru",
    q: "A team of architects is designing a new AWS environment for a company which wants to migrate to the Cloud. The architects are considering the use of EC2 instances with instance store volumes. The architects realize that the data on the instance store volumes are ephemeral. Which action will not cause the data to be deleted on an instance store volume?",
    options: [
      {
        id: "a",
        text: "The underlying disk drive fails.",
        correct: false,
      },
      {
        id: "b",
        text: "Reboot",
        correct: true,
      },
      {
        id: "c",
        text: "Instance is stopped.",
        correct: false,
      },
      {
        id: "d",
        text: "Hardware disk failure.",
        correct: false,
      },
    ],
    explain:
      "Some Amazon Elastic Compute Cloud (Amazon EC2) instance types come with a form of directly attached, block-device storage known as the instance store. The instance store is ideal for temporary storage, because the data stored in instance store volumes is not persistent through instance stops, terminations, or hardware failures.",
  },
  {
    id: "21",
    cat: "4",
    from: "ACloudGuru",
    q: "Your company is storing stack traces for application errors in an S3 Bucket. The engineers using these stack traces review them when addressing application issues. It has been decided that the files only need to be kept for four weeks then they can be purged. How can you meet this requirement in S3?",
    options: [
      {
        id: "a",
        text: "Create a bucket policy to purge the rules after one month.",
        correct: false,
      },
      {
        id: "b",
        text: "Write a cron job to purge the files after one month.",
        correct: false,
      },
      {
        id: "c",
        text: "Add an S3 Lifecycle rule to archive these files to Glacier after one month.",
        correct: false,
      },
      {
        id: "d",
        text: "Configure the S3 Lifecycle rules to purge the files after a month.",
        correct: true,
      },
    ],
    explain:
      "To manage your objects so that they are stored cost-effectively throughout their lifecycle, configure their Amazon S3 Lifecycle. An S3 Lifecycle configuration is a set of rules that define actions that Amazon S3 applies to a group of objects. There are two types of actions: Transition actions define when objects transition to another storage class. For example, you might choose to transition objects to the S3 Standard-IA storage class 30 days after you created them, or archive objects to the S3 Glacier storage class one year after creating them. Expiration actions define when objects expire. Amazon S3 deletes expired objects on your behalf. The lifecycle expiration costs depend on when you choose to expire objects.",
  },
  {
    id: "22",
    cat: "2",
    from: "ACloudGuru",
    q: "An application is hosted on an EC2 instance in a VPC. The instance is in a subnet in the VPC, and the instance has a public IP address. There is also an internet gateway and a security group with the proper ingress configured. But your testers are unable to access the instance from the Internet. What could be the problem?",
    options: [
      {
        id: "a",
        text: "Make sure the instance has a private IP address.",
        correct: false,
      },
      {
        id: "b",
        text: "A virtual private gateway needs to be configured.",
        correct: false,
      },
      {
        id: "c",
        text: "A NAT gateway needs to be configured.",
        correct: false,
      },
      {
        id: "d",
        text: "Add a route to the route table, from the subnet containing the instance, to the Internet Gateway.",
        correct: true,
      },
    ],
    explain:
      "The question doesn't state if the subnet containing the instance is public or private. An internet gateway is a horizontally scaled, redundant, and highly available VPC component that allows communication between your VPC and the internet. To enable access to or from the internet for instances in a subnet in a VPC, you must do the following: \u000D \u2022 Attach an internet gateway to your VPC.\u000D \u2022 Add a route to your subnet's route table that directs internet-bound traffic to the internet gateway. If a subnet is associated with a route table that has a route to an internet gateway, it's known as a public subnet. If a subnet is associated with a route table that does not have a route to an internet gateway, it's known as a private subnet.\u000D \u2022 Ensure that instances in your subnet have a globally unique IP address (public IPv4 address, Elastic IP address, or IPv6 address).\u000D \u2022 Ensure that your network access control lists and security group rules allow the relevant traffic to flow to and from your instance. \u000D \u2022 In your subnet route table, you can specify a route for the internet gateway to all destinations not explicitly known to the route table (0.0.0.0/0 for IPv4 or ::/0 for IPv6). Alternatively, you can scope the route to a narrower range of IP addresses. For example, the public IPv4 addresses of your company's public endpoints outside of AWS, or the elastic IP addresses of other Amazon EC2 instances outside your VPC. To enable communication over the Internet for IPv4, your instance must have a public IPv4 address or an Elastic IP address that's associated with a private IPv4 address on your instance. Your instance is only aware of the private (internal) IP address space defined within the VPC and subnet. The internet gateway logically provides the one-to-one NAT on behalf of your instance so that when traffic leaves your VPC subnet and goes to the Internet, the reply address field is set to the public IPv4 address or elastic IP address of your instance and not its private IP address. Conversely, traffic that's destined for the public IPv4 address or elastic IP address of your instance has its destination address translated into the instance's private IPv4 address before the traffic is delivered to the VPC. To enable communication over the Internet for IPv6, your VPC and subnet must have an associated IPv6 CIDR block, and your instance must be assigned an IPv6 address from the range of the subnet. IPv6 addresses are globally unique, and therefore public by default.",
  },
  {
    id: "23",
    cat: "1",
    from: "ACloudGuru",
    q: "A database outage has been very costly to your organization. You have been tasked with configuring a more highly-available architecture. The main requirement is that the chosen architecture needs to meet an aggressive RTO in case of disaster. You have decided to use an RDS Multi-AZ deployment. How is the replication handled for RDS Multi-AZ?",
    options: [
      {
        id: "a",
        text: "You can configure a standby replica in a different Availability Zone and send traffic synchronously or asynchronously depending on your cost considerations.",
        correct: false,
      },
      {
        id: "b",
        text: "Amazon RDS automatically provisions and maintains a synchronous standby replica in a different Region.",
        correct: false,
      },
      {
        id: "c",
        text: "Amazon RDS automatically provisions and maintains a synchronous standby replica in a different Availability Zone.",
        correct: true,
      },
      {
        id: "d",
        text: "Amazon RDS automatically provisions and maintains an asynchronous standby replica in a different Availability Zone.",
        correct: false,
      },
    ],
    explain:
      "Amazon RDS provides high availability and failover support for DB instances using Multi-AZ deployments. Amazon RDS uses several different technologies to provide failover support. Multi-AZ deployments for MariaDB, MySQL, Oracle, and PostgreSQL DB instances use Amazon's failover technology. SQL Server DB instances use SQL Server Database Mirroring (DBM) or Always On Availability Groups (AGs). In a Multi-AZ deployment, Amazon RDS automatically provisions and maintains a synchronous standby replica in a different Availability Zone. The primary DB instance is synchronously replicated across Availability Zones to a standby replica to provide data redundancy, eliminate I/O freezes, and minimize latency spikes during system backups. Running a DB instance with high availability can enhance availability during planned system maintenance, and help protect your databases against DB instance failure and Availability Zone disruption.",
  },
  {
    id: "24",
    cat: "2",
    from: "ACloudGuru",
    q: "You have just started working at a company that is migrating from a physical data center into AWS. Currently, you have 25 TB of data that needs to be moved to an S3 bucket. Your company has just finished setting up a 1 GB Direct Connect drop, but you do not have a VPN currently up and running. This data needs to be encrypted during transit and at rest and must be uploaded to the S3 bucket within 21 days. How can you meet these requirements?",
    options: [
      {
        id: "a",
        text: "Upload the data to S3 using your public internet connection.",
        correct: false,
      },
      {
        id: "b",
        text: "Order a Snowcone device to transmit the data.",
        correct: false,
      },
      {
        id: "c",
        text: "Upload the data using Direct Connect.",
        correct: false,
      },
      {
        id: "d",
        text: "Use a Snowball device to transmit the data.",
        correct: true,
      },
    ],
    explain:
      "This would be the perfect choice to transmit your data. Snowball encrypts your data, so all the security and speed requirements would be met.",
  },
  {
    id: "25",
    cat: "1",
    from: "ACloudGuru",
    q: "Your company has decided to migrate a SQL Server database to a newly-created AWS account. Which service can be used to migrate the database?",
    options: [
      {
        id: "a",
        text: "DynamoDB",
        correct: false,
      },
      {
        id: "b",
        text: "Elasticache",
        correct: false,
      },
      {
        id: "c",
        text: "AWS RDS",
        correct: false,
      },
      {
        id: "d",
        text: "Database Migration Service",
        correct: true,
      },
    ],
    explain:
      "AWS Database Migration Service helps you migrate databases to AWS quickly and securely. The source database remains fully operational during the migration, minimizing downtime to applications that rely on the database. The AWS Database Migration Service can migrate your data to and from the most widely used commercial and open-source databases. AWS Database Migration Service supports homogeneous migrations such as Oracle to Oracle, as well as heterogeneous migrations between different database platforms, such as Oracle or Microsoft SQL Server to Amazon Aurora. With AWS Database Migration Service, you can continuously replicate your data with high availability and consolidate databases into a petabyte-scale data warehouse by streaming data to Amazon Redshift and Amazon S3.",
  },
  {
    id: "26",
    cat: "2",
    from: "ACloudGuru",
    q: "You are designing an architecture which will house an Auto Scaling Group of EC2 instances. The application hosted on the instances is expected to be extremely popular. Forecasts for traffic to this site expect very high traffic and you will need a load balancer to handle tens of millions of requests per second while maintaining high throughput at ultra low latency. You need to select the type of load balancer to front your Auto Scaling Group to meet this high traffic requirement. Which load balancer will you select?",
    options: [
      {
        id: "a",
        text: "You will need a Classic Load Balancer to meet this requirement.",
        correct: false,
      },
      {
        id: "b",
        text: "You will need an Application Load Balancer to meet this requirement.",
        correct: false,
      },
      {
        id: "c",
        text: "All the AWS load balancers meet the requirement and perform the same.",
        correct: false,
      },
      {
        id: "d",
        text: "You will select a Network Load Balancer to meet this requirement.",
        correct: true,
      },
    ],
    explain:
      "If extreme performance is needed for your application, AWS recommends that you use a Network Load Balancer. Network Load Balancer operates at the connection level (Layer 4), routing connections to targets (Amazon EC2 instances, microservices, and containers) within Amazon VPC, based on IP protocol data. Ideal for load balancing of both TCP and UDP traffic, Network Load Balancer is capable of handling millions of requests per second while maintaining ultra-low latencies. Network Load Balancer is optimized to handle sudden and volatile traffic patterns while using a single static IP address per Availability Zone. It is integrated with other popular AWS services such as Auto Scaling, Amazon EC2 Container Service (ECS), Amazon CloudFormation, and AWS Certificate Manager (ACM).",
  },
  {
    id: "27",
    cat: "1",
    from: "ACloudGuru",
    q: "A small startup company has begun using AWS for all of its IT infrastructure. The company has two AWS Solutions Architects, and they are very proficient with AWS deployments. They want to choose a deployment service that best meets the given requirements. Those requirements include version control of their infrastructure documentation and granular control of all of the services to be deployed. Which AWS service would best meet these requirements?",
    options: [
      {
        id: "a",
        text: "Terraform",
        correct: false,
      },
      {
        id: "b",
        text: "OpsWorks",
        correct: false,
      },
      {
        id: "c",
        text: "CloudFormation",
        correct: true,
      },
      {
        id: "d",
        text: "Elastic Beanstalk",
        correct: false,
      },
    ],
    explain:
      "CloudFormation is infrastructure as code, and the CloudFormation feature of templates allows this infrastructure as code to be version controlled. While it can be argued that both OpsWorks and Elastic Beanstalk provide some granular control of services, this is not the main feature of either. Both OpsWorks and Elastic Beanstalk, to varying degrees, allow some detailed configuration. How is AWS CloudFormation different from AWS Elastic Beanstalk? These services are designed to complement each other. AWS Elastic Beanstalk provides an environment to deploy and run applications in the cloud. It is integrated with developer tools and provides a one-stop experience for you to manage the lifecycle of your applications. AWS CloudFormation is a convenient provisioning mechanism for a broad range of AWS and third-party resources. It supports the infrastructure needs of many different types of applications, such as existing enterprise applications, legacy applications, applications built using a variety of AWS resources, and container-based solutions (including those built using AWS Elastic Beanstalk). AWS CloudFormation supports Elastic Beanstalk application environments as one of the AWS resource types. This allows you, for example, to create and manage an AWS Elastic Beanstalk–hosted application along with an RDS database to store the application data. In addition to RDS instances, any other supported AWS resource can be added to the group as well.",
  },
  {
    id: "28",
    cat: "3",
    from: "ACloudGuru",
    q: "You have been evaluating the NACLs in your company. Currently, you are looking at the default network ACL. Which statement is true regarding subnets and NACLs?",
    options: [
      {
        id: "a",
        text: "Only public subnets can use the default NACL.",
        correct: false,
      },
      {
        id: "b",
        text: "Each subnet in your VPC must be associated with a network ACL. If you don't explicitly associate a subnet with a network ACL, the subnet is automatically associated with the default network ACL.",
        correct: true,
      },
      {
        id: "c",
        text: "The default NACL will always be associated with each subnet.",
        correct: false,
      },
      {
        id: "d",
        text: "You have to delete the default NACL before creating a custom NACL to associate with a subnet.",
        correct: false,
      },
    ],
    explain:
      "Each subnet in your VPC must be associated with a network ACL. If you don't explicitly associate a subnet with a network ACL, the subnet is automatically associated with the default network ACL.",
  },
  {
    id: "29",
    cat: "1",
    from: "ACloudGuru",
    q: "An accounting company has big data applications for analyzing actuary data. The company is migrating some of its services to the cloud, and for the foreseeable future, will be operating in a hybrid environment. They need a storage service that provides a simple, scalable, fully managed elastic NFS file system for use with AWS Cloud services and on-premises resources. Which AWS service can meet these requirements?",
    options: [
      {
        id: "a",
        text: "EFS",
        correct: true,
      },
      {
        id: "b",
        text: "Glacier",
        correct: false,
      },
      {
        id: "c",
        text: "S3",
        correct: false,
      },
      {
        id: "d",
        text: "EBS",
        correct: false,
      },
    ],
    explain:
      "Amazon Elastic File System (Amazon EFS) provides a simple, scalable, fully managed elastic NFS file system for use with AWS Cloud services and on-premises resources. It is built to scale on-demand to petabytes without disrupting applications, growing and shrinking automatically as you add and remove files, eliminating the need to provision and manage capacity to accommodate growth. Amazon EFS offers 2 storage classes: the Standard storage class and the Infrequent Access storage class (EFS IA). EFS IA provides price/performance that's cost-optimized for files not accessed every day. By simply enabling EFS Lifecycle Management on your file system, files not accessed according to the lifecycle policy you choose will be automatically and transparently moved into EFS IA.Amazon Elastic File System (Amazon EFS) provides a simple, scalable, fully managed elastic NFS file system for use with AWS Cloud services and on-premises resources. It is built to scale on-demand to petabytes without disrupting applications, growing and shrinking automatically as you add and remove files, eliminating the need to provision and manage capacity to accommodate growth. Amazon EFS offers 2 storage classes: the Standard storage class and the Infrequent Access storage class (EFS IA). EFS IA provides price/performance that's cost-optimized for files not accessed every day. By simply enabling EFS Lifecycle Management on your file system, files not accessed according to the lifecycle policy you choose will be automatically and transparently moved into EFS IA.",
  },
  {
    id: "30",
    cat: "2",
    from: "ACloudGuru",
    q: "You have been assigned to create an architecture which uses load balancers to direct traffic to an Auto Scaling Group of EC2 instances across multiple Availability Zones. You were considering using an Application Load Balancer, but some of the requirements you have been given seem to point to a Classic Load Balancer. Which requirement would be better served by an Application Load Balancer?",
    options: [
      {
        id: "a",
        text: "Support for EC2-Classic.",
        correct: false,
      },
      {
        id: "b",
        text: "Path-based routing.",
        correct: true,
      },
      {
        id: "c",
        text: "Support for TCP and SSL listeners.",
        correct: false,
      },
      {
        id: "d",
        text: "Support for sticky sessions using application-generated cookies.",
        correct: false,
      },
    ],
    explain:
      "Using an Application Load Balancer is preferred over a Classic Load Balancer. All feature supported by the Classic have been addressed and improved upon with the Application Load Balancer. With ALB you have support for path-based routing, support for host-based routing, support for routing based on fields in the request, support for routing requests to multiple applications on a single EC2 instance, support for redirecting requests from one url to another, support for returning custom HTTP response, support for registering targets by IP address, support for registering Lambda functions, support for the load balancer to authenticate users, support for containerized applications, support for monitoring the health of services. Also access logs contain additional info and are stored in a compressed format. Improved load balancer performance.",
  },
  {
    id: "31",
    cat: "1",
    from: "ACloudGuru",
    q: "A small startup company has begun using AWS for all of its IT infrastructure. The company has two AWS Solutions Architects, and they are very proficient with AWS deployments. They want to choose a deployment service that best meets the given requirements. Those requirements include version control of their infrastructure documentation and granular control of all of the services to be deployed. Which AWS service would best meet these requirements?",
    options: [
      {
        id: "a",
        text: "Elastic Beanstalk",
        correct: false,
      },
      {
        id: "b",
        text: "OpsWorks",
        correct: false,
      },
      {
        id: "c",
        text: "Terraform",
        correct: false,
      },
      {
        id: "d",
        text: "CloudFormation",
        correct: true,
      },
    ],
    explain:
      "Correct. CloudFormation is infrastructure as code, and the CloudFormation feature of templates allows this infrastructure as code to be version controlled. While it can be argued that both OpsWorks and Elastic Beanstalk provide some granular control of services, this is not the main feature of either. Both OpsWorks and Elastic Beanstalk, to varying degrees, allow some detailed configuration. How is AWS CloudFormation different from AWS Elastic Beanstalk? These services are designed to complement each other. AWS Elastic Beanstalk provides an environment to deploy and run applications in the cloud. It is integrated with developer tools and provides a one-stop experience for you to manage the lifecycle of your applications. AWS CloudFormation is a convenient provisioning mechanism for a broad range of AWS and third-party resources. It supports the infrastructure needs of many different types of applications, such as existing enterprise applications, legacy applications, applications built using a variety of AWS resources, and container-based solutions (including those built using AWS Elastic Beanstalk). AWS CloudFormation supports Elastic Beanstalk application environments as one of the AWS resource types. This allows you, for example, to create and manage an AWS Elastic Beanstalk–hosted application along with an RDS database to store the application data. In addition to RDS instances, any other supported AWS resource can be added to the group as well",
  },
  {
    id: "32",
    cat: "1",
    from: "ACloudGuru",
    q: "A company has a great deal of data in S3 buckets for which they want to create a database. Creating the RDS database, normalizing the data, and migrating to the RDS database will take time and is the long-term plan. But there's an immediate need to query this data to retrieve information necessary for an audit. Which AWS service will enable querying data in S3 using standard SQL commands?",
    options: [
      {
        id: "a",
        text: "No such service, but there are third-party tools",
        correct: false,
      },
      {
        id: "b",
        text: "Amazon SQL Connector",
        correct: false,
      },
      {
        id: "c",
        text: "Amazon Athena",
        correct: true,
      },
      {
        id: "d",
        text: "DynamoDB",
        correct: false,
      },
    ],
    explain:
      "Amazon Athena is an interactive query service that makes it easy to analyze data in Amazon S3 using standard SQL. Athena is serverless, so there is no infrastructure to manage, and you only pay for the queries you run. Athena is easy to use. Simply point to your data in Amazon S3, define the schema, and start querying using standard SQL. Most results are delivered within seconds. With Athena, there’s no need for complex ETL jobs to prepare your data for analysis. This makes it easy for anyone with SQL skills to quickly analyze large-scale datasets.",
  },
  {
    id: "33",
    cat: "1",
    from: "ACloudGuru",
    q: "Your company is using a hybrid configuration because there are some legacy applications which are not easily converted and migrated to AWS. With this configuration comes a typical scenario where the legacy apps must maintain the same private IP address and MAC address. You are attempting to convert the application to the Cloud and have configured an EC2 instance to house the application. What you are currently testing is removing the ENI from the legacy instance and attaching it to the EC2 instance. You want to attempt a warm attach. What does this mean?",
    options: [
      {
        id: "a",
        text: "Attach the ENI before the public IP address is assigned.",
        correct: false,
      },
      {
        id: "b",
        text: "Attach the ENI to an instance when it's running",
        correct: false,
      },
      {
        id: "c",
        text: "Attach the ENI when the instance is being launched.",
        correct: false,
      },
      {
        id: "d",
        text: "Attach the ENI to an instance when it is stopped.",
        correct: true,
      },
    ],
    explain:
      "Some best practices for configuring network interfaces: You can attach a network interface to an instance when it's running (hot attach), when it's stopped (warm attach), or when the instance is being launched (cold attach). You can detach secondary network interfaces when the instance is running or stopped. However, you can't detach the primary network interface. You can move a network interface from 1 instance to another, if the instances are in the same Availability Zone and VPC but in different subnets. When launching an instance using the CLI, API, or an SDK, you can specify the primary network interface and additional network interfaces. Launching an Amazon Linux or Windows Server instance with multiple network interfaces automatically configures interfaces, private IPv4 addresses, and route tables on the operating system of the instance. A warm or hot attach of an additional network interface may require you to manually bring up the second interface, configure the private IPv4 address, and modify the route table accordingly. Instances running Amazon Linux or Windows Server automatically recognize the warm or hot attach and configure themselves. Attaching another network interface to an instance (for example, a NIC teaming configuration) cannot be used as a method to increase or double the network bandwidth to or from the dual-homed instance. If you attach 2 or more network interfaces from the same subnet to an instance, you may encounter networking issues such as asymmetric routing. If possible, use a secondary private IPv4 address on the primary network interface instead.",
  },
  {
    id: "34",
    cat: "1",
    from: "ACloudGuru",
    q: "A software company has created an application to capture service requests from users and also enhancement requests. The application is deployed on an Auto Scaling group of EC2 instances fronted by an Application Load Balancer. The Auto Scaling group has scaled to maximum capacity, but there are still requests being lost. The cost of these instances should remain the same. What step can the company take to ensure requests aren’t lost?",
    options: [
      {
        id: "a",
        text: "Use an SQS queue with the Auto Scaling group to capture all requests.",
        correct: true,
      },
      {
        id: "b",
        text: "Use spot instances to save money.",
        correct: false,
      },
      {
        id: "c",
        text: "Use larger instances in the Auto Scaling group.",
        correct: false,
      },
      {
        id: "d",
        text: "Use a Network Load Balancer instead for faster throughput.",
        correct: false,
      },
    ],
    explain:
      "There are some scenarios where you might think about scaling in response to activity in an Amazon SQS queue. For example, suppose that you have a web app that lets users upload images and use them online. In this scenario, each image requires resizing and encoding before it can be published. The app runs on EC2 instances in an Auto Scaling group, and it's configured to handle your typical upload rates. Unhealthy instances are terminated and replaced to maintain current instance levels at all times. The app places the raw bitmap data of the images in an SQS queue for processing. It processes the images and then publishes the processed images where they can be viewed by users. The architecture for this scenario works well if the number of image uploads doesn't vary over time. But if the number of uploads changes over time, you might consider using dynamic scaling to scale the capacity of your Auto Scaling group.",
  },
  {
    id: "35",
    cat: "1",
    from: "ACloudGuru",
    q: "A company has an Auto Scaling group of EC2 instances hosting their retail sales application. Any significant downtime for this application can result in large losses of profit. Therefore, the architecture also includes an Application Load Balancer and an RDS database in a Multi-AZ deployment. What will happen to preserve high availability if the primary database fails?",
    options: [
      {
        id: "a",
        text: "The CNAME is switched from the primary db instance to the secondary.",
        correct: true,
      },
      {
        id: "b",
        text: "The Elastic IP address for the primary database is moved to the secondary database.",
        correct: false,
      },
      {
        id: "c",
        text: "Route 53 points the CNAME to the secondary database instance.",
        correct: false,
      },
      {
        id: "d",
        text: "A Lambda function kicks off a CloudFormation template to deploy a backup database.",
        correct: false,
      },
    ],
    explain:
      "Amazon RDS Multi-AZ deployments provide enhanced availability and durability for RDS database (DB) instances, making them a natural fit for production database workloads. When you provision a Multi-AZ DB Instance, Amazon RDS automatically creates a primary DB Instance and synchronously replicates the data to a standby instance in a different Availability Zone (AZ). Each AZ runs on its own physically distinct, independent infrastructure, and is engineered to be highly reliable. In case of an infrastructure failure, Amazon RDS performs an automatic failover to the standby (or to a read replica in the case of Amazon Aurora), so that you can resume database operations as soon as the failover is complete. Since the endpoint for your DB Instance remains the same after a failover, your application can resume database operation without the need for manual administrative intervention. Failover is automatically handled by Amazon RDS so that you can resume database operations as quickly as possible without administrative intervention. When failing over, Amazon RDS simply flips the canonical name record (CNAME) for your DB instance to point at the standby, which is in turn promoted to become the new primary.",
  },
  {
    id: "36",
    cat: "1",
    from: "ACloudGuru",
    q: "A company has an auto scaling group of EC2 instances hosting their retail sales application. Any significant downtime for this application can result in large losses of profit. Therefore the architecture also includes an Application Load Balancer and an RDS database in a Multi-AZ deployment. The company has a very aggressive Recovery Time Objective (RTO) in case of disaster. How long will a failover of an RDS database typically complete?",
    options: [
      {
        id: "a",
        text: "Almost instantly",
        correct: false,
      },
      {
        id: "b",
        text: "Within an hour",
        correct: false,
      },
      {
        id: "c",
        text: "Under 10 minutes",
        correct: false,
      },
      {
        id: "d",
        text: "One to two minutes",
        correct: true,
      },
    ],
    explain:
      "Q: What happens during Multi-AZ failover and how long does it take? Failover is automatically handled by Amazon RDS so that you can resume database operations as quickly as possible without administrative intervention. When failing over, Amazon RDS simply flips the canonical name record (CNAME) for your DB instance to point at the standby, which is in turn promoted to become the new primary. We encourage you to follow best practices and implement database connection retry at the application layer. Failovers, as defined by the interval between the detection of the failure on the primary and the resumption of transactions on the standby, typically complete within one to two minutes. Failover time can also be affected by whether large uncommitted transactions must be recovered; the use of adequately large instance types is recommended with Multi-AZ for best results. AWS also recommends the use of Provisioned IOPS with Multi-AZ instances for fast, predictable, and consistent throughput performance.",
  },
  {
    id: "37",
    cat: "1",
    from: "ACloudGuru",
    q: "Your company is using a hybrid configuration because there are some legacy applications which are not easily converted and migrated to AWS. With this configuration comes a typical scenario where the legacy apps must maintain the same private IP address and MAC address. You are attempting to convert the application to the cloud and have configured an EC2 instance to house the application. What you are currently testing is removing the ENI from the legacy instance and attaching it to the EC2 instance. You want to attempt a cold attach. What does this mean?",
    options: [
      {
        id: "a",
        text: "Attach ENI to an instance when it's running",
        correct: false,
      },
      {
        id: "b",
        text: "Attach ENI when it’s stopped.",
        correct: false,
      },
      {
        id: "c",
        text: "Attach ENI when the instance is being launched.",
        correct: true,
      },
      {
        id: "d",
        text: "Attach ENI before the public IP address is assigned.",
        correct: false,
      },
    ],
    explain:
      "You can attach a network interface to an instance when it's running (hot attach), when it's stopped (warm attach), or when the instance is being launched (cold attach). You can detach secondary network interfaces when the instance is running or stopped. However, you can't detach the primary network interface. You can move a network interface from 1 instance to another if the instances are in the same Availability Zone and VPC but in different subnets. When launching an instance using the CLI, API, or an SDK, you can specify the primary network interface and additional network interfaces. Launching an Amazon Linux or Windows Server instance with multiple network interfaces automatically configures interfaces, private IPv4 addresses, and route tables on the operating system of the instance. A warm or hot attach of an additional network interface may require you to manually bring up the second interface, configure the private IPv4 address, and modify the route table accordingly. Instances running Amazon Linux or Windows Server automatically recognize the warm or hot attach and configure themselves. Attaching another network interface to an instance (for example, a NIC teaming configuration) cannot be used as a method to increase or double the network bandwidth to or from the dual-homed instance. If you attach 2 or more network interfaces from the same subnet to an instance, you may encounter networking issues such as asymmetric routing. If possible, use a secondary private IPv4 address on the primary network interface instead.",
  },
  {
    id: "38",
    cat: "2",
    from: "ACloudGuru",
    q: "Your company uses IoT devices installed in businesses to provide those business real-time data for analysis. You have decided to use AWS Kinesis Data Firehose to stream the data to multiple backend storing services for analytics. Which service listed is not a viable solution to stream the real time data to?",
    options: [
      {
        id: "a",
        text: "S3",
        correct: false,
      },
      {
        id: "b",
        text: "Athena",
        correct: true,
      },
      {
        id: "c",
        text: "Redshift",
        correct: false,
      },
      {
        id: "d",
        text: "ElasticSearch",
        correct: false,
      },
    ],
    explain:
      "Amazon Athena is correct because Amazon Kinesis Data Firehose cannot load streaming data to Athena. Amazon Kinesis Data Firehose is the easiest way to load streaming data into data stores and analytics tools. It can capture, transform, and load streaming data into Amazon S3, Amazon Redshift, Amazon Elasticsearch Service, and Splunk, enabling near real-time analytics with existing business intelligence tools and dashboards you’re already using today. It is a fully managed service that automatically scales to match the throughput of your data and requires no ongoing administration. It can also batch, compress, and encrypt the data before loading it, minimizing the amount of storage used at the destination and increasing security.",
  },
  {
    id: "39",
    cat: "2",
    from: "ACloudGuru",
    q: "Your boss has tasked you with decoupling your existing web frontend from the backend. Both applications run on EC2 instances. After you investigate the existing architecture, you find that (on average) the backend resources are processing about 50,000 requests per second and will need something that supports their extreme level of message processing. It's also important that each request is processed only 1 time. What can you do to decouple these resources?",
    options: [
      {
        id: "a",
        text: "Use S3 to store the messages being sent between the EC2 instances.",
        correct: false,
      },
      {
        id: "b",
        text: "Use SQS FIFO to decouple the applications.",
        correct: false,
      },
      {
        id: "c",
        text: "Use SQS Standard. Include a unique ordering ID in each message, and have the backend application use this to deduplicate messages",
        correct: true,
      },
      {
        id: "d",
        text: "Upsize your EC2 instances to reduce the message load on the backend servers.",
        correct: false,
      },
    ],
    explain:
      "This would be a great choice, as SQS Standard can handle this level of extreme performance. If the application didn't require this level of performance, then SQS FIFO would be the better and easier choice, but SQS FIFO has a batch limit of 3,000 messages per second.",
  },
  {
    id: "40",
    cat: "2",
    from: "ACloudGuru",
    q: "You have just started working at a company that is migrating from a physical data center into AWS. Currently, you have 25 TB of data that needs to be moved to an S3 bucket. Your company has just finished setting up a 1 GB Direct Connect drop, but you do not have a VPN currently up and running. This data needs to be encrypted during transit and at rest and must be uploaded to the S3 bucket within 21 days. How can you meet these requirements?",
    options: [
      {
        id: "a",
        text: "Order a Snowcone device to transmit the data.",
        correct: false,
      },
      {
        id: "b",
        text: "Use a Snowball device to transmit the data.",
        correct: true,
      },
      {
        id: "c",
        text: "Upload the data to S3 using your public internet connection.",
        correct: false,
      },
      {
        id: "d",
        text: "Upload the data using Direct Connect.",
        correct: false,
      },
    ],
    explain:
      "This would be the perfect choice to transmit your data. Snowball encrypts your data and comes in 50TB or 80TB flavors, so all the security and speed requirements would be met. Remember that Snowcone is only 8TB",
  },
  {
    id: "41",
    cat: "2",
    from: "ACloudGuru",
    q: 'A software company is developing an online "learn a new language" application. The application will be designed to teach up to 20 different languages for native English and Spanish speakers. It should leverage services that are capable of keeping up with 24,000 read units per second and 3,300 write units per second, and scale for spikes and off-peak. The application will also need to store user progress data. Which AWS services would meet these requirements?',
    options: [
      {
        id: "a",
        text: "RDS",
        correct: false,
      },
      {
        id: "b",
        text: "EBS",
        correct: false,
      },
      {
        id: "c",
        text: "DynamoDB",
        correct: true,
      },
      {
        id: "d",
        text: "S3",
        correct: false,
      },
    ],
    explain:
      "DynamoDB is highly scalable and provides very high performance, supporting 24,000 read units per second and 3,300 write units per second. A great case study for this is Duolingo, which uses Amazon DynamoDB to store 31 billion items in support of an online learning site that delivers lessons for 80 languages",
  },
  {
    id: "42",
    cat: "2",
    from: "ACloudGuru",
    q: "A small startup company has begun using AWS for all of its IT infrastructure. The company has one AWS Solutions Architect and the demands for their time are overwhelming. The software team has been given permission to deploy their Python and PHP applications on their own. They would like to deploy these applications without having to worry about the underlying infrastructure. Which AWS service would they use for deployments?",
    options: [
      {
        id: "a",
        text: "Elastic Beanstalk",
        correct: true,
      },
      {
        id: "b",
        text: "CloudFront",
        correct: false,
      },
      {
        id: "c",
        text: "CodeDeploy",
        correct: false,
      },
      {
        id: "d",
        text: "CloudFormation",
        correct: false,
      },
    ],
    explain:
      "With Elastic Beanstalk, you can quickly deploy and manage applications in the AWS Cloud without having to learn about the infrastructure that runs those applications. Elastic Beanstalk reduces management complexity without restricting choice or control. You simply upload your application, and Elastic Beanstalk automatically handles the details of capacity provisioning, load balancing, scaling, and application health monitoring. Elastic Beanstalk supports applications developed in Go, Java, .NET, Node.js, PHP, Python, and Ruby. When you deploy your application, Elastic Beanstalk builds the selected supported platform version and provisions one or more AWS resources, such as Amazon EC2 instances, to run your application.",
  },
  {
    id: "43",
    cat: "2",
    from: "ACloudGuru",
    q: "You have multiple EC2 instances housing applications in a VPC in a single Availability Zone. Your EC2 workloads need low-latency network performance, high network throughput, and a tightly-coupled node-to-node communication. What's the best measure you can do to ensure this throughput?",
    options: [
      {
        id: "a",
        text: "Increase the size of the instances",
        correct: false,
      },
      {
        id: "b",
        text: "Use Auto Scaling Groups",
        correct: false,
      },
      {
        id: "c",
        text: "Use Elastic Network Interfaces",
        correct: false,
      },
      {
        id: "d",
        text: "Launch your instances in a cluster placement group",
        correct: true,
      },
    ],
    explain:
      "A cluster placement group is a logical grouping of instances within a single Availability Zone. A cluster placement group can span peered VPCs in the same Region. Instances in the same cluster placement group enjoy a higher per-flow throughput limit for TCP/IP traffic and are placed in the same high-bisection bandwidth segment of the network",
  },
  {
    id: "44",
    cat: "3",
    from: "ACloudGuru",
    q: "An international company has many clients around the world. These clients need to transfer gigabytes to terabytes of data quickly and on a regular basis to an S3 bucket. Which S3 feature will enable these long distance data transfers in a secure and fast manner?",
    options: [
      {
        id: "a",
        text: "Cross-account replication",
        correct: false,
      },
      {
        id: "b",
        text: "Transfer Acceleration",
        correct: true,
      },
      {
        id: "c",
        text: "AWS SnowMobile",
        correct: false,
      },
      {
        id: "d",
        text: "Multipart upload",
        correct: false,
      },
    ],
    explain:
      "You might want to use Transfer Acceleration on a bucket for various reasons, including the following: You have customers that upload to a centralized bucket from all over the world. You transfer gigabytes to terabytes of data on a regular basis across continents. You are unable to utilize all of your available bandwidth over the Internet when uploading to Amazon S3.",
  },
  {
    id: "45",
    cat: "3",
    from: "ACloudGuru",
    q: "A consultant is hired by a small company to configure an AWS environment. The consultant begins working with the VPC and launching EC2 instances within the VPC. The initial instances will be placed in a public subnet. The consultant begins to create security groups. How many security groups can be attached to an EC2 instance?",
    options: [
      {
        id: "a",
        text: "You can assign up to five security groups to the instance.",
        correct: true,
      },
      {
        id: "b",
        text: "You can assign two security groups to an instance.",
        correct: false,
      },
      {
        id: "c",
        text: "You can only assign one security group to an instance.",
        correct: false,
      },
      {
        id: "d",
        text: "Instances in private subnets cannot have multiple security groups.",
        correct: false,
      },
    ],
    explain:
      "A security group acts as a virtual firewall for your instance to control inbound and outbound traffic. When you launch an instance in a VPC, you can assign up to five security groups to the instance. Security groups act at the instance level, not the subnet level. Therefore, each instance in a subnet in your VPC can be assigned to a different set of security groups. If you launch an instance using the Amazon EC2 API or a command-line tool and you don't specify a security group, the instance is automatically assigned to the default security group for the VPC. If you launch an instance using the Amazon EC2 console, you have an option to create a new security group for the instance. For each security group, you add rules that control the inbound traffic to instances and a separate set of rules that control the outbound traffic.",
  },
  {
    id: "46",
    cat: "3",
    from: "ACloudGuru",
    q: "A consultant is hired by a small company to configure an AWS environment. The consultant begins working with the VPC and launching EC2 instances within the VPC. The initial instances will be placed in a public subnet. The consultant begins to create security groups. What is true of security groups?",
    options: [
      {
        id: "a",
        text: "Security groups act at the subnet level, not the instance level.",
        correct: false,
      },
      {
        id: "b",
        text: "Security groups act at the instance level, not the subnet level.",
        correct: true,
      },
      {
        id: "c",
        text: "Security groups act at the VPC level, not the instance level.",
        correct: false,
      },
      {
        id: "d",
        text: "Security groups are stateless.",
        correct: false,
      },
    ],
    explain:
      "There are quotas on the number of security groups that you can create per VPC, the number of rules that you can add to each security group, and the number of security groups that you can associate with a network interface. For more information, see Amazon VPC quotas. You can specify allow rules, but not deny rules. You can specify separate rules for inbound and outbound traffic. When you create a security group, it has no inbound rules. Therefore, no inbound traffic originating from another host to your instance is allowed until you add inbound rules to the security group.By default, a security group includes an outbound rule that allows all outbound traffic. You can remove the rule and add outbound rules that allow specific outbound traffic only. If your security group has no outbound rules, no outbound traffic originating from your instance is allowed. Security groups are stateful. If you send a request from your instance, the response traffic for that request is allowed to flow in regardless of inbound security group rules. Responses to allowed inbound traffic are allowed to flow out, regardless of outbound rules.",
  },
  {
    id: "47",
    cat: "3",
    from: "ACloudGuru",
    q: "A financial institution has begun using AWS services and plans to migrate as much of their IT infrastructure and applications to AWS as possible. The nature of the business dictates that strict compliance practices be in place. The AWS team has configured AWS CloudTrail to help meet compliance requirements and be ready for any upcoming audits. Which item is not a feature of AWS CloudTrail?",
    options: [
      {
        id: "a",
        text: "Track changes to resources.",
        correct: false,
      },
      {
        id: "b",
        text: "Monitor Auto Scaling Groups and optimize resource utilization.",
        correct: true,
      },
      {
        id: "c",
        text: "Enables compliance.",
        correct: false,
      },
      {
        id: "d",
        text: "Answer simple questions about user activity.",
        correct: false,
      },
    ],
    explain: "This is a feature provided by CloudWatch.",
  },
  {
    id: "48",
    cat: "4",
    from: "ACloudGuru",
    q: "You work for a Defense contracting company. The company develops software applications which perform intensive calculations in the area of Mechanical Engineering related to metals for ship building. The company competes for and wins contracts that typically range from 1 year to up to 5 years. These long-term contracts mean that the duration of your need for EC2 instances can be matched to the length of these contracts, and then extended if necessary. The main requirement is consistent performance for the duration of the contract. Which EC2 purchasing option provides the best value, given these long-term contracts?",
    options: [
      {
        id: "a",
        text: "Dedicated Host",
        correct: false,
      },
      {
        id: "b",
        text: "Reserved",
        correct: true,
      },
      {
        id: "c",
        text: "On-Demand",
        correct: false,
      },
      {
        id: "d",
        text: "Spot",
        correct: false,
      },
    ],
    explain:
      "Amazon EC2 provides the following purchasing options to enable you to optimize your costs based on your needs: On-Demand Instances – Pay, by the second, for the instances that you launch. Savings Plans – Reduce your Amazon EC2 costs by making a commitment to a consistent amount of usage, in USD per hour, for a term of 1 or 3 years. Reserved Instances – Reduce your Amazon EC2 costs by making a commitment to a consistent instance configuration, including instance type and region, for a term of 1 or 3 years. Scheduled Instances – Purchase instances that are always available on the specified recurring schedule, for a one-year term. Spot Instances – Request unused EC2 instances, which can reduce your Amazon EC2 costs significantly. Dedicated Hosts – Pay for a physical host that is fully dedicated to running your instances, and bring your existing per-socket, per-core, or per-VM software licenses to reduce costs. Dedicated Instances – Pay, by the hour, for instances that run on single-tenant hardware. Capacity Reservations – Reserve capacity for your EC2 instances in a specific Availability Zone for any duration.",
  },
  {
    id: "49",
    cat: "4",
    from: "ACloudGuru",
    q: "Your company is storing stack traces for application errors in an S3 Bucket. The engineers using these stack traces review them when addressing application issues. It has been decided that the files only need to be kept for four weeks then they can be purged. How can you meet this requirement in S3?",
    options: [
      {
        id: "a",
        text: "Write a cron job to purge the files after one month.",
        correct: false,
      },
      {
        id: "b",
        text: "Configure the S3 Lifecycle rules to purge the files after a month.",
        correct: true,
      },
      {
        id: "c",
        text: "Create a bucket policy to purge the rules after one month.",
        correct: false,
      },
      {
        id: "d",
        text: "Add an S3 Lifecycle rule to archive these files to Glacier after one month.",
        correct: false,
      },
    ],
    explain:
      "To manage your objects so that they are stored cost-effectively throughout their lifecycle, configure their Amazon S3 Lifecycle. An S3 Lifecycle configuration is a set of rules that define actions that Amazon S3 applies to a group of objects. There are two types of actions: Transition actions define when objects transition to another storage class. For example, you might choose to transition objects to the S3 Standard-IA storage class 30 days after you created them, or archive objects to the S3 Glacier storage class one year after creating them. Expiration actions define when objects expire. Amazon S3 deletes expired objects on your behalf. The lifecycle expiration costs depend on when you choose to expire objects.",
  },
  {
    id: "50",
    cat: "4",
    from: "ACloudGuru",
    q: "After an IT Steering Committee meeting, you have been put in charge of configuring a hybrid environment for the company’s compute resources. You weigh the pros and cons of various technologies based on the requirements you are given. The main requirements to drive this selection are overall cost considerations and the ability to reuse existing internet connections. Which technology best meets these requirements?",
    options: [
      {
        id: "a",
        text: "AWS Direct Gateway",
        correct: false,
      },
      {
        id: "b",
        text: "AWS Direct Connect",
        correct: false,
      },
      {
        id: "c",
        text: "AWS Managed VPN",
        correct: true,
      },
      {
        id: "d",
        text: "VPC Peering",
        correct: false,
      },
    ],
    explain:
      "AWS Managed VPN lets you reuse existing VPN equipment and processes, and reuse existing internet connections. It is an AWS-managed high availability VPN service. It supports static routes or dynamic Border Gateway Protocol (BGP) peering and routing policies.",
  },
  {
    id: "51",
    cat: "1",
    from: "ACloudGuru",
    q: "You have a typical architecture for an Application Load Balancer fronting an Auto Scaling group of EC2 instances, backed by an RDS MySQL database. Your Application Load Balancer is performing health checks on the EC2 instances. What actions will be taken if an instance fails these health checks?",
    options: [
      {
        id: "a",
        text: "The ALB notifies the Auto Scaling group that the instance is down.",
        correct: false,
      },
      {
        id: "b",
        text: "The ALB stops sending traffic to the instance.",
        correct: true,
      },
      {
        id: "c",
        text: "The instance is terminated by the ALB.",
        correct: false,
      },
      {
        id: "d",
        text: "The instance is replaced by the ALB.",
        correct: false,
      },
    ],
    explain:
      "The load balancer routes requests only to the healthy instances. When the load balancer determines that an instance is unhealthy, it stops routing requests to that instance. The load balancer resumes routing requests to the instance when it has been restored to a healthy state.",
  },
  {
    id: "52",
    cat: "1",
    from: "ACloudGuru",
    q: "You are working as a Solutions Architect in a large healthcare organization. You have many Auto Scaling Groups that utilize launch configurations. Many of these launch configurations are similar yet have subtle differences. You’d like to use multiple versions of these launch configurations. An ideal approach would be to have a default launch configuration and then have additional versions that add additional features. Which option best meets these requirements?",
    options: [
      {
        id: "a",
        text: "Use launch templates instead.",
        correct: true,
      },
      {
        id: "b",
        text: "Simply create the needed versions. Launch configurations already have versioning.",
        correct: false,
      },
      {
        id: "c",
        text: "Create the launch configurations in CloudFormation and version the templates accordingly.",
        correct: false,
      },
      {
        id: "d",
        text: "Store the launch configurations in S3 and turn on versioning.",
        correct: false,
      },
    ],
    explain:
      "A launch template is similar to a launch configuration, in that it specifies instance configuration information. Included are the ID of the Amazon Machine Image (AMI), the instance type, a key pair, security groups, and the other parameters that you use to launch EC2 instances. However, defining a launch template instead of a launch configuration allows you to have multiple versions of a template. With versioning, you can create a subset of the full set of parameters and then reuse it to create other templates or template versions. For example, you can create a default template that defines common configuration parameters and allow the other parameters to be specified as part of another version of the same template.",
  },
  {
    id: "53",
    cat: "1",
    from: "ACloudGuru",
    q: "A new startup company decides to use AWS to host their web application. They configure a VPC as well as two subnets within the VPC. They also attach an internet gateway to the VPC. In the first subnet, they create an EC2 instance to host a web application. There is a network ACL and a security group, which both have the proper ingress and egress to and from the internet. There is a route in the route table to the internet gateway. The EC2 instances added to the subnet need to have a globally unique IP address to ensure internet access. Which is not a globally unique IP address?",
    options: [
      {
        id: "a",
        text: "Elastic IP address",
        correct: false,
      },
      {
        id: "b",
        text: "Private IP address",
        correct: true,
      },
      {
        id: "c",
        text: "IPv6 address",
        correct: false,
      },
      {
        id: "d",
        text: "Public IP address",
        correct: false,
      },
    ],
    explain:
      "Public IPv4 address, elastic IP address, and IPv6 address are globally unique addresses. The IPv4 addresses known for not being unique are private IPs. These are found in the following ranges: from 10.0.0.0 to 10.255.255.255, from 172.16.0.0 to 172.31.255.255, and from 192.168.0.0 to 192.168.255.255.",
  },
  {
    id: "54",
    cat: "1",
    from: "ACloudGuru",
    q: "You work for an online retailer where any downtime at all can cause a significant loss of revenue. You have architected your application to be deployed on an Auto Scaling Group of EC2 instances behind a load balancer. You have configured and deployed these resources using a CloudFormation template. The Auto Scaling Group is configured with default settings and a simple CPU utilization scaling policy. You have also set up multiple Availability Zones for high availability. The load balancer does health checks against an HTML file generated by script. When you begin performing load testing on your application and notice in CloudWatch that the load balancer is not sending traffic to one of your EC2 instances. What could be the problem?",
    options: [
      {
        id: "a",
        text: "The EC2 instance has failed the load balancer health check.",
        correct: true,
      },
      {
        id: "b",
        text: "You are load testing at a moderate traffic level and not all instances are needed.",
        correct: false,
      },
      {
        id: "c",
        text: "The EC2 instance has failed EC2 status checks.",
        correct: false,
      },
      {
        id: "d",
        text: "The instance has not been registered with CloudWatch.",
        correct: false,
      },
    ],
    explain:
      "The load balancer will route the incoming requests only to the healthy instances. The EC2 instance may have passed status checks and be considered healthy to the Auto Scaling group, but the ELB may not use it if the ELB health check has not been met. The ELB health check has a default of 30 seconds between checks, and a default of 3 checks before making a decision. Therefore, the instance could be visually available but unused for at least 90 seconds before the GUI would show it as failed. In CloudWatch, where the issue was noticed, it would appear to be a healthy EC2 instance but with no traffic, which is what was observed.",
  },
  {
    id: "55",
    cat: "1",
    from: "ACloudGuru",
    q: "Your application is housed on an Auto Scaling Group of EC2 instances. The application is backed by the Multi-AZ MySQL RDS database and an additional read replica. You need to simulate some failures for disaster recovery drills. Which event will not cause an RDS to perform a failover to the standby replica?",
    options: [
      {
        id: "a",
        text: "Loss of network connectivity to primary.",
        correct: false,
      },
      {
        id: "b",
        text: "Storage failure on primary.",
        correct: false,
      },
      {
        id: "c",
        text: "Compute unit failure on primary.",
        correct: false,
      },
      {
        id: "d",
        text: "Read replica failure",
        correct: true,
      },
    ],
    explain:
      "When you provision a Multi-AZ DB instance, Amazon RDS automatically creates a primary DB instance and synchronously replicates the data to a standby instance in a different Availability Zone (AZ). Each AZ runs on its own physically distinct, independent infrastructure, and is engineered to be highly reliable. In case of an infrastructure failure, Amazon RDS performs an automatic failover to the standby (or to a read replica in the case of Amazon Aurora), so that you can resume database operations as soon as the failover is complete. Since the endpoint for your DB Instance remains the same after a failover, your application can resume database operation without the need for manual administrative intervention.",
  },
  {
    id: "56",
    cat: "1",
    from: "ACloudGuru",
    q: "Your company is currently building out a second AWS region. Following best practices, they've been using CloudFormation to make the migration easier. They've run into a problem with the template though. Whenever the template is created in the new region, it's still referencing the AMI in the old region. What is the best solution to automatically select the correct AMI when the template is deployed in the new region?",
    options: [
      {
        id: "a",
        text: "Update the AMI in the old region, as AMIs are universal.",
        correct: false,
      },
      {
        id: "b",
        text: "Create a mapping in the template. Define the unique AMI value per region.",
        correct: true,
      },
      {
        id: "c",
        text: "Create a Parameter section in the template. Whenever the template is run, fill in the correct AMI ID.",
        correct: false,
      },
      {
        id: "d",
        text: "Create a condition in the template to automatically select the correct AMI ID.",
        correct: true,
      },
    ],
    explain:
      "This is exactly what mappings are built for. By using mappings, you easily automate this issue away. Make sure to copy your AMI to the region before you try and run the template, though, as AMIs are region specific.",
  },
  {
    id: "57",
    cat: "1",
    from: "ACloudGuru",
    q: "You have been tasked with designing a strategy for backing up EBS volumes attached to an instance-store-backed EC2 instance. You have been asked for an executive summary on your design, and the executive summary should include an answer to the question, “What can an EBS volume do when snapshotting the volume is in progress”?",
    options: [
      {
        id: "a",
        text: "The volume can only accommodate writes while a snapshot is in progress.",
        correct: false,
      },
      {
        id: "b",
        text: "The volume can only accommodate reads while a snapshot is in progress.",
        correct: false,
      },
      {
        id: "c",
        text: "The volume cannot be used while a snapshot is in progress.",
        correct: false,
      },
      {
        id: "d",
        text: "The volume can be used normally while the snapshot is in progress.",
        correct: true,
      },
    ],
    explain:
      "You can create a point-in-time snapshot of an EBS volume and use it as a baseline for new volumes or for data backup. If you make periodic snapshots of a volume, the snapshots are incremental; the new snapshot saves only the blocks that have changed since your last snapshot. Snapshots occur asynchronously; the point-in-time snapshot is created immediately, but the status of the snapshot is pending until the snapshot is complete (when all of the modified blocks have been transferred to Amazon S3), which can take several hours for large initial snapshots or subsequent snapshots where many blocks have changed. While it is completing, an in-progress snapshot is not affected by ongoing reads and writes to the volume.",
  },
  {
    id: "58",
    cat: "1",
    from: "ACloudGuru",
    q: "You have taken over management of several instances in the company AWS environment. You want to quickly review scripts used to bootstrap the instances at runtime. A URL command can be used to do this. What can you append to the URL http://169.254.169.254/latest/ to retrieve this data?",
    options: [
      {
        id: "a",
        text: "instance-data/",
        correct: false,
      },
      {
        id: "b",
        text: "instance-demographic-data/",
        correct: false,
      },
      {
        id: "c",
        text: "user-data/",
        correct: true,
      },
      {
        id: "d",
        text: "meta-data/",
        correct: false,
      },
    ],
    explain:
      "When you launch an instance in Amazon EC2, you have the option of passing user data to the instance that can be used to perform common automated configuration tasks and even run scripts after the instance starts. You can pass two types of user data to Amazon EC2: shell scripts and cloud-init directives.",
  },
  {
    id: "59",
    cat: "2",
    from: "ACloudGuru",
    q: "A travel company has deployed a web application that serves travel updates to users all over the world. This application uses an Amazon RDS database, which is very read-heavy and can have performance issues at certain times of the year. What can you do to enhance performance and reduce the load on your source DB instance?",
    options: [
      {
        id: "a",
        text: "Configure multi-Region RDS",
        correct: false,
      },
      {
        id: "b",
        text: "Place CloudFront in front of the Database",
        correct: false,
      },
      {
        id: "c",
        text: "Configure RDS Multi-AZ",
        correct: false,
      },
      {
        id: "d",
        text: "Add read replicas",
        correct: true,
      },
    ],
    explain:
      "Amazon RDS Read Replicas provide enhanced performance and durability for RDS database (DB) instances. They can be within an Availability Zone, Cross-AZ, or Cross-Region, and they make it easy to elastically scale out beyond the capacity constraints of a single DB instance for read-heavy database workloads. You can create one or more replicas of a given source DB Instance and serve high-volume application read traffic from multiple copies of your data, thereby increasing aggregate read throughput. Read replicas can also be promoted when needed to become standalone DB instances. Read replicas are available in Amazon RDS for MySQL, MariaDB, PostgreSQL, Oracle, and SQL Server as well as Amazon Aurora.",
  },
  {
    id: "60",
    cat: "2",
    from: "ACloudGuru",
    q: "You work for an oil and gas company as a lead in data analytics. The company is using IoT devices to better understand their assets in the field (for example, pumps, generators, valve assemblies, and so on). Your task is to monitor the IoT devices in real-time to provide valuable insight that can help you maintain the reliability, availability, and performance of your IoT devices. What tool can you use to process streaming data in real time with standard SQL without having to learn new programming languages or processing frameworks?",
    options: [
      {
        id: "a",
        text: "Kinesis Data Analytics",
        correct: true,
      },
      {
        id: "b",
        text: "AWS Kinesis Streams",
        correct: false,
      },
      {
        id: "c",
        text: "AWS Lambda",
        correct: false,
      },
      {
        id: "d",
        text: "AWS RedShift",
        correct: false,
      },
    ],
    explain:
      "Monitoring IoT devices in real-time can provide valuable insight that can help you maintain the reliability, availability, and performance of your IoT devices. You can track time series data on device connectivity and activity. This insight can help you react quickly to changing conditions and emerging situations. Amazon Web Services (AWS) offers a comprehensive set of powerful, flexible, and simple-to-use services that enable you to extract insights and actionable information in real time. Amazon Kinesis is a platform for streaming data on AWS, offering key capabilities to cost-effectively process streaming data at any scale. Kinesis capabilities include Amazon Kinesis Data Analytics, the easiest way to process streaming data in real time with standard SQL without having to learn new programming languages or processing frameworks.",
  },
  {
    id: "61",
    cat: "3",
    from: "PluralSight",
    q: "Which Amazon security feature encrypts data at rest using AES-256 and is considered transparent to the end user with the Amazon S3 environment?",
    options: [
      {
        id: "a",
        text: "Encryption client side",
        correct: false,
      },
      {
        id: "b",
        text: "Versioning",
        correct: false,
      },
      {
        id: "c",
        text: "Encryption server side",
        correct: true,
      },
      {
        id: "d",
        text: "Replication",
        correct: false,
      },
    ],
    explain:
      "Amazon uses server-side encryption to encrypt customer data on the physical server, and the entire process is holistic or transparent because it is executed on the server side, not the client side. AWS creates a distinct encryption key for an object that is then encrypted using AES-256. That key is then re-encrypted with a master key that is held in another location. These master keys are then changed on a continual basis.",
  },
  {
    id: "62",
    cat: "4",
    from: "PluralSight",
    q: "As a solution architect, you are tasked with creating three SQL Server RDS instances, two MySql RDS instances, and one PostgreSQL RDS instance. Your on-premises application has been connected to running processes within your production MySQL RDS instance for 5 hours. Your on-premises application is also connected to running processes in your PostgreSQL RDS instance for 3 hours and 30 minutes. You have at least one on-premises application connected to each RDS instance type. Your connections are concurrent, and all RDS instances are in a production state. Which billing option specifies how you would be billed?",
    options: [
      {
        id: "a",
        text: "DB Size",
        correct: false,
      },
      {
        id: "b",
        text: "DB instance based on each minute a process is connected.",
        correct: false,
      },
      {
        id: "c",
        text: "DB instance hours",
        correct: true,
      },
      {
        id: "d",
        text: "DB instance connections",
        correct: false,
      },
    ],
    explain:
      "You would be billed by DB instance hours. When you create an RDS environment, you are billed by the running time, which includes instance class, backup storage, database storage allocated, and data transfers in and out of your ec2 instance. If the instance runs for only 5 minutes, you are still charged for the full hour, because it is classified by instance hour, not instance minute. So the above use case would be charged for 9 hours total, not 8 and a half.",
  },
  {
    id: "63",
    cat: "1",
    from: "aws-prep.com",
    q: "Which of the following can an EC2 instance in a public VPC be assigned?",
    options: [
      {
        id: "a",
        text: "All IPv6, private IP, and elastic IP address.",
        correct: true,
      },
      {
        id: "b",
        text: "An IPv6 address.",
        correct: false,
      },
      {
        id: "c",
        text: "A private IP address",
        correct: false,
      },
      {
        id: "d",
        text: "An Elastic IP address",
        correct: false,
      },
    ],
    explain:
      "All of the options are valid here. EC2 instances can have public and private IP addresses, elastic addresses and both IPv4 and IPv6 addresses.",
  },
  {
    id: "64",
    cat: "1",
    from: "aws-prep.com",
    q: "You have been hired as a Solution Architect in a large company. The company is expanding and needs to set up a new office. They are moving roughly 20,000 employees and associated mobile device and printers to the cloud and have asked you to start thinking about the network. Which of the following offers the largest range of IP addresses?",
    options: [
      {
        id: "a",
        text: "/16.",
        correct: true,
      },
      {
        id: "b",
        text: "/20.",
        correct: false,
      },
      {
        id: "c",
        text: "/24",
        correct: false,
      },
      {
        id: "d",
        text: "/28",
        correct: false,
      },
    ],
    explain:
      "/16 offers 65,536 IP addresses. The lower the number, the larger the pool of IP addresses when using CIDR notation.",
  },
  {
    id: "65",
    cat: "1",
    from: "aws-prep.com",
    q: "You are talking with a IT employee and they are concerned that two separate private VPCs having only one subnet each, is not valid. Which of the following is a valid VPC configuration?",
    options: [
      {
        id: "a",
        text: "A single public subnet without any private subnets.",
        correct: false,
      },
      {
        id: "b",
        text: "A single public subnet with two private subnets.",
        correct: false,
      },
      {
        id: "c",
        text: "A single private subnet without any public subnets",
        correct: false,
      },
      {
        id: "d",
        text: "All of the above",
        correct: true,
      },
    ],
    explain:
      "VPCs put few restrictions on the types and numbers of subnets supported. They can certainly support single and multiple private and public subnets along side each other.",
  },
  {
    id: "66",
    cat: "1",
    from: "aws-prep.com",
    q: "You are reviewing documentation on designing resilient architecture with a friend when they run across the acronym SWF. What does Amazon SWF stond for?",
    options: [
      {
        id: "a",
        text: "Simple Workflow Formation.",
        correct: false,
      },
      {
        id: "b",
        text: "Simple Web Forms.",
        correct: false,
      },
      {
        id: "c",
        text: "Simple Workflows",
        correct: true,
      },
      {
        id: "d",
        text: "Simple Working Automation",
        correct: false,
      },
    ],
    explain:
      "SWF stands for simple workflow and Amazon SWF is the Amazon Simple Workflow Service",
  },
];
