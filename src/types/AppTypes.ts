import {
  ReactNode,
  ChangeEvent,
  Dispatch,
  SetStateAction,
  RefObject,
} from 'react'

export type StatusProps = 'editing' | 'saving' | 'saved'

export type FileProps = {
    id: string
    name: string
    content: string
    active: boolean
    status: StatusProps
}

export type MainContentProps = {
    files: FileProps[]
    inputRef: RefObject<HTMLInputElement>
    onUpdateFileName: (id: string, newName: string) => void
    onUpdateFileContent: (id: string, newName: string) => void
}

export type SideBarProps = {
    files: FileProps[]
    inputRef: RefObject<HTMLInputElement>
    setFiles: Dispatch<SetStateAction<FileProps[]>>
    onAddFile: () => void
    switchActiveFile: (id: string) => void
    onRemoveFile: (id: string) => void
  }

export type EditingAreaProps = {
    file: FileProps
}

export type FileItemProps = {
    file: FileProps
    inputRef: RefObject<HTMLInputElement>
    switchActiveFile: (id: string) => void
    handleRemoveFile: (id: string) => void
  }

export type GenericProps = {
    children: ReactNode
}

export type LinkProps = {
    onClick: (event: any) => void
    active: boolean
}

export type FileStyleProps = GenericProps & {
    active: boolean
}

export type DividerNameProps = {
    children: string
}

export type OutputAreaProps = {
    file: FileProps
}

export type EditingFileNameProps = {
    value: string
    onChange: (event: ChangeEvent<HTMLInputElement>) => void
}
