
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
  }
];

export const festivals: Festival[] = [
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
