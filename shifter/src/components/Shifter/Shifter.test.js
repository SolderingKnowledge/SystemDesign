import { shallow } from "enzyme";
import React from "react";
import Shifter from "./Shifter";

describe("Shifter component should render", () => {

    const component = shallow(<Shifter />);

    it("should be defined and have it's length and match snapshot", () => {

        expect(component).toBeDefined();
        expect(component.length).toEqual(1);
        expect(component).toMatchSnapshot();
    });

});