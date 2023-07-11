import {
  MainContent,
  AppWrapper,
  AddFileButton,
} from 'app-styles'
import {
  Sidebar,
  Divider,
  DividerName,
  MainLogoBox,
  FilesListingWrapper,
} from 'resources/Sidebar'
import { AddFileIcon } from 'ui'
import { File } from 'resources/File'
import { FileProps } from 'types/AppTypes'
import { EditingArea } from 'resources/EditingArea'
import { OutputArea } from 'resources/OutputArea'

export function App () {
  const files: FileProps[] = [
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
  ]

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
        <AddFileButton>
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
      <MainContent>
        <EditingArea file={files[0]} />
        <OutputArea file={files[0]} />
      </MainContent>
    </AppWrapper>
  )
}
