import { NonIdealState } from "@blueprintjs/core";

export default function Component() {
    return <NonIdealState
        icon='remove'
        title="Page Not Found"
        description="The page you have requested is not found."
    />;
}
