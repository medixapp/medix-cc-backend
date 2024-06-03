// const tf = require('@tensorflow/tfjs-node');

// async function predictClassification(model, text) {
// 	// Preprocess the input text (if necessary, this could be omitted if the model handles it)
// 	const inputTensor = tf.tensor([text]);

// 	// Get the prediction from the model
// 	const prediction = model.predict(inputTensor);
// 	const predictionArray = prediction.dataSync();
// 	const classes = {
// 		0: 'Konstipasi',
// 		1: 'Inflammatory Bowel Disease (IBD)',
// 		2: 'Irritable Bowel Syndrome (IBS)',
// 		3: 'Maag',
// 		4: 'Hepatitis',
// 		5: 'Diare',
// 		6: 'Disentri',
// 		7: 'Tukak lambung',
// 		8: 'Tifus',
// 		9: 'Celiac',
// 		10: 'GERD',
// 		11: 'Batu Empedu',
// 		12: 'Ambeien',
// 		13: 'Usus Buntu',
// 	};

// 	const maxPrediction = predictionArray.indexOf(Math.max(...predictionArray));
// 	const label = classes[maxPrediction];
// 	let suggestion;

// 	switch (label) {
// 		case 'Konstipasi':
// 			suggestion = 'Perbanyak konsumsi serat dan air putih.';
// 			break;
// 		case 'Inflammatory Bowel Disease (IBD)':
// 			suggestion = 'Segera periksa ke dokter untuk penanganan lebih lanjut.';
// 			break;
// 		case 'Irritable Bowel Syndrome (IBS)':
// 			suggestion = 'Kelola stress dan perhatikan pola makan.';
// 			break;
// 		case 'Maag':
// 			suggestion = 'Hindari makanan pedas dan asam, serta makan dengan teratur.';
// 			break;
// 		case 'Hepatitis':
// 			suggestion = 'Segera periksa ke dokter untuk penanganan lebih lanjut.';
// 			break;
// 		case 'Diare':
// 			suggestion = 'Perbanyak minum air untuk mencegah dehidrasi.';
// 			break;
// 		case 'Disentri':
// 			suggestion = 'Segera periksa ke dokter untuk penanganan lebih lanjut.';
// 			break;
// 		case 'Tukak lambung':
// 			suggestion = 'Hindari makanan pedas dan asam, serta makan dengan teratur.';
// 			break;
// 		case 'Tifus':
// 			suggestion = 'Segera periksa ke dokter untuk penanganan lebih lanjut.';
// 			break;
// 		case 'Celiac':
// 			suggestion = 'Hindari makanan yang mengandung gluten.';
// 			break;
// 		case 'GERD':
// 			suggestion = 'Hindari makanan pedas dan asam, serta makan dengan teratur.';
// 			break;
// 		case 'Batu Empedu':
// 			suggestion = 'Segera periksa ke dokter untuk penanganan lebih lanjut.';
// 			break;
// 		case 'Ambeien':
// 			suggestion = 'Perbanyak konsumsi serat dan air putih.';
// 			break;
// 		case 'Usus Buntu':
// 			suggestion = 'Segera periksa ke dokter untuk penanganan lebih lanjut.';
// 			break;
// 		default:
// 			suggestion = 'Tidak diketahui, segera periksa ke dokter.';
// 	}

// 	return { label, suggestion };
// }

// module.exports = { predictClassification };
