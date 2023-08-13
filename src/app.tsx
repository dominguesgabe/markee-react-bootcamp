import {
  AppWrapper,
} from 'app-styles'
import {
  useState,
  useEffect,
  useRef,
} from 'react'
import { FileProps } from 'types/AppTypes'
import { Sidebar } from 'Sidebar'
import { InactivateFiles } from 'utils/UtilFiles'
import { FileObject } from 'utils/FileObject'
import { MainContent } from 'resources/MainContent'

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

      console.log(files.find(file => file.active));
      
    }
    // inputRef.current?.focus() // todo: do not work on first click event
    
  })

  const switchActiveFile = (id: string) => {
    setFiles(files.map(file => {
      if (file.id !== id) {
        return {
          ...file,
          active: false
        }
      }

      return {
        ...file,
        active: true
      }
    }))
  }

  const handleAddFile = (): void => {
    const inactiveOldFiles = InactivateFiles(files)
    
    setFiles([
      ...inactiveOldFiles,
      new FileObject(),
    ])
  }

  return (
    <AppWrapper>
      <Sidebar
        files={files}
        setFiles={setFiles}
        inputRef={inputRef}
        handleAddFile={handleAddFile}
        switchActiveFile={switchActiveFile}
      />
      <MainContent
        file={files.find(file => file.active)}
        inputRef={inputRef}
      />
    </AppWrapper>
  )
}
