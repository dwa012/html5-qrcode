(function($) {
	qrcode.callback = function (result) {
		self.postMessage(result);
	};
	self.addEventListener('message', function(e) {
		var data = e.data;
		var result = "";
		try {
			qrcode.decodeImageData(data);
		} catch (e) {
			self.postMessage("");
		}	
	});
})();