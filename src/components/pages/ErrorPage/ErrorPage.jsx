import { Link } from "react-router-dom"

export default function Error() {
    return (
        <>
            <div>
                <Link to=".." relative="path">back</Link>
            </div>
            404: Error
        </>
    )
}