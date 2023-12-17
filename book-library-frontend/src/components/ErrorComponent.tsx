import MainNavigation from "./navigation/MainNavigation";

function ErrorComponent() {
    return (
        <>
            <MainNavigation />
            <main>
                <h1>An error occured!</h1>
                <p>Unable to find this page!</p>
            </main>
        </>
    );
}

export default ErrorComponent;
