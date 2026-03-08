import os
import sys

def install_and_import(package):
    import importlib
    try:
        importlib.import_module(package)
    except ImportError:
        import subprocess
        subprocess.check_call([sys.executable, "-m", "pip", "install", package])
    finally:
        globals()[package] = importlib.import_module(package)

try:
    from PIL import Image, ImageEnhance, ImageFilter
except ImportError:
    import subprocess
    subprocess.check_call([sys.executable, "-m", "pip", "install", "Pillow"])
    from PIL import Image, ImageEnhance, ImageFilter

input_dir = "/Users/nikitasomani/Downloads/Indian-spiritual-website/public/images/gallery"
output_dir = "/Users/nikitasomani/Downloads/Indian-spiritual-website/public/images/gallery_optimized"

if not os.path.exists(output_dir):
    os.makedirs(output_dir)

# Settings
MAX_SIZE = (1920, 1920)

print(f"Processing images from {input_dir} to {output_dir}")

for filename in os.listdir(input_dir):
    if filename.lower().endswith(('.png', '.jpg', '.jpeg', '.webp')):
        filepath = os.path.join(input_dir, filename)
        try:
            with Image.open(filepath) as img:
                print(f"Processing {filename}...")
                
                # Convert to RGB if necessary (e.g., if PNG has alpha channel)
                if img.mode != 'RGB':
                    img = img.convert('RGB')
                
                # Resize keeping aspect ratio
                # In newer Pillow versions, ANTIALIAS is removed, use LANCZOS
                resampling_filter = getattr(Image, 'Resampling', Image).LANCZOS
                img.thumbnail(MAX_SIZE, resampling_filter)
                
                # Enhance Color (Saturation)
                enhancer = ImageEnhance.Color(img)
                img = enhancer.enhance(1.15) # 15% more saturation
                
                # Enhance Contrast
                enhancer = ImageEnhance.Contrast(img)
                img = enhancer.enhance(1.05) # 5% more contrast
                
                # Sharpen
                img = img.filter(ImageFilter.SHARPEN)
                
                # Final clean filename
                base_name = os.path.splitext(filename)[0]
                # remove spaces and parenthesis
                clean_name = base_name.replace(' ', '_').replace('(', '').replace(')', '').replace('__', '_')
                output_filename = f"opt_{clean_name}.webp"
                output_path = os.path.join(output_dir, output_filename)
                
                img.save(output_path, 'WEBP', quality=85)
                print(f"Saved optimized image to {output_filename}")
        except Exception as e:
            print(f"Failed to process {filename}: {e}")

print("Done processing images.")
