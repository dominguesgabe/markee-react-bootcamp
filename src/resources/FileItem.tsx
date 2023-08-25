import { FileTextIcon } from '../utils/SvgIcons'
import { ListingFileItem } from './Sidebar'
import { FileItemProps } from 'types/AppTypes'
import { StatusIcon } from 'resources/Status'
import { MouseEvent } from 'react'

export const FileItem = ({ file, switchActiveFile, handleRemoveFile }: FileItemProps) => {
  const handleItemClick = (event: MouseEvent<HTMLLIElement>) => {
    event.preventDefault()
    switchActiveFile(file.id)
  }

  const removeFile = () => {
    handleRemoveFile(file.id)
  }

  return (
    <ListingFileItem.Root active={file.active} onClick={handleItemClick}>
      <ListingFileItem.Link href='/' active={file.active}>
        <FileTextIcon title='teste' />
        {file.name}
      </ListingFileItem.Link>
      {file.active && <StatusIcon status={file.status} />}
      <ListingFileItem.RemoveButton onClick={removeFile} />
    </ListingFileItem.Root>
  )
}
