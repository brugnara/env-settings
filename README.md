Environment settings
====================

Get env based settings for your application

# settings.json

Create a folder named **config** and put inside a **settings.json** like this:

```
{
  "default": {
    "log": {
      "level": "info"
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

It simple as a

```
var settings = require('env-settings');
console.log(settings.log.level);
```
