import { Page, Layout } from '@shopify/polaris';
import { PageHeader } from '../components/page-header';

export default function Billing() {
  return (
    <>
      <Page>
        <Layout>
          <Layout.Section>
            <PageHeader title="Activity" />

            <p>TODO: Activity summary table</p>
          </Layout.Section>
        </Layout>
      </Page>
    </>
  );
}
