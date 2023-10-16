
import LogInput from "./LogInput";

import "../../../styles/fonts.scss";

export default {
    title: 'Inputs/LogInput',
    component: LogInput
}


const Template = (arg) => <LogInput {...arg}></LogInput>

export const Default = Template.bind({});
Default.args = {
    textarea: false,
    question: true,
    placeholder: "Description",
    type: "email",
    label: "Description",
    id: "playlist-description-input",
    width: 100 + "%",
    maxWidth: 430,
}