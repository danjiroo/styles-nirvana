/* eslint-disable @typescript-eslint/no-explicit-any */
import { useDropzone } from 'react-dropzone'
import {
  StyledDropZoneContainer,
  StyledInput,
  StyledDropArea,
  StyledParagraph,
} from './styles'

import { Button } from '../'

import Media from './MediaList'

const Dropzone = ({ onDrop, file, accept }: any) => {
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept,
  })
  console.log('HAS FILE:', file)
  return (
    <StyledDropZoneContainer
      {...getRootProps()}
      isActive={isDragActive}
      hasFile={file}
    >
      <StyledInput {...getInputProps()} />
      <StyledDropArea className='drop-area'>
        {isDragActive ? (
          <StyledParagraph className='dropzone-content'>
            Drag & Drop Media
          </StyledParagraph>
        ) : !file ? (
          <>
            <StyledParagraph className='styled-paragraph'>
              Drag & Drop Media
            </StyledParagraph>
            <StyledParagraph className='styled-paragraph'>or</StyledParagraph>
            <Button icon='upload' label='upload' layout='outline' />
          </>
        ) : (
          <Media file={file} />
        )}
      </StyledDropArea>
    </StyledDropZoneContainer>
  )
}

export default Dropzone
