import clsx from "clsx";
import Image from "next/image";
type ImageProps = {
  alt: string;
  publicId: string;
  align?: "left" | "right" | "none";
  width: number;
  height: number;
};

export const Figure = ({
  alt,
  publicId,
  align = "none",
  width,
  height,
}: ImageProps) => {
  const alignClsx = {
    left: "float-left max-w-sm mr-3 clear-left",
    right: "float-right clear-right max-w-sm ml-3",
    none: "max-w-max",
  };
  return (
    <figure
      className={clsx(
        "m-1 not-prose mx-auto ring-1 dark:ring-zinc-700/50 ring-zinc-400/50",
        alignClsx[align]
      )}
    >
      <Image
        width={width}
        height={height}
        alt={alt}
        src={`https://res.cloudinary.com/scipnet/image/upload/q_auto,f_auto/${publicId}`}
      />
      <figcaption className="font-medium text-center bg-zinc-100/25 dark:bg-zinc-800/25">
        {alt}
      </figcaption>
    </figure>
  );
};
