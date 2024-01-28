import Link from "next/link"

const Header = () => {
    return (
        <header className="header">
            <div>
                <ul className="bg-red-500">
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="/about">About</Link></li>
                    <li><Link href="/about/team">Team</Link></li>
                    <li><Link href="/code/repos">Code</Link></li>

                </ul>            
            </div>
        </header>
    )
}

export default Header