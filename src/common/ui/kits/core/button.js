import styled from 'styled-components';
import {space, width, color} from 'styled-system';

const Button = styled.button `
  ${space};
  ${width};
  ${color};
  background: none;
  border: 1px solid #333;
  border-radius: 4px;
  cursor: pointer;
`;

export default Button;
