import { styled } from "styled-components/macro"

export function App() {
    return <Title>App</Title>
}

const Title = styled.div`
    color: ${(props) => props.theme.colors.primary}
`
