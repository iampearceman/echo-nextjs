import { Echo } from '@novu/echo';
import { renderReactEmail } from '../template-workflow/react-email';

export function setup_template_workflow(echo: Echo) {
    echo.workflow(
        "template-workflow",
        async ({ step }) => {
            await step.email('send-email', async (inputs) => {
                return {
                    subject: "This is an email subject",
                    body: renderReactEmail(inputs)
                };
            }, {
                inputSchema: {
                    type: "object",
                    properties: {
                        showJoinButton: { type: "boolean", default: true },
                        username: { type: "string", default: "alanturing" },
                        userImage: {
                            type: "string",
                            default:
                                "https://react-email-demo-bdj5iju9r-resend.vercel.app/static/vercel-user.png",
                            format: "uri",
                        },
                        invitedByUsername: { type: "string", default: "Alan" },
                        invitedByEmail: {
                            type: "string",
                            default: "alan.turing@example.com",
                            format: "email",
                        },
                        teamName: { type: "string", default: "Team Awesome" },
                        teamImage: {
                            type: "string",
                            default:
                                "https://react-email-demo-bdj5iju9r-resend.vercel.app/static/vercel-team.png",
                            format: "uri",
                        },
                        inviteLink: {
                            type: "string",
                            default: "https://vercel.com/teams/invite/foo",
                            format: "uri",
                        },
                        inviteFromIp: { type: "string", default: "204.13.186.218" },
                        inviteFromLocation: {
                            type: "string",
                            default: "São Paulo, Brazil",
                        },
                    },
                },
            });

            await step.push(
                "push-step",
                async (inputs) => {
                    return {
                        body: "its a body " + inputs.name,
                        subject: "Test Subject ",
                    };
                },
                {
                    inputSchema: {
                        type: "object",
                        required: ["name"],
                        properties: {
                            name: { type: "string" },
                        },
                    },
                },
            );

            await step.sms(
                "sms-step",
                async (inputs) => {
                    return {
                        body: "its a body " + inputs.name,
                    };
                },
                {
                    inputSchema: {
                        type: "object",
                        required: ["name"],
                        properties: {
                            name: { type: "string" },
                        },
                    },
                },
            );

            await step.inApp(
                "inapp-step",
                async (inputs) => {
                    return {
                        body: "ayy" + inputs.name,
                    };
                },
                {
                    inputSchema: {
                        type: "object",
                        required: ["name"],
                        properties: {
                            name: { type: "string" },
                        },
                    },
                },
            );

            await step.chat(
                "chat-step",
                async (inputs) => {
                    return {
                        body: "its a body " + inputs.name,
                    };
                },
                {
                    inputSchema: {
                        type: "object",
                        required: ["name"],
                        properties: {
                            name: { type: "string" },
                        },
                    },
                },
            );
        },
        {
            payloadSchema: {
                type: "object",
                properties: { post_id: { type: "string", default: "1234" } },
            },
        },
    );
}