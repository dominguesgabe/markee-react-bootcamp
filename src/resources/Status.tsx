import { styled, keyframes } from 'styled-components'
import { StatusProps } from 'types/AppTypes'
import {
  EditingIcon,
  SavingIcon,
  SavedIcon,
} from 'utils/SvgIcons'

type StatusIconProps = {
    status: StatusProps
}

export const StatusIcon = ({ status }: StatusIconProps) => {
  const Icon = {
    editing: EditingIcon,
    saving: Saving,
    saved: SavedIcon,
  }[status]

  return <Icon />
}

const Rotation = keyframes`
    from {
        transform: rotate(0deg);
    }

    to {
        transform: rotate(359deg);
    }
`

const Saving = styled(SavingIcon)`
    animation: ${Rotation} 600ms linear infinite;
`
