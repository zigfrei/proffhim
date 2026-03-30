export interface MenuItem {
  href: string;
  label: string;
}

const HASH_SYMBOL = '#';
const QUERY_SYMBOL = '?';

const normalizePath = (value: string) =>
  value.split(QUERY_SYMBOL)[0]?.split(HASH_SYMBOL)[0] || '/';

export const isMenuItemActive = ({ href, pathname }: { href: string; pathname: string }) => {
  if (href.includes(HASH_SYMBOL)) {
    return false;
  }

  return normalizePath(href) === normalizePath(pathname);
};