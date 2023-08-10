import {
  AppWrapper,
  AddFileButton,
} from 'app-styles'
import {
  Divider,
  DividerName,
  MainLogoBox,
  FilesListingWrapper,
  Sidebar,
} from 'resources/Sidebar'
import {
  useState,
  useEffect,
  useRef,
  ChangeEvent,
} from 'react'
import { AddFileIcon } from 'utils/SvgIcons'
import { FileItem } from 'resources/FileItem'
import { FileProps } from 'types/AppTypes'
import { FileObject } from 'utils/FileObject'
import { InactivateFiles } from 'utils/UtilFiles'
import { MainContent } from 'MainContent'

export function App () {
  const [files, setFiles] = useState<FileProps[]>([
    {
      id: "aaaa",
      active: true,
      name: "gabe",
      content: "teste gabe",
      status: "saving"
    }
  ])

  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (files.length) {
      document.title = files.find(file => file.active === true)?.name ?? ''
    }
  })

  const handleAddFile = (): void => {
    const inactiveOldFiles = InactivateFiles(files)
    inputRef.current?.focus() // todo: do not work on first click event

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
      <MainContent
        files={files}
        inputRef={inputRef}
        setFiles={setFiles}
      />
    </AppWrapper>
  )
}
