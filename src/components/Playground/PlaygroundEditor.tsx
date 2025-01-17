import { useState } from "react";
import Editor from "react-simple-code-editor";

import 'prismjs/plugins/line-numbers/prism-line-numbers.css';
import 'prismjs/themes/prism.css';
import Prism from "prismjs";
import { Classes } from "@blueprintjs/core";


function PlaygroundEditor () {
    const [code, setCode] = useState(
        "import numpy as np\nprint('hello, world')\n"
    );
    return <div className={Classes.INPUT} style={{
        flexGrow: "1", 
        marginTop: 10, 
        marginBottom: 10, 
        width: "100%", height: "calc(100% - 20px)",
        // border: "2px black solid",
    }}>
        <Editor
            value={code}
            onValueChange={code => setCode(code)}
            highlight={code => Prism.highlight(code, Prism.languages.py, 'python')}
            // padding={10}
            style={{
                fontFamily: '"Inconsolatas", "Consolas", monospace',
                fontSize: 16,
            }}
        />
    </div>;
}

export default PlaygroundEditor;
