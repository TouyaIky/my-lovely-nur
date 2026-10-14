// ===== SEMUA KONTEN PERSONAL ADA DI SINI =====
// Path media relatif terhadap folder public/ (contoh: "images/foto-1.jpg").
// Kosongkan string ("") untuk media yang belum ada: placeholder rapi akan tampil.
export const content = {
  recipient: 'Nazwa Nur Ramdhani',
  birthday: '2026-10-16',               // format YYYY-MM-DD
  birthdayLabel: '16 October 2026',
  title: 'For My Lovely Nur',
  subtitle: 'A little universe, made to celebrate you.',
  greeting: 'Today is about you. The person you are, the dreams you carry, and all the beautiful things still waiting for you. I hope this new chapter brings you more reasons to smile, more courage to grow, and more moments that make life feel meaningful.',
  heroImage: 'images/Nur-hero.jpg',
  buttons: { open: 'Open Your Little Surprise', letter: 'Open My Letter', wish: 'Another Little Wish' },

  // Edit caption (dan tanggal, opsional) tiap foto di bawah ini. Urutan = urutan di galeri.
  // `id` harus unik; `src` = nama file di public/images/.
  photos: [
    { id: 'photo-1', src: 'images/foto-01.jpg', alt: 'Foto kenangan 1', caption: 'Ini adalah foto dimana hari kita pertama kali bertemu, mungkin saat itu kita masih belum meperhatikan satu sama lain. Tapi yang paling aku ingat di foto ini adalah kamu dan teman temanmu jalan bergelombolan wkwkw, seingat aku ya kita sempat ketemu di lobby pas kamu lagi bareng ulin dkk sebelum masuk ruangan. Soalnya disitu si arya ada negur ulin terus kalian stop deh', date: '10 September 2025' },
    { id: 'photo-2', src: 'images/foto-02.jpg', alt: 'Foto kenangan 2', caption: 'Ini adalah foto setahun lalu, tanggal yg sama di ulang tahunmu yg ke 19 tahun, momen pertama kali kita telfonan secara tidak langsung juga(walau telfon grup sih tapi yaudahlah ya) disitu aku mantengin kamu mulu, nih anak kok lesu kali maknya ku ss. Atau ini juga pertama kali aku tertarik ama kamu (?)', date: '' },
    { id: 'photo-3', src: 'images/foto-03.jpg', alt: 'Foto kenangan 3', caption: 'Ini adalah foto bareng pertama kita, aku kaget tau pas kamu mau. nih anak kok mau sih wkwkw padahl disitu aku suka buat jegkel kamu, suka usilin kamu, suka godain kamu, suka kamu (?)', date: '' },
    { id: 'photo-4', src: 'images/foto-04.jpg', alt: 'Foto kenangan 4', caption: 'Ini adalah momen dimana aku mulai sadar bahwa aku bener bener tertarik ama kmu, dimana aku mulai nunjukin ke kamu kalau aku cemburu, tapi kamu responnya gituu huhuhu. Habis ini aku mulai gencer ngejer kamu kan wkwkwk', date: '' },
    { id: 'photo-5', src: 'images/foto-05.jpg', alt: 'Foto kenangan 5', caption: 'Foto bareng kita pas kita udah mulai deket yeay, Jujur disini aku deg degan parah, apalagi pas kamu makai pakaian santai kek gitu kamu betul betul cantik banget, hari itu aku muji kamu langsung kan yaa. Disitu juga kamu masih bilang ke temen temenmu kalau kamu masih gak suka ama aku', date: '' },
    { id: 'photo-6', src: 'images/foto-06.jpg', alt: 'Foto kenangan 6', caption: 'Photobooth pertama kita yg berdua doang, ini juga momen sebelum kita pacarannn. kita matahin kutukan photobooth yg bilang kalau photobooth duluan sebelum pacaran bakal gak bisa pacarann, dan sejam setelah kita photobooth kita jadiannn', date: '' },
    { id: 'photo-7', src: 'images/foto-07.jpg', alt: 'Foto kenangan 7', caption: 'Foto pertama kita pegangan tangan setelah kita jadiann, jujur deg degan parahhhh, ini first time buatku juga loh btw', date: '' },
    { id: 'photo-8', src: 'images/foto-08.jpg', alt: 'Foto kenangan 8', caption: 'Foto berdua setelah jadian, jujur di saat itu aku masih gak percaya kita jadian, kek anjayy aku pacaran ama nazwa orang yg selalu ku usilin', date: '' },
    { id: 'photo-9', src: 'images/foto-09.jpg', alt: 'Foto kenangan 9', caption: 'Minizoo date kitaaa, disini aku seneng BANGETTTT ya karena aku bisa main ama hewan bareng kamuu, kamu bisa liat sisiku yg suka banget  ama hewann, kayaknya ini adalah salah satu momen terindah ku ama kamu dehh', date: '' },
    { id: 'photo-10', src: 'images/foto-10.jpg', alt: 'Foto kenangan 10', caption: 'Photobooth terakhir kitta sebelum pulang, sedih pisah ama kamu 3 bulan, pas di kosan baru terasa bnget sedihnya kayak sksdkedkefk gak bisa di deskripsikan lah yaa ', date: '' }
  ],

  music: { title: 'Seasons', artist: 'wave to earth', src: 'audio/lagu.mp3' }, // src: "audio/lagu.mp3"

  timeline: [
    { id: 'm1', title: 'When We First Met', date: '', text: 'Seperti yang aku bilang di foto 1, pas kamu pertama kali kita ketemu tuh kamu bergelombolan wkwk kek pen tawuran gitu, kamu panglima perangnya tentunya wkwkwk', image: '' },
    { id: 'm2', title: 'When We Started Getting Closer', date: '', text: 'Kita makin dekat tuh pas ulang tahun nya si paskalis gak sih?? semenjak itu kita jadi makin sering interaksi, sering nge chet, telfonan sampai kita sadar kita sudah saling suka satu sama lain', image: '' },
    { id: 'm3', title: 'A Memory I Still Remember', date: '', text: 'Momen yang paling aku ingat adalah saat kamu masakin aku, aku bener bener happy pas kamu masakin aku, soalnya kamu udh beberpa kali di kode gak peka pekaa. tapi makasih yaa udah masakin akuuu masaknya ENAK BUANGETT', image: '' },
    { id: 'm4', title: 'A Little Moment That Made Me Smile', date: '', text: 'Momen yang bikin aku senyum senyum sendiri sih pas kita minizoo date, pas kamu interaksi ama hewann, itu lucu banget sumpahh makanya aku suka fotoin kamu pas lagi interaksi ama hewann', image: '' },
    { id: 'm5', title: 'More Memories Along the Way', date: '', text: 'Gimanapun kedepannya hubungan kita, momen momen yang kita udh lewati bersama ini akan ku ingat dan akan aku syukuri, bertemu seorang wanita yg baik dan sepengertian kamuu, aku berharap yang terbaik untukmu', image: '' }
  ],

  cards: [
    { id: 'c1', category: 'A Little Thing I Love About You', text: 'Aku suka saat kamu ketwa dengan bebas' },
    { id: 'c2', category: 'Something I Admire About You', text: 'Kamu mau ngertiin aku, kamu mau denger dari berbagai sudut pandang, kamu gak egois,' },
    { id: 'c6', category: 'Something I Hope You Never Forget', text: 'Aku berharap bagainapaun kisah kita kedepannya, jadikan momen yang udah kita lewati jadi pelajaran untuk kita, jadi kenangn satu sama lain' },
    { id: 'c7', category: 'A Moment I Am Grateful For', text: 'Banyak momen yang membuatku bersyukur memiliki seorang nazwa, ketika kamu mau dengerin ceritaku, mau mahamin diriku, mau dengerin alasanku ketika kamu marah, kamu gak mentingin ego sendiri, kamu mau berubah demi aku, kamu mau nurunin gengsi mu buat aku, banyak deh yaa, yang pasti aku beryukur jadi pacarmu nazwa nur ramadhani' },
  ],
  // Terbuka setelah 3 foto berbeda dilihat di lightbox. TIDAK diperlukan untuk membuka surat.
  hidden: { title: 'You found it', text: 'I love you nazwa miss u too, aku gak tau kamu bisa buka ini atau enggak sih tapi jujur aku juga rindu banget ama kmu' },

  wishes: [
    { id: 'w1', category: 'Happiness', text: 'Semoga tahun ini penuh dengan sesuatu yang bisa bikin kamu bahagia, tersenyum dan tertawa' },
    { id: 'w2', category: 'Courage', text: 'Semoga kamu semakin berani dalam mengutarakan pendapatmu dan semakin berani dalam melakukan segala sesuatu yang sebenarnya kamu bisa cuma kamu ragu ragu' },
    { id: 'w3', category: 'Growth', text: 'Semoga kamu terus tumbuh menjadi versi terbaik mu, bukan versi terbaik menurut orang lain' },
    { id: 'w4', category: 'Peace', text: 'Semoga hatimu senang, harimu riang dan malam mu tenang ' },
    { id: 'w5', category: 'New Experiences', text: 'Semoga kamu bisa menemukan sesuatu yang baru yang bisa membuat hidupmu lebih bahagia' },
    { id: 'w6', category: 'Dreams and Achievements', text: 'Semoga segala sesuatu yang kamu impikan bisa terwujud ' }
  ],

  // DRAFT SURAT — baca ulang dan tulis dengan suaramu sendiri sebelum dibagikan.
  // Teks fitur "tulis harapan" (dikirim ke email lewat EmailJS, lihat README bagian F)
  wishWrite: {
    title: 'A Little Wish for Your Birthday',
    intro: 'Before we continue, I want to give you a little space to wish for something. It can be a dream, a hope, or anything your heart is wishing for. Write it down and send it into the universe.',
    placeholder: 'If you could wish for anything, what would it be?',
    send: 'Send My Wish', sending: 'Sending…', retry: 'Try Again',
    sent: 'Your wish has been sent into the universe.',
    error: 'Maaf, harapanmu belum terkirim. Tulisanmu masih aman di sini — coba lagi sebentar lagi.'
  },

  // Kotak hadiah kecil di bagian Wishes. Edit teksnya.
  gift: { title: 'A little gift', text: 'Hadiahnya nyusul ya hehehe' },

  letter: [
    'Selamat ulang tahun, Nazwa Nur Ramadhani',
    'Jujur aku bingung mau nulis apa, aku gak pandai berkata kata, tapi aku berusaha nulis surat ini ya, jangan di judge hehe',
    'Hari ini adalah awal baru hidupmu, memasuki usia 20 tahun, mendaki satu anak tangga kedewasaan. ku harap dunia semakin baik terhadapmu. Karena kamu akan menghadapi lebih banyak tantangan dalam hidupmu. Sebenarnya aku sudah memikirkan ulang tahunmu, aku udah mikirin kadonya, surprisenya banyak deh yaa, aku udah mikirin juga kegiatan kita nanti pas aku udah alik cikarang, tapi sayangnya gak ada satupun yang aku rencanakan yang bisa aku lakukan sekarang, maaf ya. Aku berharap semoag dengan bertambah nya umurmu bertambah juga kebahagiaanmu, dengan atau tanpanya diriku',
    'Aku mendoakan yang terbaik untukmu, semoga apapun yang kamu impikan bisa terwujud, semoga umur panjang dan disertai denga kesehatan yang baik, semoga kamu dan sekelurga selalu dalam lindungan allah',
    'Mungkin aku gak bisa buatin sesuatu yang spesial banget untukmu, tapi aku harap apa yang telah aku buat, apa yang telah aku ketik bisa kamu baca dengan baik, segala yang telah kamu baca adalah kejujuran dan ketulusan hatiku. Sekali lagi selamat ulang tahun Nazwaaa ketahuilah aku sangat beryukur punya kamu'
  ],
  sign: '— Ahmad Rizki Mubarak',
  closing: { title: 'Happy Birthday, My Lovely Nur.', text: 'Semoga kamu mendapatkan yang terbaik untukmuu' }
}
