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

