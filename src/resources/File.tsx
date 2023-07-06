import { ListingFileItem } from 'app-styles'
import { ReactSVG } from 'react-svg'

export type FileProps = {
    id: string
    name: string
    content: string
    active: boolean
    status: 'editing' | 'saving' | 'saved'
}

export const File = (props: FileProps) => {
  return (
    <ListingFileItem.Root>
      <ListingFileItem.Link href='/'>
        <ReactSVG src='/svg/file-text.svg' />
        {props.name}
      </ListingFileItem.Link>
      <ListingFileItem.Button>
        <ReactSVG src='/svg/delete-file.svg' />
      </ListingFileItem.Button>
    </ListingFileItem.Root>
  )
}
