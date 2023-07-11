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
          <input value={file.name} />
        </EditingFileName>
        <EditingTextarea value='## TESTE' />
      </EditingAreaWrapper>
    </>
  )
}
