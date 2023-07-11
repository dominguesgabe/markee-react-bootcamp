import { FileTextIcon } from 'ui'
import { ListingFileItem } from './Sidebar'
import { FileProps } from 'types/AppTypes'

export const File = (props: FileProps) => {
  return (
    <ListingFileItem.Root active={props.active}>
      <ListingFileItem.Link href='/' active={props.active}>
        <FileTextIcon title='teste' />
        {props.name}
      </ListingFileItem.Link>
      <ListingFileItem.RemoveButton />
    </ListingFileItem.Root>
  )
}
