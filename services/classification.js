// const tf = require('@tensorflow/tfjs-node');
// const { classesA, classesB } = require('../data/classes');
// const { symptomsWords } = require('../data/allSymptoms');

// async function classificationEmbedding(modelA, preprocessInputEmbedding) {
// 	const inputTensor = tf.tensor([preprocessInputEmbedding], [1, 88]);
// 	const prediction = modelA.predict(inputTensor);
// 	const predictionArray = prediction.dataSync();
// 	const predictions = Array.from(predictionArray).map((confidence, index) => ({
// 		label: classesA[index],
// 		confidence,
// 	}));

// 	for (const prediction of predictions) {
// 		switch (prediction.label) {
// 			case 'Konstipasi':
// 				prediction.desc =
// 					'Konstipasi atau sembelit adalah kondisi sulit buang air besar. Bisa jadi tidak dapat buang air besar sama sekali atau tidak sampai tuntas. Walaupun frekuensi buang air besar setiap orang bisa berbeda-beda, pasien dapat dinyatakan mengalami konstipasi jika buang air besar kurang dari 3 kali dalam seminggu.';
// 				prediction.penyebab = 'Kurangnya asupan serat dan cairan.';
// 				break;
// 			case 'Inflammatory Bowel Disease (IBD)':
// 				prediction.desc =
// 					'Inflammatory bowel disease (IBD) adalah kondisi medis yang terjadi karena adanya peradangan pada saluran pencernaan. Inflammatory bowel disease adalah salah satu jenis gangguan pencernaan yang dapat menyebabkan penderitanya mengeluhkan beberapa kondisi, seperti diare, nyeri pada perut, kehilangan nafsu makan, hingga BAB berdarah.';
// 				prediction.penyebab = 'Penyebab pasti tidak diketahui, diduga karena faktor genetik dan lingkungan.';
// 				break;
// 			case 'Irritable Bowel Syndrome (IBS)':
// 				prediction.desc =
// 					'Sindrom iritasi usus atau Irritable bowel syndrome (IBS) adalah kumpulan gejala akibat iritasi pada saluran pencernaan. Masalah kesehatan ini dapat menimbulkan beberapa tanda dan gejala. Biasanya meliputi kram perut, nyeri perut, kembung, dan perubahan pola buang air besar (diare atau konstipasi). IBS adalah keadaan yang kronis yang membutuhkan perawatan jangka panjang.';
// 				prediction.penyebab = 'Stress, perubahan pola makan, dan gangguan fungsi usus.';
// 				break;
// 			case 'Maag':
// 				prediction.desc =
// 					'Sakit maag atau dispepsia adalah rasa nyeri dan tidak nyaman pada lambung akibat sejumlah kondisi. Kondisi ini bukan suatu penyakit, melainkan gejala dari penyakit. Meski terbilang mudah untuk disembuhkan, akan tetapi maag  juga bisa menjadi parah. Bahkan, maag yang semakin parah mampu mengganggu pengidapnya untuk beraktivitas normal.';
// 				prediction.penyebab = 'Pola makan tidak teratur, stress, konsumsi makanan pedas dan asam.';
// 				break;
// 			case 'Hepatitis':
// 				prediction.desc =
// 					'Hepatitis adalah penyakit yang memiliki gejala berupa peradangan pada organ hati. Kondisi ini bisa terjadi karena infeksi virus, kebiasaan minum alkohol, paparan zat beracun atau obat-obatan tertentu.';
// 				prediction.penyebab = 'Infeksi virus, konsumsi alkohol berlebih, penggunaan obat-obatan tertentu.';
// 				break;
// 			case 'Diare':
// 				prediction.desc =
// 					'Diare adalah sebuah kondisi ketika pengidapnya buang air besar (BAB) lebih sering dari biasanya. Kondisi ini bisa menyebabkan seseorang BAB sebanyak tiga kali atau lebih dalam satu hari. Selain itu, feses yang keluar juga lebih encer. Ada dua jenis diare yang bisa terjadi, yaitu akut atau kronis (persisten). Diare akut adalah jenis yang berlangsung dalam waktu singkat.';
// 				prediction.penyebab = 'Infeksi bakteri atau virus, keracunan makanan, intoleransi makanan.';
// 				break;
// 			case 'Disentri':
// 				prediction.desc =
// 					'Disentri adalah peradangan dan infeksi pada usus, yang mengakibatkan diare yang mengandung darah atau lendir. Kondisi ini dapat terjadi sebagai akibat dari infeksi bakteri atau parasit. Infeksi ini biasanya menyebar sebagai akibat dari kebersihan atau sanitasi yang buruk.';
// 				prediction.penyebab = 'Infeksi bakteri atau ameba.';
// 				break;
// 			case 'Tukak lambung':
// 				prediction.desc =
// 					'Tukak lambung adalah luka yang muncul pada dinding lambung akibat terkikisnya lapisan dinding lambung. Luka ini juga berpotensi muncul pada dinding bagian pertama usus kecil (duodenum) serta kerongkongan (esofagus).';
// 				prediction.penyebab = 'Infeksi Helicobacter pylori, penggunaan NSAID jangka panjang.';
// 				break;
// 			case 'Tipes':
// 				prediction.desc =
// 					'Tipes atau demam tifoid adalah penyakit yang terjadi karena infeksi bakteri Salmonella typhi. Bakteri tersebut menyebar melalui makanan dan minuman yang telah terkontaminasi. ';
// 				prediction.penyebab = 'Infeksi bakteri Salmonella typhi.';
// 				break;
// 			case 'Celiac':
// 				prediction.desc =
// 					'Penyakit celiac adalah penyakit autoimun serius. Penyakit terjadi pada seseorang dengan kondisi genetik di mana konsumsi gluten menyebabkan kerusakan pada usus kecil. Penyakit ini memicu reaksi dari sistem kekebalan tubuh terhadap gluten dengan merusak tonjolan kecil seperti rambut (vili) yang melapisi usus kecil.';
// 				prediction.penyebab = 'Reaksi autoimun terhadap gluten.';
// 				break;
// 			case 'GERD':
// 				prediction.desc =
// 					'Penyakit asam lambung atau GERD adalah kondisi ketika asam lambung naik ke esofagus atau kerongkongan. Kondisi yang disebut juga sebagai penyakit refluks gastroesofagus ini dapat menimbulkan nyeri pada ulu hati, heartburn, serta berbagai gejala lainnya pada area dada bagian bawah dan perut.';
// 				prediction.penyebab =
// 					'Relaksasi sfingter esofagus bawah yang berlebihan, obesitas, konsumsi makanan pedas dan asam.';
// 				break;
// 			case 'Batu Empedu':
// 				prediction.desc =
// 					'Batu empedu atau gallstones adalah endapan cairan pencernaan yang mengeras yang dapat terbentuk pada kantung empedu. Sementara itu, kantung empedu adalah organ kecil berbentuk buah pir di sisi kanan perut, tepat di bawah hati.';
// 				prediction.penyebab = 'Pembentukan kristal kolesterol atau bilirubin dalam kantong empedu.';
// 				break;
// 			case 'Ambeien':
// 				prediction.desc =
// 					'Ambeien (wasir) atau hemoroid adalah pembesaran atau pembengkakan yang terjadi pada dubur atau usus besar bagian akhir atau rektum. Ambeien (wasir) dapat bersifat internal atau eksternal. Wasir internal berkembang di dalam anus atau rektum. Sementara itu, wasir yang bersifat eksternal akan berkembang di luar anus. Pada umumnya ambeien (wasir) dapat menyebabkan rasa sakit, gatal parah, dan kesulitan duduk. ';
// 				prediction.penyebab = 'Tekanan berlebih pada pembuluh darah di sekitar anus.';
// 				break;
// 			case 'Usus Buntu':
// 				prediction.desc =
// 					'Penyakit usus buntu atau apendisitis adalah kondisi peradangan pada usus buntu (apendiks). Kebanyakan penyebab usus buntu adalah infeksi yang tidak mendapat pertolongan sesegera mungkin. Apendiks atau usus buntu merupakan organ berbentuk kantong berukuran 5-10 centimeter yang tersambung ke usus besar dari sisi kanan bawah perut.';
// 				prediction.penyebab = 'Penyumbatan pada usus buntu yang menyebabkan peradangan.';
// 				break;
// 			default:
// 				prediction.desc = 'Tidak diketahui, segera periksa ke dokter.';
// 				prediction.penyebab = 'Penyebab tidak diketahui.';
// 		}
// 	}
// 	return predictions;
// }

