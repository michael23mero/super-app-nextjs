import Navigation from "@/res/components/Navigation"
import Provider from "@/res/context/SessionProvider"

export const metadata = {
    title: 'App'
}

export default function RootLayout({ children }) {
    return (
        <html lang='en'>
            <head>
                <link rel="stylesheet" href="/css/main.css"></link>
            </head>
            <body>
                <Provider>
                  <Navigation />
                    <br/> <div className="container py-5">
                        { children }
                    </div>
                </Provider>
            </body>
        </html>
    )
}