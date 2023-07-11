import { ListingFileItem } from 'app-styles'
import { FileTextIcon } from 'ui'

export type StatusProps = 'editing' | 'saving' | 'saved'

export type FileProps = {
    id: string
    name: string
    content?: string
    active: boolean
    status: StatusProps
}

export const File = (props: FileProps) => {
  return (
    <ListingFileItem.Root active={props.active}>
      <ListingFileItem.Link href='/' active={props.active}>
        <FileTextIcon />
        {props.name}
      </ListingFileItem.Link>
      <ListingFileItem.RemoveButton />
    </ListingFileItem.Root>
  )
}
