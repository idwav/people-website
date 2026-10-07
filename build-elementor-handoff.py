from pathlib import Path
from shutil import copy2, copytree, rmtree
from zipfile import ZIP_DEFLATED, ZipFile

ROOT = Path(__file__).resolve().parent
HANDOFF = ROOT / "elementor-handoff"
SNAPSHOT = HANDOFF / "site-snapshot"
OUTPUT = ROOT.parent / "PEOPLE-ELEMENTOR-HANDOFF.zip"

if SNAPSHOT.exists():
    rmtree(SNAPSHOT)
SNAPSHOT.mkdir(parents=True)

for name in ["index.html", "calendar.html", "calendar.css", "shared-footer.css", "DESIGN-SYSTEM.md", "PRODUCT.md"]:
    source = ROOT / name
    if source.exists():
        copy2(source, SNAPSHOT / name)

for name in ["arms", "media"]:
    source = ROOT / name
    if source.exists():
        copytree(source, SNAPSHOT / name)

if OUTPUT.exists():
    OUTPUT.unlink()
with ZipFile(OUTPUT, "w", ZIP_DEFLATED) as archive:
    for path in HANDOFF.rglob("*"):
        if path.is_file():
            archive.write(path, Path("PEOPLE-ELEMENTOR-HANDOFF") / path.relative_to(HANDOFF))

print(OUTPUT)
