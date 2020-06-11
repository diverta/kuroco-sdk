# KurocoSDK

> NodeJS library that generates Typescript or Javascript clients based on the OpenAPI specification.

### :heart: Acknowledge

This repo is really influented by [openapi-typescript-codegen](https://github.com/ferdikoomen/openapi-typescript-codegen) thanks to the author [Ferdi Koomen](https://github.com/ferdikoomen) a lot!.

---

## Installation

-   install into global as a executable bin:  
    `npm i -g kuroco-sdk && kuroco -v`

-   or install into your local project:  
    `npm install -D kuroco-sdk && npx kuroco -v`

### Pre-requisities

**requires Node 12.13.1 or higher**  
To install Node, please follow below site.  
http://nodejs.org/

### Configurations

Before first execution, please make `kuroco.config.json` file onto your project's root.  
We reccomend to execute `kuroco init` to define it step by step.

```
{
    "sdk_key": "c9cdfd46b60bb0a34ba5c2c153ffad3f",  // an authorization token to make Kuroco to allow using SDK.
    "api_url": "https://kuroco-dev.r-cms.jp/"       // your API host URL.
    ... // other configurations
}
```

#### :question: Where the SDK key is exposed?

The `sdk_key` is exposed at management screen.  
![token](./.github/docs/assets/token.png)

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

`kuroco init` can help to form configurations.

### Pull definition from Kuroco

`kuroco pull` can pull (download & write) the latest openapi definition from Kuroco.

### Generates TS/JS sourcecodes

`kuroco generate` can provides TypeScript/JavaScript sourcecodes refered to the openapi definition in Kuroco also you can use your any apps.  
you can choose which type you needed with `-l or --language` option (default TypeScript).

```
kuroco generate -l javascript
```

> Please mention if your project is using TypeScript and you generate where outside of src in your project,  
> declare that directory path at typeRoots property in `tsconfig.json`.
> `"typeRoots": ["./generated"],`

### How to use in your code

If you using npm and it's pre-processing, we recommend to utilize them with ESModule import way.  
you can use them that just importing them.  
```typescript
import { Auth, TopicsService } from "kuroco";

/** get Topics datas with login */
async function getTopicsList() {
  await Auth.login({
    requestBody: { email: 'test', password: 'qwer1234' },
  })
  return await TopicsService.getTopicsServiceRcmsApi1Topics1({});
}
```

And as well, there are 2 ways how to install generated codes,  
1. run `kuroco generate --lib -o outputDir` and `install outputDir --save`,  
   import them by `import Kuroco from 'kuroco'` in your code.
2. run `kuroco generate -o in/your/src/outputDir`  
   and just import them by `import Kuroco from 'in/your/src/outputDir'` in your code.
The former is specifying to export it's own `package.json` into the output dir,  
therefore you can apply local exported codes with npm installing.  
The latter is just exporting sourcecodes as commonjs modules.

Or, if your codes are **NOT** based on NPM and using it's pre-processors (for example using jQuery on CDN and plain JavaScripts),  
we also prepare an option that have generated codes be executable on browser,  
it is bundled as `index.js`.  
The option is `--standalone`, you use `kuroco generate --language javascript --standalone`.  
After that, just load generated codes in the header section of HTML.  
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <script src="kuroco-standalone/index.js"></script>
  </head>

  <body>
        <script>
            const { Auth, TopicsService } = Kuroco;

            async function getTopicsList() {
                await Auth.login({
                    requestBody: { email: 'test', password: 'qwer1234' },
                })
                return await TopicsService.getTopicsServiceRcmsApi1Topics1({});
            }

            getTopicsList()
                .then(console.log);
        </script>
  </body>
</html>
```

Please refere other options with `kuroco -h` or `kuroco generate -h`.  
For getting more examples check out [our concrete code samples](https://github.com/diverta/kuroco_sdk_examples) with Kuroco.

#### Authentication handler

If you require to handle about Authentication which is configured in Kuroco in advance,  
we recommend to utilize `Auth` module instead of using authentication APIs directly.  
This module can manage any of the cases, what authentication pattern is applied.  
for example, if you have 2 kuroco APIs each have different authentication process (no-auth and token),  
you can use `Auth` module in common for both cases.

```typescript
import { Auth } from 'kuroco';
Auth.login({ requestBody: { email: 'test@example.com', password: 'PASSWORD' } })
    .then(...)
```

`Auth.login()` executes login -> token in order if the system is applied to use Tokens,  
on the other hand executes only login if not.

##### Apply a handler at unauthorized error occured

You can apply your own error handler for unauthorizations in advance.  

The Auth module can resolve about auth automatically,  
if the response is error for expired, the process is intercepted to get new token and then retry.   
However, that retrying still throw unauthorized error sometimes,  
You may need your own handler like as to route to login page as routing-guard for this case.

```typescript
import { Auth } from 'kuroco';
/**
 * Auth.onErrorHandler: (result: Result) => Result = result => result
 */
Auth.onErrorHandler = result => {
    this.router.goto('/login');
    return result;
};
```

#### Uploader module

We make an util to upload files as `Uploader`.
Here is a part of example in our component.
```typescript
import { UploaderFactory } from 'kuroco';
...
    onChangeInputFile(e: Event) {
        const newFile = (e.target as any).files[0] as File;
        this.uploader.upload(newFile)
            .then((res) => console.log(res.url))
            .catch(console.error);
    },
    async mountUploader() {
        try {
            this.uploader = await UploaderFactory.create({})
        } catch(e) {
            console.error('could not creat uploader for:', e);
        }
    }
```

Note this Uploader is available but only when users are authenticated (if you have applied token or login at Kuroco),
And this module is using Firebase Storage, so you need to prepare it in advance with your own account before using.

#### Generates API informations

We provide a way to generate details of each endpoints for investigating all endpoints like e2e testing.  
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
