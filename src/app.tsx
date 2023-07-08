import {
  Sidebar,
  MainLogoBox,
  Divider,
  DividerName,
  AddFileButton,
  FilesListingWrapper,
} from 'app-styles'
import { File, FileProps } from 'resources/File'
import { ReactSVG } from 'react-svg'

export function App () {
  const files: FileProps[] = [
    {
      id: 'uuid',
      name: 'readme.md',
      content: 'blebleble',
      active: false,
      status: 'saving',
    },
    {
      id: 'uuid',
      name: 'teste.md',
      content: 'blebleble',
      active: true,
      status: 'editing',
    },

  ]

  return (
    <>
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
          <ReactSVG src='/svg/add-file.svg' />
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
    </>
  )
}
