import { Sidebar, MainLogoBox, Divider } from 'app-styles'

export function App () {
  return (
    <>
        <Sidebar>
            <MainLogoBox>
                <img src="/main-logo.png" alt="app logo" />
            </MainLogoBox>
            <Divider>
                <p>
                    Arquivos
                </p>
            </Divider>
        </Sidebar>
    </>
  )
}