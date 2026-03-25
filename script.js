const heartButton = document.getElementById("heartButton");
const card = document.getElementById("card");
const cardImage = document.getElementById("cardImage");
const cardText = document.getElementById("cardText");
const audioPlayer = document.getElementById("audioPlayer");
audioPlayer.loop = true;

const items = [
  {
    image: "images/1.JPG",
    text: "Желаю тебе турбулентности только в зарплате и только вверх (Асема)",
    audio: "audio/audio1.mp3"
  },
  {
    image: "images/2.JPG",
    text: "Желаю тебе чакру денег, открытую как duty free (Асема)",
    audio: "audio/audio2.mp3"
  },
  {
    image: "images/3.JPG",
    text: "Пусть твой татарин спорит с тобой только о том, кто больше любит (Асема)",
    audio: "audio/audio3.mp3"
  },
  {
    image: "images/4.JPG",
    text: "Желаю тебе страсти как в восточном сериале, но без трагедий (Асема)",
    audio: "audio/audio4.mp3"
  },

  {
    image: "images/5.JPEG",
    text: "Пусть твои сторис будут горячее дубайского солнца (Асема)",
    audio: "audio/audio1.mp3"
  },

  {
    image: "images/6.JPG",
    text: "Пусть Вселенная оформит тебе подписку на удачу (Асема)",
    audio: "audio/audio1.mp3"
  },

  {
    image: "images/7.JPG",
    text: "Пусть твоя карма летает только прямыми рейсами (Асема)",
    audio: "audio/audio1.mp3"
  },

  {
    image: "images/8.JPG",
    text: "Желаю тебе такой манифестации, чтобы Вселенная брала у тебя консультации (Асема)",
    audio: "audio/audio1.mp3"
  },

  {
    image: "images/9.JPG",
    text: "Желаю тебе шопинг без лимитов и совести (Асема)",
    audio: "audio/audio1.mp3"
  },

  {
    image: "images/10.jpg",
    text: "Пусть он смотрит на тебя так, будто ты последний чак-чак на столе (Асема)",
    audio: "audio/audio1.mp3"
  },
  {
    image: "images/11.jpg",
    text: "Пусть теперь твой каждый день как день рождения.. (Дания)",
    audio: "audio/audio1.mp3"
  },
  {
    image: "images/12.jpg",
    text: "Сияй как звезда (Дания)",
    audio: "audio/audio1.mp3"
  },
  {
    image: "images/13.JPG",
    text: "30 — это не возраст, а уровень! Пусть жизнь будет роскошной как первый класс. Нет, как private jet! (Дания)",
    audio: "audio/audio1.mp3"
  },{
    image: "images/14.jpg",
    text: "30 — это когда красота, ум и опыт собрались в идеальной пропорции. Наслаждайся и покоряй вершины! (Дания)",
    audio: "audio/audio1.mp3"
  },
  {
    image: "images/15.JPG",
    text: "Желаю тебе всего, что нельзя купить. И всего, что можно! (Дания)",
    audio: "audio/audio1.mp3"
  },
  {
    image: "images/16.JPG",
    text: "Пусть каждый день приносит тебе маленькое чудо и большое счастье (Дания)",
    audio: "audio/audio1.mp3"
  },
  {
    image: "images/17.jpg",
    text: "Спокойных паксов и легких рейсов! (Дания)",
    audio: "audio/audio1.mp3"
  },
  {
    image: "images/18.jpg",
    text: "Любви, восхищения, обожания, гармонии и счастья! (Дания)",
    audio: "audio/audio1.mp3"
  },
  {
    image: "images/19.jpg",
    text: "Пусть твоя жизнь будет как Wi-Fi — всегда подключена к счастью и без пароля (Дания)",
    audio: "audio/audio1.mp3"
  },
  {
    image: "images/20.jpg",
    text: "Желаю, чтобы твои ночи были горячее, чем лето в Дубае (Дания)",
    audio: "audio/audio1.mp3"
  },
  {
    image: "images/21.jpg",
    text: "Желаю, чтобы твоя жизнь была как идеальный секс — долго, страстно и с хэппи-эндом (Дания)",
    audio: "audio/audio1.mp3"
  },
  {
    image: "images/22.jpg",
    text: "Летай не только по работе, но и по жизни! ✈️ (Нури)",
    audio: "audio/audio1.mp3"
  },
  {
    image: "images/23.JPG",
    text: "Кайфуй от каждого дня, как от отпуска!💚 (Нури)",
    audio: "audio/audio1.mp3"
  },
  {
    image: "images/24.JPG",
    text: "Выбирай только то, что по кайфу людей, города и планы! (Нури)",
    audio: "audio/audio1.mp3"
  },
  {
    image: "images/25.jpg",
    text: "Оставайся собой, такой же яркой звездой! (Нури)",
    audio: "audio/audio1.mp3"
  },
  {
    image: "images/26.jpg",
    text: "Будь нежной как цветок 🌸 и в то же время такой сильной! 💪 (Нури)",
    audio: "audio/audio1.mp3"
  },
  {
    image: "images/27.JPG",
    text: "Пусть твоя жизнь будет как идеальный отпуск, который никогда не заканчивается 🏖️ (Нури)",
    audio: "audio/audio1.mp3"
  },
  {
    image: "images/28.jpg",
    text: "Оставайся такой же яркой, стильной и абсолютно восхитительной богиней!!! (Нури)",
    audio: "audio/audio1.mp3"
  },
  {
    image: "images/29.JPG",
    text: "Порхай как бабочка, раз*бывай как иранские ракеты! (Алуа)",
    audio: "audio/audio1.mp3"
  },
  {
    image: "images/30.jpg",
    text: "Пусть вся планета будет домом (Алуа)",
    audio: "audio/audio1.mp3"
  },
  {
    image: "images/31.jpg",
    text: "Пусть тебе будут подвластны и пространство и время (Алуа)",
    audio: "audio/audio1.mp3"
  },
  {
    image: "images/32.jpg",
    text: "Ешь, молись, люби (Алуа)",
    audio: "audio/audio1.mp3"
  },
  {
    image: "images/33.jpg",
    text: "Летай, блистай, ни о чем не переживай (Алуа)",
    audio: "audio/audio1.mp3"
  },
  {
    image: "images/34.jpeg",
    text: "Несись к своим мечтам на всех воздушных потоках мира (Алуа)",
    audio: "audio/audio1.mp3"
  },
  {
    image: "images/35.JPG",
    text: "Покаряй вершины и сердца! (Алуа)",
    audio: "audio/audio1.mp3"
  },
  {
    image: "images/36.jpeg",
    text: "Пусть приключений хватит на целую книгу! (Алуа)",
    audio: "audio/audio1.mp3"
  },
  {
    image: "images/37.jpeg",
    text: "Если разонравятся самолеты, мы купим тебе метлу! (Алуа)",
    audio: "audio/audio1.mp3"
  },

{
    image: "images/38.jpeg",
    text: "Пусть на запрос по деньгам - всегда выпадает десятка пентаклей! (Алуа)",
    audio: "audio/audio1.mp3"
  },
  {
    image: "images/39.jpeg",
    text: "Пусть наша дружба продлится овердох*я!!! (Алуа)",
    audio: "audio/audio1.mp3"
  },
  {
    image: "images/40.jpeg",
    text: "Желаю тебе такой гибкости, чтобы ты могла завязывать шнурки, не наклоняясь (Айя)",
    audio: "audio/audio1.mp3"
  },
  {
    image: "images/41.jpeg",
    text: "Пусть в каждом путешествии тебе попадается хотя бы один красавчик (Айя)",
    audio: "audio/audio1.mp3"
  },
  {
    image: "images/42.jpeg",
    text: "Желаю, чтобы коврик для йоги всегда разворачивался сам - и я щас не только про йогу (Айя)",
    audio: "audio/audio1.mp3"
  },
  {
    image: "images/43.jpeg",
    text: "Пусть твои фотки в путешествиях получаются так, будто ты не 40 дублей делала, а просто «случайно получилась богиней» (Айя)",
    audio: "audio/audio1.mp3"
  },
  {
    image: "images/44.jpeg",
    text: "Пусть твоя жизнь будет как идеальная тренировка: немного сложно, местами больно, но в итоге — кайф и результат (Айя)",
    audio: "audio/audio1.mp3"
  },
  {
    image: "images/45.jpeg",
    text: "Пусть твоя йога будет настолько просветляющей, что даже индусы говорят тише (Айя)",
    audio: "audio/audio1.mp3"
  },
  {
    image: "images/46.jpeg",
    text: "Желаю, чтобы чемодан всегда закрывался с первого раза (Айя)",
    audio: "audio/audio1.mp3"
  },
  {
    image: "images/47.jpeg",
    text: "Пусть на рейсах все пассажиры пахнут нишевым парфюмом (Айя)",
    audio: "audio/audio1.mp3"
  },
  {
    image: "images/48.jpeg",
    text: "Пусть даже дальние перелеты будут ощущаться как поездка на Яндексе воскресным утром (Айя)",
    audio: "audio/audio1.mp3"
  },
  {
    image: "images/49.jpeg",
    text: "Всегда оставайся моей брошкой! (Айя)",
    audio: "audio/audio1.mp3"
  },
];

