const Home = () => {
    return (
        <div>
            <div style={{width: 500, margin: "30px auto", textAlign: "center"}}>
                <h1>Home Component</h1>
                <div>
                    <img 
                    src="https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-14-pro-max-1.jpg"
                    alt="iphone 14 pro max"
                    width="300" />
                </div>
                <h3>Iphone 14 Pro max</h3>
                <button
                 type="button"
                 style={{padding: 5, backgroundColor: "gold", border: "2px solid grey", cursor: "pointer"}}>Add to Cart</button>
            </div>
        </div>
    );
}

export default Home;