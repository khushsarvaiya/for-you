// ==========================================
// ELEMENTS
// ==========================================

const envelope = document.getElementById("envelope");
const flap = document.getElementById("flap");
const preview = document.querySelector(".letter-preview");

const hero = document.getElementById("hero");

const letterPage = document.getElementById("letterPage");
const paper = document.querySelector(".paper");

const typedText = document.getElementById("typedText");

const closeLetter = document.getElementById("closeLetter");

const music = document.getElementById("music");
const musicButton = document.getElementById("musicButton");

const heartButton = document.getElementById("heartButton");

// ==========================================
// LETTER CONTENT
// Replace this with your own apology later
// ==========================================

const message = `

My Dearest Purva,

If you're reading this, thank you for taking the time to open my little letter. I know I can't be there with you right now, and honestly, that's one of the hardest parts about all of this. More than anything, I wish I could sit beside you, hold your hand, hug you, and tell you how sorry I am face to face.

I know I hurt you today.

I know I raised my voice, and I know I said things that I should never have said. No matter how frustrated, hurt, or overwhelmed I was feeling in that moment, it doesn't justify speaking to you that way. You didn't deserve those words from someone who is supposed to love and protect your heart. I am truly sorry.

I've been thinking about us a lot, and I know we've both been carrying the weight of this distance for a long time. It feels like we keep making promises to communicate better, trust each other more, and handle things differently, but somehow we end up in the same place again. Every time it happens, I get frustrated because I want us to be happy so badly. Somewhere in that frustration, I lose sight of the fact that we're supposed to be on the same team, not fighting against each other.

I'm not writing this to excuse what I did. I'm writing it because I want you to know what's in my heart. I don't want my anger to be louder than my love for you.

Even after everything, I still look at you and see the person I want to build a future with. I still believe in us. I still believe that what we have is worth fighting for.

Long distance has tested us in ways neither of us expected. It has made misunderstandings feel bigger, made silence feel heavier, and made small moments of frustration grow into much larger arguments. I know it hasn't been easy for either of us.

But I also know that distance isn't forever.

I don't want our story to be remembered for the arguments we've had. I want it to be remembered for the way we chose each other, even when things became difficult.

I'm not asking you to pretend today didn't happen. I'm not asking you to forget how I made you feel.

I'm asking if we can talk.

Really talk.

Not to decide who's right or wrong, but to understand each other better. To figure out what keeps hurting us and how we can stop repeating the same cycle. I don't want us to keep carrying the same pain into every new conversation.

You are still my favorite person.

You are still the one I want to tell everything to.

You are still the person I miss at the end of every day.

And you're still the person I hope I'll get to hug soon instead of writing letters through a screen.

Thank you for being patient with me even when I make it difficult. Thank you for loving me through moments when I haven't made it easy. I know I still have things to work on, and I promise I'll keep trying to become a better partner, not just because I said I would, but because you deserve that version of me.

If there's one thing I hope you take away from this letter, it's this:

I love you.

Not just when things are easy.

Not just when we're laughing together.

I love you enough to admit when I'm wrong, to apologize sincerely, and to keep working on myself because I don't want to lose what we have.

I hope this isn't the end of our chapter.

I hope it's simply the page where we both decide to write a better one together.

Forever yours,

Khush ❤️


`;


// ==========================================
// TYPEWRITER
// ==========================================

let typingIndex = 0;

function typeWriter(){

    if(typingIndex >= message.length) return;

    typedText.innerHTML += message.charAt(typingIndex);

    typingIndex++;

    setTimeout(typeWriter,25);

}


// ==========================================
// OPEN LETTER
// ==========================================

let opened = false;

envelope.addEventListener("click",()=>{

    if(opened) return;

    opened = true;

    // Open flap

    flap.style.transform="rotateX(180deg)";

    // Pull letter out

    setTimeout(()=>{

        preview.style.transform="translateY(-170px)";

    },350);

    // Open full screen letter

    setTimeout(()=>{

        letterPage.classList.add("active");

        paper.style.transform="scale(1)";

        paper.style.opacity="1";

        typedText.innerHTML="";

        typingIndex=0;

        typeWriter();

    },1100);

});


// ==========================================
// CLOSE LETTER
// ==========================================

closeLetter.addEventListener("click",()=>{

    letterPage.classList.remove("active");

    paper.style.transform="scale(.15)";

    paper.style.opacity="0";

    flap.style.transform="rotateX(0deg)";

    preview.style.transform="translateY(0px)";

    typedText.innerHTML="";

    typingIndex=0;

    opened=false;

});


// ==========================================
// MUSIC BUTTON
// ==========================================

let playing=false;

musicButton.addEventListener("click",()=>{

    if(!playing){

        music.play();

        playing=true;

        musicButton.innerHTML="⏸";

    }

    else{

        music.pause();

        playing=false;

        musicButton.innerHTML="🎵";

    }

});

