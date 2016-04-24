qrcode.decodeImageData = function(data){
	qrcode.width = data.width;
	qrcode.height = data.height;
	qrcode.imagedata = data;
	qrcode.result = qrcode.process();
	if(qrcode.callback!=null)
		qrcode.callback(qrcode.result);
	return qrcode.result;
};