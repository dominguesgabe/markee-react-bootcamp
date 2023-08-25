import { FileProps } from 'types/AppTypes'

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
        status: 'saved',
      }
    }
  })
}
