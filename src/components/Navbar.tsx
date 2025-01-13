import { Alignment, Button, Navbar } from "@blueprintjs/core";
import { useState } from "react";
import UserSidebarDrawer from "./UserSidebarDrawer";

function NavigationBar() {

    const [isOpen, setOpen] = useState(false);

    return (
        <>
            <Navbar fixedToTop>
                <Navbar.Group align={Alignment.RIGHT}>
                    <Navbar.Heading>Blueprint</Navbar.Heading>
                    <Navbar.Divider/>
                    <Button className="bp5-minimal" icon="home" text="Home" />
                    <Button className="bp5-minimal" icon="document" text="Files" />
                    <Navbar.Divider />
                    <Button minimal icon='person' onClick={() => setOpen(true)}/>
                </Navbar.Group>
            </Navbar>
            <UserSidebarDrawer isOpen={isOpen} setOpen={setOpen} />
        </>
    );
}

export default NavigationBar;
