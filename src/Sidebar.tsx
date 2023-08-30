import { AddFileButton } from 'app-styles'
import { FileItem } from 'resources/FileItem'
import {
  Divider,
  DividerName,
  FilesListingWrapper,
  MainLogoBox,
  SidebarWrapper,
} from 'resources/Sidebar'
import { SideBarProps } from 'types/AppTypes'
import { AddFileIcon } from 'utils/SvgIcons'

export const Sidebar = ({ files, inputRef, switchActiveFile, onAddFile: handleAddFile, onRemoveFile: handleRemoveFile }: SideBarProps) => {
  return (
    <SidebarWrapper>
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
              switchActiveFile={switchActiveFile}
              handleRemoveFile={handleRemoveFile}
              inputRef={inputRef}
            />
          ))
        }
      </FilesListingWrapper>
    </SidebarWrapper>
  )
}
