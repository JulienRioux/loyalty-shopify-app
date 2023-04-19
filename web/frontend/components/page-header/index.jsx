import { VerticalStack, Text, Divider, Button } from '@shopify/polaris';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronLeftMinor } from '@shopify/polaris-icons';
import styled from 'styled-components';

const TitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;

const PageHeaderWrapper = styled.div`
  margin: 8px 0 32px;
`;

export const PageHeader = ({ title, showGoBack = false }) => {
  const navigate = useNavigate();

  return (
    <PageHeaderWrapper>
      <VerticalStack gap="4">
        <TitleWrapper>
          <Text variant="headingXl">{title}</Text>

          {showGoBack && (
            <Button size="slim" plain monochrome removeUnderline onClick={() => navigate(-1)} icon={ChevronLeftMinor}>
              Go back
            </Button>
          )}
        </TitleWrapper>

        <Divider />
      </VerticalStack>
    </PageHeaderWrapper>
  );
};
