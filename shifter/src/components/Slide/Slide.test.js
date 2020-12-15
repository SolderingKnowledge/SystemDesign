import Enzyme, { shallow, toJson, mount, render } from "enzyme";
import React from "react";
import Slide from "./Slide";

describe("Slide Component should render", () => {
    const mockItem = 1;
    it("should show text and match snapshot", ()=>{

        const component = shallow(<Slide slide={mockItem} />);
        const text = component.find("h1");
        expect(text.text()).toBe("1");
        expect(component).toMatchSnapshot();
    })
});