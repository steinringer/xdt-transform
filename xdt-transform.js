'use strict';

var path = require('path'),
    exec = require('child_process').exec;
var cttExe = 'bin/ctt.exe';

var XdtTransform = function () { };

XdtTransform.prototype.transform = function (source, transform, destination) {
    /// <summary>
    /// Transforms XML using XDT transformation (ctt.exe is used)
    /// </summary>
    /// <param name="source">path to source XML file</param>
    /// <param name="transform">path to transformation XML file</param>
    /// <param name="destination">path where output file should be written (can be the same as source)</param>
    /// <example> transform('[path-to-somewhere]\Web.config', '[path-to-somewhere]\Web.Transform.config', '[path-to-somewhere]\Web.config');</example>
    
    var cttPath = path.join(__dirname, cttExe);
    cttPath = '"' + cttPath + '"';
    
    var s = '"s:##"'.replace("##", source);
    var t = '"t:##"'.replace("##", transform);
    var d = '"d:##"'.replace("##", destination);
    var args = [cttPath, s, t, d, "pw"];
    console.log(args.join(" "));
    
    exec(args.join(" "), function (error, stdout, stderr) {
        if (error) console.log(error);
    });
}


module.exports = XdtTransform;