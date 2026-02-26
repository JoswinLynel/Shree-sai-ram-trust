#!/bin/bash
# Check top-left pixel
for img in public/images/gallery_ramnavami.jpg public/images/gallery_gurupurnima.jpg public/images/gallery_bhajan.jpg; do
  convert "$img" -crop 1x1+0+0 txt:
done
