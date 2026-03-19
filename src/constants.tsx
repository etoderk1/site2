import React from 'react';
import { Package, CreditCard, Apple } from 'lucide-react';

export const CITIES = [
  'Абакан', 'Альметьевск', 'Ангарск', 'Арзамас', 'Армавир', 'Артём', 'Архангельск', 'Астрахань', 'Ачинск',
  'Балаково', 'Балашиха', 'Барнаул', 'Батайск', 'Белгород', 'Бердск', 'Березники', 'Бийск', 'Благовещенск', 'Братск', 'Брянск',
  'Великий Новгород', 'Владивосток', 'Владикавказ', 'Владимир', 'Волгоград', 'Волгодонск', 'Волжский', 'Вологда', 'Воронеж',
  'Грозный', 'Дербент', 'Дзержинск', 'Димитровград', 'Домодедово', 'Евпатория', 'Екатеринбург', 'Елец', 'Ессентуки',
  'Железноводск', 'Жуковский', 'Златоуст', 'Иваново', 'Ижевск', 'Иркутск', 'Йошкар-Ола',
  'Казань', 'Калининград', 'Калуга', 'Каменск-Уральский', 'Камышин', 'Каспийск', 'Кемерово', 'Керчь', 'Киров', 'Кисловодск', 'Ковров', 'Коломна', 'Комсомольск-на-Амуре', 'Копейск', 'Королёв', 'Кострома', 'Красногорск', 'Краснодар', 'Красноярск', 'Курган', 'Курск', 'Кызыл',
  'Липецк', 'Люберцы', 'Магадан', 'Магнитогорск', 'Майкоп', 'Махачкала', 'Миасс', 'Москва', 'Мурманск', 'Муром', 'Мытищи',
  'Набережные Челны', 'Назрань', 'Нальчик', 'Находка', 'Невинномысск', 'Нефтекамск', 'Нефтеюганск', 'Нижневартовск', 'Нижнекамск', 'Нижний Новгород', 'Нижний Тагил', 'Новокузнецк', 'Новокуйбышевск', 'Новомосковск', 'Новороссийск', 'Новосибирск', 'Новочебоксарск', 'Новочеркасск', 'Новошахтинск', 'Новый Уренгой', 'Ногинск', 'Норильск', 'Ноябрьск',
  'Обнинск', 'Одинцово', 'Октябрьский', 'Омск', 'Орёл', 'Оренбург', 'Орехово-Зуево', 'Орск',
  'Пенза', 'Первоуральск', 'Пермь', 'Петрозаводск', 'Петропавловск-Камчатский', 'Подольск', 'Прокопьевск', 'Псков', 'Пушкино', 'Пятигорск',
  'Раменское', 'Ростов-на-Дону', 'Рубцовск', 'Рыбинск', 'Рязань',
  'Салават', 'Самара', 'Санкт-Петербург', 'Саранск', 'Саратов', 'Севастополь', 'Северодвинск', 'Северск', 'Сергиев Посад', 'Серпухов', 'Симферополь', 'Смоленск', 'Сочи', 'Ставрополь', 'Старый Оскол', 'Стерлитамак', 'Сургут', 'Сызрань', 'Сыктывкар',
  'Таганрог', 'Тамбов', 'Тверь', 'Тольятти', 'Томск', 'Тула', 'Тюмень',
  'Улан-Удэ', 'Ульяновск', 'Уссурийск', 'Уфа', 'Хабаровск', 'Хасавюрт', 'Химки',
  'Чебоксары', 'Челябинск', 'Черемхово', 'Череповец', 'Черкесск', 'Чита',
  'Шахты', 'Щёлково', 'Электросталь', 'Элиста', 'Энгельс', 'Южно-Сахалинск', 'Якутск', 'Ярославль'
];

export const CATEGORIES = [
  { id: 1, name: 'Все' },
  { id: 2, name: 'Футболки' },
  { id: 3, name: 'Худи & Свитшоты' },
  { id: 4, name: 'Штаны & Шорты' },
  { id: 5, name: 'Аксессуары' },
];

export const HERO_SLIDES = [
  {
    id: 1,
    title: "НОВАЯ КОЛЛЕКЦИЯ.",
    subtitle: "Эксклюзивный дроп. Лимитированный тираж.",
    image: "https://images.unsplash.com/photo-1523398002811-999aa8e9f5b9?w=1600&q=80"
  }
];

