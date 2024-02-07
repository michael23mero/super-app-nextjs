import Navigation from "@/components/Navigation"

export const metadata = {
    title: 'App'
}

export default function RootLayout({ children }) {
    return (
        <html lang='en'>
            <head>
                <link rel="stylesheet" href="https://bootswatch.com/5/slate/bootstrap.min.css"></link>
            </head>
            <body>
                <Navigation />
                <br/> <div className="bg-primary container text-white py-5">
                    { children }
                </div>
            </body>
        </html>
    )
}