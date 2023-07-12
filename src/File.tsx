import { FileTextIcon } from './utils/SvgIcons'
import { ListingFileItem } from './resources/Sidebar'
import { FileProps } from 'types/AppTypes'
import { StatusIcon } from 'resources/Status'

export const File = (props: FileProps) => {
  return (
    <ListingFileItem.Root active={props.active}>
      <ListingFileItem.Link href='/' active={props.active}>
        <FileTextIcon title='teste' />
        {props.name}
      </ListingFileItem.Link>
      {props.active && <StatusIcon status={props.status} />}
      <ListingFileItem.RemoveButton />
    </ListingFileItem.Root>
  )
}
