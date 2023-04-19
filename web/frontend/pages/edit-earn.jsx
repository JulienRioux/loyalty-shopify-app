import {
  Text,
  Page,
  Layout,
  Button,
  Divider,
  VerticalStack,
  AlphaCard,
  RadioButton,
  HorizontalGrid,
} from '@shopify/polaris';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { ChevronLeftMinor } from '@shopify/polaris-icons';
import { useCallback, useState } from 'react';
import { PageHeader } from '../components/page-header';

const TitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;

export default function Billing() {
  const navigate = useNavigate();

  const [value, setValue] = useState('dynamic');

  const handleChange = useCallback((_, newValue) => setValue(newValue), []);

  return (
    <>
      <Page>
        <Layout>
          <Layout.Section>
            <PageHeader title="Place an order" showGoBack />
            <VerticalStack gap="8">
              <HorizontalGrid gap="4" columns={['twoThirds', 'oneThird']}>
                <VerticalStack>
                  <AlphaCard>
                    <VerticalStack vertical gap="4">
                      <Text fontWeight="bold" variant="headingMd">
                        Earning type
                      </Text>

                      <VerticalStack vertical gap="2">
                        <RadioButton
                          label="Increments of points (recommended)"
                          checked={value === 'dynamic'}
                          id="dynamic"
                          name="type"
                          onChange={handleChange}
                        />
                        <RadioButton
                          label="Fixed amount of points"
                          id="fixed"
                          name="type"
                          checked={value === 'fixed'}
                          onChange={handleChange}
                        />
                      </VerticalStack>
                    </VerticalStack>
                  </AlphaCard>
                </VerticalStack>

                <VerticalStack>
                  <AlphaCard>
                    <VerticalStack vertical gap="4">
                      <Text fontWeight="bold" variant="headingMd">
                        Summary
                      </Text>
                    </VerticalStack>
                  </AlphaCard>
                </VerticalStack>
              </HorizontalGrid>
            </VerticalStack>
          </Layout.Section>
        </Layout>
      </Page>
    </>
  );
}
