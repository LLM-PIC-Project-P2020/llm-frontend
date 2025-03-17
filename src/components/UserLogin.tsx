import { Button, ButtonGroup, Classes, FormGroup, InputGroup, Overlay2, Tooltip } from "@blueprintjs/core";
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
    
    return (<Overlay2 
        isOpen={isOpen} 
        onClose={() => setOpen(false)} 
        className={Classes.OVERLAY_SCROLL_CONTAINER}
        usePortal
        hasBackdrop
    >
        <>
            <div className={Classes.CARD} style={{left: "calc(50vw - 200px)", width: "400px", top: "10vw"}}>
                <FormGroup label="账户" labelFor="text-input">
                    <InputGroup rightElement={RegisterButton(() => setRegistrationShown(true))}  style={{flexGrow: 1}}/>
                </FormGroup>

                <FormGroup label="密码" labelFor="text-input">
                    <InputGroup type={isClearText ? "text" : "password"} rightElement={TogglePasswordDisplay({isClearText, setClearText})}/>
                </FormGroup>

                <ButtonGroup fill>
                    <Button intent="warning" text="忘记密码" />
                    <div style={{flexBasis: "10px"}} />
                    <Button intent="primary" text="登录" rightIcon="arrow-right"/>
                </ButtonGroup>
            </div>

            <UserRegistration isOpen={isRegistrationShown} setOpen={setRegistrationShown} />
        </>
    </Overlay2>);
}

export default UserLogin;
