
import Search from "./Search";

import "../../../styles/fonts.scss";

export default {
    title: 'Inputs/Search',
    component: Search
}



const Template = (arg) => <Search {...arg}></Search>

export const Default = Template.bind({});
Default.args = {
}