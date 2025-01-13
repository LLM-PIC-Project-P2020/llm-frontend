import { TextArea } from "@blueprintjs/core"

function PlaygroundEditor () {
    return <div style={{flexGrow: "1", paddingTop: 10, paddingBottom: 10, width: "100%", height: "100%"}}>
        <TextArea style={{resize: "none", width: "100%", height: "100%"}} placeholder={"代码编辑器"}/>
    </div>
}

export default PlaygroundEditor
