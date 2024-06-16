const diseaseInfo = {
	Ambeien: [
		{
			medicine: 'Ambeven',
			description:
				'Ambeven Kapsul bermanfaat untuk meredakan gejala-gejala ambeien atau wasir. Ambeven Kapsul terbuat dari campuran berbagai bahan alami. Salah satu kandungan utama obat ini adalah daun wungu yang dipercaya memiliki kemampuan antiinflamasi, sehingga dapat mengurangi pembengkakan dan mengecilkan ukuran hemoroid. Obat ini dapat dibeli tanpa resep dokter.',
		},
		{
			medicine: 'Ardium 500',
			description:
				'Ardium adalah produk herbal untuk meringankan gejala wasir. Ardium tersedia dalam bentuk tablet yang bisa dibeli tanpa resep dokter.',
		},
		{
			medicine: 'Nutrafor Wazzir',
			description:
				'Nutrafor Wazzir dapat mengurangi gejala wasir sepert gatal, rasa panas, bengkak, nyeri, pendarahan, dan melunakkan tinja. Obat ini dapat dibeli tanpa resep dokter.',
		},
	],
	Diare: [
		{
			medicine: 'Diapet / Diapet Anak',
			description:
				'Diapet adalah obat herbal yang bermanfaat untuk mengatasi diare. Obat ini dapat mengurangi frekuensi buang air besar, memadatkan tinja yang cair, dan meredakan mulas akibat diare. Obat ini dapat dibeli tanpa resep dokter.',
		},
		{
			medicine: 'Entrostop / Entrostop Herbal Anak',
			description: 'Entrostop bermanfaat untuk mengatasi diare. Obat ini dapat dibeli tanpa resep dokter.',
		},
		{
			medicine: 'Smecta',
			description:
				'Smecta adalah obat yang digunakan untuk mengatasi diare berat. Obat ini juga dipercaya dapat meredakan gangguan lambung, radang usus, dan keracunan makanan. Smecta merupakan sejenis tanah liat yang diolah menjadi obat. Obat ini meredakan diare dengan cara melapisi bagian dalam lambung dan usus sehingga dapat menghambat penyerapan dan melindungi saluran pencernaan dari zat-zat yang beracun. Obat ini dapat dibeli tanpa resep dokter.',
		},
		{
			medicine: 'Imodium',
			description:
				'Imodium adalah obat untuk mengatasi diare, baik yang tiba-tiba (akut) maupun yang hilang timbul dalam jangka panjang (kronis), akibat penyakit radang usus. Obat ini hanya dapat diperoleh dengan resep dari dokter.',
		},
	],
	GERD: [
		{
			medicine: 'Polysilane Suspensi',
			description:
				'Polysilane adalah obat untuk meredakan gejala sakit maag dan perut kembung akibat kelebihan asam lambung. Dokter juga dapat menggunakan polysilane dalam penanganan tukak lambung, ulkus duodenum, atau asam lambung naik (GERD). Obat ini dapat dibeli tanpa resep dokter.',
		},
		{
			medicine: 'Promag Suspensi',
			description: 'Promag bermanfaat untuk mengatasi keluhan sakit maag, penyakit asam lambung naik, atau perut kembung.',
		},
		{
			medicine: 'Omeprazole',
			description:
				'Omeprazole adalah obat untuk mengatasi asam lambung berlebih dan keluhan yang menyertainya. Omeprazole umumnya digunakan untuk mengobati gastroesophageal reflux disease (GERD), sakit maag (gastritis), atau tukak lambung. Obat ini hanya dapat dibeli dengan resep dokter.',
		},
		{
			medicine: 'Episan',
			description:
				'Episan adalah obat untuk mengatasi ulkus duodenum, tukak lambung, atau gastritis kronis. Obat yang tersedia dalam bentuk tablet dan sirop ini hanya bisa didapatkan dengan resep dokter.',
		},
		{
			medicine: 'Antasida Doen',
			description:
				'Antasida Doen adalah obat yang bermanfaat untuk meredakan gejala asam lambung berlebih, seperti nyeri ulu hati, mual, atau rasa panas di dada (heartburn). Obat ini dapat dibeli tanpa resep dokter.',
		},
		{
			medicine: 'Ranitidine HCl',
			description:
				'Ranitidine HCl adalah obat untuk mengobati gejala akibat produksi asam lambung berlebih. Beberapa kondisi yang dapat ditangani dengan ranitidin adalah tukak lambung, penyakit maag, penyakit asam lambung (GERD). Obat ini hanya dapat dibeli dengan resep dokter.',
		},
		{
			medicine: 'Lanpracid Kapsul',
			description:
				'Lanpracid adalah obat penurun asam lambung yang mengandung lansoprazole. Lanpracid digunakan dalam pengobatan tukak lambung, penyakit asam lambung atau GERD, ulkus duodenum, atau esofagitis erosif. Obat ini hanya dapat dibeli dengan resep dokter.',
		},
	],
	Maag: [
		{
			medicine: 'Antasida Doen',
			description:
				'Antasida Doen adalah obat yang bermanfaat untuk meredakan gejala asam lambung berlebih, seperti nyeri ulu hati, mual, atau rasa panas di dada (heartburn). Obat ini dapat dibeli tanpa resep dokter.',
		},
		{
			medicine: 'Ranitidine HCl',
			description:
				'Ranitidine HCl adalah obat untuk mengobati gejala akibat produksi asam lambung berlebih. Beberapa kondisi yang dapat ditangani dengan ranitidin adalah tukak lambung, penyakit maag, penyakit asam lambung (GERD). Obat ini hanya dapat dibeli dengan resep dokter.',
		},
		{
			medicine: 'Polysilane Suspensi',
			description:
				'Polysilane adalah obat untuk meredakan gejala sakit maag dan perut kembung akibat kelebihan asam lambung. Dokter juga dapat menggunakan polysilane dalam penanganan tukak lambung, ulkus duodenum, atau asam lambung naik (GERD). Obat ini dapat dibeli tanpa resep dokter.',
		},
		{
			medicine: 'Promag Suspensi',
			description: 'Promag bermanfaat untuk mengatasi keluhan sakit maag, penyakit asam lambung naik, atau perut kembung.',
		},
		{
			medicine: 'Lanpracid Kapsul',
			description:
				'Lanpracid adalah obat penurun asam lambung yang mengandung lansoprazole. Lanpracid digunakan dalam pengobatan tukak lambung, penyakit asam lambung atau GERD, ulkus duodenum, atau esofagitis erosif. Obat ini hanya dapat dibeli dengan resep dokter.',
		},
		{
			medicine: 'Episan',
			description:
				'Episan adalah obat untuk mengatasi ulkus duodenum, tukak lambung, atau gastritis kronis. Obat yang tersedia dalam bentuk tablet dan sirop ini hanya bisa didapatkan dengan resep dokter.',
		},
		{
			medicine: 'Omeprazole',
			description:
				'Omeprazole adalah obat untuk mengatasi asam lambung berlebih dan keluhan yang menyertainya. Omeprazole umumnya digunakan untuk mengobati gastroesophageal reflux disease (GERD), sakit maag (gastritis), atau tukak lambung. Obat ini hanya dapat dibeli dengan resep dokter.',
		},
	],
	'Tukak Lambung': [
		{
			medicine: 'Antasida Doen',
			description:
				'Antasida Doen adalah obat yang bermanfaat untuk meredakan gejala asam lambung berlebih, seperti nyeri ulu hati, mual, atau rasa panas di dada (heartburn). Obat ini dapat dibeli tanpa resep dokter.',
		},
		{
			medicine: 'Lanpracid Kapsul',
			description:
				'Lanpracid adalah obat penurun asam lambung yang mengandung lansoprazole. Lanpracid digunakan dalam pengobatan tukak lambung, penyakit asam lambung atau GERD, ulkus duodenum, atau esofagitis erosif. Obat ini hanya dapat dibeli dengan resep dokter.',
		},
		{
			medicine: 'Omeprazole',
			description:
				'Omeprazole adalah obat untuk mengatasi asam lambung berlebih dan keluhan yang menyertainya. Omeprazole umumnya digunakan untuk mengobati gastroesophageal reflux disease (GERD), sakit maag (gastritis), atau tukak lambung. Obat ini hanya dapat dibeli dengan resep dokter.',
		},
		{
			medicine: 'Polysilane Suspensi',
			description:
				'Polysilane adalah obat untuk meredakan gejala sakit maag dan perut kembung akibat kelebihan asam lambung. Dokter juga dapat menggunakan polysilane dalam penanganan tukak lambung, ulkus duodenum, atau asam lambung naik (GERD). Obat ini dapat dibeli tanpa resep dokter.',
		},
		{
			medicine: 'Promag Suspensi',
			description: 'Promag bermanfaat untuk mengatasi keluhan sakit maag, penyakit asam lambung naik, atau perut kembung.',
		},
		{
			medicine: 'Ranitidine HCl',
			description:
				'Ranitidine HCl adalah obat untuk mengobati gejala akibat produksi asam lambung berlebih. Beberapa kondisi yang dapat ditangani dengan ranitidin adalah tukak lambung, penyakit maag, penyakit asam lambung (GERD). Obat ini hanya dapat dibeli dengan resep dokter.',
		},
		{
			medicine: 'Episan',
			description:
				'Episan adalah obat untuk mengatasi ulkus duodenum, tukak lambung, atau gastritis kronis. Obat yang tersedia dalam bentuk tablet dan sirop ini hanya bisa didapatkan dengan resep dokter.',
		},
	],
	Konstipasi: [
		{
			medicine: 'Microlax',
			description:
				'Microlax adalah obat pencahar yang bermanfaat untuk mengatasi susah buang air besar atau sembelit. Microlax tersedia dalam bentuk gel di dalam tabung berukuran 5 ml. Obat ini digunakan dengan cara dimasukkan ke dalam anus (dubur). Obat ini dapat dibeli tanpa resep dokter.',
		},
		{
			medicine: 'Dulcolax',
			description:
				'Dulcolax adalah obat pencahar untuk mengatasi sembelit atau susah buang air besar (BAB). Dulcolax mengandung bisacodyl yang dapat melancarkan BAB, serta meredakan kembung dan sakit perut akibat sembelit. Obat ini dapat dibeli tanpa resep dokter.',
		},
		{
			medicine: 'Laxatab',
			description:
				'Laxatab Tablet bermanfaat untuk mengatasi susah buang air besar (konstipasi). Laxatab Tablet mengandung docusate sodium. Docusate bekerja dengan cara menghambat penyerapan air dan lemak kembali dari feses, sehingga feses yang tadinya keras menjadi lebih lembut dan lebih mudah dikeluarkan. Obat ini dapat dibeli tanpa resep dokter.',
		},
		{
			medicine: 'Lactulax',
			description:
				'Lactulax Syrup 60 mL bermanfaat untuk mengatasi sembelit atau sulit buang air besar. Lactulax Syrup 60 mL bekerja dengan cara membantu mengalirkan cairan ke usus sehingga membuat tinja lebih lunak dan mudah dikeluarkan. Obat ini dapat dibeli tanpa resep dokter.',
		},
	],
	'Usus Buntu': [
		{
			medicine: 'Trogyl 500 mg',
			description:
				'Trogyl Tablet dapat membasmi bakteri penyebab infeksi usus buntu. Trogyl Tablet tidak bisa dibeli tanpa resep dokter.',
		},
		{
			medicine: 'Ciprofloxacin Tablet',
			description:
				'Ciprofloxacin adalah obat golongan antibiotik yang bisa membantu mengatasi berbagai penyakit akibat infeksi bakteri, termasuk penyakit usus buntu. Untuk meningkatkan efektivitasnya sebagai obat usus buntu, Ciprofloxacin perlu digabungkan dengan obat yang mengandung metronidazole. Obat ini dapat dibeli dengan resep dokter.',
		},
		{
			medicine: 'Biogesic Tablet',
			description:
				'Biogesic dapat dipakai sebagai obat usus buntu untuk meredakan gejala demam dan nyeri, seperti nyeri pada perut bagian kanan bawah yang umum terjadi pada penyakit ini. Obat ini dapat dibeli tanpa resep dokter.',
		},
		{
			medicine: 'Vometa Suspensi',
			description:
				'Obat ini mampu mengatasi mual atau muntah akibat penyakit usus buntu. Vometa bekerja dengan cara menghambat rangsangan mual dan muntah dari otak ke usus.',
		},
	],
	Tipes: [
		{
			medicine: 'Floxigra',
			description:
				'Floxigra adalah obat tipes yang mengandung antibiotik ciprofloxacin. Obat ini bekerja dengan menghambat pertumbuhan bakteri penyebab infeksi. Anda harus memiliki resep untuk membeli Floxigra.',
		},
		{
			medicine: 'Pyxime',
			description:
				'Obat ini bekerja sebagai obat tipes dengan membunuh bakteri penyebab infeksi dan mencegah pertumbuhannya. Antibiotik ini dapat dikonsumsi oleh orang dewasa dan anak usia >12 tahun. Pembelian Pyxime harus disertai resep.',
		},
		{
			medicine: 'Zithromax',
			description:
				'Antibiotik ini bekerja dengan cara menghentikan pertumbuhan bakteri penyebab tipes. Obat ini hanya dapat dibeli dengan resep dokter.',
		},
	],
	Celiac: [
		{
			medicine: 'Diet bebas gluten',
			description:
				'Cara utama dalam mengatasi penyakit celiac adalah dengan menghindari makanan atau bahan apa pun yang mengandung gluten. Selain pada makanan, gluten juga terdapat pada obat-obatan, vitamin, bahkan lipstik. Cara ini harus dilakukan seumur hidup guna mencegah terjadinya komplikasi.',
		},
		{
			medicine: 'Betamethasone Valerate',
			description:
				'Betamethasone valerate tergolong obat golongan kortikosteroid. Obat ini bekerja menghambat pelepasan zat-zat kimia yang memicu munculnya reaksi peradangan.',
		},
		{
			medicine: 'Suplemen vitamin dan mineral',
			description:
				'Jika pasien dinilai mengalami anemia dan malnutrisi yang cukup berat, atau jika pola makan pasien belum bisa menjamin kecukupan gizinya, dokter akan memberikan suplemen agar pasien mendapatkan semua nutrisi yang dibutuhkan oleh tubuh.',
		},
	],
	Disetnri: [
		{
			medicine: 'Paracetamol',
			description:
				'Paracetamol dapat meredakan demam sekaligus mengurangi rasa sakit. Paracetamol bisa Anda beli tanpa resep dokter.',
		},
		{
			medicine: 'Ciprofloxacin Tablet',
			description:
				'Ciprofloxacin adalah obat golongan antibiotik yang bisa membantu mengatasi berbagai penyakit akibat infeksi bakteri, termasuk penyakit usus buntu. Untuk meningkatkan efektivitasnya sebagai obat usus buntu, Ciprofloxacin perlu digabungkan dengan obat yang mengandung metronidazole. Obat ini dapat dibeli dengan resep dokter.',
		},
		{
			medicine: 'Metronidazole',
			description:
				'Obat ini bekerja dengan membunuh parasit penyebab diare. Dengan begitu, diare dan kram perut akibat disentri bisa mereda. Obat ini hanya bisa dibeli dengan resep dokter.',
		},
	],
	Hepatitis: [
		{
			medicine: 'Entecavir',
			description:
				'Entecavir adalah obat antivirus untuk mengobati hepatitis. Entecavir bekerja dengan cara menghambat proses replikasi atau perkembangbiakan virus, sehingga jumlah virus bisa berkurang.',
		},
		{
			medicine: 'Ribavirin',
			description:
				'Ribavirin adalah obat antivirus yang digunakan untuk menangani hepatitis. Penggunaan ribavirin akan dikombinasikan dengan obat antivirus lain, seperti interferon. Obat ini bekerja dengan mengurangi jumlah dan menghentikan penyebaran virus hepatitis di dalam tubuh.',
		},
		{
			medicine: 'Tenofovir',
			description:
				'Tenofovir adalah obat untuk mengatasi penyakit hepatitis. Tenofovir bekerja dengan cara memperlambat atau menghentikan perkembangbiakan virus hepatitis. Obat yang tersedia dalam bentuk tablet ini hanya boleh dikonsumsi sesuai resep dan rekomendasi dokter.',
		},
		{
			medicine: 'Interferon',
			description:
				'Interferon adalah kelompok obat yang digunakan untuk mengobati hepatitis kronis. Interferon merupakan salah satu jenis protein yang membantu mengatur kerja sistem kekebalan tubuh. Obat ini berperan penting untuk melawan infeksi virus',
		},
	],
	'Batu Empedu': [
		{
			medicine: 'Urdafalk 250 mg',
			description:
				'Urdafalk 250 Mg bermanfaat untuk menghancurkan batu empedu ukuran kecil dan mencegah munculnya batu empedu. Obat ini bekerja dengan menurunkan kadar kolesterol yang dihasilkan oleh hati dan menghancurkan kolestrol yang membatu.',
		},
		{
			medicine: 'Urdahex 250 mg',
			description:
				'Urdahex 250 Mg bermanfaat untuk menghancurkan batu empedu ukuran kecil dan mencegah munculnya batu empedu. Obat ini bekerja dengan menurunkan kadar kolesterol yang dihasilkan oleh hati dan menghancurkan kolestrol yang membatu.',
		},
		{
			medicine: 'Dicloflam 50 mg',
			description:
				'Dicloflam dapat digunakan untuk mengatasi nyeri perut yang merupakan gejala utama dari penyakit batu empedu. Dicloflam bekerja dengan mengurangi produksi prostaglandin, yaitu hormon yang memicu terjadinya nyeri, termasuk nyeri perut karena batu empedu.',
		},
	],
	'Irritable Bowel Syndrome (IBS)': [
		{
			medicine: 'Atropine',
			description:
				'Atropine termasuk dalam kelompok obat antikolinergik. Obat ini bekerja dengan cara menghambat beberapa zat kimia dalam tubuh, seperti asetilkolin dan choline ester. Atropine dapat digunakan untuk mengatasi mulas dan nyeri perut pada irritable bowel syndrome (IBS)',
		},
		{
			medicine: 'Braxidin',
			description:
				'Braxidin adalah obat untuk meredakan nyeri perut akibat kram di lambung, usus, atau kandung kemih. Obat ini dapat digunakan dalam pengobatan sindrom iritasi usus besar (IBS).',
		},
		{
			medicine: 'Mebeverine',
			description:
				'Mebeverine adalah obat untuk menangani gejala sindrom iritasi usus besar dan radang usus besar (kolitis). Gejala yang dapat diatasi antara lain nyeri kolik perut, kram perut, perut kembung, sering buang angin, sembelit, atau diare.',
		},
	],
	'Inflammatory Bowel Disease (IBD)': [
		{
			medicine: 'Azathioprine',
			description:
				'Azathioprine berfungsi menghambat sistem kekebalan tubuh agar tidak menyerang usus dan menyebabkan peradangan. ',
		},
		{
			medicine: 'Infliximab',
			description:
				'Infliximab adalah antibodi monoklonal yang bekerja dengan cara memblokir zat kimia alami tubuh bernama faktor nekrosis tumor alfa (TNF-α). Dengan begitu, respon sistem kekebalan tubuh akan menurun dan peradangan akan mereda. Obat ini tidak boleh digunakan sembarangan dan harus sesuai resep dokter.',
		},
		{
			medicine: 'Sulfasalazine',
			description:
				'Sulfasalazine adalah obat antiradang untuk meredakan gejala radang usus, seperti pada kolitis ulseratif atau penyakit Crohn. Obat ini dapat mengatasi gejala berupa nyeri perut, demam, diare, atau perdarahan pada bagian akhir usus besar (rektum). Sulfasalazine bekerja dengan cara menghambat reaksi peradangan di dalam tubuh, termasuk di usus. ',
		},
		{
			medicine: 'Betamethasone Valerate',
			description:
				'Betamethasone valerate tergolong obat golongan kortikosteroid. Obat ini bekerja menghambat pelepasan zat-zat kimia yang memicu munculnya reaksi peradangan.',
		},
	],
};

module.exports = diseaseInfo;
