import React, {FC} from 'react';

interface IPageTitle {
    title: string;
}

const PageTitle:FC<IPageTitle> = ({title}) => {
    return (
        <h2 className={"page_title"}>{title}</h2>
    );
};

export default PageTitle;
