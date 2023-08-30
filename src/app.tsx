import { AppWrapper } from 'app-styles'
import { Sidebar } from 'Sidebar'
import { MainContent } from 'resources/MainContent'
import { useFiles } from 'resources/files/UseFiles'

export function App () {
  const {
    files,
    setFiles,
    handleAddFile,
    handleRemoveFile,
    switchActiveFile,
    handleUpdateFileName,
    handleUpdateFileContent,
    inputRef,
  } = useFiles()

  return (
    <AppWrapper>
      <Sidebar
        files={files}
        setFiles={setFiles}
        inputRef={inputRef}
        onAddFile={handleAddFile}
        onRemoveFile={handleRemoveFile}
        switchActiveFile={switchActiveFile}
      />
      <MainContent
        files={files}
        inputRef={inputRef}
        onUpdateFileName={handleUpdateFileName}
        onUpdateFileContent={handleUpdateFileContent}
      />
    </AppWrapper>
  )
}
