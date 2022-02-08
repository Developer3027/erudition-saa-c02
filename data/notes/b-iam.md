---
title: 'IAM'
excerpt: 'Security through Users, Group, Roles'
link: 'https://acloudguru.com/course/aws-certified-solutions-architect-associate-saa-c02'
---

# IAM

The identity Access Management console is global scoped, not restricted by regions.

### Root User

The root user is the main user that is attached to a email address. It is important to secure this account as the root user has full admin right.

- 4 steps to secure root user.
  - To secure the account, turn on MFA authentication. The root should not be used for everyday use.
  - Create a admin group and assign the permissions.
  - Create new user accounts for the admins. You would be one of those. Use that user instead of root.
  - Add the users to the admin group.

**New Users**
When creating a new user, they will have no permissions by default. In general, by default permissions are denied.

**Policy Docs**
You can choose a policy already created for you by AWS, or you can create your own. A policy is a JSON (Javascript Object Notation) object.

- Used to deal with permissions.
- Assign to Users, Groups, and Roles.
- Best practice is to assign to Group, then assign User to Group. User will take the Groups permissions.

_example, Admin Policy:_

```
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Action": "*",
      "Resource": "*"
    }
  ]
}
```

**Role**
Similar to a user, is an AWS identity with permission policy that determine access level to services, that is assumable by anyone or any service that needs it, not uniquely associated to one person. Temporary security credentials for session, not long term, "password and key" access.

- Roles can allow cross-account access. One AWS can interact with resources in other AWS account.
- Preferred option from security perspective.
- No need for access IDs, no hard coding
- Update a role policy has immediate effect
- Attach and Detach on running EC2, no need to stop or terminate

**Access Key & Secret Key**
These are not the same as user name and passwords. They are used only to programmatically access services. Like from a cli.

- you can only view these once at time of creation. So save them in a secure location.

**Password Rotation Policy**
You can and should change the password policy. You can add features like force users to change them every 60, 90 days or remember the last 5 passwords to keep passwords fresh.

**IAM Federation**
Allows one to combine a existing account, say like your work account through microsoft active directory, to your aws account and log in with those cred's.

**Identity Federation**
Uses SAML standard (active directory) to set up IAM Federation access.
