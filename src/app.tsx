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
import { File } from 'File'
import { FileProps } from 'types/AppTypes'
import { EditingArea } from 'resources/EditingArea'
import { useState, Fragment } from 'react'
import { FileObject } from 'utils/FileObject'

export function App () {
  const [files, setFiles] = useState<FileProps[]>([])

  const handleAddFile = (): void => {
    const inactiveOldFiles = files.map(file => ({ ...file, active: false }))

    setFiles([
      ...inactiveOldFiles,
      new FileObject(),
    ])
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
              <File
                key={file.id}
                id={file.id}
                name={file.name}
                active={file.active}
                status={file.status}
              />
            ))
          }
        </FilesListingWrapper>
      </Sidebar>
      <MainContentWrapper>
        {
          files.map(file => (
            <Fragment key={file.id}>
              <EditingFileName value={file.name} />
              <EditingArea file={file} />
            </Fragment>
          ))
        }
      </MainContentWrapper>
    </AppWrapper>
  )
}
