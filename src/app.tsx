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
import { useState } from 'react'
import { FileObject } from 'utils/FileObject'

export function App () {
  const [files, setFiles] = useState<FileProps[]>([
    {
      id: '1',
      name: 'readme.md',
      content: 'blebleble',
      active: false,
      status: 'saving',
    },
    {
      id: '2',
      name: 'teste.md',
      content: 'blebleble',
      active: true,
      status: 'saved',
    },
  ])

  const handleAddFile = (): void => {
    files.forEach(function (file) {
      file.active = false
    })

    setFiles([
      ...files,
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
        <EditingFileName value={files[0].name} />
        <EditingArea file={files[0]} />
      </MainContentWrapper>
    </AppWrapper>
  )
}
