import styled from 'styled-components';

const PageContentInnerWrapper = styled.div`
  background-color: #FFF;
  border-radius: 2px;
  padding: 20px 24px;

  @media (max-width: 1100px) {
    padding: 5px 6px;
  }

  *:last-child {
    margin-bottom: 0;
  }
`;

export default PageContentInnerWrapper;
