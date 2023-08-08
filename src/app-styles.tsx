import { styled, css } from 'styled-components/macro'
import { EditingFileNameProps, GenericProps } from 'types/AppTypes'

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

export const MainContentWrapper = styled.div<GenericProps>`
    width: 82%;
    height: 100vh;
    padding: 24px 30px;
`

export const EditingFileName = styled.input<EditingFileNameProps>`${({ theme }) => css`
    width: 100%;
    height: 10%;
    gap: 12px;
    font-size: 20px;
    font-family: DM Sans;
    color: ${theme.colors.black};
    border: 0;
    padding-left: 40px;
    background: url('/file-text.svg') left center no-repeat;

    &:focus {
        outline: none;
    }
`}`

export const EditingWrapper = styled.div`
    width: 100%;
    height: 90%;
    display: flex;
    gap: 2px;
    padding-top: 40px;
`

export const EditingTextarea = styled.textarea`
    width: 100%;
    max-width: 100%;
    border: 0;
    font-family: Inconsolata;
    font-size: 18px;
    font-weight: 500;
    outline: none;
    resize: none;
`

export const OutputArticle = styled.article`${({ theme }) => css`
    width: 100%;
    font-size: 16px;
    font-family: DM Sans;
    color: ${theme.colors.black};
    border-left: 2px solid ${theme.colors.gray};
    padding: 0 30px;


    &:focus {
        outline: none;
    }
`}`
