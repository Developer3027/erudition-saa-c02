# AWS Route 53
In this lesson we are going to learn about Route 53. How to create different records and different routes. Route 53 can help you in various different ways when it comes to routing and health checks. All baked right in.

## Requirements
First thing first, lets's go over what you will need to go through this lesson.
* You will need your own AWS account. If you don't have one you can head over to <a href='https://aws.amazon.com/free/' target='_blank'>aws amazon free</a> and get you one. You will need a credit card, for reference.
* You will need to have a domain. We can do this in a few different ways.
  * Best option is to purchase one through AWS Route 53. It is by far the quickest and easiest way.
  * You can purchase one through other DNS services like <a href='https://www.godaddy.com' target='_blank'>go-daddy</a> or <a href='https://www.namecheap.com' target='_blank'>name-cheap</a>.
  * Lastly, you can use a site called <a href='https://freenom.com' target='_blank'>FreeNom</a>
* You will need this bootstrap script to put in the user data section of the EC2 instances you are going to build:
  ```
  #!/bin/bash
  yum update -y
  yum install httpd -y
  service httpd start
  cd /var/www/html
  echo "<html><body><h1>This is server 1 in</h1></body></html>" >
  index.html
  ```

## Environment Setup
First thing we are going to do is purchase the domain then set up two basic servers on opposite ends of the planet. Why? One, because we can! Two, because we will use these two to work through the different ways Route 53 helps with routing. Three, because availability and redundancy is best. Lastly, because we freak'n can!