export const PRODUCTS = [
  { 
    id: 1, name: 'Оверсайз Футболка "VOID"', category: 'Футболки', price: 3500, oldPrice: 4200, rating: 4.9, reviews: 128, 
    image: 'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=800&q=80',
      'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800&q=80'
    ],
    isNew: true,
    description: 'Базовая оверсайз футболка из плотного хлопка. Минималистичный принт на груди, спущенный рукав. Идеальная посадка для стритвир лука.',
    history: [4200, 4000, 3800, 3900, 3500, 3500],
    characteristics: [
      { name: 'Состав', value: '100% хлопок' },
      { name: 'Плотность', value: '240 г/м²' },
      { name: 'Крой', value: 'Oversize' },
      { name: 'Принт', value: 'Шелкография' }
    ]
  },
  { 
    id: 2, name: 'Худи "ACID WASH"', category: 'Худи & Свитшоты', price: 6900, oldPrice: 8500, rating: 4.9, reviews: 84, 
    image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=800&q=80',
      'https://images.unsplash.com/photo-1578587018452-892bacefd3f2?w=800&q=80'
    ],
    description: 'Плотное худи с эффектом варки (acid wash). Объемный капюшон, карман-кенгуру, вышивка логотипа на рукаве.',
    history: [8500, 84000, 8200, 7500, 7000, 6900],
    characteristics: [
      { name: 'Состав', value: '80% хлопок, 20% полиэстер' },
      { name: 'Плотность', value: '380 г/м²' },
      { name: 'Обработка', value: 'Acid Wash' },
      { name: 'Крой', value: 'Boxy fit' }
    ]
  },
  { 
    id: 3, name: 'Карго Штаны "TACTICAL"', category: 'Штаны & Шорты', price: 5800, oldPrice: 6500, rating: 4.7, reviews: 32, 
    image: 'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=800&q=80',
      'https://images.unsplash.com/photo-1517438476312-10d79c077509?w=800&q=80'
    ],
    description: 'Широкие карго штаны из прочного рипстопа. Множество карманов, утяжки снизу для регулировки ширины штанины.',
    history: [6500, 6400, 6000, 5900, 5800, 5800],
    characteristics: [
      { name: 'Материал', value: 'Рипстоп (хлопок/нейлон)' },
      { name: 'Карманы', value: '6 штук' },
      { name: 'Крой', value: 'Wide leg' }
    ]
  },
  { 
    id: 4, name: 'Шапка-бини "BASIC"', category: 'Аксессуары', price: 1500, oldPrice: 2000, rating: 4.8, reviews: 210, 
    image: 'https://images.unsplash.com/photo-1576871337622-98d48d1cf531?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1576871337622-98d48d1cf531?w=800&q=80'
    ],
    isNew: true,
    description: 'Классическая шапка-бини в рубчик. Мягкая пряжа, не колется, отлично тянется и сохраняет форму.',
    history: [2000, 1800, 1500, 1500, 1500, 1500],
    characteristics: [
      { name: 'Состав', value: '50% шерсть, 50% акрил' },
      { name: 'Размер', value: 'One size' },
      { name: 'Сезон', value: 'Осень/Зима' }
    ]
  },
  { 
    id: 5, name: 'Зип-худи "CYBER"', category: 'Худи & Свитшоты', price: 7200, oldPrice: 8500, rating: 4.8, reviews: 156, 
    image: 'https://images.unsplash.com/photo-1611312449408-fcece27cdbb1?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1611312449408-fcece27cdbb1?w=800&q=80'
    ],
    description: 'Худи на молнии с металлическим логотипом. Двойной капюшон, надежная металлическая фурнитура YKK.',
    history: [8500, 8000, 7500, 7200, 7200, 7200],
    characteristics: [
      { name: 'Состав', value: '100% хлопок' },
      { name: 'Фурнитура', value: 'YKK' },
      { name: 'Крой', value: 'Relaxed' }
    ]
  },
  { 
    id: 6, name: 'Шоппер "NOISE"', category: 'Аксессуары', price: 2100, oldPrice: 2500, rating: 4.9, reviews: 340, 
    image: 'https://images.unsplash.com/photo-1597444319692-7f9859f518e3?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1597444319692-7f9859f518e3?w=800&q=80'
    ],
    description: 'Вместительный шоппер из плотного канваса. Внутри дополнительный карман для мелочей. Выдерживает до 15 кг.',
    history: [2500, 2300, 2100, 2100, 2100, 2100],
    characteristics: [
      { name: 'Материал', value: 'Канвас (100% хлопок)' },
      { name: 'Плотность', value: '320 г/м²' },
      { name: 'Размер', value: '40x45 см' }
    ]
  }
];

