import { Button, TextArea } from "@blueprintjs/core";

function PlaygroundChat () {
    return <div style={{
        display: "flex", 
        flexDirection: "column", 
        height: "100%", 
        justifyContent: "space-around", 
        rowGap: "10px"
    }}>
        <div style={{flexGrow: "1", paddingTop: 10}}>
            <TextArea style={{resize: "none", width: "100%", height: "100%"}} placeholder={"大模型输出"} />
        </div>
        <div style={{flexGrow: "0", flexBasis: "5rem" , display: "flex", paddingBottom: 10}}>
            <TextArea style={{flexGrow: 1, resize: "none"}} placeholder={"大模型输入"} />
            <Button style={{flexBasis: "2rem"}} icon='arrow-right' />
        </div>
    </div>;
}

export default PlaygroundChat;
