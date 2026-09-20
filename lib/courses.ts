export type Faq = { q: string; a: string };

export type Course = {
  slug: string;
  name: string;
  h1: string;
  metaTitle: string;
  metaDescription: string;
  /** One-sentence card summary */
  summary: string;
  /** Direct answer, written to be quoted by search and AI answer engines. */
  answer: string;
  intro: string[];
  whoFor: string[];
  learn: { title: string; text: string }[];
  howItWorks: string[];
  outcome: string;
  faqs: Faq[];
  related: string[]; // course slugs
  keywords: string[];
};

export const courses: Course[] = [
  {
    slug: "noorani-qaida",
    name: "Noorani Qaida",
    h1: "Online Noorani Qaida Classes for Children",
    metaTitle: "Online Noorani Qaida Classes for Kids",
    metaDescription:
      "Live online Noorani Qaida classes for children in the Gulf. Learn Arabic letters, correct pronunciation and the first rules of reading the Quran with qualified teachers.",
    summary:
      "The first step in reading the Quran: Arabic letters, correct sounds, vowels and the basic rules of reading.",
    answer:
      "Noorani Qaida is the first step in learning to read the Quran. It teaches the Arabic letters, their correct sounds, the short and long vowels and the basic reading rules, so a child can move on to reciting the Quran with confidence.",
    intro: [
      "Every child who learns to read the Quran starts in the same place: recognising the Arabic letters and pronouncing each one from its correct point of articulation. Noorani Qaida is a short, structured primer that builds this foundation lesson by lesson.",
      "At Qalam Online Madrasa, Noorani Qaida is taught in live online classes, so the teacher can hear how your child pronounces each letter and correct it straight away — something recorded videos cannot do.",
    ],
    whoFor: [
      "Children who are starting from zero and cannot yet read Arabic letters",
      "Older beginners who never had the chance to learn to read the Quran properly",
      "Children who read the Quran but pronounce letters inaccurately and need to rebuild the basics",
    ],
    learn: [
      { title: "Arabic letters and their sounds", text: "Recognising each letter in its different forms and saying it from the correct makhraj (point of articulation)." },
      { title: "Short vowels", text: "Fathah, kasrah and dammah — how a letter changes sound with each mark." },
      { title: "Tanween and sukoon", text: "Reading double vowels and silent letters, the building blocks of every Quranic word." },
      { title: "Shaddah and long vowels", text: "Doubling a letter and lengthening a sound (madd) for the correct rhythm of reading." },
      { title: "Joining letters into words", text: "Moving from single letters to syllables, words and full lines with steady, accurate reading." },
    ],
    howItWorks: [
      "Live one-to-one attention from a qualified teacher, so mistakes are corrected as they happen",
      "A class time you choose, which suits school hours and family routines in your country",
      "Weekly tests and progress reports so you can see which lessons are complete",
      "A certificate on completion",
    ],
    outcome:
      "By the end of the course your child reads Arabic words with correct letter sounds and is ready to begin Quran recitation with Tajweed (Nazra).",
    faqs: [
      {
        q: "How long does Noorani Qaida take to complete?",
        a: "It depends on the child's age, focus and how much they practise between classes. Teachers move at the child's pace, and the weekly tests show when your child is ready to move on to Nazra.",
      },
      {
        q: "What age can a child start Noorani Qaida?",
        a: "Children can start once they can sit through a live class and are beginning to read in their school language. Message us with your child's age and we will suggest the right starting point.",
      },
      {
        q: "Can adults learn Noorani Qaida online?",
        a: "The method is the same for any beginner. Contact us on WhatsApp to discuss timings and the right level.",
      },
    ],
    related: ["quran-recitation-tajweed", "quran-hifz"],
    keywords: ["online noorani qaida", "noorani qaida for kids", "learn quran reading online", "online madrasa Gulf"],
  },
  {
    slug: "quran-recitation-tajweed",
    name: "Quran Recitation with Tajweed",
    h1: "Quran Recitation with Tajweed — Live Online Classes",
    metaTitle: "Online Quran & Tajweed Classes for Kids",
    metaDescription:
      "Learn to read the Quran fluently with correct Tajweed in live online Nazra classes. Qualified teachers correct pronunciation in real time for children in UAE, Saudi, Qatar, Kuwait, Oman and Bahrain.",
    summary:
      "Read the Quran fluently from the mushaf and apply the rules of Tajweed with a teacher who corrects you live.",
    answer:
      "Quran recitation with Tajweed means reading the Quran fluently while applying the rules that govern how each letter is pronounced, lengthened and joined. In Nazra classes, students read from the mushaf while the teacher corrects mistakes in real time.",
    intro: [
      "Nazra means reading the Quran while looking at the mushaf, as opposed to reciting from memory. Tajweed is the science of doing so correctly — giving every letter its right, in sound, length and connection.",
      "Tajweed is learnt by listening and being corrected, which is why live classes matter. A teacher can hear a slight change in a letter's sound and fix it in the moment, and can set the next lesson accordingly.",
    ],
    whoFor: [
      "Children who have finished Noorani Qaida and are ready to read the Quran",
      "Children who read the Quran but have never been taught Tajweed",
      "Students preparing to begin Hifz, who need fluent, accurate reading first",
    ],
    learn: [
      { title: "Fluent reading from the mushaf", text: "Building speed and confidence through daily reading, with correction after every session." },
      { title: "Makharij and sifat", text: "Where each letter comes from in the mouth and throat, and the qualities that make one letter sound different from another." },
      { title: "Noon sakinah and tanween", text: "The four rules — izhar, idgham, iqlab and ikhfa — that decide how a silent noon or tanween is pronounced." },
      { title: "Meem sakinah and ghunnah", text: "How a silent meem behaves before different letters and how to hold the nasal sound correctly." },
      { title: "Madd, qalqalah and waqf", text: "Lengthening, the echoing sound of certain letters, and where and how to pause when reciting." },
    ],
    howItWorks: [
      "Live interactive classes with qualified teachers",
      "Personal attention and correction for every student",
      "Weekly tests and progress reports for parents",
      "Flexible class timings that fit your country's school schedule",
    ],
    outcome:
      "Your child reads the Quran fluently, applies the core Tajweed rules and is prepared to begin Hifz or continue polishing their recitation.",
    faqs: [
      {
        q: "What is the difference between Nazra and Hifz?",
        a: "Nazra is reading the Quran from the mushaf with correct pronunciation. Hifz is memorising the Quran by heart. Children normally complete Nazra with Tajweed first, because strong reading is the base for memorisation.",
      },
      {
        q: "Can Tajweed really be learnt online?",
        a: "Yes, when classes are live. The teacher hears each letter as the student recites and corrects it immediately, which is the same process as a class in person.",
      },
      {
        q: "Does my child need to know Arabic to start?",
        a: "No. Children learn to read the Arabic script first through Noorani Qaida; understanding the language is a separate step.",
      },
    ],
    related: ["noorani-qaida", "quran-hifz"],
    keywords: ["online tajweed classes", "quran nazra online", "learn tajweed for kids", "online quran teacher Gulf"],
  },
  {
    slug: "quran-hifz",
    name: "Quran Hifz",
    h1: "Quran Hifz (Memorisation) Online with Qualified Teachers",
    metaTitle: "Online Quran Hifz Classes for Children",
    metaDescription:
      "Structured online Quran Hifz classes for children in the Gulf: a daily new lesson, regular revision and weekly tests with qualified teachers who follow every student's progress.",
    summary:
      "Memorise the Quran with a daily lesson, steady revision and weekly tests, guided by a teacher who tracks progress.",
    answer:
      "Hifz is memorising the Quran by heart. A structured Hifz routine has three daily parts: a new lesson (sabaq), revision of recent lessons (sabqi) and revision of older portions (manzil). Students begin Hifz once they can read the Quran fluently with correct Tajweed.",
    intro: [
      "Memorising the Quran is a long journey that rewards consistency more than speed. The children who succeed are the ones who keep a steady daily routine and never let revision slip.",
      "In live online Hifz classes, the teacher listens to the new lesson, checks the revision and corrects errors on the spot, then sets the next day's portion so a child always knows exactly what to do.",
    ],
    whoFor: [
      "Children who read the Quran fluently and have a working knowledge of Tajweed",
      "Families who can support a short daily routine at home",
      "Students who want to memorise particular portions, such as the last juz, as well as those aiming for the full Quran",
    ],
    learn: [
      { title: "Sabaq — the new lesson", text: "A small, achievable portion memorised each day, listened to and corrected by the teacher." },
      { title: "Sabqi — recent revision", text: "Repeating the last few days' lessons so that new memorisation is secured before it fades." },
      { title: "Manzil — long-term revision", text: "A rolling revision of everything memorised so far, which is what keeps Hifz for life." },
      { title: "Accuracy and Tajweed", text: "Every portion is checked for correct words, correct pronunciation and correct stopping points." },
    ],
    howItWorks: [
      "One-to-one attention so the teacher hears each student individually",
      "Weekly tests that check both new memorisation and revision",
      "Progress reports parents can follow",
      "Flexible timings so the daily slot fits your family's routine",
    ],
    outcome:
      "A steady daily Hifz routine, accurate memorisation checked every week, and a clear record of what has been memorised and what needs revision.",
    faqs: [
      {
        q: "When should a child start Hifz?",
        a: "Once they read the Quran fluently and can apply the main Tajweed rules. Starting earlier usually means memorising mistakes that later have to be unlearned.",
      },
      {
        q: "How can parents help with Hifz at home?",
        a: "Set a fixed time, a quiet corner and a listening ear. Parents do not need to know the Quran by heart; consistency and encouragement matter most. Our article on starting Hifz explains the daily routine in more detail.",
      },
      {
        q: "How long does it take to memorise the Quran?",
        a: "It varies widely with age, ability, time given each day and the quality of revision. We would rather give an honest estimate after meeting your child than promise a fixed timeline.",
      },
    ],
    related: ["quran-recitation-tajweed", "noorani-qaida"],
    keywords: ["online hifz classes", "quran memorization for kids online", "hifz teacher online Gulf"],
  },
  {
    slug: "islamic-studies",
    name: "Islamic Studies",
    h1: "Islamic Studies for Children — Live Online Classes",
    metaTitle: "Online Islamic Studies for Kids",
    metaDescription:
      "Live online Islamic studies classes for children: beliefs, prayer and fiqh, hadith, the seerah of the Prophet, daily duas and good manners, taught by qualified teachers.",
    summary:
      "Beliefs, prayer, hadith, the Prophet's life, daily duas and manners — taught in simple, age-appropriate lessons.",
    answer:
      "Islamic studies classes teach children what they need to practise their faith: basic beliefs (aqidah), purification and prayer (fiqh), sayings of the Prophet (hadith), the life of the Prophet (seerah), everyday duas and good manners (adab).",
    intro: [
      "Children growing up abroad often learn to recite the Quran but have fewer chances to learn what Islam asks of them day to day. Islamic studies fills that gap with clear, gentle lessons that a child can understand and use.",
      "Lessons are live and interactive. Children ask questions, answer the teacher and are tested each week, so knowledge is remembered rather than just heard.",
    ],
    whoFor: [
      "Children who are learning to recite the Quran and also need to learn the basics of the religion",
      "Families in the Gulf who want a structured alternative to piecing knowledge together from videos",
      "Children preparing to pray, fast and practise Islam independently",
    ],
    learn: [
      { title: "Aqidah — core beliefs", text: "Belief in Allah, the angels, the books, the messengers, the Last Day and destiny, explained simply." },
      { title: "Fiqh — purification and prayer", text: "How to make wudu and how to pray, with the reasons behind each step, plus the basics of fasting." },
      { title: "Hadith", text: "Short, well-known sayings of the Prophet (ﷺ) that shape character, learnt with their meanings." },
      { title: "Seerah and stories of the prophets", text: "The life of Prophet Muhammad (ﷺ) and the stories of earlier prophets as lessons for daily life." },
      { title: "Duas and adab", text: "Duas for everyday moments and the manners a Muslim child is taught with family, teachers and neighbours." },
    ],
    howItWorks: [
      "Live classes with qualified teachers who explain each topic step by step",
      "One-to-one attention when a child needs a topic explained again",
      "Regular assessments and progress reports",
      "A certificate on completion",
    ],
    outcome:
      "Your child understands the essentials of their faith, prays and makes wudu correctly and knows the duas and manners of everyday life.",
    faqs: [
      {
        q: "Is Islamic studies taught separately from Quran classes?",
        a: "Yes. Quran learning and Islamic studies are separate subjects, and many families choose both. Message us to plan a combined weekly timetable.",
      },
      {
        q: "Are the lessons suitable for young children?",
        a: "Topics are taught in simple, age-appropriate language. Tell us your child's age and we will suggest the right level.",
      },
    ],
    related: ["quran-recitation-tajweed", "noorani-qaida"],
    keywords: ["online islamic studies for kids", "online fiqh hadith seerah classes", "islamic education Gulf children"],
  },
];

export function getCourse(slug: string) {
  return courses.find((c) => c.slug === slug);
}
