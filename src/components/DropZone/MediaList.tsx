/* eslint-disable @typescript-eslint/no-explicit-any */

import { DropzonePreview, FileWrapper, StyledImage } from './styles'
const MediaList = ({ file }: any) => {
  console.log('imagesssss', file)
  return (
    <DropzonePreview className='dropzone-preview'>
      <FileWrapper className='file-item'>
        {file && (
          <>
            <span>{file.name}</span>
            {file.type === 'video/quicktime' && (
              <video className='video-dimensions' controls>
                <source src={file.src} type='video/quicktiem'></source>
                <source src={file.src} type='video/ogg'></source>
              </video>
            )}
          </>
        )}
        <StyledImage src={file.src} alt='' />
      </FileWrapper>
    </DropzonePreview>
  )
}

export default MediaList
