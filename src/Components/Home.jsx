const Home = ({ setLoginuser }) => {
    return (
        <>
            <div className="container">
                <div className="content">
                    <h1>Welcome to Home </h1>
                    <button className="btn" onClick={() => { setLoginuser ({})}}>Logout</button>
                </div>
            </div>
        </>
    )
}

export default Home