### Domain
Time to make that choice. For the purposes of this tutorial, I will use FreeNom. It will give us a free domain name with an obscure tld. I would like to take this moment to say that I don't know anything about FreeNom, I am just using the service. I also don't know anything about go-daddy. I have used NameCheap before and find the customer service to be above average.
![FreeNom search](https://dev3027public.s3.amazonaws.com/freenom1.png)

OK, so head over to FreeNom, create an account. What I did was click sign in, click the google button and pick the account I wanted to use. If you are asked to fill out info like address and phone, go ahead and do what you will. I simply clicked the submit button and it gave an error, saying that it needed a street and city. So I thought of such, filled it out, checked the check box and it submit'd. Again, I just want the general free domain.

Once you are logged in, click services and choose register a domain. Type what ever into the input and click the check availability button. This site will check to see if it is available and will offer up tld's of .tk, .ml, .ga and a few others for free. So what ever you checked for, you can choose the free tld. For example, if you searched to see if he-knows-aws then you can get the domain "he-knows-aws.tk" for free. It has been my experience that the site can be a bit funny. If you click on a free one and it says that it is not available, just do a search for that one, including the tld, and it will return it and put it in your cart. Yeah, i agree, not happy about it either, but it is free. If you want straight forward and works the first time, again I suggest just buying it through AWS Route 53.
![FreeNom Domains](https://dev3027public.s3.amazonaws.com/feenom2.png)

Once it is in your cart, just click it to purchase it at $0.00. Once you have got it, you may see a button that directs you somewhere. I would recommend just clicking on services in the navbar and going to My Domains. You should see your newly free domain there. On the Domains screen you will see your domain listed out in a row. Click on the right "Manage Domain" button. With the new screen, click the Management Tools tab and select "Nameservers". Choose the "Use Custom Nameservers" option and a list of nameservers will appear. These will be populated with the servers we get from AWS Route 53. Call this done for now.
![FreeNom Nameservers](https://dev3027public.s3.amazonaws.com/freenom4.png)

### Project Set Up
Now that we have a domain we need to set AWS up to use it. This means we need to create a hosted zone in Route 53 and create some servers with EC2 instances. First let's work on that Hosted Zone.

#### Hosted Zone
Login to your AWS account and head over to Route 53. You can type Route 53 into the search bar or Route 53 is found under Networking and Content Delivery. Once you are in Route 53 we want to manage some DNS. Please note the region in the top right of the navbar. It should say global. The dashboard will look different depending on if you have done anything with Route 53 before. So we are looking for Hosted Zones. Once you are in the Hosted Zones section click the create hosted zone button. Now we can use that Domain we made earlier. 
![AWS Hosted Zone](https://dev3027public.s3.amazonaws.com/hosted-zone.png)

Type or paste the Domain from FreeNom into the Domain name input of the new Hosted Zone. I always like to add a description. Notice the Type section. Here you can choose if you want the zone public, (routed on the internet) or private, (routed within an Amazon VPC). Lastly you can add up to 50 Tags. Tags are very helpful for documentation. I always add the tag name, and give it a name. When ready, click the orange create hosted zone button.

Now you have the various DNS Servers that AWS has just set up for your domain. Locate the Record name with the type of NS for Nameserver. Notice that there are several servers listed. One for .co.uk, .com, .net, and .org. You need to transfer each Nameserver to FreeNom. One for each of the inputs given in the Manage Nameservers, custom Nameserver screen. FreeNom lists 5 inputs but AWS gives 4. That is ok, leave the last one on FreeNom blank. Also, you should note if you are going to copy and paste, the period at the end of the AWS NameServers. You need to remove that period from the FreeNom site. Leaving that period on the end will create a error. Once you are ready, click the green Change Nameservers button. Now your all set up and your domain is taken care of through AWS Route 53!

#### Set Up Servers
Now it is time to set up the servers themselves. We will set up one EC2 instance in Northern Virginia and one in Tokyo.

Head on over to EC2 by searching for it in the search bar or you can find it under compute. On the right navbar you can click on EC2 Dashboard and review any instances you have running. Please take note region in the top right of the navbar. It should say N.Virginia. Let's click on Launch Instance and work through setting up a new EC2 instance in N.Virginia. 

Step 1. Pick a Linux AMI that is free tier eligible.

Step 2. Let's pick a t2.micro instance type, again, free tier eligible.

Step 3. Here in Configure Instance we will add the bootstrap script into the User Data input for this instance, everything else will stay default.

Step 4. Add Storage. Here you can review the different types of hard drives. I will keep the default of the 8 GiB General Purpose SSD (gp2) and click next.

Step 5. Under add Tags I will add a tag of name: test-server-1

Step 6. With Security Group, we will add a new Security Group. We will use this security group to test Route 53 features in later tutorials in this section. Change the security group name. I named mine WebDMZ.
  * Add a http rule. Notice that the port range is 80 and that the source CIDR range supports both IPV4 and IPV6.
  * Add a https rule. Notice that the port range is 443.

Step 7. Click next to review the instance settings we have set up. You will see the warning at the top saying that the security group of public or open. That is ok, it is a web server and we want it open. Click Launch

Step 8. You will be asked to provide key pair info. This key pair is needed if you want to ssh into the EC2 instance. I selected Create a new key pair of type RSA and named it Server1. Clicked Download Key Pair and it downloaded to my downloads folder. This is the last time you will have access to this key pair. Once you click Launch Instance, the process will start and this Key Pair will never be available again. You can not generate a new one later. When you are ready, click Launch Instance.

Now we need to do the exact same for the Tokyo EC2 instance. Go back to your instances dashboard and you can see your EC2 being spun up. Click on the N. Virginia region selector and select the Tokyo region or ap-northeast-1 by right clicking and opening in a new tab. Here you may notice that you don't have any EC2 instances up for Tokyo. Repeat the step we went through to set up server1, the EC2 instance in N.Virginia. It will be server2, a Linux AMI, t2.micro, free tier eligible.

Paste the bootstrap script just like before, in the user data input. This time change the H1 tag to indicate server 2.

Make sure to set a tag to name the instance test-server-2

Set up a new Security group called WebDMZ that has access to http and https just like we did in N. Virginia.

Create a new key pair and download it with the name of server2


