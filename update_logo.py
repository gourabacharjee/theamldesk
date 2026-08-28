import os
import glob
import re

html_files = glob.glob('d:/AML/*.html')

for filepath in html_files:
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Replace navbar logo
    content = re.sub(
        r'<div class="navbar__logo-icon" aria-hidden="true">A</div>\s*<div class="navbar__logo-text">The AML <span>Desk</span></div>',
        r'<img src="images/logo.png" alt="The AML Desk Logo" class="navbar__logo-image">',
        content,
        flags=re.IGNORECASE
    )
    
    # Replace footer logo
    content = re.sub(
        r'<div class="logo-icon" aria-hidden="true">A</div>\s*<div class="logo-text">The AML <span>Desk</span></div>',
        r'<img src="images/logo.png" alt="The AML Desk Logo" class="footer__logo-image">',
        content,
        flags=re.IGNORECASE
    )
    
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)

print("Updated HTML files.")
