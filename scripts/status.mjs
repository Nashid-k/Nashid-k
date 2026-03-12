import fs from 'fs';

// Safely update the status badge in README without shell escaping issues
const README_PATH = './README.md';
const MSG = process.argv[2] || 'Building...';

try {
    let readme = fs.readFileSync(README_PATH, 'utf-8');
    const escapedMsg = encodeURIComponent(MSG).replace(/%20/g, '%20');
    const badge = `![](https://img.shields.io/badge/Building-${escapedMsg}-00ff41?style=flat-square&logo=github)`;

    // Replace content between markers
    const regex = /<!-- STATUS:START -->[\s\S]*<!-- STATUS:END -->/;
    if (regex.test(readme)) {
        readme = readme.replace(regex, `<!-- STATUS:START -->${badge}<!-- STATUS:END -->`);
        fs.writeFileSync(README_PATH, readme);
        console.log(`Updated status to: ${MSG}`);
    } else {
        console.error('Status markers not found in README.md');
    }
} catch (err) {
    console.error('Error updating status:', err);
    process.exit(1);
}
