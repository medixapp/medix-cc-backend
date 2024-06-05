const tf = require('@tensorflow/tfjs-node');

async function loadModelDevin() {
	return tf.loadLayersModel(process.env.MODEL_DEVIN);
}

async function loadModelDesika() {
	return tf.loadLayersModel(process.env.MODEL_DESIKA);
}

module.exports = { loadModelDesika, loadModelDevin };
