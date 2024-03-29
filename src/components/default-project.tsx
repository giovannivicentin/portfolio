import Image from 'next/image';
import { RxExternalLink, RxGithubLogo } from 'react-icons/rx';
import Link from 'next/link';

interface Props {
  photo: string;
  photoAlt: string;
  explanation: string;
  hrefGithub: string;
  hrefLive: string;
  reverse?: boolean;
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
      className={`flex flex-col sm:flex-row gap-x-6 xl:gap-x-12 items-center sm:items-stretch ${
        reverse ? 'flex-col sm:flex-row-reverse' : 'flex-col sm:flex-row'
      }`}
    >
      <div className="w-full sm:w-1/2">
        <Link href={hrefLive} target="_blank" rel="noopener noreferrer">
          <Image
            src={photo}
            alt={photoAlt}
            layout="responsive"
            width={500}
            height={500}
            className="border-collapse border-2 rounded-md border-primary/50 hover:dark:border-violet-400 hover:border-violet-700 transition-colors"
          />
        </Link>
      </div>
      <div className="w-full sm:w-1/2 flex flex-col justify-between">
        <p className="text-muted-foreground pt-3 sm:pt-0 overflow-auto break-words text-sm text-justify leading-relaxed">
          {explanation}
        </p>
        <div className="flex mt-4 justify-center sm:pb-0">
          <Link href={hrefGithub} target="_blank" rel="noopener noreferrer">
            <RxGithubLogo className="w-6 h-6 ml-4 transition-transform transform hover:scale-110 hover:dark:text-violet-400 hover:text-violet-700 text-muted-foreground" />
          </Link>
          <Link href={hrefLive} target="_blank" rel="noopener noreferrer">
            <RxExternalLink className="w-6 h-6 ml-4 transition-transform transform hover:scale-110 hover:dark:text-violet-400 hover:text-violet-700 text-muted-foreground" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DefaultProject;
