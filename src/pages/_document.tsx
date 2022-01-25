import Document , {Html, Head, Main, NextScript} from "next/document"

export default class MyDocument extends Document {
    render(){
        return (
           
            <Html lang="en">
                <Head>
                    
                    <link rel="preconnect" href="https://fonts.googleapis.com"/>
                    <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;500;600;800&family=Poppins:wght@400;600&family=Roboto+Condensed:wght@300;400;700&family=Roboto:wght@400;700;900&display=swap" rel="stylesheet"></link>
                    <link rel="shortcut icon" href="/favicon.png" type="image/png" />
                    
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}