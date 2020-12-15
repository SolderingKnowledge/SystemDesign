import { shallow } from "enzyme";
import React from "react";
import Slides from "./Slides";


describe("should render Slides component", () => {

    const mockList = [1,2,3,4,5];
    const mockOnClickPrev = jest.fn();
    const mockOnClickNext = jest.fn();
    const component = shallow(<Slides 
        sublist={mockList}
        onClickPrev={mockOnClickPrev} 
        onClickNext={mockOnClickNext}
        left={0}
        marginLeft={0}
        width={0}
        viewportSlideCount={0}
        screenWidth={0}
    />);

    it('should match snapshot', () => {
        expect(component).toMatchSnapshot();
    })

    it("next, prev buttons should have onClick callback functions", () => {

        const onClickPrev = component.find('[id="prev-button"]');
        const onClickNext = component.find('[id="next-button"]');

        onClickPrev.simulate("click");
        onClickNext.simulate("click");

        expect(mockOnClickPrev.mock.calls.length).toEqual(1);
        expect(mockOnClickNext.mock.calls.length).toEqual(1);
    })

});