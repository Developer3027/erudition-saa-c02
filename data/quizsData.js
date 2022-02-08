export const quizsData = [
  {
    id: 'a-fundamentals',
    result: [
      {
        id: 1,
        question: 'Which statement best describes a edge location.',
        options: [
          {
            id: 1,
            text: 'A physical location somewhere in the world where data is stored.',
            correct: false
          },
          {
            id: 2,
            text: 'A virtual location that can be used to handle authentication and authorization of your users in your cloud.',
            correct: false
          },
          {
            id: 3,
            text: 'A virtual type of compute instance that is located all over the world to deliver your content to your customers in a speedy fashion.',
            correct: false
          },
          {
            id: 4,
            text: 'A networking point of presence that is one of many spread across the globe that is commonly used to cache content.',
            correct: true
          }
        ]
      },
      {
        id: 2,
        question:
          'Whose responsibility is it to patch, update, and maintain the OS of EC2 instances in AWS ?',
        options: [
          { id: 1, text: 'You', correct: true },
          { id: 2, text: 'AWS', correct: false },
          { id: 3, text: 'Linus Torvalds', correct: false },
          {
            id: 4,
            text: 'The AMI auto updates the EC2 on building the instance',
            correct: false
          }
        ]
      },
      {
        id: 3,
        question: 'What category would the VPC service fall into ?',
        options: [
          { id: 1, text: 'Networking', correct: true },
          { id: 2, text: 'Compute', correct: false },
          { id: 3, text: 'Machine Learning', correct: false },
          { id: 4, text: 'Database', correct: false }
        ]
      },
      {
        id: 4,
        question:
          'Which of the following is NOT a pillar of the AWS Well-Architected Framework ?',
        options: [
          { id: 1, text: 'Reliability', correct: false },
          { id: 2, text: 'Harmony', correct: true },
          { id: 3, text: 'Security', correct: false },
          { id: 4, text: 'Cost Optimization', correct: false }
        ]
      },
      {
        id: 5,
        question: 'Which statement best describes a Region ?',
        options: [
          {
            id: 1,
            text: 'The original location of your data center that your going to migrate into AWS.',
            correct: false
          },
          {
            id: 2,
            text: 'A physical location around the world comprised of two or more Availability Zones.',
            correct: true
          },
          { id: 3, text: 'A networking point in a country.', correct: false },
          {
            id: 4,
            text: 'A virtual location around the world where you can create Availability Zones.',
            correct: false
          }
        ]
      }
    ]
  },
  {
    id: 'b-iam',
    result: [
      {
        id: 1,
        question: 'True or False, MFA tokens are required for all new users.',
        options: [
          {
            id: 1,
            text: 'True',
            correct: false
          },
          {
            id: 2,
            text: 'False',
            correct: true
          }
        ]
      },
      {
        id: 2,
        question: 'Why is it dangerous to use the AWS root user account?',
        options: [
          {
            id: 1,
            text: 'The root user password is regularly rotated, making it difficult to use.',
            correct: false
          },
          {
            id: 2,
            text: 'AWS accounts do not have root user accounts.',
            correct: false
          },
          {
            id: 3,
            text: 'The root user account is severely limited in what it can do.',
            correct: false
          },
          {
            id: 4,
            text: 'The root user account has full permissions to every service.',
            correct: true
          }
        ]
      },
      {
        id: 3,
        question:
          'What is the single best thing you can do to secure the root account in AWS?',
        options: [
          {
            id: 1,
            text: 'You do not have to do anything, AWS will do it for you.',
            correct: false
          },
          {
            id: 2,
            text: 'Enable multi-factor authentication (MFA).',
            correct: true
          },
          {
            id: 3,
            text: 'Delete the root account.',
            correct: false
          },
          {
            id: 4,
            text: 'Remove the root account password.',
            correct: false
          }
        ]
      },
      {
        id: 4,
        question:
          'Which of the following statements describes the principle of least privilege?',
        options: [
          {
            id: 1,
            text: 'Standardizing all permissions across all users in your company.',
            correct: false
          },
          {
            id: 2,
            text: 'Only assigning a user the minimum amount of permissions that they need to do the job.',
            correct: true
          },
          {
            id: 3,
            text: 'Giving a user too few permissions.',
            correct: false
          },
          {
            id: 4,
            text: 'Giving a user full permissions in most cases.',
            correct: false
          }
        ]
      },
      {
        id: 5,
        question: 'Why are IAM users considered "permanent" users?',
        options: [
          {
            id: 1,
            text: 'Because once they are created they can not be deleted.',
            correct: false
          },
          {
            id: 2,
            text: 'Because once the password, access key, or secret key are set, those credentials do not automatically rotate or change without human interaction.',
            correct: true
          },
          {
            id: 3,
            text: 'IAM users are not permanent; they only last a few weeks before they expire.',
            correct: false
          },
          {
            id: 4,
            text: 'Because once the password for the account is set, it can never be changed.',
            correct: false
          }
        ]
      }
    ]
  },
  {
    id: 'c-s3',
    result: [
      {
        id: 1,
        question:
          "Your boss instructs you to open up all of your company's S3 buckets so they can download content when they are at home. What do you do?",
        options: [
          {
            id: 1,
            text: "S3 buckets are public by default, so don't need to do anything to allow this.",
            correct: false
          },
          {
            id: 2,
            text: 'Open them up! They said it was ok, right?!',
            correct: false
          },
          {
            id: 3,
            text: 'Ask your boss to bring in a stack of floppy disks to transport to and from the office.',
            correct: false
          },
          {
            id: 4,
            text: 'Explain to your boss that this is a terrible idea and opens a huge security risk for the company.',
            correct: true
          }
        ]
      },
      {
        id: 2,
        question: 'What is the largest object you can store in S3?',
        options: [
          {
            id: 1,
            text: 'Unlimited',
            correct: false
          },
          {
            id: 2,
            text: '5 TB',
            correct: true
          },
          {
            id: 3,
            text: '1 TB',
            correct: false
          },
          {
            id: 4,
            text: '50 GB',
            correct: false
          }
        ]
      },
      {
        id: 3,
        question:
          'Versioning on your bucket was recently suspended and, after this, your boss deleted an object whose version ID is null and wants to restore it. What do you do?',
        options: [
          {
            id: 1,
            text: 'It is not possible since versioning was suspended. The object is gone.',
            correct: true
          },
          {
            id: 2,
            text: 'Look in the bucket named s3-backup. The object will be in there and can be restored to the original bucket.',
            correct: false
          },
          {
            id: 3,
            text: "Disabled or not, versioning doesn't protect against deletions. The object is gone forever.",
            correct: false
          },
          {
            id: 4,
            text: 'Re-enable versioning and remove the delete marker to restore the object.',
            correct: false
          }
        ]
      },
      {
        id: 4,
        question:
          'S3 allows you to host ____ websites directly from the bucket with no other tools needed.',
        options: [
          {
            id: 1,
            text: 'Static',
            correct: true
          },
          {
            id: 2,
            text: 'Dynamic',
            correct: false
          }
        ]
      },
      {
        id: 5,
        question:
          'True or False? You can create an S3 lifecycle policy to migrate objects from Glacier to Standard-IA.',
        options: [
          {
            id: 1,
            text: 'true',
            correct: false
          },
          {
            id: 2,
            text: 'false',
            correct: true
          }
        ]
      }
    ]
  },
  {
    id: 'd-ec2',
    result: [
      {
        id: 1,
        question:
          "What is the minimum time that AWS requires you to keep an EC2 instance online after you've turned it on?",
        options: [
          {
            id: 1,
            text: '15 Minuets',
            correct: false
          },
          {
            id: 2,
            text: 'None (no min run time)',
            correct: true
          },
          {
            id: 3,
            text: '1 hour',
            correct: false
          },
          {
            id: 4,
            text: '1 day',
            correct: false
          }
        ]
      },
      {
        id: 2,
        question: 'What is the EC2 metadata URL?',
        options: [
          {
            id: 1,
            text: '169.254.169.254',
            correct: true
          },
          {
            id: 2,
            text: '127.0.0.2',
            correct: false
          },
          {
            id: 3,
            text: '255.255.255.254',
            correct: false
          },
          {
            id: 4,
            text: '255.169.255.169',
            correct: false
          }
        ]
      },
      {
        id: 3,
        question: 'Why would you want to spin up an EC2 Dedicated Host?',
        options: [
          {
            id: 1,
            text: 'Because you need to create a cluster of EC2 instances',
            correct: false
          },
          {
            id: 2,
            text: "Because you have sensitive workloads that you don't want AWS to see",
            correct: false
          },
          {
            id: 3,
            text: 'Because your application has hardware-specific licensing requirements',
            correct: true
          },
          {
            id: 4,
            text: 'Because your boss told you to',
            correct: false
          }
        ]
      },
      {
        id: 4,
        question:
          'You have a small number of critical instances that should be kept separate from each other. You want to ensure that each instance is placed on distinct underlying hardware. What kind of placement group would you pick?',
        options: [
          {
            id: 1,
            text: 'Cluster',
            correct: false
          },
          {
            id: 2,
            text: 'Spread',
            correct: true
          },
          {
            id: 3,
            text: 'High Availability',
            correct: false
          },
          {
            id: 4,
            text: 'Partition',
            correct: false
          }
        ]
      },
      {
        id: 5,
        question:
          'You need to run a VERY price sensitive workload once a month that cannot be interrupted and must run continuously for up to six hours. Which sort of EC2 billing model should you use?',
        options: [
          {
            id: 1,
            text: 'Spot Block',
            correct: true
          },
          {
            id: 2,
            text: 'On-Demand Instance',
            correct: false
          },
          {
            id: 3,
            text: 'Spot Market',
            correct: false
          },
          {
            id: 4,
            text: 'Reversed Instance',
            correct: true
          }
        ]
      }
    ]
  },
  {
    id: 'e-ebs-efs',
    result: [
      {
        id: 1,
        question:
          "True or False? Amazon FSx for Lustre can't store data directly on Amazon S3.",
        options: [
          {
            id: 1,
            text: 'True',
            correct: false
          },
          {
            id: 2,
            text: 'False',
            correct: true
          }
        ]
      },
      {
        id: 2,
        question:
          'You just took a snapshot of an EBS volume. Where is it stored?',
        options: [
          {
            id: 1,
            text: 'Data Backup Service',
            correct: false
          },
          {
            id: 2,
            text: 'EC2',
            correct: false
          },
          {
            id: 3,
            text: 'EFS',
            correct: false
          },
          {
            id: 4,
            text: 'S3',
            correct: true
          }
        ]
      },
      {
        id: 3,
        question: 'What type of storage does EFS offer?',
        options: [
          {
            id: 1,
            text: 'Block',
            correct: false
          },
          {
            id: 2,
            text: 'Object',
            correct: false
          },
          {
            id: 3,
            text: 'System',
            correct: false
          },
          {
            id: 4,
            text: 'File',
            correct: true
          }
        ]
      },
      {
        id: 4,
        question:
          "You're trying to mount an EBS volume in Availability Zone (AZ) A to an EC2 instance in AZ B. Why isn't it working?",
        options: [
          {
            id: 1,
            text: 'You need to migrate your data to EFS to resolve your block-level storage issues.',
            correct: false
          },
          {
            id: 2,
            text: "The EBS service is having a problem and your data can't be read.",
            correct: false
          },
          {
            id: 3,
            text: 'EC2 instances must be in the same AZ as the EBS volumes.',
            correct: true
          },
          {
            id: 4,
            text: "You didn't enable cross-AZ for your EBS volume.",
            correct: false
          }
        ]
      },
      {
        id: 5,
        question:
          'Why would you consider hibernating an EC2 instance over stopping and starting it?',
        options: [
          {
            id: 1,
            text: 'AWS Support recommends hibernating all instances to decrease memory utilization upon reboot.',
            correct: false
          },
          {
            id: 2,
            text: "You're trying to save money. Hibernating an instance is more cost efficient than stopping an instance.",
            correct: false
          },
          {
            id: 3,
            text: 'Your OS is Windows-based and needs to update. This can only be done by hibernating the instance.',
            correct: false
          },
          {
            id: 4,
            text: 'You have an application that takes a long time to load. Hibernating the instance prevents you from having to reload it.',
            correct: true
          }
        ]
      }
    ]
  },
  {
    id: 'f-db',
    result: [
      {
        id: 1,
        question:
          "What type of read would you use with DynamoDB if you can't have stale data in your application?",
        options: [
          {
            id: 1,
            text: 'Strongly Consistent',
            correct: true
          },
          {
            id: 2,
            text: 'Eventually Consistent',
            correct: false
          },
          {
            id: 3,
            text: 'Sometimes Consistent.',
            correct: false
          },
          {
            id: 4,
            text: 'Weakly Consistent',
            correct: false
          }
        ]
      },
      {
        id: 2,
        question: 'True or False? RDS is patched and updated by AWS.',
        options: [
          {
            id: 1,
            text: 'True',
            correct: true
          },
          {
            id: 2,
            text: 'False',
            correct: false
          }
        ]
      },
      {
        id: 3,
        question: 'Fill in the blank: DynamoDB is a ____ database.',
        options: [
          {
            id: 1,
            text: 'Non-Relational',
            correct: true
          },
          {
            id: 2,
            text: 'Graph',
            correct: false
          },
          {
            id: 3,
            text: 'Relational',
            correct: false
          },
          {
            id: 4,
            text: 'Relationship',
            correct: false
          }
        ]
      },
      {
        id: 4,
        question:
          'Which one of the following features does RDS Aurora NOT support?',
        options: [
          {
            id: 1,
            text: 'Aurora Universal HA',
            correct: true
          },
          {
            id: 2,
            text: 'Up to 15 Read Replicas',
            correct: false
          },
          {
            id: 3,
            text: 'Aurora Serverless',
            correct: false
          },
          {
            id: 4,
            text: 'Automatic Backups',
            correct: false
          }
        ]
      },
      {
        id: 5,
        question: 'True or False? DynamoDB lives in your VPC.',
        options: [
          {
            id: 1,
            text: 'True',
            correct: true
          },
          {
            id: 2,
            text: 'false',
            correct: false
          }
        ]
      }
    ]
  },
  {
    id: 'g-vpc',
    result: [
      {
        id: 1,
        question:
          'By default, what range of IP addresses and ports do security groups leave open for inbound traffic?',
        options: [
          {
            id: 1,
            text: '0.0.0.0/0, port 80',
            correct: false
          },
          {
            id: 2,
            text: 'None. They are closed by default.',
            correct: true
          },
          {
            id: 3,
            text: '0.0.0.0/0, port 22',
            correct: false
          },
          {
            id: 4,
            text: '127.0.0.1, port 3389',
            correct: false
          }
        ]
      },
      {
        id: 2,
        question: 'What is the IPv4 CIDR block of the default VPC?',
        options: [
          {
            id: 1,
            text: '10.0.0.0/16',
            correct: false
          },
          {
            id: 2,
            text: '172.31.0.0/16',
            correct: true
          },
          {
            id: 3,
            text: '192.168.1.0/16',
            correct: false
          },
          {
            id: 4,
            text: '172.0.0.0/16',
            correct: false
          }
        ]
      },
      {
        id: 3,
        question:
          'Which of the following is a reason that VPC peering could fail?',
        options: [
          {
            id: 1,
            text: 'The VPCs use different numbers of AZs.',
            correct: true
          },
          {
            id: 2,
            text: 'The VPCs are in different regions.',
            correct: false
          },
          {
            id: 3,
            text: 'The VPCs are in different accounts',
            correct: false
          },
          {
            id: 4,
            text: 'The VPCs have overlapping IP addresses.',
            correct: true
          }
        ]
      },
      {
        id: 4,
        question:
          'Fill in the blank: Network Access Control Lists (NACLs) are ____.',
        options: [
          {
            id: 1,
            text: 'Stateish',
            correct: false
          },
          {
            id: 2,
            text: 'Stateful',
            correct: false
          },
          {
            id: 3,
            text: 'Stateless',
            correct: true
          },
          {
            id: 4,
            text: 'Even more confusing than security groups',
            correct: false
          }
        ]
      },
      {
        id: 5,
        question: 'Fill in the blank: Security groups are ____.',
        options: [
          {
            id: 1,
            text: 'Stateless',
            correct: false
          },
          {
            id: 2,
            text: 'Confusing',
            correct: false
          },
          {
            id: 3,
            text: 'Stateful',
            correct: true
          },
          {
            id: 4,
            text: 'Stateish',
            correct: false
          }
        ]
      }
    ]
  },
  {
    id: 'h-r53',
    result: [
      {
        id: 1,
        question:
          'True or False? With DNS failover, if a record set fails a health check, it will be removed from the Route 53 response until it passes the health check.',
        options: [
          {
            id: 1,
            text: 'True',
            correct: true
          },
          {
            id: 2,
            text: 'False',
            correct: false
          }
        ]
      },
      {
        id: 2,
        question:
          'Using Route 53, how would you direct example.com traffic to various IPs based on the country the user was sending traffic from?',
        options: [
          {
            id: 1,
            text: 'Use a simple routing policy.',
            correct: false
          },
          {
            id: 2,
            text: 'Use a failover routing policy.',
            correct: false
          },
          {
            id: 3,
            text: 'Use a geolocation routing policy.',
            correct: true
          },
          {
            id: 4,
            text: 'Use a latency routing policy.',
            correct: false
          }
        ]
      },
      {
        id: 3,
        question: 'What is the purpose of DNS?',
        options: [
          {
            id: 1,
            text: 'To deploy your networking applications',
            correct: false
          },
          {
            id: 2,
            text: 'To give a friendly name to IP addresses',
            correct: true
          },
          {
            id: 3,
            text: 'To allow IP addresses to point to load balancers',
            correct: false
          },
          {
            id: 4,
            text: 'To terminate unused EC2 instances',
            correct: true
          }
        ]
      },
      {
        id: 4,
        question:
          'Using Route 53, how would you direct example.com to 2 different IPs with different distribution levels of traffic?',
        options: [
          {
            id: 1,
            text: 'Use a simple routing policy.',
            correct: false
          },
          {
            id: 2,
            text: 'Use a geolocation routing policy.',
            correct: false
          },
          {
            id: 3,
            text: 'Use a weighted routing policy.',
            correct: true
          },
          {
            id: 4,
            text: 'Use a failover routing policy.',
            correct: false
          }
        ]
      },
      {
        id: 5,
        question: 'Using Route 53, how would you direct example.com to an ELB?',
        options: [
          {
            id: 1,
            text: 'By creating an AAAA record',
            correct: false
          },
          {
            id: 2,
            text: 'By creating a shortcut',
            correct: false
          },
          {
            id: 3,
            text: 'By creating an Alias record',
            correct: true
          },
          {
            id: 4,
            text: 'By creating a CNAME',
            correct: false
          }
        ]
      }
    ]
  },
  {
    id: 'i-elb',
    result: [
      {
        id: 1,
        question:
          "If you're building an application that needs to support an extreme level of networking traffic, which type of ELB load balancer would you pick?",
        options: [
          {
            id: 1,
            text: 'Network Load Balancer (NLB)',
            correct: true
          },
          {
            id: 2,
            text: 'Classic Load Balancer (CLB)',
            correct: false
          },
          {
            id: 3,
            text: 'Gateway Load Balancer (GLB)',
            correct: false
          },
          {
            id: 4,
            text: 'Application Load Balancer (ALB)',
            correct: false
          }
        ]
      },
      {
        id: 2,
        question: 'Which of the following is NOT an AWS ELB load balancer?',
        options: [
          {
            id: 1,
            text: 'Application Load Balancer (ALB)',
            correct: false
          },
          {
            id: 2,
            text: 'Classic Load Balancer (CLB)',
            correct: false
          },
          {
            id: 3,
            text: 'Network Load Balancer (NLB)',
            correct: false
          },
          {
            id: 4,
            text: 'Service Load Balancer (SLB)',
            correct: true
          }
        ]
      },
      {
        id: 3,
        question:
          'What kind of ELB load balancer would you select if you need to route traffic based on the contents of the request?',
        options: [
          {
            id: 1,
            text: 'Application Load Balancer (ALB)',
            correct: true
          },
          {
            id: 2,
            text: 'Network Load Balancer (NLB)',
            correct: false
          },
          {
            id: 3,
            text: 'Classic Load Balancer (CLB)',
            correct: false
          },
          {
            id: 4,
            text: 'Gateway Load Balancer (GLB)',
            correct: true
          }
        ]
      },
      {
        id: 4,
        question: 'Which layer of the OSI model does the NLB function on?',
        options: [
          {
            id: 1,
            text: 'Layer 1',
            correct: false
          },
          {
            id: 2,
            text: 'Layer 7',
            correct: false
          },
          {
            id: 3,
            text: 'Layer 4',
            correct: true
          },
          {
            id: 4,
            text: 'ULayer 2',
            correct: false
          }
        ]
      },
      {
        id: 5,
        question:
          'What instance will a NLB load balancer send traffic to if no hosts are healthy?',
        options: [
          {
            id: 1,
            text: 'It will reject all traffic.',
            correct: false
          },
          {
            id: 2,
            text: 'It will terminate the unhealthy hosts.',
            correct: false
          },
          {
            id: 3,
            text: 'It will try to send traffic to all the instances.',
            correct: true
          },
          {
            id: 4,
            text: 'It will store the traffic for later.',
            correct: false
          }
        ]
      }
    ]
  },
  {
    id: 'j-monitor',
    result: [
      {
        id: 1,
        question:
          'Which web service and feature can be used to monitor, store, and access your log files from Amazon EC2 instances, AWS CloudTrail, Route 53, and other sources?',
        options: [
          {
            id: 1,
            text: 'CloudWatch Events',
            correct: false
          },
          {
            id: 2,
            text: 'CloudWatch Logs',
            correct: true
          },
          {
            id: 3,
            text: 'Log Events',
            correct: false
          },
          {
            id: 4,
            text: 'CloudWatch',
            correct: false
          }
        ]
      },
      {
        id: 2,
        question:
          'Which tool would you use to monitor the CPU usage on an EC2 instance?',
        options: [
          {
            id: 1,
            text: 'CloudFormation',
            correct: false
          },
          {
            id: 2,
            text: 'EC2',
            correct: false
          },
          {
            id: 3,
            text: 'CloudWatch',
            correct: true
          },
          {
            id: 4,
            text: 'Cloud Alarm',
            correct: false
          }
        ]
      },
      {
        id: 3,
        question:
          'A period is the length of time associated with a specific Amazon CloudWatch statistic. What is the default period value?',
        options: [
          {
            id: 1,
            text: '10 seconds',
            correct: false
          },
          {
            id: 2,
            text: '60 seconds',
            correct: true
          },
          {
            id: 3,
            text: '600 seconds',
            correct: false
          },
          {
            id: 4,
            text: '300 seconds',
            correct: false
          }
        ]
      },
      {
        id: 4,
        question:
          'True or False? Amazon CloudWatch Events rules use event patterns to select events and route them to targets.',
        options: [
          {
            id: 1,
            text: 'True',
            correct: true
          },
          {
            id: 2,
            text: 'False',
            correct: false
          }
        ]
      }
    ]
  },
  {
    id: 'k-sa',
    result: [
      {
        id: 1,
        question:
          'You would select _____ capacity for a DynamoDB table with a predictable workload.',
        options: [
          {
            id: 1,
            text: 'Provisioned',
            correct: true
          },
          {
            id: 2,
            text: 'On-Demand',
            correct: false
          },
          {
            id: 3,
            text: 'Market',
            correct: false
          },
          {
            id: 4,
            text: 'Scalable',
            correct: false
          }
        ]
      },
      {
        id: 2,
        question:
          'What type of capacity should be selected for a DynamoDB table with a sporadic workload?',
        options: [
          {
            id: 1,
            text: 'On Demand',
            correct: true
          },
          {
            id: 2,
            text: 'Spot',
            correct: false
          },
          {
            id: 3,
            text: 'Provisioned',
            correct: false
          },
          {
            id: 4,
            text: 'Reserved',
            correct: false
          }
        ]
      },
      {
        id: 3,
        question:
          'What setting in your Amazon EC2 Auto Scaling group determines how many instances you need online right now?',
        options: [
          {
            id: 1,
            text: 'Average Capacity',
            correct: false
          },
          {
            id: 2,
            text: 'Maximum Capacity',
            correct: false
          },
          {
            id: 3,
            text: 'Minimum Capacity',
            correct: false
          },
          {
            id: 4,
            text: 'Desired Capacity',
            correct: true
          }
        ]
      },
      {
        id: 4,
        question:
          'What RDS database engine offers a serverless scaling option?',
        options: [
          {
            id: 1,
            text: 'SQL Server',
            correct: false
          },
          {
            id: 2,
            text: 'MySQL',
            correct: false
          },
          {
            id: 1,
            text: 'MariaDB',
            correct: false
          },
          {
            id: 2,
            text: 'Aurora',
            correct: true
          }
        ]
      }
    ]
  },
  {
    id: 'l-decouple',
    result: [
      {
        id: 1,
        question:
          'Which service is SNS commonly paired with to alert users that an alarm has gone off?',
        options: [
          {
            id: 1,
            text: 'SWF',
            correct: false
          },
          {
            id: 2,
            text: 'CloudWatch',
            correct: true
          },
          {
            id: 3,
            text: 'EC2',
            correct: false
          },
          {
            id: 4,
            text: 'S3',
            correct: false
          }
        ]
      },
      {
        id: 2,
        question:
          'How can you ensure that your SQS messages arrive in the correct order?',
        options: [
          {
            id: 1,
            text: 'Enable "correct_order" in your SQS queue.',
            correct: false
          },
          {
            id: 2,
            text: 'Route the messages through an ELB.',
            correct: false
          },
          {
            id: 3,
            text: 'SQS will do that automatically.',
            correct: false
          },
          {
            id: 4,
            text: 'Use an SQS FIFO queue.',
            correct: true
          }
        ]
      },
      {
        id: 3,
        question:
          'Which of the following endpoints can use a custom delivery policy to define how Amazon SNS retries the delivery of messages when server-side errors occur?',
        options: [
          {
            id: 1,
            text: "It can't retry messages",
            correct: false
          },
          {
            id: 2,
            text: 'SMS',
            correct: false
          },
          {
            id: 3,
            text: 'Email',
            correct: false
          },
          {
            id: 4,
            text: 'HTTP/S',
            correct: true
          }
        ]
      },
      {
        id: 4,
        question:
          'If the visibility timeout on a message in an SQS queue expires, what happens to the message?',
        options: [
          {
            id: 1,
            text: "It's now available in the queue to be retrieved.",
            correct: true
          },
          {
            id: 2,
            text: "It's deleted.",
            correct: false
          },
          {
            id: 1,
            text: "It's emailed to sqs-help@amazon.com.",
            correct: false
          },
          {
            id: 2,
            text: 'An SNS Topic is notified.',
            correct: false
          }
        ]
      },
      {
        id: 5,
        question: 'What type of service is SQS?',
        options: [
          {
            id: 1,
            text: 'Database',
            correct: false
          },
          {
            id: 2,
            text: 'Machine Learning tool',
            correct: false
          },
          {
            id: 1,
            text: 'Messaging queue',
            correct: true
          },
          {
            id: 2,
            text: 'Compute resources',
            correct: false
          }
        ]
      }
    ]
  }
];