// async function classificationOneHot(modelB, preprocessInputOneHot) {
// 	const inputTensor = tf.tensor([preprocessInputOneHot], [1, 68]);
// 	const prediction = modelB.predict(inputTensor);
// 	const predictionArray = prediction.dataSync();
// 	const predictions = Array.from(predictionArray).map((confidence, index) => ({
// 		label: classesB[index],
// 		confidence,
// 	}));

// 	for (const prediction of predictions) {
// 		switch (prediction.label) {
// 			case 'Konstipasi':
// 				prediction.desc =
// 					'Konstipasi atau sembelit adalah kondisi sulit buang air besar. Bisa jadi tidak dapat buang air besar sama sekali atau tidak sampai tuntas. Walaupun frekuensi buang air besar setiap orang bisa berbeda-beda, pasien dapat dinyatakan mengalami konstipasi jika buang air besar kurang dari 3 kali dalam seminggu.';
// 				prediction.penyebab = 'Kurangnya asupan serat dan cairan.';
// 				break;
// 			case 'Inflammatory Bowel Disease (IBD)':
// 				prediction.desc =
// 					'Inflammatory bowel disease (IBD) adalah kondisi medis yang terjadi karena adanya peradangan pada saluran pencernaan. Inflammatory bowel disease adalah salah satu jenis gangguan pencernaan yang dapat menyebabkan penderitanya mengeluhkan beberapa kondisi, seperti diare, nyeri pada perut, kehilangan nafsu makan, hingga BAB berdarah.';
// 				prediction.penyebab = 'Penyebab pasti tidak diketahui, diduga karena faktor genetik dan lingkungan.';
// 				break;
// 			case 'Irritable Bowel Syndrome (IBS)':
// 				prediction.desc =
// 					'Sindrom iritasi usus atau Irritable bowel syndrome (IBS) adalah kumpulan gejala akibat iritasi pada saluran pencernaan. Masalah kesehatan ini dapat menimbulkan beberapa tanda dan gejala. Biasanya meliputi kram perut, nyeri perut, kembung, dan perubahan pola buang air besar (diare atau konstipasi). IBS adalah keadaan yang kronis yang membutuhkan perawatan jangka panjang.';
// 				prediction.penyebab = 'Stress, perubahan pola makan, dan gangguan fungsi usus.';
// 				break;
// 			case 'Maag':
// 				prediction.desc =
// 					'Sakit maag atau dispepsia adalah rasa nyeri dan tidak nyaman pada lambung akibat sejumlah kondisi. Kondisi ini bukan suatu penyakit, melainkan gejala dari penyakit. Meski terbilang mudah untuk disembuhkan, akan tetapi maag  juga bisa menjadi parah. Bahkan, maag yang semakin parah mampu mengganggu pengidapnya untuk beraktivitas normal.';
// 				prediction.penyebab = 'Pola makan tidak teratur, stress, konsumsi makanan pedas dan asam.';
// 				break;
// 			case 'Hepatitis':
// 				prediction.desc =
// 					'Hepatitis adalah penyakit yang memiliki gejala berupa peradangan pada organ hati. Kondisi ini bisa terjadi karena infeksi virus, kebiasaan minum alkohol, paparan zat beracun atau obat-obatan tertentu.';
// 				prediction.penyebab = 'Infeksi virus, konsumsi alkohol berlebih, penggunaan obat-obatan tertentu.';
// 				break;
// 			case 'Diare':
// 				prediction.desc =
// 					'Diare adalah sebuah kondisi ketika pengidapnya buang air besar (BAB) lebih sering dari biasanya. Kondisi ini bisa menyebabkan seseorang BAB sebanyak tiga kali atau lebih dalam satu hari. Selain itu, feses yang keluar juga lebih encer. Ada dua jenis diare yang bisa terjadi, yaitu akut atau kronis (persisten). Diare akut adalah jenis yang berlangsung dalam waktu singkat.';
// 				prediction.penyebab = 'Infeksi bakteri atau virus, keracunan makanan, intoleransi makanan.';
// 				break;
// 			case 'Disentri':
// 				prediction.desc =
// 					'Disentri adalah peradangan dan infeksi pada usus, yang mengakibatkan diare yang mengandung darah atau lendir. Kondisi ini dapat terjadi sebagai akibat dari infeksi bakteri atau parasit. Infeksi ini biasanya menyebar sebagai akibat dari kebersihan atau sanitasi yang buruk.';
// 				prediction.penyebab = 'Infeksi bakteri atau ameba.';
// 				break;
// 			case 'Tukak lambung':
// 				prediction.desc =
// 					'Tukak lambung adalah luka yang muncul pada dinding lambung akibat terkikisnya lapisan dinding lambung. Luka ini juga berpotensi muncul pada dinding bagian pertama usus kecil (duodenum) serta kerongkongan (esofagus).';
// 				prediction.penyebab = 'Infeksi Helicobacter pylori, penggunaan NSAID jangka panjang.';
// 				break;
// 			case 'Tipes':
// 				prediction.desc =
// 					'Tipes atau demam tifoid adalah penyakit yang terjadi karena infeksi bakteri Salmonella typhi. Bakteri tersebut menyebar melalui makanan dan minuman yang telah terkontaminasi. ';
// 				prediction.penyebab = 'Infeksi bakteri Salmonella typhi.';
// 				break;
// 			case 'Celiac':
// 				prediction.desc =
// 					'Penyakit celiac adalah penyakit autoimun serius. Penyakit terjadi pada seseorang dengan kondisi genetik di mana konsumsi gluten menyebabkan kerusakan pada usus kecil. Penyakit ini memicu reaksi dari sistem kekebalan tubuh terhadap gluten dengan merusak tonjolan kecil seperti rambut (vili) yang melapisi usus kecil.';
// 				prediction.penyebab = 'Reaksi autoimun terhadap gluten.';
// 				break;
// 			case 'GERD':
// 				prediction.desc =
// 					'Penyakit asam lambung atau GERD adalah kondisi ketika asam lambung naik ke esofagus atau kerongkongan. Kondisi yang disebut juga sebagai penyakit refluks gastroesofagus ini dapat menimbulkan nyeri pada ulu hati, heartburn, serta berbagai gejala lainnya pada area dada bagian bawah dan perut.';
// 				prediction.penyebab =
// 					'Relaksasi sfingter esofagus bawah yang berlebihan, obesitas, konsumsi makanan pedas dan asam.';
// 				break;
// 			case 'Batu Empedu':
// 				prediction.desc =
// 					'Batu empedu atau gallstones adalah endapan cairan pencernaan yang mengeras yang dapat terbentuk pada kantung empedu. Sementara itu, kantung empedu adalah organ kecil berbentuk buah pir di sisi kanan perut, tepat di bawah hati.';
// 				prediction.penyebab = 'Pembentukan kristal kolesterol atau bilirubin dalam kantong empedu.';
// 				break;
// 			case 'Ambeien':
// 				prediction.desc =
// 					'Ambeien (wasir) atau hemoroid adalah pembesaran atau pembengkakan yang terjadi pada dubur atau usus besar bagian akhir atau rektum. Ambeien (wasir) dapat bersifat internal atau eksternal. Wasir internal berkembang di dalam anus atau rektum. Sementara itu, wasir yang bersifat eksternal akan berkembang di luar anus. Pada umumnya ambeien (wasir) dapat menyebabkan rasa sakit, gatal parah, dan kesulitan duduk. ';
// 				prediction.penyebab = 'Tekanan berlebih pada pembuluh darah di sekitar anus.';
// 				break;
// 			case 'Usus Buntu':
// 				prediction.desc =
// 					'Penyakit usus buntu atau apendisitis adalah kondisi peradangan pada usus buntu (apendiks). Kebanyakan penyebab usus buntu adalah infeksi yang tidak mendapat pertolongan sesegera mungkin. Apendiks atau usus buntu merupakan organ berbentuk kantong berukuran 5-10 centimeter yang tersambung ke usus besar dari sisi kanan bawah perut.';
// 				prediction.penyebab = 'Penyumbatan pada usus buntu yang menyebabkan peradangan.';
// 				break;
// 			default:
// 				prediction.desc = 'Tidak diketahui, segera periksa ke dokter.';
// 				prediction.penyebab = 'Penyebab tidak diketahui.';
// 		}
// 	}
// 	return predictions;
// }

