export type Region = {
  id: string;
  name: string;
  description: string;
  image: string;
  states: string[];
};

export type Festival = {
  id: string;
  name: string;
  description: string;
  longDescription: string;
  date: string;
  region: string;
  location: string;
  image: string;
  traditions: string[];
  isFeatured: boolean;
};

export const regions: Region[] = [
  // North India
  {
    id: "himachal-uttarakhand",
    name: "Himachal & Uttarakhand",
    description: "Discover the spiritual and colorful festivals in the Himalayan states",
    image: "https://images.unsplash.com/photo-1532958808948-09dd62b99996?w=800&auto=format&fit=crop",
    states: ["Himachal Pradesh", "Uttarakhand"]
  },
  {
    id: "punjab-haryana",
    name: "Punjab & Haryana",
    description: "Experience vibrant harvest celebrations and cultural richness",
    image: "https://images.unsplash.com/photo-1545507301-c3519d5cbe3b?w=800&auto=format&fit=crop",
    states: ["Punjab", "Haryana"]
  },
  {
    id: "delhi-ncr",
    name: "Delhi & NCR",
    description: "The capital's fusion of traditional and contemporary celebrations",
    image: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=800&auto=format&fit=crop", 
    states: ["Delhi", "Parts of Uttar Pradesh", "Haryana"]
  },
  {
    id: "rajasthan",
    name: "Rajasthan",
    description: "Royal celebrations with desert colors and cultural heritage",
    image: "https://images.unsplash.com/photo-1565364835247-ea19d241e719?w=800&auto=format&fit=crop",
    states: ["Rajasthan"]
  },
  {
    id: "jammu-kashmir-ladakh",
    name: "Jammu, Kashmir & Ladakh",
    description: "Unique festivals influenced by Himalayan culture and traditions",
    image: "https://images.unsplash.com/photo-1566837449353-1e726107cd8c?w=800&auto=format&fit=crop",
    states: ["Jammu & Kashmir", "Ladakh"]
  },
  {
    id: "uttar-pradesh",
    name: "Uttar Pradesh",
    description: "The spiritual and cultural heartland of North India",
    image: "https://images.unsplash.com/photo-1644992429151-748dcacb90a6?w=800&auto=format&fit=crop",
    states: ["Uttar Pradesh"]
  },
  
  // South India
  {
    id: "kerala",
    name: "Kerala",
    description: "God's own country with rich cultural traditions and temple festivals",
    image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=800&auto=format&fit=crop",
    states: ["Kerala"]
  },
  {
    id: "tamil-nadu",
    name: "Tamil Nadu",
    description: "Ancient temple festivals and classical cultural celebrations",
    image: "https://images.unsplash.com/photo-1583395838144-08eec143f8a3?w=800&auto=format&fit=crop",
    states: ["Tamil Nadu"]
  },
  {
    id: "karnataka",
    name: "Karnataka",
    description: "A blend of traditional and contemporary festivals",
    image: "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?w=800&auto=format&fit=crop",
    states: ["Karnataka"]
  },
  {
    id: "andhra-telangana",
    name: "Andhra Pradesh & Telangana",
    description: "Vibrant celebrations reflecting the rich Telugu culture",
    image: "https://images.unsplash.com/photo-1588416499018-d8c621356d2b?w=800&auto=format&fit=crop",
    states: ["Andhra Pradesh", "Telangana"]
  },
  
  // East & North East India
  {
    id: "west-bengal",
    name: "West Bengal",
    description: "Home to vibrant Durga Puja and cultural richness",
    image: "https://images.unsplash.com/photo-1634478689554-732a9d4c9369?w=800&auto=format&fit=crop",
    states: ["West Bengal"]
  },
  {
    id: "odisha",
    name: "Odisha",
    description: "Famous for its ancient temple festivals and tribal celebrations",
    image: "https://images.unsplash.com/photo-1590077428249-f7a351bf3129?w=800&auto=format&fit=crop",
    states: ["Odisha"]
  },
  {
    id: "north-east",
    name: "North East India",
    description: "Diverse tribal festivals and unique cultural traditions",
    image: "https://images.unsplash.com/photo-1566841517760-26b387329e3c?w=800&auto=format&fit=crop",
    states: ["Assam", "Meghalaya", "Nagaland", "Manipur", "Tripura", "Mizoram", "Arunachal Pradesh", "Sikkim"]
  },
  
  // West & Central India
  {
    id: "gujarat",
    name: "Gujarat",
    description: "Colorful folk festivals and grand Navratri celebrations",
    image: "https://images.unsplash.com/photo-1601621915196-2621bfb0cd6e?w=800&auto=format&fit=crop",
    states: ["Gujarat"]
  },
  {
    id: "maharashtra",
    name: "Maharashtra",
    description: "Home to Ganesh Chaturthi and vibrant cultural celebrations",
    image: "https://images.unsplash.com/photo-1629395048132-ae208f320a58?w=800&auto=format&fit=crop",
    states: ["Maharashtra"]
  },
  {
    id: "goa",
    name: "Goa",
    description: "Where traditional Indian festivals meet Portuguese cultural influence",
    image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=800&auto=format&fit=crop",
    states: ["Goa"]
  },
  {
    id: "madhya-pradesh-chhattisgarh",
    name: "Madhya Pradesh & Chhattisgarh",
    description: "Tribal festivals and traditional celebrations in the heart of India",
    image: "https://images.unsplash.com/photo-1588416506339-5067b72a2d79?w=800&auto=format&fit=crop",
    states: ["Madhya Pradesh", "Chhattisgarh"]
  }
];

