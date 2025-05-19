import { Button, Classes, Dialog, DialogBody, DialogFooter, FormGroup, InputGroup, Intent, OverlayToaster, Toaster, Tooltip } from "@blueprintjs/core";
import { FormEvent, useRef, useState } from "react";
import UserRegistration from "./UserRegistration";
import { components } from "../../api/openapi";
import { useLocalStorage } from "usehooks-ts";
import { UserLocalStorage } from "../localStorage/User";

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
    const [storage, setStorage] = useLocalStorage<UserLocalStorage | null>('user', null);

    const handleSubmit = async (e : FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!userDataRef.current)   return;
        if (!(userDataRef.current.id && userDataRef.current.password))  return;

        /* TODO: This can cause memory leak. */
        const myToaster: Toaster = await OverlayToaster.createAsync({ position: "top" });
    
        try {
            console.dir(userDataRef.current);
            const response = await fetch('/api/session', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(userDataRef.current)
            });
            console.log("Successful: " + response.ok);

            if (!response.ok) {
                myToaster.show({ message: 'Failed to log in.', intent: Intent.DANGER });
            } else {
                const key = await response.text();
                console.log("Returned key:", key);
                setStorage({Id: userDataRef.current.id, AccessToken: key});
                setOpen(false);
            }
        } catch (e) {
            console.log("Failed: " + e);
            myToaster.show({ message: 'Failed to log in due to a network error.', intent: Intent.DANGER });
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
