export default function Slide( props ) {
    return (
        <li className="slide" tabIndex="0">
            <h1 className="number-item" aria-label={`slide ${props.slide}`}>{props.slide}</h1>
        </li>
    );
}
