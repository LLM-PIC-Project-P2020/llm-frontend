import { Button, Intent, OverlayToaster, TextArea } from "@blueprintjs/core";
import { useRef, useState } from "react";
import { operations } from "../../../api/openapi";

interface PlaygroundChatProps {
    code : string
};

function PlaygroundChat ({ code } : PlaygroundChatProps) {
    const promptRef = useRef<string>("");
    const [waitingOutput, setWaitingOutput] = useState<boolean>(false);
    const [output, setOutput] = useState<string>("大模型输出");

    const onSubmit = () => {
        if (!promptRef.current) return;

        setWaitingOutput(true);
        const requestBody : operations['tutorRespond']['requestBody']['content']['application/json'] = {
            'code': code,
            'prompt': promptRef.current
        };

        const api_fetch = async () => {
            setOutput("");
            const resp = await fetch('/api/tutorResponse/', {
                method: 'POST',
                body: JSON.stringify(requestBody)
            });

            if(!resp.ok || resp.body == null) {
                setOutput("服务器繁忙，请稍后再试。");
                return;
            }

            const reader = resp.body.pipeThrough(new TextDecoderStream()).getReader();
            while (true) {
                const {done, value} = await reader.read();
                if (done) {
                    break;
                }
                setOutput((output) => output + value);
            }
        };
        api_fetch()
            .then(() => setWaitingOutput(false))
            .catch((e) => {
                /* TODO: Fix this memory leak. */
                OverlayToaster.create().show({message: `发生错误：${e}`, intent: Intent.DANGER });
                setWaitingOutput(false);
            });
    };

    return <div style={{
        display: "flex", 
        flexDirection: "column", 
        height: "100%", 
        justifyContent: "space-around", 
        rowGap: "10px"
    }}>
        <div style={{flexGrow: "1", paddingTop: 10}}>
            <TextArea style={{resize: "none", width: "100%", height: "100%"}} value={output} />
        </div>
        <div style={{flexGrow: "0", flexBasis: "5rem" , display: "flex", paddingBottom: 10}}>
            <TextArea 
                style={{flexGrow: 1, resize: "none"}} 
                placeholder={"大模型输入"} 
                onChange={(e) => promptRef.current = e.target.value} 
            />
            <Button 
                style={{flexBasis: "2rem"}} 
                icon='arrow-right' 
                onClick={() => onSubmit()}
                disabled={waitingOutput}
            />
        </div>
    </div>;
}

export default PlaygroundChat;
