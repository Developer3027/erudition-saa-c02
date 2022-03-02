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
            id: 3,
            text: "It's emailed to sqs-help@amazon.com.",
            correct: false
          },
          {
            id: 4,
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
            id: 3,
            text: 'Messaging queue',
            correct: true
          },
          {
            id: 4,
            text: 'Compute resources',
            correct: false
          }
        ]
      }
    ]
  },
  {
    id: 'm-big-d',
    result: [
      {
        id: 1,
        question: 'What is a valid use case for Amazon EMR?',
        options: [
          {
            id: 1,
            text: 'Build real-time applications',
            correct: false
          },
          {
            id: 2,
            text: 'Analyze data in Amazon S3 using standard SQL',
            correct: false
          },
          {
            id: 3,
            text: 'Extract, transform, and load (ETL) jobs.',
            correct: true
          },
          {
            id: 4,
            text: 'Simplify data warehouse management',
            correct: false
          }
        ]
      },
      {
        id: 2,
        question: '_____ provides real-time streaming of data.',
        options: [
          {
            id: 1,
            text: 'Kinesis Data Firehose',
            correct: false
          },
          {
            id: 2,
            text: 'Kinesis Data Analytics',
            correct: false
          },
          {
            id: 3,
            text: 'SQS',
            correct: false
          },
          {
            id: 4,
            text: 'Kinesis Data Streams',
            correct: true
          }
        ]
      },
      {
        id: 3,
        question:
          'Which service provides the easiest way to run ad-hoc queries across multiple objects in S3 without the need to setup or manage any servers?',
        options: [
          {
            id: 1,
            text: 'EMR',
            correct: false
          },
          {
            id: 2,
            text: 'Glue',
            correct: false
          },
          {
            id: 3,
            text: 'Athena',
            correct: true
          },
          {
            id: 4,
            text: 'S3',
            correct: false
          }
        ]
      },
      {
        id: 4,
        question:
          'True or False? You are responsible for scaling Glue performance.',
        options: [
          {
            id: 1,
            text: 'False',
            correct: true
          },
          {
            id: 2,
            text: 'True',
            correct: false
          }
        ]
      },
      {
        id: 5,
        question:
          'How long are automatic Redshift backups retained by default?',
        options: [
          {
            id: 1,
            text: '35 Days',
            correct: false
          },
          {
            id: 2,
            text: '1 Day',
            correct: true
          },
          {
            id: 3,
            text: '1 Week',
            correct: false
          },
          {
            id: 4,
            text: 'Forever',
            correct: false
          }
        ]
      }
    ]
  },
  {
    id: 'n-serverless',
    result: [
      {
        id: 1,
        question: 'What is NOT a supported Lambda runtime?',
        options: [
          {
            id: 1,
            text: 'Node.js',
            correct: false
          },
          {
            id: 2,
            text: 'Python',
            correct: false
          },
          {
            id: 3,
            text: 'COBOL',
            correct: true
          },
          {
            id: 4,
            text: 'Java',
            correct: false
          }
        ]
      },
      {
        id: 2,
        question: 'What is the maximum length of time Lambda can run?',
        options: [
          {
            id: 1,
            text: '30 minutes',
            correct: false
          },
          {
            id: 2,
            text: '15 minutes',
            correct: true
          },
          {
            id: 3,
            text: '1 hour',
            correct: false
          },
          {
            id: 4,
            text: '1 minute',
            correct: false
          }
        ]
      },
      {
        id: 3,
        question: 'Which of the following is a common trigger for Lambda?',
        options: [
          {
            id: 1,
            text: 'CloudWatch Events (EventBridge)',
            correct: true
          },
          {
            id: 2,
            text: 'QuickSight',
            correct: false
          },
          {
            id: 3,
            text: 'IAM',
            correct: false
          },
          {
            id: 4,
            text: 'EC2',
            correct: false
          }
        ]
      },
      {
        id: 4,
        question:
          'What feature of ECS and EKS allows you to run containers without having to manage the underlying hosts?',
        options: [
          {
            id: 1,
            text: 'Lambda',
            correct: false
          },
          {
            id: 2,
            text: 'S3',
            correct: false
          },
          {
            id: 3,
            text: 'EC2',
            correct: false
          },
          {
            id: 4,
            text: 'Fargate',
            correct: true
          }
        ]
      },
      {
        id: 5,
        question:
          "What is one thing EC2 instances allow you to configure but a serverless application doesn't?",
        options: [
          {
            id: 1,
            text: 'The ability to pay for the service.',
            correct: false
          },
          {
            id: 2,
            text: 'Operating System',
            correct: true
          },
          {
            id: 3,
            text: 'The ability to configure the service.',
            correct: false
          },
          {
            id: 4,
            text: 'VPC placement',
            correct: false
          }
        ]
      }
    ]
  },
  {
    id: 'o-security',
    result: [
      {
        id: 1,
        question: 'Which of the following is NOT a data source for GuardDuty?',
        options: [
          {
            id: 1,
            text: 'CloudTrail logs',
            correct: false
          },
          {
            id: 2,
            text: 'DNS query logs',
            correct: false
          },
          {
            id: 3,
            text: 'VPC Flow Logs',
            correct: false
          },
          {
            id: 4,
            text: 'RDS event history',
            correct: true
          }
        ]
      },
      {
        id: 2,
        question:
          'Where is the most cost effective place to store your database passwords in a secure manner?',
        options: [
          {
            id: 1,
            text: 'S3',
            correct: false
          },
          {
            id: 2,
            text: 'Parameter Store',
            correct: true
          },
          {
            id: 3,
            text: 'Secrets Manager',
            correct: false
          },
          {
            id: 4,
            text: 'EBS',
            correct: false
          }
        ]
      },
      {
        id: 3,
        question: "What service does Macie monitor once you've enabled it?",
        options: [
          {
            id: 1,
            text: 'EBS',
            correct: false
          },
          {
            id: 2,
            text: 'CloudWatch Logs',
            correct: false
          },
          {
            id: 3,
            text: 'S3',
            correct: true
          },
          {
            id: 4,
            text: 'SQS',
            correct: false
          }
        ]
      },
      {
        id: 4,
        question:
          'Which of the following security issues is something that WAF could NOT block?',
        options: [
          {
            id: 1,
            text: 'Blocking specific countries from accessing your application.',
            correct: false
          },
          {
            id: 2,
            text: 'A SQL injection attack.',
            correct: false
          },
          {
            id: 3,
            text: 'Stopping users from torrenting movies.',
            correct: true
          },
          {
            id: 4,
            text: 'A cross-site scripting attack.',
            correct: false
          }
        ]
      },
      {
        id: 5,
        question:
          'True or False? For customers on Business or Enterprise support plans, AWS Shield Advanced provides access to a 24/7 support team to help with DDoS issues.',
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
    id: 'p-automate',
    result: [
      {
        id: 1,
        question:
          'What are common use cases for the AWS Systems Manager Parameter Store "SecureString" parameter?',
        options: [
          {
            id: 1,
            text: 'For managing the patch level on your Windows servers.',
            correct: false
          },
          {
            id: 2,
            text: 'For connecting to your EC2 instances.',
            correct: false
          },
          {
            id: 3,
            text: 'For managing the string variable in a secure fashion.',
            correct: false
          },
          {
            id: 4,
            text: 'For using data/parameters across AWS services without exposing the values as plaintext in commands, functions, agent logs, or CloudTrail logs.',
            correct: true
          }
        ]
      },
      {
        id: 2,
        question:
          'What part of a CloudFormation template allows you to pass values into the template?',
        options: [
          {
            id: 1,
            text: 'Resources',
            correct: false
          },
          {
            id: 2,
            text: 'Settings',
            correct: false
          },
          {
            id: 3,
            text: 'Parameters',
            correct: true
          },
          {
            id: 4,
            text: 'Conditions',
            correct: false
          }
        ]
      },
      {
        id: 3,
        question:
          'Whenever possible, we should focus on __ processes over doing things ____.',
        options: [
          {
            id: 1,
            text: 'Manually, automating',
            correct: false
          },
          {
            id: 2,
            text: 'Reviewing, at scale',
            correct: false
          },
          {
            id: 3,
            text: 'Automating, manually',
            correct: true
          },
          {
            id: 4,
            text: 'On premises installs, in the cloud',
            correct: false
          }
        ]
      },
      {
        id: 4,
        question:
          'What best describes "immutable pattern" for application code deployments?',
        options: [
          {
            id: 1,
            text: "Deployment of application code can't modify existing cloud resources, requiring creation of new resources.",
            correct: true
          },
          {
            id: 2,
            text: 'Deployment of application code requires your cloud architecture to be in read-only mode.',
            correct: false
          },
          {
            id: 3,
            text: "Deployment of application code can't proceed because AWS has locked your account.",
            correct: false
          },
          {
            id: 4,
            text: "Deployment of application code can't destroy cloud resources.",
            correct: false
          }
        ]
      },
      {
        id: 5,
        question:
          'Which of the following is NOT a benefit of deploying an application using Elastic Beanstalk?',
        options: [
          {
            id: 1,
            text: 'It will deploy and update your applications for you.',
            correct: true
          },
          {
            id: 2,
            text: 'It will automatically replace instances that fail.',
            correct: false
          },
          {
            id: 3,
            text: 'You maintain full control over all of your architecture.',
            correct: false
          },
          {
            id: 4,
            text: 'Elastic Beanstalk will rewrite your applications from any language into Python.',
            correct: true
          }
        ]
      }
    ]
  },
  {
    id: 'q-caching',
    result: [
      {
        id: 1,
        question: 'DAX is designed to sit in front of what AWS data service?',
        options: [
          {
            id: 1,
            text: 'DynamoDB',
            correct: true
          },
          {
            id: 2,
            text: 'RDS',
            correct: false
          },
          {
            id: 3,
            text: 'S3',
            correct: false
          },
          {
            id: 4,
            text: 'Redshift',
            correct: false
          }
        ]
      },
      {
        id: 2,
        question:
          'What type of physical AWS architecture does CloudFront use to improve performance?',
        options: [
          {
            id: 1,
            text: 'Regions',
            correct: false
          },
          {
            id: 2,
            text: 'Availability Zones',
            correct: false
          },
          {
            id: 3,
            text: 'Edge Locations',
            correct: true
          },
          {
            id: 4,
            text: 'Local Regions',
            correct: false
          }
        ]
      },
      {
        id: 3,
        question: 'What 2 types of caches are supported by ElastiCache?',
        options: [
          {
            id: 1,
            text: 'Couchbase and SafePeak',
            correct: false
          },
          {
            id: 2,
            text: 'DBCache and MeMStore',
            correct: false
          },
          {
            id: 3,
            text: 'NCache and DAX',
            correct: false
          },
          {
            id: 4,
            text: 'Redis and Memcached',
            correct: true
          }
        ]
      },
      {
        id: 4,
        question: 'How do caches help improve performance?',
        options: [
          {
            id: 1,
            text: 'They help your EC2 instance count scale to accommodate heavier workloads.',
            correct: false
          },
          {
            id: 2,
            text: 'Caching allows you to efficiently reuse previously retrieved or computed data.',
            correct: true
          },
          {
            id: 3,
            text: "They take dynamic content and hold onto it until it's no longer relevant.",
            correct: false
          },
          {
            id: 4,
            text: "They don't. It's best to ignore caches when designing your application.",
            correct: false
          }
        ]
      },
      {
        id: 5,
        question:
          'True or False? Global Accelerator is the only AWS service that allows you to create weights for your application endpoints.',
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
      }
    ]
  },
  {
    id: 'r-governance',
    result: [
      {
        id: 1,
        question: 'Which tool allows you to visualize your AWS spend?',
        options: [
          {
            id: 1,
            text: 'Cost Explorer',
            correct: true
          },
          {
            id: 2,
            text: 'Lambda',
            correct: false
          },
          {
            id: 3,
            text: 'Budgets',
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
        question: 'How can you consolidate the AWS bill for your organization?',
        options: [
          {
            id: 1,
            text: 'Enable consolidated billing.',
            correct: true
          },
          {
            id: 2,
            text: 'AD Connector',
            correct: false
          },
          {
            id: 3,
            text: 'Simple AD',
            correct: false
          },
          {
            id: 4,
            text: 'Contact AWS support.',
            correct: false
          }
        ]
      },
      {
        id: 3,
        question: 'Where should AWS SSO NOT be used?',
        options: [
          {
            id: 1,
            text: 'For handling AWS Console logins.',
            correct: false
          },
          {
            id: 2,
            text: 'For internal users authenticating to an internal application.',
            correct: false
          },
          {
            id: 3,
            text: 'For internal users signing in to a 3rd party application that supports SAML.',
            correct: false
          },
          {
            id: 4,
            text: 'For external users authenticating to a mobile application.',
            correct: true
          }
        ]
      },
      {
        id: 4,
        question:
          'How can you alert your dev team when they are approaching their monthly budget?',
        options: [
          {
            id: 1,
            text: 'S3 Spending Alarm',
            correct: false
          },
          {
            id: 2,
            text: 'AWS Organizations',
            correct: false
          },
          {
            id: 3,
            text: 'CloudWatch Logs Event Patterns',
            correct: false
          },
          {
            id: 4,
            text: 'Create a budget using AWS Budgets.',
            correct: true
          }
        ]
      },
      {
        id: 5,
        question:
          'How can you stop a root user from terminating EC2 instances?',
        options: [
          {
            id: 1,
            text: 'Delete the root account.',
            correct: false
          },
          {
            id: 2,
            text: 'The root account cannot be restricted.',
            correct: false
          },
          {
            id: 3,
            text: 'Remove the policy document that is attached to the root account.',
            correct: false
          },
          {
            id: 4,
            text: 'Apply a service control policy (SCP) to the account to deny this action.',
            correct: true
          }
        ]
      }
    ]
  },
  {
    id: 's-migration',
    result: [
      {
        id: 1,
        question:
          'What would be the best way to migrate 100 PB of data into AWS?',
        options: [
          {
            id: 1,
            text: 'Snowball',
            correct: false
          },
          {
            id: 2,
            text: 'Snowcone',
            correct: false
          },
          {
            id: 3,
            text: 'Snowmobile',
            correct: true
          },
          {
            id: 4,
            text: 'Direct Connect',
            correct: false
          }
        ]
      },
      {
        id: 2,
        question:
          'Which tool would you use to migrate a database from on-premises to RDS?',
        options: [
          {
            id: 1,
            text: 'Server Migration Service',
            correct: false
          },
          {
            id: 2,
            text: 'DataSync',
            correct: false
          },
          {
            id: 3,
            text: 'Snowball',
            correct: false
          },
          {
            id: 4,
            text: 'Database Migration Service',
            correct: true
          }
        ]
      },
      {
        id: 3,
        question:
          'Which tool would you use to organize and track your cloud migration?',
        options: [
          {
            id: 1,
            text: 'Server Migration Service',
            correct: false
          },
          {
            id: 2,
            text: 'Trusted Advisor',
            correct: false
          },
          {
            id: 3,
            text: 'Migration Hub',
            correct: true
          },
          {
            id: 4,
            text: 'Cost Explorer',
            correct: false
          }
        ]
      },
      {
        id: 4,
        question:
          'What tool would you use to convert an Oracle database to a format compatible with Amazon Aurora for a database migration?',
        options: [
          {
            id: 1,
            text: 'DataSync',
            correct: false
          },
          {
            id: 2,
            text: 'Migration Hub',
            correct: false
          },
          {
            id: 3,
            text: 'Volume Gateway',
            correct: false
          },
          {
            id: 4,
            text: 'Schema Conversion Tool',
            correct: true
          }
        ]
      },
      {
        id: 5,
        question:
          'What would be the best way to migrate 80 TB of data into S3 if you have limited bandwidth at your data center?',
        options: [
          {
            id: 1,
            text: 'S3 Transfer Acceleration',
            correct: false
          },
          {
            id: 2,
            text: 'Over the internet',
            correct: false
          },
          {
            id: 3,
            text: 'Direct Connect',
            correct: false
          },
          {
            id: 4,
            text: 'Snowball',
            correct: true
          }
        ]
      }
    ]
  },
  {
    id: 't-exam',
    result: [
      {
        id: 1,
        question:
          'What would be the best way to migrate 100 PB of data into AWS?',
        options: [
          {
            id: 1,
            text: 'Snowball',
            correct: false
          },
          {
            id: 2,
            text: 'Snowcone',
            correct: false
          },
          {
            id: 3,
            text: 'Snowmobile',
            correct: true
          },
          {
            id: 4,
            text: 'Direct Connect',
            correct: false
          }
        ]
      },
      {
        id: 2,
        question:
          'Which tool would you use to migrate a database from on-premises to RDS?',
        options: [
          {
            id: 1,
            text: 'Server Migration Service',
            correct: false
          },
          {
            id: 2,
            text: 'DataSync',
            correct: false
          },
          {
            id: 3,
            text: 'Snowball',
            correct: false
          },
          {
            id: 4,
            text: 'Database Migration Service',
            correct: true
          }
        ]
      },
      {
        id: 3,
        question:
          'Which tool would you use to organize and track your cloud migration?',
        options: [
          {
            id: 1,
            text: 'Server Migration Service',
            correct: false
          },
          {
            id: 2,
            text: 'Trusted Advisor',
            correct: false
          },
          {
            id: 3,
            text: 'Migration Hub',
            correct: true
          },
          {
            id: 4,
            text: 'Cost Explorer',
            correct: false
          }
        ]
      },
      {
        id: 4,
        question:
          'What tool would you use to convert an Oracle database to a format compatible with Amazon Aurora for a database migration?',
        options: [
          {
            id: 1,
            text: 'DataSync',
            correct: false
          },
          {
            id: 2,
            text: 'Migration Hub',
            correct: false
          },
          {
            id: 3,
            text: 'Volume Gateway',
            correct: false
          },
          {
            id: 4,
            text: 'Schema Conversion Tool',
            correct: true
          }
        ]
      },
      {
        id: 5,
        question:
          'What would be the best way to migrate 80 TB of data into S3 if you have limited bandwidth at your data center?',
        options: [
          {
            id: 1,
            text: 'S3 Transfer Acceleration',
            correct: false
          },
          {
            id: 2,
            text: 'Over the internet',
            correct: false
          },
          {
            id: 3,
            text: 'Direct Connect',
            correct: false
          },
          {
            id: 4,
            text: 'Snowball',
            correct: true
          }
        ]
      }
    ]
  }
];
