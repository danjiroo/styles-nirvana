import styled from 'styled-components'

export const StyledCheckbox = styled.label`
  position: relative;
  cursor: pointer;
  font-size: 13px;
  padding-top: 1px;

  input {
    /* position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0; */
    display: none;
  }

  .title {
    padding-left: 30px;
  }

  .checkmark {
    position: absolute;
    top: 0;
    left: 0;
    height: 18px;
    width: 18px;
    background: ${({ theme }) => theme.colors.light[200]};
    border: 2px solid ${({ theme }) => theme.colors.light[400]};
    border-radius: 6px;
  }

  &:hover input ~ .checkmark {
    background: ${({ theme }) => theme.colors.light[300]};
  }

  & input:checked ~ .checkmark {
    border-color: ${({ theme }) => theme.colors.primary[200]};
  }

  .checkmark:after {
    content: '';
    position: absolute;
    display: none;
  }

  & input:checked ~ .checkmark:after {
    display: block;
  }

  & .checkmark:after {
    left: 5px;
    top: 1px;
    width: 3px;
    height: 7px;
    border: solid ${({ theme }) => theme.colors.primary[200]};
    border-width: 0 2px 2px 0;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
  }
`
