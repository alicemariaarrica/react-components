export default function appHeader() {

    // logic
    const title = "Il mio Blog"

    // markup (JSX)
    return (
        <header>
            <div className="container">
                <h1>{title}</h1>
            </div>
        </header>
    )
}