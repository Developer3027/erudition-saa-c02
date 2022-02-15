export const ExamPractice = [
  {
    id: '1',
    cat: '2',
    q: 'A large, big-box hardware chain is setting up a new inventory management system. They have developed a system using IoT sensors which captures the removal of items from the store shelves in near real-time and want to use this information to update their inventory system. The company wants to analyze this data in the hopes of being ahead of demand and properly managing logistics and delivery of in-demand items. Which AWS service can be used to capture this data as close to real-time as possible, while being able to both transform and load the streaming data into Amazon S3 or ElasticSearch?',
    options: [
      { id: 'a', text: 'Amazon Kinesis Data Firehose', correct: true },
      { id: 'b', text: 'Amazon Redshift', correct: false },
      { id: 'c', text: 'Amazon Kinesis Data Streams', correct: false },
      { id: 'd', text: 'Amazon Aurora', correct: false }
    ],
    explain:
      'Amazon Kinesis Data Firehose is the easiest way to reliably load streaming data into data lakes, data stores, and analytics tools. It can capture, transform, and load streaming data into Amazon S3, Amazon Redshift, Amazon Elasticsearch Service, and Splunk, enabling near-real-time analytics with existing business intelligence tools and dashboards you’re already using today. It is a fully-managed service that automatically scales to match the throughput of your data and requires no ongoing administration. It can also batch, compress, transform, and encrypt the data before loading it, minimizing the amount of storage used at the destination and increasing security.'
  },
  {
    id: '2',
    cat: '4',
    q: 'Your company needs to shift an application to the cloud. You are looking for a solution to collect, process, gain immediate insight, and then transfer the application data to AWS. Part of this effort also includes moving a large data warehouse into AWS. The warehouse is 50TB, and it would take over a month to migrate the data using the current bandwidth available. What is the best option available to perform this one time migration considering both cost and performance aspects?',
    options: [
      { id: 'a', text: 'AWS VPN', correct: false },
      { id: 'b', text: 'AWS Snowball Edge', correct: true },
      { id: 'c', text: 'AWS SnowMobile', correct: false },
      { id: 'd', text: 'AWS Direct Connect', correct: false }
    ],
    explain:
      "The AWS Snowball Edge is a type of Snowball device with on-board storage and compute power for select AWS capabilities. Snowball Edge can undertake local processing and edge-computing workloads in addition to transferring data between your local environment and the AWS Cloud.Each Snowball Edge device can transport data at speeds faster than the internet. This transport is done by shipping the data in the appliances through a regional carrier. The appliances are rugged shipping containers, complete with E Ink shipping labels. The AWS Snowball Edge device differs from the standard Snowball because it can bring the power of the AWS Cloud to your on-premises location, with local storage and compute functionality.Snowball Edge devices have three options for device configurations: storage optimized, compute optimized, and with GPU. When this guide refers to Snowball Edge devices, it's referring to all options of the device. Whenever specific information applies to only one or more optional configurations of devices, like how the Snowball Edge with GPU has an on-board GPU, it will be called out. For more information, see Snowball Edge Device Options."
  },
  {
    id: '3',
    cat: '3',
    q: 'A small software team is creating an application which will give subscribers real-time weather updates. The application will run on EC2 and will make several requests to AWS services such as S3 and DynamoDB. What is the best way to grant permissions to these other AWS services?',
    options: [
      {
        id: 'a',
        text: 'Create an IAM policy that you attach to the EC2 instance to give temporary security credentials to applications running on the instance.',
        correct: false
      },
      {
        id: 'b',
        text: 'Create an IAM role that you attach to the EC2 instance to give temporary security credentials to applications running on the instance.',
        correct: true
      },
      {
        id: 'c',
        text: 'Create an IAM user, grant the user permissions, and pass the user credentials to the application.',
        correct: false
      },
      {
        id: 'd',
        text: 'Embed the appropriate credentials to access AWS services in the application.',
        correct: false
      }
    ],
    explain:
      "Create an IAM role in the following situations: You're creating an application that runs on an Amazon Elastic Compute Cloud (Amazon EC2) instance and that application makes requests to AWS. Don't create an IAM user and pass the user's credentials to the application or embed the credentials in the application. Instead, create an IAM role that you attach to the EC2 instance to give temporary security credentials to applications running on the instance. When an application uses these credentials in AWS, it can perform all of the operations that are allowed by the policies attached to the role. For details, see Using an IAM Role to Grant Permissions to Applications Running on Amazon EC2 Instances."
  },
  {
    id: '4',
    cat: '3',
    q: 'Your architecture consists of an Application Load Balancer front, an Auto Scaling Group of EC2 instances, backed by an RDS database. Your security team has notified you of cross-site scripting attacks and also SQL injection attacks on the application. You have been asked to take steps to quickly mitigate these attacks. What steps should you take?',
    options: [
      {
        id: 'a',
        text: 'Configure Amazon GuardDuty to prevent these attacks.',
        correct: false
      },
      {
        id: 'b',
        text: 'Immediately block the offending IP address on the NACL.',
        correct: false
      },
      {
        id: 'c',
        text: 'Using the AWS WAF service, set up rules which block SQL injection, and cross-site scripting attacks. Associate the rules to the ALB.',
        correct: true
      },
      {
        id: 'd',
        text: 'Use Amazon Inspector to detect these attacks and manually block the IP addresses from which these attacks come.',
        correct: false
      }
    ],
    explain:
      'Correct. AWS WAF is a web application firewall that helps protect your web applications or APIs against common web exploits that may affect availability, compromise security, or consume excessive resources. AWS WAF gives you control over how traffic reaches your applications by enabling you to create security rules that block common attack patterns, such as SQL injection or cross-site scripting, and rules that filter out specific traffic patterns you define. You can get started quickly using Managed Rules for AWS WAF, a pre-configured set of rules managed by AWS or AWS Marketplace Sellers. The Managed Rules for WAF address issues like the OWASP Top 10 security risks. These rules are regularly updated as new issues emerge. AWS WAF includes a full-featured API that you can use to automate the creation, deployment, and maintenance of security rules.'
  },
  {
    id: '5',
    cat: '1',
    q: 'You are working as a Solutions Architect for an online travel company. Your application is going to use an Auto Scaling group of EC2 instances but you need to have some decoupling to store messages because of high volume. Which AWS service can be added to the solution to meet this requirement?',
    options: [
      {
        id: 'a',
        text: 'Elasticache',
        correct: false
      },
      {
        id: 'b',
        text: 'RDS read replicas',
        correct: false
      },
      {
        id: 'c',
        text: 'AWS Simple Workflow Service',
        correct: false
      },
      {
        id: 'd',
        text: 'AWS SQS',
        correct: true
      }
    ],
    explain:
      'Amazon Simple Queue Service (SQS) is a fully managed message queuing service that enables you to decouple and scale microservices, distributed systems, and serverless applications. SQS eliminates the complexity and overhead associated with managing and operating message-oriented middleware and empowers developers to focus on differentiating work. Using SQS, you can send, store, and receive messages between software components at any volume, without losing messages or requiring other services to be available. Get started with SQS in minutes using the AWS console, Command Line Interface, or SDK of your choice, and 3 simple commands. SQS offers 2 types of message queues. Standard queues offer maximum throughput, best-effort ordering, and at-least-once delivery. SQS FIFO queues are designed to guarantee that messages are processed exactly once, in the exact order that they are sent.'
  },
  {
    id: '6',
    cat: '1',
    q: 'A gaming company is creating an application which simply provides a leaderboard for specific games. The leaderboard will use DynamoDB for data, and simply needs to be updated in near real-time. An EC2 instance will be configured to house the application which will be accessed by subscribers from the Internet. Which step is NOT necessary for internet traffic to flow to and from the Internet?',
    options: [
      {
        id: 'a',
        text: 'Ensure that your network access control lists and security group rules allow the relevant traffic to flow to and from your instance.',
        correct: false
      },
      {
        id: 'b',
        text: 'Attach an internet gateway to your VPC.',
        correct: false
      },
      {
        id: 'c',
        text: "Add a route to your subnet's route table that directs internet-bound traffic to the internet gateway.",
        correct: false
      },
      {
        id: 'd',
        text: 'A route in the route table to the DynamoDB table.',
        correct: true
      }
    ],
    explain:
      'Correct. The application needs to be able to communicate with the DynamoDB table, but this has nothing to do with the necessary steps for internet traffic flow to and from the application instance.'
  },
  {
    id: '7',
    cat: '3',
    q: 'A consultant is hired by a small company to configure an AWS environment. The consultant begins working with the VPC and launching EC2 instances within the VPC. The initial instances will be placed in a public subnet. The consultant begins to create security groups. What is true of the default security group?',
    options: [
      {
        id: 'a',
        text: "You can't delete this group, nor can you change the group's rules.",
        correct: false
      },
      {
        id: 'b',
        text: "You can delete this group, however, you can't change the group's rules.",
        correct: false
      },
      {
        id: 'c',
        text: "You can delete this group or you can change the group's rules.",
        correct: false
      },
      {
        id: 'd',
        text: "You can't delete this group, however, you can change the group's rules.",
        correct: true
      }
    ],
    explain:
      "Your VPC includes a default security group. You can't delete this group, however, you can change the group's rules. The procedure is the same as modifying any other security group. For more information, see Adding, removing, and updating rules."
  },
  {
    id: '8',
    cat: '2',
    q: 'You work for a large healthcare provider as an AWS lead architect. There is a need to collect data in real-time from devices throughout the organization. The data will include log and event data from sources such as servers, desktops, and mobile devices. The data initially captured will be technical device data, but the goal is to expand the effort to collecting clinical data in real-time from handheld devices used by nurses and doctors. Which AWS service best meets this requirement?',
    options: [
      {
        id: 'a',
        text: 'Kinesis Video Streams',
        correct: false
      },
      {
        id: 'b',
        text: 'AWS Lambda',
        correct: false
      },
      {
        id: 'c',
        text: 'Kinesis Data Streams',
        correct: true
      },
      {
        id: 'd',
        text: 'AWS Redshift',
        correct: false
      }
    ],
    explain:
      'Correct. Kinesis Data Streams can be used to collect log and event data from sources such as servers, desktops, and mobile devices. You can then build Kinesis applications to continuously process the data, generate metrics, power live dashboards, and emit aggregated data into stores such as Amazon S3. '
  },
  {
    id: '9',
    cat: '1',
    q: 'You have been hired as a Solutions Architect for a company that pairs photos with related story narratives in PDF format. The company needs to be able to store files in several different formats, such as PDF, JPG, PNG, Word, and several others. This storage needs to be highly durable. Which storage type will best meet this requirement?',
    options: [
      {
        id: 'a',
        text: 'Amazon RDS',
        correct: false
      },
      {
        id: 'b',
        text: 'EC2 instance store',
        correct: false
      },
      {
        id: 'c',
        text: 'S3',
        correct: true
      },
      {
        id: 'd',
        text: 'DynamoDB',
        correct: false
      }
    ],
    explain:
      'Amazon Simple Storage Service (Amazon S3) is an object storage service that offers industry-leading scalability, data availability, security, and performance. This means customers of all sizes and industries can use it to store and protect any amount of data for a range of use cases, such as websites, mobile applications, backup and restore, archive, enterprise applications, IoT devices, and big data analytics. Amazon S3 provides easy-to-use management features so you can organize your data and configure finely-tuned access controls to meet your specific business, organizational, and compliance requirements. Amazon S3 is designed for 99.999999999% (11 9s) of durability, and stores data for millions of applications for companies all around the world '
  },
  {
    id: '10',
    cat: '3',
    q: 'A small company has nearly 200 users who already have AWS accounts in the company AWS environment. A new S3 bucket has been created which will allow roughly a third of all users access to sensitive information in the bucket. What is the most time efficient way to get these users access to the bucket?',
    options: [
      {
        id: 'a',
        text: 'Create a new policy which will grant permissions to the bucket. Create a group and attach the policy to that group. Add the users to this group.',
        correct: true
      },
      {
        id: 'b',
        text: 'Create a new policy which will grant permissions to the bucket. Create a role and attach the policy to that role. Add the users to this role.',
        correct: false
      },
      {
        id: 'c',
        text: 'Create a new role which will grant permissions to the bucket. Create a group and attach the role to that group. Add the users to this group.',
        correct: false
      },
      {
        id: 'd',
        text: 'Create a new bucket policy granting the appropriate permissions and attach it to the bucket.',
        correct: false
      }
    ],
    explain:
      'An IAM group is a collection of IAM users. Groups let you specify permissions for multiple users, which can make it easier to manage the permissions for those users. For example, you could have a group called Admins and give that group the types of permissions that administrators typically need. Any user in that group automatically has the permissions that are assigned to the group. If a new user joins your organization and needs administrator privileges, you can assign the appropriate permissions by adding the user to that group. Similarly, if a person changes jobs in your organization, instead of editing that user\'s permissions, you can remove him or her from the old groups and add him or her to the appropriate new groups. Note that a group is not truly an "identity" in IAM because it cannot be identified as a Principal in a permission policy. It is simply a way to attach policies to multiple users at one time. '
  },
  {
    id: '11',
    cat: '1',
    q: 'Your company has recently converted to a hybrid cloud environment and will slowly be migrating to a fully AWS cloud environment. The AWS side is in need of some steps to prepare for disaster recovery. A disaster recovery plan needs to be drawn up and disaster recovery drills need to be performed. The company wants to establish Recovery Time and Recovery Point Objectives, with a major component being a very aggressive RTO, with cost not being a major factor. You have determined and will recommend that the best DR configuration to meet cost and RTO/RPO objectives will be to run a second AWS architecture in another Region in an active-active configuration. Which AWS disaster recovery pattern will best meet these requirements?',
    options: [
      {
        id: 'a',
        text: 'Warm Standby',
        correct: false
      },
      {
        id: 'b',
        text: 'Multi-site',
        correct: true
      },
      {
        id: 'c',
        text: 'Pilot Light',
        correct: false
      },
      {
        id: 'd',
        text: 'Backup and restore',
        correct: false
      }
    ],
    explain:
      'Multi-site with the active-active architecture is correct. This pattern will have the highest cost but the quickest failover.'
  },
  {
    id: '12',
    cat: '3',
    q: 'Your company is storing highly sensitive data in S3 Buckets. The data includes personal and financial information. An audit has determined that this data must be stored in a secured manner and any data stored in the buckets already or data coming into the buckets must be analyzed and alerts sent out flagging improperly stored data. Which AWS service can be used to meet this requirement?',
    options: [
      {
        id: 'a',
        text: 'Amazon Macie',
        correct: true
      },
      {
        id: 'b',
        text: 'AWS Inspector',
        correct: false
      },
      {
        id: 'c',
        text: 'AWS GuardDuty',
        correct: false
      },
      {
        id: 'd',
        text: 'AWS Trusted Advisor',
        correct: false
      }
    ],
    explain:
      'Amazon Macie is a fully-managed data security and data privacy service that uses machine learning and pattern matching to discover and protect your sensitive data in AWS. Macie automatically provides an inventory of Amazon S3 buckets including a list of unencrypted buckets, publicly accessible buckets, and buckets shared with AWS accounts outside those you have defined in AWS Organizations. Then, Macie applies machine learning and pattern matching techniques to the buckets you select to identify and alert you to sensitive data, such as personally identifiable information (PII). Macie’s alerts, or findings, can be searched and filtered in the AWS Management Console and sent to Amazon CloudWatch Events for easy integration with existing workflow or event management systems, or to be used in combination with AWS services, such as AWS Step Functions to take automated remediation actions.'
  },
  {
    id: '13',
    cat: '2',
    q: 'A team member has been tasked to configure four EC2 instances for four separate applications. These are not high-traffic apps, so there is no need for an Auto Scaling Group. The instances are all in the same public subnet and each instance has an EIP address, and all of the instances have the same Security Group. But none of the instances can send or receive internet traffic. You verify that all the instances have a public IP address. You also verify that an internet gateway has been configured. What is the most likely issue?',
    options: [
      {
        id: 'a',
        text: 'You are using the default NACL.',
        correct: false
      },
      {
        id: 'b',
        text: 'There is no route in the route table to the internet gateway (or it has been deleted).',
        correct: true
      },
      {
        id: 'c',
        text: 'The route table is corrupt.',
        correct: false
      },
      {
        id: 'd',
        text: 'Each instance needs its own security group.',
        correct: false
      }
    ],
    explain:
      "The question details all of the configuration needed for internet access, except for a route to the IGW in the route table. This is definitely a key step in any checklist for internet connectivity. It is quite possible to have a subnet with the 'Public' attribute set but no route to the Internet in the assigned Route table. (test it yourself). This may have been a setup error, or someone may have thoughtlessly altered the shared Route table for a special case instead of creating a new Route table for the special case."
  },
  {
    id: '14',
    cat: '3',
    q: 'You have been evaluating the NACLs in your company. Currently, you are looking at the default network ACL. What is true about the default network ACL?',
    options: [
      {
        id: 'a',
        text: 'The default NACL denies all traffic.',
        correct: false
      },
      {
        id: 'b',
        text: 'You can add or remove rules from the default network ACL.',
        correct: true
      },
      {
        id: 'c',
        text: 'You cannot edit the default NACL.',
        correct: false
      },
      {
        id: 'd',
        text: 'You can only edit the default NACL if it is the only NACL in the VPC.',
        correct: false
      }
    ],
    explain:
      "The default network ACL is configured to allow all traffic to flow in and out of the subnets with which it is associated. You are able to add and remove your own rules from the default network ACL. However, each network ACL also includes a rule whose rule number is an asterisk. This rule ensures that if a packet doesn't match any of the other numbered rules, it's denied. You can't modify or remove this rule."
  },
  {
    id: '15',
    cat: '4',
    q: 'You have been tasked with migrating an application and the servers it runs on to the company AWS cloud environment. You have created a checklist of steps necessary to perform this migration. A subsection in the checklist is security considerations. One of the things that you need to consider is the shared responsibility module. Which option does AWS handle under the shared responsibility model?',
    options: [
      {
        id: 'a',
        text: 'Firewall Configuration',
        correct: false
      },
      {
        id: 'b',
        text: 'Physical Hardware Infrastructure',
        correct: true
      },
      {
        id: 'c',
        text: 'User Authentication',
        correct: false
      },
      {
        id: 'd',
        text: 'Client-side data encryption',
        correct: false
      }
    ],
    explain:
      "Security and compliance is a shared responsibility between AWS and the customer. This shared model can help relieve the customer's operational burden as AWS operates, manages, and controls the components from the host operating system and virtualization layer down to the physical security of the facilities in which the service operates. The customer assumes responsibility for, and management of, the guest operating system (including updates and security patches), other associated application software, and the configuration of the AWS provided security group firewall. Customers should carefully consider the services they choose, as their responsibilities vary depending on the services used, the integration of those services into their IT environment, and applicable laws and regulations. The nature of this shared responsibility also provides the flexibility and customer control that permits the deployment. This differentiation of responsibility is commonly referred to as Security “of” the Cloud versus Security “in” the Cloud. AWS responsibility “Security of the Cloud”: AWS is responsible for protecting the infrastructure that runs all of the services offered in the AWS Cloud. This infrastructure is composed of the hardware, software, networking, and facilities that run AWS Cloud services."
  },
  {
    id: '16',
    cat: '1',
    q: 'A company needs to perform asynchronous processing, and has Amazon SQS as part of a decoupled architecture. The company wants to ensure that the number of empty responses from polling requests are kept to a minimum. What should a solutions architect do to ensure that empty responses are reduced?',
    options: [
      {
        id: 'a',
        text: 'Increase the maximum message retention period for the queue',
        correct: false
      },
      {
        id: 'b',
        text: 'Increase the maximum receives for the redrive policy for the queue.',
        correct: false
      },
      {
        id: 'c',
        text: ' Increase the default visibility timeout for the queue.',
        correct: false
      },
      {
        id: 'd',
        text: 'Increase the receive message wait time for the queue.',
        correct: true
      }
    ],
    explain:
      'When the ReceiveMessageWaitTimeSeconds property of a queue is set to a value greater than zero, long polling is in effect. Long polling reduces the number of empty responses by allowing Amazon SQS to wait until a message is available before sending a response to a ReceiveMessage request.'
  },
  {
    id: '17',
    cat: '1',
    q: 'A company currently stores data for on-premises applications on local drives. The chief technology officer wants to reduce hardware costs by storing the data in Amazon S3 but does not want to make modifications to the applications. To minimize latency, frequently accessed data should be available locally. What is a reliable and durable solution for a solutions architect to implement that will reduce the cost of local storage?',
    options: [
      {
        id: 'a',
        text: 'Deploy an SFTP client on a local server and transfer data to Amazon S3 using AWS Transfer for SFTP',
        correct: false
      },
      {
        id: 'b',
        text: 'Deploy an AWS Storage Gateway volume gateway configured in cached volume mode.',
        correct: true
      },
      {
        id: 'c',
        text: 'Deploy an AWS DataSync agent on a local server and configure an S3 bucket as the destination.',
        correct: false
      },
      {
        id: 'd',
        text: 'Deploy an AWS Storage Gateway volume gateway configured in stored volume mode.',
        correct: false
      }
    ],
    explain:
      'An AWS Storage Gateway volume gateway connects an on-premises software application with cloudbacked storage volumes that can be mounted as Internet Small Computer System Interface (iSCSI) devices from on-premises application servers. In cached volumes mode, all the data is stored in Amazon S3 and a copy of frequently accessed data is stored locally'
  },
  {
    id: '18',
    cat: '4',
    q: 'A solutions architect wants to design a solution to save costs for Amazon EC2 instances that do not need to run during a 2-week company shutdown. The applications running on the instances store data in instance memory (RAM) that must be present when the instances resume operation. Which approach should the solutions architect recommend to shut down and resume the instances?',
    options: [
      {
        id: 'a',
        text: 'Modify the application to store the data on instance store volumes. Reattach the volumes while restarting them. ',
        correct: false
      },
      {
        id: 'b',
        text: 'Snapshot the instances before stopping them. Restore the snapshot after restarting the instances.',
        correct: false
      },
      {
        id: 'c',
        text: 'Run the applications on instances enabled for hibernation. Hibernate the instances before the shutdown',
        correct: true
      },
      {
        id: 'd',
        text: 'Note the Availability Zone for each instance before stopping it. Restart the instances in the same Availability Zones after the shutdown.',
        correct: false
      }
    ],
    explain:
      'Hibernating an instance saves the contents of RAM to the Amazon EBS root volume. When the instance restarts, the RAM contents are reloaded.'
  },
  {
    id: '19',
    cat: '1',
    q: "A software company has created an application to capture service requests from users and also enhancement requests. The application is deployed on an Auto Scaling group of EC2 instances fronted by an Application Load Balancer. The Auto Scaling group has scaled to maximum capacity, but there are still requests being lost. The cost of these instances should remain the same. What step can the company take to ensure requests aren't lost?",
    options: [
      {
        id: 'a',
        text: 'Use a Network Load Balancer instead for faster throughput.',
        correct: false
      },
      {
        id: 'b',
        text: 'Use larger instances in the Auto Scaling group.',
        correct: false
      },
      {
        id: 'c',
        text: 'Use an SQS queue with the Auto Scaling group to capture all requests.',
        correct: true
      },
      {
        id: 'd',
        text: 'Use spot instances to save money.',
        correct: false
      }
    ],
    explain:
      "There are some scenarios where you might think about scaling in response to activity in an Amazon SQS queue. For example, suppose that you have a web app that lets users upload images and use them online. In this scenario, each image requires resizing and encoding before it can be published. The app runs on EC2 instances in an Auto Scaling group, and it's configured to handle your typical upload rates. Unhealthy instances are terminated and replaced to maintain current instance levels at all times. The app places the raw bitmap data of the images in an SQS queue for processing. It processes the images and then publishes the processed images where they can be viewed by users. The architecture for this scenario works well if the number of image uploads doesn't vary over time. But if the number of uploads changes over time, you might consider using dynamic scaling to scale the capacity of your Auto Scaling group"
  },
  {
    id: '20',
    cat: '2',
    q: 'A team of architects is designing a new AWS environment for a company which wants to migrate to the Cloud. The architects are considering the use of EC2 instances with instance store volumes. The architects realize that the data on the instance store volumes are ephemeral. Which action will not cause the data to be deleted on an instance store volume?',
    options: [
      {
        id: 'a',
        text: 'The underlying disk drive fails.',
        correct: false
      },
      {
        id: 'b',
        text: 'Reboot',
        correct: true
      },
      {
        id: 'c',
        text: 'Instance is stopped.',
        correct: false
      },
      {
        id: 'd',
        text: 'Hardware disk failure.',
        correct: false
      }
    ],
    explain:
      'Some Amazon Elastic Compute Cloud (Amazon EC2) instance types come with a form of directly attached, block-device storage known as the instance store. The instance store is ideal for temporary storage, because the data stored in instance store volumes is not persistent through instance stops, terminations, or hardware failures.'
  },
  {
    id: '21',
    cat: '4',
    q: 'Your company is storing stack traces for application errors in an S3 Bucket. The engineers using these stack traces review them when addressing application issues. It has been decided that the files only need to be kept for four weeks then they can be purged. How can you meet this requirement in S3?',
    options: [
      {
        id: 'a',
        text: 'Create a bucket policy to purge the rules after one month.',
        correct: false
      },
      {
        id: 'b',
        text: 'Write a cron job to purge the files after one month.',
        correct: false
      },
      {
        id: 'c',
        text: 'Add an S3 Lifecycle rule to archive these files to Glacier after one month.',
        correct: false
      },
      {
        id: 'd',
        text: 'Configure the S3 Lifecycle rules to purge the files after a month.',
        correct: true
      }
    ],
    explain:
      'To manage your objects so that they are stored cost-effectively throughout their lifecycle, configure their Amazon S3 Lifecycle. An S3 Lifecycle configuration is a set of rules that define actions that Amazon S3 applies to a group of objects. There are two types of actions: Transition actions define when objects transition to another storage class. For example, you might choose to transition objects to the S3 Standard-IA storage class 30 days after you created them, or archive objects to the S3 Glacier storage class one year after creating them. Expiration actions define when objects expire. Amazon S3 deletes expired objects on your behalf. The lifecycle expiration costs depend on when you choose to expire objects.'
  },
  {
    id: '22',
    cat: '2',
    q: 'An application is hosted on an EC2 instance in a VPC. The instance is in a subnet in the VPC, and the instance has a public IP address. There is also an internet gateway and a security group with the proper ingress configured. But your testers are unable to access the instance from the Internet. What could be the problem?',
    options: [
      {
        id: 'a',
        text: 'Make sure the instance has a private IP address.',
        correct: false
      },
      {
        id: 'b',
        text: 'A virtual private gateway needs to be configured.',
        correct: false
      },
      {
        id: 'c',
        text: 'A NAT gateway needs to be configured.',
        correct: false
      },
      {
        id: 'd',
        text: 'Add a route to the route table, from the subnet containing the instance, to the Internet Gateway.',
        correct: true
      }
    ],
    explain:
      "The question doesn't state if the subnet containing the instance is public or private. An internet gateway is a horizontally scaled, redundant, and highly available VPC component that allows communication between your VPC and the internet. To enable access to or from the internet for instances in a subnet in a VPC, you must do the following: \u000D \u2022 Attach an internet gateway to your VPC.\u000D \u2022 Add a route to your subnet's route table that directs internet-bound traffic to the internet gateway. If a subnet is associated with a route table that has a route to an internet gateway, it's known as a public subnet. If a subnet is associated with a route table that does not have a route to an internet gateway, it's known as a private subnet.\u000D \u2022 Ensure that instances in your subnet have a globally unique IP address (public IPv4 address, Elastic IP address, or IPv6 address).\u000D \u2022 Ensure that your network access control lists and security group rules allow the relevant traffic to flow to and from your instance. \u000D \u2022 In your subnet route table, you can specify a route for the internet gateway to all destinations not explicitly known to the route table (0.0.0.0/0 for IPv4 or ::/0 for IPv6). Alternatively, you can scope the route to a narrower range of IP addresses. For example, the public IPv4 addresses of your company's public endpoints outside of AWS, or the elastic IP addresses of other Amazon EC2 instances outside your VPC. To enable communication over the Internet for IPv4, your instance must have a public IPv4 address or an Elastic IP address that's associated with a private IPv4 address on your instance. Your instance is only aware of the private (internal) IP address space defined within the VPC and subnet. The internet gateway logically provides the one-to-one NAT on behalf of your instance so that when traffic leaves your VPC subnet and goes to the Internet, the reply address field is set to the public IPv4 address or elastic IP address of your instance and not its private IP address. Conversely, traffic that's destined for the public IPv4 address or elastic IP address of your instance has its destination address translated into the instance's private IPv4 address before the traffic is delivered to the VPC. To enable communication over the Internet for IPv6, your VPC and subnet must have an associated IPv6 CIDR block, and your instance must be assigned an IPv6 address from the range of the subnet. IPv6 addresses are globally unique, and therefore public by default."
  },
  {
    id: '23',
    cat: '1',
    q: 'A database outage has been very costly to your organization. You have been tasked with configuring a more highly-available architecture. The main requirement is that the chosen architecture needs to meet an aggressive RTO in case of disaster. You have decided to use an RDS Multi-AZ deployment. How is the replication handled for RDS Multi-AZ?',
    options: [
      {
        id: 'a',
        text: 'You can configure a standby replica in a different Availability Zone and send traffic synchronously or asynchronously depending on your cost considerations.',
        correct: false
      },
      {
        id: 'b',
        text: 'Amazon RDS automatically provisions and maintains a synchronous standby replica in a different Region.',
        correct: false
      },
      {
        id: 'c',
        text: 'Amazon RDS automatically provisions and maintains a synchronous standby replica in a different Availability Zone.',
        correct: true
      },
      {
        id: 'd',
        text: 'Amazon RDS automatically provisions and maintains an asynchronous standby replica in a different Availability Zone.',
        correct: false
      }
    ],
    explain:
      "Amazon RDS provides high availability and failover support for DB instances using Multi-AZ deployments. Amazon RDS uses several different technologies to provide failover support. Multi-AZ deployments for MariaDB, MySQL, Oracle, and PostgreSQL DB instances use Amazon's failover technology. SQL Server DB instances use SQL Server Database Mirroring (DBM) or Always On Availability Groups (AGs). In a Multi-AZ deployment, Amazon RDS automatically provisions and maintains a synchronous standby replica in a different Availability Zone. The primary DB instance is synchronously replicated across Availability Zones to a standby replica to provide data redundancy, eliminate I/O freezes, and minimize latency spikes during system backups. Running a DB instance with high availability can enhance availability during planned system maintenance, and help protect your databases against DB instance failure and Availability Zone disruption."
  },
  {
    id: '24',
    cat: '2',
    q: 'You have just started working at a company that is migrating from a physical data center into AWS. Currently, you have 25 TB of data that needs to be moved to an S3 bucket. Your company has just finished setting up a 1 GB Direct Connect drop, but you do not have a VPN currently up and running. This data needs to be encrypted during transit and at rest and must be uploaded to the S3 bucket within 21 days. How can you meet these requirements?',
    options: [
      {
        id: 'a',
        text: 'Upload the data to S3 using your public internet connection.',
        correct: false
      },
      {
        id: 'b',
        text: 'Order a Snowcone device to transmit the data.',
        correct: false
      },
      {
        id: 'c',
        text: 'Upload the data using Direct Connect.',
        correct: false
      },
      {
        id: 'd',
        text: 'Use a Snowball device to transmit the data.',
        correct: true
      }
    ],
    explain:
      'This would be the perfect choice to transmit your data. Snowball encrypts your data, so all the security and speed requirements would be met.'
  },
  {
    id: '25',
    cat: '1',
    q: 'Your company has decided to migrate a SQL Server database to a newly-created AWS account. Which service can be used to migrate the database?',
    options: [
      {
        id: 'a',
        text: 'DynamoDB',
        correct: false
      },
      {
        id: 'b',
        text: 'Elasticache',
        correct: false
      },
      {
        id: 'c',
        text: 'AWS RDS',
        correct: false
      },
      {
        id: 'd',
        text: 'Database Migration Service',
        correct: true
      }
    ],
    explain:
      'AWS Database Migration Service helps you migrate databases to AWS quickly and securely. The source database remains fully operational during the migration, minimizing downtime to applications that rely on the database. The AWS Database Migration Service can migrate your data to and from the most widely used commercial and open-source databases. AWS Database Migration Service supports homogeneous migrations such as Oracle to Oracle, as well as heterogeneous migrations between different database platforms, such as Oracle or Microsoft SQL Server to Amazon Aurora. With AWS Database Migration Service, you can continuously replicate your data with high availability and consolidate databases into a petabyte-scale data warehouse by streaming data to Amazon Redshift and Amazon S3.'
  },
  {
    id: '26',
    cat: '2',
    q: 'You are designing an architecture which will house an Auto Scaling Group of EC2 instances. The application hosted on the instances is expected to be extremely popular. Forecasts for traffic to this site expect very high traffic and you will need a load balancer to handle tens of millions of requests per second while maintaining high throughput at ultra low latency. You need to select the type of load balancer to front your Auto Scaling Group to meet this high traffic requirement. Which load balancer will you select?',
    options: [
      {
        id: 'a',
        text: 'You will need a Classic Load Balancer to meet this requirement.',
        correct: false
      },
      {
        id: 'b',
        text: 'You will need an Application Load Balancer to meet this requirement.',
        correct: false
      },
      {
        id: 'c',
        text: 'All the AWS load balancers meet the requirement and perform the same.',
        correct: false
      },
      {
        id: 'd',
        text: 'You will select a Network Load Balancer to meet this requirement.',
        correct: true
      }
    ],
    explain:
      'If extreme performance is needed for your application, AWS recommends that you use a Network Load Balancer. Network Load Balancer operates at the connection level (Layer 4), routing connections to targets (Amazon EC2 instances, microservices, and containers) within Amazon VPC, based on IP protocol data. Ideal for load balancing of both TCP and UDP traffic, Network Load Balancer is capable of handling millions of requests per second while maintaining ultra-low latencies. Network Load Balancer is optimized to handle sudden and volatile traffic patterns while using a single static IP address per Availability Zone. It is integrated with other popular AWS services such as Auto Scaling, Amazon EC2 Container Service (ECS), Amazon CloudFormation, and AWS Certificate Manager (ACM).'
  },
  {
    id: '27',
    cat: '1',
    q: 'A small startup company has begun using AWS for all of its IT infrastructure. The company has two AWS Solutions Architects, and they are very proficient with AWS deployments. They want to choose a deployment service that best meets the given requirements. Those requirements include version control of their infrastructure documentation and granular control of all of the services to be deployed. Which AWS service would best meet these requirements?',
    options: [
      {
        id: 'a',
        text: 'Terraform',
        correct: false
      },
      {
        id: 'b',
        text: 'OpsWorks',
        correct: false
      },
      {
        id: 'c',
        text: 'CloudFormation',
        correct: true
      },
      {
        id: 'd',
        text: 'Elastic Beanstalk',
        correct: false
      }
    ],
    explain:
      'CloudFormation is infrastructure as code, and the CloudFormation feature of templates allows this infrastructure as code to be version controlled. While it can be argued that both OpsWorks and Elastic Beanstalk provide some granular control of services, this is not the main feature of either. Both OpsWorks and Elastic Beanstalk, to varying degrees, allow some detailed configuration. How is AWS CloudFormation different from AWS Elastic Beanstalk? These services are designed to complement each other. AWS Elastic Beanstalk provides an environment to deploy and run applications in the cloud. It is integrated with developer tools and provides a one-stop experience for you to manage the lifecycle of your applications. AWS CloudFormation is a convenient provisioning mechanism for a broad range of AWS and third-party resources. It supports the infrastructure needs of many different types of applications, such as existing enterprise applications, legacy applications, applications built using a variety of AWS resources, and container-based solutions (including those built using AWS Elastic Beanstalk). AWS CloudFormation supports Elastic Beanstalk application environments as one of the AWS resource types. This allows you, for example, to create and manage an AWS Elastic Beanstalk–hosted application along with an RDS database to store the application data. In addition to RDS instances, any other supported AWS resource can be added to the group as well.'
  },
  {
    id: '28',
    cat: '3',
    q: 'You have been evaluating the NACLs in your company. Currently, you are looking at the default network ACL. Which statement is true regarding subnets and NACLs?',
    options: [
      {
        id: 'a',
        text: 'Only public subnets can use the default NACL.',
        correct: false
      },
      {
        id: 'b',
        text: "ach subnet in your VPC must be associated with a network ACL. If you don't explicitly associate a subnet with a network ACL, the subnet is automatically associated with the default network ACL.",
        correct: true
      },
      {
        id: 'c',
        text: 'The default NACL will always be associated with each subnet.',
        correct: false
      },
      {
        id: 'd',
        text: 'You have to delete the default NACL before creating a custom NACL to associate with a subnet.',
        correct: false
      }
    ],
    explain:
      "Each subnet in your VPC must be associated with a network ACL. If you don't explicitly associate a subnet with a network ACL, the subnet is automatically associated with the default network ACL."
  },
  {
    id: '29',
    cat: '1',
    q: 'An accounting company has big data applications for analyzing actuary data. The company is migrating some of its services to the cloud, and for the foreseeable future, will be operating in a hybrid environment. They need a storage service that provides a simple, scalable, fully managed elastic NFS file system for use with AWS Cloud services and on-premises resources. Which AWS service can meet these requirements?',
    options: [
      {
        id: 'a',
        text: 'EFS',
        correct: true
      },
      {
        id: 'b',
        text: 'Glacier',
        correct: false
      },
      {
        id: 'c',
        text: 'S3',
        correct: false
      },
      {
        id: 'd',
        text: 'EBS',
        correct: false
      }
    ],
    explain:
      "Amazon Elastic File System (Amazon EFS) provides a simple, scalable, fully managed elastic NFS file system for use with AWS Cloud services and on-premises resources. It is built to scale on-demand to petabytes without disrupting applications, growing and shrinking automatically as you add and remove files, eliminating the need to provision and manage capacity to accommodate growth. Amazon EFS offers 2 storage classes: the Standard storage class and the Infrequent Access storage class (EFS IA). EFS IA provides price/performance that's cost-optimized for files not accessed every day. By simply enabling EFS Lifecycle Management on your file system, files not accessed according to the lifecycle policy you choose will be automatically and transparently moved into EFS IA.Amazon Elastic File System (Amazon EFS) provides a simple, scalable, fully managed elastic NFS file system for use with AWS Cloud services and on-premises resources. It is built to scale on-demand to petabytes without disrupting applications, growing and shrinking automatically as you add and remove files, eliminating the need to provision and manage capacity to accommodate growth. Amazon EFS offers 2 storage classes: the Standard storage class and the Infrequent Access storage class (EFS IA). EFS IA provides price/performance that's cost-optimized for files not accessed every day. By simply enabling EFS Lifecycle Management on your file system, files not accessed according to the lifecycle policy you choose will be automatically and transparently moved into EFS IA."
  },
  {
    id: '30',
    cat: '2',
    q: 'You have been assigned to create an architecture which uses load balancers to direct traffic to an Auto Scaling Group of EC2 instances across multiple Availability Zones. You were considering using an Application Load Balancer, but some of the requirements you have been given seem to point to a Classic Load Balancer. Which requirement would be better served by an Application Load Balancer?',
    options: [
      {
        id: 'a',
        text: 'Support for EC2-Classic.',
        correct: false
      },
      {
        id: 'b',
        text: 'Path-based routing.',
        correct: true
      },
      {
        id: 'c',
        text: 'Support for TCP and SSL listeners.',
        correct: false
      },
      {
        id: 'd',
        text: 'Support for sticky sessions using application-generated cookies.',
        correct: false
      }
    ],
    explain:
      'Using an Application Load Balancer is preferred over a Classic Load Balancer. All feature supported by the Classic have been addressed and improved upon with the Application Load Balancer. With ALB you have support for path-based routing, support for host-based routing, support for routing based on fields in the request, support for routing requests to multiple applications on a single EC2 instance, support for redirecting requests from one url to another, support for returning custom HTTP response, support for registering targets by IP address, support for registering Lambda functions, support for the load balancer to authenticate users, support for containerized applications, support for monitoring the health of services. Also access logs contain additional info and are stored in a compressed format. Improved load balancer performance.'
  }
];
