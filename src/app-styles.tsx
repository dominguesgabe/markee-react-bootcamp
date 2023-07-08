import { ReactNode } from 'react'
import { Props, ReactSVG } from 'react-svg'
import { styled, css } from 'styled-components/macro'

type GenericProps = {
    children: ReactNode
}

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

/**/

const Root = styled.li<GenericProps>`
    width: 100%;
    height: 42px;
    list-style: none;
    display: flex;
    justify-content: space-between;
    padding: 0 10px;
    align-items: center;
    transition-duration: .2s;

    border: 0;
    border-radius: 4px;
    &:hover {
        background-color: rgba(255, 255, 255, .05)
    }
`

type LinkProps = {
    href: string
}

const Link = styled.a<LinkProps>`${({ theme }) => css`
    font-size: 16px;
    color: ${theme.colors.gray};
    text-decoration: none;
    display: flex;
    align-items: center;
    gap: 12px;

    &:hover {
        color: ${theme.colors.white};
    }
`}`

const Button = styled.button<GenericProps>`${({ theme }) => css`
    background: none;
    border: none;
    color: ${theme.colors.white};
    height: fit-content;
`}`

const Icon = styled(ReactSVG)<Props>`${({ theme }) => css`
    background: none;
    border: none;
    color: ${theme.colors.white};
    height: fit-content;
`}`

export const ListingFileItem = {
  Root,
  Link,
  Button,
  Icon,
}
