import {
  Text,
  Page,
  Layout,
  VerticalStack,
  AlphaCard,
  RadioButton,
  HorizontalGrid,
  TextField,
  Button,
  HorizontalStack,
} from '@shopify/polaris';
import { useCallback, useState } from 'react';
import { PageHeader } from '../components/page-header';

export default function EditEarn() {
  const [type, setType] = useState('dynamic');
  const [status, setStatus] = useState('active');
  const [value, setValue] = useState(5);

  const handleTypeChange = useCallback((_, newValue) => {
    setType(newValue);
    setValue(newValue === 'dynamic' ? 5 : 100);
  }, []);

  const handleStatusChange = useCallback((_, newValue) => {
    setStatus(newValue);
  }, []);

  const handleValueChange = useCallback((newValue) => {
    setValue(Number(newValue));
  }, []);

  const handleSave = useCallback(() => {
    console.log('Submitting:', { type, status, value });
  }, [status, type, value]);

  const INPUT_LABEL = type === 'dynamic' ? 'Points earned for every $1 spent' : 'Points awarded';

  const SUMMARY_TEXT =
    type === 'dynamic'
      ? `Customers earn ${value} points for every $1 spent.`
      : `${value} points for completing action.`;

  return (
    <>
      <Page>
        <Layout>
          <Layout.Section>
            <PageHeader title="Place an order" showGoBack />
            <VerticalStack gap="8">
              <HorizontalGrid gap="4" columns={['twoThirds', 'oneThird']}>
                <VerticalStack gap="4">
                  <AlphaCard>
                    <VerticalStack vertical gap="4">
                      <Text fontWeight="bold" variant="headingMd">
                        Earning type
                      </Text>

                      <VerticalStack vertical gap="2">
                        <RadioButton
                          label="Increments of points (recommended)"
                          checked={type === 'dynamic'}
                          id="dynamic"
                          name="type"
                          onChange={handleTypeChange}
                        />
                        <RadioButton
                          label="Fixed amount of points"
                          id="fixed"
                          name="type"
                          checked={type === 'fixed'}
                          onChange={handleTypeChange}
                        />
                      </VerticalStack>
                    </VerticalStack>
                  </AlphaCard>

                  <AlphaCard>
                    <VerticalStack vertical gap="4">
                      <Text fontWeight="bold" variant="headingMd">
                        Earning value
                      </Text>

                      <TextField
                        label={INPUT_LABEL}
                        value={value}
                        onChange={handleValueChange}
                        autoComplete="off"
                        type="number"
                        min="0"
                        required
                      />
                    </VerticalStack>
                  </AlphaCard>

                  <AlphaCard>
                    <VerticalStack vertical gap="4">
                      <Text fontWeight="bold" variant="headingMd">
                        Summary
                      </Text>

                      <Text color="subdued">{SUMMARY_TEXT}</Text>
                    </VerticalStack>
                  </AlphaCard>
                </VerticalStack>

                <VerticalStack gap="4">
                  <AlphaCard>
                    <VerticalStack vertical gap="4">
                      <Text fontWeight="bold" variant="headingMd">
                        Status
                      </Text>

                      <VerticalStack vertical gap="2">
                        <RadioButton
                          label="Active"
                          checked={status === 'active'}
                          id="active"
                          name="status"
                          onChange={handleStatusChange}
                        />
                        <RadioButton
                          label="Disabled"
                          id="disabled"
                          name="status"
                          checked={status === 'disabled'}
                          onChange={handleStatusChange}
                        />
                      </VerticalStack>
                    </VerticalStack>
                  </AlphaCard>
                </VerticalStack>
              </HorizontalGrid>

              <HorizontalStack align="end">
                <Button type="submit" primary onClick={handleSave}>
                  Save
                </Button>
              </HorizontalStack>
            </VerticalStack>
          </Layout.Section>
        </Layout>
      </Page>
    </>
  );
}
