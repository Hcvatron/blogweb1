import React, { createContext, useState, useContext, useEffect } from 'react';

const ProductContext = createContext();

export const ProductProvider = ({ children }) => {

  const allProducts = {
    McAfee:[
      {
        "id": "001",
        "name": "McAfee Antivirus Basic",
        "desc": "McAfee Antivirus Basic provides fundamental yet robust protection for your computer. It shields your device against viruses, malware, spyware, and phishing attacks to ensure a safe digital experience. Real-time threat detection blocks harmful files and malicious software before they can cause damage. It features a lightweight design that ensures minimal system impact, allowing smooth performance during regular usage. With its easy-to-use interface, it’s ideal for beginners and non-tech-savvy users. Automatic updates ensure you're always protected against the latest threats. McAfee Antivirus Basic also comes with built-in web protection to secure your browsing activity. It’s compatible with both Windows and macOS, offering versatile protection for different platforms. Whether you’re working, streaming, or shopping online, this software keeps your data secure. A great choice for users seeking reliable, no-frills antivirus protection.",
        "price": "69.99",
        "originalPrice": "79.99",
        "discountedPrice": "69.99",
        "img": "https://res.cloudinary.com/dcf3mojai/image/upload/v1727773287/McAfee_Antivirus_Basic_hlwqja.png",
        "route": "/antivirus/mcafee/mcafee-antivirus-basic",
        "specifications": {
          "Operating System": "Windows 7 with Service Pack 1, Windows 8, Windows 8.1, Windows 10, Windows 11",
          "Memory (RAM)": "2 GB",
          "Platform": "Windows & macOS",
          "CPU": "Intel CORE 2 Duo (2 GHz) or equivalent processor",
          "Storage": "500 MB of free disk space",
          "Internet Connection": "Required for activation and updates"
        }
      },
      {
        "id": "002",
        "name": "McAfee Antivirus Plus",
        "desc": "McAfee Antivirus Plus enhances your security with advanced protection features. It guards against viruses, malware, Trojans, and rootkits, offering comprehensive defense for your devices. With multi-device compatibility, it secures PCs, Macs, smartphones, and tablets under one subscription. The intelligent firewall continuously monitors network activity to prevent unauthorized access. Real-time malware scanning identifies and removes threats before they can harm your system. Its performance optimization tools keep your devices running smoothly. Automatic updates ensure you're always equipped with the latest security patches. The software also includes anti-spam filters to keep your inbox safe from phishing attempts. Designed for families and individuals, it provides versatile protection across all your digital platforms. McAfee Antivirus Plus is the perfect solution for those who need advanced, multi-device cybersecurity.",
        "price": "74.99",
        "originalPrice": "89.99",
        "discountedPrice": "74.99",
        "img": "https://res.cloudinary.com/dcf3mojai/image/upload/v1727773910/McAfee_Antivirus_Plus_hi8bf5.png",
        "route": "/antivirus/mcafee/mcafee-antivirus-plus",
        "specifications": {
          "Operating System": "Windows 7 with Service Pack 1, Windows 8, Windows 8.1, Windows 10, Windows 11",
          "Memory (RAM)": "2 GB",
          "Platform": "Windows, macOS, Android, iOS",
          "CPU": "Intel CORE 2 Duo (2 GHz) or equivalent processor",
          "Storage": "600 MB of free disk space",
          "Internet Connection": "Required for activation and updates"
        }
      },
      {
        "id": "003",
        "name": "McAfee Internet Security",
        "desc": "McAfee Internet Security offers an all-in-one solution for safeguarding your online activities. It features advanced identity theft protection, keeping your personal information secure during online transactions. The intelligent firewall ensures that unauthorized access to your device is blocked. Anti-phishing tools prevent fraudulent websites from stealing your sensitive data. The built-in email protection filters out spam and malicious attachments from your inbox. Its parental controls help you monitor and manage your family’s online activities. Multi-device compatibility allows you to secure all your devices under one subscription. Automatic updates provide real-time defense against the latest threats. With a user-friendly interface, it’s easy to set up and use. Ideal for individuals and families, McAfee Internet Security ensures peace of mind while browsing, shopping, or banking online.",
        "price": "79.99",
        "originalPrice": "99.99",
        "discountedPrice": "79.99",
        "category": ["best-seller"],
        "img": "https://res.cloudinary.com/dcf3mojai/image/upload/v1727773289/McAfee_Internet_Security_cautk3.png",
        "route": "/antivirus/mcafee/mcafee-internet-security",
        "specifications": {
          "Operating System": "Windows 7 with Service Pack 1, Windows 8, Windows 8.1, Windows 10, Windows 11",
          "Memory (RAM)": "4 GB",
          "Platform": "Windows, macOS, Android, iOS",
          "CPU": "Intel CORE i3 (2 GHz) or equivalent processor",
          "Storage": "1 GB of free disk space",
          "Internet Connection": "Required for activation and updates"
        }
      },
      {
        "id": "004",
        "name": "McAfee Total Protection",
        "desc": "McAfee Total Protection provides comprehensive cybersecurity for your digital life. It includes antivirus, firewall, and ransomware protection to safeguard your devices from all types of cyber threats. The Secure VPN ensures encrypted browsing for safe and private online activities. With advanced parental controls, you can manage screen time and restrict inappropriate content for your kids. Multi-device compatibility allows you to protect up to 10 devices with a single subscription. The software also features a password manager to securely store and autofill your credentials. Its file shredder ensures sensitive data is permanently deleted. Performance optimization tools keep your devices running smoothly. With regular updates and real-time threat detection, McAfee Total Protection offers peace of mind. This premium suite is perfect for families and professionals who need top-tier security and privacy.",
        "price": "109.99",
        "originalPrice": "129.99",
        "discountedPrice": "109.99",
        "category": ["top-rated"],
        "img": "https://res.cloudinary.com/dcf3mojai/image/upload/v1727773290/McAfee_Total_Protection_rrpren.png",
        "route": "/antivirus/mcafee/mcafee-total-protection",
        "specifications": {
          "Operating System": "Windows 7 with Service Pack 1, Windows 8, Windows 8.1, Windows 10, Windows 11",
          "Memory (RAM)": "4 GB",
          "Platform": "Windows, macOS, Android, iOS",
          "CPU": "Intel CORE i5 (2.3 GHz) or equivalent processor",
          "Storage": "1.5 GB of free disk space",
          "Internet Connection": "Required for activation, cloud backup, and VPN"
        }
      }
    ], 
    Kaspersky:[
      {
        "id": "001",
        "name": "Kaspersky Anti-Virus",
        "desc": "Kaspersky Anti-Virus is your essential defense against a wide range of cyber threats. It delivers powerful protection against viruses, ransomware, spyware, and other malicious software. With advanced threat detection technology, it ensures your system is secure from both known and emerging malware. Real-time scanning proactively identifies and blocks harmful files before they can damage your device. The lightweight design allows it to run seamlessly in the background without affecting system performance. Automatic updates keep your protection up-to-date against the latest threats. Ideal for personal computers, it offers a user-friendly interface for effortless navigation. Whether you're browsing, downloading, or streaming, Kaspersky Anti-Virus ensures uninterrupted protection. It’s the perfect choice for users seeking reliable security for their Windows PC. Stay safe with a trusted solution that’s designed for simplicity and efficiency.",
        "price": "69.99",
        "originalPrice": "79.99",
        "discountedPrice": "69.99",
        "img": "https://res.cloudinary.com/dcf3mojai/image/upload/v1727776079/kaspersky-anti-virus-3-pc_mt257i.png",
        "route": "/antivirus/kaspersky/kaspersky-anti-virus",
        "specifications": {
          "Operating System": "Windows 7 with Service Pack 1, Windows 8, Windows 8.1, Windows 10, Windows 11",
          "Memory (RAM)": "2 GB",
          "Platform": "Windows",
          "CPU": "Intel CORE 2 Duo (2 GHz) or equivalent processor",
          "Storage": "1.5 GB of free disk space",
          "Internet Connection": "Required for activation and updates"
        }
      },
      {
        "id": "002",
        "name": "Kaspersky Internet Security",
        "desc": "Kaspersky Internet Security provides comprehensive protection for your online activities. With its robust firewall and anti-phishing tools, it blocks unauthorized access and fraudulent websites. It offers secure browsing to ensure your personal and financial data remain private during online shopping and banking. The software includes webcam and microphone protection to safeguard your privacy. It provides multi-device compatibility, allowing you to secure your Windows, macOS, Android, and iOS devices under one subscription. Real-time updates keep your defenses up-to-date against emerging threats. Parental controls allow you to manage and monitor your family’s digital environment. With a user-friendly interface, it ensures effortless navigation and settings management. Ideal for individuals and families, it offers a seamless blend of security and usability. Kaspersky Internet Security is designed to protect your digital life with advanced and intelligent tools.",
        "price": "79.99",
        "originalPrice": "89.99",
        "discountedPrice": "79.99",
        "category": ["best-seller"],
        "img": "https://res.cloudinary.com/dcf3mojai/image/upload/v1727776075/Kaspersky_Total_Security_vl9uil.png",
        "route": "/antivirus/kaspersky/kaspersky-internet-security",
        "specifications": {
          "Operating System": "Windows 7 with Service Pack 1, Windows 8, Windows 8.1, Windows 10, Windows 11",
          "Memory (RAM)": "2 GB",
          "Platform": "Windows, macOS, Android, iOS",
          "CPU": "Intel CORE 2 Duo (2 GHz) or equivalent processor",
          "Storage": "2 GB of free disk space",
          "Internet Connection": "Required for activation, updates, and online browsing protection"
        }
      },
      {
        "id": "003",
        "name": "Kaspersky Total Security",
        "desc": "Kaspersky Total Security offers the ultimate protection for all aspects of your digital life. It combines antivirus, internet security, and advanced privacy tools in one comprehensive package. With multi-layered protection, it guards against viruses, ransomware, and phishing attacks. The password manager securely stores and auto-fills your credentials for hassle-free logins. Parental controls allow you to monitor and manage your child’s online activities effectively. The software includes file encryption to safeguard sensitive documents from unauthorized access. With a single license, you can protect your Windows, macOS, Android, and iOS devices. Its device optimizer ensures your system runs smoothly without lag. The built-in VPN provides secure and private internet access on any network. Kaspersky Total Security is the perfect solution for families and professionals looking for advanced, multi-device cybersecurity.",
        "price": "99.99",
        "originalPrice": "119.99",
        "discountedPrice": "99.99",
        "category": ["best-seller"],
        "img": "https://res.cloudinary.com/dcf3mojai/image/upload/v1727776567/Kaspersky_Total_Security_yd96vv.png",
        "route": "/antivirus/kaspersky/kaspersky-total-security",
        "specifications": {
          "Operating System": "Windows 7 with Service Pack 1, Windows 8, Windows 8.1, Windows 10, Windows 11",
          "Memory (RAM)": "4 GB",
          "Platform": "Windows, macOS, Android, iOS",
          "CPU": "Intel CORE i3 (2 GHz) or equivalent processor",
          "Storage": "2.5 GB of free disk space",
          "Internet Connection": "Required for activation, updates, and VPN"
        }
      },
      {
        "id": "005",
        "name": "Kaspersky Security Cloud",
        "desc": "Kaspersky Security Cloud adapts to your unique needs to deliver advanced and flexible security. It combines all features of Kaspersky Total Security with cloud-based management tools. Real-time threat detection ensures your devices are protected against the latest cyber threats. Data breach alerts notify you if your personal information is compromised. Its identity protection tools safeguard sensitive data like credit card details and passwords. The software includes parental controls to create a safe digital environment for your family. Multi-device compatibility ensures seamless protection across Windows, macOS, Android, and iOS. The VPN encrypts your browsing sessions, providing secure and private internet access. With an intuitive dashboard, it allows you to manage your security settings effortlessly. Kaspersky Security Cloud is the ideal choice for users seeking dynamic and intelligent cybersecurity.",
        "price": "109.99",
        "originalPrice": "129.99",
        "discountedPrice": "109.99",
        "category": ["top-rated"],
        "img": "https://res.cloudinary.com/dcf3mojai/image/upload/v1727776083/Kaspersky_Security_Cloud_enycnk.png",
        "route": "/antivirus/kaspersky/kaspersky-security-cloud",
        "specifications": {
          "Operating System": "Windows 7 with Service Pack 1, Windows 8, Windows 8.1, Windows 10, Windows 11",
          "Memory (RAM)": "4 GB",
          "Platform": "Windows, macOS, Android, iOS",
          "CPU": "Intel CORE i5 (2.3 GHz) or equivalent processor",
          "Storage": "3 GB of free disk space",
          "Internet Connection": "Required for activation, cloud security, and identity protection"
        }
      }
    ],              
    Norton:[
      {
        "id": "009",
        "name": "Norton AntiVirus Plus",
        "desc": "Norton AntiVirus Plus delivers essential protection for your PC or Mac, providing a powerful defense against malware, spyware, ransomware, and phishing attempts. Its real-time threat detection ensures that harmful files and viruses are blocked instantly. The built-in smart firewall monitors all network traffic, preventing unauthorized access to your personal data. Norton AntiVirus Plus is equipped with automatic updates to keep your security system current and effective. The lightweight design minimizes system performance impact while offering robust protection. It also includes a password manager to securely store and autofill your credentials. With advanced phishing protection, it safeguards you during online transactions. Ideal for single-device users, it ensures you stay protected while browsing, working, or streaming. Norton AntiVirus Plus is perfect for users seeking strong, easy-to-use antivirus software.",
        "price": "69.99",
        "originalPrice": "79.99",
        "discountedPrice": "69.99",
        "category": ["best-seller"],
        "img": "https://res.cloudinary.com/dcf3mojai/image/upload/v1727774189/Norton_AntiVirus_Plus_kfl9gy.png",
        "route": "/antivirus/norton/norton-antivirus-plus",
        "specifications": {
          "Operating System": "Windows 7 with Service Pack 1, Windows 8, Windows 8.1, Windows 10, and Windows 11",
          "Memory (RAM)": "2 GB",
          "Platform": "Windows & macOS",
          "CPU": "Intel CORE 2 Duo (2 GHz) or equivalent processor"
        }
      },
      {
        "id": "010",
        "name": "Norton 360 Deluxe",
        "desc": "Norton 360 Deluxe provides robust, multi-layered security for up to five devices. It protects against malware, ransomware, spyware, and phishing attempts, ensuring a secure digital experience. The built-in Secure VPN encrypts your online activity for private and anonymous browsing. With parental controls, it allows you to monitor and manage your children’s online activities. Norton 360 Deluxe includes 50GB of cloud backup, ensuring your files are safe from data loss or ransomware attacks. Real-time threat detection and dark web monitoring add an extra layer of protection. The software is lightweight and won’t slow down your system. It also features a password manager for secure storage of your login credentials. Ideal for families, this suite ensures comprehensive digital safety across multiple devices.",
        "price": "99.99",
        "originalPrice": "119.99",
        "discountedPrice": "99.99",
        "img": "https://res.cloudinary.com/dcf3mojai/image/upload/v1727774188/Norton_AntiVirus_Deluxe_c2oovs.png",
        "route": "/antivirus/norton/norton-360-deluxe",
        "specifications": {
          "Operating System": "Windows 7 with Service Pack 1, Windows 8, Windows 8.1, Windows 10, and Windows 11",
          "Memory (RAM)": "2 GB",
          "Platform": "Windows, macOS, iOS, Android",
          "CPU": "Intel CORE 2 Duo (2 GHz) or equivalent processor"
        }
      },
      {
        "id": "011",
        "name": "Norton 360 Premium",
        "desc": "Norton 360 Premium is the ultimate cybersecurity suite, offering top-tier protection for up to 10 devices. It features advanced antivirus, ransomware defense, and phishing protection. The suite includes a Secure VPN for encrypted internet browsing and dark web monitoring for identity protection. With 75GB of cloud backup, your critical files remain safe from accidental deletion or ransomware. The parental controls enable families to create safe online environments for kids. Norton 360 Premium also includes a password manager for storing and managing credentials securely. Its system optimization tools ensure your devices run smoothly. The intuitive interface makes it easy to configure and use, even for non-tech-savvy users. Perfect for large households, this suite guarantees comprehensive digital security.",
        "price": "119.99",
        "originalPrice": "139.99",
        "discountedPrice": "119.99",
        "category": ["top-rated"],
        "img": "https://res.cloudinary.com/dcf3mojai/image/upload/v1727774196/Norton-Security-360-Premium_jbmixw.png",
        "route": "/antivirus/norton/norton-360-premium",
        "specifications": {
          "Operating System": "Windows 7 with Service Pack 1, Windows 8, Windows 8.1, Windows 10, and Windows 11",
          "Memory (RAM)": "2 GB",
          "Platform": "Windows, macOS, iOS, Android",
          "CPU": "Intel CORE 2 Duo (2 GHz) or equivalent processor"
        }
      },
      {
        "id": "012",
        "name": "Norton 360 with LifeLock Select",
        "desc": "Norton 360 with LifeLock Select combines advanced cybersecurity with identity theft protection. It includes antivirus, ransomware defense, and phishing protection to safeguard your devices. The Secure VPN encrypts your online activity for privacy and anonymity. Dark web monitoring alerts you if your personal information is found on illegal marketplaces. LifeLock Identity Theft Protection offers credit monitoring and alerts for suspicious activity. The package includes 100GB of cloud backup to secure your files. With multi-device compatibility, you can protect your family’s digital activities. Designed for individuals who value both security and identity protection, it ensures peace of mind in the digital world. Norton 360 with LifeLock Select is an all-in-one solution for comprehensive safety.",
        "price": "149.99",
        "originalPrice": "169.99",
        "discountedPrice": "149.99",
        "category": ["identity-protection"],
        "img": "https://res.cloudinary.com/dcf3mojai/image/upload/v1738073255/Norton_20360_20with_20LifeLock_20Select_20-_20US_20_28Flat_29_qr1xvf.png",
        "route": "/antivirus/norton/norton-360-lifelock-select",
        "specifications": {
          "Operating System": "Windows 7 with Service Pack 1, Windows 8, Windows 8.1, Windows 10, and Windows 11",
          "Memory (RAM)": "2 GB",
          "Platform": "Windows, macOS, iOS, Android",
          "CPU": "Intel CORE 2 Duo (2 GHz) or equivalent processor",
          "Identity Protection": "Dark Web Monitoring, Identity Alerts, Credit Monitoring",
          "Secure VPN": "Yes (Unlimited)",
          "Cloud Backup": "100GB"
        }
      },
      {
        "id": "013",
        "name": "Norton 360 with LifeLock Ultimate Plus",
        "desc": "Norton 360 with LifeLock Ultimate Plus offers the most comprehensive protection for your digital life. It combines antivirus, ransomware, and phishing protection with full-spectrum identity monitoring. The suite includes credit monitoring, SSN alerts, and bank account activity tracking for fraud detection. With unlimited Secure VPN, your online activities remain private and encrypted. It also features 500GB of cloud backup to protect your important files. Dark web monitoring notifies you of potential breaches involving your personal information. Designed for large families or individuals with high-security needs, it supports multiple devices across all major platforms. The package also includes a password manager for secure storage and auto-fill capabilities. Norton 360 with LifeLock Ultimate Plus is the pinnacle of digital safety solutions.",
        "price": "299.99",
        "originalPrice": "349.99",
        "discountedPrice": "299.99",
        "category": ["premium-security"],
        "img": "https://res.cloudinary.com/dcf3mojai/image/upload/v1738073361/Norton_20360_20with_20Lifelock_20ultimate_20plus_isycvo.jpg",
        "route": "/antivirus/norton/norton-360-lifelock-ultimate-plus",
        "specifications": {
          "Operating System": "Windows 7 with Service Pack 1, Windows 8, Windows 8.1, Windows 10, and Windows 11",
          "Memory (RAM)": "2 GB",
          "Platform": "Windows, macOS, iOS, Android",
          "CPU": "Intel CORE 2 Duo (2 GHz) or equivalent processor",
          "Identity Protection": "Dark Web Monitoring, SSN Alerts, Credit Reports, Bank Account Monitoring",
          "Secure VPN": "Yes (Unlimited)",
          "Cloud Backup": "500GB"
        }
      }
    ],    
    Webroot: [
      {
        "id": "902",
        "name": "Webroot Internet Security Plus",
        "desc": "Webroot Internet Security Plus provides comprehensive security for your digital life, offering all the features of SecureAnywhere Antivirus along with additional tools for enhanced safety. The included password manager securely stores and auto-fills your login credentials, ensuring convenience and privacy. Its cloud-based threat detection ensures fast and efficient malware removal without slowing down your system. Multi-device compatibility allows you to protect your PC, Mac, smartphone, or tablet under one subscription. Webroot Internet Security Plus includes phishing protection, blocking access to malicious websites. The software runs in the background without interrupting your workflow. It features real-time updates to combat the latest threats, ensuring your system stays protected. This is an excellent choice for users seeking advanced security and online privacy.",
        "price": "79.99",
        "originalPrice": "89.99",
        "discountedPrice": "79.99",
        "category": ["best-seller"],
        "img": "https://res.cloudinary.com/dcf3mojai/image/upload/v1738062960/51DU52_wvgS._AC_UF1000_1000_QL80__vjd182.jpg",
        "route": "/antivirus/webroot/webroot-internet-security-plus",
        "specifications": {
          "Operating System": "Windows 7 with Service Pack 1, Windows 8, Windows 8.1, Windows 10, Windows 11, macOS 10.12 or later",
          "Memory (RAM)": "2 GB",
          "Platform": "Windows, macOS, Android, iOS",
          "CPU": "Intel CORE 2 Duo (2 GHz) or equivalent processor",
          "Storage": "15 MB of free disk space",
          "Internet Connection": "Required for activation, real-time protection, and password management"
        }
      },
      {
        "id": "901",
        "name": "Webroot SecureAnywhere Antivirus",
        "desc": "Webroot SecureAnywhere Antivirus offers lightweight yet powerful protection for your devices. With its cloud-based scanning technology, it ensures real-time defense against viruses, malware, and phishing attacks. The software is designed to minimize system impact, making it ideal for low-resource devices. It provides proactive threat detection and instant updates to protect against emerging cyber threats. With identity theft protection, your sensitive personal data is safeguarded during online transactions. The software features advanced firewall monitoring, ensuring your system stays protected from unauthorized access. Webroot SecureAnywhere Antivirus is easy to install and manage, making it perfect for everyday users. The small installation size means it won’t consume unnecessary storage. Its intuitive dashboard allows for hassle-free navigation, ensuring efficient and effective digital security.",
        "price": "59.99",
        "originalPrice": "69.99",
        "discountedPrice": "59.99",
        "img": "https://res.cloudinary.com/dcf3mojai/image/upload/v1738064218/71D67r1aZwL._AC_UF894_1000_QL80__t1wzr2.jpg",
        "route": "/antivirus/webroot/webroot-secureanywhere-antivirus",
        "specifications": {
          "Operating System": "Windows 7 with Service Pack 1, Windows 8, Windows 8.1, Windows 10, Windows 11, macOS 10.12 or later",
          "Memory (RAM)": "2 GB",
          "Platform": "Windows, macOS",
          "CPU": "Intel CORE 2 Duo (2 GHz) or equivalent processor",
          "Storage": "15 MB of free disk space",
          "Internet Connection": "Required for activation and real-time cloud protection"
        }
      },
      {
        "id": "903",
        "name": "Webroot Internet Security Complete",
        "desc": "Webroot Internet Security Complete is a comprehensive security suite that combines powerful threat protection with system optimization tools. It includes all the features of Internet Security Plus, along with 25GB of secure cloud storage for backup. The software offers ransomware protection, safeguarding your files and personal data from encryption attacks. Its advanced system optimizer removes junk files, improves performance, and enhances system speed. Webroot’s cloud-based architecture ensures lightning-fast scans and low resource usage. It also includes a secure browsing tool to protect your privacy while shopping or banking online. With multi-device compatibility, you can secure all your devices under one plan. Webroot Internet Security Complete is designed for users who value performance, privacy, and robust protection in a single package.",
        "price": "99.99",
        "originalPrice": "119.99",
        "discountedPrice": "99.99",
        "category": ["best-seller"],
        "img": "https://res.cloudinary.com/dcf3mojai/image/upload/v1738063030/webroot-internetsec_q92amw.png",
        "route": "/antivirus/webroot/webroot-internet-security-complete",
        "specifications": {
          "Operating System": "Windows 7 with Service Pack 1, Windows 8, Windows 8.1, Windows 10, Windows 11, macOS 10.12 or later",
          "Memory (RAM)": "4 GB",
          "Platform": "Windows, macOS, Android, iOS",
          "CPU": "Intel CORE i3 (2 GHz) or equivalent processor",
          "Storage": "30 MB of free disk space",
          "Internet Connection": "Required for activation, cloud storage, and VPN services"
        }
      },
      {
        "id": "904",
        "name": "Webroot Business Endpoint Protection",
        "desc": "Webroot Business Endpoint Protection delivers enterprise-grade security designed specifically for businesses of all sizes. Its cloud-based endpoint management provides centralized monitoring for all connected devices. Real-time threat detection protects against malware, ransomware, and zero-day exploits. The software’s AI-powered threat intelligence analyzes new threats instantly, ensuring quick mitigation. It features data breach prevention, ensuring sensitive business information stays secure. Webroot’s lightweight design ensures minimal impact on system performance, making it ideal for workstations. Its advanced firewall protection blocks unauthorized network activity. With remote endpoint management, IT administrators can configure and monitor security settings from anywhere. Webroot Business Endpoint Protection is a reliable solution for businesses seeking robust and scalable cybersecurity.",
        "price": "129.99",
        "originalPrice": "149.99",
        "discountedPrice": "129.99",
        "img": "https://res.cloudinary.com/dcf3mojai/image/upload/v1738063068/webrootendpoint_erk6rg.jpg",
        "route": "/antivirus/webroot/webroot-business-endpoint-protection",
        "specifications": {
          "Operating System": "Windows 7 with Service Pack 1, Windows 8, Windows 8.1, Windows 10, Windows 11, macOS 10.12 or later",
          "Memory (RAM)": "4 GB",
          "Platform": "Windows, macOS",
          "CPU": "Intel CORE i5 (2.3 GHz) or equivalent processor",
          "Storage": "50 MB of free disk space",
          "Internet Connection": "Required for activation, remote endpoint management, and cloud threat analysis"
        }
      }
    ],    
    Avast:[
      {
        "id": "101",
        "name": "Avast Pro Antivirus",
        "desc": "Avast Pro Antivirus provides comprehensive protection against viruses, malware, and ransomware, ensuring real-time security for your PC or Mac. The **Sandboxing feature** allows you to test suspicious apps in a secure environment, preventing any risks to your system. With **Advanced Threat Detection**, it identifies zero-day threats before they can harm your device. The integrated **Wi-Fi Inspector** scans your network for vulnerabilities and unauthorized access. It also includes a **smart firewall** to monitor incoming and outgoing traffic, enhancing your overall security. Avast Pro Antivirus operates with minimal system impact, ensuring smooth performance. The software features automatic updates, keeping your protection current against the latest threats. With an intuitive interface, users can easily navigate and manage security settings. It’s a reliable choice for users seeking robust, straightforward antivirus software.",
        "price": "69.99",
        "originalPrice": "79.99",
        "discountedPrice": "69.99",
        "img": "https://res.cloudinary.com/dcf3mojai/image/upload/v1727772624/Avast_Pro_Antivirus_lddqyh.png",
        "route": "/antivirus/avast/avast-pro-antivirus",
        "specifications": {
          "Operating System": "Windows 7 with Service Pack 1, Windows 8, Windows 8.1, Windows 10, Windows 11, macOS 10.12 or later",
          "Memory (RAM)": "2 GB",
          "Platform": "Windows, macOS",
          "CPU": "Intel CORE 2 Duo (2 GHz) or equivalent processor",
          "Storage": "1.5 GB of free disk space",
          "Internet Connection": "Required for activation and updates"
        }
      },
      {
        "id": "102",
        "name": "Avast Premium Security",
        "desc": "Avast Premium Security delivers top-notch cybersecurity for multiple devices, protecting against viruses, malware, phishing attacks, and spyware. The software includes an **intelligent firewall** that blocks unauthorized access and monitors network activity. The **Ransomware Shield** prevents hackers from encrypting your files, while **Webcam Protection** safeguards your privacy from unauthorized access. With **Real Site Protection**, it blocks fake websites used for phishing scams, ensuring safe online transactions. Avast Premium Security supports multi-device compatibility, allowing you to protect PCs, Macs, and mobile devices. The software also features **automatic software updates** to patch vulnerabilities and improve security. It provides a seamless user experience with minimal system impact. Perfect for users who need comprehensive protection across their digital life.",
        "price": "89.99",
        "originalPrice": "99.99",
        "discountedPrice": "89.99",
        "img": "https://res.cloudinary.com/dcf3mojai/image/upload/v1727772626/avast-premium-security-3-years-10-device_sxyoe9.png",
        "route": "/antivirus/avast/avast-premium-security",
        "specifications": {
          "Operating System": "Windows 7 with Service Pack 1, Windows 8, Windows 8.1, Windows 10, Windows 11, macOS 10.12 or later",
          "Memory (RAM)": "4 GB",
          "Platform": "Windows, macOS, Android, iOS",
          "CPU": "Intel CORE i3 (2 GHz) or equivalent processor",
          "Storage": "2 GB of free disk space",
          "Internet Connection": "Required for activation, real-time protection, and VPN"
        }
      },
      {
        "id": "103",
        "name": "Avast Ultimate",
        "desc": "Avast Ultimate is an all-in-one security, privacy, and performance suite for complete digital protection. It includes **Avast Premium Security** for advanced cybersecurity, **SecureLine VPN** for private and encrypted browsing, and **Avast Cleanup Premium** to optimize system performance. The package also features **Avast Passwords Premium** for secure credential management and auto-filling. Designed for users who demand comprehensive security and optimization tools, Avast Ultimate provides multi-device compatibility, protecting your PCs, Macs, and mobile devices. The **Disk Cleanup feature** removes unnecessary files and frees up storage space. Its intuitive interface makes navigation and management simple. With robust protection against ransomware and phishing attacks, Avast Ultimate ensures your data and identity remain secure at all times.",
        "price": "109.99",
        "originalPrice": "129.99",
        "discountedPrice": "109.99",
        "img": "https://res.cloudinary.com/dcf3mojai/image/upload/v1727772625/Avast_Ultimate_by2hyd.png",
        "route": "/antivirus/avast/avast-ultimate",
        "specifications": {
          "Operating System": "Windows 7 with Service Pack 1, Windows 8, Windows 8.1, Windows 10, Windows 11, macOS 10.12 or later",
          "Memory (RAM)": "4 GB",
          "Platform": "Windows, macOS, Android, iOS",
          "CPU": "Intel CORE i5 (2.3 GHz) or equivalent processor",
          "Storage": "3 GB of free disk space",
          "Internet Connection": "Required for activation, VPN, and cloud services"
        }
      },
      {
        "id": "104",
        "name": "Avast Cleanup Premium",
        "desc": "Avast Cleanup Premium is a powerful optimization tool designed to enhance your PC or Mac’s performance. It removes junk files, temporary caches, and unnecessary startup programs that slow down your system. The **Automatic Maintenance feature** regularly scans and cleans your device, ensuring peak performance. With **Sleep Mode Optimization**, it intelligently suspends resource-draining applications to improve speed and battery life. Avast Cleanup Premium also identifies and removes bloatware and outdated programs. The user-friendly interface provides a clear overview of your system’s health. It’s an ideal solution for users looking to boost their device’s efficiency. The software operates with minimal impact on system resources, making it suitable for older or slower devices. Regular updates ensure compatibility with the latest operating systems and hardware.",
        "price": "79.99",
        "originalPrice": "89.99",
        "discountedPrice": "79.99",
        "img": "https://res.cloudinary.com/dcf3mojai/image/upload/v1727772623/Avast_Cleanup_Premium_whf2il.png",
        "route": "/antivirus/avast/avast-cleanup-premium",
        "specifications": {
          "Operating System": "Windows 7 with Service Pack 1, Windows 8, Windows 8.1, Windows 10, Windows 11, macOS 10.12 or later",
          "Memory (RAM)": "2 GB",
          "Platform": "Windows, macOS",
          "CPU": "Intel CORE 2 Duo (2 GHz) or equivalent processor",
          "Storage": "500 MB of free disk space",
          "Internet Connection": "Required for activation and system optimization updates"
        }
      }
    ],    
    AVG:[
      {
        "id": "002",
        "name": "AVG Internet Security",
        "desc": "AVG Internet Security provides comprehensive protection for secure online browsing, shopping, and banking. It features an enhanced firewall that blocks unauthorized access and protects your personal data from cyber threats. The anti-phishing tools prevent access to malicious websites, safeguarding sensitive information like passwords and credit card details. The software also includes email protection, which filters out spam and malicious attachments, ensuring a safe inbox. With AI-powered threat detection, AVG Internet Security can identify and neutralize zero-day threats before they cause harm. The real-time security updates ensure you're always protected against the latest threats. This software operates efficiently with minimal impact on your system's performance. Ideal for users who prioritize security while conducting online transactions.",
        "price": "79.99",
        "originalPrice": "89.99",
        "discountedPrice": "79.99",
        "img": "https://res.cloudinary.com/dcf3mojai/image/upload/v1727775343/avg-internet-security-2-year_qq4dwz.png",
        "route": "/antivirus/avg/avg-internet-security",
        "specifications": {
          "Operating System": "Windows 7 with Service Pack 1, Windows 8, Windows 8.1, Windows 10, Windows 11, macOS 10.12 or later",
          "Memory (RAM)": "2 GB",
          "Platform": "Windows, macOS",
          "CPU": "Intel CORE 2 Duo (2 GHz) or equivalent processor",
          "Storage": "1.5 GB of free disk space",
          "Internet Connection": "Required for activation, real-time updates, and firewall protection"
        }
      },
      {
        "id": "003",
        "name": "AVG Ultimate",
        "desc": "AVG Ultimate is an all-in-one solution that combines advanced security and performance tools. This suite includes AVG Internet Security for real-time protection against malware, ransomware, and phishing attacks. It also features AVG Secure VPN to ensure private and encrypted online browsing. AVG TuneUp optimizes your system's performance by cleaning junk files, managing startup programs, and freeing up disk space. With multi-device compatibility, you can protect and optimize multiple PCs, Macs, and mobile devices with a single subscription. AVG Ultimate is perfect for individuals and families looking for a comprehensive solution to secure and enhance their digital lives.",
        "price": "99.99",
        "originalPrice": "119.99",
        "discountedPrice": "99.99",
        "img": "https://res.cloudinary.com/dcf3mojai/image/upload/v1727775344/avg-ultimate_jtp3i0.jpg",
        "route": "/antivirus/avg/avg-ultimate",
        "specifications": {
          "Operating System": "Windows 7 with Service Pack 1, Windows 8, Windows 8.1, Windows 10, Windows 11, macOS 10.12 or later",
          "Memory (RAM)": "4 GB",
          "Platform": "Windows, macOS, Android, iOS",
          "CPU": "Intel CORE i3 (2 GHz) or equivalent processor",
          "Storage": "2 GB of free disk space",
          "Internet Connection": "Required for activation, VPN, and system optimization features"
        }
      },
      {
        "id": "004",
        "name": "AVG Secure VPN",
        "desc": "AVG Secure VPN ensures your online privacy with military-grade encryption for your internet connection. Whether you're using public Wi-Fi at a café, airport, or hotel, this VPN protects your data from hackers and cybercriminals. It also enables you to access geo-restricted content by connecting to servers in multiple countries. Designed for fast and secure browsing, AVG Secure VPN ensures a seamless experience without slowing down your internet speed. Perfect for users who prioritize online privacy and unrestricted access to their favorite content.",
        "price": "79.99",
        "originalPrice": "89.99",
        "discountedPrice": "79.99",
        "img": "https://res.cloudinary.com/dcf3mojai/image/upload/v1727775342/AVG_Secure_VPN_fftnqw.png",
        "route": "/antivirus/avg/avg-secure-vpn",
        "specifications": {
          "Operating System": "Windows 7 with Service Pack 1, Windows 8, Windows 8.1, Windows 10, Windows 11, macOS 10.12 or later",
          "Memory (RAM)": "2 GB",
          "Platform": "Windows, macOS, Android, iOS",
          "CPU": "Intel CORE 2 Duo (2 GHz) or equivalent processor",
          "Storage": "500 MB of free disk space",
          "Internet Connection": "Required for activation and VPN connectivity"
        }
      },
      {
        "id": "006",
        "name": "AVG AntiTrack",
        "desc": "AVG AntiTrack is a privacy-focused tool designed to prevent advertisers and third-party websites from tracking your online activity. It blocks tracking cookies, clears your digital fingerprints, and generates fake browsing patterns to mislead intrusive trackers. With AVG AntiTrack, you can regain control of your online privacy and avoid targeted ads. The intuitive dashboard provides insights into your privacy status and blocked trackers. Perfect for users concerned about data collection, targeted ads, and online surveillance, AVG AntiTrack ensures a safer and more private browsing experience.",
        "price": "69.99",
        "originalPrice": "79.99",
        "discountedPrice": "69.99",
        "img": "https://res.cloudinary.com/dcf3mojai/image/upload/v1727775346/AVG_AntiTrack_osyrzl.png",
        "route": "/antivirus/avg/avg-antitrack",
        "specifications": {
          "Operating System": "Windows 7 with Service Pack 1, Windows 8, Windows 8.1, Windows 10, Windows 11, macOS 10.12 or later",
          "Memory (RAM)": "2 GB",
          "Platform": "Windows, macOS",
          "CPU": "Intel CORE 2 Duo (2 GHz) or equivalent processor",
          "Storage": "1 GB of free disk space",
          "Internet Connection": "Required for activation, privacy protection, and tracking prevention updates"
        }
      }
    ],    
    Bitdefender:[
      {
        "id": "201",
        "name": "Bitdefender Antivirus Plus",
        "desc": "Bitdefender Antivirus Plus provides essential cybersecurity with advanced protection against viruses, malware, spyware, and ransomware. Its multi-layered ransomware defense ensures your files are safe from unauthorized encryption. With real-time threat detection, it neutralizes emerging threats before they can cause harm. The software includes a built-in Secure VPN, offering encrypted browsing and protecting your online activity from hackers. Bitdefender’s anti-phishing technology prevents access to malicious websites that attempt to steal your personal data. It features Autopilot Mode, which adjusts security settings for a seamless user experience. The software is lightweight and optimized to run efficiently without impacting system performance. Automatic updates ensure you’re always protected against the latest cyber threats. It’s ideal for users who want powerful yet easy-to-use protection for their devices.",
        "price": "69.99",
        "originalPrice": "79.99",
        "discountedPrice": "69.99",
        "category": ["best-seller"],
        "img": "https://res.cloudinary.com/dcf3mojai/image/upload/v1727775610/Bitdefender_Antivirus_Plus_sfnnz0.png",
        "route": "/antivirus/bitdefender/bitdefender-antivirus-plus",
        "specifications": {
          "Operating System": "Windows 7 with Service Pack 1, Windows 8, Windows 8.1, Windows 10, Windows 11, macOS 10.12 or later",
          "Memory (RAM)": "2 GB",
          "Platform": "Windows, macOS",
          "CPU": "Intel CORE 2 Duo (2 GHz) or equivalent processor",
          "Storage": "1.5 GB of free disk space",
          "Internet Connection": "Required for activation, real-time protection, and VPN usage"
        }
      },
      {
        "id": "202",
        "name": "Bitdefender Internet Security",
        "desc": "Bitdefender Internet Security is an advanced suite that safeguards your digital life with multi-layered security. It offers protection against malware, ransomware, and phishing attempts, ensuring your online activities remain secure. The anti-fraud detection technology identifies and blocks fraudulent websites. With Webcam and Microphone Protection, it ensures your privacy by preventing unauthorized access. It also features parental controls, enabling you to monitor and manage your children’s online activities. Bitdefender Internet Security includes a built-in VPN for private browsing and protection on public Wi-Fi networks. It provides anti-tracker technology to enhance your privacy while browsing. Designed to deliver maximum security with minimal impact on performance, this software is perfect for families and individuals alike.",
        "price": "79.99",
        "originalPrice": "89.99",
        "discountedPrice": "79.99",
        "img": "https://res.cloudinary.com/dcf3mojai/image/upload/v1727775606/Bitdefender_Internet_Security_mrpep7.png",
        "route": "/antivirus/bitdefender/bitdefender-internet-security",
        "specifications": {
          "Operating System": "Windows 7 with Service Pack 1, Windows 8, Windows 8.1, Windows 10, Windows 11, macOS 10.12 or later",
          "Memory (RAM)": "4 GB",
          "Platform": "Windows, macOS",
          "CPU": "Intel CORE i3 (2 GHz) or equivalent processor",
          "Storage": "2 GB of free disk space",
          "Internet Connection": "Required for activation, VPN, and anti-phishing features"
        }
      },
      {
        "id": "203",
        "name": "Bitdefender Total Security",
        "desc": "Bitdefender Total Security offers all-in-one protection for Windows, macOS, Android, and iOS devices. It delivers real-time threat detection to neutralize viruses, malware, and ransomware instantly. The suite includes advanced parental controls, helping you manage screen time and monitor your children’s activity. It comes with a Secure VPN for encrypted browsing and privacy protection on public Wi-Fi. The anti-phishing features protect against online scams and fraudulent websites. Its multi-layered ransomware protection safeguards your files from unauthorized encryption. Additionally, it includes a Device Optimizer to enhance system performance. With coverage for up to five devices, Bitdefender Total Security is an excellent choice for families and individuals seeking comprehensive protection.",
        "price": "99.99",
        "originalPrice": "119.99",
        "discountedPrice": "99.99",
        "category": ["top-rated"],
        "img": "https://res.cloudinary.com/dcf3mojai/image/upload/v1727775608/Bitdefender_Total_Security_x80nf7.png",
        "route": "/antivirus/bitdefender/bitdefender-total-security",
        "specifications": {
          "Operating System": "Windows 7 with Service Pack 1, Windows 8, Windows 8.1, Windows 10, Windows 11, macOS 10.12 or later",
          "Memory (RAM)": "4 GB",
          "Platform": "Windows, macOS, Android, iOS",
          "CPU": "Intel CORE i5 (2.3 GHz) or equivalent processor",
          "Storage": "2.5 GB of free disk space",
          "Internet Connection": "Required for activation, VPN, and multi-device protection"
        }
      },
      {
        "id": "204",
        "name": "Bitdefender Family Pack",
        "desc": "Bitdefender Family Pack provides ultimate protection for your household, covering up to 15 devices. It features real-time security against malware, ransomware, and phishing attacks. The advanced parental controls let you set screen time limits and filter inappropriate content. With a Secure VPN, all family members can browse the internet safely and privately. The anti-tracker technology ensures that your online activities remain confidential. It also includes a Password Manager to securely store and auto-fill credentials. Designed for families with multiple devices, Bitdefender Family Pack ensures seamless protection across desktops, laptops, tablets, and smartphones. The suite’s user-friendly interface makes managing security for your family simple and efficient.",
        "price": "119.99",
        "originalPrice": "149.99",
        "discountedPrice": "119.99",
        "img": "https://res.cloudinary.com/dcf3mojai/image/upload/v1727775612/Bitdefender_Family_Pack_vr2p4a.png",
        "route": "/antivirus/bitdefender/bitdefender-family-pack",
        "specifications": {
          "Operating System": "Windows 7 with Service Pack 1, Windows 8, Windows 8.1, Windows 10, Windows 11, macOS 10.12 or later",
          "Memory (RAM)": "4 GB",
          "Platform": "Windows, macOS, Android, iOS",
          "CPU": "Intel CORE i5 (2.3 GHz) or equivalent processor",
          "Storage": "3 GB of free disk space",
          "Internet Connection": "Required for activation, cloud parental controls, and multi-device management"
        }
      }
    ],          
    TotalAV: [
      {
        "id": "302",
        "name": "TotalAV Pro Antivirus",
        "desc": "TotalAV Pro Antivirus delivers advanced security for your devices with state-of-the-art virus and malware detection. It scans your system in real time to prevent threats before they can compromise your data. Its user-friendly interface ensures hassle-free navigation for all users, regardless of technical expertise. With lightweight operation, TotalAV Pro Antivirus runs silently in the background without impacting system performance. It offers robust ransomware protection, blocking unauthorized access to your files. The software includes a web shield that warns against unsafe websites to keep your browsing secure. Automatic updates ensure you're always protected against the latest threats. Designed for both Windows and macOS platforms, TotalAV Pro Antivirus is ideal for individual users looking for a reliable and efficient solution.",
        "price": "69.99",
        "originalPrice": "79.99",
        "discountedPrice": "69.99",
        "img": "https://res.cloudinary.com/dcf3mojai/image/upload/v1727770361/TotalAV_Pro_Antivirus_modxld.svg",
        "route": "/antivirus/totalav/totalav-pro-antivirus",
        "specifications": {
          "Operating System": "Windows 7 with Service Pack 1, Windows 8, Windows 8.1, Windows 10, Windows 11, macOS 10.12 or later",
          "Memory (RAM)": "2 GB",
          "Platform": "Windows, macOS",
          "CPU": "Intel CORE 2 Duo (2 GHz) or equivalent processor",
          "Storage": "1 GB of free disk space",
          "Internet Connection": "Required for activation, updates, and real-time protection"
        }
      },
      {
        "id": "304",
        "name": "TotalAV Total Security",
        "desc": "TotalAV Total Security offers a comprehensive, all-in-one solution to keep your devices safe and secure. It features real-time protection against malware, spyware, and ransomware, ensuring your data remains intact. The built-in Secure VPN provides anonymous browsing and encrypts your online activities for added privacy. The Password Vault stores and manages your credentials securely, preventing unauthorized access. TotalAV Total Security also comes with an ad blocker to eliminate intrusive advertisements for a seamless browsing experience. Designed for multi-device compatibility, it allows you to secure Windows, macOS, Android, and iOS devices. The system optimization tools clean junk files and enhance performance. With automatic updates and advanced identity theft protection, this product is perfect for users seeking top-tier security.",
        "price": "99.99",
        "originalPrice": "129.99",
        "discountedPrice": "99.99",
        "category": ["best-seller"],
        "img": "https://res.cloudinary.com/dcf3mojai/image/upload/v1727770362/TotalAV_Total_Security_ygfxto.svg",
        "route": "/antivirus/totalav/totalav-total-security",
        "specifications": {
          "Operating System": "Windows 7 with Service Pack 1, Windows 8, Windows 8.1, Windows 10, Windows 11, macOS 10.12 or later",
          "Memory (RAM)": "4 GB",
          "Platform": "Windows, macOS, Android, iOS",
          "CPU": "Intel CORE i3 (2 GHz) or equivalent processor",
          "Storage": "2 GB of free disk space",
          "Internet Connection": "Required for activation, VPN, and identity protection services"
        }
      },
      {
        "id": "303",
        "name": "TotalAV Internet Security",
        "desc": "TotalAV Internet Security provides robust protection for your online activities with advanced security features. Its real-time malware detection keeps your devices free from viruses, spyware, and ransomware. The Secure VPN encrypts your internet connection, ensuring your browsing remains private and secure. With its Ad Blocker feature, you can enjoy a clean and uninterrupted web experience. The software supports multiple devices, making it a great choice for families or professionals managing multiple platforms. Its intuitive dashboard allows for easy setup and monitoring of security features. Automatic updates keep your system protected from emerging cyber threats. TotalAV Internet Security is ideal for users who prioritize privacy, security, and seamless online experiences.",
        "price": "79.99",
        "originalPrice": "99.99",
        "discountedPrice": "79.99",
        "img": "https://res.cloudinary.com/dcf3mojai/image/upload/v1727770361/TotalAV_Internet_Security_cgvk8q.svg",
        "route": "/antivirus/totalav/totalav-internet-security",
        "specifications": {
          "Operating System": "Windows 7 with Service Pack 1, Windows 8, Windows 8.1, Windows 10, Windows 11, macOS 10.12 or later",
          "Memory (RAM)": "4 GB",
          "Platform": "Windows, macOS, Android, iOS",
          "CPU": "Intel CORE i3 (2 GHz) or equivalent processor",
          "Storage": "1.5 GB of free disk space",
          "Internet Connection": "Required for activation, VPN, and online protection features"
        }
      }
    ],
      "Avira": [
        {
          "id": "401",
          "name": "Avira Antivirus Pro",
          "desc": "Avira Antivirus Pro delivers next-generation security with AI-driven malware protection. It provides real-time scanning to block ransomware, spyware, and phishing attempts. Its lightweight design ensures minimal system impact, making it ideal for both work and gaming. The built-in web protection prevents access to malicious websites, safeguarding your online transactions. Automatic updates ensure continuous defense against evolving cyber threats. Perfect for users who need essential yet powerful protection.",
          "price": "69.99",
          "originalPrice": "79.99",
          "discountedPrice": "69.99",
          "img": "https://res.cloudinary.com/dcf3mojai/image/upload/v1738588972/Avira_Antivirus_evx9vx.png",
          "route": "/antivirus/avira/avira-antivirus-pro",
          "specifications": {
            "Operating System": "Windows 7, Windows 8, Windows 10, Windows 11, macOS 10.12 or later",
            "Memory (RAM)": "2 GB",
            "Platform": "Windows, macOS",
            "CPU": "Intel Core 2 Duo (2 GHz) or equivalent processor",
            "Storage": "1 GB of free disk space",
            "Internet Connection": "Required for activation and updates"
          }
        },
        {
          "id": "402",
          "name": "Avira Internet Security",
          "desc": "Avira Internet Security provides all-around protection against malware, ransomware, and online threats. It includes a built-in password manager, secure browsing, and anti-phishing tools. The software automatically blocks unsafe emails, downloads, and links. With real-time updates and cloud-based threat detection, it ensures the highest level of security. The lightweight design ensures a smooth user experience without slowing down your device.",
          "price": "79.99",
          "originalPrice": "89.99",
          "category": [""],
          "discountedPrice": "79.99",
          "img": "https://res.cloudinary.com/dcf3mojai/image/upload/v1738589105/avira-antivirus-500x500_qqva1k.png",
          "route": "/antivirus/avira/avira-internet-security",
          "specifications": {
            "Operating System": "Windows 7, Windows 8, Windows 10, Windows 11, macOS 10.12 or later",
            "Memory (RAM)": "2 GB",
            "Platform": "Windows, macOS",
            "CPU": "Intel Core i3 (2 GHz) or equivalent processor",
            "Storage": "1.5 GB of free disk space",
            "Internet Connection": "Required for activation and real-time scanning"
          }
        },
        {
          "id": "403",
          "name": "Avira Prime",
          "desc": "Avira Prime is the ultimate all-in-one security suite, providing antivirus, VPN, system optimization, and password management. It offers real-time malware protection, secure online banking, and anti-phishing tools. The integrated VPN ensures private browsing and unrestricted access to geo-blocked content. Avira Prime enhances system speed with advanced cleanup and optimization tools, making it the best choice for users seeking complete security and performance in one package.",
          "price": "99.99",
          "category": ["best-seller"],
          "originalPrice": "129.99",
          "discountedPrice": "99.99",
          "img": "https://res.cloudinary.com/dcf3mojai/image/upload/v1738589667/avira-prime-removebg-preview_v9399u.png",
          "route": "/antivirus/avira/avira-prime",
          "specifications": {
            "Operating System": "Windows 7, Windows 8, Windows 10, Windows 11, macOS 10.12 or later",
            "Memory (RAM)": "4 GB",
            "Platform": "Windows, macOS, Android, iOS",
            "CPU": "Intel Core i5 (2.3 GHz) or equivalent processor",
            "Storage": "2 GB of free disk space",
            "Internet Connection": "Required for activation, VPN, and system optimization tools"
          }
        }
      ],
        "PCMatic": [
          {
            "id": "501",
            "name": "PC Matic Home",
            "desc": "PC Matic Home provides industry-leading protection using a whitelist-based approach to block malware and ransomware threats. It includes automated PC maintenance, optimizing system performance while ensuring top-tier security. The software offers real-time protection against cyber threats with minimal impact on device speed. Designed for individual users and families, it provides multi-device security under a single subscription. PC Matic Home keeps your digital experience safe and efficient.",
            "price": "79.99",
            "originalPrice": "99.99",
            "discountedPrice": "79.99",
            "img": "https://res.cloudinary.com/dcf3mojai/image/upload/v1738341097/pcmatic-consumer-large-transparent-300w__95314.1624040651.386.513_kkf79v.png",
            "route": "/antvirus/pcmatic/pc-matic-home",
            "specifications": {
              "Operating System": "Windows 7, Windows 8, Windows 10, Windows 11",
              "Memory (RAM)": "2 GB",
              "Platform": "Windows",
              "CPU": "Intel Core 2 Duo (2 GHz) or equivalent processor",
              "Storage": "1 GB of free disk space",
              "Internet Connection": "Required for activation and updates"
            }
          },
          {
            "id": "502",
            "name": "PC Matic Ultimate",
            "desc": "PC Matic Ultimate is the complete cybersecurity and optimization package for home and business users. It provides advanced malware protection, ransomware defense, and automated PC maintenance to enhance system performance. With real-time whitelisting technology, it blocks unknown threats before they can cause harm. PC Matic Ultimate includes a secure VPN for private and anonymous browsing. Ideal for users who want an all-in-one security and performance solution.",
            "price": "99.99",
            "originalPrice": "129.99",
            "discountedPrice": "99.99",
            "category": [""],
            "img": "https://res.cloudinary.com/dcf3mojai/image/upload/v1738340505/pc-matic-kit-removebg-preview_zekzbt.png",
            "route": "/antvirus/pcmatic/pc-matic-ultimate",
            "specifications": {
              "Operating System": "Windows 7, Windows 8, Windows 10, Windows 11",
              "Memory (RAM)": "4 GB",
              "Platform": "Windows",
              "CPU": "Intel Core i5 (2.3 GHz) or equivalent processor",
              "Storage": "1.5 GB of free disk space",
              "Internet Connection": "Required for activation, updates, and VPN"
            }
          },
          {
            "id": "503",
            "name": "PC Matic Business",
            "desc": "PC Matic Business is a cloud-based cybersecurity solution designed for small and large enterprises. It includes real-time endpoint protection, ransomware prevention, and automated system maintenance. The software features remote management tools, allowing IT administrators to monitor and secure devices from a single dashboard. PC Matic Business ensures maximum security while keeping system resources optimized, making it the perfect solution for businesses seeking reliable cybersecurity.",
            "price": "129.99",
            "originalPrice": "149.99",
            "category": ["best-seller"],
            "discountedPrice": "129.99",
            "img": "https://res.cloudinary.com/dcf3mojai/image/upload/v1738340666/PCMaticPRO-Small-Business_ujmhbw.jpg",
            "route": "/antvirus/pcmatic/pc-matic-business",
            "specifications": {
              "Operating System": "Windows 7, Windows 8, Windows 10, Windows 11",
              "Memory (RAM)": "4 GB",
              "Platform": "Windows",
              "CPU": "Intel Core i5 (2.3 GHz) or equivalent processor",
              "Storage": "2 GB of free disk space",
              "Internet Connection": "Required for activation, remote management, and real-time cloud updates"
            }
          }
        ],
          "TrendMicro": [
            {
              "id": "701",
              "name": "Trend Micro Antivirus+",
              "desc": "Trend Micro Antivirus+ is an essential security solution designed to protect your PC against viruses, malware, ransomware, and phishing scams. It features advanced AI-driven threat detection that stops cyber threats in real-time. The software includes web filtering to block dangerous websites and an intelligent firewall to prevent unauthorized access. With automatic updates, your system remains protected against the latest threats. Ideal for users who need basic yet powerful security for their personal computers.",
              "price": "59.99",
              "originalPrice": "69.99",
              "discountedPrice": "59.99",
              "img": "https://res.cloudinary.com/dcf3mojai/image/upload/v1738592861/box-antivirus-plus_o6mvqa.png",
              "route": "/antivirus/trendmicro/trendmicro-antivirus-plus",
              "specifications": {
                "Operating System": "Windows 7, Windows 8, Windows 10, Windows 11",
                "Memory (RAM)": "2 GB",
                "Platform": "Windows",
                "CPU": "Intel Core 2 Duo (2 GHz) or equivalent processor",
                "Storage": "1 GB of free disk space",
                "Internet Connection": "Required for activation and real-time scanning"
              }
            },
            {
              "id": "702",
              "name": "Trend Micro Internet Security",
              "desc": "Trend Micro Internet Security provides multi-layered protection against cyber threats, offering powerful malware and ransomware defense. It includes advanced parental controls, identity theft prevention, and anti-phishing tools to safeguard your personal and financial information. The software enhances online privacy with secure browsing features and protects emails from malicious attachments. Designed for families and individuals, it ensures safe browsing, banking, and shopping experiences.",
              "price": "79.99",
              "originalPrice": "89.99",
              "discountedPrice": "79.99",
              "img": "https://res.cloudinary.com/dcf3mojai/image/upload/v1738593004/trend-micro-original-imafpht9pfw8hecs_bqawcw.jpg",
              "route": "/antivirus/trendmicro/trendmicro-internet-security",
              "specifications": {
                "Operating System": "Windows 7, Windows 8, Windows 10, Windows 11",
                "Memory (RAM)": "4 GB",
                "Platform": "Windows",
                "CPU": "Intel Core i3 (2 GHz) or equivalent processor",
                "Storage": "1.5 GB of free disk space",
                "Internet Connection": "Required for activation, updates, and parental controls"
              }
            },
            {
              "id": "703",
              "name": "Trend Micro Maximum Security",
              "desc": "Trend Micro Maximum Security is a comprehensive cybersecurity suite that protects multiple devices, including Windows, Mac, Android, and iOS. It features AI-powered threat detection, a built-in VPN for private browsing, and dark web monitoring for identity theft prevention. The software includes a password manager, secure browser, and system optimizer for enhanced performance. With coverage for multiple devices, it is the perfect choice for families and professionals looking for robust digital security.",
              "price": "99.99",
              "originalPrice": "119.99",
              "discountedPrice": "99.99",
              "category": ["best-seller",""],
              "img": "https://res.cloudinary.com/dcf3mojai/image/upload/v1738593055/box-maximum-security_uspgbq.png",
              "route": "/antivirus/trendmicro/trendmicro-maximum-security",
              "specifications": {
                "Operating System": "Windows 7, Windows 8, Windows 10, Windows 11, macOS 10.12 or later",
                "Memory (RAM)": "4 GB",
                "Platform": "Windows, macOS, Android, iOS",
                "CPU": "Intel Core i5 (2.3 GHz) or equivalent processor",
                "Storage": "2 GB of free disk space",
                "Internet Connection": "Required for activation, VPN, and dark web monitoring"
              }
            }
          ],
            "BullGuard": [
              {
                "id": "801",
                "name": "BullGuard Antivirus",
                "desc": "BullGuard Antivirus provides powerful protection against viruses, malware, ransomware, and spyware. It features real-time threat detection using next-gen AI-driven security, ensuring that your device is protected from both known and emerging threats. The software includes advanced behavioral detection that analyzes suspicious activities before they can cause harm. With a built-in Game Booster, BullGuard Antivirus optimizes system performance for gamers by reducing lag and improving frame rates. This is an excellent choice for users who need strong yet lightweight security.",
                "price": "59.99",
                "originalPrice": "69.99",
                "discountedPrice": "59.99",
                "img": "https://res.cloudinary.com/dcf3mojai/image/upload/v1738590736/bullguard-antivirus-500x500-removebg-preview_wgc4er.png",
                "route": "/antivirus/bullguard/bullguard-antivirus",
                "specifications": {
                  "Operating System": "Windows 7, Windows 8, Windows 10, Windows 11",
                  "Memory (RAM)": "2 GB",
                  "Platform": "Windows",
                  "CPU": "Intel Core 2 Duo (2 GHz) or equivalent processor",
                  "Storage": "1.5 GB of free disk space",
                  "Internet Connection": "Required for activation and updates"
                }
              },
              {
                "id": "802",
                "name": "BullGuard Internet Security",
                "desc": "BullGuard Internet Security offers complete protection for your online activities, ensuring safe browsing, banking, and shopping. It includes a multi-layered firewall that blocks unauthorized access to your network, keeping hackers at bay. The software provides anti-ransomware technology, parental controls, and phishing protection to prevent fraud and data theft. BullGuard’s Game Booster optimizes system performance for uninterrupted gaming. With multi-device compatibility, it allows users to protect their PCs, Macs, and Android devices under a single subscription.",
                "price": "79.99",
                "originalPrice": "89.99",
                "discountedPrice": "79.99",
                "img": "https://res.cloudinary.com/dcf3mojai/image/upload/v1738590813/SWBUL-V13-ISRB-lg_2-removebg-preview_geweqw.png",
                "route": "/antivirus/bullguard/bullguard-internet-security",
                "specifications": {
                  "Operating System": "Windows 7, Windows 8, Windows 10, Windows 11",
                  "Memory (RAM)": "4 GB",
                  "Platform": "Windows, macOS, Android",
                  "CPU": "Intel Core i3 (2 GHz) or equivalent processor",
                  "Storage": "2 GB of free disk space",
                  "Internet Connection": "Required for activation, updates, and parental controls"
                }
              },
              {
                "id": "803",
                "name": "BullGuard Premium Protection",
                "desc": "BullGuard Premium Protection is the ultimate security suite, providing full protection for your devices and personal identity. It includes a secure browser for safe online transactions, identity theft protection, and cloud-integrated antivirus to detect and eliminate threats in real time. The software offers advanced home network scanning to detect vulnerabilities in connected devices. With BullGuard’s Game Booster, users can enjoy a seamless gaming experience without interruptions. This comprehensive security package is ideal for families and professionals who need top-tier protection for multiple devices.",
                "price": "99.99",
                "originalPrice": "119.99",
                "discountedPrice": "99.99",
                "category": ["best-seller",""],
                "img": "https://res.cloudinary.com/dcf3mojai/image/upload/v1738590948/74318095-removebg-preview_mul1to.png",
                "route": "/antivirus/bullguard/bullguard-premium-protection",
                "specifications": {
                  "Operating System": "Windows 7, Windows 8, Windows 10, Windows 11, macOS 10.12 or later",
                  "Memory (RAM)": "4 GB",
                  "Platform": "Windows, macOS, Android",
                  "CPU": "Intel Core i5 (2.3 GHz) or equivalent processor",
                  "Storage": "2 GB of free disk space",
                  "Internet Connection": "Required for activation, identity protection, and home network security"
                }
              }
            ],
            "Windows7": [
  {
    "id": "901",
    "name": "Windows 7 Home Premium",
    "desc": "Windows 7 Home Premium is designed for home users, offering a sleek interface, enhanced performance, and entertainment features like Windows Media Center. It supports Aero themes, Snap feature, and advanced security to protect your data.",
    "price": "79.99",
    "originalPrice": "99.99",
    "discountedPrice": "79.99",
    "img": "https://res.cloudinary.com/dcf3mojai/image/upload/v1738671350/61Wh9rpIXgL._AC_UF1000_1000_QL80__uqpgst.jpg",
    "route": "/windows/windows7/home-premium",
    "specifications": {
      "Operating System": "Windows 7 (32-bit & 64-bit)",
      "Memory (RAM)": "2 GB (64-bit) / 1 GB (32-bit)",
      "CPU": "1 GHz or faster",
      "Storage": "20 GB (64-bit) / 16 GB (32-bit) of free disk space",
      "Graphics": "DirectX 9 with WDDM 1.0 driver"
    }
  },
  {
    "id": "902",
    "name": "Windows 7 Professional",
    "desc": "Windows 7 Professional is ideal for business and advanced users, featuring Windows XP Mode, domain join, automatic backups, and network encryption. It’s perfect for professionals who need enhanced security and networking capabilities.",
    "price": "99.99",
    "originalPrice": "129.99",
    "discountedPrice": "99.99",
    "img": "https://res.cloudinary.com/dcf3mojai/image/upload/v1738671417/windows-7-pro-license-keys-500x500_zaon3d.png",
    "route": "/windows/windows7/professional",
    "specifications": {
      "Operating System": "Windows 7 (32-bit & 64-bit)",
      "Memory (RAM)": "4 GB (64-bit) / 2 GB (32-bit)",
      "CPU": "1 GHz or faster",
      "Storage": "20 GB (64-bit) / 16 GB (32-bit) of free disk space",
      "Graphics": "DirectX 9 with WDDM 1.0 driver"
    }
  },
  {
    "id": "903",
    "name": "Windows 7 Ultimate",
    "desc": "Windows 7 Ultimate is the most powerful edition, combining the features of Home Premium and Professional with additional BitLocker encryption, multi-language support, and Virtual Hard Disk (VHD) booting.",
    "price": "129.99",
    "originalPrice": "149.99",
    "discountedPrice": "129.99",
    "category": ["top-rated"],
    "img": "https://res.cloudinary.com/dcf3mojai/image/upload/v1738671477/microsoft-windows-7-windows-7-ultimate-32-64-bit-full-pack-original-imadcacgtkzmsj3a_j6ibrb.jpg",
    "route": "/windows/windows7/ultimate",
    "specifications": {
      "Operating System": "Windows 7 (32-bit & 64-bit)",
      "Memory (RAM)": "4 GB (64-bit) / 2 GB (32-bit)",
      "CPU": "1 GHz or faster",
      "Storage": "20 GB (64-bit) / 16 GB (32-bit) of free disk space",
      "Graphics": "DirectX 9 with WDDM 1.0 driver"
    }
  },
  {
    "id": "905",
    "name": "Windows 7 Enterprise",
    "desc": "Windows 7 Enterprise is designed for corporate environments, offering BitLocker security, DirectAccess, and enhanced virtualization support. It's great for IT professionals managing large-scale business operations.",
    "price": "149.99",
    "originalPrice": "179.99",
    "discountedPrice": "149.99",
    "img": "https://res.cloudinary.com/dcf3mojai/image/upload/v1738671581/win-7-ent-card_pcgsvh.png",
    "route": "/windows/windows7/enterprise",
    "specifications": {
      "Operating System": "Windows 7 (32-bit & 64-bit)",
      "Memory (RAM)": "4 GB (64-bit) / 2 GB (32-bit)",
      "CPU": "1 GHz or faster",
      "Storage": "20 GB (64-bit) / 16 GB (32-bit) of free disk space",
      "Graphics": "DirectX 9 with WDDM 1.0 driver"
    }
  },
],
"Windows8": [
  {
    "id": "1001",
    "name": "Windows 8 Home",
    "desc": "Windows 8 Home is designed for everyday users, offering a modern interface with the Start Screen, fast boot times, and built-in security features. Perfect for home and personal use.",
    "price": "89.99",
    "originalPrice": "109.99",
    "discountedPrice": "89.99",
    "img": "https://res.cloudinary.com/dcf3mojai/image/upload/v1738672301/microsoft-500x500_dwms9a.png",
    "route": "/windows/windows8/home",
    "specifications": {
      "Operating System": "Windows 8 (32-bit & 64-bit)",
      "Memory (RAM)": "2 GB (64-bit) / 1 GB (32-bit)",
      "CPU": "1 GHz or faster",
      "Storage": "20 GB (64-bit) / 16 GB (32-bit) of free disk space",
      "Graphics": "DirectX 9 with WDDM 1.0 driver"
    }
  },
  {
    "id": "1002",
    "name": "Windows 8 Pro",
    "desc": "Windows 8 Pro includes all features of Windows 8 Home with additional support for BitLocker encryption, domain networking, and advanced security features. Ideal for professionals and businesses.",
    "price": "119.99",
    "originalPrice": "139.99",
    "discountedPrice": "119.99",
    "category": ["top-rated"],
    "img": "https://res.cloudinary.com/dcf3mojai/image/upload/v1738672388/win10-pro-8.1_xxnayg.jpg",
    "route": "/windows/windows8/pro",
    "specifications": {
      "Operating System": "Windows 8 (32-bit & 64-bit)",
      "Memory (RAM)": "4 GB (64-bit) / 2 GB (32-bit)",
      "CPU": "1 GHz or faster",
      "Storage": "20 GB (64-bit) / 16 GB (32-bit) of free disk space",
      "Graphics": "DirectX 9 with WDDM 1.0 driver"
    }
  },
  {
    "id": "1003",
    "name": "Windows 8 Enterprise",
    "desc": "Windows 8 Enterprise is designed for corporate environments, offering enterprise-level security, DirectAccess, and enhanced virtualization support. A great choice for IT professionals managing business operations.",
    "price": "149.99",
    "originalPrice": "179.99",
    "discountedPrice": "149.99",
    "img": "https://res.cloudinary.com/dcf3mojai/image/upload/v1738672757/Windows-8.1-Enterprise_z2mx77.jpg",
    "route": "/windows/windows8/enterprise",
    "specifications": {
      "Operating System": "Windows 8 (32-bit & 64-bit)",
      "Memory (RAM)": "4 GB (64-bit) / 2 GB (32-bit)",
      "CPU": "1 GHz or faster",
      "Storage": "20 GB (64-bit) / 16 GB (32-bit) of free disk space",
      "Graphics": "DirectX 9 with WDDM 1.0 driver"
    }
  },
  {
    "id": "1004",
    "name": "Windows 8 Professional",
    "desc": "Windows 8 Professional includes all the features of Windows 8 Home with additional support for BitLocker encryption, domain networking, and advanced security tools. Ideal for business and professional users who need enhanced performance and security.",
    "price": "119.99",
    "originalPrice": "139.99",
    "discountedPrice": "119.99",
    "category": ["top-rated"],
    "img": "https://res.cloudinary.com/dcf3mojai/image/upload/v1738672639/microsoft-windows-8-1-pro-500x500_ry9st7.png",
    "route": "/windows/windows8/professional",
    "specifications": {
      "Operating System": "Windows 8 (32-bit & 64-bit)",
      "Memory (RAM)": "4 GB (64-bit) / 2 GB (32-bit)",
      "CPU": "1 GHz or faster",
      "Storage": "20 GB (64-bit) / 16 GB (32-bit) of free disk space",
      "Graphics": "DirectX 9 with WDDM 1.0 driver"
    }
  }
  
],
"Windowsxp": [
  {
    "id": "1101",
    "name": "Windows XP Home Edition",
    "desc": "Windows XP Home Edition is designed for personal and home users, featuring a user-friendly interface, fast boot times, and basic networking capabilities. It provides essential security and system stability.",
    "price": "49.99",
    "originalPrice": "69.99",
    "discountedPrice": "49.99",
    "img": "https://res.cloudinary.com/dcf3mojai/image/upload/v1738672889/xp_home-angle_641943808_pv97uz.png",
    "route": "/windows/windowsxp/home",
    "specifications": {
      "Operating System": "Windows XP (32-bit)",
      "Memory (RAM)": "512 MB",
      "CPU": "233 MHz processor or faster",
      "Storage": "1.5 GB of free disk space",
      "Graphics": "Super VGA (800x600) or higher"
    }
  },
  {
    "id": "1102",
    "name": "Windows XP Professional",
    "desc": "Windows XP Professional includes all features of Home Edition with additional support for domain networking, Remote Desktop, and advanced security tools. Ideal for business and professional users.",
    "price": "79.99",
    "originalPrice": "99.99",
    "discountedPrice": "79.99",
    "img": "https://res.cloudinary.com/dcf3mojai/image/upload/v1738673076/635c1367b87d2803496dcfbd-microsoft-windows-xp-professional-old_dejngs.jpg",
    "route": "/windows/windowsxp/pro",
    "specifications": {
      "Operating System": "Windows XP (32-bit)",
      "Memory (RAM)": "1 GB",
      "CPU": "300 MHz processor or faster",
      "Storage": "1.5 GB of free disk space",
      "Graphics": "Super VGA (800x600) or higher"
    }
  },
  {
    "id": "1103",
    "name": "Windows XP Professional SP3",
    "desc": "Windows XP Professional SP3 (Service Pack 3) includes security updates, stability improvements, and performance optimizations. It remains a preferred choice for legacy applications and older hardware.",
    "price": "99.99",
    "originalPrice": "129.99",
    "discountedPrice": "99.99",
    "category": ["top-rated"],
    "img": "https://res.cloudinary.com/dcf3mojai/image/upload/v1738673403/Windows-XP-SP3-ISO-Full-Version-Free-Download_ghdeke.jpg",
    "route": "/windows/windowsxp/sp3",
    "specifications": {
      "Operating System": "Windows XP (32-bit)",
      "Memory (RAM)": "1 GB",
      "CPU": "300 MHz processor or faster",
      "Storage": "1.5 GB of free disk space",
      "Graphics": "Super VGA (800x600) or higher"
    }
  },
],
"hp": [
  {
    "id": "2101",
    "name": "HP LaserJet Pro MFP M227fdw",
    "desc": "A high-performance monochrome laser printer with wireless printing, duplex printing, and fast scanning capabilities. Ideal for small offices.",
    "price": "249.99",
    "originalPrice": "299.99",
    "discountedPrice": "249.99",
    "category": ["top-rated"],
    "img": "https://res.cloudinary.com/dcf3mojai/image/upload/v1738939098/c05288908_uzxkdi.png",
    "route": "/printer/hp-laserjet-pro-mfp-m227fdw",
    "specifications": {
      "Printing Technology": "Laser",
      "Print Speed": "30 ppm",
      "Resolution": "1200 x 1200 dpi",
      "Connectivity": "Wi-Fi, USB, Ethernet",
      "Paper Capacity": "250 sheets"
    }
  },
  {
    "id": "2102",
    "name": "HP OfficeJet Pro 9025e",
    "desc": "A versatile color inkjet printer with automatic document feeder, mobile printing, and smart app integration. Perfect for business users.",
    "price": "179.99",
    "originalPrice": "229.99",
    "discountedPrice": "179.99",
    "img": "https://res.cloudinary.com/dcf3mojai/image/upload/v1738939155/c07776182_dlojyx.png",
    "route": "/printer/hp-officejet-pro-9025e",
    "specifications": {
      "Printing Technology": "Inkjet",
      "Print Speed": "24 ppm (black), 20 ppm (color)",
      "Resolution": "4800 x 1200 dpi",
      "Connectivity": "Wi-Fi, USB, Ethernet, Bluetooth",
      "Paper Capacity": "500 sheets"
    }
  },
  {
    "id": "2103",
    "name": "HP DeskJet 3755",
    "desc": "A compact and affordable all-in-one printer for home use, featuring wireless printing and a stylish design.",
    "price": "99.99",
    "originalPrice": "129.99",
    "discountedPrice": "99.99",
    "img": "https://res.cloudinary.com/dcf3mojai/image/upload/v1738939893/c05154256_rnyngl.png",
    "route": "/printer/hp-deskjet-3755",
    "specifications": {
      "Printing Technology": "Inkjet",
      "Print Speed": "8 ppm (black), 5.5 ppm (color)",
      "Resolution": "4800 x 1200 dpi",
      "Connectivity": "Wi-Fi, USB",
      "Paper Capacity": "60 sheets"
    }
  }
],
"canon": [
  {
    "id": "2201",
    "name": "Canon PIXMA TR8620a",
    "desc": "A compact all-in-one inkjet printer with auto-duplex printing, wireless connectivity, and an intuitive touchscreen display.",
    "price": "199.99",
    "originalPrice": "249.99",
    "discountedPrice": "199.99",
    "category": ["top-rated"],
    "img": "https://res.cloudinary.com/dcf3mojai/image/upload/v1738940711/TR8620_580_580_02_rs47gy.png",
    "route": "/printer/canon-pixma-tr8620a",
    "specifications": {
      "Printing Technology": "Inkjet",
      "Print Speed": "15 ppm (black), 10 ppm (color)",
      "Resolution": "4800 x 1200 dpi",
      "Connectivity": "Wi-Fi, USB, Bluetooth",
      "Paper Capacity": "200 sheets"
    }
  },
  {
    "id": "2202",
    "name": "Canon imageCLASS MF743Cdw",
    "desc": "A powerful color laser printer with high-speed printing, scan-to-cloud functionality, and secure document management.",
    "price": "549.99",
    "originalPrice": "649.99",
    "discountedPrice": "549.99",
    "img": "https://res.cloudinary.com/dcf3mojai/image/upload/v1738940776/399649-all-in-one-color-laser-printers-canon-color-imageclass-mf743cdw-10009552_re76a7.png",
    "route": "/printer/canon-imageclass-mf743cdw",
    "specifications": {
      "Printing Technology": "Laser",
      "Print Speed": "28 ppm",
      "Resolution": "600 x 600 dpi",
      "Connectivity": "Wi-Fi, USB, Ethernet",
      "Paper Capacity": "300 sheets"
    }
  },
  {
    "id": "2203",
    "name": "Canon SELPHY CP1300",
    "desc": "A portable photo printer with Wi-Fi connectivity, high-quality prints, and easy mobile printing options.",
    "price": "139.99",
    "originalPrice": "179.99",
    "discountedPrice": "139.99",
    "img": "https://www.canon.ca/dam/products/BUSINESS-UNIT/ITCG/Printers-all-in-one/Selphy-CP1300/Canon_Selphy-CP1300_Side_BLACK_580X580.png",
    "route": "/printer/canon-selphy-cp1300",
    "specifications": {
      "Printing Technology": "Dye-Sublimation",
      "Print Speed": "47 seconds per print",
      "Resolution": "300 x 300 dpi",
      "Connectivity": "Wi-Fi, USB",
      "Paper Capacity": "18 sheets"
    }
  }
],
    "epson": [
  {
    "id": "2301",
    "name": "Epson EcoTank ET-4760",
    "desc": "A cost-effective inkjet printer with refillable ink tanks, wireless connectivity, and high-volume printing.",
    "price": "399.99",
    "originalPrice": "449.99",
    "discountedPrice": "399.99",
    "category": ["top-rated"],
    "img": "https://res.cloudinary.com/dcf3mojai/image/upload/v1738941195/06ZcqLgdazrqbaxrpv3wZEr-1..v1569469957-removebg-preview_vnnh8j.png",
    "route": "/printer/epson-ecotank-et-4760",
    "specifications": {
      "Printing Technology": "Inkjet",
      "Print Speed": "15 ppm (black), 8 ppm (color)",
      "Resolution": "4800 x 1200 dpi",
      "Connectivity": "Wi-Fi, USB, Ethernet",
      "Paper Capacity": "250 sheets"
    }
  },
  {
    "id": "2302",
    "name": "Epson WorkForce Pro WF-7820",
    "desc": "A wide-format printer designed for businesses, offering high-speed printing, duplex scanning, and wireless connectivity.",
    "price": "299.99",
    "originalPrice": "349.99",
    "discountedPrice": "299.99",
    "img": "https://res.cloudinary.com/dcf3mojai/image/upload/v1738941296/1200Wx1200H-removebg-preview_mtfevn.png",
    "route": "/printer/epson-workforce-pro-wf-7820",
    "specifications": {
      "Printing Technology": "Inkjet",
      "Print Speed": "25 ppm (black), 12 ppm (color)",
      "Resolution": "4800 x 2400 dpi",
      "Connectivity": "Wi-Fi, USB, Ethernet",
      "Paper Capacity": "500 sheets"
    }
  },
  {
    "id": "2303",
    "name": "Epson SureColor P600",
    "desc": "A professional photo printer with ultra-high resolution, fine-art media support, and advanced color control.",
    "price": "799.99",
    "originalPrice": "899.99",
    "discountedPrice": "799.99",
    "category": ["top-rated"],
    "img": "https://res.cloudinary.com/dcf3mojai/image/upload/v1738941377/epson_c11ce21201_surecolor_p600_inkjet_printer_1418655906000_1091547-removebg-preview_v9mcmt.png",
    "route": "/printer/epson-surecolor-p600",
    "specifications": {
      "Printing Technology": "Inkjet",
      "Print Speed": "6 ppm (black), 5 ppm (color)",
      "Resolution": "5760 x 1440 dpi",
      "Connectivity": "Wi-Fi, USB, Ethernet",
      "Paper Capacity": "120 sheets"
    }
  }
],
"netgear": [
  {
    "id": "3101",
    "name": "Netgear Nighthawk AX12",
    "desc": "A high-performance Wi-Fi 6 router with ultra-fast speeds, ideal for gaming and streaming.",
    "price": "399.99",
    "originalPrice": "449.99",
    "discountedPrice": "399.99",
    "img": "https://res.cloudinary.com/dcf3mojai/image/upload/v1740581823/RAX120_tech_specs_image_1_tcm148-96350_sbodfu.png",
    "route": "/router/netgear/netgear-nighthawk-ax12",
    "specifications": {
      "Wi-Fi Standard": "Wi-Fi 6 (802.11ax)",
      "Speed": "Up to 6 Gbps",
      "Connectivity": "4x Gigabit Ethernet, 2x USB 3.0",
      "Coverage": "Up to 3,500 sq. ft.",
      "Security": "WPA3, VPN support"
    }
  },
  {
    "id": "3102",
    "name": "Netgear Orbi RBK752",
    "desc": "A mesh Wi-Fi system designed for seamless whole-home coverage with high-speed connectivity.",
    "price": "299.99",
    "originalPrice": "349.99",
    "discountedPrice": "299.99",
    "category": ["top-rated"],
    "img": "https://res.cloudinary.com/dcf3mojai/image/upload/v1740581883/B1_CBK752_32_tcm148-139315_nhzhr1.png",
    "route": "/router/netgear/netgear-orbi-rbk752",
    "specifications": {
      "Wi-Fi Standard": "Wi-Fi 6 (802.11ax)",
      "Speed": "Up to 4.2 Gbps",
      "Coverage": "Up to 5,000 sq. ft.",
      "Connectivity": "3x Gigabit Ethernet ports per unit",
      "Security": "Netgear Armor, WPA3"
    }
  },
  {
    "id": "3103",
    "name": "Netgear Nighthawk RAX200",
    "desc": "A tri-band Wi-Fi 6 router with blazing-fast speeds for 4K/8K streaming and gaming.",
    "price": "499.99",
    "originalPrice": "549.99",
    "discountedPrice": "499.99",
    "img": "https://res.cloudinary.com/dcf3mojai/image/upload/v1740582250/Tech-Specs-Image-1_tcm159-96416_jgqpzh.png",
    "route": "/router/netgear/netgear-nighthawk-rax200",
    "specifications": {
      "Wi-Fi Standard": "Wi-Fi 6 (802.11ax)",
      "Speed": "Up to 10.8 Gbps",
      "Connectivity": "5x Gigabit Ethernet, 2x USB 3.0",
      "Coverage": "Up to 3,500 sq. ft.",
      "Security": "WPA3, VPN, Netgear Armor"
    }
  }
],
"tplink": [
  {
    "id": "4101",
    "name": "TP-Link Archer AX6000",
    "desc": "A high-speed Wi-Fi 6 router with ultra-low latency, ideal for gaming and streaming.",
    "price": "279.99",
    "originalPrice": "329.99",
    "discountedPrice": "279.99",
    "category": ["top-rated"],
    "img": "https://res.cloudinary.com/dcf3mojai/image/upload/v1740582855/images_kmuc2c.jpg",
    "route": "/router/tplink/tp-link-archer-ax6000",
    "specifications": {
      "Wi-Fi Standard": "Wi-Fi 6 (802.11ax)",
      "Speed": "Up to 6 Gbps",
      "Connectivity": "8x Gigabit Ethernet, 2x USB 3.0",
      "Coverage": "Up to 3,500 sq. ft.",
      "Security": "WPA3, HomeCare"
    }
  },
  {
    "id": "4102",
    "name": "TP-Link Deco X90",
    "desc": "A tri-band mesh Wi-Fi 6 system offering seamless whole-home coverage and fast speeds.",
    "price": "449.99",
    "originalPrice": "499.99",
    "discountedPrice": "449.99",
    "img": "https://res.cloudinary.com/dcf3mojai/image/upload/v1740582944/41ncMQ5K3TL._AC_UF894_1000_QL80__bmjusn.jpg",
    "route": "/router/tplink/tp-link-deco-x90",
    "specifications": {
      "Wi-Fi Standard": "Wi-Fi 6 (802.11ax)",
      "Speed": "Up to 6.6 Gbps",
      "Coverage": "Up to 6,000 sq. ft.",
      "Connectivity": "2x Gigabit Ethernet ports per unit",
      "Security": "WPA3, TP-Link HomeShield"
    }
  },
  {
    "id": "4103",
    "name": "TP-Link Archer C4000",
    "desc": "A tri-band gigabit router with MU-MIMO and beamforming for lag-free gaming and 4K streaming.",
    "price": "199.99",
    "originalPrice": "249.99",
    "discountedPrice": "199.99",
    "img": "https://res.cloudinary.com/dcf3mojai/image/upload/v1740583056/archer-c5400-un-2-0-01-1472010274739s-500x500_uifeky.jpg",
    "route": "/router/tplink/tp-link-archer-c4000",
    "specifications": {
      "Wi-Fi Standard": "Wi-Fi 5 (802.11ac)",
      "Speed": "Up to 4 Gbps",
      "Connectivity": "4x Gigabit Ethernet, 2x USB 3.0",
      "Coverage": "Up to 2,500 sq. ft.",
      "Security": "WPA3, VPN support"
    }
  }
],
"asus": [
  {
    "id": "5101",
    "name": "ASUS ROG Rapture GT-AX11000",
    "desc": "A tri-band Wi-Fi 6 gaming router with ultra-fast speeds, low latency, and advanced security features.",
    "price": "399.99",
    "originalPrice": "449.99",
    "discountedPrice": "399.99",
    "category": ["top-rated"],
    "img": "https://res.cloudinary.com/dcf3mojai/image/upload/v1740583490/h525_ywbiag.png",
    "route": "/router/asus/asus-rog-rapture-gt-ax11000",
    "specifications": {
      "Wi-Fi Standard": "Wi-Fi 6 (802.11ax)",
      "Speed": "Up to 11 Gbps",
      "Connectivity": "4x Gigabit LAN, 2.5G WAN, USB 3.0",
      "Coverage": "Up to 5,000 sq. ft.",
      "Security": "AiProtection Pro, WPA3"
    }
  },
  {
    "id": "5102",
    "name": "ASUS RT-AX88U",
    "desc": "A dual-band Wi-Fi 6 router with ultra-fast speeds and robust security, ideal for smart homes.",
    "price": "299.99",
    "originalPrice": "349.99",
    "discountedPrice": "299.99",
    "img": "https://res.cloudinary.com/dcf3mojai/image/upload/v1740583527/P_setting_xxx_0_90_end_692_affmdq.png",
    "route": "/router/asus/asus-rt-ax88u",
    "specifications": {
      "Wi-Fi Standard": "Wi-Fi 6 (802.11ax)",
      "Speed": "Up to 6 Gbps",
      "Connectivity": "8x Gigabit LAN, USB 3.1",
      "Coverage": "Up to 3,500 sq. ft.",
      "Security": "AiProtection Pro, WPA3"
    }
  },
  {
    "id": "5103",
    "name": "ASUS ZenWiFi AX XT8",
    "desc": "A whole-home mesh Wi-Fi 6 system offering seamless, high-speed connectivity with a sleek design.",
    "price": "449.99",
    "originalPrice": "499.99",
    "discountedPrice": "449.99",
    "img": "https://res.cloudinary.com/dcf3mojai/image/upload/v1740583559/7f13a5e5-f4f3-4bff-88cb-20177b74dba8_m970wg.png",
    "route": "/router/asus/asus-zenwifi-ax-xt8",
    "specifications": {
      "Wi-Fi Standard": "Wi-Fi 6 (802.11ax)",
      "Speed": "Up to 6.6 Gbps",
      "Coverage": "Up to 5,500 sq. ft.",
      "Connectivity": "3x Gigabit LAN, 2.5G WAN, USB 3.1",
      "Security": "AiProtection Pro, WPA3"
    }
  }
],
"dlink": [
  {
    "id": "6101",
    "name": "D-Link DIR-X5460",
    "desc": "A powerful Wi-Fi 6 router with dual-band speeds, MU-MIMO technology, and robust security features.",
    "price": "199.99",
    "originalPrice": "249.99",
    "discountedPrice": "199.99",
    "img": "https://res.cloudinary.com/dcf3mojai/image/upload/v1740583732/DIR-X5460_kmautf.png",
    "route": "/router/dlink/d-link-dir-x5460",
    "specifications": {
      "Wi-Fi Standard": "Wi-Fi 6 (802.11ax)",
      "Speed": "Up to 5.4 Gbps",
      "Connectivity": "4x Gigabit LAN, USB 3.0",
      "Coverage": "Up to 3,000 sq. ft.",
      "Security": "WPA3, Firewall, Parental Controls"
    }
  },
  {
    "id": "6102",
    "name": "D-Link EXO AC3000 (DIR-3060)",
    "desc": "A tri-band smart mesh router with fast speeds, McAfee security, and advanced parental controls.",
    "price": "179.99",
    "originalPrice": "229.99",
    "discountedPrice": "179.99",
    "img": "https://res.cloudinary.com/dcf3mojai/image/upload/v1740583765/dir_3060_front_j6rsqt.png",
    "route": "/router/dlink/d-link-exo-ac3000-dir-3060",
    "specifications": {
      "Wi-Fi Standard": "Wi-Fi 5 (802.11ac)",
      "Speed": "Up to 3 Gbps",
      "Connectivity": "4x Gigabit LAN, USB 3.0",
      "Coverage": "Up to 2,500 sq. ft.",
      "Security": "McAfee Protection, WPA3"
    }
  },
  {
    "id": "6103",
    "name": "D-Link COVR-1102 Mesh Wi-Fi System",
    "desc": "A whole-home mesh Wi-Fi system with seamless roaming, dual-band performance, and simple setup.",
    "price": "159.99",
    "originalPrice": "199.99",
    "discountedPrice": "159.99",
    "img": "https://res.cloudinary.com/dcf3mojai/image/upload/v1740583839/covr_1100_a1_sideright_izlvgk.png",
    "route": "/router/dlink/d-link-covr-1102-mesh-wi-fi-system",
    "specifications": {
      "Wi-Fi Standard": "Wi-Fi 5 (802.11ac)",
      "Speed": "Up to 1.2 Gbps",
      "Coverage": "Up to 3,500 sq. ft.",
      "Connectivity": "2x Gigabit LAN per unit",
      "Security": "WPA3, Guest Wi-Fi, Parental Controls"
    }
  }
],
"cisco": [
  {
    "id": "7101",
    "name": "Cisco RV340 Dual WAN Gigabit Router",
    "desc": "A business-class router with dual WAN, VPN support, and robust security features for small offices.",
    "price": "299.99",
    "originalPrice": "349.99",
    "discountedPrice": "299.99",
    "img": "https://res.cloudinary.com/dcf3mojai/image/upload/v1740584121/2020110516291643514_1_lkdbqy.jpg",
    "route": "/router/cisco/cisco-rv340-dual-wan-gigabit-router",
    "specifications": {
      "WAN Ports": "2x Gigabit WAN",
      "LAN Ports": "4x Gigabit LAN",
      "VPN": "50 IPsec VPN tunnels",
      "Security": "Firewall, Content Filtering",
      "Speed": "Up to 1 Gbps"
    }
  },
  {
    "id": "7102",
    "name": "Cisco RV260P VPN Router",
    "desc": "A high-performance VPN router with Power over Ethernet (PoE) support and advanced security features.",
    "price": "229.99",
    "originalPrice": "279.99",
    "discountedPrice": "229.99",
    "img": "https://res.cloudinary.com/dcf3mojai/image/upload/v1740584194/cisco-rv260p-vpn-router_xjlolj.jpg",
    "route": "/router/cisco/cisco-rv260p-vpn-router",
    "specifications": {
      "WAN Ports": "1x Gigabit WAN",
      "LAN Ports": "8x Gigabit LAN (4x PoE)",
      "VPN": "IPsec, OpenVPN, SSL VPN",
      "Security": "Firewall, VLAN, Intrusion Prevention",
      "PoE Support": "Up to 30W per port"
    }
  },
  {
    "id": "7103",
    "name": "Cisco Meraki MX64 Cloud-Managed Router",
    "desc": "A cloud-managed security appliance with built-in firewall, VPN, and traffic shaping for SMBs.",
    "price": "399.99",
    "originalPrice": "449.99",
    "discountedPrice": "399.99",
    "category": ["top-rated"],
    "img": "https://res.cloudinary.com/dcf3mojai/image/upload/v1740584253/untitled-1-20-500x500_xwmmbd.jpg",
    "route": "/router/cisco/cisco-meraki-mx64-cloud-managed-router",
    "specifications": {
      "WAN Ports": "1x Gigabit WAN",
      "LAN Ports": "4x Gigabit LAN",
      "VPN": "Auto VPN, Client VPN",
      "Security": "Cloud Firewall, Threat Protection",
      "Management": "Meraki Dashboard"
    }
  }
]


         
};


  
  const [products] = useState(allProducts);

  const getDataFromStorage = (key, defaultValue) => {
    try {
      const item = localStorage.getItem(key);
      const parsedItem = item ? JSON.parse(item) : defaultValue;
      
     
      if (key === 'antivCart' && !Array.isArray(parsedItem)) {
        console.error(`Data from localStorage for ${key} is not an array`);
        return defaultValue;
      }
      
      return parsedItem;
    } catch (error) {
      console.error(`Error parsing ${key} from localStorage`, error);
      return defaultValue;
    }
  };


  const [cart, setCart] = useState(() => getDataFromStorage('antivCart', []));
  const [productToShow, setProductToShow] = useState(() => getDataFromStorage('selectedProduct', ''));
  const [selectedAntiv, setSelectedAntiv] = useState(()=>getDataFromStorage('selectedCategory',''));
  const [catenav, setCatenav] = useState(false);


  

  useEffect(() => {
    localStorage.setItem('selectedProduct', JSON.stringify(productToShow));
  }, [productToShow]);


  useEffect(() => {
    localStorage.setItem('antivCart', JSON.stringify(cart));
  }, [cart]);

  useEffect(()=>{
    localStorage.setItem('selectedCategory', JSON.stringify(selectedAntiv));
  },[selectedAntiv])

  
  

  return (
    <ProductContext.Provider value={{catenav, setCatenav, products, cart, setCart, productToShow, setProductToShow,selectedAntiv, setSelectedAntiv }}>
      {children}
    </ProductContext.Provider>
  );
};

export const useProduct = () => useContext(ProductContext);
