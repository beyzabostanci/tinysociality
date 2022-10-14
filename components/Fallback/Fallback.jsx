import Image from "next/image";
import { useEffect, useState } from "react";
//import no-post-image from "/public/images/no-post-image.png"

{/*const fallback = require("/public/images/no-post-image.png")

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
}*/}


export default function Fallback  ({ src, ...rest }) {
  const [imgSrc, setImgSrc] = useState(src)

  useEffect(() => {
    setImgSrc(src)
  }, [src])

  return (
    <Image
    alt=""
    width={370}
    height={320}
      {...rest}
      src={imgSrc ? imgSrc : '/images/no-post-image.png'}
      onError={() => {
        setImgSrc('/images/no-post-image.png')
      }}
    />
  )
}