// function preprocessInputEmbedding(text) {
// 	if (typeof text !== 'string') {
// 		console.error('Invalid input: text should be a string');
// 		return Array(88).fill(0); // Return an array of 20 zeros if input is invalid
// 	}

// 	// Remove commas and periods
// 	let string = text.replace(/,/g, '').replace(/\./g, '');
// 	// Split the string into an array of words
// 	let strArr = string.split(' ');
// 	let strConverted = [];

// 	// Convert words to integers based on the dictionary
// 	for (let w of strArr) {
// 		if (symptomsWords[w] === undefined) {
// 			strConverted.push(1); // Use 1 for unknown words
// 		} else {
// 			strConverted.push(symptomsWords[w]);
// 		}
// 	}

// 	// Ensure the array has a length of 20 by padding with zeros or truncating
// 	if (strConverted.length < 88) {
// 		let numOfZero = 88 - strConverted.length;
// 		for (let i = 0; i < numOfZero; i++) {
// 			strConverted.push(0);
// 		}
// 	} else {
// 		strConverted = strConverted.slice(0, 88);
// 	}
// 	return strConverted;
// }

// function preprocessInputOneHot(inputSymptoms, symptomsArray) {
// 	// Normalize symptoms to lower case
// 	const inputArray = new Array(inputSymptoms.map((symptom) => symptom.toLowerCase()))[0];
// 	const normalizedAllSymptoms = symptomsArray.map((symptom) => symptom.toLowerCase());

// 	// Initialize an array with zeros, one for each symptom in allSymptoms
// 	const binaryVector = Array(normalizedAllSymptoms.length).fill(0);
// 	for (const [index, symptom] of normalizedAllSymptoms.entries()) {
// 		if (inputArray.includes(symptom)) {
// 			binaryVector[index] = 1;
// 		}
// 	}
// 	return binaryVector;
// }

// module.exports = { classificationEmbedding, classificationOneHot, preprocessInputEmbedding, preprocessInputOneHot };
