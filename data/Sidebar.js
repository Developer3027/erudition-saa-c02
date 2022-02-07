import {
  HiOutlineInformationCircle,
  HiChevronDown,
  HiChevronUp,
  HiOutlineDotsVertical,
  HiOutlineMail,
  HiOutlineThumbUp,
  HiOutlineLibrary,
  HiOutlineTicket
} from 'react-icons/hi';

export const SidebarData = [
  {
    title: 'About',
    path: '/about',
    icon: <HiOutlineInformationCircle />,
    iconClose: <HiChevronDown />,
    iconOpen: <HiChevronUp />,

    subNav: [
      {
        title: 'The Goal',
        path: '/about/goal',
        icon: <HiOutlineDotsVertical />
      },
      {
        title: 'Reference',
        path: '/about/ref',
        icon: <HiOutlineDotsVertical />
      }
    ]
  },
  {
    title: 'Donate',
    path: '/donate',
    icon: <HiOutlineThumbUp />
  },
  {
    title: 'Contact',
    path: '/contact',
    icon: <HiOutlineMail />
  },
  {
    title: 'Prep',
    path: '/saa-prep',
    icon: <HiOutlineLibrary />,
    iconClose: <HiChevronDown />,
    iconOpen: <HiChevronUp />,

    subNav: [
      {
        title: 'Fundamentals',
        path: '/saa-prep/a-fundamentals',
        icon: <HiOutlineDotsVertical />
      },
      {
        title: 'IAM',
        path: '/saa-prep/b-iam',
        icon: <HiOutlineDotsVertical />
      },
      {
        title: 'S3',
        path: '/saa-prep/c-s3',
        icon: <HiOutlineDotsVertical />
      },
      {
        title: 'EC2',
        path: '/saa-prep/d-ec2',
        icon: <HiOutlineDotsVertical />
      },
      {
        title: 'Elastic Storage',
        path: '/saa-prep/e-ebs-efs',
        icon: <HiOutlineDotsVertical />
      },
      {
        title: 'Databases',
        path: '/saa-prep/f-db',
        icon: <HiOutlineDotsVertical />
      },
      {
        title: 'VPC',
        path: '/saa-prep/g-vpc',
        icon: <HiOutlineDotsVertical />
      },
      {
        title: 'Route 53',
        path: '/saa-prep/h-r53',
        icon: <HiOutlineDotsVertical />
      },
      {
        title: 'ELB',
        path: '/saa-prep/i-elb',
        icon: <HiOutlineDotsVertical />
      },
      {
        title: 'Monitoring',
        path: '/saa-prep/j-monitor',
        icon: <HiOutlineDotsVertical />
      },
      {
        title: 'Scaling and Availability',
        path: '/saa-prep/k-sa',
        icon: <HiOutlineDotsVertical />
      },
      {
        title: 'Decoupling',
        path: '/saa-prep/l-decouple',
        icon: <HiOutlineDotsVertical />
      },
      {
        title: 'Big Data',
        path: '/saa-prep/m-big-d',
        icon: <HiOutlineDotsVertical />
      },
      {
        title: 'Serverless',
        path: '/saa-prep/n-serverless',
        icon: <HiOutlineDotsVertical />
      },
      {
        title: 'Security',
        path: '/saa-prep/o-security',
        icon: <HiOutlineDotsVertical />
      },
      {
        title: 'Automation',
        path: '/saa-prep/p-automate',
        icon: <HiOutlineDotsVertical />
      },
      {
        title: 'Caching',
        path: '/saa-prep/q-caching',
        icon: <HiOutlineDotsVertical />
      },
      {
        title: 'Governance',
        path: '/saa-prep/r-governance',
        icon: <HiOutlineDotsVertical />
      },
      {
        title: 'Migration',
        path: '/saa-prep/s-migration',
        icon: <HiOutlineDotsVertical />
      },
      {
        title: 'Exam',
        path: '/saa-prep/exam',
        icon: <HiOutlineDotsVertical />
      }
    ]
  },
  {
    title: 'Practice Questions',
    path: '/exam-prep',
    icon: <HiOutlineTicket />
  }
];
