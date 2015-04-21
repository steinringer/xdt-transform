var XdtTransform = require('../xdt-transform.js');

var transformer = new XdtTransform();
transformer.transform('tests/Web.config', 'tests/Web.Transform.config', 'tests/Web.config');