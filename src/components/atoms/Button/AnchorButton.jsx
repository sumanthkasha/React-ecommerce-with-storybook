import './Button.scss';

export default function AnchorButton(props) {
    const {linkTo} = props
    return (
        <a href={linkTo}>
            {props.children}
        </a>
    )
}