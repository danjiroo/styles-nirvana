/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable arrow-body-style */
import React, { useCallback, useEffect, useState } from 'react'

import cuid from 'cuid'

import Dropzone from './Dropzone'
import { StyledMain } from './styles'

const DragAndDrop = (props: any) => {
  const { handleDropMedia, mediaSource, mediaElement, onTimeUpdate } = props
  const [file, setFile] = useState<Partial<any>>()
  // console.log('mediaElement INNER:', mediaSource)
  const onDrop = useCallback((acceptedFiles) => {
    acceptedFiles.map((file: any) => {
      const reader = new FileReader()
      reader.onabort = () => console.log('file reading was aborted')
      reader.onerror = () => console.log('file reading has failed')
      reader.onload = (e) => {
        console.log('reader:', e)
        setFile({
          ...file,
          id: cuid(),
          src: reader.result,
          preview: URL.createObjectURL(file),
          name: file.name,
          lastModified: file.lastModified,
          size: file.size,
          type: file.type,
        })
        handleDropMedia({
          ...file,
          id: cuid(),
          src: reader.result,
          preview: URL.createObjectURL(file),
          name: file.name,
          lastModified: file.lastModified,
          size: file.size,
          type: file.type,
        })
      }
      reader.readAsDataURL(file)
      return file
    })
    // RETURNS ARRAY
    // setImages(
    //   acceptedFiles.map((file: any) => {
    //     console.log('')
    //     return Object.assign(file, {
    //       ...images,
    //       preview: URL.createObjectURL(file),
    //     })
    //   })
    // )
  }, [])

  useEffect(() => () => URL.revokeObjectURL(file?.preview), [file])

  return (
    <StyledMain className='dropzone-container'>
      <Dropzone
        onDrop={onDrop}
        accept='image/*, image/jpg, image/jpeg, image/gif, video/*, video/quicktime'
        file={file}
        mediaSource={mediaSource}
        mediaElement={mediaElement}
        onTimeUpdate={onTimeUpdate}
      />
      {file && file.length > 0 && (
        <h3 className='text-center'>Drag the Images to change positions</h3>
      )}
    </StyledMain>
  )
}

export default DragAndDrop
