import {
  MainContentWrapper,
  AppWrapper,
  AddFileButton,
  EditingFileName,
} from 'app-styles'
import {
  Sidebar,
  Divider,
  DividerName,
  MainLogoBox,
  FilesListingWrapper,
} from 'resources/Sidebar'
import { AddFileIcon } from 'utils/SvgIcons'
import { FileItem } from 'FileItem'
import { FileProps } from 'types/AppTypes'
import { EditingArea } from 'resources/EditingArea'
import { useState, Fragment, useEffect, useRef, ChangeEvent } from 'react'
import { FileObject } from 'utils/FileObject'
import { InactivateFiles } from 'utils/UtilFiles'

export function App () {
  const [files, setFiles] = useState<FileProps[]>([])

  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (files.length) {
      document.title = files.find(file => file.active === true)?.name ?? ''
    }
  })

  const handleAddFile = (): void => {
    const inactiveOldFiles = InactivateFiles(files)
    inputRef.current?.focus()

    setFiles([
      ...inactiveOldFiles,
      new FileObject(),
    ])
  }

  const handleChangeFileName = (event: ChangeEvent<HTMLInputElement>): void => {
    const filesWithNewFileName = files.map(file => {
      if (file.active) {
        return {
          ...file,
          name: event.target.value,
        }
      }

      return file
    })

    setFiles(filesWithNewFileName)
  }

  return (
    <AppWrapper>
      <Sidebar>
        <MainLogoBox>
          <img src='/main-logo.png' alt='app logo' />
        </MainLogoBox>
        <Divider>
          <DividerName>
            Arquivos
          </DividerName>
        </Divider>
        <AddFileButton onClick={handleAddFile}>
          <AddFileIcon />
          Adicionar
        </AddFileButton>
        <FilesListingWrapper>
          {
            files.map(file => (
              <FileItem
                key={file.id}
                file={file}
                files={files}
                setFiles={setFiles}
                inputRef={inputRef}
              />
            ))
          }
        </FilesListingWrapper>
      </Sidebar>
      <MainContentWrapper>
        {
          files.map(file => {
            if (!file.active) {
              return ''
            }
            return (
              <Fragment key={file.id}>
                <EditingFileName value={file.name} ref={inputRef} onChange={handleChangeFileName} />
                <EditingArea file={file} />
              </Fragment>
            )
          })
        }
      </MainContentWrapper>
    </AppWrapper>
  )
}
