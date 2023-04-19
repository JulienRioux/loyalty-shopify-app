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

  const [pointCost, setPointCost] = useState(100);
  const [value, setValue] = useState(1);

  const handleTypeChange = useCallback((_, newValue) => {
    setType(newValue);
    setValue(newValue === 'dynamic' ? 1 : 5);
    setPointCost(newValue === 'dynamic' ? 100 : 500);
  }, []);

  const handleStatusChange = useCallback((_, newValue) => {
    setStatus(newValue);
  }, []);

  const handlePointCostChange = useCallback((newValue) => {
    setPointCost(Number(newValue));
  }, []);

  const handleValueChange = useCallback((newValue) => {
    setValue(Number(newValue));
  }, []);

  const handleSave = useCallback(() => {
    console.log('Submitting:', { type, status, value, pointCost });
  }, [status, type, value, pointCost]);

  const INPUT_VALUE_LABEL = type === 'dynamic' ? 'Customer gets' : 'Discount value';
  const INPUT_POINT_COST_LABEL = type === 'dynamic' ? 'Customer redeems increment of' : 'Points cost';

  const SUMMARY_TEXT =
    type === 'dynamic'
      ? `Customers earn $${value} off entire order for every ${pointCost} points redeemed.`
      : `$${value} off entire order for ${pointCost} points.`;

  return (
    <>
      <Page>
        <Layout>
          <Layout.Section>
            <PageHeader title="Order discount" showGoBack />
            <VerticalStack gap="8">
              <HorizontalGrid gap="4" columns={['twoThirds', 'oneThird']}>
                <VerticalStack gap="4">
                  <AlphaCard>
                    <VerticalStack vertical gap="4">
                      <Text fontWeight="bold" variant="headingMd">
                        Points redemption style
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
                        Reward value
                      </Text>

                      <HorizontalGrid gap="4" columns={2}>
                        <TextField
                          label={INPUT_POINT_COST_LABEL}
                          value={pointCost}
                          onChange={handlePointCostChange}
                          autoComplete="off"
                          type="number"
                          min="0"
                          required
                          suffix="points"
                        />

                        <TextField
                          label={INPUT_VALUE_LABEL}
                          value={value}
                          onChange={handleValueChange}
                          autoComplete="off"
                          type="number"
                          min="0"
                          required
                          prefix="$"
                        />
                      </HorizontalGrid>
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
