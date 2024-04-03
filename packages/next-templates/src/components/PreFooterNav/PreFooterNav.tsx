import { Link } from '@utrecht/component-library-react';
import { IconChevronRight, IconChevronUp } from '@tabler/icons-react';
import './pre-footer-nav.css';

export const PreFooterNav = () => (
  <div className="voorbeeld-pre-footer">
    <Link className="voorbeeld-pre-footer-link" href="#">
      {/* empty link - page doesnt exist yet */}
      <IconChevronRight />
      Wat vindt u van deze pagina
    </Link>
    <Link className="voorbeeld-pre-footer-link" href="#">
      Naar boven
      <IconChevronUp />
    </Link>
  </div>
);

PreFooterNav.displayName = 'PreFooterNav';
