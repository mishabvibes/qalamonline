import type { Faq } from "./courses";

export type FaqGroup = { title: string; items: Faq[] };

export const faqGroups: FaqGroup[] = [
  {
    title: "About the madrasa",
    items: [
      {
        q: "What is an online madrasa?",
        a: "An online madrasa is a madrasa whose classes take place over the internet. Students learn the Quran, Tajweed and Islamic studies in live video classes with a teacher, from home, instead of travelling to a physical centre.",
      },
      {
        q: "Who is Qalam Online Madrasa for?",
        a: "Qalam Online Madrasa is built for Gulf expatriate families who want their children to receive a proper religious education from wherever they live. Our classes suit families in the UAE, Saudi Arabia, Qatar, Kuwait, Oman and Bahrain.",
      },
      {
        q: "Which countries do you teach in?",
        a: "Classes are held online, so any family with a stable internet connection can join. Our timings are designed around the UAE, Saudi Arabia, Qatar, Kuwait, Oman and Bahrain, and families in India can join too.",
      },
      {
        q: "Are the teachers qualified?",
        a: "Yes. Classes are taught by experienced and qualified teachers.",
      },
    ],
  },
  {
    title: "Classes and learning",
    items: [
      {
        q: "What subjects do children learn?",
        a: "Children can learn Noorani Qaida, Quran recitation with Tajweed (Nazra), Quran Hifz and Islamic studies including hadith, fiqh and seerah.",
      },
      {
        q: "Are the classes live or recorded?",
        a: "Classes are live and interactive. The teacher hears the child, corrects mistakes as they happen and answers questions during the class.",
      },
      {
        q: "Will my child get individual attention?",
        a: "Yes. One-to-one attention is a core part of our teaching, so each child gets personalised support for better understanding.",
      },
      {
        q: "Can I choose the class timing?",
        a: "Yes. Timings are flexible, so you can choose a time that suits your child's school hours and your family's routine. Use the time finder on the home page to compare local times across Gulf countries.",
      },
      {
        q: "How will I know my child is improving?",
        a: "Students take weekly tests, and parents receive progress reports, so you can see what has been completed and what needs more practice.",
      },
      {
        q: "Can my child learn to read the Quran online?",
        a: "Yes. Most children begin with Noorani Qaida to learn the Arabic letters and basic reading rules, then move to Quran recitation with Tajweed, and later to Hifz if they wish.",
      },
    ],
  },
  {
    title: "Fees, safety and enrolment",
    items: [
      {
        q: "How much are the fees?",
        a: "Our fees are affordable. The exact amount depends on the course and class schedule, so please message us on WhatsApp for current fee details.",
      },
      {
        q: "Is the online environment safe for children?",
        a: "Yes. We provide a safe and secure online environment for every student. If you have particular questions about how classes are run, ask us on WhatsApp before you enrol.",
      },
      {
        q: "Do students receive a certificate?",
        a: "Yes. Students receive a certificate on completion.",
      },
      {
        q: "What do we need to attend classes?",
        a: "A phone, tablet or computer with a stable internet connection and a quiet place to sit. Our team will guide you through joining your first class.",
      },
      {
        q: "How do I enrol my child?",
        a: "Message or call +91 73066 85324, tell us your country, your child's age and the course you are interested in, and we will suggest a class time.",
      },
    ],
  },
];

export const allFaqs: Faq[] = faqGroups.flatMap((g) => g.items);

const pick = (q: string) => allFaqs.find((f) => f.q === q)!;

/** The handful shown on the home page. */
export const homeFaqs: Faq[] = [
  pick("What is an online madrasa?"),
  pick("Which countries do you teach in?"),
  pick("Are the classes live or recorded?"),
  pick("Can I choose the class timing?"),
  pick("How much are the fees?"),
  pick("How do I enrol my child?"),
];
