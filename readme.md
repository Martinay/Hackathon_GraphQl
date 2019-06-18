Hackathon topic GraphQL

authors https://github.com/adroi3 and https://github.com/Martinay

Node Server which publishes Build definitions, downloaded from AzureDevOps Server, via an GraphQl api.
React client consumes this interface

Set user environment variables:
- AZURE_NAME=<azure dev ops user name>
- AZURE_TOKEN=<azure dev ops token>
- AZURE_URL=<azure dev ops server url>

start client : npm run start
start server : npm run dev