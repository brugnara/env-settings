Environment settings
====================

Get env based settings for your application

# settings.json

Create a folder named **config** and put inside a **settings.json** like this:

```js
{
  "default": {
    "log": {
      "level": "info",
      "test": "hola hola pepsi cola"
    },
    "redis": {
    }
  },
  "development": {
    "log": {
      "level": "verbose"
    }
  }
}
```

# Usage

It is simple as a

```js
// for env = development
var settings = require('env-settings');

console.log(settings.log.level);
console.log(settings.log.test);

console.log(settings.env, settings.ENV, settings.environment);
```

that echoes

```
verbose
hola hola pepsi cola
development development development
```

Enjoy
