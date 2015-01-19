(function( $ ){
  jQuery.fn.extend({
    html5_qrcode_stop: function() {
      return this.each(function() {
        html5_qrcode_running = false;
      })
    },
    html5_qrcode: function(qrcodeSuccess, qrcodeError, videoError) {
      return this.each(function() {
        var currentElem = $( this );
        html5_qrcode_running = true;

        var height = currentElem.height();
        var width = currentElem.width();
        
        if (height == null) {
          height = 250;
        }
        
        if (width == null) {
          width = 300;
        }
        
        var vidElem = $('<video width="' + width + 'px" height="' + height + 'px"></video>').appendTo(currentElem);
        var canvasElem = $('<canvas id="qr-canvas" width="' + (width - 2) + 'px" height="' + (height - 2) + 'px" style="display:none;"></canvas>').appendTo(currentElem);
        
        var video = vidElem[0];
        var canvas = canvasElem[0];
        var context = canvas.getContext('2d');
        var localMediaStream;
        
        var scan = function() {
          if(!html5_qrcode_running) {
            currentElem.html("").hide();
            localMediaStream.stop();
            return;
          }
          if (localMediaStream) {
            context.drawImage(video, 0, 0, 307,250);
    
            try {
              qrcode.decode();
            } catch(e) {
              qrcodeError(e);
            }
    
            setTimeout(scan, 500);
    
          } else {
            setTimeout(scan,500);
          }
        }//end snapshot function
        
        window.URL = window.URL || window.webkitURL || window.mozURL || window.msURL;
        navigator.getUserMedia  = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia;
    
        var successCallback = function(stream) {
            video.src = (window.URL && window.URL.createObjectURL(stream)) || stream;
            localMediaStream = stream;
    
            video.play();
            setTimeout(scan,1000);
        }
    
        // Call the getUserMedia method with our callback functions
        if (navigator.getUserMedia) {
            navigator.getUserMedia({video: true}, successCallback, videoError);
        } else {
            console.log('Native web camera streaming (getUserMedia) not supported in this browser.');
            // Display a friendly "sorry" message to the user
        }
    
        qrcode.callback = qrcodeSuccess;
      }); // end of html5_qrcode
    }
  });
})( jQuery );
