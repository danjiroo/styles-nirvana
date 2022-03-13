/* eslint-disable @typescript-eslint/no-explicit-any */

import { DropzonePreview, FileWrapper, StyledImage } from './styles'
const MediaList = ({ file, mediaSource, mediaElement, onTimeUpdate }: any) => {
  console.log('MEDIA ELEMENT REF:')

  return (
    <DropzonePreview className='dropzone-preview'>
      <FileWrapper className='file-item'>
        {file && (
          <>
            <span>{file.name}</span>
            {/* {file.type === 'video/quicktime' && mediaSource?.src && (
              <video className='video-dimensions' controls>
                <source src={mediaSource.src} type='video/quicktiem'></source>
                <source src={mediaSource.src} type='video/ogg'></source>
              </video>
            )} */}
            {file.type === 'video/quicktime' && mediaSource?.src && (
              <video
                className='video-dimensions'
                controls
                ref={mediaElement}
                onTimeUpdate={onTimeUpdate}
              >
                <source src={mediaSource.src} type='video/quicktiem'></source>
                <source src={mediaSource.src} type='video/ogg'></source>
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
