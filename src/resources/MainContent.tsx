import {
  EditingFileName,
  EditingTextarea,
  EditingWrapper,
  MainContentWrapper,
  OutputArticle,
} from 'app-styles'
import { ChangeEvent } from 'react'
import { MainContentProps } from 'types/AppTypes'
import 'highlight.js/styles/mono-blue.css'
import { marked } from 'marked'
import { sanitize } from 'dompurify'

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

export const MainContent = ({ files, inputRef, onUpdateFileName: handleUpdateFileName, onUpdateFileContent: handleUpdateFileContent }: MainContentProps) => {
  const file = files.find(file => file.active)

  if (!files || !file) {
    return <></>
  }

  const handleChangeFileName = (event: ChangeEvent<HTMLInputElement>): void => {
    handleUpdateFileName(file.id, event.target.value)
  }

  const handleChangeFileContent = (event: ChangeEvent<HTMLTextAreaElement>): void => {
    handleUpdateFileContent(file.id, event.target.value)
  }

  return (
    <MainContentWrapper>
      <EditingFileName
        value={file.name}
        ref={inputRef}
        onChange={handleChangeFileName}
        autoFocus
      />
      <EditingWrapper>
        <EditingTextarea
          placeholder='# Digite aqui seu texto'
          value={file.content}
          onChange={handleChangeFileContent}
        />
        <OutputArticle dangerouslySetInnerHTML={{ __html: marked.parse(sanitize(file.content)) }} />
      </EditingWrapper>
    </MainContentWrapper>
  )
}
