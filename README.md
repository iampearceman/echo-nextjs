<div align="center">

![Echo](https://github.com/iampearceman/echo-nextjs/assets/63902456/48a44047-b732-4f86-a0aa-31a19d9b0215)

Powered by Novu

**Echo is currently in Private Alpha mode, and API’s and interfaces are subject to change.**

</div>

### Table of Contents

- [What is Echo?](#what-is-echo)
- [Core Features](#core-features)
- [How it Works](#how-it-works)
- [Getting Started](#getting-started)
- [Usage](#usage)
- [Sync your local workflows with your Novu Account](#sync-your-local-workflows-with-your-novu-account)
- [Contributing](#contributing)
- [Support](#support)

### What is Echo?

Novu Echo is a notification workflow API-based builder for developers by Novu.
Rather than being limited to Novu’s predefined connectors, Echo allows you to utilize your existing environment, including libraries and VPC connections during workflow execution.

The Echo SDK exposes an API client, allowing you to serve workflows and steps via HTTP. 
Novu Cloud communicates with your edge server via HTTP requests, facilitating real-time resolution of content and subscribers.

### Core Features:

- **Content Management:**

Create and manage content using any framework like: 
React Email, MJML, or a third party CMS (Wordpress, Hubspot, etc…).

- **GitOps for Notifications:**

Define your Notification Workflows in code, and manage them using GitOps. 
This enables you to version control your Notification Workflows, and collaborate with your team.

- **Durable step execution:**

Workflow state and execution are managed by the Novu Platform, Echo restores and hydrates the Workflow state each time your Echo Client is invoked by Novu. 
Echo handles the hard problems in Notifications for you.

- **Idiomatic:** 

Echo is designed with idiomatic programming practices in mind, making integration with your existing languages a seamless experience.

- **Type-safe & Schematised validation:**

Bring your own schemas for full, end-to-end validation and type safety between your application and Novu.
JSON Schema provides the interoperability layer between developers and component consumers, creating a contract for content management.

- **Framework agnostic:**

The Echo API client is designed to run with your favourite Web framework. 
We currently support NextJS and Express, with more coming soon.

- **"Bring Your Own Code":**

Echo integrates with your existing codebase. Natively connect your database, APIs, and more directly into your Echo workflows. The possibilities are limitless.

### How it Works:

The diagram below illustrates the Novu Cloud in grey, with your Customer environment in white.

The Echo SDK exposes an API client, enabling you to serve your Workflow and their Steps via HTTP.

The API can be served using your favorite frameworks, we offer pre-built connectors to make deployment easy.

Novu Cloud will make HTTP requests to your Edge Server during Workflow Execution, enabling you to resolve Content and Subscribers when needed.

<Image>

### Getting Started:

1. Clone this repository

```bash
git clone https://github.com/iampearceman/echo-nextjs.git
```

2. Install dependencies

```bash
npm install
```

3. Start the Echo Dev Studio locally

```bash
npx novu-labs@latest echo
```

    Novu Dev Studio is a companion app for Novu Echo. It allows you to develop your workflows locally, right in your IDE and preview the channel-specific content in real-time.


4. Follow the onboarding instruction


### Usage

- Modify or add new workflows based on the `template_workflow.ts` file.

- Make sure all your workflows are called with the Echo instance which you can find in the `client.ts` file.

### Sync your local workflows with your Novu Account

1. Click on "Sync Cloud" at the top right of your local Novu Dev Studio.

2. Login to Novu or Create a new account

3. Copy and add your Novu API key to the Echo instance within the `client.ts` file.

```javascript
// echo-testing/echo-nextjs/src/app/echo/client.ts

export const echo = new Echo({
    apiKey: '<YOUR_NOVU_API_KEY>',
    devModeBypassAuthentication: process.env.NODE_ENV === 'development'
});
```

4. Create a local tunnel that the Novu Cloud environment can reach. (Should be the local port of this app)

```bash
npx localtunnel --port 3000
```

5. Paste the provided localtunnel port as an Echo API Endpoint.

    example:
```bash
https://tidy-teeth-judge.loca.lt/api/echo = https://localhost:3000/api/echo
```

6. Review the changes

<image>

7. Click on "Deploy Changes"

Now your locally developed workflows should appear in the workflows tab in Novu Cloud.

### Contributing:

We welcome contributions! Feel free to fork this repository, make your changes, and submit a pull request.

### Support:

If you encounter any issues or have questions, please open an issue on this repository, or [join our Discord server](https://discord.gg/novu).

Feel free to visit the Echo's official [documentation](https://docs.novu.co/echo/introduction).
