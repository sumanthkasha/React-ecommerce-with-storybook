import { Textfield } from "./Textfield";

export default {
    title: 'Atoms/TextField',
    component: Textfield,
    
    argTypes: {
        placeholder: "Textfield",
    }
}

export const Default = {
    args: {
        id: "textfield1",
        showLabel: true,
    }
}

export const Error = {
    args: {
        id: "errorTextfield",
        showLabel: true,
        error: true
    }
}