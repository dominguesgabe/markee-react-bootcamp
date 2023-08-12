import { AddFileButton } from 'app-styles'
import {
  Dispatch,
  SetStateAction,
  RefObject,
} from 'react'
import { FileItem } from 'resources/FileItem'
import {
  Divider,
  DividerName,
  FilesListingWrapper,
  MainLogoBox,
  SidebarWrapper,
} from 'resources/Sidebar'
import { FileProps } from 'types/AppTypes'
import { FileObject } from 'utils/FileObject'
import { AddFileIcon } from 'utils/SvgIcons'
import { InactivateFiles } from 'utils/UtilFiles'

type SideBarProps = {
  files: FileProps[]
  inputRef: RefObject<HTMLInputElement>
  setFiles: Dispatch<SetStateAction<FileProps[]>>
}

export const Sidebar = ({ files, setFiles, inputRef }: SideBarProps) => {
  const handleAddFile = (): void => {
    const inactiveOldFiles = InactivateFiles(files)
    inputRef.current?.focus() // todo: do not work on first click event

    setFiles([
      ...inactiveOldFiles,
      new FileObject(),
    ])
  }

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
              files={files}
              setFiles={setFiles}
              inputRef={inputRef}
            />
          ))
        }
      </FilesListingWrapper>
    </SidebarWrapper>
  )
}
