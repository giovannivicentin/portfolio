import Image from 'next/image'
import { RxExternalLink, RxGithubLogo } from 'react-icons/rx'
import Link from 'next/link'

interface Props {
  photo: string
  photoAlt: string
  explanation: string
  hrefGithub: string
  hrefLive: string
  reverse?: boolean
}

const DefaultProject: React.FC<Props> = ({
  photo,
  photoAlt,
  explanation,
  reverse,
  hrefGithub,
  hrefLive,
}) => {
  return (
    <div
      className={`flex flex-col md:flex-row gap-x-6 xl:gap-x-12 items-center md:items-stretch ${
        reverse ? 'flex-col md:flex-row-reverse' : 'flex-col md:flex-row'
      }`}
    >
      <div className="w-full md:w-1/2">
        <Link
          href={hrefLive}
          target="_blank"
          rel="noopener noreferrer"
          about="Link to the project"
        >
          <Image
            src={photo}
            alt={photoAlt}
            width={1920}
            height={1080}
            priority
            className="border-collapse border-2 rounded-md border-primary/50 hover:dark:border-violet-400 hover:border-violet-700 transition-colors"
            sizes="100vw"
            style={{
              width: '100%',
              height: 'auto',
            }}
          />
        </Link>
      </div>
      <div className="w-full md:w-1/2 flex flex-col justify-between">
        <p className="text-muted-foreground pt-3 md:pt-0 overflow-auto break-words text-sm text-justify leading-relaxed">
          {explanation}
        </p>
        <div className="flex mt-4 justify-center gap-4 md:pb-0">
          <Link
            href={hrefGithub}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Link to GitHub of project"
          >
            <RxGithubLogo className="w-6 h-6 transition-transform transform hover:scale-110 hover:dark:text-violet-400 hover:text-violet-700 text-muted-foreground" />
          </Link>
          <Link
            href={hrefLive}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Production link of project"
          >
            <RxExternalLink className="w-6 h-6 transition-transform transform hover:scale-110 hover:dark:text-violet-400 hover:text-violet-700 text-muted-foreground" />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default DefaultProject
