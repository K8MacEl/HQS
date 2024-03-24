import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

export default function RequestIndex() {
    return (
        <>
            <Header></Header>
            <div className="yellow_top_page">
                <img className="hqspec_logo" src="https://i.imgur.com/CKEt2Kqm.png" alt="" />
                <header className="title">
                    <br />
                    <h1 style={{
                        fontSize: "10vh"
                    }}>INSPECTION REQUESTS</h1>
                    <h2 style={{
                        fontsize: "10vh"
                    }}></h2>
                </header>
                <h1>CAN WE GET ALL REQUESTS LISTED HERE WITH A PROPERTY SHOW LINK?</h1>
                <Footer></Footer>
            </div>
        </>
    )
}