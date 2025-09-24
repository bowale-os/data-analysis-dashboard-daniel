
function Footer() {
    return (
        <footer className="mt-10 fixed-bottom rounded-lg overflow-hidden border bg-gradient-to-br from-gray-50 to-gray-100 border-gray-200 px-20 py-6">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="text-sm text-gray-600 flex items-center gap-2">
                <span>
                     &copy; {new Date().getFullYear()} <span className="font-semibold">Daniel Sobowale</span>
                </span>
                <span className="mx-2">|</span>
                <span>Built with React</span>
                </div>
                <div className="flex gap-4 items-center">
                <a href="https://github.com/bowale-os" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-700 text-xs font-medium underline">
                    GitHub
                </a>
                </div>
            </div>
        </footer>

    )
}


export default Footer;