import { Button, ButtonGroup, Classes, Dialog, DialogBody, DialogFooter, FormGroup, InputGroup, Tooltip } from "@blueprintjs/core";
import { useState } from "react";
import UserRegistration from "./UserRegistration";

function RegisterButton(openRegistrationForm : () => void) {
    return (<Tooltip content={"注册"}>
        <Button minimal icon="new-person" onClick={() => openRegistrationForm()}/>
    </Tooltip>);
}

function TogglePasswordDisplay({isClearText, setClearText} : {isClearText: boolean, setClearText: (arg0: boolean) => void}) {
    return (
        <Tooltip content={`${isClearText ? "隐藏" : "显示"}密码`}>
            <Button minimal icon={isClearText ? "lock" : "key"} onClick={isClearText ? () => setClearText(false) : () => setClearText(true)} />
        </ Tooltip>
    );
}

function UserLogin({isOpen, setOpen} : { isOpen : boolean, setOpen : (arg0: boolean) => void})  {
    const [isClearText, setClearText] = useState(false);
    const [isRegistrationShown, setRegistrationShown] = useState(false);

    const footerActions = <>
        <Button intent="warning" text="忘记密码" />
        <Button intent="primary" text="登录" rightIcon="arrow-right"/>
    </>;
    
    return (<Dialog 
        isOpen={isOpen} 
        onClose={() => setOpen(false)} 
        className={Classes.OVERLAY_SCROLL_CONTAINER}
        usePortal
        title="登录"
    >
        <DialogBody>
            <FormGroup label="账户" labelFor="text-input">
                <InputGroup rightElement={RegisterButton(() => setRegistrationShown(true))}  style={{flexGrow: 1}}/>
            </FormGroup>

            <FormGroup label="密码" labelFor="text-input">
                <InputGroup type={isClearText ? "text" : "password"} rightElement={TogglePasswordDisplay({isClearText, setClearText})}/>
            </FormGroup>
        </DialogBody>

        <DialogFooter actions={footerActions} />

        <UserRegistration isOpen={isRegistrationShown} setOpen={setRegistrationShown} />
    </Dialog>);
}

export default UserLogin;
