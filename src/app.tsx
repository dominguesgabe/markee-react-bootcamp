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
      status: 'editing',
    },
  ])

  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (files.length) {
      document.title = files.find(file => file.active === true)?.name ?? ''
    }

    // inputRef.current?.focus() // todo: do not work on first click event
  })

  // useEffect(() => {
  //   if (files.find(file => file.status === 'editing')) {
  //     const timeout = setTimeout(() => {

  //     }, 300)
  //   }
  // }, [files])

  const switchActiveFile = (id: string) => {
    setFiles(files.map(file => {
      if (file.id !== id) {
        return {
          ...file,
          active: false,
        }
      }

      return {
        ...file,
        active: true,
        status: 'editing',
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

  const handleUpdateFileName = (id: string, newName: string): void => {
    const filesUpdated: FileProps[] = files.map(file => {
      if (file.id === id) {
        return {
          ...file,
          status: 'editing',
          name: newName,
        }
      }

      return file
    })

    setFiles(filesUpdated)
  }

  const handleUpdateFileContent = (id: string, newContent: string): void => {
    const filesUpdated: FileProps[] = files.map(file => {
      if (file.id === id) {
        return {
          ...file,
          status: 'editing',
          content: newContent,
        }
      }

      return file
    })

    setFiles(filesUpdated)
    // setSaving(id)
  }

  // const handleUpdateFileAttribute = (id: string, attribute: string, newValue: string | boolean) => {
  //   const filesUpdated: FileProps[] = files.map(file => {
  //     if (file.id === id) {

  //       return {
  //         ...file,
  //         [attribute]: newValue
  //       }
  //     }

  //     return file
  //   })

  //   setFiles(filesUpdated)
  // }

  // const setSaving = (id: string) => {
  //   const timeout = setTimeout(() => {
  //     handleUpdateFileAttribute(id, 'status', 'saving')
  //   }, 300);

  //   // return () => clearTimeout(timeout)
  // }

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
        file={files.find(file => file.active)!}
        inputRef={inputRef}
        handleUpdateFileName={handleUpdateFileName}
        handleUpdateFileContent={handleUpdateFileContent}
      />
    </AppWrapper>
  )
}
