# Personal Website

<p>A simple and elegant way of arranging your LaTeX CV data and your works to your personal webpage.
This code makes use of Moderncv documentclass by Xavier Danaux (https://github.com/xdanaux/moderncv) and webpage style-sheet by Jon Barron's code (https://github.com/jonbarron/jonbarron_website) and Aakash Patil (https://github.com/aakash30jan/LatexToWebpage).<br></p>


<h2><a id="user-content-directory-structure" class="anchor" aria-hidden="true" href="https://github.com/aakash30jan/LatexToWebpage#directory-structure"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>Directory Structure:</h2>
<div class="highlight highlight-source-shell"><pre><span class="pl-c1">.</span>
├── CV
│&nbsp;&nbsp; ├── AkshayAnand.jpg
├── backup
│&nbsp;&nbsp; ├── several version of index files
│&nbsp;&nbsp; │&nbsp;&nbsp; └── [ALL moderncv documnetclass files]
├── index.html
├── favicon
│&nbsp;&nbsp; ├── several favicon images
├── conferences
│&nbsp;&nbsp; ├── several conference papers
├── presentation
│&nbsp;&nbsp; ├── several presentation images
├── LICENSE
├── README.md
└── website
    ├── <span class="pl-k">&lt;</span>PUT ALL PROJECT IMAGES HERE<span class="pl-k">&gt;</span>
    └── js
        └── scramble.js</pre></div>

<h2><a id="user-content-requirements" class="anchor" aria-hidden="true" href="https://github.com/akshay23sept/akshay23sept.github.io#Prerequisite"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>Prerequisite:</h2>
<ol>
<li>Python 2.7 or above</li>
<li>Latex essentials: texstudio, texlive-latex-extra, overleaf, texlive-fonts-recommended</li>
</ol>

<h2><a id="user-content-requirements" class="anchor" aria-hidden="true" href="https://github.com/akshay23sept/akshay23sept.github.io#Downlaod"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>Download/Clone:</h2>
<ol>
<p><code>$ git clone https://github.com/akshay23sept/akshay23sept.github.io</code></p>
</ol>

<h2><a id="user-content-using-the-code" class="anchor" aria-hidden="true" href="https://github.com/akshay23sept/akshay23sept.github.io#exploiting-the-code"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>Exploiting the code:</h2>
<ol>
<li><code>Update</code> the <code>index.html</code> file with your relevant information.</li>
<li>Your updated webpage can be checked with <code>firefox index.html</code>.</li>
<li>You may now upload the webpage to your favourite hosting service.</li>
</ol>
<h2><a id="user-content-using-the-code" class="anchor" aria-hidden="true" href="https://github.com/akshay23sept/akshay23sept.github.io#issues"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>Issues:</h2>
<ol>
Feel free to raise an issue at https://github.com/akshay23sept/akshay23sept.github
</ol>

