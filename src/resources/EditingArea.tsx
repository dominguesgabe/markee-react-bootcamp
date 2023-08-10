import { EditingTextarea, EditingWrapper, OutputArticle } from 'app-styles'
import { useState, ChangeEvent, useEffect } from 'react'
import { marked } from 'marked'
import { sanitize } from 'dompurify'
import { EditingAreaProps } from 'types/AppTypes'
import { UpdateFileParam } from 'utils/UtilFiles'
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

export const EditingArea = ({ file, files, setFiles }: EditingAreaProps) => {
  const [content, setContent] = useState('')

  useEffect(() => {
    if (file.content) {
      setContent(file.content)
    }
  }, [])

  const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setContent(event.target.value)

    // const updatedContentInFiles = UpdateFileParam(files, 'content', content)
    // setFiles(updatedContentInFiles)
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
