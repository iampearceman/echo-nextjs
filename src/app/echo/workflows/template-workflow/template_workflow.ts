import { Echo } from '@novu/echo';
import { renderReactEmail } from '../template-workflow/react-email';

export function setup_template_workflow(echo: Echo) {
    echo.workflow(
        "template-workflow",
        async ({ step, payload }) => {
            const email = await step.email(
                "email-step",
                async (inputs: { name: string; }) => {
                    return {
                        body: "its a body " + inputs.name + " Payload: " + payload.post_id,
                        subject: "Test Subject ",
                    };
                },
                {
                    inputs: {
                        type: "object",
                        properties: {
                            name: { type: "string" },
                        },
                    },
                },
            );

            await step.push(
                "push-step",
                async (inputs: { name: string; }) => {
                    return {
                        body: "its a body " + inputs.name,
                        subject: "Test Subject ",
                    };
                },
                {
                    inputs: {
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
                async (inputs: { name: string; }) => {
                    return {
                        body: "its a body " + inputs.name,
                    };
                },
                {
                    inputs: {
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
                async (inputs: { name: string; }) => {
                    return {
                        body: "ayy" + inputs.name,
                    };
                },
                {
                    inputs: {
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
                async (inputs: { name: string; }) => {
                    return {
                        body: "its a body " + inputs.name,
                    };
                },
                {
                    inputs: {
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
