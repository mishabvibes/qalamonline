import type { Faq } from "./courses";

export type Block =
  | { type: "p"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "ol"; items: string[] };

export type Section = { h2: string; blocks: Block[] };

export type Post = {
  slug: string;
  title: string;
  /** Shorter title for the <title> tag (search results truncate around 60 characters). */
  metaTitle: string;
  description: string;
  date: string;
  updated: string;
  /** Direct answer shown at the top of the article. */
  answer: string;
  sections: Section[];
  faqs?: Faq[];
  course: string; // related course slug
  category: string;
};

export const posts: Post[] = [
  {
    slug: "noorani-qaida-guide-for-parents",
    metaTitle: "Noorani Qaida: A Parent's Guide",
    title: "Noorani Qaida: A Parent's Guide to Starting Quran Reading",
    description:
      "What Noorani Qaida is, what children learn in it, how to tell when your child is ready, and how parents can support daily practice at home.",
    date: "2026-09-20",
    updated: "2026-09-20",
    category: "Quran learning",
    course: "noorani-qaida",
    answer:
      "Noorani Qaida is a step-by-step primer that teaches children the Arabic letters, their correct sounds, the vowel marks and the first reading rules. Children who finish it can read Arabic script accurately and are ready to start reading the Quran itself.",
    sections: [
      {
        h2: "What is Noorani Qaida?",
        blocks: [
          { type: "p", text: "Noorani Qaida is a book that many children begin with when they learn to read the Quran. It does not ask a child to read a single verse. Instead it builds the skills needed to read any verse: recognising letters, saying each from its correct point in the mouth or throat, and knowing how the vowel marks change a sound." },
          { type: "p", text: "Think of it as the alphabet-and-phonics stage of Quran reading. Skipping it usually shows up later as mispronounced letters that are hard to fix." },
        ],
      },
      {
        h2: "What does a child learn, and in what order?",
        blocks: [
          { type: "p", text: "Different teachers arrange the lessons slightly differently, but the progression is almost always the same:" },
          { type: "ol", items: [
            "The individual Arabic letters and their sounds",
            "Letters joined together, because Arabic letters change shape within a word",
            "The short vowels: fathah, kasrah and dammah",
            "Tanween, the double vowel marks at the end of a word",
            "Long vowels (madd) and the soft letters (leen)",
            "Sukoon, the mark for a silent letter, and shaddah, the mark that doubles a letter",
            "Reading whole words and lines smoothly",
          ] },
          { type: "p", text: "At Qalam, each of these stages is tested in the weekly assessment, so a child does not move ahead until the previous step is secure. You can see the full outline on the [Noorani Qaida course page](/courses/noorani-qaida)." },
        ],
      },
      {
        h2: "How do I know my child is ready to begin?",
        blocks: [
          { type: "p", text: "There is no single right age. What matters is readiness:" },
          { type: "ul", items: [
            "They can sit and follow a teacher through a short live class",
            "They are beginning to read in their school language, so they understand that marks on a page carry sounds",
            "They can repeat a sound after hearing it once or twice",
          ] },
          { type: "p", text: "If you are unsure, message the teacher with your child's age and what they can already do; a good teacher can tell in a few minutes of class." },
        ],
      },
      {
        h2: "How can parents help at home?",
        blocks: [
          { type: "p", text: "You do not need to know Arabic. What helps most is a routine:" },
          { type: "ul", items: [
            "Ten to fifteen minutes of practice at the same time every day is better than one long session on the weekend",
            "Sit near your child while they practise and ask them to show you the lesson; teaching it back to you deepens learning",
            "Praise effort and progress, not speed",
            "If you notice the teacher corrected a letter, gently remind your child of that correction the next day",
          ] },
        ],
      },
      {
        h2: "Common mistakes to avoid",
        blocks: [
          { type: "ul", items: [
            "Rushing to the Quran before the child is confident with the letters",
            "Ignoring the points of articulation, because a letter learnt with the wrong sound is hard to unlearn",
            "Long, tiring sessions that make a child dislike the subject",
            "Comparing your child with siblings or cousins",
          ] },
        ],
      },
      {
        h2: "When is a child ready for Nazra?",
        blocks: [
          { type: "p", text: "Move on when your child reads lines of Qaida smoothly, recognises the marks without hesitation and passes the final assessment. The next stage is [Quran recitation with Tajweed](/courses/quran-recitation-tajweed), where they read from the mushaf itself." },
        ],
      },
    ],
    faqs: [
      { q: "Is Noorani Qaida only for children?", a: "No. The same method suits any beginner who wants to learn to read the Quran, including adults." },
      { q: "Can Noorani Qaida be learnt online?", a: "Yes, provided classes are live. The teacher needs to hear each letter as the child says it in order to correct it." },
    ],
  },
  {
    slug: "online-vs-in-person-madrasa-gulf-families",
    metaTitle: "Online vs In-Person Madrasa in the Gulf",
    title: "Online Madrasa vs In-Person Madrasa: What Gulf Families Should Consider",
    description:
      "An honest comparison of online and in-person madrasa for children in the Gulf: convenience, focus, teacher quality and how to choose a good online madrasa.",
    date: "2026-09-20",
    updated: "2026-09-20",
    category: "Choosing a madrasa",
    course: "quran-recitation-tajweed",
    answer:
      "An online madrasa suits Gulf families who cannot easily reach a good in-person madrasa or whose schedules are tight. It works well when classes are live, teachers are qualified, students get individual attention and parents receive regular progress reports.",
    sections: [
      {
        h2: "Why the question matters for families in the Gulf",
        blocks: [
          { type: "p", text: "Many expatriate families live far from a madrasa that teaches in the language and style they want. School days are long, traffic can be heavy, and weekends are precious. A madrasa that needs a daily commute is difficult to sustain, and children who miss classes quickly fall behind." },
        ],
      },
      {
        h2: "What online madrasa does well",
        blocks: [
          { type: "ul", items: [
            "No travel time, so the class fits into an evening or a weekend morning",
            "Flexible timings that work around school hours, activities and family routines",
            "Freedom to choose a qualified teacher wherever they are, instead of whoever is nearby",
            "Parents can be at home and listen in, which many families value",
            "The same teacher can follow a child if the family moves between Gulf countries",
          ] },
        ],
      },
      {
        h2: "Where in-person madrasa still has the edge",
        blocks: [
          { type: "ul", items: [
            "A physical classroom naturally limits distractions",
            "Children make friends and learn alongside peers",
            "There is no dependence on the internet connection",
          ] },
          { type: "p", text: "These are real trade-offs. They can be reduced with a quiet study corner, a fixed daily slot and a stable connection; see our guide on [helping your child focus in online classes](/blog/help-child-focus-in-online-madrasa-classes)." },
        ],
      },
      {
        h2: "How to choose a good online madrasa",
        blocks: [
          { type: "p", text: "Not all online madrasas are equal. Before enrolling, check that:" },
          { type: "ol", items: [
            "Classes are live and interactive, not recorded videos",
            "Teachers are qualified and experienced, and you can ask about their background",
            "Your child gets individual attention, especially for Quran recitation",
            "There are regular tests and progress reports, so learning is measured",
            "Timings are flexible enough to fit your family's routine",
            "The environment is safe and secure for children",
            "Fees are clear and affordable",
          ] },
          { type: "p", text: "These are the same points we built Qalam Online Madrasa around. If you would like to see how they apply to your child, [contact us](/contact)." },
        ],
      },
    ],
    faqs: [
      { q: "Can a child really learn Tajweed online?", a: "Yes, if the class is live. Tajweed is learnt through listening and correction, and a live teacher can do both in real time." },
      { q: "How much screen time is involved?", a: "Only the length of the class itself. Reading is done from a physical mushaf or Qaida, so children look at the book as well as the screen." },
    ],
  },
  {
    slug: "tajweed-for-beginners-what-children-learn",
    metaTitle: "Tajweed for Beginners: Rules & Order",
    title: "Tajweed for Beginners: What Children Learn, and in What Order",
    description:
      "A plain-language introduction to Tajweed for parents: makharij, noon sakinah rules, meem sakinah, madd, qalqalah and waqf, and the order in which children learn them.",
    date: "2026-09-20",
    updated: "2026-09-20",
    category: "Quran learning",
    course: "quran-recitation-tajweed",
    answer:
      "Tajweed is the set of rules for reciting the Quran correctly. Children usually learn it in this order: the points of articulation of the letters (makharij), the rules for a silent noon and tanween, the rules for a silent meem, the lengthening of vowels (madd), the echoing letters (qalqalah) and finally where to stop (waqf).",
    sections: [
      {
        h2: "What is Tajweed?",
        blocks: [
          { type: "p", text: "The word tajweed comes from an Arabic root meaning to make something excellent. In recitation it means giving each letter its due: its correct sound, its correct length and its correct connection to the letters around it. It is learnt best by listening to a teacher and being corrected, with the rules as a guide." },
        ],
      },
      {
        h2: "Step 1: Makharij — where letters come from",
        blocks: [
          { type: "p", text: "Every Arabic letter is produced from a specific place: the throat, the tongue, the lips or the nasal passage. Children first learn to say the letters from these points. Getting this right is the biggest single improvement in a child's recitation, and it begins in [Noorani Qaida](/courses/noorani-qaida)." },
        ],
      },
      {
        h2: "Step 2: Noon sakinah and tanween",
        blocks: [
          { type: "p", text: "When a noon with no vowel (noon sakinah) or a tanween is followed by a letter, its pronunciation changes according to which letter comes next. There are four rules, covering all 28 letters:" },
          { type: "ul", items: [
            "Izhar — clear pronunciation before the six throat letters",
            "Idgham — merging into the next letter, which applies to six letters",
            "Iqlab — the sound turns into a meem before the letter baa",
            "Ikhfa — a light, hidden sound before the remaining fifteen letters",
          ] },
        ],
      },
      {
        h2: "Step 3: Meem sakinah and ghunnah",
        blocks: [
          { type: "p", text: "A meem with no vowel also has rules that depend on the next letter. Alongside this, children learn ghunnah: the gentle nasal sound that accompanies noon and meem in certain situations, held for a measured length." },
        ],
      },
      {
        h2: "Step 4: Madd — lengthening",
        blocks: [
          { type: "p", text: "Some vowels are held longer than others. The natural madd is held for two counts; other types are extended further, commonly for four to six counts depending on the situation. Children practise this with a teacher until the rhythm becomes natural." },
        ],
      },
      {
        h2: "Step 5: Qalqalah and waqf",
        blocks: [
          { type: "p", text: "Qalqalah is a slight echo on five letters — qaf, taa, baa, jeem and daal — when they carry a sukoon. Waqf is knowing where to pause, and how, so that the meaning is not broken. Both are practised in [Quran recitation classes](/courses/quran-recitation-tajweed) with the teacher listening." },
        ],
      },
      {
        h2: "How long does it take?",
        blocks: [
          { type: "p", text: "It varies with the child's age and how much they practise. Tajweed is not something a child finishes in a single term; it is refined for years. Weekly tests and regular correction keep the progress steady." },
        ],
      },
    ],
    faqs: [
      { q: "Is Tajweed compulsory?", a: "Scholars agree that clear mistakes in recitation must be avoided, and learning Tajweed is strongly encouraged. For children, it is simply the right way to learn to read the Quran from the start." },
      { q: "At what point should Tajweed begin?", a: "Pronunciation is corrected from the very first Qaida lesson. Formal rules such as noon sakinah are introduced once a child reads the Quran fluently." },
    ],
  },
  {
    slug: "how-to-start-hifz-sabaq-sabqi-manzil",
    metaTitle: "How to Start Hifz: Sabaq, Sabqi, Manzil",
    title: "How to Start Hifz: Sabaq, Sabqi and Manzil Explained",
    description:
      "A parent's guide to starting Quran Hifz: when a child is ready, the daily routine of sabaq, sabqi and manzil, and how to support memorisation at home.",
    date: "2026-09-20",
    updated: "2026-09-20",
    category: "Hifz",
    course: "quran-hifz",
    answer:
      "Start Hifz when your child reads the Quran fluently with correct Tajweed. Follow a daily routine with three parts: sabaq (a new lesson), sabqi (revision of the last few lessons) and manzil (revision of older memorisation). Revision is what makes Hifz last.",
    sections: [
      {
        h2: "Is my child ready to start Hifz?",
        blocks: [
          { type: "p", text: "Look for three things. First, fluent reading of the Quran with correct pronunciation. Second, the ability to focus for the length of a class. Third, a family routine that can protect a daily slot for memorisation. Starting before reading is fluent tends to lock in mistakes." },
        ],
      },
      {
        h2: "The three parts of a daily routine",
        blocks: [
          { type: "ul", items: [
            "Sabaq — the new lesson. A small portion, memorised and recited to the teacher.",
            "Sabqi — recent revision. The last few days' lessons, repeated so they settle.",
            "Manzil — long-term revision. Everything memorised earlier, revised on a rolling schedule.",
          ] },
          { type: "p", text: "Many teachers suggest memorising the new lesson when the child's mind is freshest, then doing revision afterwards. The exact schedule should be set with the teacher based on your child's ability and time." },
        ],
      },
      {
        h2: "Why revision matters more than new lessons",
        blocks: [
          { type: "p", text: "New memorisation is quick to forget without repetition. A child who adds a page a day but does not revise will find the earlier pages slipping. Good Hifz programmes protect revision time first and add new lessons only as far as revision allows." },
        ],
      },
      {
        h2: "What parents can do",
        blocks: [
          { type: "ul", items: [
            "Fix the time and place, and keep them the same",
            "Listen to your child recite, even if you do not know the Quran by heart",
            "Check that the child is looking at the correct mushaf edition used by the teacher",
            "Celebrate consistency, not speed",
            "Read the weekly progress report and ask the teacher about weak spots",
          ] },
          { type: "p", text: "The Prophet (ﷺ) said that the best of people are those who learn the Quran and teach it (Sahih al-Bukhari). Hifz is a long path; the support of the family carries a child through the difficult months." },
        ],
      },
      {
        h2: "Common mistakes",
        blocks: [
          { type: "ul", items: [
            "Choosing a portion that is too long for the day",
            "Skipping revision when the schedule is busy",
            "Memorising from different editions of the mushaf",
            "Comparing progress with other children",
          ] },
          { type: "p", text: "If you would like to see how live [Hifz classes](/courses/quran-hifz) work at Qalam, contact us and we will explain the weekly routine." },
        ],
      },
    ],
    faqs: [
      { q: "What are sabaq, sabqi and manzil?", a: "They are the three parts of a daily Hifz routine: the new lesson, revision of recent lessons and revision of older portions." },
      { q: "Can Hifz be done part-time alongside school?", a: "Many children do it in a short daily slot outside school hours. The teacher plans the portion size around the child's available time." },
    ],
  },
  {
    slug: "help-child-focus-in-online-madrasa-classes",
    metaTitle: "Help Your Child Focus in Online Classes",
    title: "How to Help Your Child Focus in Online Madrasa Classes at Home",
    description:
      "Practical tips for parents: setting up a study corner, building a daily routine, staying present without hovering, and following up after each online Quran class.",
    date: "2026-09-20",
    updated: "2026-09-20",
    category: "Parenting tips",
    course: "quran-recitation-tajweed",
    answer:
      "Give your child a quiet, fixed study corner, a device at eye level, a set time each day and their own book in hand. Stay nearby without hovering, and spend ten minutes after class helping them revise what the teacher corrected.",
    sections: [
      {
        h2: "Set up a study corner",
        blocks: [
          { type: "ul", items: [
            "Choose a quiet spot, away from the television and the kitchen",
            "Prop the tablet or laptop at eye level so the child is not slouching over a screen",
            "Keep the mushaf or Qaida, a pencil and a notebook beside them",
            "Charge the device and test the internet a few minutes before class",
            "Headphones help in a busy home, but check that the teacher can hear your child clearly",
          ] },
        ],
      },
      {
        h2: "Build a routine",
        blocks: [
          { type: "p", text: "Children focus better when class is part of the daily pattern, not a surprise. Choose a slot after school, snack and rest, and try to keep it the same each day. Our [time finder](/#time-finder) shows what a class time looks like across Gulf countries, so you can choose a slot that works for your family." },
        ],
      },
      {
        h2: "During class: be present, not hovering",
        blocks: [
          { type: "ul", items: [
            "Stay in the room or nearby, so the child knows you care about the class",
            "Do not answer for your child or interrupt the teacher",
            "Keep siblings and screens away",
            "Let your child hold their own book and point to the words",
          ] },
        ],
      },
      {
        h2: "After class: ten minutes of follow-up",
        blocks: [
          { type: "p", text: "Ask your child what the teacher corrected and have them recite it once more to you. Short, immediate practice fixes corrections far better than waiting for the next class." },
        ],
      },
      {
        h2: "If your child resists",
        blocks: [
          { type: "ul", items: [
            "Keep sessions short and consistent rather than long and tiring",
            "Praise effort specifically: 'I liked how carefully you said that letter'",
            "Talk to the teacher — a change of pace or a different teaching style may help",
            "Check the timing; a child who is tired or hungry will not focus at any age",
          ] },
        ],
      },
    ],
    faqs: [
      { q: "How old should a child be to attend online classes?", a: "The main requirement is that the child can sit and follow a live class. Tell us your child's age and we will suggest the right starting point." },
      { q: "Should I sit with my child during the class?", a: "Being nearby is helpful, especially for younger children. Avoid answering for them or interrupting the teacher." },
    ],
  },
];

export function getPost(slug: string) {
  return posts.find((p) => p.slug === slug);
}

export function readingMinutes(post: Post) {
  const words = [post.answer, ...post.sections.flatMap((s) => [s.h2, ...s.blocks.flatMap((b) => (b.type === "p" ? [b.text] : b.items))])]
    .join(" ")
    .split(/\s+/).length;
  return Math.max(2, Math.round(words / 200));
}
