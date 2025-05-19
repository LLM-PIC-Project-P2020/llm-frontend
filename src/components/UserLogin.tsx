import { Button, Classes, Dialog, DialogBody, DialogFooter, FormGroup, InputGroup, Tooltip } from "@blueprintjs/core";
import { FormEvent, useRef, useState } from "react";
import UserRegistration from "./UserRegistration";
import { components } from "../../api/openapi";

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
    const userDataRef = useRef<components['schemas']['LoginRequest']>({});

    const handleSubmit = async (e : FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.assert(userDataRef.current != null);
    
        try {
            console.dir(userDataRef.current);
            const response = await fetch('/api/sessions', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(userDataRef.current)
            });
            console.log("Successful: " + response.ok);
        } catch (e) {
            console.log("Failed: " + e);
        }
    };

    const footerActions = <>
        <Button intent="warning" text="忘记密码" />
        <Button intent="primary" type="submit" text="登录" rightIcon="arrow-right"/>
    </>;
    
    return (<Dialog 
        isOpen={isOpen} 
        onClose={() => setOpen(false)} 
        className={Classes.OVERLAY_SCROLL_CONTAINER}
        usePortal
        title="登录"
    >
        <form onSubmit={handleSubmit}>
            <DialogBody>
                <FormGroup label="账户" labelFor="text-input">
                    <InputGroup 
                        rightElement={RegisterButton(() => setRegistrationShown(true))}  
                        style={{flexGrow: 1}}
                        onChange={(e) => userDataRef.current.id = e.target.value}
                    />
                </FormGroup>

                <FormGroup label="密码" labelFor="text-input">
                    <InputGroup 
                        type={isClearText ? "text" : "password"} 
                        rightElement={TogglePasswordDisplay({isClearText, setClearText})}
                        onChange={(e) => userDataRef.current.password = e.target.value}
                    />
                </FormGroup>
            </DialogBody>

            <DialogFooter actions={footerActions} />
        </form>

        <UserRegistration isOpen={isRegistrationShown} setOpen={setRegistrationShown} />
    </Dialog>);
}

export default UserLogin;
