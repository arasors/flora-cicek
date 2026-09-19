import Image from "next/image";

import { ASSET_ROOT } from "./data";

export function FloraStamp() {
  return (
    <span
      aria-hidden="true"
      className="absolute bottom-0 left-0 z-10 flex h-[20%] w-[32%] items-center justify-center overflow-hidden rounded-tr-lg bg-[#21180d] p-1"
    >
      <Image
        src={`${ASSET_ROOT}/flora-logo.png`}
        alt=""
        width={1333}
        height={1180}
        className="h-full w-full scale-[1.3] object-contain"
      />
    </span>
  );
}
