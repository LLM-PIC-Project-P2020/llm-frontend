import { Alignment, AnchorButton, Button, Navbar } from "@blueprintjs/core";
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
                    <AnchorButton className="bp5-minimal" icon="home" text="Home" href="/" />
                    <AnchorButton className="bp5-minimal" icon="document" text="Playground" href="/playground" />
                    <Navbar.Divider />
                    <Button minimal icon='person' onClick={() => setOpen(true)}/>
                </Navbar.Group>
            </Navbar>
            <UserSidebarDrawer isOpen={isOpen} setOpen={setOpen} />
        </>
    );
}

export default NavigationBar;
