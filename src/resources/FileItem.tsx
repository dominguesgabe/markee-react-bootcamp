import { FileTextIcon } from '../utils/SvgIcons'
import { ListingFileItem } from './Sidebar'
import { FileItemProps } from 'types/AppTypes'
import { StatusIcon } from 'resources/Status'
import { MouseEvent } from 'react'

export const FileItem = ({ file, switchActiveFile }: FileItemProps) => {
  const handleItemClick = (event: MouseEvent<HTMLLIElement>) => {
    event.preventDefault()
    switchActiveFile(file.id)
  }

  return (
    <ListingFileItem.Root active={file.active} onClick={handleItemClick}>
      <ListingFileItem.Link href='/' active={file.active}>
        <FileTextIcon title='teste' />
        { file.name }
      </ListingFileItem.Link>
      { file.active && <StatusIcon status={file.status} /> }
      <ListingFileItem.RemoveButton />
    </ListingFileItem.Root>
  )
}
