This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

### thoughts

Erudition is a self paced learning platform. Teaching material is free and public information. Subscription fee for collecting it and organizing it.

* guest can view.
* members can:
  * set preferences
  * notes
  * print
  * tests and quizzes
  * flash cards
  * earn badges
  * certificates for completion
  * progress
  * rate courses

List of courses to have using free content on youtube

* Linux
* git course
* Frontend Developer
  * html, css, javascript course
    * Net Ninja - lite and smart British Mario fanatic
    * Traversy Media - down to earth Bostonian
    * Design Course - straight talk from the UI side
    * Mosh - down to earth, and pretty cool.
    * Dev Ed - nearly 4 hour course from a smart ass Romanian
    * Codevolution - the accent and speaking style are quit unique. In depth and spot on.
  * ReactJs Framework course
  * NextJs Framework course
* Backend Developer
  * node course
  * Express course
  * NestJs Course
  * Prisma
  * TypeORM
* Database
  * MongoDB
  * DynamoDB
  * Sql
* Languages
  * Javascript
  * Python
  * Java
* aws course
  * DynamoDB
  * Amplify
  * IAM
  * S3
  * VPC
  * EC2
* aws saa cert

main page have tiles for different section. Each section choose from content provider. Header will have links to resources.

site will have free courses of the site layout so users can determine if they want in or not. Will have courses and features available if paid. Pay through stripe. Flow is click button for monthly subscription, sent to stripe. In stripe give email and subscription. Once subscribed take email and create user in cognito. Mail user log in info. User can log in to site. On log in set user. Use user status for routes.
