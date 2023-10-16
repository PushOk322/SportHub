
import PasswordInput from "./PasswordInput";

import "../../../styles/fonts.scss";

export default {
    title: 'Inputs/PasswordInput',
    component: PasswordInput
}



const Template = (arg) => <PasswordInput {...arg}></PasswordInput>

export const Default = Template.bind({});
Default.args = {
    placeholder:"Your password",
    label:"Password",
    id:"password-input",
    // forgot: true,
}