import { Link } from '@utrecht/component-library-react';
import { IconChevronRight, IconChevronUp } from '@tabler/icons-react';
import './pre-footer-nav.css';

export const PreFooterNav = () => (
  <div className="voorbeeld-pre-footer">
    <Link href="#">
      {/* empty link - page doesnt exist yet */}
      <IconChevronRight />
      Wat vindt u van deze pagina
    </Link>
    <Link href="#">
      Naar boven
      <IconChevronUp />
    </Link>
  </div>
);

PreFooterNav.displayName = 'PreFooterNav';
