import Slide  from "../Slide/Slide";
import forward from "../../assets/forward.svg";
import backward from "../../assets/backward.svg";
import IconButton from '@material-ui/core/IconButton';

export default function Slides (props) {

    const { sublist, onClickPrev, onClickNext, left, marginLeft, width, viewportSlideCount, screenWidth } = props;

    const slides = sublist.map((slide, idx)=> {
        return <Slide slide={slide} key={idx} />
    })

    //default: 3 slides; regular size desktops
    let viewPortWidth = width * viewportSlideCount - 20;// left and right margins: 10px + 10px;

    if (screenWidth <= 760 ){// mobile: 1 slide
        viewPortWidth = 320;
    } else if(screenWidth > 760 && screenWidth < 1150 ){// tablet: 2 slides
        viewPortWidth = 660;
    } else if(screenWidth > 1460 ) { // large desktops: 4 slides
        viewPortWidth = 1340;
    }


    return (
        <section tabIndex="0" className="slides" aria-label="shifter section">
            <IconButton onClick={onClickPrev} aria-label="slide previus" id="prev-button">
                <img src={backward} alt="Arrow left" />
            </IconButton>
            <div className="view-port" style={{width: `${viewPortWidth}px`}}>
                <ul className="list" style={{left: `${left}px`,marginLeft: `${marginLeft}px`}}>
                    {slides}
                </ul>
            </div>
            <IconButton onClick={onClickNext} aria-label="slide next" id="next-button">
                <img src={forward} alt="Arrow right" />
            </IconButton>
        </section>
    );
}
