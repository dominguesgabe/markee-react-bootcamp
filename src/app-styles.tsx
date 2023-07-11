import { ReactNode } from 'react'
import { styled, css } from 'styled-components/macro'
import { RemoveFileIcon } from 'ui'

type GenericProps = {
    children: ReactNode
}

export const AppWrapper = styled.div<GenericProps>`
    display: flex;
    flex-wrap: wrap;
`

export const Sidebar = styled.div<GenericProps>`${({ theme }) => css`
    width: 20%;
    height: 100vh;
    padding: 45px 32px;
    display: flex;
    justify-content: center;
    align-content: flex-start;
    flex-wrap: wrap;
    background: ${theme.colors.black};
`}`

type DividerNameProps = {
    children: string
}

export const DividerName = styled.p<DividerNameProps>`${({ theme }) => css`
    margin: 0;
    z-index: 2;
    padding: 0 5px;
    position: relative;
    width: fit-content;
    font-weight: 500;
    background-color: ${theme.colors.black};
`}`

export const Divider = styled.div<GenericProps>`${({ theme }) => css`
    width: 100%;
    padding-left: 20px;
    font-size: 16px;
    margin-top: 60px;
    color: ${theme.colors.white};
    font-family: 'DM Sans', sans-serif;
    position: relative;

    &::after {
        content: "";
        width: 100%;
        height: 2px;
        display: block;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        border-radius: 2px;
        margin: auto;
        position: absolute;
        background-color: ${theme.colors.primary};
        z-index: 0;
    }
`}`

export const MainLogoBox = styled.div<GenericProps>`
    width: 100%;
    display: flex;
    justify-content: center;
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

export const FilesListingWrapper = styled.ul<GenericProps>`${({ theme }) => css`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    margin-top: 38px;
    padding: 0;
    color: ${theme.colors.gray};
`}`

/* composition */

const RemoveButton = styled(RemoveFileIcon)<any>`${({ theme }) => css`
    background: none;
    border: none;
    color: ${theme.colors.white};
    height: fit-content;
    transition-duration: 0.2s;

    display: none;
`}`

type FileStyleProps = GenericProps & {
    active: boolean
}

const Root = styled.li<FileStyleProps>`${({ active, theme }) => css`
    width: 100%;
    height: 42px;
    list-style: none;
    display: flex;
    justify-content: space-between;
    padding: 0 10px;
    align-items: center;
    transition-duration: .2s;
    cursor: pointer;

    border: 0;
    border-radius: 4px;

    ${active && css`
        background-color: ${theme.colors.hoverColor};
    `}

    &:hover {
        background-color: ${theme.colors.hoverColor};

        ${!active && RemoveButton} {
            display: block;
        }
    }
`}`

type LinkProps = {
    href: string
    active: boolean
}

const Link = styled.a<LinkProps>`${({ theme, active }) => css`
    font-size: 16px;
    color: ${theme.colors.gray};
    text-decoration: none;
    display: flex;
    align-items: center;
    gap: 12px;

    ${active && css`
        color: ${theme.colors.white};
        background-color: ${theme.colors.hoverColor};

        svg {
            color: ${theme.colors.primary}
        }
    `}

    &:hover {
        color: ${theme.colors.white};
    }
`}`

export const ListingFileItem = {
  Root,
  Link,
  RemoveButton,
}

/**/

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

export const OutputAreaWrapper = styled.div<GenericProps>`
    width: 50%;
    height: 85vh;
    padding: 24px 30px;
    border-left: 2px solid #1E293B20;
`
