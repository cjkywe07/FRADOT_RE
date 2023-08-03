import Header from "./header";
import Footer from "./footer";

const LayOut = (props) => {
    return (
        <>
            <Header></Header>
            <main>{props.children}</main>
            <Footer></Footer>
        </>
    );
};

export default LayOut;
