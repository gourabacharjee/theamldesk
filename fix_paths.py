import glob
import shutil

shutil.copy('d:/AML/css/styles.css', 'd:/AML/styles.css')
shutil.copy('d:/AML/js/main.js', 'd:/AML/main.js')
shutil.copy('d:/AML/js/quiz.js', 'd:/AML/quiz.js')
shutil.copy('d:/AML/js/glossary.js', 'd:/AML/glossary.js')

html_files = glob.glob('d:/AML/*.html')

for filepath in html_files:
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    content = content.replace('href="css/styles.css"', 'href="styles.css"')
    content = content.replace('src="js/main.js"', 'src="main.js"')
    content = content.replace('src="js/quiz.js"', 'src="quiz.js"')
    content = content.replace('src="js/glossary.js"', 'src="glossary.js"')
    content = content.replace('src="images/logo.png"', 'src="logo.png"')
    
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)

print('Updated all HTML files successfully.')
