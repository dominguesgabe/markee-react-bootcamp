import {
  Sidebar,
  MainLogoBox,
  Divider,
  DividerName,
  AddFileButton,
  FilesListingWrapper,
  MainContent,
  AppWrapper,
} from 'app-styles'
import { AddFileIcon } from 'ui'
import { File, FileProps } from 'resources/File'
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
          {/* <ReactSVG src='/svg/add-file.svg' /> */}
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
