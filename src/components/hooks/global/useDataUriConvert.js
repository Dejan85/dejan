const useDataUriConverter = () => {
	function convertFileToBase64viaFileReader(url, callback) {
		const xhr = new XMLHttpRequest();
		xhr.responseType = 'blob';
		xhr.onload = function() {
			const reader = new FileReader();
			reader.onloadend = function() {
				callback(reader.result);
			};
			reader.readAsDataURL(xhr.response);
		};
		xhr.open('GET', url);
		xhr.send();
	}

	return { convertFileToBase64viaFileReader };
};

export default useDataUriConverter;

// convertFileToBase64viaFileReader(img, (base64Img) => {
// 	console.log(base64Img);
// });

// console.log(content && content.images[0]);
// console.log(img);
