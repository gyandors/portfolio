import {
  GitHubIcon,
  TwitterIcon,
  LinkedInIcon,
  FacebookIcon,
} from "../../public/icons";

const links = [
  {
    icon: LinkedInIcon,
    href: "https://linkedin.com/in/gyandors",
  },
  {
    icon: FacebookIcon,
    href: "https://facebook.com/gyandors",
  },
  {
    icon: TwitterIcon,
    href: "https://twitter.com/gyandors",
  },
  {
    icon: GitHubIcon,
    href: "https://github.com/gyandors",
  },
];

export default function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-300">
      <div className="w-11/12 m-auto py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-sm">
            © {new Date().getFullYear()} Sachin Gyandor. All rights reserved.
          </div>
          <div className="flex space-x-4 mt-2 md:mt-0">
            {links.map((link) => (
              <a key={link.href} href={link.href} target="_blank">
                <link.icon className="w-6 h-6 hover:text-cyan-500 transition-colors" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
