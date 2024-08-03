export default function Footer(){
    return (
        <footer className="bg-slate-800 text-white py-6">
            <div className="container mx-auto flex justify-center space-x-6">
                <a
                    href="https://github.com/yourusername"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-gray-400"
                >
                    GitHub
                </a>
                <a
                    href="https://www.linkedin.com/in/yourusername/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-gray-400"
                >
                    LinkedIn
                </a>
                <a
                    href="https://medium.com/@yourusername"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-gray-400"
                >
                    Medium
                </a>
            </div>
        </footer>
    )
}