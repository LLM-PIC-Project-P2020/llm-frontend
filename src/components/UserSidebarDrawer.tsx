import { Button, Divider, Drawer } from "@blueprintjs/core";
import UserPortrait from "./UserPortrait";

interface Props {
    isOpen: boolean,
    setOpen: (isOpen: boolean) => void
}

function UserSidebarDrawer ({ isOpen, setOpen } : Props) {
    return <Drawer 
        onClose={() => setOpen(false)} 
        isOpen={isOpen} 
        position="left"
        size="min(30%, 100px)"
    >
        <div style={{display: "flex", 
            flexDirection: "column", 
            alignItems: "center", 
            paddingTop: "10px", 
            paddingBottom: "10px",
            height: "100%"
        }}>
            <UserPortrait />
            <Divider />
            <Button icon="plus" minimal />
            <Button icon="plus" minimal />
            <Button icon="plus" minimal />

            <Button style={{marginTop: "auto"}} icon="cog" minimal />
        </div>
    </Drawer>
}

export default UserSidebarDrawer;
