import {FC} from 'react';
import PageTitle from "../../components/PageTitle";
import st from "./Calculator.module.css"
import Card from "./Card";

const Page: FC = () => {
    return (
        <div className="main">
            <PageTitle title={"Mortgage calculator"}/>
            <div className={"page_content"}>
                <Card/>
            </div>
        </div>
    );
};

export default Page;
