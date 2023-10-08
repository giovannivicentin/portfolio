function Footer() {
  return (
    <footer className="w-full px-4 pt-2 md:px-6 lg:px-10 flex justify-center items-center border-t border-muted-foreground/40 mt-5">
      <div className="max-w-5xl w-full flex flex-col md:flex-row justify-between items-center text-sm md:text-md">
        <p>© 2023 Giovanni Vicentin</p>
        <div className="flex gap-10">
          <a
            href="https://www.linkedin.com/in/giovannivicentin/"
            className="text-muted-foreground hover:text-primary"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/giovannivicentin"
            className="text-muted-foreground hover:text-primary"
          >
            GitHub
          </a>
          <a
            href="mailto:giovannifvicentin@gmail.com"
            className="text-muted-foreground hover:text-primary"
          >
            E-mail
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
