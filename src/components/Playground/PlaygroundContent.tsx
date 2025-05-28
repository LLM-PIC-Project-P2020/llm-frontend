import { useState } from "react";
import PlaygroundChat from "./PlaygroundChat";
import PlaygroundEditor from "./PlaygroundEditor";


function PlaygroundContent () {
    const [code, setCode] = useState<string>("import numpy as np\nprint('hello, world')\n");
    return (
        <div style={{width: "100%", height: "calc(100vh - 50px)", display: "flex", flexDirection: "row", justifyContent: "space-around"}}>
            <div style={{flexBasis: "35%"}}>
                <PlaygroundChat code={code}/>
            </div>
            <div style={{flexBasis: "55%"}}>
                <PlaygroundEditor code={code} setCode={setCode}/>
            </div>
        </div>
    );
}

export default PlaygroundContent;

