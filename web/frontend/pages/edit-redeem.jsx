import { Card, Page, Layout, TextContainer, Stack, Heading } from '@shopify/polaris';

export default function Billing() {
  return (
    <>
      <Page>
        <Layout>
          <Layout.Section>
            <Card sectioned>
              <Stack wrap={false} spacing="extraTight" distribution="trailing" alignment="center">
                <Stack.Item fill>
                  <TextContainer spacing="loose">
                    <Heading>Edit reward</Heading>
                    <p>Edit reward page page</p>
                  </TextContainer>
                </Stack.Item>
              </Stack>
            </Card>
          </Layout.Section>
        </Layout>
      </Page>
    </>
  );
}
