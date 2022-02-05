import { createGlobalStyle } from 'styled-components'

export const Modifiers = createGlobalStyle`
  .letter-spaced--wider {
    /* letter-spacing: 1rem!important;
    text-indent: 1rem !important;

      @media screen and (min-width: 992px) {
        letter-spacing: .2rem;
    } */
    /* letter-spacing: 1rem;
    text-indent: 1rem !important; */
  }

  .condense {
    font-family: 'Barlow Semi Condensed', sans-serif!important;
  }
  .margin--right {
    margin-right: 6rem;
  }
  .margin__spacer {
    margin-right: .5rem;
  }

  .margin--top {
    margin: 1rem 0 1rem 0;
  }
`
