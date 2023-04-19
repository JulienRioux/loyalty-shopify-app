import { BrowserRouter } from 'react-router-dom';
import Routes from './Routes';

import { AppBridgeProvider, QueryProvider, PolarisProvider } from './components';
import { Navigation, TopNav } from './components/navigation';
import { Frame } from '@shopify/polaris';

const logo = {
  width: 60,
  topBarSource: 'https://getokapi.xyz/_next/static/media/okapi-logo-3.42b43f73.png',
  contextualSaveBarSource: 'https://getokapi.xyz/_next/static/media/okapi-logo-3.42b43f73.png',
  url: '/',
  accessibilityLabel: 'Okapi',
};

export default function App() {
  // Any .tsx or .jsx files in /pages will become a route
  // See documentation for <Routes /> for more info
  const pages = import.meta.globEager('./pages/**/!(*.test.[jt]sx)*.([jt]sx)');

  return (
    <PolarisProvider>
      <BrowserRouter>
        <AppBridgeProvider>
          <QueryProvider>
            <Frame logo={logo} topBar={<TopNav />} navigation={<Navigation />}>
              <Routes pages={pages} />
            </Frame>
          </QueryProvider>
        </AppBridgeProvider>
      </BrowserRouter>
    </PolarisProvider>
  );
}
