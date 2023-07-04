import {
    Sidebar,
    MainLogoBox,
    Divider,
    DividerName,
    AddFileButton
} from 'app-styles'
import { ReactSVG } from "react-svg";

export function App () {
  return (
    <>
      <Sidebar>
        <MainLogoBox>
          <img src='/main-logo.png' alt='app logo' />
        </MainLogoBox>
        <Divider>
          <DividerName>
            Arquivos
          </DividerName>
        </Divider>
        <AddFileButton>
            <ReactSVG src='/svg/add-file.svg' />
            Adicionar
        </AddFileButton>
      </Sidebar>
    </>
  )
}
