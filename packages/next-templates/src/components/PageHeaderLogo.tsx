import { Link } from '@utrecht/component-library-react/dist/css-module';
import { useId } from 'react';
import Logo from '@/app/styling/assets/voorbeeld-header.svg';

export const PageHeaderLogo = () => {
  const homepageTitleId = useId();
  return (
    <Link boxContent href="/" aria-labelledby={homepageTitleId}>
      <span id={homepageTitleId} hidden>
        homepage
      </span>
      <Logo role="img" aria-label="logo van gemeente Voorbeeld" />
    </Link>
  );
};
