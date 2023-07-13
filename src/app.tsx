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
      <MainContentWrapper>
        <EditingFileName value={files[0].name} />
        <EditingArea file={files[0]} />
      </MainContentWrapper>
    </AppWrapper>
  )
}
