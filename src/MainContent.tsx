import { EditingFileName, MainContentWrapper } from 'app-styles'
import { ChangeEvent, Dispatch, Fragment, RefObject, SetStateAction } from 'react'
import { EditingArea } from 'resources/EditingArea'
import { FileProps } from 'types/AppTypes'

type MainContentProps = {
    files: FileProps[]
    inputRef: RefObject<HTMLInputElement>
    setFiles: Dispatch<SetStateAction<FileProps[]>>
}

export const MainContent = ({ files, inputRef, setFiles }: MainContentProps) => {
  const handleChangeFileName = (event: ChangeEvent<HTMLInputElement>): void => {
    const filesWithNewFileName = files.map(file => {
      if (file.active) {
        return {
          ...file,
          name: event.target.value,
        }
      }

      return file
    })

    setFiles(filesWithNewFileName)
  }

  return (
    <MainContentWrapper>
      {
          files.map(file => (
            <Fragment key={file.id}>
              <EditingFileName
                value={file.name}
                ref={inputRef}
                onChange={handleChangeFileName}
              />
              <EditingArea
                files={files}
                setFiles={setFiles}
              />
            </Fragment>
          ))
        }
    </MainContentWrapper>
  )
}
