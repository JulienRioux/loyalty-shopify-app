import { Navigation as PolarisNavigation } from '@shopify/polaris';
import { useNavigate, useLocation } from 'react-router-dom';

export const Navigation = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <PolarisNavigation location={location.pathname}>
      <PolarisNavigation.Section
        items={[
          {
            url: '/',
            label: 'Program',
            excludePaths: ['/billing', '/activity'],
            onClick: () => navigate('/'),
          },
          {
            url: '/activity',
            label: 'Activity',
            onClick: () => navigate('/activity'),
          },
          {
            url: '/billing',
            label: 'Billing',
            onClick: () => navigate('/billing'),
          },
        ]}
      />
    </PolarisNavigation>
  );
};

import { TopBar } from '@shopify/polaris';

export const TopNav = () => {
  return (
    <TopBar
      showNavigationToggle
      // userMenu={userMenuMarkup}
      // searchResultsVisible={searchActive}
      // searchField={searchFieldMarkup}
      // searchResults={searchResultsMarkup}
      // onSearchResultsDismiss={handleSearchResultsDismiss}
      // onNavigationToggle={toggleMobileNavigationActive}
    />
  );
};
