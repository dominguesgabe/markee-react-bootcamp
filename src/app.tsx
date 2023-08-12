import {
  AppWrapper,
} from 'app-styles'
import {
  useState,
  useEffect,
  useRef,
} from 'react'
import { FileProps } from 'types/AppTypes'
import { MainContent } from 'MainContent'
import { Sidebar } from 'Sidebar'

export function App () {
  const [files, setFiles] = useState<FileProps[]>([
    {
      id: 'aaaa',
      active: true,
      name: 'gabe',
      content: 'teste gabe',
      status: 'saving',
    },
  ])

  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (files.length) {
      document.title = files.find(file => file.active === true)?.name ?? ''
    }
  })

  return (
    <AppWrapper>
      <Sidebar
        files={files}
        inputRef={inputRef}
        setFiles={setFiles}
      />
      {/* <MainContent
        files={files}
        inputRef={inputRef}
        setFiles={setFiles}
      /> */}
    </AppWrapper>
  )
}