// ==========================================
// FALLING PETALS
// ==========================================

function createPetal(){

    const petal=document.createElement("div");

    petal.className="petal";

    petal.innerHTML="🌸";

    petal.style.left=Math.random()*100+"vw";

    petal.style.animationDuration=(7+Math.random()*6)+"s";

    petal.style.fontSize=(18+Math.random()*20)+"px";

    document.getElementById("petals").appendChild(petal);

    setTimeout(()=>{

        petal.remove();

    },13000);

}

setInterval(createPetal,900);


// ==========================================
// FLOATING HEARTS
// ==========================================

function floatingHeart(){

    const heart=document.createElement("div");

    heart.innerHTML="🤍";

    heart.style.position="fixed";

    heart.style.left=Math.random()*100+"vw";

    heart.style.bottom="-40px";

    heart.style.fontSize=(16+Math.random()*18)+"px";

    heart.style.opacity=".4";

    heart.style.pointerEvents="none";

    heart.style.zIndex="999";

    document.body.appendChild(heart);

    heart.animate([

        {

            transform:"translateY(0)",

            opacity:.5

        },

        {

            transform:`translateY(-110vh) translateX(${Math.random()*120-60}px)`,

            opacity:0

        }

    ],{

        duration:12000,

        easing:"linear"

    });

    setTimeout(()=>{

        heart.remove();

    },12000);

}

setInterval(floatingHeart,3000);


// ==========================================
// BOUQUET ANIMATION
// ==========================================

const bouquet=document.querySelector(".bouquet");

if(bouquet){

const bouquetObserver=new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

bouquet.animate([

{

opacity:0,

transform:"scale(.4)"

},

{

opacity:1,

transform:"scale(1)"

}

],{

duration:1800,

fill:"forwards",

easing:"ease-out"

});

}

});

});

bouquetObserver.observe(bouquet);

}


// ==========================================
// GALLERY FADE
// ==========================================

const photos=document.querySelectorAll(".photo");

const photoObserver=new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.animate([

{

opacity:0,

transform:"translateY(80px)"

},

{

opacity:1,

transform:"translateY(0)"

}

],{

duration:1200,

fill:"forwards"

});

}

});

});

photos.forEach(photo=>{

photo.style.opacity="0";

photoObserver.observe(photo);

});


// ==========================================
// LOVE CARD FLIP
// ==========================================

document.querySelectorAll(".card").forEach(card=>{

card.addEventListener("click",()=>{

card.style.transform=

card.style.transform==="rotateY(180deg)"

?

"rotateY(0deg)"

:

"rotateY(180deg)";

});

});


// ==========================================
// HEART EXPLOSION
// ==========================================

heartButton.addEventListener("click",()=>{

for(let i=0;i<80;i++){

setTimeout(()=>{

const heart=document.createElement("div");

heart.innerHTML="❤️";

heart.style.position="fixed";

heart.style.left="50vw";

heart.style.top="70vh";

heart.style.fontSize=(15+Math.random()*25)+"px";

heart.style.pointerEvents="none";

heart.style.zIndex="9999";

document.body.appendChild(heart);

heart.animate([

{

transform:"translate(0,0) scale(1)",

opacity:1

},

{

transform:

`translate(${Math.random()*700-350}px,-${500+Math.random()*300}px)
rotate(${Math.random()*720}deg)
scale(0)`,

opacity:0

}

],{

duration:3000,

easing:"ease-out"

});

setTimeout(()=>{

heart.remove();

},3000);

},i*25);

}

});


// ==========================================
// PARALLAX MOON
// ==========================================

window.addEventListener("scroll",()=>{

const moon=document.getElementById("moon");

moon.style.transform=`translateY(${window.scrollY*.08}px)`;

});


// ==========================================
// SECTION FADE-IN
// ==========================================

const sections=document.querySelectorAll("section");

const sectionObserver=new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.animate([

{

opacity:0,

transform:"translateY(100px)"

},

{

opacity:1,

transform:"translateY(0)"

}

],{

duration:1000,

fill:"forwards"

});

}

});

});

sections.forEach(section=>{

section.style.opacity="0";

sectionObserver.observe(section);

});


// ==========================================
// STAR GLOW AT END
// ==========================================

window.addEventListener("scroll",()=>{

const ending=document.getElementById("ending");

const rect=ending.getBoundingClientRect();

if(rect.top<window.innerHeight){

document.getElementById("stars").style.opacity=".8";

}

else{

document.getElementById("stars").style.opacity=".45";

}

});


// ==========================================
// PRELOAD
// ==========================================

window.onload=()=>{

paper.style.opacity="0";

paper.style.transform="scale(.15)";

letterPage.classList.remove("active");

console.log("❤️ Website Loaded");

};