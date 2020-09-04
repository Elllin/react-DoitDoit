import React from 'react';

import styled from 'styled-components';

function BoxWrap({ children, title, required = 'true', requiredSign = '*', ...props }) {
  return (
    <Wrap>
      <Title {...props}>
        {title} {required && <Required>{requiredSign}</Required>}
      </Title>
      {children}
    </Wrap>
  );
}

const Wrap = styled.div`
  margin-bottom: 4.4rem;
`;

const Title = styled.label`
  display: block;
  margin-bottom: ${({ far }) => (far ? '1.5rem' : '1.3rem')};
  font-size: 2rem;
  font-weight: bold;
  letter-spacing: -0.03rem;
`;

const Required = styled.span`
  margin-left: 0.3rem;
  color: ${({ theme }) => theme.requiredColor};
`;

export default BoxWrap;