"use client";

import Image from "next/image";
import type { MediaItem } from "@/types";
import { cn } from "@/lib/utils";

interface MediaRendererProps {
  media: MediaItem;
  fill?: boolean;
  className?: string;
  priority?: boolean;
  sizes?: string;
}

export function MediaRenderer({
  media,
  fill = false,
  className,
  priority = false,
  sizes = "(max-width: 768px) 100vw, 50vw",
}: MediaRendererProps) {
  if (media.type === "video") {
    return (
      <video
        src={media.src}
        poster={media.poster}
        autoPlay
        muted
        loop
        playsInline
        className={cn("object-cover w-full h-full", className)}
      />
    );
  }

  // Both "image" and "gif" use next/image (gifs are just animated images)
  if (fill) {
    return (
      <Image
        src={media.src}
        alt={media.alt ?? ""}
        fill
        priority={priority}
        sizes="100vw"
        className={cn("object-cover", className)}
        unoptimized={media.type === "gif"} // Don't optimize GIFs (would break animation)
      />
    );
  }

  return (
    <Image
      src={media.src}
      alt={media.alt ?? ""}
      width={800}
      height={1000}
      priority={priority}
      sizes={sizes}
      className={cn("object-cover w-full h-full", className)}
      unoptimized={media.type === "gif"}
    />
  );
}
