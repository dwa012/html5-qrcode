(function($) {
	qrcode.callback = function (result) {
		self.postMessage("data:" + result);
	};
	self.addEventListener('message', function(e) {
		var data = e.data;
		var result = "";
		try {
			qrcode.decodeImageData(data);
		} catch (e) {
			self.postMessage("error:" + e);
		}	
	});
})();