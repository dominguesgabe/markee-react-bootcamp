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
    file: FileProps
    inputRef: RefObject<HTMLInputElement>
}

export type SideBarProps = {
    files: FileProps[]
    inputRef: RefObject<HTMLInputElement>
    setFiles: Dispatch<SetStateAction<FileProps[]>>
    handleAddFile: () => void
    switchActiveFile: (id: string) => void
  }

export type EditingAreaProps = {
    file: FileProps
    setFiles: Dispatch<SetStateAction<FileProps[]>>
}

export type FileItemProps = {
    file: FileProps
    inputRef: RefObject<HTMLInputElement>
    switchActiveFile: (id: string) => void
  }

export type GenericProps = {
    children: ReactNode
}

export type LinkProps = {
    href: string
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
