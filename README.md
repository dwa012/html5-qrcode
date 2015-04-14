#HTML5 QR Code Reader


###Description
--------------


This is a cross platform jQuery library to create a QRcode reader for HTML5 compatible browser.

The decoder used for the QRcode reading is from LazarSoft
[https://github.com/LazarSoft/jsqrcode](https://github.com/LazarSoft/jsqrcode)

###Demo
----------------------
See a demo here [http://dwa012.github.io/html5-qrcode/](http://dwa012.github.io/html5-qrcode/)



###Usage
----------------------
Include ```html5_qrcode.min.js``` in the ```lib``` directory.

Create a basic ```<div>``` with a given width and height. 

Presently width and height attributes must be set. 
 
```
 <div id="reader" style="width:300px;height:250px">
 </div>
```

Then call the ```html5_qrcode``` function on the ```div```. 
 
```
 $('#reader').html5_qrcode(function(data){
 		 // do something when code is read
 	},
 	function(error){
		//show read errors 
	}, function(videoError){
		//the video stream could be opened
	}
);
```

It takes three callbacks: a ```readSuccess```, ```readError```, and ```videoLoadError```. The readError wil be called quite often, it is really only useful for debugging. 

```videoError``` is called if the HTML5 video stream cannot be opened.


When you're done using the camera, call `$('#reader').html5_qrcode_stop()` to stop scanning for QR codes, close the stream, and relinquish permissions granted by the user.   
(This will result in the "camera on" light on their device turning off)


###Development
----------------------

To create your own builds, you can use [Grunt](http://gruntjs.com/). 
A gruntfile has been set up to create minified versions of `html5-qrcode.js` and `jsqrcode-combined.js`.
You will need npm (comes with [node](https://nodejs.org/)), and [Grunt](http://gruntjs.com/) installed first.  

Once installed, clone this repo and load the submodules by running: `git submodule init` then `git submodule update`. Then run `npm install` to download the node packages for Grunt.

Now, to build the minified versions just run `grunt` from the project directory in your terminal. If you're doing continuous development, you can run `grunt watch` to continuously watch javascript files in `src\` and automatically build minified versions when they are modified.


###MIT LICENSE
--------------

Copyright &copy; 2013 Daniel Ward

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

