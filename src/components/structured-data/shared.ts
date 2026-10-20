export const SITE_URL = 'https://proffhim.by';

export function absoluteUrl(path: string) {
  return new URL(path, SITE_URL).toString();
}

export const PUBLISHER = {
  '@type': 'Organization',
  '@id': `${SITE_URL}/#organization`,
  name: 'ПроффХим',
  url: SITE_URL,
  logo: {
    '@type': 'ImageObject',
    url: absoluteUrl('/logo.png'),
  },
};
