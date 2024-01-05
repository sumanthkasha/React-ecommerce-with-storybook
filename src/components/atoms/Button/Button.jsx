import './Button.scss';

export default function Button(props) {
    const {buttonType} = props;
    
    return (
        <button type={buttonType}>
            {props.children}
        </button>
    )
}