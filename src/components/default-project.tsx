import Image from 'next/image';

interface Props {
  photo: string;
  photoAlt: string;
  explanation: string;
  reverse?: boolean;
}

const DefaultProject: React.FC<Props> = ({
  photo,
  photoAlt,
  explanation,
  reverse,
}) => {
  return (
    <div
      className={`flex gap-x-6 xl:gap-x-12 ${
        reverse ? 'flex-row-reverse' : 'flex-row'
      }`}
    >
      <div className="w-1/2">
        <Image
          src={photo}
          alt={photoAlt}
          layout="responsive"
          width={500}
          height={500}
          className="border-collapse border-2 rounded-md border-primary/50"
        />
      </div>
      <p className="p-1 w-1/2">{explanation}</p>
    </div>
  );
};

export default DefaultProject;
