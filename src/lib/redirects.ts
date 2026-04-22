export type AppRedirect = {
  source: string;
  destination: string;
  permanent: boolean;
};

export const redirects = [
  // Example:
  // {
  //   source: '/staraya-stranitsa',
  //   destination: '/novaya-stranitsa',
  //   permanent: true,
  // },
  {
    source: '/index.shtml',
    destination: '/',
    permanent: true,
  },
  {
    source: '/about.shtml',
    destination: '/o-kompanii',
    permanent: true,
  },
  {
    source: '/catalog.shtml',
    destination: '/produktsiya',
    permanent: true,
  },
  {
    source: '/certificate.shtml',
    destination: '/sertifikaty',
    permanent: true,
  },
  {
    source: '/b2b.shtml',
    destination:
      '/kontraktnoe-proizvodstvo-moyushchih-i-dezinficiruyushchih-sredstv',
    permanent: true,
  },
  {
    source: '/contacts.shtml',
    destination: '/kontakty',
    permanent: true,
  },
  {
    source: '/wash_prog.shtml',
    destination: '/',
    permanent: true,
  },
  {
    source: '/news.shtml',
    destination: '/',
    permanent: true,
  },
  {
    source: '/news_25.shtml',
    destination: '/',
    permanent: true,
  },
  {
    source: '/news_24.shtml',
    destination: '/',
    permanent: true,
  },
  {
    source: '/news_23.shtml',
    destination: '/',
    permanent: true,
  },
  {
    source: '/news_22.shtml',
    destination: '/',
    permanent: true,
  },
  {
    source: '/news_21.shtml',
    destination: '/',
    permanent: true,
  },
  {
    source: '/news_20.shtml',
    destination: '/',
    permanent: true,
  },
] satisfies AppRedirect[];
