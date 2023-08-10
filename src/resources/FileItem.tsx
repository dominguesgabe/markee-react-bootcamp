import { FileTextIcon } from '../utils/SvgIcons'
import { ListingFileItem } from './Sidebar'
import { FileItemProps } from 'types/AppTypes'
import { StatusIcon } from 'resources/Status'
import { MouseEvent } from 'react'
import { ActivateClickedFile } from 'utils/UtilFiles'

export const FileItem = ({ file, files, setFiles }: FileItemProps) => {
  const handleItemClick = (event: MouseEvent<HTMLLIElement>) => {
    event.preventDefault()

    const switchedFiles = ActivateClickedFile(file.id, files)

    setFiles(switchedFiles)
  }

  return (
    <ListingFileItem.Root active={file.active} onClick={handleItemClick}>
      <ListingFileItem.Link href='/' active={file.active}>
        <FileTextIcon title='teste' />
        {file.name}
      </ListingFileItem.Link>
      {file.active && <StatusIcon status={file.status} />}
      <ListingFileItem.RemoveButton />
    </ListingFileItem.Root>
  )
}
