import {
  useState,
  useEffect,
  useRef,
} from 'react'
import { FileProps } from 'types/AppTypes'
import { InactivateFiles } from 'utils/UtilFiles'
import { FileObject } from 'utils/FileObject'
import { GetStoredFiles, StoreFiles } from 'utils/Storage'

export const useFiles = () => {
  const [files, setFiles] = useState<FileProps[]>([new FileObject()])

  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    GetStoredFiles(setFiles)
  }, [])

  useEffect(() => {
    if (files.length) {
      document.title = files.find(file => file.active === true)?.name ?? ''
    }
  })

  useEffect(() => {
    StoreFiles(files)
  }, [files])

  useEffect(() => {
    const activeFile = files.find(file => file.active)

    if (activeFile) {
      window.history.replaceState(null, '', `/file/${activeFile.id}`)
    }
  }, [files])

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
    const newFile = new FileObject()

    setFiles([
      ...inactiveOldFiles,
      newFile,
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

    setFiles(filteredFiles)
  }

  return {
    files,
    setFiles,
    handleAddFile,
    handleRemoveFile,
    switchActiveFile,
    handleUpdateFileName,
    handleUpdateFileContent,
    inputRef,
  }
}
