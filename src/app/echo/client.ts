import { Echo } from '@novu/echo';
import { setup_template_workflow } from './workflows/template-workflow/template_workflow';
import { setup_welcome_email_with_react_workflow } from './workflows/welcome-email-with-react/welcome_email_with_react_workflow';

export const echo = new Echo({
    // To sync your work into production invierment you will requered to set an API key
    // Find your API-Key here: https://web.novu.co/settings
    apiKey: '<YOUR_NOVU_API_KEY>',

    // Enable this flag only during local development
    devModeBypassAuthentication: process.env.NODE_ENV === 'development'
});


// Gather workflow functions
const workflowFiles = [
    setup_welcome_email_with_react_workflow, 
    setup_template_workflow,
    // Add other workflow functions as needed
];

// Call each workflow function with the Echo instance
workflowFiles.forEach(workflow => {
    workflow(echo);
});