import { NodeConnectionTypes, type INodeType, type INodeTypeDescription } from 'n8n-workflow';


export class AzureAlertsmanagementSmartdetectoralertrulesapi implements INodeType {
        description: INodeTypeDescription = {
                displayName: 'Azure Alertsmanagement Smartdetectoralertrulesapi',
                name: 'N8nDevAzureAlertsmanagementSmartdetectoralertrulesapi',
                icon: { light: 'file:./azure-alertsmanagement-smartdetectoralertrulesapi.png', dark: 'file:./azure-alertsmanagement-smartdetectoralertrulesapi.dark.png' },
                group: ['input'],
                version: 1,
                subtitle: '={{\$parameter["operation"] + ": " + \$parameter["resource"]}}',
                description: 'Azure Smart Detector Alert Rules CRUD API',
                defaults: { name: 'Azure Alertsmanagement Smartdetectoralertrulesapi' },
                usableAsTool: true,
                inputs: [NodeConnectionTypes.Main],
                outputs: [NodeConnectionTypes.Main],
                credentials: [
                        {
                                name: 'N8nDevAzureAlertsmanagementSmartdetectoralertrulesapiApi',
                                required: true,
                        },
                ],
                requestDefaults: {
                        baseURL: '={{\$credentials.url}}',
                        headers: {
                                Accept: 'application/json',
                                'Content-Type': 'application/json',
                        },
                },
                properties: [
		{
			"displayName": "Resource",
			"name": "resource",
			"type": "options",
			"noDataExpression": true,
			"options": [],
			"default": ""
		},
		
                ],
        };
}
