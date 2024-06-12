const tf = require('@tensorflow/tfjs-node');
const { classesA, classesB } = require('../data/classes');
const words = require('../data/word');

async function classificationEmbedding(modelA, preprocessInputEmbedding) {
	const inputTensor = tf.tensor([preprocessInputEmbedding], [1, 88]);
	const prediction = modelA.predict(inputTensor);
	const predictionArray = prediction.dataSync();
	const predictions = Array.from(predictionArray).map((confidence, index) => ({
		label: classesA[index],
		confidence,
	}));

	for (const prediction of predictions) {
		switch (prediction.label) {
			case 'Konstipasi':
				prediction.desc = 'Perbanyak konsumsi serat dan air putih.';
				prediction.penyebab = 'Kurangnya asupan serat dan cairan.';
				break;
			case 'Inflammatory Bowel Disease (IBD)':
				prediction.desc = 'Segera periksa ke dokter untuk penanganan lebih lanjut.';
				prediction.penyebab = 'Penyebab pasti tidak diketahui, diduga karena faktor genetik dan lingkungan.';
				break;
			case 'Irritable Bowel Syndrome (IBS)':
				prediction.desc = 'Kelola stress dan perhatikan pola makan.';
				prediction.penyebab = 'Stress, perubahan pola makan, dan gangguan fungsi usus.';
				break;
			case 'Maag':
				prediction.desc = 'Hindari makanan pedas dan asam, serta makan dengan teratur.';
				prediction.penyebab = 'Pola makan tidak teratur, stress, konsumsi makanan pedas dan asam.';
				break;
			case 'Hepatitis':
				prediction.desc = 'Segera periksa ke dokter untuk penanganan lebih lanjut.';
				prediction.penyebab = 'Infeksi virus, konsumsi alkohol berlebih, penggunaan obat-obatan tertentu.';
				break;
			case 'Diare':
				prediction.desc = 'Perbanyak minum air untuk mencegah dehidrasi.';
				prediction.penyebab = 'Infeksi bakteri atau virus, keracunan makanan, intoleransi makanan.';
				break;
			case 'Disentri':
				prediction.desc = 'Segera periksa ke dokter untuk penanganan lebih lanjut.';
				prediction.penyebab = 'Infeksi bakteri atau ameba.';
				break;
			case 'Tukak lambung':
				prediction.desc = 'Hindari makanan pedas dan asam, serta makan dengan teratur.';
				prediction.penyebab = 'Infeksi Helicobacter pylori, penggunaan NSAID jangka panjang.';
				break;
			case 'Tipes':
				prediction.desc = 'Segera periksa ke dokter untuk penanganan lebih lanjut.';
				prediction.penyebab = 'Infeksi bakteri Salmonella typhi.';
				break;
			case 'Celiac':
				prediction.desc = 'Hindari makanan yang mengandung gluten.';
				prediction.penyebab = 'Reaksi autoimun terhadap gluten.';
				break;
			case 'GERD':
				prediction.desc = 'Hindari makanan pedas dan asam, serta makan dengan teratur.';
				prediction.penyebab =
					'Relaksasi sfingter esofagus bawah yang berlebihan, obesitas, konsumsi makanan pedas dan asam.';
				break;
			case 'Batu Empedu':
				prediction.desc = 'Segera periksa ke dokter untuk penanganan lebih lanjut.';
				prediction.penyebab = 'Pembentukan kristal kolesterol atau bilirubin dalam kantong empedu.';
				break;
			case 'Ambeien':
				prediction.desc = 'Perbanyak konsumsi serat dan air putih.';
				prediction.penyebab = 'Tekanan berlebih pada pembuluh darah di sekitar anus.';
				break;
			case 'Usus Buntu':
				prediction.desc = 'Segera periksa ke dokter untuk penanganan lebih lanjut.';
				prediction.penyebab = 'Penyumbatan pada usus buntu yang menyebabkan peradangan.';
				break;
			default:
				prediction.desc = 'Tidak diketahui, segera periksa ke dokter.';
				prediction.penyebab = 'Penyebab tidak diketahui.';
		}
	}
	return predictions;
}

