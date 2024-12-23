import {
  GitHubIcon,
  TwitterIcon,
  LinkedInIcon,
  FacebookIcon,
} from "../../public/icons";

export default function Footer() {
  return (
    <footer className="bg-gray-950 text-white">
      <div className="w-11/12 m-auto py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-sm">
            © {new Date().getFullYear()} Sachin Gyandor. All rights reserved.
          </div>
          <div className="flex space-x-4 mt-2 md:mt-0">
            <a
              href="https://linkedin.com/in/gyandors"
              className="hover:text-cyan-500 transition-colors"
              target="_blank"
            >
              <LinkedInIcon className="w-6 h-6" />
            </a>
            <a
              href="https://facebook.com/gyandors"
              className="hover:text-cyan-500 transition-colors"
              target="_blank"
            >
              <FacebookIcon className="w-6 h-6" />
            </a>
            <a
              href="https://twitter.com/gyandors"
              className="hover:text-cyan-500 transition-colors"
              target="_blank"
            >
              <TwitterIcon className="w-6 h-6" />
            </a>
            <a
              href="https://github.com/gyandors"
              className="hover:text-cyan-500 transition-colors"
              target="_blank"
            >
              <GitHubIcon className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
