import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import App from "./App";


describe("<App /> component should be mounted to DOM", () => {

    let container = null;

    beforeEach(()=>{
        container = document.createElement("div");
        document.body.appendChild(container);
    })

    afterEach(() => {
        unmountComponentAtNode(container);
        container.remove();
        container = null;
    });

    it("should render list numbers", () => {
        act(() => {
            render(<App />, container);
        });
        expect(container.textContent).toBe("201234");
    });

});



