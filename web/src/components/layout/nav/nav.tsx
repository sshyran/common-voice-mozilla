import { Localized } from '@fluent/react';
import * as React from 'react';
import { trackNav, getTrackClass } from '../../../services/tracker';
import URLS from '../../../urls';
import {
  ContributableLocaleLock,
  LocaleNavLink,
  useLocale,
} from '../../locale-helpers';
import ContributeMenu from './contribute-menu';

import './nav.css';

type NavProps = {
  id?: string;
  shouldExpandNavItems?: boolean;
  isContributionPageActive?: boolean;
  children?: React.ReactNode;
};

const LocalizedNavLink = ({ id, to }: { id: string; to: string }) => {
  const [locale] = useLocale();
  return (
    <Localized id={id}>
      <LocaleNavLink
        className={getTrackClass('fs', id)}
        to={to}
        exact
        onClick={() => trackNav(id, locale)}
      />
    </Localized>
  );
};

const Nav: React.FC<NavProps> = ({
  children,
  shouldExpandNavItems,
  isContributionPageActive,
  ...props
}) => {
  const [showMenu, setShowMenu] = React.useState(false);
  const [showMobileMenu, setShowMobileMenu] = React.useState(false);

  const toggleMobileMenuVisible = () => {
    setShowMobileMenu(!showMobileMenu);
  };

  return (
    <nav {...props} className="nav-list">
      <div className="nav-links">
        <ContributableLocaleLock>
          <ContributeMenu
            showMenu={showMenu}
            setShowMenu={setShowMenu}
            showMobileMenu={showMobileMenu}
            toggleMobileMenuVisible={toggleMobileMenuVisible}
            isContributionPageActive={isContributionPageActive}
          />
        </ContributableLocaleLock>
        {shouldExpandNavItems && (
          <>
            <LocalizedNavLink id="datasets" to={URLS.DATASETS} />
            <LocalizedNavLink id="languages" to={URLS.LANGUAGES} />
            <LocalizedNavLink id="partner" to={URLS.PARTNER} />
            <LocalizedNavLink id="about" to={URLS.ABOUT} />
          </>
        )}
      </div>
      {children}
    </nav>
  );
};

export default Nav;
