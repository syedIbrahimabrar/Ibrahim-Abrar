import urllib.request
import re
import os
import json

os.makedirs('public/projects', exist_ok=True)

sites = {
    'aurora-grand-hotel': {
        'url': 'https://demoo-hotel.netlify.app',
        'script': '/assets/index-COsIbRey.js'
    },
    'artistry-by-marium': {
        'url': 'https://artistrybymarium.netlify.app',
        'script': '/assets/index-Dw_i6Rcn.js'
    },
    'kashmir-escape': {
        'url': 'https://kashmir-website.netlify.app',
        'script': '/assets/index-C-jPB-MT.js'
    },
    'hussain-foods': {
        'url': 'https://hussain-foods-project.netlify.app',
        'script': '/assets/index-C65dY0Yy.js'
    },
    'ibad-qawwal': {
        'url': 'https://ibad-qawwal.netlify.app',
        'script': '/assets/index-Dk_OuZVs.js'
    },
    'ssj-skin': {
        'url': 'https://ssj-skin-project.netlify.app',
        'script': '/assets/index-B3mz1Bix.js'
    }
}

for name, info in sites.items():
    print(f"================== {name} ==================")
    try:
        url = info['url']
        req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
        html = urllib.request.urlopen(req).read().decode('utf-8')
        
        # Check title
        title = re.search(r'<title>(.*?)</title>', html, re.I)
        print("HTML Title:", title.group(1) if title else "None")
        
        # Fetch JS
        js_url = url + info['script']
        js_code = urllib.request.urlopen(urllib.request.Request(js_url, headers={'User-Agent': 'Mozilla/5.0'})).read().decode('utf-8', errors='ignore')
        
        # Look for hero texts, taglines, features
        # find quotes with length 10 to 100
        matches = re.findall(r'["\']([^"\']{12,80})["\']', js_code)
        interesting = [m for m in matches if any(w in m.lower() for w in ['luxury', 'hotel', 'art', 'kashmir', 'food', 'qawwal', 'skin', 'welcome', 'experience', 'authentic', 'craft', 'taste', 'journey', 'aesthetic', 'karachi', 'kyiv', 'heritage', 'music', 'doctor', 'clinic', 'dermatology'])]
        print("Key texts:", interesting[:12])
        
        # Find images
        img_matches = list(set(re.findall(r'["\']([^"\']+\.(?:jpg|png|webp|svg|jpeg))["\']', js_code) + re.findall(r'https://images\.unsplash\.com/[^"\'\s]+', js_code)))
        print("Images count:", len(img_matches))
        print("Sample images:", img_matches[:6])
    except Exception as e:
        print("Error:", e)
