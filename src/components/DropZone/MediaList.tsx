/* eslint-disable arrow-body-style */
/* eslint-disable @typescript-eslint/no-explicit-any */

import { DropzonePreview, FileWrapper, StyledImage } from './styles'
const MediaList = ({ file, mediaElement, onTimeUpdate }: any) => {
  return (
    <DropzonePreview className='dropzone-preview'>
      <FileWrapper className='file-item'>
        {file && (
          <>
            {/* <span>{file.name}</span> */}
            {/* {file.type === 'video/quicktime' && mediaSource?.src && (
              <video className='video-dimensions' controls>
                <source src={mediaSource.src} type='video/quicktiem'></source>
                <source src={mediaSource.src} type='video/ogg'></source>
              </video>
            )} */}
            {file.type === 'video/quicktime' && (
              <video
                className='video-dimensions'
                ref={mediaElement}
                onTimeUpdate={onTimeUpdate}
              >
                <source src={file.src} type='video/quicktime'></source>
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
