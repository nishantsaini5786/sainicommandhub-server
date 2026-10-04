[
  { name:'Nmap-NSE', slug:'nmap-nse', category:'Information Gathering', icon:'🔍', difficulty:'intermediate', shortDesc:'Nmap Scripting Engine', description:'Nmap NSE scripts for advanced scanning.', installation:'sudo apt install nmap', syntax:'nmap --script=<script> <target>', keywords:['nse'], commands:[
    {title:'Vuln Scan',command:'nmap --script vuln <target>',explanation:'Vuln scripts',example:'nmap --script vuln 192.168.1.1'},
    {title:'HTTP Enum',command:'nmap --script http-enum <target>',explanation:'HTTP enum',example:'nmap --script http-enum 192.168.1.1'},
    {title:'SMB Enum',command:'nmap --script smb-enum-shares <target>',explanation:'SMB shares',example:'nmap --script smb-enum-shares 192.168.1.1'}
  ]},
  { name:'Nmap-Ndiff', slug:'ndiff', category:'Information Gathering', icon:'🔍', difficulty:'beginner', shortDesc:'Compare Nmap scans', description:'Ndiff compares Nmap scan results.', installation:'sudo apt install ndiff', syntax:'ndiff <scan1.xml> <scan2.xml>', keywords:['compare'], commands:[
    {title:'Compare',command:'ndiff scan1.xml scan2.xml',explanation:'Compare',example:'ndiff scan1.xml scan2.xml'}
  ]},
  { name:'Nmap-Zenmap', slug:'zenmap', category:'Information Gathering', icon:'🔍', difficulty:'beginner', shortDesc:'Nmap GUI', description:'Zenmap is the official Nmap GUI.', installation:'sudo apt install zenmap', syntax:'zenmap', keywords:['nmap','gui'], commands:[
    {title:'Launch',command:'zenmap',explanation:'GUI',example:'zenmap'}
  ]},
  { name:'Amass-Intel', slug:'amass-intel', category:'Information Gathering', icon:'🌐', difficulty:'intermediate', shortDesc:'Amass intel gathering', description:'Amass intel mode.', installation:'sudo apt install amass', syntax:'amass intel -d <domain>', keywords:['intel'], commands:[
    {title:'Org Domains',command:'amass intel -org "Example Inc"',explanation:'Find org domains',example:'amass intel -org "Google"'},
    {title:'ASN',command:'amass intel -asn <asn>',explanation:'ASN lookup',example:'amass intel -asn 1234'}
  ]},
  { name:'Assetfinder', slug:'assetfinder', category:'Information Gathering', icon:'🌐', difficulty:'beginner', shortDesc:'Subdomain finder', description:'Assetfinder finds domains and subdomains.', installation:'go install github.com/tomnomnom/assetfinder@latest', syntax:'assetfinder <domain>', keywords:['subdomain'], commands:[
    {title:'Basic',command:'assetfinder <domain>',explanation:'Find subs',example:'assetfinder example.com'},
    {title:'Only Subs',command:'assetfinder --subs-only <domain>',explanation:'Subs only',example:'assetfinder --subs-only example.com'}
  ]},
  { name:'Findomain', slug:'findomain', category:'Information Gathering', icon:'🌐', difficulty:'beginner', shortDesc:'Fast subdomain finder', description:'Findomain is a fast subdomain enumerator.', installation:'sudo apt install findomain', syntax:'findomain -t <domain>', keywords:['subdomain'], commands:[
    {title:'Basic',command:'findomain -t <domain>',explanation:'Find subs',example:'findomain -t example.com'}
  ]},
  { name:'Gau', slug:'gau', category:'Information Gathering', icon:'🌐', difficulty:'beginner', shortDesc:'Get all URLs', description:'Gau fetches known URLs from various sources.', installation:'go install github.com/lc/gau/v2/cmd/gau@latest', syntax:'gau <domain>', keywords:['urls'], commands:[
    {title:'Basic',command:'gau <domain>',explanation:'Get URLs',example:'gau example.com'}
  ]},
  { name:'Waybackurls', slug:'waybackurls', category:'Information Gathering', icon:'🌐', difficulty:'beginner', shortDesc:'Wayback Machine URLs', description:'Waybackurls fetches URLs from Wayback Machine.', installation:'go install github.com/tomnomnom/waybackurls@latest', syntax:'waybackurls <domain>', keywords:['urls'], commands:[
    {title:'Basic',command:'waybackurls <domain>',explanation:'Get URLs',example:'waybackurls example.com'}
  ]},
  { name:'Massdns', slug:'massdns', category:'Information Gathering', icon:'🌐', difficulty:'advanced', shortDesc:'DNS resolver', description:'Massdns is a DNS resolver.', installation:'sudo apt install massdns', syntax:'massdns -r resolvers.txt -t A <domain>', keywords:['dns'], commands:[
    {title:'Basic',command:'massdns -r resolvers.txt -t A -o S <domain>',explanation:'Resolve',example:'massdns -r resolvers.txt -t A -o S example.com'}
  ]},
  { name:'Shuffledns', slug:'shuffledns', category:'Information Gathering', icon:'🌐', difficulty:'intermediate', shortDesc:'DNS bruteforce', description:'Shuffledns is a wrapper around massdns.', installation:'go install github.com/projectdiscovery/shuffledns/cmd/shuffledns@latest', syntax:'shuffledns -d <domain> -w wordlist.txt', keywords:['dns'], commands:[
    {title:'Bruteforce',command:'shuffledns -d <domain> -w wordlist.txt -r resolvers.txt',explanation:'Brute',example:'shuffledns -d example.com -w subdomains.txt -r resolvers.txt'}
  ]},
  { name:'Httprobe', slug:'httprobe', category:'Web Security', icon:'🌐', difficulty:'beginner', shortDesc:'Probe HTTP servers', description:'Httprobe probes live HTTP servers.', installation:'go install github.com/tomnomnom/httprobe@latest', syntax:'cat domains.txt | httprobe', keywords:['probe'], commands:[
    {title:'Pipe',command:'cat domains.txt | httprobe',explanation:'Probe',example:'cat domains.txt | httprobe'}
  ]},
  { name:'Gospider', slug:'gospider', category:'Web Security', icon:'🕷️', difficulty:'intermediate', shortDesc:'Fast web spider', description:'Gospider is a fast web spider.', installation:'go install github.com/jaeles-project/gospider@latest', syntax:'gospider -s <url>', keywords:['crawl'], commands:[
    {title:'Basic',command:'gospider -s <url>',explanation:'Crawl',example:'gospider -s http://example.com'}
  ]},
  { name:'Hakrawler', slug:'hakrawler', category:'Web Security', icon:'🕷️', difficulty:'beginner', shortDesc:'Simple web crawler', description:'Hakrawler is a simple web crawler.', installation:'go install github.com/hakluke/hakrawler@latest', syntax:'echo <url> | hakrawler', keywords:['crawl'], commands:[
    {title:'Basic',command:'echo <url> | hakrawler',explanation:'Crawl',example:'echo http://example.com | hakrawler'}
  ]},
  { name:'Subjack', slug:'subjack', category:'Web Security', icon:'🌐', difficulty:'intermediate', shortDesc:'Subdomain takeover', description:'Subjack checks for subdomain takeover.', installation:'go install github.com/haccer/subjack@latest', syntax:'subjack -w <subs.txt> -t 100', keywords:['takeover'], commands:[
    {title:'Check',command:'subjack -w subdomains.txt -t 100 -v',explanation:'Check',example:'subjack -w subdomains.txt -t 100'}
  ]},
  { name:'Nuclei-Templates', slug:'nuclei-templates', category:'Web Security', icon:'⚛️', difficulty:'intermediate', shortDesc:'Nuclei templates', description:'Nuclei template collection.', installation:'git clone https://github.com/projectdiscovery/nuclei-templates', syntax:'nuclei -u <url> -t <templates>', keywords:['templates'], commands:[
    {title:'Update',command:'nuclei -update-templates',explanation:'Update',example:'nuclei -update-templates'}
  ]},
  { name:'Interactsh', slug:'interactsh', category:'Web Security', icon:'📡', difficulty:'intermediate', shortDesc:'OOB interaction server', description:'Interactsh is a tool for OOB interactions.', installation:'go install github.com/projectdiscovery/interactsh/cmd/interactsh-client@latest', syntax:'interactsh-client', keywords:['oob'], commands:[
    {title:'Launch',command:'interactsh-client',explanation:'Start',example:'interactsh-client'}
  ]},
  { name:'Notify', slug:'notify', category:'Web Security', icon:'🔔', difficulty:'beginner', shortDesc:'Notification tool', description:'Notify sends notifications.', installation:'go install github.com/projectdiscovery/notify/cmd/notify@latest', syntax:'notify -provider-config config.yaml', keywords:['notify'], commands:[
    {title:'Send',command:'echo "test" | notify',explanation:'Send',example:'echo "test" | notify'}
  ]},
  { name:'Gowitness', slug:'gowitness', category:'Web Security', icon:'📸', difficulty:'beginner', shortDesc:'Screenshot tool', description:'Gowitness screenshots websites.', installation:'go install github.com/sensepost/gowitness@latest', syntax:'gowitness file -f urls.txt', keywords:['screenshot'], commands:[
    {title:'Screenshot',command:'gowitness file -f urls.txt',explanation:'Screenshot',example:'gowitness file -f urls.txt'}
  ]},
  { name:'Aquatone', slug:'aquatone', category:'Web Security', icon:'📸', difficulty:'intermediate', shortDesc:'Visual inspection', description:'Aquatone is a tool for visual inspection of websites.', installation:'go install github.com/michenriksen/aquatone@latest', syntax:'cat subs.txt | aquatone', keywords:['screenshot'], commands:[
    {title:'Basic',command:'cat subs.txt | aquatone',explanation:'Screenshot',example:'cat subs.txt | aquatone'}
  ]},
  { name:'EyeWitness', slug:'eyewitness', category:'Web Security', icon:'📸', difficulty:'intermediate', shortDesc:'Website screenshotting', description:'EyeWitness takes screenshots of websites.', installation:'sudo apt install eyewitness', syntax:'eyewitness -f urls.txt', keywords:['screenshot'], commands:[
    {title:'Basic',command:'eyewitness -f urls.txt',explanation:'Screenshot',example:'eyewitness -f urls.txt'}
  ]},
  { name:'Corsy', slug:'corsy', category:'Web Security', icon:'🌐', difficulty:'intermediate', shortDesc:'CORS misconfig scanner', description:'Corsy scans for CORS misconfigurations.', installation:'pip install corsy', syntax:'python corsy.py -u <url>', keywords:['cors'], commands:[
    {title:'Scan',command:'python corsy.py -u <url>',explanation:'Scan',example:'python corsy.py -u http://example.com'}
  ]},
  { name:'Smuggler', slug:'smuggler', category:'Web Security', icon:'🌐', difficulty:'advanced', shortDesc:'HTTP request smuggling', description:'Smuggler tests for HTTP request smuggling.', installation:'git clone https://github.com/defparam/smuggler', syntax:'python smuggler.py -u <url>', keywords:['smuggling'], commands:[
    {title:'Scan',command:'python smuggler.py -u <url>',explanation:'Scan',example:'python smuggler.py -u http://example.com'}
  ]},
  { name:'JWT-Tool', slug:'jwt-tool', category:'Web Security', icon:'🔐', difficulty:'intermediate', shortDesc:'JWT testing tool', description:'JWT-Tool tests JWT implementations.', installation:'git clone https://github.com/ticarpi/jwt_tool', syntax:'python jwt_tool.py <jwt>', keywords:['jwt'], commands:[
    {title:'Decode',command:'python jwt_tool.py <jwt>',explanation:'Decode',example:'python jwt_tool.py eyJhbGci...'},
    {title:'Crack',command:'python jwt_tool.py <jwt> -C -d wordlist.txt',explanation:'Crack',example:'python jwt_tool.py eyJhbGci... -C -d wordlist.txt'}
  ]},
  { name:'Tplmap', slug:'tplmap', category:'Web Security', icon:'🌐', difficulty:'advanced', shortDesc:'SSTI scanner', description:'Tplmap detects and exploits SSTI.', installation:'git clone https://github.com/epinna/tplmap', syntax:'python tplmap.py -u <url>', keywords:['ssti'], commands:[
    {title:'Scan',command:'python tplmap.py -u "<url>"',explanation:'Scan',example:'python tplmap.py -u "http://example.com/?name=test"'}
  ]},
  { name:'Commix', slug:'commix', category:'Web Security', icon:'💉', difficulty:'intermediate', shortDesc:'Command injection tool', description:'Commix automates command injection.', installation:'sudo apt install commix', syntax:'commix --url="<url>"', keywords:['cmdi'], commands:[
    {title:'Scan',command:'commix --url="<url>"',explanation:'Test',example:'commix --url="http://example.com/?id=1"'}
  ]},
  { name:'Gitleaks', slug:'gitleaks', category:'Web Security', icon:'🔐', difficulty:'intermediate', shortDesc:'Secret scanner', description:'Gitleaks finds secrets in git repos.', installation:'sudo apt install gitleaks', syntax:'gitleaks detect --source <dir>', keywords:['secrets'], commands:[
    {title:'Detect',command:'gitleaks detect --source .',explanation:'Scan repo',example:'gitleaks detect --source .'}
  ]},
  { name:'Trufflehog', slug:'trufflehog', category:'Web Security', icon:'🔐', difficulty:'intermediate', shortDesc:'Secret scanner', description:'Trufflehog scans for secrets.', installation:'sudo apt install trufflehog', syntax:'trufflehog git <url>', keywords:['secrets'], commands:[
    {title:'Git Scan',command:'trufflehog git <url>',explanation:'Scan repo',example:'trufflehog git https://github.com/user/repo'},
    {title:'Filesystem',command:'trufflehog filesystem <path>',explanation:'Scan FS',example:'trufflehog filesystem ./'}
  ]},
  { name:'SSRFmap', slug:'ssrfmap', category:'Web Security', icon:'🌐', difficulty:'advanced', shortDesc:'SSRF exploitation', description:'SSRFmap tests SSRF vulnerabilities.', installation:'git clone https://github.com/swisskyrepo/SSRFmap', syntax:'python ssrfmap.py -r <request> -p <param>', keywords:['ssrf'], commands:[
    {title:'Basic',command:'python ssrfmap.py -r request.txt -p url',explanation:'SSRF',example:'python ssrfmap.py -r request.txt -p url'}
  ]},
  { name:'Nmap-Vulners', slug:'nmap-vulners', category:'Vulnerability Analysis', icon:'🛡️', difficulty:'intermediate', shortDesc:'Vulners NSE script', description:'Nmap script for Vulners database.', installation:'git clone https://github.com/vulnersCom/nmap-vulners', syntax:'nmap --script vulners <target>', keywords:['vuln'], commands:[
    {title:'Scan',command:'nmap --script vulners <target>',explanation:'Vulners scan',example:'nmap --script vulners 192.168.1.1'}
  ]},
  { name:'Retire.js', slug:'retire', category:'Vulnerability Analysis', icon:'🛡️', difficulty:'beginner', shortDesc:'JS library scanner', description:'Retire.js finds vulnerable JS libraries.', installation:'npm install -g retire', syntax:'retire --path <dir>', keywords:['js'], commands:[
    {title:'Scan',command:'retire --path <dir>',explanation:'Scan',example:'retire --path ./public/'}
  ]},
  { name:'Safety', slug:'safety', category:'Vulnerability Analysis', icon:'🛡️', difficulty:'beginner', shortDesc:'Python dependency check', description:'Safety checks Python dependencies.', installation:'pip install safety', syntax:'safety check', keywords:['python'], commands:[
    {title:'Check',command:'safety check',explanation:'Check',example:'safety check'},
    {title:'Requirements',command:'safety check -r requirements.txt',explanation:'From file',example:'safety check -r requirements.txt'}
  ]},
  { name:'Sqlmap-Tamper', slug:'sqlmap-tamper', category:'Vulnerability Analysis', icon:'🛡️', difficulty:'advanced', shortDesc:'SQLmap tamper scripts', description:'SQLmap tamper scripts for WAF bypass.', installation:'sudo apt install sqlmap', syntax:'sqlmap -u <url> --tamper=<script>', keywords:['waf'], commands:[
    {title:'Space2Comment',command:'sqlmap -u "<url>" --tamper=space2comment',explanation:'Tamper',example:'sqlmap -u "http://example.com/?id=1" --tamper=space2comment'}
  ]},
  { name:'Wafw00f', slug:'wafw00f', category:'Vulnerability Analysis', icon:'🛡️', difficulty:'beginner', shortDesc:'WAF detection', description:'Wafw00f detects WAFs.', installation:'sudo apt install wafw00f', syntax:'wafw00f <url>', keywords:['waf'], commands:[
    {title:'Detect',command:'wafw00f <url>',explanation:'Detect WAF',example:'wafw00f http://example.com'}
  ]},
  { name:'Gobuster-DNS-Ext', slug:'gobuster-dns-ext', category:'Information Gathering', icon:'📂', difficulty:'beginner', shortDesc:'Gobuster DNS with extensions', description:'Gobuster DNS enumeration with custom patterns.', installation:'sudo apt install gobuster', syntax:'gobuster dns -d <domain> -w wordlist.txt', keywords:['dns'], commands:[
    {title:'Wildcard',command:'gobuster dns -d <domain> -w wordlist.txt --wildcard',explanation:'Wildcard',example:'gobuster dns -d example.com -w subs.txt --wildcard'}
  ]},
  { name:'Dirb', slug:'dirb', category:'Web Security', icon:'📁', difficulty:'beginner', shortDesc:'Directory brute forcer', description:'Dirb is a directory brute force tool.', installation:'sudo apt install dirb', syntax:'dirb <url>', keywords:['dirbust'], commands:[
    {title:'Basic',command:'dirb <url>',explanation:'Scan',example:'dirb http://example.com'},
    {title:'With Wordlist',command:'dirb <url> <wordlist>',explanation:'Custom wordlist',example:'dirb http://example.com /usr/share/wordlists/dirb/big.txt'}
  ]},
  { name:'Ncrack-Ext', slug:'ncrack-ext', category:'Password / Authentication', icon:'🔓', difficulty:'intermediate', shortDesc:'Extended auth cracker', description:'Ncrack extended usage.', installation:'sudo apt install ncrack', syntax:'ncrack [options]', keywords:['brute'], commands:[
    {title:'Multiple Services',command:'ncrack -U users.txt -P pass.txt ssh://<t1> rdp://<t2>',explanation:'Multi',example:'ncrack -U users.txt -P pass.txt ssh://192.168.1.1 rdp://192.168.1.2',dangerous:true}
  ]},
  { name:'Patator', slug:'patator', category:'Password / Authentication', icon:'🔨', difficulty:'intermediate', shortDesc:'Multi-purpose brute', description:'Patator is a multi-purpose brute forcer.', installation:'sudo apt install patator', syntax:'patator <module> <options>', keywords:['brute'], commands:[
    {title:'SSH',command:'patator ssh_login host=<host> user=<user> password=FILE0 0=pass.txt',explanation:'SSH brute',example:'patator ssh_login host=192.168.1.1 user=root password=FILE0 0=pass.txt',dangerous:true}
  ]},
  { name:'Sublist3r', slug:'sublist3r', category:'Information Gathering', icon:'🌐', difficulty:'beginner', shortDesc:'Subdomain enumeration', description:'Sublist3r enumerates subdomains.', installation:'sudo apt install sublist3r', syntax:'sublist3r -d <domain>', keywords:['subdomain'], commands:[
    {title:'Basic',command:'sublist3r -d <domain>',explanation:'Find subs',example:'sublist3r -d example.com'},
    {title:'With Brute',command:'sublist3r -d <domain> -b -w wordlist.txt',explanation:'Brute',example:'sublist3r -d example.com -b -w subdomains.txt'}
  ]},
  { name:'Knockpy', slug:'knockpy', category:'Information Gathering', icon:'🌐', difficulty:'intermediate', shortDesc:'Subdomain scanner', description:'Knockpy finds subdomains.', installation:'pip install knockpy', syntax:'knockpy <domain>', keywords:['subdomain'], commands:[
    {title:'Basic',command:'knockpy <domain>',explanation:'Find subs',example:'knockpy example.com'}
  ]},
  { name:'Chaos', slug:'chaos', category:'Information Gathering', icon:'🌐', difficulty:'beginner', shortDesc:'Subdomain scanner', description:'Chaos is a subdomain discovery tool.', installation:'go install github.com/projectdiscovery/chaos-client/cmd/chaos@latest', syntax:'chaos -d <domain>', keywords:['subdomain'], commands:[
    {title:'Basic',command:'chaos -d <domain>',explanation:'Find subs',example:'chaos -d example.com'}
  ]},
  { name:'Crobat', slug:'crobat', category:'Information Gathering', icon:'🌐', difficulty:'beginner', shortDesc:'Rapid subdomain discovery', description:'Crobat is a rapid subdomain discovery tool.', installation:'go install github.com/cgboal/sonarsearch/cmd/crobat@latest', syntax:'crobat -s <domain>', keywords:['subdomain'], commands:[
    {title:'Basic',command:'crobat -s <domain>',explanation:'Find subs',example:'crobat -s example.com'}
  ]}
]
