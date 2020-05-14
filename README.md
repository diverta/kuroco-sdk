# KurocoSDK

> NodeJS library that generates Typescript or Javascript clients based on the OpenAPI specification.

### :hart: Acknowledge

This repo is really influented by [openapi-typescript-codegen](https://github.com/ferdikoomen/openapi-typescript-codegen) really thanks to the author [Ferdi Koomen](https://github.com/ferdikoomen).

---

## Installation

-   install into global as a executable bin:  
    `npm i -g @kuroco/cli && kuroco -v`

-   or install into your local project:  
    `npm install -D @kuroco/cli --registry http://35.190.232.54/ && npx kuroco -v`

### Pre-requisities

**requires Node 12.13.1 or higher**  
To install Node, please follow below site.  
http://nodejs.org/

### Configurations

Before first execution, please make `kuroco.config.json` file onto your project's root.  
Or execute `kuroco init` to generate it step by step.

```
{
    "sdk_key": "c9cdfd46b60bb0a34ba5c2c153ffad3f",  // an authorization token to make Kuroco to allow using SDK.
    "api_url": "https://kuroco-dev.r-cms.jp/"       // your API host URL.
}
```

#### :question: Where the SDK key is exposed?

The `sdk_key` is exposed at management screen.  
![tokenExposed](dev_doc/tokenExposed.png)

---

## An example to run this app in ease

```
kuroco init && \
kuroco pull && \
kuroco generate
```

---

## Features

### Initialization

`kuroco init` can help to make configurations.

### Pull definition from Kuroco

`kuroco pull` can pull (download & write) the latest openapi definition from Kuroco.

### Generates TS/JS sourcecodes

`kuroco generate` can provides TypeScript/JavaScript sourcecodes refered to the openapi definition in Kuroco also you can use your any apps.

```
kuroco generate
```

#### Authentication handler

If you need to handle about Authentication configured in Kuroco in advance,  
please consider to use `Auth` module instead of using APIs directry.  
This module can handle any of the cases what authentication pattern is applied.  
for instance, if you have 2 kuroco APIs each have different authentication process (no-auth and token),  
you can use `Auth` module in common despite of those both cases.

```typescript
import { Auth } from './generated/core/Auth';
Auth.login({ requestBody: { email: 'test@example.com', password: 'PASSWORD' } })
    .then(...)
```

`Auth.login()` in above executes login -> token in order if the system is applied to use Tokens,  
on the other hand executes only login if not.

#### Generates API informations

We provides a way to generate details of each endpoints for investigating all endpoints like e2e testing.  
This may helps to get any infoemations cross-functionally.

```typescript
const AuthenticationalGetResponseExamples = [];
ApiInfos.filter(info => info.className === 'AuthenticationService')
    .filter(info => info.httpMethod === 'get')
    .forEach(async info => {
        const res = await info.method({ requestBody: {} } as any);
        AuthenticationalGetResponseExamples.push(res);
    });
```
