Environment settings
====================

Get env based settings for your application

# settings.json

Create a folder named **config** and put inside a **settings.json** like this:

```
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

```
// for env = development
var settings = require('env-settings');

console.log(settings.log.level);
console.log(settings.log.test);
```

that echoes

```
verbose
hola hola pepsi cola
```
