# xdt-transform [![NPM version](https://badge.fury.io/js/xdt-transform.png)](http://badge.fury.io/js/xdt-transform)
Node.js module to transform XML files using XDT

Install this node module using npm install xdt-transform --save-dev

```javascript
var T = require('xdt-transform');
var transformer = new T();
transformer.transform('[path-to-somewhere]\Web.config', 
    '[path-to-somewhere]\Web.Transform.config', 
    '[path-to-somewhere]\Web.config');
```


## Options

*  quiet: set to `true` to hide the command line.
