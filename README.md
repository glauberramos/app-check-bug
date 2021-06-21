Code to reproduce appcheck bug.

Versions used:
Firebase tools: 9.13.1 all the other versions are writen inside package.json and functions/package.json

In order to test it properly you need to:

1 - Change the configuration inside index.html (you need to add firebase config info and recaptcha token)

2 - Deploy to firebase hosting and deploy functions

3 - Create a model inside the realtime database with key "test" and value "Lorem ipsum"

4 - Add firebase hosting URL inside recaptcha admin page

5 - Enforce appcheck inside firebase console

After opening the page you should see a message inside functions logs:

```
[2021-06-21T20:33:04.911Z]  @firebase/database: FIREBASE WARNING: Invalid appcheck token (https://app-check-test-91a3b-default-rtdb.firebaseio.com/)
```
