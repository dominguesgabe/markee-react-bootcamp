import { OutputAreaWrapper } from 'app-styles'
import { OutputAreaProps } from 'types/AppTypes'

export const OutputArea = ({ file }: OutputAreaProps) => {
  // logic
  return (
    <>
      <OutputAreaWrapper><br />
        {console.log(file)}
      </OutputAreaWrapper>
    </>
  )
}
