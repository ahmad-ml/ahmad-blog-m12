import Link from "next/link";

export default function Header() {
    const navStyle = {
        display: "flex",
        justifyContent: "space-around",
        backgroundColor: "#333",
        padding: "10px 0",
        color: "#fff",
    };

    const linkStyle = {
        textDecoration: "none",
        color: "#fff",
    };

    return (
        <header>
            <nav style={navStyle}>
                <Link href="/" style={linkStyle}>Home</Link>
                <Link href="/about" style={linkStyle}>About</Link>
                <Link href="/blog" style={linkStyle}>Blog</Link>
                <Link href="/contact" style={linkStyle}>Contact</Link>
            </nav>
        </header>
    );
}
