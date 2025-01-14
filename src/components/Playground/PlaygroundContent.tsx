import PlaygroundChat from "./PlaygroundChat";
import PlaygroundEditor from "./PlaygroundEditor";


function PlaygroundContent () {
    return (
        <div style={{width: "100%", height: "calc(100vh - 50px)", display: "flex", flexDirection: "row", justifyContent: "space-around"}}>
            <div style={{flexBasis: "35%"}}>
                <PlaygroundChat />
            </div>
            <div style={{flexBasis: "55%"}}>
                <PlaygroundEditor />
            </div>
        </div>
    );
}

export default PlaygroundContent;

