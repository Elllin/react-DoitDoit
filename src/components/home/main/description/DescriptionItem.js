import React from 'react';

import styled, { css } from 'styled-components';

function DescriptionItem({ title, discription, width, float, color }) {
  return (
    <List width={width} float={float}>
      <div style={{ background: color, width: '48px', height: '62px', borderRadius: '50%' }}></div>
      <Title>{title}</Title>
      <Discription width={width}>{discription}</Discription>
    </List>
  );
}

const List = styled.li`
  ${({ width, float }) =>
    css`
      width: ${width};
      float: ${float};
    `};

  margin-bottom: 12.8rem;
`;

const Title = styled.div`
  margin: 2.4rem 0 1.7rem;
  font-family: ${({ theme }) => theme.subFont};
  font-size: 1.8rem;
`;

const Discription = styled.div`
  word-break: keep-all;
  font-size: 1.6rem;
  line-height: 1.56;
  letter-spacing: -0.03rem;
  color: #666;
`;

export default DescriptionItem;
