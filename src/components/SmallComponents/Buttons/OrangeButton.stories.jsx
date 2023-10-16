
import OrangeButton from "./OrangeButton";

import "../../../styles/fonts.scss";

export default {
    title: 'Buttons/OrangeButton',
    component: OrangeButton
}



const Template = (arg) => <OrangeButton {...arg}></OrangeButton>

export const Default = Template.bind({});
Default.args = {
    text:"Add new video",
    plus: true,
    marginTop: 0,
    width: 180
}