import clsx from 'clsx';
import Link, { type LinkProps } from 'next/link';

type LinkButtonProps = React.PropsWithChildren<
  LinkProps & Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, keyof LinkProps>
>;

export function LinkButton({ children, className, ...rest }: LinkButtonProps) {
  return (
    <Link
      {...rest}
      className={clsx(
        'flex h-13.5 px-6 py-2 items-center bg-primary typo-h5 text-base-black base-frame lg:base-frame-interactive',
        className,
      )}
    >
      {children}
    </Link>
  );
}

export function BigLinkButton({ children, className, ...rest }: LinkButtonProps) {
  return (
    <Link
      {...rest}
      className={clsx(
        'flex p-4 lg:px-10 lg:py-6 items-center bg-primary typo-h4 text-base-black base-frame lg:base-frame-interactive',
        className,
      )}
    >
      {children}
    </Link>
  );
}