import ts_logo from "../../assets/ts_logo.png";
import react_logo from "../../assets/react_logo.png";
import redux_logo from "../../assets/redux_logo.png";
import express_logo from "../../assets/express_logo.png";
import node_logo from "../../assets/node_logo.jpg";
import mysql_logo from "../../assets/mysql_logo2.jpg";
import heroku_logo from "../../assets/heroku_logo.png";

export const techs = [{
    mainTitle: "Client",
    items: [
        {title: "TypeScript", logo: ts_logo, link: "https://www.typescriptlang.org/"},
        {title: "React", logo: react_logo, link: "https://reactjs.org/"},
        {title: "Redux", logo: redux_logo, link: "https://redux.js.org/"},
    ]
},
    {
        mainTitle: "Server",
        items: [
            {title: "Express", logo: express_logo, link: "https://expressjs.com/"},
            {title: "NodeJS", logo: node_logo, link: "https://nodejs.org/en/"},
            {title: "MySQL", logo: mysql_logo, link: "https://www.mysql.com/"},
        ]
    },
    {
        mainTitle: "Deployment",
        items: [
            {title: "Heroku", logo: heroku_logo, link: "https://www.heroku.com/"},
        ]
    }
]
