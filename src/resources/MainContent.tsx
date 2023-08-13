import { EditingFileName, MainContentWrapper } from 'app-styles'
import { EditingArea } from 'resources/EditingArea'
import { MainContentProps } from 'types/AppTypes'

export const MainContent = ({ file, inputRef }: MainContentProps) => {
  // const handleChangeFileName = (event: ChangeEvent<HTMLInputElement>): void => {
  //   const filesWithNewFileName = files.map(file => {
  //     if (file.active) {
  //       return {
  //         ...file,
  //         name: event.target.value,
  //       }
  //     }

  //     return file
  //   })

  //   setFiles(filesWithNewFileName)
  // }

  return (
    <MainContentWrapper>
      <EditingFileName
        value={file.name}
        ref={inputRef}
        onChange={() => console.log('in progress')}
      />
      <EditingArea
        file={file}
      />
    </MainContentWrapper>
  )
}
