import Header from "./header";
import Footer from "./footer";

const LayOut = (props) => {
    return (
        <>
            <Header />
            <main>{props.children}</main>
            <Footer />
        </>
    );
};

export default LayOut;
