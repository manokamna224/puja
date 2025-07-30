'use client'
import Link from 'next/link'
import { FaMapMarkerAlt } from 'react-icons/fa'
import { MdTempleHindu } from 'react-icons/md'

const temples = [
  {
  id: 1,
  name: 'Kashi Vishwanath Temple',
  location: 'Varanasi, Uttar Pradesh',
  image: '/images/temple/temple1.jpeg',
  slug: 'kashi-vishwanath-temple',
  description: {
    history: `
Kashi Vishwanath Temple has a rich history dating back to ancient times. It is mentioned in the Skanda Purana and is believed to have been originally built in the 11th century. The temple has been destroyed and rebuilt several times during invasions by Muslim rulers, most notably by Aurangzeb, who constructed the Gyanvapi Mosque adjacent to it. The current structure was rebuilt in 1780 by Ahilyabai Holkar, the Queen of Indore. Over the centuries, it has become a symbol of unwavering faith, devotion, and resilience.`,
    
    importance: `
The temple is one of the twelve Jyotirlingas, making it one of the most sacred shrines dedicated to Lord Shiva. Devotees believe that a visit to Kashi Vishwanath and a dip in the Ganges can wash away all sins and grant liberation (moksha). The temple is considered the spiritual heart of Varanasi, also called Kashi, which is regarded as the oldest living city in the world. Thousands of devotees from India and abroad visit the temple every day to seek blessings and participate in sacred rituals.`,
    
    architecture: `
The temple features a prominent gold-plated spire and domes, which were donated by Maharaja Ranjit Singh in the 19th century. Its sanctum houses the revered Shiva Linga made of black stone, set in a silver altar. The temple complex consists of a series of smaller shrines dedicated to various deities such as Vishnu, Kalabhairava, and Kartikeya. The narrow lanes leading to the temple are bustling with pilgrims and filled with spiritual energy.`,
    
    rituals: `
The temple follows traditional rituals and ceremonies dedicated to Lord Shiva. Daily poojas include Rudrabhishek, Jalabhishek, Aarti, and Archana. Special poojas are performed during the month of Shravan and on Maha Shivaratri. Devotees also offer Bilva leaves, milk, honey, and flowers to the Shiva Linga. The Mangala Aarti, which occurs early in the morning, is one of the most powerful and sacred experiences for pilgrims.`,
    
    mythology: `
According to legend, Lord Shiva declared Kashi as his eternal abode. It is believed that anyone who dies in Kashi will attain salvation, as Lord Shiva whispers the Taraka Mantra in their ears at the time of death. The temple and the city are said to be standing on the trident (Trishul) of Shiva, which makes them indestructible. These stories make Kashi Vishwanath not just a temple, but a timeless center of cosmic power.`
  }
  },
  {
    id: 2,
    name: 'Sankat Mochan Hanuman Temple',
    location: 'Varanasi, Uttar Pradesh',
    image: '/images/temple/temple2.jpeg',
    slug: 'sankat-mochan-temple',
    description: {
  history: `
The Sankat Mochan Hanuman Temple in Varanasi was established in the early 16th century by the revered saint and poet Goswami Tulsidas, the author of the Ramcharitmanas. It is believed that Tulsidas had a vision of Lord Hanuman at this very spot, inspiring him to build the temple. Over time, the temple has become a crucial center for spiritual gatherings, especially for Hanuman devotees and Ramayana recitations.`,

  importance: `
The temple is considered highly auspicious for people facing obstacles in life (sankat). Devotees believe that regular darshan and chanting Hanuman Chalisa at this temple remove all fears and grant strength and protection. It is a common practice for students to seek blessings here before exams and for people to visit on Tuesdays and Saturdays for spiritual strength.`,

  architecture: `
Built in the traditional North Indian temple style, the structure is simple yet spiritually potent. The sanctum houses a large idol of Lord Hanuman with a serene and compassionate expression, as opposed to the more common fierce form. The campus includes halls where Ramcharitmanas and religious discourses are regularly conducted.`,

  rituals: `
Daily rituals include early morning aarti, Hanuman Chalisa recitation, and offering of laddoos, vermillion (sindoor), and flowers. On Tuesdays and Saturdays, the temple sees thousands of devotees. Hanuman Jayanti is celebrated with great fervor, including continuous chanting, music, and lighting of lamps.`,

  mythology: `
According to legend, Lord Hanuman promised to reside wherever Ram bhakti (devotion to Lord Rama) is practiced. It is said that his presence here is especially strong due to the devotion of Goswami Tulsidas. Many believe that sincere prayers here are directly answered by Sankat Mochan (the reliever of troubles) himself.`
}

  },
  {
    id: 3,
    name: 'Durga Kund Mandir',
    location: 'Varanasi, Uttar Pradesh',
    image: '/images/temple/temple3.jpeg',
    slug: 'durga-kund-mandir',
    description: {
  history: `
Durga Kund Mandir, located near the famous Durga Kund (a sacred pond) in Varanasi, is believed to have been constructed in the 18th century by a Bengali Maharani. Though the temple itself is relatively newer compared to others in the city, it stands on a site of ancient spiritual significance where Goddess Durga is believed to have manifested herself to protect the sacred city.`,

  importance: `
The temple is dedicated to Goddess Durga, the fierce and protective aspect of the divine feminine. It is believed that the goddess herself appeared in the idol and that it was not crafted by human hands. Devotees believe worshipping here grants strength, courage, and protection from evil. It is especially revered by women seeking well-being and family harmony.`,

  architecture: `
Built in the North Indian Nagara style, the temple stands tall with its red-hued shikhara (tower) symbolizing Durga's power. The adjacent kund (sacred pond) adds to its sanctity. The idol of Durga is adorned with weapons and rides a lion, embodying her warrior aspect. The temple structure includes intricate carvings and vibrant wall art.`,

  rituals: `
Devotees offer red flowers, vermillion, and sweets to the goddess. Aarti is performed daily, with special pujas held during Navratri when thousands of devotees flock to the temple. Women tie threads on the temple gates while making vows, and the temple resonates with bhajans during auspicious occasions.`,

  mythology: `
According to legend, Goddess Durga manifested herself here to protect Varanasi from evil forces. The kund is believed to have formed from her divine powers. Stories say that even today, the goddess watches over the city and fulfills the wishes of her sincere devotees.`  
}

  },
  {
    id: 4,
    name: 'Shri Ram Janmabhoomi Mandir',
    location: 'Ayodhya, Uttar Pradesh',
    image: '/images/temple/temple4.jpeg',
    slug: 'shri-ram-janmabhoomi-mandir',
    description: {
  history: `
Shri Ram Janmabhoomi Mandir in Ayodhya marks the birthplace of Lord Rama, one of the most revered incarnations of Lord Vishnu. The site has been a sacred pilgrimage destination for centuries, but it gained global attention due to the long-standing temple-mosque dispute. After decades of legal and archaeological proceedings, the Supreme Court of India approved the construction of a grand temple in 2019, and its consecration took place in January 2024.`,

  importance: `
The temple is of immense significance to Hindus as it is built on the very site where Lord Rama is believed to have been born. It is not only a center of faith but also a symbol of cultural unity, historical justice, and spiritual awakening. Millions of devotees from across India and the world visit the site to pay homage to the beloved deity.`,

  architecture: `
The new Ram Mandir is designed in the traditional Nagara style of architecture with intricate carvings, tall spires, and expansive courtyards. The sanctum houses a grand idol of Shri Ram Lalla. The temple complex also includes a museum, Yagyashala, library, and prayer halls. The grandeur of the architecture reflects the cultural and religious richness of India.`,

  rituals: `
Daily rituals include Mangala Aarti, mid-day Bhog Aarti, and Sandhya Aarti. Special events like Ram Navami, Diwali, and the consecration anniversary are celebrated with grandeur. Pilgrims perform parikrama (circumambulation) around the temple and offer flowers, tulsi leaves, and sweets to Ram Lalla.`,

  mythology: `
According to Ramayana, Ayodhya is the birthplace of Lord Rama, the seventh avatar of Vishnu. The spot of the temple is said to be where he was born to King Dasharatha and Queen Kaushalya. It is believed that anyone who visits Ram Janmabhoomi with a pure heart will be blessed with peace, prosperity, and devotion.`  
}

  },
  {
    id: 5,
    name: 'Hanuman Garhi',
    location: 'Ayodhya, Uttar Pradesh',
    image: '/images/temple/temple5.jpeg',
    slug: 'hanuman-garhi',
    description: {
  history: `
Hanuman Garhi, located in Ayodhya, dates back to the 10th century and is believed to have been established by the Nawabs of Awadh to honor Lord Hanuman. It has since become a central spiritual landmark in Ayodhya. This fort-like temple complex was expanded and fortified over centuries by successive rulers and devotees.`,

  importance: `
It is believed that Hanuman resides here to protect the city of Ayodhya, the birthplace of Lord Rama. Pilgrims consider it essential to visit Hanuman Garhi before proceeding to the Ram Janmabhoomi temple. Worshippers believe the temple blesses them with courage, protection from evil, and fulfillment of wishes.`,

  architecture: `
Hanuman Garhi is built in the shape of a fortress with massive walls and four round bastions at the corners. The main shrine is accessed by climbing 76 steps. Inside, the idol of Lord Hanuman is enshrined as a child (Bal Hanuman), seated in his mother Anjani’s lap. The temple's elevated structure offers panoramic views of Ayodhya.`,

  rituals: `
Devotees offer laddoos, sindoor, and garlands. Aartis are performed daily, with Tuesdays and Saturdays attracting the largest crowds. Hanuman Jayanti and Diwali are celebrated with elaborate rituals, chants, and lighting of thousands of lamps.`,

  mythology: `
As per legends, Lord Hanuman chose to reside here after fulfilling his service to Lord Rama. It is believed he guards the city from evil influences and blesses all those who climb the stairs with devotion. Stories say that visiting Hanuman Garhi is equivalent to receiving Hanuman’s personal blessings.`  
}

  },
  {
    id: 6,
    name: 'Baba Baidyanath Dham',
    location: 'Deoghar, Jharkhand',
    image: '/images/temple/temple6.jpeg',
    slug: 'baba-baidyanath-dham',
    description: {
  history: `
Baba Baidyanath Dham, located in Deoghar, Jharkhand, is one of the twelve Jyotirlingas of Lord Shiva. It is said to have been established when Ravana, the king of Lanka, offered nine of his ten heads to Lord Shiva at this site. Pleased by his devotion, Shiva appeared and healed Ravana’s wounds — hence the name Baidyanath (the divine healer). The temple has been a site of intense spiritual activity for centuries and attracts millions of pilgrims every year.`,

  importance: `
This temple is of immense religious importance as it is believed that offering prayers here fulfills one's deepest desires. It is especially significant for devotees during the month of Shravan, when they carry holy Ganga water in kanwars and walk barefoot for over 100 kilometers to offer it to Baba Baidyanath. It is believed to cure diseases and bring prosperity.`,

  architecture: `
The temple is built in the typical Nagara style with a towering shikhara made of stone. The complex includes 22 other temples dedicated to various deities like Parvati, Ganesha, Vishnu, and more. The sanctum holds the revered Jyotirlinga, which is surrounded by intricate carvings and sacred geometry symbols.`,

  rituals: `
The main ritual is the daily Abhishek of the Shiva Linga using Ganga Jal, milk, honey, and ghee. Special poojas are performed during Maha Shivaratri and the entire month of Shravan. The temple hosts the Shravani Mela, one of the largest religious gatherings in eastern India.`,

  mythology: `
According to the Shiva Purana, Ravana brought this Jyotirlinga from Mount Kailash to Lanka. However, Lord Vishnu intervened, causing Ravana to place the lingam at Deoghar. It got fixed into the ground and couldn’t be moved again. Thus, this site became one of the holiest Shiva shrines, known for healing and liberation.`  
}

  },
  {
    id: 7,
    name: 'Pashupatinath Temple',
    location: 'Kathmandu, Nepal',
    image: '/images/temple/temple7.jpeg',
    slug: 'pashupatinath-temple',
    description: {
  history: `
Pashupatinath Temple, located on the banks of the Bagmati River in Kathmandu, Nepal, is one of the oldest and most sacred Hindu temples dedicated to Lord Shiva. The temple is believed to have existed since 400 A.D., though the current structure was built in the 17th century. It has long been a central spiritual site for devotees across South Asia.`,

  importance: `
It is one of the four most important religious sites in Asia for devotees of Shiva. Pashupatinath is regarded as the "Lord of all living beings" (Pashupati). The temple attracts millions of visitors annually and is especially crowded during Maha Shivaratri. It is also considered highly auspicious to be cremated on the riverbanks of the Bagmati.`,

  architecture: `
The temple is built in pagoda style with two-tiered golden roofs and richly carved wooden rafters. The main idol is a black stone mukhalinga with four faces representing different aspects of Shiva. The complex includes hundreds of shrines, ashrams, and ghats, all displaying intricate Nepalese craftsmanship.`,

  rituals: `
Rituals include daily aartis, Abhishekam, and Rudra chanting. Entry into the main sanctum is allowed only for Hindus. Special rituals are conducted on full moon nights and Maha Shivaratri. Priests perform cremation rites and blessings along the ghats of Bagmati.`,

  mythology: `
Legends say that Lord Shiva once took the form of a deer and wandered into the Bagmati forest. The gods caught him, and he left behind one of his horns, which became the Jyotirlinga worshipped today. Pashupatinath is believed to grant moksha to all who die in its proximity.`  
}

  },
  {
    id: 8,
    name: 'Guhyeshwari Temple',
    location: 'Kathmandu, Nepal',
    image: '/images/temple/temple8.jpeg',
    slug: 'guhyeshwari-temple',
    description: {
  history: `
The Guhyeshwari Temple is one of the 51 Shakti Peethas and is located near the Pashupatinath Temple in Kathmandu. It was built in the 17th century by King Pratap Malla and has since been a major site of goddess worship in Nepal. The temple's name derives from the Sanskrit words "Guhya" (secret) and "Ishwari" (goddess), symbolizing the secretive and divine feminine power.`,

  importance: `
This temple is deeply revered by both Hindus and Vajrayana Buddhists. It is believed to be the place where Goddess Sati’s hips or knees fell after her self-immolation, making it one of the holiest places of Shakti worship. Devotees visit to seek spiritual awakening, feminine energy, and blessings for fertility.`,

  architecture: `
The temple has a striking dome structure, unlike traditional shikhara-style temples. It is painted red to represent the goddess's fierce energy. The sanctum houses a silver water tank believed to be the goddess's symbol. The temple complex is surrounded by a peaceful forested area with pathways and sacred ponds.`,

  rituals: `
Special Tantric rituals are performed here, especially during Navratri and the New Moon. Offerings of red flowers, sindoor, rice, and water are made to the goddess. Women particularly pray here for fertility and marital bliss.`,

  mythology: `
According to legend, when Goddess Sati immolated herself, Lord Shiva carried her body, and parts of it fell at various locations, which became Shakti Peethas. At Guhyeshwari, her knees or hips fell, representing the primal feminine force. It is believed that worshipping here grants inner power and spiritual growth.`  
}

  },
  {
    id: 9,
    name: 'Doleshwar Mahadev Temple',
    location: 'Bhaktapur, Nepal',
    image: '/images/temple/temple9.jpeg',
    slug: 'doleshwar-mahadev-temple',
    description: {
  history: `
Doleshwar Mahadev Temple, located in Bhaktapur, Nepal, is believed to be the head part of Kedarnath—the famous Jyotirlinga in India. This connection was formally acknowledged by Indian priests from Kedarnath in 2009. Though the temple had existed for centuries as a local shrine, it gained global recognition due to this link.`,

  importance: `
Devotees believe that Kedarnath is incomplete without visiting Doleshwar Mahadev. The temple has become a pilgrimage extension for those who cannot travel to Kedarnath. It is considered to hold immense spiritual energy and serves as a powerful Shiva site in the Kathmandu Valley.`,

  architecture: `
The temple features traditional Nepali pagoda architecture, made of red bricks and wood with intricately carved windows and a tiered roof. The Shiva Linga is worshipped within a sanctum that’s often decorated with fresh flowers and Bilva leaves. The tranquil setting enhances its sacredness.`,

  rituals: `
Priests conduct daily Abhishekam, and devotees offer milk, honey, and sacred leaves. The temple sees a large influx during Maha Shivaratri and Shravan. Prayers for health, protection, and overcoming obstacles are commonly offered here.`,

  mythology: `
Legend says that after the Mahabharata war, the Pandavas sought forgiveness from Lord Shiva, who hid from them by taking the form of a bull. The bull’s body reappeared at Kedarnath, while its head remained in Nepal—at Doleshwar. Thus, both sites are spiritually connected and are often worshipped together.`  
}

  },
]

export default function TempleSection() {
  return (
    <section className="bg-[#fff7ee] py-14 px-6 md:px-20">
      <h2 className="text-4xl font-extrabold text-center text-gray-800 mb-2">
        Top Temples
      </h2>
      <div className="w-16 h-1 mx-auto bg-orange-500 rounded mb-8"></div>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
        {temples.map((temple) => (
          <Link
            href={`/temple/${temple.slug}`}
            key={temple.id}
            className="bg-white rounded-xl shadow-md overflow-hidden transition-transform hover:-translate-y-1 hover:shadow-xl"
          >
            <img
              src={temple.image}
              alt={temple.name}
              className="w-full h-52 object-cover"
            />
            <div className="p-4">
              <h3 className="font-semibold text-lg text-gray-800">
                {temple.name}
              </h3>
              <p className="flex items-center text-sm text-gray-600 mt-1">
                <FaMapMarkerAlt className="text-orange-500 mr-2" />
                {temple.location}
              </p>
              <button className="mt-4 w-full bg-orange-500 hover:bg-orange-600 text-white flex justify-center items-center gap-2 py-2 rounded-md font-medium transition">
                <MdTempleHindu />
                Explore Temple
              </button>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}
