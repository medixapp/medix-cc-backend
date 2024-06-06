// const tf = require('@tensorflow/tfjs-node');
// const words = require('../data/word');

// async function predictClassificationDevin(modelA, preprocessedInputDevin) {
// 	const inputTensor = tf.tensor([preprocessedInputDevin], [1, 20]);
// 	const prediction = modelA.predict(inputTensor);
// 	const predictionArray = prediction.dataSync();
// 	const classes = {
// 		0: 'Hepatitis',
// 		1: 'Usus Buntu',
// 		2: 'GERD',
// 		3: 'Ambeien',
// 		4: 'Celiac',
// 		5: 'Irritable Bowel Syndrome (IBS)',
// 		6: 'Batu Empedu',
// 		7: 'Diare',
// 		8: 'Tifus',
// 		9: 'Disentri',
// 		10: 'Maag',
// 		11: 'Tukak lambung',
// 		12: 'Konstipasi',
// 		13: 'Inflammatory Bowel Disease (IBD)',
// 	};

// 	const maxPrediction = predictionArray.indexOf(Math.max(...predictionArray));
// 	const label = classes[maxPrediction];
// 	let desc;

// 	switch (label) {
// 		case 'Konstipasi':
// 			desc = 'Perbanyak konsumsi serat dan air putih.';
// 			break;
// 		case 'Inflammatory Bowel Disease (IBD)':
// 			desc = 'Segera periksa ke dokter untuk penanganan lebih lanjut.';
// 			break;
// 		case 'Irritable Bowel Syndrome (IBS)':
// 			desc = 'Kelola stress dan perhatikan pola makan.';
// 			break;
// 		case 'Maag':
// 			desc = 'Hindari makanan pedas dan asam, serta makan dengan teratur.';
// 			break;
// 		case 'Hepatitis':
// 			desc = 'Segera periksa ke dokter untuk penanganan lebih lanjut.';
// 			break;
// 		case 'Diare':
// 			desc = 'Perbanyak minum air untuk mencegah dehidrasi.';
// 			break;
// 		case 'Disentri':
// 			desc = 'Segera periksa ke dokter untuk penanganan lebih lanjut.';
// 			break;
// 		case 'Tukak lambung':
// 			desc = 'Hindari makanan pedas dan asam, serta makan dengan teratur.';
// 			break;
// 		case 'Tifus':
// 			desc = 'Segera periksa ke dokter untuk penanganan lebih lanjut.';
// 			break;
// 		case 'Celiac':
// 			desc = 'Hindari makanan yang mengandung gluten.';
// 			break;
// 		case 'GERD':
// 			desc = 'Hindari makanan pedas dan asam, serta makan dengan teratur.';
// 			break;
// 		case 'Batu Empedu':
// 			desc = 'Segera periksa ke dokter untuk penanganan lebih lanjut.';
// 			break;
// 		case 'Ambeien':
// 			desc = 'Perbanyak konsumsi serat dan air putih.';
// 			break;
// 		case 'Usus Buntu':
// 			desc = 'Segera periksa ke dokter untuk penanganan lebih lanjut.';
// 			break;
// 		default:
// 			desc = 'Tidak diketahui, segera periksa ke dokter.';
// 	}
// 	return { label, desc };
// }

// async function predictClassificationDesika(modelB, preprocessedInputDesika) {
// 	const inputTensor = tf.tensor([preprocessedInputDesika], [1, 58]);
// 	const prediction = modelB.predict(inputTensor);
// 	const predictionArray = prediction.dataSync();
// 	const classes = {
// 		0: 'Ambeien',
// 		1: 'Batu Empedu',
// 		2: 'Celiac',
// 		3: 'Diare',
// 		4: 'Disentri',
// 		5: 'GERD',
// 		6: 'Hepatitis',
// 		7: 'Inflammatory Bowel Disease (IBD)',
// 		8: 'Irritable Bowel Syndrome (IBS)',
// 		9: 'Konstipasi',
// 		10: 'Maag',
// 		11: 'Tifus',
// 		12: 'Tukak lambung',
// 		13: 'Usus Buntu',
// 	};

