export type AppRedirect = {
  source: string;
  destination: string;
  permanent: boolean;
};

export const redirects = [
  {
    source: '/produktsiya/dezinfitsiruyushchie-sredstva/proff-oksi',
    destination: '/produktsiya/dezinfitsiruyushchie-sredstva/proff-mk',
    permanent: true,
  },
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
] satisfies AppRedirect[];
