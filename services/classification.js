const tf = require('@tensorflow/tfjs-node');

async function predictClassification(model, image) {
	const tensor = tf.node
		.decodeJpeg(image)
		.resizeNearestNeighbor([224, 224])
		.expandDims()
		.toFloat();
	const prediction = model.predict(tensor);

	const classes = ['Cancer', 'Non-cancer'];
	const result = prediction.dataSync()[0];
	let label, suggestion;

	if (result > 0.5) {
		label = classes[0];
		suggestion = 'Segera periksa ke dokter!';
	} else {
		label = classes[1];
		suggestion = 'Anda sehat!';
	}

	return { label, suggestion };
}

module.exports = { predictClassification };
