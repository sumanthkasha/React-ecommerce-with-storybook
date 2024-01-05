import './Button.scss';

export default function AnchorImage(props) {
    const {linkTo, src, alt} = props;
    
    return (
        <a href={linkTo}>
            <img src={src} alt={alt} />
        </a>
    )
}