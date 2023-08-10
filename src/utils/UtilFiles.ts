import { FileProps, StatusProps } from 'types/AppTypes'

export const InactivateFiles = (files: FileProps[]) => files.map(file => ({ ...file, active: false }))

export const ActivateClickedFile = (fileId: string, files: FileProps[]) => {
  return files.map(file => {
    if (file.id === fileId) {
      return {
        ...file,
        active: true,
      }
    } else {
      return {
        ...file,
        active: false,
      }
    }
  })
}

export const UpdateFileParam = (
  id: string,
  files: FileProps[],
  key: string,
  newValue: string | boolean | StatusProps,
): FileProps[] => {
  const newFilesArray = files.map(newFile => {
    if (id === newFile.id) {
      // return {
      //   ...file,
      //   [key]: newValue,
      // }
    }

    return newFile
  })

  return newFilesArray
}
