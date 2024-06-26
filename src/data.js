const data = [
  {
    id: 0,
    name: "Грохот",
    price: "75",
    Image: "RumbleFruit.jpg",
    text: "Фрукт Грохота (англ. Rumble) відомий як неймовірний фрукт для PvP, залежно від навичок та прогнозів Гравця, але при правильному використанні через його велике оглушення та втрата він може бути дуже універсальним для будь-якого комбо, проте користувачі Гуми (англ. Rubber)повністю несприйнятливі до Фрукту Грохота (англ. Rumble). Також вважається, що цей фрукт краще, ніж звичайний, підходить для PvP.",
  },
  {
    id: 1,
    name: "Контроль",
    price: "95",
    Image: "ControlB.jpg",
    text: "Фрукт Контроль (англ. Control) - Міфічний Блокс Фрукт Фізичного типу. Коштує беллі 3.200.000 або Robux 2500 у Дилера Блокс Фруктів. Також із четвертою найнижчою ймовірністю можна отримати у Гачі. Був доданий в Оновленні 10. Має 1.1% шанс бути на складі у дилера і 1.89% шанс спати на карті.",
  },
  {
    id: 2,
    name: "Леопард",
    price: "200",
    Image: "LeopardB.jpg",
    text: "Фрукт Леопард (англ. Leopard) - Міфічний Блокс Фрукт Звіриного типу. Коштує 5,000,000 беллі або Robux 3000 у Дилера Блокс Фруктів. Також із найнижчою ймовірністю можна отримати у Гачі. Було додано в Оновленні 17, Частина 3.",
  },
  {
    id: 3,
    name: "Тісто",
    price: "150",
    Image: "DoughB.jpg",
    text: "Фрукт Тісто (англ. Dough) - Міфічний Блокс Фрукт Елементального типу. Коштує беллі 2.800.000 або Robux 2400 у Дилера Блокс Фруктів. Також з низькою ймовірністю можна отримати у Гачі. Був доданий в Оновленні 9. Має 1.4% шанс бути на складі у дилера і 1.34% шанс спати на карті.",
  },
  {
    id: 4,
    name: "Дух",
    price: "110",
    Image: "SpiritB.jpg",
    text: "Дух (англ. Spirit) - Міфічний Блокс Фрукт Фізичного типу Дух може бути куплений у Дилера Блокс Фруктів за беллі 3,400,000 або Robux 2,550, де шанс його появи дуже низький. Також із дуже маленькою ймовірністю можна отримати у Гачі.",
  },
  {
    id: 5,
    name: "Дракон",
    price: "250",
    Image: "DragonA.jpg",
    text: "Дракон (англ. Dragon) — Міфічний Блокс Фрукт Звірячого типу Дракон на даний момент не може бути куплений у Дилера Блокс Фруктів. Також тимчасово не може бути отриманий у Гачі.",
  },
  {
    id: 6,
    name: "Темний Клинок(Йору)",
    price: "500",
    Image: "DarkBladeO.png",
    text: "Темний Клинок може бути куплений за Robux 1,200 в Геймпас Магазині Темний Клинок може бути подарований гравцю іншим гравцем. Темний Клинок може бути отриманий після вбивства Адміна з невеликим шансом. Після проходження Квеста Сина гравець може отримати білий скін на Темний Клинок. Темний Клинок гравець також отримує Титул #148 Вбивця Бога.",
  },
  {
    id: 7,
    name: "Кіцуне",
    price: "900",
    Image: "KitsuneB.png",
    text: "Кіцуне (англ. Kitsune) - Міфічний Блокс Фрукт Звірячого типу. Кіцуне може бути куплена у Дилера Блокс Фруктів за беллі 8,000,000 або Robux 4,000, де шанс її появи дуже низький. Також із дуже маленькою ймовірністю можна отримати у Гачі.",
  },
  {
    id: 8,
    name: "Т-Рекс",
    price: "150",
    Image: "TRexB.png",
    text: "Т-Рекс (англ. T-Rex) - Міфічний Блокс Фрукт Звіриного типу. Т-Рекс може бути куплений у Дилера Блокс Фруктів за беллі 2,700,000 або Robux 2,350, де шанс його появи дуже низький. Також із дуже маленькою ймовірністю можна отримати у Гачі. Було додано в Оновленні 23.",
  },
  {
    id: 9,
    name: "Будда",
    price: "80",
    Image: "BuddhaA.png",
    text: "Будда (англ. Buddha) - Легендарний Блокс Фрукт Звіриного типу. Будда може бути куплений у Дилера Блокс Фруктів за беллі 1,200,000 або Robux 1,650. Також з низькою ймовірністю можна отримати у Гачі.",
  },
  {
    id: 10,
    name: "Тінь",
    price: "60",
    Image: "ShadowB.png",
    text: "Фрукт Тінь (англ. Shadow) - Міфічний Блокс Фрукт Фізичного типу. Коштує 2.900.000 беллі або Robux 2425 у Дилера Блокс Фруктів. Також з низькою ймовірністю можна отримати у Гачі. Був доданий в Оновленні 16. Має 1.3% шанс бути на складі у Дилера і 100% шанс з'явиться на карті.Скіли",
  },
  {
    id: 11,
    name: "Звук",
    price: "80",
    Image: "SoundA.webp",
    text: "Фрукт Звук (англ. Sound) - Легендарний Блок Фрукт Фізичного типу. Коштує 1700000 беллі або Robux 1900 у Дилера Блокс Фруктів. Також з невеликою ймовірністю можна отримати в Гачі. Було додано в Оновленні 20.",
  },
  {
    id: 12,
    name: "Портал",
    price: "95",
    Image: "PortalB.png",
    text: "Фрукт Портал (англ. Portal) - Легендарний Блокс Фрукт Фізичного типу. Коштує 1,900,000 беллі або Robux 2000 у Дилера Блокс Фруктів. Також із середньо-низькою ймовірністю можна отримати у Гачі. Замінив Фрукт Двері в Оновленні 18 (Раси V4).",
  },
  {
    id: 13,
    name: "Сніг",
    price: "60",
    Image: "BlizzardB.webp",
    text: "Фрукт Сніг (англ. Blizzard) - Легендарний Блокс Фрукт Елементального типу. Коштує 2,400,000 беллі або Robux 2250 у Дилера Блокс Фруктів. Також з низькою ймовірністю можна отримати у Гачі. Було додано в Оновленні 18 (Раси V4).",
  },
  {
    id: 14,
    name: "Фенікс",
    price: "105",
    Image: "PhoenixB.webp",
    text: "Фрукт Фенікс (англ. Phoenix) - Легендарний Блокс Фрукт Звіриного типу. Коштує 1800000 беллі або Robux 2000 у Дилера Блокс Фруктів. Також з низькою ймовірністю можна отримати у Гачі. Було додано в Оновленні 2.",
  },
  {
    id: 15,
    name: "Яд",
    price: "120",
    Image: "VenomB.webp",
    text: "Фрукт Яд (англ. Venom) - Міфічний Блокс Фрукт Фізичного типу. Коштує 3.000.000 беллі або Robux 2450 у Дилера Блокс Фруктів. Також із п'ятою найнижчою ймовірністю можна отримати в Гачі. Було додано в Оновленні 15.",
  },
  {
    id: 16,
    name: "Гравитація",
    price: "40",
    Image: "GravityB.webp",
    text: "Фрукт Гравітація (англ. Gravity) - Міфічний Блок Фрукт Фізичного типу. Коштує 2500000 беллі або Robux 2300 у Дилера Блокс Фруктів. Також з низькою ймовірністю можна отримати у Гачі. Був доданий в Оновленні 5. Має 1.7% шанс бути на складі у Дилера і 1.59% шанс спати на карті.",
  },
  {
    id: 17,
    name: "Світло",
    price: "20",
    Image: "LightB.webp",
    text: "Фрукт Світло (англ. Light) - Рідкісний Блокс Фрукт Елементального типу. Коштує 650 000 беллі або Robux 1100 у Дилера Блокс Фруктів. Також із середньо-низькою ймовірністю можна отримати у Гачі. Був доданий в Оновленні 1. Має 20% шанс бути на складі у Дилера і 13% шанс спати на карті.",
  },
];
export default data;
