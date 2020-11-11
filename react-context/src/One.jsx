import React, {useContext} from "react";
import {myContext} from "./App";

function One() {
    const person = useContext(myContext)
    return (
        <>
            <h1>{person.name}</h1>
            <h3>{person.age}</h3>
            <h3>{person.address}</h3>
        </>

    );
}

export default One;