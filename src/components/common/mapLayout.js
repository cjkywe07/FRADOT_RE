import Header from "./mapHeader";

const MapLayOut = (props) => {
    return (
        <>
            <Header></Header>
            <main>{props.children}</main>
        </>
    );
};

export default MapLayOut;
