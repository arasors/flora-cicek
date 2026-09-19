from __future__ import annotations

import re
from pathlib import Path

from PIL import Image, ImageDraw, ImageOps


PROJECT_ROOT = Path(__file__).resolve().parents[1]
IMAGE_ROOT = (
    PROJECT_ROOT
    / "public"
    / "sites"
    / "flora-cicek"
    / "root-8a5edab2"
    / "images"
)
OUTPUT_ROOT = IMAGE_ROOT / "branded"
LOGO_PATH = IMAGE_ROOT / "flora-logo.png"
SOURCE_FILES = [
    PROJECT_ROOT
    / "src"
    / "components"
    / "sites"
    / "flora-cicek"
    / "root-8a5edab2"
    / "data.ts",
    PROJECT_ROOT
    / "src"
    / "components"
    / "sites"
    / "flora-cicek"
    / "root-8a5edab2"
    / "HeroSection.tsx",
    PROJECT_ROOT
    / "src"
    / "components"
    / "sites"
    / "flora-cicek"
    / "root-8a5edab2"
    / "innerPageData.ts",
]
IMAGE_PATTERN = re.compile(r'["\']([^"\']+\.(?:jpe?g|png))["\']', re.IGNORECASE)


def collect_sources() -> list[Path]:
    relative_paths: set[Path] = {Path("hero.png")}

    for source_file in SOURCE_FILES:
        for match in IMAGE_PATTERN.findall(source_file.read_text(encoding="utf-8")):
            candidate = Path(match)
            if candidate.parts[0] in {"catalog", "projeler"}:
                relative_paths.add(candidate)
            elif (IMAGE_ROOT / "catalog" / candidate.name).exists():
                relative_paths.add(Path("catalog") / candidate.name)

    for index in range(1, 13):
        relative_paths.add(Path("projeler") / f"proje-{index:03}.jpg")

    sources = [IMAGE_ROOT / path for path in sorted(relative_paths)]
    missing = [path for path in sources if not path.exists()]
    if missing:
        missing_list = "\n".join(str(path) for path in missing)
        raise FileNotFoundError(f"Eksik görsel dosyaları:\n{missing_list}")

    return sources


def top_right_rounded_mask(width: int, height: int) -> Image.Image:
    radius = max(4, round(height * 0.16))
    mask = Image.new("L", (width, height), 0)
    draw = ImageDraw.Draw(mask)
    draw.rounded_rectangle((0, 0, width, height), radius=radius, fill=255)
    draw.rectangle((0, 0, radius, height), fill=255)
    draw.rectangle((0, height - radius, width, height), fill=255)
    return mask


def make_stamp(logo: Image.Image, width: int, height: int) -> Image.Image:
    stamp = Image.new("RGBA", (width, height), (33, 24, 13, 255))
    stamp.putalpha(top_right_rounded_mask(width, height))

    logo_copy = logo.copy()
    logo_copy.thumbnail((round(width * 0.78), round(height * 0.86)), Image.Resampling.LANCZOS)
    x = (width - logo_copy.width) // 2
    y = (height - logo_copy.height) // 2
    stamp.alpha_composite(logo_copy, (x, y))
    return stamp


def brand_image(source: Path, logo: Image.Image) -> Path:
    relative_path = source.relative_to(IMAGE_ROOT)
    destination = OUTPUT_ROOT / relative_path
    destination.parent.mkdir(parents=True, exist_ok=True)

    with Image.open(source) as opened_image:
        image = ImageOps.exif_transpose(opened_image).convert("RGBA")

    stamp_width = max(96, round(image.width * 0.32))
    stamp_height = max(48, round(image.height * 0.20))
    stamp_width = min(stamp_width, image.width)
    stamp_height = min(stamp_height, image.height)
    stamp = make_stamp(logo, stamp_width, stamp_height)
    image.alpha_composite(stamp, (0, image.height - stamp_height))

    if destination.suffix.lower() in {".jpg", ".jpeg"}:
        image.convert("RGB").save(
            destination,
            quality=91,
            optimize=True,
            progressive=True,
        )
    else:
        image.save(destination, optimize=True)

    return destination


def main() -> None:
    with Image.open(LOGO_PATH) as opened_logo:
        logo = opened_logo.convert("RGBA")
        bounding_box = logo.getbbox()
        if bounding_box:
            logo = logo.crop(bounding_box)

    sources = collect_sources()
    outputs = [brand_image(source, logo) for source in sources]
    total_bytes = sum(path.stat().st_size for path in outputs)
    print(f"{len(outputs)} markalı görsel üretildi ({total_bytes / 1024 / 1024:.1f} MB).")
    print(OUTPUT_ROOT)


if __name__ == "__main__":
    main()
