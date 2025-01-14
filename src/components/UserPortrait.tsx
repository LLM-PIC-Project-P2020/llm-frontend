import { People } from "@blueprintjs/icons";

function UserPortrait () {
    return <div style={{borderRadius: "50%", overflow: "hidden", height: 64, width: 64}}>
        <People size={80}/>
    </div>;
}

export default UserPortrait;
