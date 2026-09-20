export type Country = {
  slug: string;
  name: string;
  short: string;
  /** minutes ahead of UTC (no daylight saving in any of these countries) */
  offsetMin: number;
  tzLabel: string;
  weekend: string;
  cities: string[];
  /** A sentence that is genuinely specific to the country's school/work rhythm. */
  rhythm: string;
};

export const countries: Country[] = [
  {
    slug: "uae",
    name: "United Arab Emirates",
    short: "UAE",
    offsetMin: 240,
    tzLabel: "Gulf Standard Time (UTC+4)",
    weekend: "Saturday and Sunday (Friday is a shortened day)",
    cities: ["Dubai", "Abu Dhabi", "Sharjah", "Ajman", "Ras Al Khaimah"],
    rhythm:
      "Most UAE families now have a Saturday–Sunday weekend with a shorter Friday, so weekday evenings after school and weekend mornings are the natural slots for madrasa study.",
  },
  {
    slug: "saudi-arabia",
    name: "Saudi Arabia",
    short: "Saudi Arabia",
    offsetMin: 180,
    tzLabel: "Arabia Standard Time (UTC+3)",
    weekend: "Friday and Saturday",
    cities: ["Riyadh", "Jeddah", "Dammam", "Al Khobar", "Madinah"],
    rhythm:
      "With a Friday–Saturday weekend, many Saudi families use Thursday and Friday evenings for longer sessions, and keep short classes on school days.",
  },
  {
    slug: "qatar",
    name: "Qatar",
    short: "Qatar",
    offsetMin: 180,
    tzLabel: "Arabia Standard Time (UTC+3)",
    weekend: "Friday and Saturday",
    cities: ["Doha", "Al Wakrah", "Al Khor", "Lusail"],
    rhythm:
      "Qatar shares its time zone with Saudi Arabia and Kuwait, and families usually fit classes around the school day and evening prayers.",
  },
  {
    slug: "kuwait",
    name: "Kuwait",
    short: "Kuwait",
    offsetMin: 180,
    tzLabel: "Arabia Standard Time (UTC+3)",
    weekend: "Friday and Saturday",
    cities: ["Kuwait City", "Salmiya", "Farwaniya", "Hawally", "Fahaheel"],
    rhythm:
      "Kuwait follows a Friday–Saturday weekend; Thursday and Friday are convenient for families who want a longer, unhurried class.",
  },
  {
    slug: "oman",
    name: "Oman",
    short: "Oman",
    offsetMin: 240,
    tzLabel: "Gulf Standard Time (UTC+4)",
    weekend: "Friday and Saturday",
    cities: ["Muscat", "Salalah", "Sohar", "Nizwa"],
    rhythm:
      "Oman runs on the same clock as the UAE but keeps a Friday–Saturday weekend, so a class that is 7:00 PM in Muscat is also 7:00 PM in Dubai.",
  },
  {
    slug: "bahrain",
    name: "Bahrain",
    short: "Bahrain",
    offsetMin: 180,
    tzLabel: "Arabia Standard Time (UTC+3)",
    weekend: "Friday and Saturday",
    cities: ["Manama", "Riffa", "Muharraq", "Isa Town"],
    rhythm:
      "Bahrain's Friday–Saturday weekend and UTC+3 clock match Saudi Arabia, Qatar and Kuwait, so timings are identical across those four countries.",
  },
];

export const india = { name: "India (Kerala)", short: "India", offsetMin: 330 };

export function getCountry(slug: string) {
  return countries.find((c) => c.slug === slug);
}

/** "7:00 PM" style label from minutes since midnight. */
export function fmtTime(totalMin: number) {
  const m = ((totalMin % 1440) + 1440) % 1440;
  const h24 = Math.floor(m / 60);
  const min = m % 60;
  const suffix = h24 >= 12 ? "PM" : "AM";
  const h12 = h24 % 12 === 0 ? 12 : h24 % 12;
  return `${h12}:${String(min).padStart(2, "0")} ${suffix}`;
}

/** Convert a local time in `from` to the local time in `to` (minutes since midnight). */
export function convert(localMin: number, fromOffset: number, toOffset: number) {
  return localMin + (toOffset - fromOffset);
}
