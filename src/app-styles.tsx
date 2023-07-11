import { styled, css } from 'styled-components/macro'
import { GenericProps } from 'types/AppTypes'

export const AppWrapper = styled.div<GenericProps>`
    display: flex;
    flex-wrap: wrap;
`

export const AddFileButton = styled.button<GenericProps>`${({ theme }) => css`
    width: 100%;
    margin-top: 24px;
    height: 42px;
    font-size: 16px;
    color: ${theme.colors.black};
    background-color: ${theme.colors.primary};
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 12px;
    cursor: pointer;
    transition-duration: .2s;

    border: 0;
    border-radius: 4px;
    &:hover {
        background-color: ${theme.colors.darkerPrimary};
    }
`}`

export const MainContent = styled.div<GenericProps>`
    width: 80%;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
`

export const EditingAreaWrapper = styled.div<GenericProps>`
    width: 50%;
    height: 100vh;
    padding: 24px 30px;
`

export const EditingFileName = styled.div<GenericProps>`${({ theme }) => css`
    display: flex;
    gap: 12px;
    font-size: 24px;
    font-weight: 700;
    font-family: DM Sans;
    color: ${theme.colors.black}

    svg {
        color: ${theme.colors.primary};
        width: 25px;
        height: 25px;
    }

    input {
        border: 0;

        &:focus {
            outline: none;
        }
    }
`}`

// todo fix

export const EditingTextarea = styled.textarea<any>`
    width: 100%;
    max-width: 100%;
    height: 90%;
    border: 0;
    font-family: Inconsolata;
    font-size: 24px;
    font-weight: 500;
    margin-top: 48px;
    outline: none;
`

// todo fix type
export const OutputAreaWrapper = styled.div<any>`
    width: 50%;
    height: 85vh;
    padding: 24px 30px;
    border-left: 2px solid #1E293B20;
`
