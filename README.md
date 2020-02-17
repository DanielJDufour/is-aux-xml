# is-aux-xml
Identifies Auxiliary XML Files (e.g., .jpg.aux.xml, .png.aux.xml, and .tif.aux.xml)

# usage
## checking contents of a file
```javascript
const isAuxXml= require("is-aux-xml");
const { readFileSync } = require("fs");

const text = readFileSync("example.png.aux.xml", 'utf-8');
const valid = isAuxXml(text);
// true
```

## checking a url
```javascript
const isAuxXml = require("is-aux-xml");

const valid = isAuxXml('https://somefakeurlhere.com/example.png.aux.xml');
// true
```

# description
Identifies aux.xml in the following formats:
 - ArrayBuffer
 - Buffer
 - DataView
 - String
 - Uint8Array

# what is an Auxiliary XML File?
XML Metadata file used by GDAL and ESRI

# support
Post an issue at http://github.com/danieljdufour/is-aux-xml/issues or email the author at daniel.j.dufour@gmail.com
