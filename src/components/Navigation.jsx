import { Link } from "react-router-dom"

const Navigation = () => {

    const throwError = () => {
        throw new Error('An error occured')
    }

    return (
        <div class="header">
            <div class="containa">
                <ul class="nav">
                    <Link to={'/'} > <li> Home </li></Link>
                    <Link to={'users'}> <li> Users </li></Link>
                    <Link to={'sadalkjklm'}> <li>404</li></Link>
                    <li onClick={throwError}>Error boundary</li>
                </ul>
            </div>
        </div>

    )
}

export default Navigation