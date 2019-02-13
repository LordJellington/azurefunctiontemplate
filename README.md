You need .NET Core 2.1 installed

and to run:
npm i -g azure-functions-core-tools@2.0.1-beta.25

I also used this VSCode plugin to get going: 
https://marketplace.visualstudio.com/items?itemName=ms-azuretools.vscode-azurefunctions

When creating an azure function in VS code, I had to run the following command to get debugging working:
npm i -g azure-functions-core-tools@2.0.1-beta.25
This effectively downgraded the azure functions tools to earlier version that doesn't feature a bug.
There was another solution that involved putting the line:
      "options": { "env": { "workers:node:debug": "5858" } },
Just above the "label" attribute of the first task in tasks.json, but that didn't work

You have to run this line:
func extensions install --package Microsoft.Azure.WebJobs.Extensions.CosmosDB --version 3.0.0-beta7
if you don't run that line then the application just fails to connect to the CosmosDB. Not only that but it doesn't tell you that it fails, it just silently doesn't work.

Test on http://localhost:7071/api/VsCodeHttp?id=docs

For connecting to a local cosmosdb emulator: 
http://www.tobiaswright.com/2017/10/19/Getting-Locally-run-Azure-Functions-going-with-Azure-CosmosDB-Emulator/

to run this locally, create a file called local.settings.json at the root (i.e. same level as this README file), and populate as follows (being sure to replace the azure-functions-jellins_DOCUMENTDB bit):

{
  "IsEncrypted": false,
  "Values": {
    "AzureWebJobsStorage": "",
    "azure-functions-jellins_DOCUMENTDB": "AccountEndpoint=..."
  },
  "ConnectionStrings": {},
  "NODE_OPTIONS": "--inspect=5858"
}
