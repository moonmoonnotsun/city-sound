export const contact = {
  phone: '+971 58 262 1932',
  phoneTel: '+971582621932',
  email: 'dxbcitysound@gmail.com',
  instagram: 'dxbcitysound',
  instagramUrl: 'https://instagram.com/dxbcitysound',
  whatsappUrl: 'https://wa.me/971582621932',
}

/** Homepage hero carousel — mirrors original citysound.ae feature slides */
export const heroFeatures = [
  {
    id: 'staff',
    title: 'Professional staff',
    emphasis: 'for your event',
    image: '/assets/img/staff1.jpg',
    href: '/services/entertainment',
  },
  {
    id: 'entertainment',
    title: 'Entertainment',
    emphasis: '',
    image: '/assets/img/ent1.jpg',
    href: '/services/entertainment',
  },
  {
    id: 'tech',
    title: 'Technical support',
    emphasis: 'of events',
    image: '/assets/img/slide01.jpg',
    href: '/services/sound',
  },
  {
    id: 'karaoke',
    title: 'Outdoor Karaoke',
    emphasis: 'for your party',
    image: '/assets/img/slide04.jpg',
    href: '/services/karaoke',
  },
] as const

export type TopicSection = {
  title: string
  paragraphs: string[]
  image?: string
  gallery?: string[]
}

export type Topic = {
  slug: string
  title: string
  navLabel: string
  summary: string
  heroImage: string
  sections: TopicSection[]
}

