import Link from 'next/link'

function Footer() {
  return (
    <div className="w-full mb-6 px-4 pt-2 md:px-6 lg:px-10 flex justify-center items-center border-t border-muted-foreground/40 mt-5">
      <div className="w-full flex flex-col md:flex-row justify-between items-center text-sm md:text-md">
        <p className="text-muted-foreground font-mono">
          © 2023 Giovanni Vicentin
        </p>
        <div className="flex gap-10">
          <Link
            className="text-muted-foreground hover:text-violet-700 dark:hover:text-violet-400"
            href="https://www.linkedin.com/in/giovannivicentin/"
            target="_blank"
            rel="noopener noreferrer"
            about="Giovanni Vicentin LinkedIn Profile"
          >
            LinkedIn
          </Link>
          <Link
            className="text-muted-foreground hover:text-violet-700 dark:hover:text-violet-400"
            href="https://github.com/giovannivicentin"
            target="_blank"
            rel="noopener noreferrer"
            about="Giovanni Vicentin GitHub Profile"
          >
            GitHub
          </Link>
          <Link
            className="text-muted-foreground hover:text-violet-700 dark:hover:text-violet-400"
            href="mailto:giovannifvicentin@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            about="Giovanni Vicentin E-mail"
          >
            E-mail
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Footer