async function classificationOneHot(modelB, preprocessInputOneHot) {
	const inputTensor = tf.tensor([preprocessInputOneHot], [1, 58]);
	const prediction = modelB.predict(inputTensor);
	const predictionArray = prediction.dataSync();
	const predictions = Array.from(predictionArray).map((confidence, index) => ({
		label: classesB[index],
		confidence,
	}));

	for (const prediction of predictions) {
		switch (prediction.label) {
			case 'Konstipasi':
				prediction.desc = 'Perbanyak konsumsi serat dan air putih.';
				prediction.penyebab = 'Kurangnya asupan serat dan cairan.';
				break;
			case 'Inflammatory Bowel Disease (IBD)':
				prediction.desc = 'Segera periksa ke dokter untuk penanganan lebih lanjut.';
				prediction.penyebab = 'Penyebab pasti tidak diketahui, diduga karena faktor genetik dan lingkungan.';
				break;
			case 'Irritable Bowel Syndrome (IBS)':
				prediction.desc = 'Kelola stress dan perhatikan pola makan.';
				prediction.penyebab = 'Stress, perubahan pola makan, dan gangguan fungsi usus.';
				break;
			case 'Maag':
				prediction.desc = 'Hindari makanan pedas dan asam, serta makan dengan teratur.';
				prediction.penyebab = 'Pola makan tidak teratur, stress, konsumsi makanan pedas dan asam.';
				break;
			case 'Hepatitis':
				prediction.desc = 'Segera periksa ke dokter untuk penanganan lebih lanjut.';
				prediction.penyebab = 'Infeksi virus, konsumsi alkohol berlebih, penggunaan obat-obatan tertentu.';
				break;
			case 'Diare':
				prediction.desc = 'Perbanyak minum air untuk mencegah dehidrasi.';
				prediction.penyebab = 'Infeksi bakteri atau virus, keracunan makanan, intoleransi makanan.';
				break;
			case 'Disentri':
				prediction.desc = 'Segera periksa ke dokter untuk penanganan lebih lanjut.';
				prediction.penyebab = 'Infeksi bakteri atau ameba.';
				break;
			case 'Tukak lambung':
				prediction.desc = 'Hindari makanan pedas dan asam, serta makan dengan teratur.';
				prediction.penyebab = 'Infeksi Helicobacter pylori, penggunaan NSAID jangka panjang.';
				break;
			case 'Tipes':
				prediction.desc = 'Segera periksa ke dokter untuk penanganan lebih lanjut.';
				prediction.penyebab = 'Infeksi bakteri Salmonella typhi.';
				break;
			case 'Celiac':
				prediction.desc = 'Hindari makanan yang mengandung gluten.';
				prediction.penyebab = 'Reaksi autoimun terhadap gluten.';
				break;
			case 'GERD':
				prediction.desc = 'Hindari makanan pedas dan asam, serta makan dengan teratur.';
				prediction.penyebab =
					'Relaksasi sfingter esofagus bawah yang berlebihan, obesitas, konsumsi makanan pedas dan asam.';
				break;
			case 'Batu Empedu':
				prediction.desc = 'Segera periksa ke dokter untuk penanganan lebih lanjut.';
				prediction.penyebab = 'Pembentukan kristal kolesterol atau bilirubin dalam kantong empedu.';
				break;
			case 'Ambeien':
				prediction.desc = 'Perbanyak konsumsi serat dan air putih.';
				prediction.penyebab = 'Tekanan berlebih pada pembuluh darah di sekitar anus.';
				break;
			case 'Usus Buntu':
				prediction.desc = 'Segera periksa ke dokter untuk penanganan lebih lanjut.';
				prediction.penyebab = 'Penyumbatan pada usus buntu yang menyebabkan peradangan.';
				break;
			default:
				prediction.desc = 'Tidak diketahui, segera periksa ke dokter.';
				prediction.penyebab = 'Penyebab tidak diketahui.';
		}
	}
	return predictions;
}

function preprocessInputEmbedding(text) {
	if (typeof text !== 'string') {
		console.error('Invalid input: text should be a string');
		return Array(88).fill(0); // Return an array of 20 zeros if input is invalid
	}

	// Remove commas and periods
	let string = text.replace(/,/g, '').replace(/\./g, '');
	// Split the string into an array of words
	let strArr = string.split(' ');
	let strConverted = [];

	// Convert words to integers based on the dictionary
	for (let w of strArr) {
		if (words[w] === undefined) {
			strConverted.push(1); // Use 1 for unknown words
		} else {
			strConverted.push(words[w]);
		}
	}

	// Ensure the array has a length of 20 by padding with zeros or truncating
	if (strConverted.length < 88) {
		let numOfZero = 88 - strConverted.length;
		for (let i = 0; i < numOfZero; i++) {
			strConverted.push(0);
		}
	} else {
		strConverted = strConverted.slice(0, 88);
	}
	return strConverted;
}

function preprocessInputOneHot(inputSymptoms, allSymptoms) {
	// Normalize symptoms to lower case
	const inputArray = new Array(inputSymptoms.map((symptom) => symptom.toLowerCase()))[0];
	const normalizedAllSymptoms = allSymptoms.map((symptom) => symptom.toLowerCase());

	// Initialize an array with zeros, one for each symptom in allSymptoms
	const binaryVector = Array(normalizedAllSymptoms.length).fill(0);
	for (const [index, symptom] of normalizedAllSymptoms.entries()) {
		if (inputArray.includes(symptom)) {
			binaryVector[index] = 1;
		}
	}
	return binaryVector;
}

module.exports = { classificationEmbedding, classificationOneHot, preprocessInputEmbedding, preprocessInputOneHot };
