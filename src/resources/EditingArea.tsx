import { EditingTextarea, EditingWrapper, OutputArticle } from 'app-styles'
import { useState, ChangeEvent } from 'react'
import { FileProps } from 'types/AppTypes'

type EditingAreaProps = {
    file: FileProps
}

export const EditingArea = ({ file }: EditingAreaProps) => {
  const [content, setContent] = useState('')

  const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setContent(event.target.value)
    console.log(file)
  }

  return (
    <EditingWrapper>
      <EditingTextarea
        placeholder='# Digite aqui seu texto'
        value={content}
        onChange={handleChange}
      />
      <OutputArticle content={content} />
    </EditingWrapper>
  )
}
