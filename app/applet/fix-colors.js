const fs = require('fs');
const path = require('path');
function walk(dir) {
    let results = [];
    const list = fs.readdirSync(dir);
    for (let file of list) {
        if (file.startsWith('node_modules') || file.startsWith('.git')) continue;
        file = path.join(dir, file);
        const stat = fs.statSync(file);
        if (stat && stat.isDirectory()) { 
            results = results.concat(walk(file));
        } else if (file.endsWith('.tsx') || file.endsWith('.ts')) { 
            results.push(file);
        }
    }
    return results;
}
const files = walk('./src');
files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  let original = content;
  
  // Use Light Orange for the orange backgrounds
  content = content.replace(/bg-\[#ff6a00\]\/10/g, 'bg-[#ffd4b3]');
  
  // Use Secondary Blue for specific icons
  content = content.replace(/<Globe className="h-6 w-6 text-\[#1a2f8a\]"/g, '<Globe className="h-6 w-6 text-[#2e5bff]"');
  content = content.replace(/<Truck className="h-6 w-6 text-\[#1a2f8a\]"/g, '<Truck className="h-6 w-6 text-[#2e5bff]"');
  content = content.replace(/<Briefcase className="h-6 w-6 text-\[#1a2f8a\]"/g, '<Briefcase className="h-6 w-6 text-[#2e5bff]"');
  content = content.replace(/<Mail className="h-6 w-6 text-\[#1a2f8a\]"/g, '<Mail className="h-6 w-6 text-[#2e5bff]"');
  content = content.replace(/<Target className="h-6 w-6 text-\[#1a2f8a\]"/g, '<Target className="h-6 w-6 text-[#2e5bff]"');
  
  // Update their backgrounds
  content = content.replace(/bg-\[#1a2f8a\]\/10/g, 'bg-[#2e5bff]/10');

  if (content !== original) {
    fs.writeFileSync(file, content);
  }
});
