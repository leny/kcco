# Keep calm and carry on

> A (very) small javascript util library

* * *

> ⚠️ **NOTE:** this is completely _outdated_.

* * *

*Keep calm and carry on* provides shortcuts methods for javascript.

## $(), a simple querySelector

`$( sSelector [, $Context] )` => Array of DOMElements, or empty Array

**$()** returns the elements matched by the selector, in the given context or in *document*.

* * *

## $.ajax( settings ) or $.xhr( settings ) => XHRObject

**$.ajax()** performs a simple xhr request.

**settings** is an JS Object with the following properties :
* url: *string*, url to call
* method: *string*, HTTP method of the request
* data: *object*, object to transmit with the request
* headers: *object*, hash of HTTP headers
* type: *string*, expected type for the response
* callback: *function*, function called when Request is done, first parameter is response, second is XHR object
