import {
  AlphaCard,
  Page,
  Layout,
  VerticalStack,
  LegacyStack,
  Text,
  Divider,
  HorizontalGrid,
  Button,
} from '@shopify/polaris';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { PageHeader } from '../components/page-header';

export const UnstyledLink = styled(Link)`
  color: inherit;
  text-decoration: none;
`;

const RewardSection = ({ title, description, cardTitle, cardDescription, editLink }) => {
  return (
    <HorizontalGrid gap="20" columns={2}>
      <VerticalStack gap="4">
        <Text fontWeight="bold" variant="headingMd">
          {title}
        </Text>

        <Text>{description}</Text>
      </VerticalStack>

      <AlphaCard sectioned>
        <VerticalStack gap="4">
          <Text fontWeight="bold">{cardTitle}</Text>

          <Text color="subdued">{cardDescription}</Text>

          <UnstyledLink to={editLink}>
            <Button fullWidth size="slim">
              Edit
            </Button>
          </UnstyledLink>
        </VerticalStack>
      </AlphaCard>
    </HorizontalGrid>
  );
};

export default function HomePage() {
  return (
    <>
      <Page>
        <Layout>
          <Layout.Section>
            <LegacyStack wrap={false} spacing="extraTight" distribution="trailing" alignment="center">
              <LegacyStack.Item fill>
                <PageHeader title="Loyalty program" />

                <VerticalStack gap="8">
                  <RewardSection
                    title="Earn points"
                    description="Create ways your customers can earn points when they join and engage with your brand."
                    cardTitle="Place an order"
                    cardDescription="5 Points for every $1 spent"
                    editLink="/edit-earn"
                  />

                  <Divider />

                  <RewardSection
                    title="Redeem points"
                    description="Create rewards your customers can redeem with the points they've earned."
                    cardTitle="Order discount"
                    cardDescription="100 Points = $1"
                    editLink="/edit-redeem"
                  />
                </VerticalStack>
              </LegacyStack.Item>
            </LegacyStack>
          </Layout.Section>
        </Layout>
      </Page>
    </>
  );
}
