export default function Footer(){
    return (
        <footer className="bg-primary text-primary-foreground py-6 dark:bg-secondary dark:text-secondary-foreground">
            <div className="container mx-auto flex justify-center space-x-10">
                <a
                    href="https://github.com/lucasSSalgadoe"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-gray-400"
                >
                    GitHub
                </a>
                <a
                    href="https://www.linkedin.com/in/lucas-salgado-2a1448254/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-gray-400"
                >
                    LinkedIn
                </a>
                <a
                    href="https://medium.com/@lucssslucsss"
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