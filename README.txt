HOW TO UPDATE THIS WEBSITE
==========================

This version is intentionally simple to maintain.

The file you will edit most of the time is:
- data.js

Inside data.js you can update:
- hero summary
- affiliations
- focus areas
- timeline items
- publications
- contact links

HOW TO ADD A NEW PUBLICATION
----------------------------
Duplicate one object inside the publications array and replace:
- type
- title
- authors
- venue
- year
- abstract
- links

HOW TO PUBLISH ON GITHUB PAGES
------------------------------
1. Create a new GitHub repository or reuse your existing personal website repository.
2. Upload all files from this folder.
3. In repository Settings > Pages, choose the branch to publish.
4. Save. GitHub Pages will publish the site.

SUGGESTED NEXT IMPROVEMENTS
---------------------------
- Add Google Scholar, ORCID, SSRN, RePEc links
- Add working papers section
- Add downloadable CV PDF
- Add conference presentations
- Add teaching / supervision / awards if relevant

OPTIONAL STRUCTURAL UPGRADE LATER
---------------------------------
If you later want citations, automatic publication management from BibTeX, and multi-page academic publishing workflows, the next step would be migrating this structure to Quarto.
