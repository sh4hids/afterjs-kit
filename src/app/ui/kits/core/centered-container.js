import styled from 'styled-components';
import { space, width } from 'styled-system';

const CenteredContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 0 auto;
  ${space}
  ${width}
`;

export default CenteredContainer;
