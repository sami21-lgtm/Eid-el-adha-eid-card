document.addEventListener("DOMContentLoaded", () => {
    
    // ১. ব্যাকগ্রাউন্ডের তারা তৈরি করা
    const starsContainer = document.getElementById("starsContainer");
    const starCount = 40;

    for (let i = 0; i < starCount; i++) {
        const star = document.createElement("div");
        star.classList.add("star");
        const size = Math.random() * 3 + 1;
        star.style.width = `${size}px`;
        star.style.height = `${size}px`;
        star.style.top = `${Math.random() * 100}%`;
        star.style.left = `${Math.random() * 100}%`;
        star.style.animationDelay = `${Math.random() * 2}s`;
        starsContainer.appendChild(star);
    }

    // ২. অটোমেটিক পশু পরিবর্তন (Carousel)
    const animals = document.querySelectorAll('.animal');
    let currentIndex = 0;

    setInterval(() => {
        // বর্তমান পশুকে হাইড করা
        animals[currentIndex].classList.remove('active');
        
        // পরের পশুর ইনডেক্স নির্ধারণ
        currentIndex = (currentIndex + 1) % animals.length;
        
        // নতুন পশুকে শো করা
        animals[currentIndex].classList.add('active');
    }, 4000); // প্রতি ৪ সেকেন্ড পর পর পাল্টাবে


    // ৩. ব্যাকগ্রাউন্ড মিউজিক প্লেয়ার সিস্টেম
    const music = document.getElementById("bgMusic");

    function playAudio() {
        music.play().then(() => {
            // গান একবার সফলভাবে চলা শুরু হলে টাচ ইভেন্টগুলো রিমুভ করে দেওয়া হবে
            document.removeEventListener("click", playAudio);
            document.removeEventListener("touchstart", playAudio);
        }).catch(error => {
            console.log("Autoplay আটকেছে, টাচ বা ক্লিক প্রয়োজন:", error);
        });
    }

    // মোবাইল টাচ এবং মাউস ক্লিক উভয়ের জন্যই ইভেন্ট লিসেনার সেট করা হলো
    document.addEventListener("click", playAudio);
    document.addEventListener("touchstart", playAudio);
});
