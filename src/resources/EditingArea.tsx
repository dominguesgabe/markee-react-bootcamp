import {
  EditingAreaWrapper,
  EditingFileName,
  EditingTextarea,
} from 'app-styles'
import { FileProps } from 'resources/File'

type EditingAreaProps = {
    file: FileProps
}

export const EditingArea = ({ file }: EditingAreaProps) => {
  // logic
  return (
    <>
      <EditingAreaWrapper>
        <EditingFileName>
          {/* <ReactSVG src='/svg/file-text.svg' /> */}
          <input value={file.name} />
        </EditingFileName>
        <EditingTextarea>## TESTE</EditingTextarea>
      </EditingAreaWrapper>
    </>
  )
}