export const festivals: Festival[] = [
  // North India Festivals
  {
    id: "holi",
    name: "Holi",
    description: "The festival of colors celebrates the arrival of spring and the victory of good over evil.",
    longDescription: "Holi is one of the most popular and vibrant festivals of India, celebrated with great enthusiasm across the northern regions. It marks the end of winter and welcomes the spring season. During Holi, people smear each other with colors, dance to festive music, and enjoy special delicacies like gujiya and thandai. The festival begins with Holika Dahan, where bonfires are lit to signify the triumph of good over evil, followed by Rangwali Holi where people play with colors. In places like Mathura and Vrindavan, Holi celebrations can last for up to a week with unique local traditions.",
    date: "March 25, 2025",
    region: "All North India",
    location: "Widespread, especially vibrant in Mathura, Vrindavan, Delhi, and Jaipur",
    image: "https://images.unsplash.com/photo-1576086570208-7a09efd7a185?w=800&auto=format&fit=crop",
    traditions: ["Color throwing", "Holika bonfire", "Traditional sweets", "Folk music and dance"],
    isFeatured: true
  },
  {
    id: "baisakhi",
    name: "Baisakhi",
    description: "Harvest festival and Sikh New Year celebrating the formation of the Khalsa.",
    longDescription: "Baisakhi is a historical and religious festival in Sikhism, as well as a traditional harvest festival celebrated by both Sikhs and Hindus across Punjab and Haryana. The festival commemorates the formation of the Khalsa Panth of warriors under Guru Gobind Singh in 1699. For farmers, it marks the time for harvesting winter crops and the beginning of a new harvest season. Celebrations include visiting Gurdwaras, participating in nagar kirtans (processions), performing Bhangra and Gidda (folk dances), and enjoying a community feast or langar. The Golden Temple in Amritsar becomes the center of massive celebrations, while rural Punjab comes alive with colorful fairs and agricultural exhibitions.",
    date: "April 14, 2025",
    region: "Punjab & Haryana",
    location: "Throughout Punjab, especially Amritsar and Anandpur Sahib",
    image: "https://images.unsplash.com/photo-1599104925660-0d17ae3c9f24?w=800&auto=format&fit=crop",
    traditions: ["Gurdwara visits", "Bhangra dance", "Processions", "Langar (community meals)"],
    isFeatured: true
  },
  {
    id: "diwali",
    name: "Diwali",
    description: "The festival of lights symbolizing the victory of light over darkness.",
    longDescription: "Diwali, the festival of lights, is one of India's biggest festivals celebrated with tremendous enthusiasm across northern India. The five-day celebration symbolizes the victory of light over darkness and good over evil. Homes and streets are decorated with oil lamps (diyas), candles, and colorful electric lights. People clean and decorate their homes, wear new clothes, exchange gifts and sweets, and perform prayers to Goddess Lakshmi for prosperity. The festival is marked by spectacular fireworks, although many cities now encourage eco-friendly celebrations. In North India, it also celebrates Lord Rama's return to Ayodhya after defeating Ravana, with Ayodhya itself hosting a magnificent Deepotsav where thousands of diyas illuminate the ghats of the Saryu River.",
    date: "November 12, 2024",
    region: "All North India",
    location: "Throughout North India, especially spectacular in Varanasi, Jaipur, and Amritsar",
    image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=800&auto=format&fit=crop",
    traditions: ["Lighting diyas", "Rangoli designs", "Fireworks", "Lakshmi puja", "Sweet distribution"],
    isFeatured: true
  },
  {
    id: "durga-puja",
    name: "Durga Puja",
    description: "Celebration of Goddess Durga's victory over the buffalo demon Mahishasura.",
    longDescription: "While Durga Puja is most famously celebrated in West Bengal, it has a significant presence across northern India as well. The festival honors Goddess Durga and celebrates her victory over the buffalo demon Mahishasura, symbolizing the triumph of good over evil. In North India, especially in Delhi, Lucknow, and parts of Uttarakhand, beautiful pandals (temporary structures) are set up with elaborate idols of the goddess. The celebration includes ritual worship, cultural performances, and community feasts. The region's unique take on the festival often incorporates local artistic traditions and cultural elements while maintaining the essence of devotion to the goddess. The festival culminates with a grand immersion procession where the idol is submerged in water.",
    date: "October 2-6, 2024",
    region: "Uttar Pradesh, Delhi",
    location: "Mainly in Lucknow, Delhi, and larger cities of Uttar Pradesh",
    image: "https://images.unsplash.com/photo-1634478689554-732a9d4c9369?w=800&auto=format&fit=crop",
    traditions: ["Pandal hopping", "Cultural performances", "Arati ceremonies", "Idol immersion"],
    isFeatured: false
  },
  {
    id: "pushkar-camel-fair",
    name: "Pushkar Camel Fair",
    description: "Annual camel and livestock fair combined with cultural celebrations.",
    longDescription: "The Pushkar Camel Fair is one of Rajasthan's most famous tourist attractions and cultural events. This annual five-day camel and livestock fair attracts thousands of camels, horses, and cattle, along with their owners who come to trade. Beyond the trading activities, the fair transforms into a vibrant cultural festival with camel races, folk performances, bridal competitions, and various traditional sports. The fairgrounds become a riot of colors with markets selling textiles, jewelry, and handicrafts. The event coincides with the Kartik Purnima festival, adding religious significance with ritual bathing in Pushkar Lake and prayers at the Brahma Temple, believed to be one of the few temples dedicated to Lord Brahma in the world.",
    date: "November 3-10, 2024",
    region: "Rajasthan",
    location: "Pushkar, Rajasthan",
    image: "https://images.unsplash.com/photo-1516471835570-1488a7c130b4?w=800&auto=format&fit=crop",
    traditions: ["Camel trading", "Folk performances", "Cultural competitions", "Religious ceremonies"],
    isFeatured: false
  },
  {
    id: "hemis-festival",
    name: "Hemis Festival",
    description: "Ladakh's largest monastic festival celebrating Guru Padmasambhava's birth anniversary.",
    longDescription: "The Hemis Festival is the largest and most famous monastic festival in Ladakh, celebrated in honor of Guru Padmasambhava (also known as Guru Rinpoche), who brought Buddhism to the Himalayan region. The two-day celebration takes place at the 17th-century Hemis Monastery, the largest and wealthiest monastery in Ladakh. The highlight of the festival is the colorful masked dance performances called 'Cham', performed by monks dressed in vibrant brocade robes and elaborate masks representing various deities and guardian divinities. These dances depict the victory of good over evil and are accompanied by traditional music played on drums, cymbals, and long horns. A giant thangka (Buddhist painting) of Guru Padmasambhava is displayed during the festival, with a different one shown every 12 years.",
    date: "July 14-15, 2024",
    region: "Jammu, Kashmir & Ladakh",
    location: "Hemis Monastery, Ladakh",
    image: "https://images.unsplash.com/photo-1566837449353-1e726107cd8c?w=800&auto=format&fit=crop",
    traditions: ["Cham masked dances", "Monastery decorations", "Buddhist ceremonies", "Display of sacred thangka"],
    isFeatured: false
  },
  {
    id: "kumbh-mela",
    name: "Kumbh Mela",
    description: "The world's largest religious gathering held on a rotating basis between four holy sites.",
    longDescription: "Kumbh Mela is considered the world's largest peaceful gathering of people, with millions of Hindu pilgrims congregating to bathe at the sacred confluence of holy rivers. In North India, it rotates between Haridwar (Uttarakhand), Prayagraj (Uttar Pradesh), and other locations. The festival's origins lie in Hindu mythology, which tells of a battle between gods and demons for a pot (kumbh) of the nectar of immortality, during which drops fell at four different locations. The main ritual involves taking a holy dip in the river, believed to cleanse sins and bring salvation. The fair is also characterized by religious discussions, devotional singing, mass feeding of the poor, and religious assemblies. Various akharas (religious ascetic groups) participate in processions and rituals, with naked ash-covered Naga sadhus being one of the most iconic sights.",
    date: "January-February 2025 (Haridwar)",
    region: "Uttar Pradesh, Uttarakhand",
    location: "Rotates between Haridwar, Prayagraj, Ujjain, and Nashik",
    image: "https://images.unsplash.com/photo-1582696881847-1dcf7acf410c?w=800&auto=format&fit=crop",
    traditions: ["Holy dips in the river", "Aarti ceremonies", "Processions of akharas", "Spiritual discourses"],
    isFeatured: false
  },
  {
    id: "losar",
    name: "Losar",
    description: "Tibetan New Year celebration observed with Buddhist rituals and community gatherings.",
    longDescription: "Losar is the Tibetan New Year festival celebrated in the Himalayan regions of Ladakh, Himachal Pradesh, and parts of Uttarakhand. This three-day festival marks the beginning of the lunar new year according to the Tibetan calendar. Preparation begins days in advance with thorough cleaning of homes to remove bad spirits and making special food items like khapse (fried cookies) and guthuk (a special soup containing dough balls with hidden items that symbolically represent one's character). On the first day, families gather for a feast and visit monasteries for prayers. The following days include visiting relatives and friends, exchanging gifts, performing ritual dances, and participating in various community activities. Monasteries hold special prayer sessions and mask dances. In places like Dharamshala with significant Tibetan populations, the celebrations are especially vibrant with cultural exhibitions and performances.",
    date: "February 19-21, 2025",
    region: "Himachal & Uttarakhand, Jammu, Kashmir & Ladakh",
    location: "Ladakh, Dharamshala, and other Himalayan regions",
    image: "https://images.unsplash.com/photo-1630493243027-a8faa632f7ec?w=800&auto=format&fit=crop",
    traditions: ["Monastery prayers", "Tibetan food feasts", "Ritual purification", "Cham dances"],
    isFeatured: false
  },
  
  // South India Festivals
  {
    id: "pongal",
    name: "Pongal",
    description: "Tamil harvest festival celebrating the winter solstice and the beginning of sun's northward journey.",
    longDescription: "Pongal is a four-day harvest festival celebrated primarily in Tamil Nadu, dedicated to the Sun God. The festival marks the end of the harvest season and the beginning of the Tamil month Thai. The name 'Pongal' refers to the traditional dish of the same name, made from newly harvested rice boiled in milk with jaggery. The festival begins with Bhogi Pongal, when people discard old belongings and clean their homes. The second day, Thai Pongal, is when families gather to cook the traditional Pongal dish in a new clay pot as the sun rises, allowing it to boil over to symbolize abundance. Mattu Pongal, the third day, is dedicated to cattle, which are decorated and worshipped. The final day, Kaanum Pongal, is a time for family gatherings and outings.",
    date: "January 15-18, 2025",
    region: "Tamil Nadu",
    location: "Throughout Tamil Nadu",
    image: "https://images.unsplash.com/photo-1610085927744-7217728267a6?w=800&auto=format&fit=crop",
    traditions: ["Cooking Pongal", "Cattle decoration", "Kolam (rangoli) drawing", "Family gatherings"],
    isFeatured: false
  },
  {
    id: "onam",
    name: "Onam",
    description: "Kerala's grand harvest festival celebrating King Mahabali's annual homecoming.",
    longDescription: "Onam is the most important festival of Kerala, celebrating the mythical King Mahabali's annual visit to his former kingdom. According to legend, King Mahabali was a benevolent ruler under whom Kerala prospered. Lord Vishnu, disguised as a dwarf Brahmin (Vamana), pushed him to the netherworld but granted him permission to visit his people once a year. The festival spans ten days and is marked by elaborate feasts (Onasadya), boat races (Vallam Kali), tiger dances (Pulikali), flower arrangements (Pookalam), and traditional Kathakali dance performances. People wear new clothes (Onakkodi), and homes are decorated with flower rangolis to welcome the king. The feast, served on banana leaves, consists of 26 dishes and is a crucial part of the celebrations.",
    date: "September 10-21, 2024",
    region: "Kerala",
    location: "Throughout Kerala",
    image: "https://images.unsplash.com/photo-1598739841948-58a26f14094f?w=800&auto=format&fit=crop",
    traditions: ["Pookalam (flower rangoli)", "Vallam Kali (boat races)", "Onasadya (grand feast)", "Pulikali (tiger dance)"],
    isFeatured: false
  },
  {
    id: "ugadi",
    name: "Ugadi",
    description: "Telugu and Kannada New Year celebrated with symbolic food, decorations, and family gatherings.",
    longDescription: "Ugadi marks the beginning of the new year for people in Karnataka, Andhra Pradesh, and Telangana. The name is derived from 'Yuga' (age) and 'Adi' (beginning). Homes are cleaned and decorated with mango leaves and rangoli patterns. The day begins with an oil bath, followed by prayers. A special dish called 'Ugadi Pachadi' or 'Bevu Bella' is prepared, which contains six different tastes - sweet, sour, salty, bitter, astringent, and spicy - symbolizing the different experiences of life. People also listen to the Panchanga Sravanam (almanac reading) for predictions about the coming year. New clothes are worn, and families gather for festive meals. Cultural programs, temple visits, and literary discussions are common during this festival.",
    date: "April 9, 2025",
    region: "Karnataka, Andhra Pradesh & Telangana",
    location: "Throughout Karnataka, Andhra Pradesh, and Telangana",
    image: "https://images.unsplash.com/photo-1590156634102-149c52716b63?w=800&auto=format&fit=crop",
    traditions: ["Ugadi Pachadi preparation", "Mango leaf decorations", "Panchanga Sravanam", "New clothes"],
    isFeatured: false
  },
  
  // East India Festivals
  {
    id: "durga-puja-bengal",
    name: "Durga Puja",
    description: "Bengal's grandest festival celebrating the victory of Goddess Durga over the demon Mahishasura.",
    longDescription: "Durga Puja is the biggest festival in West Bengal, celebrating the victory of Goddess Durga over the buffalo demon Mahishasura. The 10-day festival transforms Kolkata and other Bengali communities into a massive open-air art exhibition with elaborate pandals (temporary structures) housing intricately crafted Durga idols. Each pandal competes to showcase unique themes and artistic innovations. The festival involves daily rituals, with the last four days being the most important - Saptami, Ashtami, Navami, and Dashami. People dress in new clothes, visit different pandals, enjoy cultural performances, and feast on traditional Bengali cuisine. The festival culminates with Sindoor Khela (married women apply vermilion to the goddess and each other) and a grand immersion procession where the idols are submerged in water.",
    date: "October 2-6, 2024",
    region: "West Bengal",
    location: "Throughout West Bengal, especially Kolkata",
    image: "https://images.unsplash.com/photo-1634478689554-732a9d4c9369?w=800&auto=format&fit=crop",
    traditions: ["Pandal hopping", "Dhunuchi dance", "Sindoor Khela", "Idol immersion"],
    isFeatured: true
  },
  {
    id: "bihu",
    name: "Bihu",
    description: "Assam's major harvest festival celebrated three times a year with dance, music, and feasting.",
    longDescription: "Bihu is the most important festival of Assam, celebrated three times a year. The most prominent is Bohag Bihu or Rongali Bihu, which marks the Assamese New Year in April. During this spring festival, young people perform the Bihu dance, characterized by brisk steps and hand movements. Traditional Bihu songs are sung to the accompaniment of traditional instruments like the dhol, pepa, and gagana. Cattle, considered sacred, are bathed and worshipped. Homes are cleaned, and people wear new clothes and prepare special dishes. Magh Bihu, celebrated in January, marks the end of the harvest season with community feasting and bonfires. Kati Bihu, observed in October during the paddy transplantation season, is more solemn with lamps lit in paddy fields to ward off pests.",
    date: "April 14-16, 2025 (Bohag Bihu)",
    region: "North East India",
    location: "Throughout Assam",
    image: "https://images.unsplash.com/photo-1629363447921-d0c018dc4490?w=800&auto=format&fit=crop",
    traditions: ["Bihu dance", "Traditional music", "Cattle worship", "Community feasting"],
    isFeatured: false
  },
  
  // West India Festivals
  {
    id: "ganesh-chaturthi",
    name: "Ganesh Chaturthi",
    description: "Maharashtra's grand celebration of Lord Ganesha's birth with 10 days of rituals and festivities.",
    longDescription: "Ganesh Chaturthi is one of the most popular festivals in Maharashtra, celebrating the birth of the elephant-headed deity, Lord Ganesha. The festival begins with the installation of Ganesha idols in homes and public pandals, elaborately decorated with lights, flowers, and themes. The idol is worshipped for 1.5, 3, 5, 7, or 10 days with daily rituals including aarti (prayer) and offerings of modak (sweet dumplings), which are considered Ganesha's favorite. The public celebrations involve cultural events, music performances, and community feasts. The festival concludes with a grand procession (Visarjan) where the idols are immersed in water bodies amidst chanting, dancing, and drum-beating. In Mumbai, the Visarjan at Girgaum Chowpatty beach is particularly spectacular, with thousands of idols being immersed in the Arabian Sea.",
    date: "September 7, 2024",
    region: "Maharashtra",
    location: "Throughout Maharashtra, especially vibrant in Mumbai and Pune",
    image: "https://images.unsplash.com/photo-1629395048132-ae208f320a58?w=800&auto=format&fit=crop",
    traditions: ["Idol installation", "Modak offerings", "Cultural performances", "Visarjan (immersion)"],
    isFeatured: true
  },
  {
    id: "navratri-gujarat",
    name: "Navratri",
    description: "Gujarat's nine nights of devotion to Goddess Durga with vibrant Garba and Dandiya Raas dances.",
    longDescription: "Navratri in Gujarat is one of the most vibrant and energetic festival celebrations in India. For nine nights, people worship the nine forms of Goddess Durga and celebrate with nightly folk dances - Garba and Dandiya Raas. The Garba dance involves women moving in concentric circles around a lamp or an image of the Goddess, while Dandiya Raas involves dancing with decorated sticks in pairs. The festival transforms Gujarat into a massive dance arena with colorfully dressed participants, live music, and elaborate decorations. Traditional attire includes chaniya choli for women and kediyu for men, with intricate mirror work and colorful embroidery. The festivities continue late into the night, and the entire state seems to be dancing. Special food stalls are set up, offering traditional Gujarati delicacies.",
    date: "October 3-12, 2024",
    region: "Gujarat",
    location: "Throughout Gujarat, especially Vadodara, Ahmedabad, and Surat",
    image: "https://images.unsplash.com/photo-1601621915196-2621bfb0cd6e?w=800&auto=format&fit=crop",
    traditions: ["Garba dance", "Dandiya Raas", "Goddess worship", "Traditional attire"],
    isFeatured: true
  }
];

export const getUpcomingFestivals = (): Festival[] => {
  const today = new Date();
  return festivals
    .filter(festival => new Date(festival.date) >= today)
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
    .slice(0, 5);
};

export const getFeaturedFestivals = (): Festival[] => {
  return festivals.filter(festival => festival.isFeatured);
};

export const getFestivalsByRegion = (regionId: string): Festival[] => {
  return festivals.filter(festival => {
    const region = regions.find(r => r.id === regionId);
    if (!region) return false;
    
    return festival.region.includes(region.name) || 
           region.states.some(state => festival.region.includes(state) || festival.location.includes(state));
  });
};

export const getRegionById = (id: string): Region | undefined => {
  return regions.find(region => region.id === id);
};

export const getFestivalById = (id: string): Festival | undefined => {
  return festivals.find(festival => festival.id === id);
};
