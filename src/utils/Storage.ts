import { FileProps } from 'types/AppTypes'
import localforage from 'localforage'
import { Dispatch, SetStateAction } from 'react'
import { FileObject } from './FileObject'

export const GetStoredFiles = async (setFiles: Dispatch<SetStateAction<FileProps[]>>) => {
  const storedFiles = await localforage.getItem<FileObject[]>('files')

  if (storedFiles) {
    setFiles(storedFiles)
  } else {
    const newFile = new FileObject()
    setFiles([newFile])
  }
}

export const StoreFiles = async (files: FileProps[]) => {
  await localforage.setItem('files', files)
}
