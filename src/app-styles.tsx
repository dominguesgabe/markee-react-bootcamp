import { ReactNode } from "react";
import { styled, css } from "styled-components/macro";

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

export const Divider = styled.div<GenericProps>`${({ theme }) => css`
    width: 100%;
    padding-left: 20px;
    font-size: 16px;
    margin-top: 60px;
    color: ${theme.colors.white};
    font-family: 'DM Sans', sans-serif;
    position: relative;

    p {
        margin: 0;
        z-index: 2;
        padding: 0 5px;
        position: relative;
        width: fit-content;
        font-weight: 500;
        background-color: ${theme.colors.black};
    }

    &::after {
        content: "";
        width: 100%;
        height: 1px;
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