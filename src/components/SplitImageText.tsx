import Image from "next/image";
import type { ReactNode } from "react";

export type SplitImageTextProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  highlights?: string[];
  image?: {
    src: string;
    alt: string;
  };
  media?: ReactNode;
  imagePosition?: "left" | "right";
  imagePriority?: boolean;
  /** Background image for the content (left) panel; shown at 50% opacity, object-cover. */
  contentBackgroundImage?: string;
};

export default function SplitImageText({
  eyebrow,
  title,
  description,
  highlights,
  image,
  media,
  imagePosition = "right",
  imagePriority = false,
  contentBackgroundImage,
}: SplitImageTextProps) {
  const isReversed = imagePosition === "left";

  const contentInner = (
    <>
      {eyebrow ? (
        <p className="text-sm font-semibold uppercase tracking-wide text-[var(--color-muted)]">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="text-3xl font-semibold text-[var(--foreground)] md:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="text-base text-[var(--foreground)] md:text-lg">
          {description}
        </p>
      ) : null}
      {highlights?.length ? (
        <ul className="flex flex-col gap-[var(--spacing-xs)] pl-[var(--spacing-md)] text-sm text-[var(--foreground)]">
          {highlights.map((item) => (
            <li key={item} className="list-disc">
              {item}
            </li>
          ))}
        </ul>
      ) : null}
    </>
  );

  return (
    <section className="bg-[var(--background)] py-[var(--spacing-xl)]">
      <div
        className={`mx-auto flex w-full max-w-[var(--content-max-width)] flex-col gap-[var(--spacing-lg)] px-[var(--spacing-md)] md:px-[var(--spacing-lg)] lg:flex-row lg:items-center ${
          isReversed ? "lg:flex-row-reverse" : ""
        } ${contentBackgroundImage ? "lg:items-stretch" : ""}`}
      >
        <div
          className={
            contentBackgroundImage
              ? "relative flex flex-1 flex-col gap-[var(--spacing-md)] overflow-hidden rounded-[var(--radius-lg)]"
              : "flex flex-1 flex-col gap-[var(--spacing-md)]"
          }
        >
          {contentBackgroundImage ? (
            <>
              <div
                className="absolute inset-0 z-0"
                style={{
                  backgroundImage: `url(${contentBackgroundImage.replace(/"/g, "%22")})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  opacity: 0.5,
                }}
              />
              <div className="relative z-10 flex flex-1 flex-col gap-[var(--spacing-md)] p-[var(--spacing-lg)]">
                {contentInner}
              </div>
            </>
          ) : (
            contentInner
          )}
        </div>
        {media ? (
          <div
            className={`flex min-w-0 flex-1 flex-col gap-[var(--spacing-md)] ${
              contentBackgroundImage ? "lg:min-h-0 lg:justify-start" : "justify-center"
            }`}
          >
            {media}
          </div>
        ) : image ? (
          <div className="relative aspect-video flex-1 overflow-hidden rounded-[var(--radius-lg)] border-[var(--border)] bg-[var(--background-elevated)] shadow-[var(--shadow-md)]">
            <Image
              src={image.src}
              alt={image.alt}
              fill
              priority={imagePriority}
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
        ) : null}
      </div>
    </section>
  );
}
