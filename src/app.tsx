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
  const file: FileProps = {
    id: 'uuid',
    name: 'readme.md',
    content: 'full content',
    active: false,
    status: 'saving',
  }

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
          <File {...file} />
        </FilesListingWrapper>
      </Sidebar>
    </>
  )
}
