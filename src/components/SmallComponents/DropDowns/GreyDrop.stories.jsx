
import GreyDrop from "./GreyDrop";

import "../../../styles/fonts.scss";

export default {
    title: 'DropDowns/GreyDrop',
    component: GreyDrop
}



const Template = (arg) => <GreyDrop {...arg}></GreyDrop>

export const Default = Template.bind({});
Default.args = {
    id:"custom-dropdown",
    label:"Category",
    options:["option1", "option2","option3", ],
    question:false,
}