const backgrounds = [
  "linear-gradient(135deg, #ffd6e7, #ffeccf)",
  "linear-gradient(135deg, #c9f9ff, #d9d4ff)",
  "linear-gradient(135deg, #ffe29f, #ffa99f)",
  "linear-gradient(135deg, #b8f2e6, #f9f871)",
  "linear-gradient(135deg, #fbc2eb, #a6c1ee)",
  "linear-gradient(135deg, #ffecd2, #fcb69f)"
];

let isFirstClick = true;
let lastIndex = -1;
let isAnimating = false;

function getRandomIndex() {
  if (items.length === 1) return 0;

  let newIndex;
  do {
    newIndex = Math.floor(Math.random() * items.length);
  } while (newIndex === lastIndex);

  lastIndex = newIndex;
  return newIndex;
}

function setRandomBackground() {
  const bg = backgrounds[Math.floor(Math.random() * backgrounds.length)];
  document.body.style.background = bg;
}

function showRandomCard() {
  const index = getRandomIndex();
  const item = items[index];

  cardImage.src = item.image;
  cardText.textContent = item.text;

  if (!audioPlayer.src) {
  audioPlayer.src = "weareyoung.mp4"; // твой один трек
  audioPlayer.play().catch(() => {});
}
}

heartButton.addEventListener("click", () => {
  if (isAnimating) return;
  isAnimating = true;

  setRandomBackground();

  if (isFirstClick) {
    showRandomCard();

    heartButton.classList.add("moved");
    card.classList.remove("hidden", "hide-down");
    card.classList.add("show");

    isFirstClick = false;

    setTimeout(() => {
      isAnimating = false;
    }, 850);

    return;
  }

  card.classList.remove("show");
  card.classList.add("hide-down");

  setTimeout(() => {
    showRandomCard();

    card.classList.remove("hide-down");
    void card.offsetWidth;
    card.classList.add("show");

    setTimeout(() => {
      isAnimating = false;
    }, 850);
  }, 800);
});
