export default function Footer() {
    const footerStyle = {
        backgroundColor: "#333",
        color: "#fff",
        padding: "20px 0",
        textAlign: "center" as const,
    };

    return (
        <footer style={footerStyle}>
            <p>Copyright @ 2023</p>
        </footer>
    );
}