export const topics: Topic[] = [
  {
    slug: 'sound',
    title: 'Sound equipment and stages',
    navLabel: 'Sound & Stages',
    summary:
      'Acoustic systems and stages for events of any scale — ready kits or custom builds.',
    heroImage: '/assets/img/zvuk3.png',
    sections: [
      {
        title: 'Sound sets',
        paragraphs: [
          'We will select sound equipment based on event and budget. Sound kits are available for events of any format.',
          'Equipment rental is possible with our specialist / sound engineer.',
        ],
        image: '/assets/img/zvuk1.png',
      },
      {
        title: 'Stage design',
        paragraphs: [
          'Stage designs / podium for your event. Carpet covering. Production of a stage backdrop and stage skirt of any type and complexity.',
        ],
        image: '/assets/img/stage.png',
      },
      {
        title: 'DJ equipment',
        paragraphs: [
          'Professional DJ equipment. DJ controllers and turntables for parties on yachts and other venues.',
        ],
        image: '/assets/img/zvuk3.png',
      },
    ],
  },
  {
    slug: 'lighting',
    title: 'Lighting equipment',
    navLabel: 'Lighting',
    summary:
      'From a single fixture to a full venue wash — light that shapes the night.',
    heroImage: '/assets/img/svet3.png',
    sections: [
      {
        title: 'Uplighting',
        paragraphs: [
          'A set of lighting devices for any type of venue. Ability to set up a venue in any color and illuminate important points.',
          'Uplighting kits are formed individually, depending on the venue and your requirements.',
          'We also provide installation / dismantling and lighting engineer support for events.',
        ],
        gallery: [
          '/assets/photo/up1.jpg',
          '/assets/photo/up2.jpg',
          '/assets/photo/up3.jpg',
          '/assets/photo/up4.jpg',
        ],
      },
      {
        title: 'Parblizers',
        paragraphs: [
          'A popular type of device. It provides a fill-light effect and has various modes to create the right atmosphere.',
        ],
        image: '/assets/img/svet2.png',
      },
      {
        title: 'Light racks and trusses',
        paragraphs: [
          'Various racks for mounting lighting devices — from small stands to light trusses for a full stage set-up.',
        ],
        image: '/assets/img/svet3.png',
      },
    ],
  },
  {
    slug: 'multimedia',
    title: 'Multimedia',
    navLabel: 'Multimedia',
    summary:
      'Projectors, plasma panels, LED screens and digital surfaces that carry your story.',
    heroImage: '/assets/img/led.png',
    sections: [
      {
        title: 'Video projectors',
        paragraphs: [
          'Video projectors for broadcasting host programs, company presentations, slideshows and more. A variety of projectors and screens available.',
        ],
        image: '/assets/img/mult1.png',
      },
      {
        title: 'Plasma panels',
        paragraphs: [
          'Plasma panels serve the same purposes as projectors, but are more convenient and compact — a good fit for smaller rooms. Available with or without a tripod.',
        ],
        image: '/assets/img/mult2.png',
      },
      {
        title: 'LED screens',
        paragraphs: [
          'LED screens attract attention with high image quality and can run 24/7. Show static or dynamic content, including live video broadcasting.',
        ],
        image: '/assets/img/led.png',
      },
    ],
  },
  {
    slug: 'karaoke',
    title: 'Karaoke',
    navLabel: 'Karaoke',
    summary:
      'Bring the karaoke club to your party — pro systems with full on-site support.',
    heroImage: '/assets/img/kar3.png',
    sections: [
      {
        title: 'Outdoor karaoke',
        paragraphs: [
          'A full set of professional equipment for outdoor karaoke — accompanied by a sound engineer, show host and backing vocals.',
        ],
        image: '/assets/img/kar1.png',
      },
      {
        title: 'Karaoke machine',
        paragraphs: [
          'Already have the rest of the setup? Rent a professional karaoke system (AST) from us.',
        ],
        image: '/assets/img/kar2.png',
      },
      {
        title: 'Karaoke accompaniment',
        paragraphs: [
          'Need someone to handle technical issues, host the karaoke evening, or provide backing vocals? We can help.',
        ],
        image: '/assets/img/kar3.png',
      },
    ],
  },
  {
    slug: 'effects',
    title: 'Special effects',
    navLabel: 'Special Effects',
    summary:
      'Confetti, heavy smoke, CO₂ cryo — stage effects that make the moment unforgettable.',
    heroImage: '/assets/img/stage.png',
    sections: [
      {
        title: 'Heavy smoke',
        paragraphs: [
          'The heavy smoke generator creates a low-flying fog effect — often used for wedding first dances and live performances. Rent the generator alone or with full specialist support.',
        ],
        gallery: ['/assets/photo/dim1.jpg', '/assets/photo/dim2.jpg'],
      },
      {
        title: 'Confetti',
        paragraphs: [
          'Used at grand openings, weddings, corporates and more — usually to mark a special moment. Available with specialist support.',
        ],
        gallery: ['/assets/photo/kon1.jpg', '/assets/photo/kon2.jpg'],
      },
      {
        title: 'CO₂ cryo effects',
        paragraphs: [
          'One of the most powerful effects for concerts, parties and large-scale events. Stationary and handheld CO₂ guns available.',
        ],
        gallery: [
          '/assets/photo/co2.jpg',
          '/assets/photo/co22.jpg',
          '/assets/photo/co23.jpg',
        ],
      },
    ],
  },
  {
    slug: 'entertainment',
    title: 'Entertainment staff',
    navLabel: 'Entertainment',
    summary:
      'Experienced crew for one-off parties or ongoing venue contracts — on your terms.',
    heroImage: '/assets/img/staff1.jpg',
    sections: [
      {
        title: 'Event professionals',
        paragraphs: [
          'Entertainment services for any need: DJs, show hosts, MCs, go-go dancers, catering staff and other event support professionals with the City Sound team.',
        ],
        image: '/assets/img/key1.jpg',
      },
      {
        title: 'For venue owners',
        paragraphs: [
          'We provide specialists on contract terms for your establishment.',
        ],
        image: '/assets/img/key2.jpg',
      },
      {
        title: 'For organizers & private events',
        paragraphs: [
          'Our specialists can serve events of any complexity. Flexible discounts and bonuses for regular customers — all conditions negotiated individually.',
        ],
        image: '/assets/img/key3.jpg',
      },
    ],
  },
]

export const services = topics.map((topic) => ({
  id: topic.slug,
  title: topic.navLabel,
  copy: topic.summary,
  image: topic.heroImage,
  href: `/services/${topic.slug}`,
}))

export const aboutPoints = [
  'Technical support for your event',
  'Help organize any type of party',
  'Equipment matched to your brief & budget',
  'Quality sound, light, and atmosphere for guests',
]

export const reasons = [
  {
    title: 'Proven crew',
    copy: 'An ambitious team with real experience in the entertainment market.',
  },
  {
    title: '3+ years live',
    copy: 'We follow modern standards and trends — and ship them on site.',
  },
  {
    title: 'Any event scale',
    copy: 'A wide kit of solutions for technical support of every event type.',
  },
  {
    title: 'Full cycle',
    copy: 'From install to strike — including force majeure protection.',
  },
  {
    title: 'Problem solvers',
    copy: 'We handle technical surprises so your guests never notice.',
  },
  {
    title: 'Straight pricing',
    copy: 'Professional gear only. No dealer markup. No hidden costs.',
  },
]

export function getTopic(slug: string | undefined) {
  return topics.find((t) => t.slug === slug)
}
