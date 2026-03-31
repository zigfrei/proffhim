import clsx from 'clsx';


type ButtonProps = React.PropsWithChildren<
    React.ButtonHTMLAttributes<HTMLButtonElement>
>;

export function Button({ children, className, ...rest }: ButtonProps) {
  return (
    <button
      {...rest}
      className={clsx(
        'flex px-6 py-2 items-center bg-primary typo-h5 text-base-black base-frame lg:base-frame-interactive',
        className,
      )}
    >
      {children}
    </button>
  );
}

export function BigButton({ children, className, ...rest }: ButtonProps) {
  return (
    <button
      {...rest}
      className={clsx(
        'flex px-6 py-4 items-center justify-center bg-primary typo-h4 text-base-black base-frame lg:base-frame-big lg:base-frame-interactive base-outline',
        className,
      )}
    >
      {children}
    </button>
  );
}