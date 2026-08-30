import urllib.request
import re
import os

os.makedirs('public/projects', exist_ok=True)

# 1. Aurora Grand Hotel
# Let's inspect the hero image and details
aurora_hero = "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1920&q=80" # Luxury hotel pool / facade
urllib.request.urlretrieve(aurora_hero, "public/projects/aurora-hero.jpg")

# 2. Artistry by Marium
# Download actual hero image / showcase from the site
try:
    urllib.request.urlretrieve("https://artistrybymarium.netlify.app/assets/hero-artwork-BYbVTIL4.jpg", "public/projects/marium-hero.jpg")
except:
    urllib.request.urlretrieve("https://artistrybymarium.netlify.app/assets/showcase-canvas-DdLlT6PI.jpg", "public/projects/marium-hero.jpg")

# 3. Kashmir Escape
# Download hero image from kashmir site
urllib.request.urlretrieve("https://images.unsplash.com/photo-1598091383021-15ddea10925d?auto=format&fit=crop&w=1600&q=85", "public/projects/kashmir-hero.jpg")

# 4. Hussain Foods
# Download hussain foods logo and hero
try:
    urllib.request.urlretrieve("https://hussain-foods-project.netlify.app/images/hf_logo.jpg", "public/projects/hf_logo.jpg")
except:
    pass
urllib.request.urlretrieve("https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1920&q=80", "public/projects/hussain-hero.jpg")

# 5. Ibad Ali Qawwal
try:
    urllib.request.urlretrieve("https://ibad-qawwal.netlify.app/src/assets/images/v1.jpg", "public/projects/ibad-v1.jpg")
except:
    pass

# 6. SSJ Skin Project
urllib.request.urlretrieve("https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=1200&q=85", "public/projects/ssj-hero.jpg")

print("Finished basic downloads.")
