import { OutputAreaWrapper } from 'app-styles'
import { FileProps } from 'resources/File'

type OutputAreaProps = {
    file: FileProps
}

export const OutputArea = ({ file }: OutputAreaProps) => {
  // logic
  return (
    <>
      <OutputAreaWrapper><br /></OutputAreaWrapper>
    </>
  )
}
