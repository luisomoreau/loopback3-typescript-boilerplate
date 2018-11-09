# Loopack Typescript Boilerplate

Loopback Typescript Boilerplate

## Get started

Install Loopback

```
npm install -g loopback-cli
```

Install dependencies


```
npm install
```

Start the project


```
npm start
```

Generate a model


```
lb model <ModelName>
```

Follow the instructions:

```
? Enter the model name: (ModelName) MyModel
? Select the datasource to attach MyModel to: (Use arrow keys)
❯ db (memory) 
  mongo (mongodb) 
  (no datasource) 
? Select model's base class (Use arrow keys)
  Model 
❯ PersistedModel 
  ACL 
  AccessToken 
  Application 
  Change 
  Checkpoint 
(Move up and down to reveal more choices)
? Expose MyModel via the REST API? (Y/n) Y
? Custom plural form (used to build REST URL): MyModels
? Common model or server only? (Use arrow keys)
❯ common 
  server 

Enter an empty property name when done.
? Property name: Name
```

Then, change manually the extension .js to .ts in common/models my-model.js and copy paste the code in example.ts (don't forget to remplace Example by your model name in lines 25 and 71).
