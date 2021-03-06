import styled from 'styled-components'

interface LabelProps {

}

const Label = styled.label<LabelProps>`
  display: flex;
  flex-direction: column;
  padding: 1em 0;
  & > * + * {
      margin-block-start: 0.5em;
  }

`;

export default Label