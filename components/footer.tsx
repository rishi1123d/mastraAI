import { Github } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-white py-8 border-t border-gray-100">
      <div className="container mx-auto px-4 max-w-4xl flex flex-col sm:flex-row justify-between items-center">
        <p className="text-gray-500 mb-4 sm:mb-0 flex items-center">
          <span className="bg-gradient-to-r from-indigo-500 to-purple-600 bg-clip-text text-transparent font-semibold mr-1">
            Built with
          </span>
          Mastra AI
        </p>
        <div className="flex space-x-4">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-gray-700 transition-colors p-2 rounded-full hover:bg-gray-100"
            aria-label="GitHub repository"
          >
            <Github className="h-5 w-5" />
          </a>
        </div>
      </div>
    </footer>
  )
}
