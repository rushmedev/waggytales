import Image from "next/image";

export type GridImageItem = {
  src: string;
  alt: string;
  width?: number;
  height?: number;
};

type ImageGridProps = {
  images: GridImageItem[];
  gridClassName?: string;
  itemClassName?: string;
  imageClassName?: string;
  width?: number;
  height?: number;
  sizes?: string;
  priorityCount?: number;
};

export default function ImageGrid({
  images,
  gridClassName = "wt-image-grid",
  itemClassName = "wt-image-grid-item",
  imageClassName = "wt-image-grid-image",
  width = 1200,
  height = 900,
  sizes = "(max-width: 719px) 100vw, (max-width: 1023px) 50vw, 33vw",
  priorityCount = 0,
}: ImageGridProps) {
  return (
    <div className={gridClassName}>
      {images.map((image, index) => {
        const imageWidth = image.width ?? width;
        const imageHeight = image.height ?? height;
        const orientation =
          imageWidth > imageHeight ? "landscape" : imageHeight > imageWidth ? "portrait" : "square";

        return (
          <figure
            key={`${image.src}-${index}`}
            className={itemClassName}
            data-orientation={orientation}
          >
            <Image
              src={image.src}
              alt={image.alt}
              width={imageWidth}
              height={imageHeight}
              sizes={sizes}
              className={imageClassName}
              priority={index < priorityCount}
            />
          </figure>
        );
      })}
    </div>
  );
}