export const PAGES_CONTENT: Record<string, { title: string, content: React.ReactNode }> = {
  'how-to-order': {
    title: 'Как сделать заказ',
    content: (
      <div className="space-y-8 text-[#1D1D1F] dark:text-white/90">
        <div className="bg-white dark:bg-[#1C1C1E] p-8 rounded-none border border-black/10 dark:border-white/10 shadow-sm">
          <h3 className="text-xl font-black uppercase tracking-tighter mb-4 flex items-center gap-3"><span className="w-8 h-8 rounded-none bg-black dark:bg-white text-white dark:text-black flex items-center justify-center text-sm font-black">1</span> Выбор товара</h3>
          <p className="text-[#86868B] font-bold uppercase tracking-wider text-sm">Используйте удобный поиск или навигацию по категориям. На странице товара вы можете ознакомиться с подробным описанием, характеристиками и отзывами других покупателей.</p>
        </div>
        <div className="bg-white dark:bg-[#1C1C1E] p-8 rounded-none border border-black/10 dark:border-white/10 shadow-sm">
          <h3 className="text-xl font-black uppercase tracking-tighter mb-4 flex items-center gap-3"><span className="w-8 h-8 rounded-none bg-black dark:bg-white text-white dark:text-black flex items-center justify-center text-sm font-black">2</span> Оформление</h3>
          <p className="text-[#86868B] font-bold uppercase tracking-wider text-sm">Добавьте понравившиеся товары в корзину. Убедитесь, что вы выбрали правильный город для точного расчета сроков доставки. Проверьте состав заказа и нажмите "Оформить заказ".</p>
        </div>
        <div className="bg-white dark:bg-[#1C1C1E] p-8 rounded-none border border-black/10 dark:border-white/10 shadow-sm">
          <h3 className="text-xl font-black uppercase tracking-tighter mb-4 flex items-center gap-3"><span className="w-8 h-8 rounded-none bg-black dark:bg-white text-white dark:text-black flex items-center justify-center text-sm font-black">3</span> Оплата и получение</h3>
          <p className="text-[#86868B] font-bold uppercase tracking-wider text-sm">Оплатите заказ удобным для вас способом. После оплаты вы сможете отслеживать статус заказа в личном кабинете. Мы уведомим вас, когда заказ будет готов к выдаче.</p>
        </div>
      </div>
    )
  },
  'payment': {
    title: 'Способы оплаты',
    content: (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white dark:bg-[#1C1C1E] p-8 rounded-none border border-black/10 dark:border-white/10 shadow-sm">
          <div className="w-12 h-12 bg-zinc-100 dark:bg-zinc-800 rounded-none flex items-center justify-center mb-6"><CreditCard size={24} /></div>
          <h3 className="text-xl font-black uppercase tracking-tighter mb-3">Банковской картой</h3>
          <p className="text-[#86868B] font-bold uppercase tracking-wider text-sm">Мы принимаем карты Visa, MasterCard и МИР любых банков. Оплата происходит через защищенное соединение.</p>
        </div>
        <div className="bg-white dark:bg-[#1C1C1E] p-8 rounded-none border border-black/10 dark:border-white/10 shadow-sm">
          <div className="w-12 h-12 bg-zinc-100 dark:bg-zinc-800 rounded-none flex items-center justify-center mb-6"><Apple size={24} /></div>
          <h3 className="text-xl font-black uppercase tracking-tighter mb-3">Apple Pay / Google Pay</h3>
          <p className="text-[#86868B] font-bold uppercase tracking-wider text-sm">Быстрая и безопасная оплата в один клик с помощью привязанных к вашему смартфону карт.</p>
        </div>
        <div className="bg-white dark:bg-[#1C1C1E] p-8 rounded-none border border-black/10 dark:border-white/10 shadow-sm md:col-span-2">
          <h3 className="text-xl font-black uppercase tracking-tighter mb-3">Безопасность платежей</h3>
          <p className="text-[#86868B] font-bold uppercase tracking-wider text-sm">Все платежи защищены по стандарту PCI DSS. Мы не храним данные ваших банковских карт. Вся информация передается в зашифрованном виде.</p>
        </div>
      </div>
    )
  },
  'delivery': {
    title: 'Доставка',
    content: (
      <div className="space-y-8">
        <p className="text-lg text-[#86868B] font-bold uppercase tracking-wider mb-8">Мы доставляем заказы по всей территории России. Сроки и стоимость зависят от вашего региона.</p>
        
        <div className="bg-white dark:bg-[#1C1C1E] p-8 rounded-none border border-black/10 dark:border-white/10 shadow-sm">
          <h3 className="text-xl font-black uppercase tracking-tighter mb-6 flex items-center gap-3"><Package className="text-black dark:text-white" /> Курьерская доставка</h3>
          <ul className="space-y-4 text-[#86868B] font-bold uppercase tracking-wider text-sm">
            <li className="flex justify-between items-center border-b border-black/10 dark:border-white/10 pb-4">
              <span>Москва и МО</span>
              <span className="font-black text-black dark:text-white">На следующий день</span>
            </li>
            <li className="flex justify-between items-center border-b border-black/10 dark:border-white/10 pb-4">
              <span>Санкт-Петербург</span>
              <span className="font-black text-black dark:text-white">1-2 дня</span>
            </li>
            <li className="flex justify-between items-center pb-2">
              <span>Регионы РФ</span>
              <span className="font-black text-black dark:text-white">3-7 дней</span>
            </li>
          </ul>
        </div>

        <div className="bg-zinc-100 dark:bg-zinc-900 p-8 rounded-none border border-black/10 dark:border-white/10">
          <h3 className="text-xl font-black uppercase tracking-tighter mb-4">Пункты выдачи</h3>
          <p className="text-[#86868B] font-bold uppercase tracking-wider text-sm">Вы можете забрать свой заказ в одном из 10 000 пунктов выдачи наших партнеров по всей стране. Срок хранения заказа в пункте выдачи — 7 дней.</p>
        </div>
      </div>
    )
  },
  'about': {
    title: 'О нас',
    content: (
      <div className="space-y-8">
        <div className="aspect-[21/9] rounded-none overflow-hidden mb-12 border border-black/10 dark:border-white/10">
          <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1600&q=80" alt="Office" className="w-full h-full object-cover grayscale" referrerPolicy="no-referrer" />
        </div>
        <h3 className="text-2xl font-black uppercase tracking-tighter">HYPE — это больше, чем просто магазин.</h3>
        <p className="text-[#86868B] text-lg leading-relaxed font-bold uppercase tracking-wider text-sm">
          Мы создали платформу, где уличная культура встречается с эксклюзивным дизайном. Наша цель — дать тебе доступ к самым свежим дропам и лимитированным коллекциям. Мы тщательно отбираем каждый айтем, чтобы гарантировать аутентичность и стиль.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8">
          <div className="p-6 bg-white dark:bg-[#1C1C1E] rounded-none border border-black/10 dark:border-white/10 text-center shadow-sm">
            <div className="text-4xl font-black uppercase tracking-tighter text-black dark:text-white mb-2">100K+</div>
            <div className="text-sm text-[#86868B] font-bold uppercase tracking-wider">В комьюнити</div>
          </div>
          <div className="p-6 bg-white dark:bg-[#1C1C1E] rounded-none border border-black/10 dark:border-white/10 text-center shadow-sm">
            <div className="text-4xl font-black uppercase tracking-tighter text-black dark:text-white mb-2">50+</div>
            <div className="text-sm text-[#86868B] font-bold uppercase tracking-wider">Эксклюзивных дропов</div>
          </div>
          <div className="p-6 bg-white dark:bg-[#1C1C1E] rounded-none border border-black/10 dark:border-white/10 text-center shadow-sm">
            <div className="text-4xl font-black uppercase tracking-tighter text-black dark:text-white mb-2">24/7</div>
            <div className="text-sm text-[#86868B] font-bold uppercase tracking-wider">Саппорт</div>
          </div>
        </div>
      </div>
    )
  },
  'contacts': {
    title: 'Контакты',
    content: (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="space-y-8">
          <div className="bg-white dark:bg-[#1C1C1E] p-8 rounded-none border border-black/10 dark:border-white/10 shadow-sm">
            <h3 className="text-lg font-black uppercase tracking-tighter text-[#86868B] mb-2">Служба поддержки</h3>
            <p className="text-2xl font-black uppercase tracking-tighter">8 (800) 123-45-67</p>
            <p className="text-sm text-[#86868B] mt-2 font-bold uppercase tracking-wider">Ежедневно с 9:00 до 21:00</p>
          </div>
          <div className="bg-white dark:bg-[#1C1C1E] p-8 rounded-none border border-black/10 dark:border-white/10 shadow-sm">
            <h3 className="text-lg font-black uppercase tracking-tighter text-[#86868B] mb-2">Электронная почта</h3>
            <p className="text-2xl font-black uppercase tracking-tighter">support@hype.ru</p>
            <p className="text-sm text-[#86868B] mt-2 font-bold uppercase tracking-wider">Отвечаем в течение часа</p>
          </div>
          <div className="bg-white dark:bg-[#1C1C1E] p-8 rounded-none border border-black/10 dark:border-white/10 shadow-sm">
            <h3 className="text-lg font-black uppercase tracking-tighter text-[#86868B] mb-2">Шоурум</h3>
            <p className="text-xl font-black uppercase tracking-tighter">г. Москва, Хлебозавод 9</p>
            <p className="text-sm text-[#86868B] mt-2 font-bold uppercase tracking-wider">Пространство "Ангар"</p>
          </div>
        </div>
        <div className="bg-zinc-100 dark:bg-zinc-900 rounded-none p-8 flex flex-col justify-center items-center text-center border border-black/10 dark:border-white/10">
          <div className="w-20 h-20 bg-black dark:bg-white rounded-none flex items-center justify-center mb-6 shadow-lg">
            <Package size={32} className="text-white dark:text-black" />
          </div>
          <h3 className="text-2xl font-black uppercase tracking-tighter mb-4">Остались вопросы?</h3>
          <p className="text-[#86868B] mb-8 font-bold uppercase tracking-wider text-sm">Напишите нам в чат, и наши специалисты помогут вам в кратчайшие сроки.</p>
          <button className="px-8 py-4 bg-black dark:bg-white text-white dark:text-black rounded-none font-black uppercase tracking-tighter hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-colors">
            Открыть чат
          </button>
        </div>
      </div>
    )
  },
  'careers': {
    title: 'Вакансии',
    content: (
      <div className="space-y-8">
        <p className="text-lg text-[#86868B] font-bold uppercase tracking-wider mb-8">Присоединяйтесь к команде HYPE. Мы ищем талантливых специалистов, готовых развивать стритвир-культуру вместе с нами.</p>
        
        <div className="space-y-4">
          {[
            { title: 'Frontend Developer (React)', dept: 'Разработка', type: 'Удаленно / Офис' },
            { title: 'Apparel Designer', dept: 'Дизайн', type: 'Офис (Москва)' },
            { title: 'Специалист службы поддержки', dept: 'Поддержка', type: 'Удаленно' },
            { title: 'SMM Manager', dept: 'Маркетинг', type: 'Офис (Москва)' }
          ].map((job, idx) => (
            <div key={idx} className="bg-white dark:bg-[#1C1C1E] p-6 sm:p-8 rounded-none border border-black/10 dark:border-white/10 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-6 hover:shadow-md transition-shadow cursor-pointer group">
              <div>
                <h3 className="text-xl font-black uppercase tracking-tighter mb-2 group-hover:text-zinc-500 transition-colors">{job.title}</h3>
                <div className="flex gap-4 text-sm text-[#86868B] font-bold uppercase tracking-wider">
                  <span className="bg-zinc-100 dark:bg-zinc-800 px-3 py-1 rounded-none border border-black/10 dark:border-white/10">{job.dept}</span>
                  <span className="flex items-center gap-1">📍 {job.type}</span>
                </div>
              </div>
              <button className="w-12 h-12 rounded-none bg-black dark:bg-white flex items-center justify-center text-white dark:text-black group-hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-colors shrink-0">
                →
              </button>
            </div>
          ))}
        </div>
        
        <div className="mt-12 p-8 bg-zinc-100 dark:bg-zinc-900 rounded-none text-center border border-black/10 dark:border-white/10">
          <h3 className="text-2xl font-black uppercase tracking-tighter mb-4">Не нашли подходящую вакансию?</h3>
          <p className="text-[#86868B] mb-6 font-bold uppercase tracking-wider text-sm">Отправьте нам свое резюме, и мы свяжемся с вами, когда появится подходящая позиция.</p>
          <button className="px-8 py-4 bg-black dark:bg-white text-white dark:text-black rounded-none font-black uppercase tracking-tighter hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-colors">
            Отправить резюме
          </button>
        </div>
      </div>
    )
  }
};
