import Image from "next/image";
import { useEffect, useState } from "react";
import fallback from "/public/images/no-post-image.png"

export default function Fallback({ src, fallbackSrc= fallback.src, ...rest }) {
  const [imgSrc, set_imgSrc] = useState(src);

  useEffect(() => {
    set_imgSrc(src);
  }, [src]);

  return (
    <Image
      {...rest}
      src={imgSrc}
      width={370}
      height={320}
      alt="noimage"
      onLoadingComplete={(result) => {
        if (result.naturalWidth === 0) {
          // Broken image
          set_imgSrc(fallbackSrc);
        }
      }}
      onError={() => {
        set_imgSrc(fallbackSrc);
      }}
    />
  );
}