import React, { memo } from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';
import { Layout } from 'style/CustomStyle';

function TagItem({ onClick, id, text }) {
  return (
    <>
      <Tag onClick={onClick} data-tag-id={id}>
        #{text}
      </Tag>
    </>
  );
}

const Tag = styled.div`
  padding: 0.9rem 2rem;
  ${Layout}

  border-radius: 1.7rem;
  -moz-border-radius: 1.7rem;
  -webkit-border-radius: 1.7rem;
  background-color: #eaf4ff;

  font-size: 1.4rem;
  font-weight: 500;
  color: ${({ theme }) => theme.blueColor};
  ${({ onClick }) =>
    onClick &&
    `
      cursor: pointer;
  `}

  & + & {
    margin-left: 1.2rem;
  }
`;

TagItem.propTypes = {
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  text: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  onClick: PropTypes.func,
};

TagItem.defaultProps = {
  onClick: null,
};

export default memo(TagItem);
