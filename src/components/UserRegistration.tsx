import { Button, ButtonGroup, Classes, Dialog, DialogBody, FormGroup, InputGroup } from '@blueprintjs/core';
import { FormEvent, useState } from 'react';

import type { components } from '../../api/openapi';

export default function UserRegistration ({isOpen, setOpen} : { isOpen : boolean, setOpen : (arg0: boolean) => void }) {

    const [registerData, setRegisterData] = useState<components['schemas']['User']>({
        id: 0,
        email: "",
        userName: "",
        password: ""
    });
    const [passwordRepeated, setPasswordRepeated] = useState<string>("");

    const handleSubmit = async (e : FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        // TODO: Validation
        if (passwordRepeated !== registerData?.password) {
            console.error("Wrong password");
            return;
        }

        try {
            console.dir(registerData);
            const response = await fetch('/api/user/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(registerData)
            });
            console.log("Successful: " + response);
        } catch (e) {
            console.log("Failed: " + e);
        }
    };

    return (<Dialog 
        isOpen={isOpen} 
        onClose={() => setOpen(false)} 
        className={Classes.OVERLAY_SCROLL_CONTAINER}
        usePortal
        title="注册"
    >
        <DialogBody>
            <form onSubmit={handleSubmit}>
                <FormGroup label="用户名" labelFor="text-input">
                    <InputGroup name="userName" onChange={(e) => setRegisterData({...registerData, userName: e.target.value})}/>
                </FormGroup>

                <FormGroup label="邮箱" labelFor="text-input">
                    <InputGroup name="email" onChange={(e) => setRegisterData({...registerData, email: e.target.value})}/>
                </FormGroup>

                <FormGroup label="密码" labelFor="text-input">
                    <InputGroup name="password" type="password" onChange={(e) => setRegisterData({...registerData, password: e.target.value})}/>
                </FormGroup>

                <FormGroup label="确认密码" labelFor="text-input">
                    <InputGroup type="password" onChange={(e) => setPasswordRepeated(e.target.value)}/>
                </FormGroup>

                <ButtonGroup fill>
                    <Button intent="primary" type="submit" text="注册" rightIcon="arrow-right"/>
                </ButtonGroup>
            </form>
        </DialogBody>
    </Dialog>);
}