// 	const maxPrediction = predictionArray.indexOf(Math.max(...predictionArray));
// 	const label = classes[maxPrediction];
// 	let desc;

// 	switch (label) {
// 		case 'Konstipasi':
// 			desc = 'Perbanyak konsumsi serat dan air putih.';
// 			break;
// 		case 'Inflammatory Bowel Disease (IBD)':
// 			desc = 'Segera periksa ke dokter untuk penanganan lebih lanjut.';
// 			break;
// 		case 'Irritable Bowel Syndrome (IBS)':
// 			desc = 'Kelola stress dan perhatikan pola makan.';
// 			break;
// 		case 'Maag':
// 			desc = 'Hindari makanan pedas dan asam, serta makan dengan teratur.';
// 			break;
// 		case 'Hepatitis':
// 			desc = 'Segera periksa ke dokter untuk penanganan lebih lanjut.';
// 			break;
// 		case 'Diare':
// 			desc = 'Perbanyak minum air untuk mencegah dehidrasi.';
// 			break;
// 		case 'Disentri':
// 			desc = 'Segera periksa ke dokter untuk penanganan lebih lanjut.';
// 			break;
// 		case 'Tukak lambung':
// 			desc = 'Hindari makanan pedas dan asam, serta makan dengan teratur.';
// 			break;
// 		case 'Tifus':
// 			desc = 'Segera periksa ke dokter untuk penanganan lebih lanjut.';
// 			break;
// 		case 'Celiac':
// 			desc = 'Hindari makanan yang mengandung gluten.';
// 			break;
// 		case 'GERD':
// 			desc = 'Hindari makanan pedas dan asam, serta makan dengan teratur.';
// 			break;
// 		case 'Batu Empedu':
// 			desc = 'Segera periksa ke dokter untuk penanganan lebih lanjut.';
// 			break;
// 		case 'Ambeien':
// 			desc = 'Perbanyak konsumsi serat dan air putih.';
// 			break;
// 		case 'Usus Buntu':
// 			desc = 'Segera periksa ke dokter untuk penanganan lebih lanjut.';
// 			break;
// 		default:
// 			desc = 'Tidak diketahui, segera periksa ke dokter.';
// 	}
// 	return { label, desc };
// }

// function preprocessInputDevin(text) {
// 	if (typeof text !== 'string') {
// 		console.error('Invalid input: text should be a string');
// 		return Array(20).fill(0); // Return an array of 20 zeros if input is invalid
// 	}

// 	// Remove commas and periods
// 	let string = text.replace(/,/g, '').replace(/\./g, '');
// 	// Split the string into an array of words
// 	let strArr = string.split(' ');
// 	let strConverted = [];

// 	// Convert words to integers based on the dictionary
// 	for (let w of strArr) {
// 		if (words[w] === undefined) {
// 			strConverted.push(1); // Use 1 for unknown words
// 		} else {
// 			strConverted.push(words[w]);
// 		}
// 	}

// 	// Ensure the array has a length of 20 by padding with zeros or truncating
// 	if (strConverted.length < 20) {
// 		let numOfZero = 20 - strConverted.length;
// 		for (let i = 0; i < numOfZero; i++) {
// 			strConverted.push(0);
// 		}
// 	} else {
// 		strConverted = strConverted.slice(0, 20);
// 	}

// 	return strConverted;
// }

// function preprocessInputDesika(inputSymptoms, allSymptoms) {
// 	// Normalize symptoms to lower case
// 	const inputArray = new Array(inputSymptoms.map((symptom) => symptom.toLowerCase()))[0];
// 	const normalizedAllSymptoms = allSymptoms.map((symptom) => symptom.toLowerCase());

// 	// Initialize an array with zeros, one for each symptom in allSymptoms
// 	const binaryVector = Array(normalizedAllSymptoms.length).fill(0);
// 	for (const [index, symptom] of normalizedAllSymptoms.entries()) {
// 		if (inputArray.includes(symptom)) {
// 			binaryVector[index] = 1;
// 		}
// 	}
// 	return binaryVector;
// }

// module.exports = { predictClassificationDevin, predictClassificationDesika, preprocessInputDevin, preprocessInputDesika };
