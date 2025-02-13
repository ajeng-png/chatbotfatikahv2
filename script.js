const responses = {
    "halo": "Halo juga, ada yang bisa kubantu? 😊",
    "kamu namanya siapa?": "Aku asisten Fatikah nii! 🤖✨",
    "kamu siapa?": "Aku asisten Fatikah nii! 🤖✨",
    "siapa namamu": "Aku asisten Fatikah nii! 🤖✨",
    "siapa kamu?": "Aku asisten Fatikah nii! 🤖✨",
    "fatikah siapa?": "Dia adalah manusia yang sangat cantik dan baik hati. 💖",
    "siapa fatikah?": "Dia adalah manusia yang sangat cantik dan baik hati. 💖",
    "siapa dia?": "Dia adalah manusia yang sangat cantik dan baik hati. 💖",
    "kamu bisa apa": "Aku bisa melakukan apapun, tapi terbatas limit, karena masih proses pengembangan. 🚀",
    "jelaskan tentang izzah": "Izzah adalah salah satu teman dekat Fatikah yang baik hati, dan selalu membantu Fatikah. Izzah adalah teman Fatikah dari SD hingga saat ini. Fatikah nitip pesan buat Izzah: 'Semoga kita selalu berteman sampai kapanpun ya, sampai jannah-Nya, AAMIIN. Udah ya Izzah!' 💕",
    "jelaskan tentang arikah": "Arikah adalah salah satu teman dekat Fatikah yang sangat lemah lembut dan baik hati. Hatinya itu murni sekali, tidak ragu membantu teman yang sedang kesusahan. Terus jadi manusia baik ya Arikah! Kata Fatikah buat kamu: 'Semoga kita selalu berteman sampai kapanpun ya, sampai Jannah-Nya, AAMIIN.' 😊💖",
    "jelaskan tentang salma": "salma adalah salah satu teman dekat fatikah, salma sangat rajin bersih bersih dan rajin belajar, pokonya mashaAllah deh, ohiya dia juga sering berantem sama uni sumayyah wkwkw. Fatikah nitip pesan buat salma : 'semoga kita selalu bertemen sampai kapanpun ya, sampai Jannah-Nya, AAMIIN.💕", 
    "jelaskan tentang meish" : "Meish atau rumaysha' adalah salah satu teman dekat fatikah, dia anaknya beneran se wow dan se mashaAllah itu, kalau kalian ketemu meish pasti bakal ngefan berat sama meish. Dia juga mahir apa apa lhooo mashaAllah Tabarakallah.Fatikah nitip pesan buat meish: 'semoga kita selalu bertemen sampai kapanpun ya, sampai Jannah-Nya, AAMIIN.💕",
    "jelaskan tentang rumaysha'" : "Meish atau rumaysha' adalah salah satu teman dekat fatikah, dia anaknya beneran se wow dan se mashaAllah itu, kalau kalian ketemu meish pasti bakal ngefan berat sama meish. Dia juga mahir apa apa lhooo mashaAllah Tabarakallah.Fatikah nitip pesan buat meish: 'semoga kita selalu bertemen sampai kapanpun ya, sampai Jannah-Nya, AAMIIN.💕 ",
    "jelaskan tentang sumayyah": "Sumayyah atau uni sumayyah adalah teman kesyangan fatikah, wkww. sedikit galak tapi tetep menyenangkan kalau bertemen sama dia, anaknya juga rajin mandi lho,uni jangan lupa senyum ya, kamu kalau senyum tu manis banget. Fatikah nitip pesan buat uni: 'semoga kita selalu bertemen sampai kapanpun ya, sampai Jannah-Nya, AAMIIN.💕",
    "jelaskan tentang intan" : "Intan adalah salah satu teman dekat fatikah, intan tu anaknya seru dan sering ketawa, wajahnya adem kayak ubin masjid, pokoknya positive vibes banget mashaAllah. Fatikah Nitip pesan buat intan : 'semoga kita selalu bertemen sampai kapanpun ya, sampai Jannah-Nya, AAMIIN.💕",
    "jelaskan tentang fani" : "Fani atau Andariani adalah salah satu teman dekat Fatikah, dia anaknya sangat sangat rajin belajar, pokoknya panutan banget mashaAllah, dia tau mana yang harus di prioritasin, jadi keren deh. Fatikah nitip pesan buat fani: 'semoga kita selalu bertemen sampai kapanpun ya, sampai Jannah-Nya, AAMIIN.💕",
    "jelaskan tentang andariani" : "Fani atau Andariani adalah salah satu teman dekat Fatikah, dia anaknya sangat sangat rajin belajar, pokoknya panutan banget mashaAllah, dia tau mana yang harus di prioritasin, jadi keren deh. Fatikah nitip pesan buat fani: 'semoga kita selalu bertemen sampai kapanpun ya, sampai Jannah-Nya, AAMIIN.💕",
    "terima kasih": "Sama-sama! Senang bisa membantu. 😊",
    "bye": "Sampai jumpa lagi! 👋"
};

function getResponse(userInput) {
    userInput = userInput.toLowerCase(); // Biar case insensitive
    for (let key in responses) {
        if (userInput.includes(key)) {
            return responses[key];
        }
    }
    return "Hmm... aku kurang paham. Bisa dijelaskan lagi? 🤔";
}

function sendMessage() {
    const userInput = document.getElementById("userInput").value;
    if (userInput.trim() === "") return;

    const chatBox = document.getElementById("chatBox");
    chatBox.innerHTML += `<p><strong>Kamu:</strong> ${userInput}</p>`;
    chatBox.innerHTML += `<p><strong>Chatbot:</strong> ${getResponse(userInput)}</p>`;

    document.getElementById("userInput").value = "";
    chatBox.scrollTop = chatBox.scrollHeight;
}

function handleKeyPress(event) {
    if (event.key === "Enter") {
        sendMessage();
    }
}

