import React from 'react';
import PageTitle from "../../components/PageTitle"
import about from "../about/About.module.css"

const HomePage = () => {

    return (
        <div className={"main"}>
            <PageTitle title={"Home"}/>
            <div className={"page_content"}>
                <div className={about.paragraph_container}>
                    <p className={about.paragraph}>
                        Welcome to The Banker!
                    </p>
                    <p className={about.paragraph}>
                        Here you can create banks an calculate your payment plan
                    </p>
                </div>
            </div>
        </div>
    );
};

export default HomePage;
