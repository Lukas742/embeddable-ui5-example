import {useState} from "react";
import {Bar, Label, Switch} from "@ui5/webcomponents-react";
import {PageComponent} from "./page/PageComponent";

export const App = () => {
    const [useCustomElement, setUseCustomElement] = useState(false)

    const onChange = (e) => {
        setUseCustomElement(e.target.checked)
    }

    return (
        <>
            <Bar>
                <Label>Render inside custom element:</Label>
                <Switch checked={useCustomElement} onChange={onChange}/>
            </Bar>
            {useCustomElement ? <page-element></page-element> : <PageComponent/>}
        </>
    );
}

