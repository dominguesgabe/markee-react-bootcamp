import { ListingFileItem } from 'app-styles'

export type FileProps = {
    id: string
    name: string
    content?: string
    active: boolean
    status: 'editing' | 'saving' | 'saved'
}

export const File = (props: FileProps) => {
  return (
    <ListingFileItem.Root>
      <ListingFileItem.Link href='/'>
        <ListingFileItem.Icon src='/svg/file-text.svg' />
        {props.name}
      </ListingFileItem.Link>
      <ListingFileItem.Button>
        <ListingFileItem.Icon src='/svg/delete-file.svg' />
      </ListingFileItem.Button>
    </ListingFileItem.Root>
  )
}
