import { EditingTextarea, EditingWrapper, OutputArticle } from 'app-styles'
import { useState, ChangeEvent } from 'react'
import { marked } from 'marked'
import { sanitize } from 'dompurify'
import { FileProps } from 'types/AppTypes'
import 'highlight.js/styles/mono-blue.css'

import('highlight.js').then((hljs) => {
  const h = hljs.default

  marked.setOptions({
    mangle: false,
    headerIds: false,
    highlight: function (code, lang) {
      if (lang && h.getLanguage(lang)) {
        return h.highlight(code, { language: lang }).value
      }

      return h.highlightAuto(code).value
    },
  })
})

type EditingAreaProps = {
    file: FileProps
}

export const EditingArea = ({ file }: EditingAreaProps) => {
  const [content, setContent] = useState('')

  const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setContent(event.target.value)
  }

  return (
    <EditingWrapper>
      <EditingTextarea
        placeholder='# Digite aqui seu texto'
        value={content}
        onChange={handleChange}
      />
      <OutputArticle dangerouslySetInnerHTML={{
        __html: marked.parse(sanitize(content)),
      }}
      />
    </EditingWrapper>
  )
}
