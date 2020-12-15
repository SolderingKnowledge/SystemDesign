// *****  Class Component React!  *****
// import React, { Component } from "react";
// import Slides from "../Slides/Slides";
// import "../../App.css";

// const listAllData = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];

// class Shifter extends Component {
//     constructor(){
//         super();
        
//         const list = [listAllData[listAllData.length-1], ...listAllData.slice(0,4)]
//         this.state = {
//             listAll: listAllData,
//             list,
//             startIdx: listAllData.length-1,
//             left: -340,
//             marginLeft: 0,
//             width: 340, // slide width
//             viewportSlideCount:3, // slides quantity inside a viewport
//             screenWidth: 0,
//         }
//     }

//     componentDidMount(){
//         //screenWidth set on resize
//         window.addEventListener("resize", () => {
//             this.setState({screenWidth: window.innerWidth});
//         });
//         // initial screenWidth set
//         this.setState({screenWidth: window.innerWidth});
//     }

//     onClickPrev = () => {
//         const {listAll, marginLeft, left, width} = this.state;
//         // prev slide: -7-1%20 = -8
//         const startIdx = (this.state.startIdx - 1) % listAll.length;
//         const list = this.prepareSlides(startIdx)
//         this.setState({ left: left+width, startIdx, list, marginLeft: marginLeft - width });  

//     }

//     prepareSlides = ( startIdx ) => {
//         const {listAll, viewportSlideCount} = this.state;
//         const list = [];
//         for(let i=0;i<viewportSlideCount+2;i++){
//             // make next or prev slide index: (7+1) % 20 = 8 or (-7+1) % 20 = -6 
//             let currInd = (startIdx + i) % listAll.length;
//             // if index is -7 or -something
//             if(currInd<0){
//                 // -7 + 20 = 13 going backwards 
//                 currInd += listAll.length
//             }
//             // make next or prev five slides list
//             list.push(listAll[currInd])
//         }
//         return list
//     }

//     onClickNext = () => {
//         const {listAll, marginLeft, left, width} = this.state;
//         // next slide: 7+1%20 = 8
//         const startIdx = (this.state.startIdx + 1) % listAll.length;
//         const list = this.prepareSlides(startIdx)
//         this.setState({ left: left-width, startIdx, list, marginLeft: marginLeft + width });         
//     }


//     render(){
//         return (
//             <div className="shifter">
//                 <Slides 
//                     sublist={this.state.list}
//                     onClickPrev={this.onClickPrev}
//                     onClickNext={this.onClickNext}
//                     left={this.state.left}
//                     marginLeft={this.state.marginLeft}
//                     width={this.state.width}
//                     viewportSlideCount={this.state.viewportSlideCount}
//                     screenWidth={this.state.screenWidth}
//                 />    
//             </div>
//         );
//     }
// }

// export default Shifter;


// // *****  Function Component React HOOKS!  *****
import { useState, useEffect } from "react";
import Slides from "../Slides/Slides";
import "../../App.css";


const listAllData = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
const Shifter = () =>  {

    // state
    const [ sublist, setSublist ] = useState( [listAllData[listAllData.length-1], ...listAllData.slice(0,4)] );
    const [ listAll, setListAll ] = useState(listAllData);
    const [ startIdx, setStartIdx ] = useState(listAllData.length-1);
    const [ left, setLeft ] = useState(-340);
    const [ marginLeft, setMarginLeft ] = useState(0);
    const [ width, setWidth ] = useState(340);// slide width
    const [ viewportSlideCount, setViewportSlideCount ] = useState(3);// slides quantity inside a viewport
    const [ screenWidth, setScreenWidth ] = useState(0);

    

    useEffect(() => {

        //screenWidth set on resize
        window.addEventListener("resize", () => {
            setScreenWidth( window.innerWidth );
        });
        // initial screenWidth set
        setScreenWidth( window.innerWidth );

    }, [screenWidth])

    const prepareSlides =  startIdx  => {
        const list = [];
        for(let i=0;i<viewportSlideCount+2;i++){
            // make next or prev slide index: (7+1) % 20 = 8 or (-7+1) % 20 = -6
            let currIdx = (startIdx + i) % listAll.length;
            // if index is -7 or -something
            if(currIdx<0){
                // -7 + 20 = 13 or -1+20 = 19; goes backwards
                currIdx += listAll.length
            }
            // make next or prev five slides list
            list.push(listAll[currIdx])
        }
        return list
    }

    const onClickPrev = () => {
        // prev slide: (-7-1)%20 = -8 or (-20-1)%20 = -1
        const newStartIdx = ( startIdx - 1) % listAll.length;

        const newSublist = prepareSlides(newStartIdx)

        setSublist(newSublist);
        // move one slide to the right;ul{left: -340+340(slideWidth)=0} transition: left .3s;
        setLeft(left+width);
        // ul{left: 0-340(slideWidth)=-340} move one slide right to keep slides in the center
        setMarginLeft(marginLeft - width);
        setStartIdx(newStartIdx);
    }

    const onClickNext = () => {
        // next slide: (7+1)%20 = 8 or (20+1)%20 = 1
        const newStartIdx = ( startIdx + 1 ) % listAll.length;
        // get 5 subList from starting index
        const newSublist = prepareSlides(newStartIdx);
        setSublist(newSublist);
        // move one slide to the left;ul{left: -340-340(slideWidth)=-680} transition: left .3s;
        setLeft(left-width);
        // ul{left: 0+340(slideWidth)=340} move one slide left to keep slides in the center
        setMarginLeft(marginLeft + width);
        setStartIdx(newStartIdx);
    }

    return (
        <div className="shifter">
            <Slides 
                sublist={sublist}
                onClickPrev={onClickPrev}
                onClickNext={onClickNext}
                left={left}
                marginLeft={marginLeft}
                width={width}
                viewportSlideCount={viewportSlideCount}
                screenWidth={screenWidth}
            />    
        </div>
    );
}

export default Shifter;
