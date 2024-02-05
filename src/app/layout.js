import Navigation from "@/components/Navigation"

export const metadata = {
    title: 'App'
}

export default function RootLayout({ children }) {
    return (
        <html lang='en'>
            <head>
                <link rel="stylesheet" href="https://bootswatch.com/5/materia/bootstrap.min.css"></link>
            </head>
            <body>
                <Navigation />
                <br/> <div className="bg-dark container text-white py-5">
                    { children }
                </div>
            </body>
        </html>
    )
}