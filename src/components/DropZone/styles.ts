import styled, { css } from 'styled-components'

export const DropzoneContainer = styled.div`
  position: relative;
  border: dotted 0.063rem ${({ theme }) => theme.colors.primary.DEFAULT};
  height: 22.875;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 40px;
  text-align: center;

  box-sizing: border-box;
`

export const DropzonePreview = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  box-sizing: border-box;

  h3 {
    text-align: center;
    margin-bottom: 16px;
  }
`

export const FileWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  min-height: 300px;
  border-radius: 4px;
  position: relative;
  transition: all 0.2s linear;
  box-sizing: border-box;
  cursor: move;
  overflow: hidden;
  span {
    display: block;
    width: 100%;
    box-sizing: border-box;
  }
  video: {
    width: 100% !important;
    height: auto !important;
  }
  .video-dimensions {
    width: 100% !important;
    height: auto !important;
  }
`

export const StyledImage = styled.img`
  width: 100%;
`

export const StyledMain = styled.main`
  width: 100%;
`
export interface StyledDropZoneContainer {
  isActive: boolean
  hasFile: boolean
}

const StyledDropZoneContainerStyles = ({
  isActive,
  hasFile,
}: StyledDropZoneContainer) => {
  console.log('has file:', hasFile)
  if (hasFile) {
    return css`
      border: none;
    `
  }
  if (!isActive)
    return css`
      border: dotted 0.2rem ${({ theme }) => theme.colors.primary.DEFAULT};
      outline: none;
      cursor: pointer;
    `
  return css`
    border: dotted 0.4rem ${({ theme }) => theme.colors.primary[200]};
  `
}

export const StyledDropZoneContainer = styled.section<StyledDropZoneContainer>`
  width: 100%;
  height: 22.875rem;
  display: flex;
  align-items: center;
  ${StyledDropZoneContainerStyles}
`

export const StyledInput = styled.input``

export const StyledDropArea = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  height: 40%;
  width: 100%;
  text-align: center;
  button {
    width: 5.688rem;
    span {
      display: flex;
      padding: 0;
      margin-left: 20px;
    }
  }
`
export const StyledParagraph = styled.p`
  align-self: center;
  color: ${({ theme }) => theme.colors.primary.DEFAULT};
  margin: 0;
  padding: 0;
`
