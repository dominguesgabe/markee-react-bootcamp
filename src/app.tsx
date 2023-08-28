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
      content: '## teste gabe',
      status: 'saved',
    },
  ])

  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (files.length) {
      document.title = files.find(file => file.active === true)?.name ?? ''
    }
  })

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>

    function updateStatus () {
      const file = files.find(file => file.active)

      if (!file || file.status !== 'editing') {
        return
      }

      timer = setTimeout(() => {
        setFiles(files.map(file => {
          if (file.active) {
            return {
              ...file,
              status: 'saving',
            }
          }

          return file
        }))

        setTimeout(() => {
          setFiles(files.map(file => {
            if (file.active) {
              return {
                ...file,
                status: 'saved',
              }
            }

            return file
          }))
        }, 300)
      }, 300)
    }

    updateStatus()
    return () => clearTimeout(timer)
  }, [files])

  const switchActiveFile = (id: string) => {
    inputRef.current?.focus()

    setFiles(files.map(file => {
      if (file.id !== id) {
        return {
          ...file,
          active: false,
          status: 'editing',
        }
      }

      return {
        ...file,
        active: true,
        status: 'saved',
      }
    }))
  }

  const handleAddFile = (): void => {
    inputRef.current?.focus()

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
  }

  const handleRemoveFile = (id: string) => {
    const filteredFiles: FileProps[] = files.filter(file => file.id !== id)
    // console.log(filteredFiles, files)

    setFiles(filteredFiles)
  }

  return (
    <AppWrapper>
      <Sidebar
        files={files}
        setFiles={setFiles}
        inputRef={inputRef}
        handleAddFile={handleAddFile}
        handleRemoveFile={handleRemoveFile}
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
