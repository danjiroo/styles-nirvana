import styled from 'styled-components'

export const StyledForm = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  /* height: 600px; */
  box-sizing: border-box;
  padding-bottom: 1rem;
  border-radius: 6px;
`

export const StyledFormWrapper = styled.form`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 80%;

  p {
    margin-top: 1rem;
  }
`

export const HeroSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 80vh;
  background-color: #228a22;
  background-image: url('https://images.unsplash.com/photo-1556761175-4b46a572b786?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1374&q=80%201374w') !important;
  background-color: rgba(0, 0, 0, 0.8);
  background-blend-mode: multiply;

  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center; ;
`

export const SignInSignUpSlot = styled.div`
  width: 96%;
  @media screen and (min-width: 992px) {
    width: 30% !important;
  }
  @media screen and (min-width: 576px) {
    width: 60%;
  }
`
