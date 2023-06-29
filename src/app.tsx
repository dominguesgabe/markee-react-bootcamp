import { styled, css } from 'styled-components/macro'

export function App () {
  return <Title teste="testando">App</Title>
}

type TitleProps = {
    teste: string
}

const Title = styled.h1<TitleProps>`${({theme}) => css`
    background: ${theme.colors.lightBlack};
    color: ${theme.colors.primary};
`}`
