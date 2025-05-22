import React, { createContext, useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShieldAlt,
  faLock,
  faGlobe,
  faUserShield,
  faEye,
  faFingerprint,
} from "@fortawesome/free-solid-svg-icons";

// Define the Metadata Context
const CategorydataContext = createContext();

const categoryData = {
    
    Avast: {
  "title": "Avast Antivirus Support",
  "bannerImg": "https://res.cloudinary.com/dcf3mojai/image/upload/v1737473304/s-l1200_crwbl7.png",
  "backgroundImage": "",
  "logo": "https://res.cloudinary.com/dcf3mojai/image/upload/v1738150954/Avast_tgbsoz_po3bvv.png",
  "whyChoose": "Avast provides advanced antivirus protection with an easy-to-use interface. Designed for users of all experience levels, Avast ensures seamless protection without compromising system performance. Whether you’re working from home or shopping online, Avast guards your digital life with state-of-the-art cybersecurity features. Avast’s lightweight performance, intuitive tools, and innovative threat detection make it a leading choice for millions worldwide.",

  "contact": {
    "supportPhone": "+1 (844) 973-3072",
    "supportEmail": "support@avast.com",
    "website": "https://www.avast.com"
  },

  "benefits": [
    {
      "title": "Essential Real-Time Protection",
      "desc": "Avast actively monitors and eliminates viruses, ransomware, and malware before they can cause harm to your system.",
      "icon": "https://img.icons8.com/ios-filled/50/shield.png"
    },
    {
      "title": "Prevents Phishing & Online Fraud",
      "desc": "Advanced phishing protection ensures that harmful links, fraudulent emails, and malicious websites are blocked instantly.",
      "icon": "https://img.icons8.com/ios-filled/50/lock-2.png"
    },
    {
      "title": "Secure VPN for Complete Privacy",
      "desc": "Encrypts your internet connection with Avast SecureLine VPN, ensuring anonymous and private browsing, even on public Wi-Fi.",
      "icon": "https://img.icons8.com/ios-filled/50/globe.png"
    }
  ],

  "features": [
    "Real-Time Threat Detection to identify and eliminate malware instantly.",
    "Advanced Firewall Protection that safeguards your network from unauthorized access.",
    "Data Shredder for Sensitive Files, ensuring complete privacy for deleted files.",
    "Wi-Fi Security Scanner to detect vulnerabilities in your network and improve security.",
    "Secure Browser Extension for safe online shopping and banking.",
    "Lightweight Performance Mode to protect your devices without slowing them down.",
    "Comprehensive Ransomware Shield to protect your files from encryption threats.",
    "Behavior Shield to monitor and block suspicious application activities in real-time.",
    "Do Not Disturb Mode to block notifications during gaming, streaming, or presentations.",
    "Sandbox Mode to safely test files and apps in an isolated environment."
  ],

  "testimonials": [
    { "quote": "Avast has been great for securing my data and devices. I love the real-time protection features!", "author": "John D." },
    { "quote": "Super reliable and easy to use! Their customer support team is also very responsive.", "author": "Sarah W." },
    { "quote": "I’ve been using Avast for years, and it’s never let me down. The Wi-Fi security scanner is a game-changer.", "author": "Michael L." },
    { "quote": "Highly recommended for anyone looking for an affordable and effective antivirus solution.", "author": "Jessica R." },
    { "quote": "Avast’s lightweight performance mode keeps my devices running smoothly without any lag.", "author": "Emily S." },
    { "quote": "The ransomware shield gives me peace of mind when working with important files.", "author": "David K." },
    { "quote": "Avast’s sandbox mode is an amazing feature. I can test unknown apps without worrying about threats.", "author": "Olivia H." }
  ]
},
         
     "McAfee": {
  "title": "McAfee Antivirus Support",
  "bannerImg": "https://res.cloudinary.com/dcf3mojai/image/upload/v1737471563/267210_ip13ww_weenyp.png",
  "backgroundImage": "",
  "logo": "https://res.cloudinary.com/dcf3mojai/image/upload/v1737531060/McAfee-Logo_ueh5ul.png",
  "whyChoose": "McAfee offers comprehensive antivirus and identity protection, combining robust security features with an easy-to-use interface. It provides unmatched security for multiple devices, ensuring your family's digital safety. Whether it’s secure browsing, identity theft protection, or device optimization, McAfee delivers exceptional cybersecurity tailored to your needs.",

  "contact": {
    "supportPhone": "+1 (866) 622-3911",
    "supportEmail": "support@mcafee.com",
    "website": "https://www.mcafee.com"
  },

  "benefits": [
    {
      "title": "Multi-Device Protection",
      "desc": "Protects PCs, Macs, smartphones, and tablets with a single subscription, ensuring seamless security across all devices.",
      "icon": "https://img.icons8.com/ios-filled/50/multiple-devices.png"
    },
    {
      "title": "Advanced Identity Protection",
      "desc": "McAfee’s identity protection safeguards your personal and financial data from online theft and fraud.",
      "icon": "https://img.icons8.com/ios-filled/50/privacy.png"
    },
    {
      "title": "Secure VPN for Online Privacy",
      "desc": "McAfee VPN encrypts your internet connection, keeping your online activities private and anonymous.",
      "icon": "https://img.icons8.com/ios-filled/50/vpn.png"
    }
  ],

  "features": [
    "Multi-Device Protection for seamless security across PCs, Macs, smartphones, and tablets.",
    "Identity Theft Coverage to safeguard your personal information and prevent misuse.",
    "Performance Optimization tools to keep your devices running smoothly without lag.",
    "Safe Web Browsing to block dangerous websites, phishing attempts, and malicious downloads.",
    "Customizable Alerts to keep you informed about potential threats and suspicious activity.",
    "Secure VPN for private and encrypted internet access, ensuring complete online anonymity.",
    "Password Manager to store and auto-fill complex passwords securely.",
    "Parental Controls to manage and monitor your children’s online activities and ensure their safety.",
    "Advanced Malware Detection to identify and eliminate sophisticated threats in real time.",
    "File Shredder to permanently delete sensitive files beyond recovery.",
    "Ransomware Protection to block attempts to encrypt your personal files.",
    "Wi-Fi Security to scan and secure your network from unauthorized access."
  ],

  "testimonials": [
    { "quote": "McAfee is my top choice for security. It keeps my devices protected and my data secure.", "author": "David K." },
    { "quote": "Very reliable and user-friendly. I love how easy it is to set up and manage.", "author": "Linda M." },
    { "quote": "The identity protection feature has been a lifesaver. It gives me peace of mind knowing my data is secure.", "author": "Karen W." },
    { "quote": "I’ve been using McAfee for years. The performance optimization tools really make a difference.", "author": "Jason T." },
    { "quote": "McAfee’s VPN and parental controls have been game-changers for our family. Highly recommended!", "author": "Emily H." },
    { "quote": "The ransomware protection is phenomenal. It saved me from a potential disaster.", "author": "Sophia L." },
    { "quote": "McAfee is the complete package for online security. From VPN to identity theft coverage, it’s all there.", "author": "Michael B." },
    { "quote": "I’ve trusted McAfee for over a decade. It’s reliable, efficient, and worth every penny.", "author": "Laura C." }
  ]
},
    
        Norton: {
          "title": "Norton Antivirus Support",
          "bannerImg": "https://res.cloudinary.com/dcf3mojai/image/upload/v1737471502/267107_rnxeoo_yfzaqh.png",
          "backgroundImage": "",
          "logo": "https://res.cloudinary.com/dcf3mojai/image/upload/v1737470578/Norton-Logo-2010-500x281_cvjvjr.png",
          "whyChoose": "Norton has been a trusted leader in cybersecurity for decades, providing robust protection against a wide range of digital threats. With features like real-time malware protection, cloud backup, and a secure VPN, Norton caters to the security needs of individuals, families, and businesses. Its user-friendly interface and award-winning technology make it the preferred choice for millions worldwide.",
          "contact": {
            "supportPhone": "+1 (855) 815-2726",
            "supportEmail": "support@norton.com",
            "website": "https://www.norton.com"
          },
         "benefits": [
  {
    "title": "Advanced Threat Protection",
    "desc": "Norton provides real-time malware detection and removal to safeguard your devices from evolving cyber threats.",
    "icon": "https://img.icons8.com/ios-filled/50/security-checked.png"
  },
  {
    "title": "Dark Web Monitoring",
    "desc": "Norton monitors the dark web for leaks of your personal information and alerts you if your credentials are compromised.",
    "icon": "https://img.icons8.com/ios-filled/50/hacker.png"
  },
  {
    "title": "Secure VPN & Privacy Shield",
    "desc": "A built-in VPN encrypts your data for safe browsing on public Wi-Fi networks, ensuring your online privacy remains intact.",
    "icon": "https://img.icons8.com/ios-filled/50/vpn.png"
  }
],

      
          "features": [
            "Real-Time Malware Protection to detect and block emerging threats instantly.",
            "Cloud Backup for PC to secure important files against ransomware and system failures.",
            "Secure VPN for anonymous and private browsing on any network.",
            "Password Manager for safely storing and auto-filling complex passwords.",
            "Parental Controls to help monitor and manage your kids’ online activities.",
            "Dark Web Monitoring to alert you if your personal information is found on the dark web.",
            "Webcam Protection to prevent unauthorized access to your camera.",
            "Anti-Phishing Technology to block malicious websites and fraudulent emails.",
            "SafeCam feature that alerts you to unauthorized webcam access attempts.",
            "Performance Optimization Tools to enhance the speed and efficiency of your device.",
            "Multi-Device Coverage to protect all your gadgets with one subscription.",
            "Identity Theft Protection to monitor and safeguard sensitive personal information.",
            "24/7 Customer Support to assist you with any issues or queries."
          ],
      
          "testimonials": [
            { "quote": "Norton keeps my family safe online! The parental controls are perfect for monitoring my kids.", "author": "Emily T." },
            { "quote": "The best antivirus software I’ve used. The VPN and cloud backup are fantastic additions.", "author": "Michael P." },
            { "quote": "Norton’s real-time protection has saved me from multiple threats. It’s worth every penny.", "author": "Chris H." },
            { "quote": "The password manager and dark web monitoring make Norton stand out. Highly recommended!", "author": "Sophia L." },
            { "quote": "Norton has been my go-to antivirus for years. It’s reliable, easy to use, and very effective.", "author": "James K." },
            { "quote": "Norton’s multi-device coverage has been a lifesaver for my family. It protects all our devices seamlessly.", "author": "Laura C." },
            { "quote": "The dark web monitoring alerted me to potential issues before they became serious. Amazing feature!", "author": "David R." },
            { "quote": "I’ve been a Norton user for over 10 years. It’s the only antivirus I trust with my personal data.", "author": "Sarah M." }
          ]
        },
    
    TotalAV: {
    "title": "TotalAV Antivirus Support",
    "bannerImg": "https://res.cloudinary.com/dcf3mojai/image/upload/v1737472141/9cae24_f2cd9ba9bd3a42eb9bfd0291e734b76e_mv2_nmdq8p.png",
    "backgroundImage": "",
    "logo": "https://res.cloudinary.com/dcf3mojai/image/upload/v1737749048/403534-security-suites-totalav-internet-security-10019614_xwy8i3.png",
    "whyChoose": "TotalAV provides comprehensive and robust protection with cutting-edge features to secure your digital world. It’s designed to deliver advanced security solutions for both individuals and families, protecting your data and devices from evolving cyber threats. TotalAV offers intuitive features like a built-in VPN, password vault, and real-time protection, ensuring your online activities remain private and secure. It’s the ideal choice for anyone looking to optimize device performance while staying protected online.",
    "contact": {
      "supportPhone": "+1 (833) 201-8681",
      "supportEmail": "support@totalav.com",
      "website": "https://www.totalav.com"
    },
    "benefits": [
        {
            "title": "Advanced Malware Protection",
            "desc": "Guards against known and emerging threats, ensuring real-time security for your devices.",
            "icon": "https://img.icons8.com/ios-filled/50/security-checked.png"
          }
          ,
          {
            "title": "Secure VPN & Privacy Shield",
            "desc": "Keeps your online activities encrypted and anonymous, preventing cyber threats and tracking.",
            "icon": "https://img.icons8.com/ios-filled/50/privacy.png"
          }
          ,
          {
            "title": "System Performance Optimization",
            "desc": "Removes junk files, optimizes resources, and ensures your devices run at peak performance.",
            "icon": "https://img.icons8.com/ios-filled/50/performance.png"
          }
    ],

    "features": [
      "Advanced Malware Protection to guard against all known and emerging threats.",
      "Secure VPN for Private Browsing to keep your online activity anonymous and encrypted.",
      "Phishing and Ransomware Shield to block malicious emails, websites, and ransomware attempts.",
      "Password Vault for safely storing, generating, and managing login credentials.",
      "Junk Cleaner to optimize system performance by removing unwanted files and cache.",
      "Ad Blocker to eliminate intrusive advertisements and enhance browsing speed.",
      "System Tune-Up Tools to keep your devices running at peak performance by managing resources efficiently.",
      "Real-Time Protection to detect and block threats instantly as they appear.",
      "Browser Manager for secure and faster web navigation.",
      "Disk Cleanup Utility to free up storage space by removing temporary and unnecessary files.",
      "24/7 Customer Support to assist you whenever you need help."
    ],

    "testimonials": [
      { "quote": "TotalAV is incredibly reliable and easy to use. It provides excellent protection without slowing down my system.", "author": "Mark R." },
      { "quote": "The VPN feature is a lifesaver! I can browse securely on any network.", "author": "Sophia L." },
      { "quote": "I love how user-friendly TotalAV is. It keeps my devices safe and runs scans quickly.", "author": "Emily W." },
      { "quote": "TotalAV’s phishing protection has saved me from several suspicious emails. I trust it completely!", "author": "James P." },
      { "quote": "The junk cleaner and system tune-up tools are amazing. My laptop runs so much faster now!", "author": "Olivia H." },
      { "quote": "TotalAV combines performance and protection perfectly. I’ve never felt more secure online.", "author": "Michael B." },
      { "quote": "The customer support team is so helpful. They guided me through every step of installation.", "author": "Sarah J." },
      { "quote": "I’ve tried many antivirus solutions, but TotalAV stands out for its simplicity and effectiveness.", "author": "Daniel C." }
    ]
  },
    
    
    AVG:  {
        "title": "AVG Antivirus Support",
        "bannerImg": "https://res.cloudinary.com/dcf3mojai/image/upload/v1737474105/avg-ultimate_jtp3i0-removebg-preview_coqfnx.png",
        "backgroundImage": "",
        "logo": "https://res.cloudinary.com/dcf3mojai/image/upload/v1727792861/avg_ta07rr.png",
        "whyChoose": "AVG combines simplicity and power, offering exceptional antivirus protection without compromising system performance. Designed for home, business, and personal use, AVG stands out with its easy-to-use interface and robust protection features. Its advanced tools block ransomware, phishing, and other online threats while optimizing system performance. With AVG, you get a holistic security solution that’s lightweight, effective, and trusted worldwide.",
    
        "contact": {
    "supportPhone": "+1 (844) 234-6038",
    "supportEmail": "support@avg.com",
    "website": "https://www.avg.com"
  },
        "benefits": [
  {
    "title": "Ransomware Protection",
    "desc": "Blocks unauthorized access to sensitive files and ensures data safety.",
    "icon": "https://img.icons8.com/ios-filled/50/virus.png"
  },
  {
    "title": "Enhanced Firewall",
    "desc": "Shields your network from hackers and prevents unauthorized access.",
    "icon": "https://img.icons8.com/ios-filled/50/firewall.png"
  },
  {
    "title": "Smart Scan & Performance Optimizer",
    "desc": "Quickly identifies vulnerabilities and optimizes system speed for peak performance.",
    "icon": "https://img.icons8.com/ios-filled/50/speed.png"
  }
],

    
        "features": [
          "Ransomware Protection to block unauthorized access to sensitive files and ensure data safety.",
          "File Shredder to permanently delete confidential files without leaving recoverable traces.",
          "Email Shield to detect and block malicious attachments and phishing scams.",
          "Smart Scan for quick, comprehensive system checks that identify and resolve potential vulnerabilities.",
          "Enhanced Firewall to shield your network from hackers and unauthorized access.",
          "Web Shield to block unsafe websites, suspicious links, and malicious downloads in real-time.",
          "Software Updater to ensure all your installed programs stay up-to-date and secure.",
          "Do Not Disturb Mode to suppress notifications during gaming, streaming, or presentations.",
          "PC Performance Optimizer to improve system speed, free up storage, and remove junk files.",
          "Data Breach Monitoring to alert you if your personal information is found on the dark web."
        ],
    
        "testimonials": [
          { "quote": "AVG has exceeded my expectations in every way. The Smart Scan is quick and effective!", "author": "Ethan J." },
          { "quote": "Perfect for my home and office devices. AVG’s firewall is a must-have!", "author": "Olivia F." },
          { "quote": "The File Shredder feature gives me peace of mind when disposing of sensitive data.", "author": "Liam M." },
          { "quote": "AVG is lightweight and keeps my system safe without slowing it down.", "author": "Sophia R." },
          { "quote": "I love the Do Not Disturb Mode. I can game without interruptions while staying protected!", "author": "Jack K." },
          { "quote": "The Web Shield has saved me multiple times from visiting harmful websites. Highly reliable!", "author": "Alex H." },
          { "quote": "The PC Performance Optimizer made my laptop faster than ever. Thank you, AVG!", "author": "Ella T." },
          { "quote": "I appreciate the easy setup process and user-friendly dashboard. Everything is so intuitive.", "author": "Chris P." },
          { "quote": "AVG’s ransomware protection has been a lifesaver for my business files.", "author": "Emma L." },
          { "quote": "A must-have antivirus for anyone who values both security and performance.", "author": "Daniel W." }
        ]
      },
    
    
    Bitdefender:{
        "title": "Bitdefender Antivirus Support",
        "bannerImg": "https://res.cloudinary.com/dcf3mojai/image/upload/v1727775610/Bitdefender_Antivirus_Plus_sfnnz0.png",
        "backgroundImage": "",
        "logo": "https://res.cloudinary.com/dcf3mojai/image/upload/v1737748913/04rk8yqu2cixbmdjvdlqrnz-28-1595951943-fit-scale-size-1028x578_fyjpmu.png",
        "whyChoose": "Bitdefender is a globally trusted name in cybersecurity, offering a perfect blend of performance and protection. Its advanced security features ensure your devices and sensitive data are safeguarded against a wide range of threats, including malware, ransomware, and phishing. Designed for both personal and professional needs, Bitdefender delivers comprehensive protection without slowing down your devices. With its intuitive interface, seamless functionality, and innovative technologies, it is a top choice for millions worldwide seeking ultimate digital security.",
    
        "contact": {
          "supportPhone": "+1 (954) 414-9655",
          "supportEmail": "support@bitdefender.com",
          "website": "https://www.bitdefender.com"
        },
       "benefits": [
  {
    "title": "Advanced Threat Protection",
    "desc": "Uses AI-powered defense to detect and neutralize malware in real time.",
    "icon": "https://img.icons8.com/ios-filled/50/ai.png"
  },
  {
    "title": "Multi-Layer Ransomware Protection",
    "desc": "Protects sensitive files and includes remediation tools to recover encrypted data.",
    "icon": "https://img.icons8.com/ios-filled/50/ransomware.png"
  },
  {
    "title": "Secure VPN & Privacy Tools",
    "desc": "Ensures anonymous and encrypted browsing with additional privacy protection.",
    "icon": "https://img.icons8.com/ios-filled/50/vpn.png"
  }
],

    
        "features": [
          "Advanced Threat Defense powered by AI to detect and neutralize complex malware threats in real time.",
          "Parental Controls to monitor and manage children’s online activities, ensuring a safe digital environment for your family.",
          "Anti-Phishing and Anti-Fraud protection to safeguard your sensitive data during online transactions and prevent scams.",
          "Multi-Layer Ransomware Protection with integrated remediation tools to recover encrypted data.",
          "Battery Saver Mode that optimizes performance on laptops and mobile devices, ensuring efficient resource usage.",
          "Secure VPN for anonymous and private browsing, protecting your online identity on any network.",
          "Webcam and Microphone Protection to block unauthorized access and prevent eavesdropping attempts.",
          "Comprehensive Vulnerability Scanner to identify and fix weak points in your system and installed applications.",
          "Cloud-Based Scanning for reduced system resource consumption, keeping your devices running smoothly.",
          "File Shredder for permanently deleting confidential files, leaving no recoverable traces.",
          "Wi-Fi Security Advisor to analyze and secure your network from potential vulnerabilities.",
          "Safe Online Banking and Shopping tools to ensure transactions remain encrypted and private.",
          "Rescue Environment for cleaning deeply embedded malware before Windows starts up."
        ],
    
        "testimonials": [
          { "quote": "Bitdefender’s advanced protection has saved my system multiple times. The AI threat detection is incredible!", "author": "Lucas T." },
          { "quote": "The parental controls are a blessing. I can monitor and control what my kids access online with ease.", "author": "Emma R." },
          { "quote": "The Secure VPN is a game-changer. I feel safe browsing even on public Wi-Fi networks.", "author": "David S." },
          { "quote": "I’ve never seen an antivirus that balances performance and security so well. Highly recommend Bitdefender!", "author": "Sophia P." },
          { "quote": "The ransomware protection feature saved my critical business files from encryption. A lifesaver!", "author": "Michael L." },
          { "quote": "Bitdefender’s vulnerability scanner has helped me fix multiple weak points in my system.", "author": "Sarah J." },
          { "quote": "It’s so lightweight and effective. My computer runs faster than ever while staying secure.", "author": "Jack K." },
          { "quote": "The Rescue Environment is a unique feature that helped clean my PC when no other software could.", "author": "Chris W." },
          { "quote": "Bitdefender’s cloud-based scanning is amazing. I get full protection without any lag.", "author": "Olivia T." },
          { "quote": "The customer support team is top-notch. They quickly resolved my issue with great professionalism.", "author": "Emily R." }
        ],
    },
    Webroot: {
      title: 'Webroot Antivirus Support',
      bannerImg: 'https://res.cloudinary.com/dcf3mojai/image/upload/v1738062960/51DU52_wvgS._AC_UF1000_1000_QL80__vjd182.jpg',
      backgroundImage: '',
      logo: 'https://res.cloudinary.com/dcf3mojai/image/upload/v1738063787/webroot-promo-codes-coupons_nyex7x.png',
      whyChoose:
          'Webroot stands out in the cybersecurity industry with its lightning-fast performance, cloud-based technology, and real-time threat intelligence. Trusted by millions, Webroot provides powerful and lightweight protection against malware, ransomware, and phishing attacks. Its innovative approach ensures minimal impact on system resources while offering unparalleled protection for both individuals and businesses. With Webroot, you can enjoy a worry-free digital experience on all your devices.',
          "contact": {
            "supportPhone": "+1 (866) 612-4227",
            "supportEmail": "support@webroot.com",
            "website": "https://www.webroot.com"
          },
          "benefits": [
            {
              "title": "Data Leak Checker",
              "desc": "Monitors and secures personal and financial information from online leaks.",
              "icon": "https://img.icons8.com/external-goofy-solid-kerismaker/96/external-Data-Leak-file-document-goofy-solid-kerismaker.png"
            },
            {
              "title": "Safe Money Technology",
              "desc": "Ensures encrypted and secure online payments for worry-free transactions.",
              "icon": "https://img.icons8.com/ios-filled/50/bank-safe.png"
            },
            {
              "title": "Multi-Device Compatibility",
              "desc": "Protects PCs, Macs, Android, and iOS devices with a single subscription.",
              "icon": "https://img.icons8.com/ios-filled/50/system-information.png"
            }
          ],
          

          features: [
          'Real-Time Cloud-Based Threat Detection for faster and more efficient malware prevention.',
          'Identity Theft Protection to safeguard personal data from unauthorized access and breaches.',
          'Anti-Ransomware Technology to block encryption-based attacks and recover compromised files.',
          'Phishing Attack Prevention to protect against malicious emails, links, and websites.',
          'Network Protection for enhanced security while browsing or using public Wi-Fi networks.',
          'Lightweight Design ensuring low impact on device performance for seamless multitasking.',
          'Secure Browser for encrypted and private online shopping and banking experiences.',
          'Password Manager to store, generate, and auto-fill strong passwords securely.',
          'Comprehensive Mobile Protection for Android and iOS devices against threats and theft.',
          'Automatic Updates to stay protected against the latest cyber threats without manual intervention.',
          '24/7 Expert Support to resolve issues quickly and provide technical assistance.',
          'Multi-Device Compatibility for protecting PCs, Macs, smartphones, and tablets under one license.',
          'Device Performance Monitoring to identify and resolve system vulnerabilities proactively.',
      ],
      testimonials: [
          {
              quote: 'Webroot’s lightweight design doesn’t slow my computer down but keeps me fully protected.',
              author: 'Brian L.',
          },
          {
              quote: 'The cloud-based threat detection is incredibly fast. I feel safe browsing the web now.',
              author: 'Sarah M.',
          },
          {
              quote: 'Webroot saved my files during a ransomware attack. Their protection is unmatched.',
              author: 'John P.',
          },
          {
              quote: 'I love how Webroot works quietly in the background without interrupting my work.',
              author: 'Emma S.',
          },
          {
              quote: 'The phishing protection feature has blocked so many scam attempts. I trust Webroot fully.',
              author: 'Daniel W.',
          },
          {
              quote: 'Webroot’s mobile app keeps my phone secure and even helps me find it if it’s lost.',
              author: 'Sophie R.',
          },
          {
              quote: 'As someone who uses public Wi-Fi often, Webroot’s network protection is a lifesaver.',
              author: 'Lucas H.',
          },
          {
              quote: 'Their customer support team is incredibly helpful and resolved my issue within minutes.',
              author: 'Rachel G.',
          },
          {
              quote: 'Webroot’s anti-ransomware protection has been a game-changer for my small business.',
              author: 'Michael T.',
          },
          {
              quote: 'The secure browser feature ensures my online shopping and banking are safe. Highly recommended!',
              author: 'Olivia C.',
          },
      ],
  },
  
        Kaspersky: {
          "title": "Kaspersky Antivirus Support",
          "bannerImg": "https://res.cloudinary.com/dcf3mojai/image/upload/v1737471452/Antivirus_box_zsuuva.webp",
          "backgroundImage": "",
          "logo": "https://res.cloudinary.com/dcf3mojai/image/upload/v1738152316/Kaspersky_aumabf_nvxrwt.svg",
          "whyChoose": "Kaspersky has earned a reputation as a global leader in cybersecurity, trusted by millions for its cutting-edge, award-winning solutions. Designed to protect personal, family, and enterprise devices, Kaspersky delivers unmatched security with user-friendly tools that ensure real-time protection, secure financial transactions, and enhanced privacy. Its advanced threat detection capabilities combined with minimal system impact make Kaspersky the ideal choice for a safer digital experience.",
         "contact": {
    "supportPhone": "+1 (866) 328-5700",
    "supportEmail": "support@kaspersky.com",
    "website": "https://www.kaspersky.com"
  },

         "benefits": [
  {
    "title": "Data Leak Checker",
    "desc": "Monitors and secures personal and financial information from online leaks.",
    "icon": "https://img.icons8.com/external-goofy-solid-kerismaker/96/external-Data-Leak-file-document-goofy-solid-kerismaker.png"
  },
  {
    "title": "Safe Money Technology",
    "desc": "Ensures encrypted and secure online payments for worry-free transactions.",
    "icon": "https://img.icons8.com/ios-filled/50/bank-safe.png"
  },
  {
    "title": "Multi-Device Compatibility",
    "desc": "Protects PCs, Macs, Android, and iOS devices with a single subscription.",
    "icon": "https://img.icons8.com/ios-filled/50/system-information.png"
  }
],

      
          "features": [
            "Data Leak Checker to monitor and secure sensitive personal and financial information across the web.",
            "Password Manager for generating, storing, and auto-filling strong, unique passwords securely.",
            "Safe Money technology to ensure safe and encrypted online payments and transactions.",
            "File Encryption to safeguard sensitive documents from unauthorized access or theft.",
            "Webcam and Microphone Protection to block unauthorized access and protect your privacy.",
            "Comprehensive Parental Controls to manage and monitor children’s online activities and screen time.",
            "Anti-Phishing Tools to protect against fraudulent websites, phishing scams, and malicious emails.",
            "Automatic Updates for real-time threat protection and to keep the software always up to date.",
            "System Performance Optimization for seamless device performance without slowing down operations.",
            "24/7 Technical Support to address issues, provide assistance, and ensure a smooth experience.",
            "Trusted Security Network to identify and neutralize new and evolving threats across the globe.",
            "Multi-Device Compatibility to protect PCs, Macs, Android, and iOS devices simultaneously.",
            "Ransomware Protection to safeguard critical files from encryption threats and malicious attacks."
          ],
      
          "testimonials": [
            { "quote": "Kaspersky is the most reliable antivirus out there. It gives me peace of mind knowing my data is safe.", "author": "Ella H." },
            { "quote": "Exceptional protection and easy to use. I highly recommend it to anyone who values their privacy.", "author": "James P." },
            { "quote": "Kaspersky’s Safe Money feature is fantastic for secure online banking. It’s a game-changer for me.", "author": "Linda T." },
            { "quote": "The parental controls are brilliant for keeping my kids safe online. I can’t imagine using anything else.", "author": "Mark W." },
            { "quote": "The password manager and file encryption tools are lifesavers for my work. I trust Kaspersky completely.", "author": "Sophia R." },
            { "quote": "Kaspersky strikes the perfect balance between security and performance. My devices run smoothly and safely.", "author": "David M." },
            { "quote": "The anti-phishing tools have saved me from multiple scams. Kaspersky is worth every penny.", "author": "Olivia J." },
            { "quote": "As a small business owner, Kaspersky’s multi-device protection has been invaluable for my team and me.", "author": "Michael K." },
            { "quote": "Their 24/7 support team is incredible. They helped me resolve an issue quickly and professionally.", "author": "Emma L." },
            { "quote": "Kaspersky’s ransomware protection is outstanding. It has safeguarded my critical business files.", "author": "Chris T." }
          ]
        },
  
          Avira: {
            "title": "Avira Antivirus Support",
            "bannerImg": "https://res.cloudinary.com/dcf3mojai/image/upload/v1738588972/Avira_Antivirus_evx9vx.png",
            "backgroundImage": "",
            "logo": "https://res.cloudinary.com/dcf3mojai/image/upload/v1738567802/Avira_logo_udx5be.svg",
            "whyChoose": "Avira is a globally recognized cybersecurity leader, offering powerful protection with AI-driven threat detection and a lightweight design. Its award-winning security engine ensures complete defense against malware, ransomware, phishing, and emerging threats. With a focus on privacy, Avira includes a secure VPN, password manager, and system optimizer, providing users with an all-in-one security suite that guarantees safety and performance.",
            "contact": {
              "supportPhone": "+1 (800) 555-1212",
              "supportEmail": "support@avira.com",
              "website": "https://www.avira.com"
            },
            "benefits": [
              {
                "title": "AI-Powered Malware Protection",
                "desc": "Uses advanced artificial intelligence to detect and block malware in real time.",
                "icon": "https://img.icons8.com/external-goofy-solid-kerismaker/96/external-Data-Leak-file-document-goofy-solid-kerismaker.png"
              },
              {
                "title": "Built-in VPN for Privacy",
                "desc": "Ensures secure browsing with a fast and reliable VPN that encrypts internet traffic.",
                "icon": "https://img.icons8.com/ios-filled/50/privacy.png"
              },
              {
                "title": "Performance Optimizer",
                "desc": "Cleans junk files and enhances system speed for an optimized user experience.",
                "icon": "https://img.icons8.com/ios-filled/50/system-performance.png"
              }
            ],
            "features": [
              "Real-Time AI-Based Malware Detection for proactive threat prevention.",
              "Advanced Ransomware Protection to prevent unauthorized encryption of files.",
              "Web Protection to block phishing sites and dangerous downloads.",
              "Identity Theft Prevention for securing personal and financial data.",
              "Safe Browsing and Ad Blocker to enhance privacy and eliminate intrusive ads.",
              "Automatic Software Updates to keep applications secure from vulnerabilities.",
              "Secure Online Banking with built-in anti-phishing and transaction encryption.",
              "Multi-Device Protection covering Windows, Mac, Android, and iOS.",
              "Device Performance Booster to remove junk files and enhance speed.",
              "Password Manager for securely storing and generating strong passwords.",
              "Unlimited VPN for anonymous browsing and protection on public Wi-Fi.",
              "Parental Controls to manage and safeguard children’s online activities.",
              "24/7 Customer Support to assist with any security-related concerns."
            ],
            "testimonials": [
              {
                "quote": "Avira’s antivirus engine is fast, lightweight, and super effective at blocking threats.",
                "author": "Liam K."
              },
              {
                "quote": "I love how Avira’s built-in VPN keeps my browsing secure, especially on public Wi-Fi.",
                "author": "Emma J."
              },
              {
                "quote": "The password manager and identity theft protection give me peace of mind online.",
                "author": "Daniel M."
              },
              {
                "quote": "Avira’s real-time protection stopped a malware attack before it could do any damage.",
                "author": "Sophia T."
              },
              {
                "quote": "The system optimizer cleaned up my PC and made it run so much faster!",
                "author": "Noah R."
              },
              {
                "quote": "I appreciate how Avira doesn’t slow my computer down while offering excellent protection.",
                "author": "Isabella P."
              },
              {
                "quote": "Avira’s anti-ransomware feature saved my files from being locked by a cyber attack.",
                "author": "Ethan W."
              },
              {
                "quote": "Customer support was incredibly responsive and solved my issue within minutes!",
                "author": "Olivia L."
              },
              {
                "quote": "The multi-device compatibility is a great feature—I protect my phone and laptop with one plan.",
                "author": "William C."
              },
              {
                "quote": "I feel much safer shopping online knowing Avira’s security tools are working in the background.",
                "author": "Mia H."
              }
            ]
          },
            PCMatic: {
              "title": "PC Matic Antivirus Support",
              "bannerImg": "https://res.cloudinary.com/dcf3mojai/image/upload/v1738340505/pc-matic-kit-removebg-preview_zekzbt.png",
              "backgroundImage": "",
              "logo": "https://res.cloudinary.com/dcf3mojai/image/upload/v1738340692/pc_matic-logo_uossrg.png",
              "whyChoose": "PC Matic is an award-winning cybersecurity solution built in the USA, focusing on a proactive, whitelisting-based approach to malware prevention. Unlike traditional antivirus programs, PC Matic blocks unknown threats before they can cause damage, ensuring unmatched security. With automated maintenance, performance optimization, and a lifetime subscription option, PC Matic is a top choice for users who want both protection and peak system performance.",
              "contact": {
                "supportPhone": "+1 (800) 297-6290",
                "supportEmail": "support@pcmatic.com",
                "website": "https://www.pcmatic.com"
              },
              "benefits": [
                {
                  "title": "Whitelisting Technology",
                  "desc": "Blocks unknown threats by only allowing trusted applications to run.",
                  "icon": "https://img.icons8.com/ios-filled/50/security-lock.png"
                },
                {
                  "title": "Automated PC Maintenance",
                  "desc": "Keeps your system running smoothly with automatic optimizations.",
                  "icon": "https://img.icons8.com/ios-filled/50/system-task.png"
                },
                {
                  "title": "Made in the USA",
                  "desc": "Developed and maintained in the United States for superior security.",
                  "icon": "https://img.icons8.com/ios-filled/50/usa.png"
                }
              ],
              "features": [
                "Proactive Whitelisting Technology for zero-trust malware prevention.",
                "Real-Time Ransomware Protection to block encryption-based attacks.",
                "Ad Blocker to eliminate intrusive ads and pop-ups.",
                "Performance Optimization for faster system speed and efficiency.",
                "Automated Driver and Software Updates to prevent vulnerabilities.",
                "Secure Remote Access to safeguard against unauthorized connections.",
                "Dark Web Monitoring to alert users about compromised personal data.",
                "Identity Theft Prevention to keep sensitive information secure.",
                "Multi-Device Compatibility for Windows, Mac, and Android protection.",
                "Lifetime Subscription Option for long-term cost-effective security.",
                "Secure File Execution to prevent malicious programs from running.",
                "Optimized Gaming Mode to ensure uninterrupted gameplay.",
                "24/7 US-Based Support to assist with security-related concerns."
              ],
              "testimonials": [
                {
                  "quote": "PC Matic's whitelisting approach keeps my PC malware-free without slowing it down.",
                  "author": "James L."
                },
                {
                  "quote": "I love that PC Matic is made in the USA and doesn't rely on traditional virus definitions.",
                  "author": "Karen D."
                },
                {
                  "quote": "My computer runs much faster now that PC Matic has optimized my system.",
                  "author": "Michael P."
                },
                {
                  "quote": "The automated maintenance keeps my PC clean and updated without extra effort.",
                  "author": "Sarah W."
                },
                {
                  "quote": "PC Matic’s ransomware protection is a game-changer—it's blocked multiple threats!",
                  "author": "Daniel S."
                },
                {
                  "quote": "The lifetime subscription is a fantastic value. No more annual renewal fees!",
                  "author": "Emily H."
                },
                {
                  "quote": "As a gamer, I appreciate that PC Matic doesn’t slow down my system while I play.",
                  "author": "Ryan T."
                },
                {
                  "quote": "Customer service is outstanding. They answered all my questions quickly and professionally.",
                  "author": "Lisa C."
                },
                {
                  "quote": "I trust PC Matic to protect my entire family's devices without any worries.",
                  "author": "Nathan G."
                },
                {
                  "quote": "PC Matic's ad blocker has made browsing the internet so much smoother and safer.",
                  "author": "Olivia M."
                }
              ]
            },
            BullGuard: {
              "title": "BullGuard Antivirus Support",
              "bannerImg": "https://res.cloudinary.com/dcf3mojai/image/upload/v1738590813/SWBUL-V13-ISRB-lg_2-removebg-preview_geweqw.png",
              "backgroundImage": "",
              "logo": "https://res.cloudinary.com/dcf3mojai/image/upload/v1738567888/bullguard-logo_uerusx.png",
              "whyChoose": "BullGuard is a trusted cybersecurity provider known for its triple-layered protection against malware, ransomware, and phishing threats. With a focus on gaming performance, real-time AI-driven security, and a built-in secure browser, BullGuard offers a complete security suite for users looking for both top-tier protection and system optimization. Its advanced machine learning technology ensures proactive threat detection without slowing down your device.",
              "contact": {
                "supportPhone": "+1 (855) 824-7741",
                "supportEmail": "support@bullguard.com",
                "website": "https://www.bullguard.com"
              },
              "benefits": [
                {
                  "title": "Dynamic Machine Learning",
                  "desc": "Continuously adapts to new threats using advanced AI technology.",
                  "icon": "https://img.icons8.com/ios-filled/50/artificial-intelligence.png"
                },
                {
                  "title": "Game Booster Mode",
                  "desc": "Optimizes system resources for seamless gaming without security interruptions.",
                  "icon": "https://img.icons8.com/ios-filled/50/game-controller.png"
                },
                {
                  "title": "Secure Browser",
                  "desc": "Provides a dedicated secure browser for safe banking and online transactions.",
                  "icon": "https://img.icons8.com/ios-filled/50/internet-security.png"
                }
              ],
              "features": [
                "Multi-Layered Malware Protection using AI-driven threat detection.",
                "Advanced Ransomware Defense to block unauthorized encryption attempts.",
                "Secure Web Browsing to prevent phishing and fake website scams.",
                "Firewall Protection for blocking unauthorized access to your system.",
                "Game Booster Mode for optimizing performance while gaming.",
                "Identity Protection to safeguard personal and financial data.",
                "Anti-Spyware Technology to detect and remove spyware threats.",
                "Cloud-Integrated Antivirus for real-time updates and threat intelligence.",
                "Home Network Scanner to detect and protect all connected devices.",
                "Parental Controls for monitoring and restricting children's online activities.",
                "Mobile Security for Android and iOS devices.",
                "Automatic Software Updates for fixing vulnerabilities without user intervention.",
                "24/7 Technical Support to resolve issues quickly and efficiently."
              ],
              "testimonials": [
                {
                  "quote": "BullGuard’s Game Booster ensures that my gaming experience remains smooth while keeping my system protected.",
                  "author": "Alex G."
                },
                {
                  "quote": "The secure browser feature is a lifesaver for my online banking and financial transactions.",
                  "author": "Sarah L."
                },
                {
                  "quote": "BullGuard’s AI-driven protection quickly detects and blocks malware before it can cause damage.",
                  "author": "Jonathan P."
                },
                {
                  "quote": "I love how BullGuard automatically optimizes my system for speed and security.",
                  "author": "Emily T."
                },
                {
                  "quote": "Their customer support is top-notch and helped me set up the software with ease!",
                  "author": "Daniel M."
                },
                {
                  "quote": "My entire family uses BullGuard, and it keeps all of our devices safe with just one subscription.",
                  "author": "Michael W."
                },
                {
                  "quote": "The home network scanner helped me identify security gaps in my Wi-Fi setup.",
                  "author": "Lisa C."
                },
                {
                  "quote": "BullGuard’s parental controls allow me to keep my kids safe online while managing screen time.",
                  "author": "Robert F."
                },
                {
                  "quote": "My PC runs faster and smoother since switching to BullGuard!",
                  "author": "Jessica K."
                },
                {
                  "quote": "This is the best antivirus for gamers. No lags, no pop-ups—just solid protection.",
                  "author": "Ethan H."
                }
              ]
            },
              "TrendMicro": {
                "title": "Trend Micro Antivirus Support",
                "bannerImg": "https://res.cloudinary.com/dcf3mojai/image/upload/v1738593055/box-maximum-security_uspgbq.png",
                "backgroundImage": "",
                "logo": "https://res.cloudinary.com/dcf3mojai/image/upload/v1738567995/Trend_Micro_Logo_2023_adnhlu.png",
                "whyChoose": "Trend Micro is a global cybersecurity leader offering multilayered protection against malware, ransomware, and phishing across devices. With advanced AI-powered threat intelligence, web protection, and privacy controls, it ensures a secure digital experience for both home and business users. Trend Micro also includes Pay Guard for secure online banking and Folder Shield for ransomware defense.",
                "contact": {
                  "supportPhone": "+1 (877) 275-8612",
                  "supportEmail": "support@trendmicro.com",
                  "website": "https://www.trendmicro.com"
                },
                "benefits": [
                  {
                    "title": "AI-Powered Threat Detection",
                    "desc": "Real-time protection using cloud-based smart scans and behavior monitoring.",
                    "icon": "https://img.icons8.com/ios-filled/50/artificial-intelligence.png"
                  },
                  {
                    "title": "Pay Guard",
                    "desc": "Keeps your online banking and shopping activities safe from hackers.",
                    "icon": "https://img.icons8.com/ios-filled/50/online-payment.png"
                  },
                  {
                    "title": "Ransomware Protection",
                    "desc": "Folder Shield blocks unauthorized access to critical files and folders.",
                    "icon": "https://img.icons8.com/ios-filled/50/lock.png"
                  }
                ],
                "features": [
                  "Advanced AI Learning for smarter threat prevention.",
                  "Web Threat Protection to block dangerous websites in real time.",
                  "Anti-Ransomware Folder Shield for critical file protection.",
                  "Email Scanning to filter malicious attachments and phishing links.",
                  "Parental Controls to safeguard kids' internet usage.",
                  "Pay Guard for secure financial transactions online.",
                  "PC Optimization Tools to clean junk and boost speed.",
                  "Secure Web Browser Extension for Chrome, Firefox, and Edge.",
                  "Identity Theft Prevention to monitor sensitive data breaches.",
                  "Multi-Device Support including PC, Mac, Android, and iOS.",
                  "Cloud-based Smart Protection Network for global threat detection.",
                  "24/7 Support and Easy Installation Assistance."
                ],
                "testimonials": [
                  {
                    "quote": "Trend Micro's Pay Guard gives me peace of mind during online banking.",
                    "author": "Amanda T."
                  },
                  {
                    "quote": "It's the best at stopping phishing attacks before I even click.",
                    "author": "James K."
                  },
                  {
                    "quote": "My files are safe thanks to Folder Shield. Great ransomware protection.",
                    "author": "Rachel M."
                  },
                  {
                    "quote": "Very light on system resources and easy to use interface.",
                    "author": "Chris W."
                  },
                  {
                    "quote": "Their customer support is extremely helpful and knowledgeable.",
                    "author": "Olivia L."
                  },
                  {
                    "quote": "I trust Trend Micro for protecting all my family's devices.",
                    "author": "Brian D."
                  },
                  {
                    "quote": "It even warns me about risky sites when I search on Google.",
                    "author": "Emily S."
                  },
                  {
                    "quote": "Seamless protection across my phone and laptop. Totally worth it.",
                    "author": "Josh A."
                  },
                  {
                    "quote": "Easy installation and quick scans. No lags!",
                    "author": "Victoria P."
                  },
                  {
                    "quote": "Great antivirus for professionals and families alike.",
                    "author": "Daniel R."
                  }
                ]
              },
                        
              "Windows7": {
                "title": "Microsoft Windows Support",
                "bannerImg": "https://res.cloudinary.com/dcf3mojai/image/upload/v1738593055/windows-banner.png",
                "backgroundImage": "",
                "logo": "https://res.cloudinary.com/dcf3mojai/image/upload/v1738929928/250596_kykvis.png",
                "whyChoose": "Microsoft Windows is the most widely used operating system worldwide, offering a user-friendly interface, powerful security features, and seamless integration with Microsoft services. It provides unparalleled performance, compatibility, and innovation, making it the preferred choice for both individuals and businesses.",
                "contact": {
                  "supportPhone": "+1 (800) 642-7676",
                  "supportEmail": "support@microsoft.com",
                  "website": "https://www.microsoft.com/windows"
                },
                "benefits": [
                  {
                    "title": "Enhanced Security",
                    "desc": "Built-in security features like Windows Defender and BitLocker protect against viruses, malware, and cyber threats.",
                    "icon": "https://img.icons8.com/ios-filled/50/security-shield-green.png"
                  },
                  {
                    "title": "Seamless Performance",
                    "desc": "Optimized for fast boot times, multitasking, and high performance across devices.",
                    "icon": "https://img.icons8.com/ios-filled/50/performance.png"
                  },
                  {
                    "title": "User-Friendly Interface",
                    "desc": "Intuitive design with customizable features for an enhanced user experience.",
                    "icon": "https://img.icons8.com/ios-filled/50/000000/happy.png"
                  }
                ],
                "features": [
                  "Advanced Security with built-in Windows Defender Antivirus and Firewall.",
                  "Seamless Multitasking with virtual desktops and improved window management.",
                  "Automatic Updates for the latest security patches and software improvements.",
                  "Microsoft Edge Browser for fast, secure, and private web browsing.",
                  "Cortana Virtual Assistant for voice commands and productivity enhancements.",
                  "OneDrive Cloud Storage for secure and accessible file management.",
                  "Remote Desktop Access for connecting to your PC from anywhere.",
                  "Gaming Optimization with DirectX support for immersive gaming experiences.",
                  "Compatibility with a vast range of applications and hardware.",
                  "BitLocker Encryption for securing sensitive data against unauthorized access.",
                  "Touchscreen & Pen Support for a versatile computing experience.",
                  "Parental Controls to monitor and manage children's digital activities.",
                  "Business Features like Windows Sandbox and Group Policy for enterprise security.",
                  "24/7 Microsoft Support for technical assistance and troubleshooting."
                ],
                "testimonials": [
                  {
                    "quote": "Windows provides the best combination of security, performance, and ease of use.",
                    "author": "John D."
                  },
                  {
                    "quote": "I love how Windows automatically updates and keeps my system secure without any hassle.",
                    "author": "Emily W."
                  },
                  {
                    "quote": "Remote Desktop access allows me to work from anywhere seamlessly.",
                    "author": "Michael T."
                  },
                  {
                    "quote": "The seamless integration with Microsoft Office and OneDrive makes work so much easier!",
                    "author": "Sarah K."
                  },
                  {
                    "quote": "Gaming on Windows is an absolute delight with DirectX 12 and Game Mode.",
                    "author": "Daniel P."
                  },
                  {
                    "quote": "BitLocker encryption keeps my confidential files safe from unauthorized access.",
                    "author": "Lisa M."
                  },
                  {
                    "quote": "Windows Defender gives me peace of mind knowing my PC is always protected.",
                    "author": "Kevin R."
                  },
                  {
                    "quote": "The latest Windows updates have improved speed and battery life significantly.",
                    "author": "Sophia J."
                  },
                  {
                    "quote": "Cortana helps me organize my daily tasks efficiently.",
                    "author": "Rachel H."
                  },
                  {
                    "quote": "Windows' user interface is clean, intuitive, and customizable to my needs.",
                    "author": "Mark L."
                  }
                ]
              },
              "Windows8": {
                "title": "Microsoft Windows Support",
                "bannerImg": "https://res.cloudinary.com/dcf3mojai/image/upload/v1738593055/windows-banner.png",
                "backgroundImage": "",
                "logo": "https://res.cloudinary.com/dcf3mojai/image/upload/v1738929928/250596_kykvis.png",
                "whyChoose": "Microsoft Windows is the most widely used operating system worldwide, offering a user-friendly interface, powerful security features, and seamless integration with Microsoft services. It provides unparalleled performance, compatibility, and innovation, making it the preferred choice for both individuals and businesses.",
                "contact": {
                  "supportPhone": "+1 (800) 642-7676",
                  "supportEmail": "support@microsoft.com",
                  "website": "https://www.microsoft.com/windows"
                },
                "benefits": [
                  {
                    "title": "Enhanced Security",
                    "desc": "Built-in security features like Windows Defender and BitLocker protect against viruses, malware, and cyber threats.",
                    "icon": "https://img.icons8.com/ios-filled/50/security-shield-green.png"
                  },
                  {
                    "title": "Seamless Performance",
                    "desc": "Optimized for fast boot times, multitasking, and high performance across devices.",
                    "icon": "https://img.icons8.com/ios-filled/50/performance.png"
                  },
                  {
                    "title": "User-Friendly Interface",
                    "desc": "Intuitive design with customizable features for an enhanced user experience.",
                    "icon": "https://img.icons8.com/ios-filled/50/000000/happy.png"
                  }
                ],
                "features": [
                  "Advanced Security with built-in Windows Defender Antivirus and Firewall.",
                  "Seamless Multitasking with virtual desktops and improved window management.",
                  "Automatic Updates for the latest security patches and software improvements.",
                  "Microsoft Edge Browser for fast, secure, and private web browsing.",
                  "Cortana Virtual Assistant for voice commands and productivity enhancements.",
                  "OneDrive Cloud Storage for secure and accessible file management.",
                  "Remote Desktop Access for connecting to your PC from anywhere.",
                  "Gaming Optimization with DirectX support for immersive gaming experiences.",
                  "Compatibility with a vast range of applications and hardware.",
                  "BitLocker Encryption for securing sensitive data against unauthorized access.",
                  "Touchscreen & Pen Support for a versatile computing experience.",
                  "Parental Controls to monitor and manage children's digital activities.",
                  "Business Features like Windows Sandbox and Group Policy for enterprise security.",
                  "24/7 Microsoft Support for technical assistance and troubleshooting."
                ],
                "testimonials": [
                  {
                    "quote": "Windows provides the best combination of security, performance, and ease of use.",
                    "author": "John D."
                  },
                  {
                    "quote": "I love how Windows automatically updates and keeps my system secure without any hassle.",
                    "author": "Emily W."
                  },
                  {
                    "quote": "Remote Desktop access allows me to work from anywhere seamlessly.",
                    "author": "Michael T."
                  },
                  {
                    "quote": "The seamless integration with Microsoft Office and OneDrive makes work so much easier!",
                    "author": "Sarah K."
                  },
                  {
                    "quote": "Gaming on Windows is an absolute delight with DirectX 12 and Game Mode.",
                    "author": "Daniel P."
                  },
                  {
                    "quote": "BitLocker encryption keeps my confidential files safe from unauthorized access.",
                    "author": "Lisa M."
                  },
                  {
                    "quote": "Windows Defender gives me peace of mind knowing my PC is always protected.",
                    "author": "Kevin R."
                  },
                  {
                    "quote": "The latest Windows updates have improved speed and battery life significantly.",
                    "author": "Sophia J."
                  },
                  {
                    "quote": "Cortana helps me organize my daily tasks efficiently.",
                    "author": "Rachel H."
                  },
                  {
                    "quote": "Windows' user interface is clean, intuitive, and customizable to my needs.",
                    "author": "Mark L."
                  }
                ]
              },
              "Windowsxp": {
                "title": "Microsoft Windows Support",
                "bannerImg": "https://res.cloudinary.com/dcf3mojai/image/upload/v1738593055/windows-banner.png",
                "backgroundImage": "",
                "logo": "https://res.cloudinary.com/dcf3mojai/image/upload/v1738929928/250596_kykvis.png",
                "whyChoose": "Microsoft Windows is the most widely used operating system worldwide, offering a user-friendly interface, powerful security features, and seamless integration with Microsoft services. It provides unparalleled performance, compatibility, and innovation, making it the preferred choice for both individuals and businesses.",
                "contact": {
                  "supportPhone": "+1 (800) 642-7676",
                  "supportEmail": "support@microsoft.com",
                  "website": "https://www.microsoft.com/windows"
                },
                "benefits": [
                  {
                    "title": "Enhanced Security",
                    "desc": "Built-in security features like Windows Defender and BitLocker protect against viruses, malware, and cyber threats.",
                    "icon": "https://img.icons8.com/ios-filled/50/security-shield-green.png"
                  },
                  {
                    "title": "Seamless Performance",
                    "desc": "Optimized for fast boot times, multitasking, and high performance across devices.",
                    "icon": "https://img.icons8.com/ios-filled/50/performance.png"
                  },
                  {
                    "title": "User-Friendly Interface",
                    "desc": "Intuitive design with customizable features for an enhanced user experience.",
                    "icon": "https://img.icons8.com/ios-filled/50/000000/happy.png"
                  }
                ],
                "features": [
                  "Advanced Security with built-in Windows Defender Antivirus and Firewall.",
                  "Seamless Multitasking with virtual desktops and improved window management.",
                  "Automatic Updates for the latest security patches and software improvements.",
                  "Microsoft Edge Browser for fast, secure, and private web browsing.",
                  "Cortana Virtual Assistant for voice commands and productivity enhancements.",
                  "OneDrive Cloud Storage for secure and accessible file management.",
                  "Remote Desktop Access for connecting to your PC from anywhere.",
                  "Gaming Optimization with DirectX support for immersive gaming experiences.",
                  "Compatibility with a vast range of applications and hardware.",
                  "BitLocker Encryption for securing sensitive data against unauthorized access.",
                  "Touchscreen & Pen Support for a versatile computing experience.",
                  "Parental Controls to monitor and manage children's digital activities.",
                  "Business Features like Windows Sandbox and Group Policy for enterprise security.",
                  "24/7 Microsoft Support for technical assistance and troubleshooting."
                ],
                "testimonials": [
                  {
                    "quote": "Windows provides the best combination of security, performance, and ease of use.",
                    "author": "John D."
                  },
                  {
                    "quote": "I love how Windows automatically updates and keeps my system secure without any hassle.",
                    "author": "Emily W."
                  },
                  {
                    "quote": "Remote Desktop access allows me to work from anywhere seamlessly.",
                    "author": "Michael T."
                  },
                  {
                    "quote": "The seamless integration with Microsoft Office and OneDrive makes work so much easier!",
                    "author": "Sarah K."
                  },
                  {
                    "quote": "Gaming on Windows is an absolute delight with DirectX 12 and Game Mode.",
                    "author": "Daniel P."
                  },
                  {
                    "quote": "BitLocker encryption keeps my confidential files safe from unauthorized access.",
                    "author": "Lisa M."
                  },
                  {
                    "quote": "Windows Defender gives me peace of mind knowing my PC is always protected.",
                    "author": "Kevin R."
                  },
                  {
                    "quote": "The latest Windows updates have improved speed and battery life significantly.",
                    "author": "Sophia J."
                  },
                  {
                    "quote": "Cortana helps me organize my daily tasks efficiently.",
                    "author": "Rachel H."
                  },
                  {
                    "quote": "Windows' user interface is clean, intuitive, and customizable to my needs.",
                    "author": "Mark L."
                  }
                ]
              },
                "hp": {
                  "title": "HP Printer Support",
                  "bannerImg": "https://res.cloudinary.com/dcf3mojai/image/upload/v1738675001/hp-banner.png",
                  "backgroundImage": "",
                  "logo": "https://res.cloudinary.com/dcf3mojai/image/upload/v1738937195/HP-Logo_jkkkni.png",
                  "whyChoose": "HP is a globally recognized leader in printing technology, offering high-quality, reliable, and efficient printing solutions for home and business users. With cutting-edge innovation, seamless connectivity, and cost-effective performance, HP printers are designed to meet the diverse needs of users worldwide.",
                  "contact": {
                    "supportPhone": "+1 (800) 474-6836",
                    "supportEmail": "support@hp.com",
                    "website": "https://www.hp.com/support"
                  },
                 "benefits": [
    {
      "title": "High-Quality Printing",
      "desc": "HP printers deliver sharp text, vibrant colors, and professional-quality prints.",
      "icon": "https://img.icons8.com/ios-filled/50/000000/print.png"
    },
    {
      "title": "Wireless & Mobile Printing",
      "desc": "Easily print from your smartphone, tablet, or laptop with HP ePrint and Wi-Fi Direct.",
      "icon": "https://img.icons8.com/ios-filled/50/000000/wifi.png"
    },
    {
      "title": "Cost-Effective Ink & Toner",
      "desc": "HP Instant Ink subscription ensures affordable and hassle-free ink replacements.",
      "icon": "https://img.icons8.com/ios-filled/50/000000/money.png"
    }
  ],
                  "features": [
                    "Fast Printing Speeds for high-volume document and photo printing.",
                    "HP Smart App for remote printing and scanning from mobile devices.",
                    "Energy-Efficient Technology for reduced power consumption.",
                    "Automatic Duplex Printing to save paper and reduce waste.",
                    "High-Resolution Output ensuring professional-grade prints.",
                    "Seamless Cloud Integration with Google Drive, Dropbox, and OneDrive.",
                    "HP Security Features to protect sensitive data and prevent cyber threats.",
                    "Large Paper Capacity for efficient bulk printing.",
                    "Instant Ink Subscription for automatic ink delivery before you run out.",
                    "Borderless Printing for stunning photos and marketing materials.",
                    "Multi-Function Capabilities including scanning, copying, and faxing.",
                    "Wide Compatibility with Windows, Mac, and mobile operating systems.",
                    "Eco-Friendly Cartridges with recyclable materials to reduce waste.",
                    "24/7 HP Customer Support for troubleshooting and assistance."
                  ],
                  "testimonials": [
                    {
                      "quote": "HP printers offer the best combination of affordability and performance.",
                      "author": "James P."
                    },
                    {
                      "quote": "I love the HP Smart App—it makes printing from my phone so easy!",
                      "author": "Emily R."
                    },
                    {
                      "quote": "The print quality is outstanding, even for detailed graphics.",
                      "author": "Michael T."
                    },
                    {
                      "quote": "With HP Instant Ink, I never worry about running out of ink anymore.",
                      "author": "Sarah K."
                    },
                    {
                      "quote": "My HP LaserJet is fast, reliable, and perfect for my home office.",
                      "author": "Daniel P."
                    },
                    {
                      "quote": "Duplex printing has saved me a ton of paper and money.",
                      "author": "Lisa M."
                    },
                    {
                      "quote": "Wireless printing from my phone works flawlessly every time.",
                      "author": "Kevin R."
                    },
                    {
                      "quote": "HP's security features keep my confidential documents safe.",
                      "author": "Sophia J."
                    },
                    {
                      "quote": "Their customer support is fantastic! Resolved my issue in no time.",
                      "author": "Rachel H."
                    },
                    {
                      "quote": "HP printers are easy to set up, use, and maintain. Highly recommend!",
                      "author": "Mark L."
                    }
                  ]
                },
                "canon": {
    "title": "Canon Printer Support",
    "bannerImg": "https://res.cloudinary.com/dcf3mojai/image/upload/v1738675001/canon-banner.png",
    "backgroundImage": "",
    "logo": "https://res.cloudinary.com/dcf3mojai/image/upload/v1738937079/Canon-Logo_ucilpk.png",
    "whyChoose": "Canon is a leading brand in imaging and printing technology, offering high-quality, innovative, and reliable printers for home and professional use. With superior print quality, efficient performance, and seamless connectivity, Canon printers deliver exceptional value for users worldwide.",
    "contact": {
      "supportPhone": "+1 (800) 652-2666",
      "supportEmail": "support@canon.com",
      "website": "https://www.usa.canon.com/support"
    },
    "benefits": [
      {
        "title": "Superior Print Quality",
        "desc": "Canon printers produce crisp text and vibrant colors with advanced imaging technology.",
        "icon": "https://img.icons8.com/ios-filled/50/000000/print.png"
      },
      {
        "title": "Seamless Wireless Printing",
        "desc": "Print directly from your smartphone, tablet, or cloud services using Wi-Fi and AirPrint.",
        "icon": "https://img.icons8.com/ios-filled/50/000000/wifi.png"
      },
      {
        "title": "Cost-Effective Ink Solutions",
        "desc": "Canon MegaTank and XL cartridges provide high page yields and low-cost printing.",
        "icon": "https://img.icons8.com/ios-filled/50/000000/budget.png"
      }
    ],
    "features": [
      "High-Resolution Printing for professional-quality photos and documents.",
      "Canon PRINT App for easy wireless printing and scanning.",
      "Fast Print Speeds for efficient high-volume printing.",
      "Auto Duplex Printing to save paper and reduce waste.",
      "Inkjet and Laser Options for versatile printing solutions.",
      "Borderless Photo Printing for stunning edge-to-edge prints.",
      "Cloud Connectivity with Google Drive, Dropbox, and OneDrive.",
      "Mobile Printing with AirPrint, Mopria, and Google Cloud Print.",
      "Quiet Mode for reduced noise levels during operation.",
      "Built-in Scanner & Copier for multi-function capabilities.",
      "Eco-Friendly Ink Cartridges designed for minimal environmental impact.",
      "High-Yield Ink Cartridges for cost-efficient printing.",
      "Energy-Efficient Printing for reduced power consumption.",
      "24/7 Canon Customer Support for expert assistance."
    ],
    "testimonials": [
      {
        "quote": "Canon printers deliver exceptional print quality for both photos and documents.",
        "author": "James P."
      },
      {
        "quote": "The Canon PRINT app makes wireless printing a breeze!",
        "author": "Emily R."
      },
      {
        "quote": "Fast, efficient, and great for my home office setup.",
        "author": "Michael T."
      },
      {
        "quote": "MegaTank ink saves me money with its high page yield.",
        "author": "Sarah K."
      },
      {
        "quote": "Borderless printing is perfect for my photography projects.",
        "author": "Daniel P."
      },
      {
        "quote": "Canon's cloud integration allows me to print directly from Google Drive.",
        "author": "Lisa M."
      },
      {
        "quote": "Wireless printing works flawlessly across all my devices.",
        "author": "Kevin R."
      },
      {
        "quote": "Auto duplex printing has helped me cut down on paper waste.",
        "author": "Sophia J."
      },
      {
        "quote": "Canon support is excellent! They helped me resolve my setup issue quickly.",
        "author": "Rachel H."
      },
      {
        "quote": "Quiet Mode is great when I need to print late at night without disturbing anyone.",
        "author": "Mark L."
      }
    ]
  },
  "epson": {
    "title": "Epson Printer Support",
    "bannerImg": "https://res.cloudinary.com/dcf3mojai/image/upload/v1738675001/epson-banner.png",
    "backgroundImage": "",
    "logo": "https://res.cloudinary.com/dcf3mojai/image/upload/v1738937126/Epson-Logo_hjzall.png",
    "whyChoose": "Epson is a leader in innovative printing technology, offering high-performance, eco-friendly, and cost-effective solutions for home, office, and professional printing. With precision engineering and cutting-edge ink technology, Epson printers provide reliability and superior print quality.",
    "contact": {
      "supportPhone": "+1 (800) 463-7766",
      "supportEmail": "support@epson.com",
      "website": "https://www.epson.com/support"
    },
    "benefits": [
    {
      "title": "EcoTank Technology",
      "desc": "Epson’s revolutionary ink tank system offers ultra-low-cost printing with refillable ink bottles.",
      "icon": "https://img.icons8.com/ios-filled/50/000000/print.png"
    },
    {
      "title": "Wireless & Cloud Printing",
      "desc": "Print from anywhere using Wi-Fi, Epson Connect, Google Cloud Print, and Apple AirPrint.",
      "icon": "https://img.icons8.com/ios-filled/50/000000/wifi.png"
    },
    {
      "title": "High-Resolution PrecisionCore Technology",
      "desc": "Delivers sharp text, vibrant colors, and professional-grade prints for documents and photos.",
      "icon": "https://img.icons8.com/external-icons-smashing-stocks/68/external-Precision-military-icon-icons-smashing-stocks.png"
    }
  ],
    "features": [
      "EcoTank Ink System for cost-effective printing without cartridges.",
      "Epson PrecisionCore Technology for laser-quality output.",
      "Fast Print Speeds for efficient high-volume printing.",
      "Wireless Connectivity for seamless printing from any device.",
      "Automatic Duplex Printing to save paper and reduce costs.",
      "Borderless Photo Printing for stunning edge-to-edge prints.",
      "Epson Smart Panel App for mobile control and scanning.",
      "High-Yield Ink Bottles for long-lasting performance.",
      "Low Power Consumption for energy-efficient printing.",
      "Multi-Function Capabilities including scan, copy, and fax.",
      "Cloud Printing with Google Drive, Dropbox, and OneDrive.",
      "Wide Format Printing for posters and creative projects.",
      "Eco-Friendly Printing with recyclable ink bottles.",
      "24/7 Epson Customer Support for troubleshooting and assistance."
    ],
    "testimonials": [
      {
        "quote": "Epson EcoTank saves me money on ink while delivering top-quality prints.",
        "author": "James P."
      },
      {
        "quote": "Wireless printing works seamlessly across my devices, making printing effortless.",
        "author": "Emily R."
      },
      {
        "quote": "I love the borderless photo printing feature—it’s perfect for my photography business.",
        "author": "Michael T."
      },
      {
        "quote": "The ink tank system is a game-changer! No more expensive cartridges.",
        "author": "Sarah K."
      },
      {
        "quote": "Fast, reliable, and great for my small business needs.",
        "author": "Daniel P."
      },
      {
        "quote": "Epson’s mobile app makes scanning and printing from my phone so convenient.",
        "author": "Lisa M."
      },
      {
        "quote": "I appreciate the eco-friendly design and low power consumption.",
        "author": "Kevin R."
      },
      {
        "quote": "Duplex printing helps me cut down on paper waste.",
        "author": "Sophia J."
      },
      {
        "quote": "Customer support was quick and helpful in resolving my issue.",
        "author": "Rachel H."
      },
      {
        "quote": "The print quality is sharp, vibrant, and professional-grade.",
        "author": "Mark L."
      }
    ]
  },
  "netgear": {
    "title": "Netgear Printer Support",
    "bannerImg": "https://res.cloudinary.com/dcf3mojai/image/upload/v1738675001/netgear-banner.png",
    "backgroundImage": "",
    "logo": "https://res.cloudinary.com/dcf3mojai/image/upload/v1740500792/Netgear-Logo.wine_wiehvt.png",
    "whyChoose": "Netgear provides cutting-edge networking solutions that enhance connectivity, speed, and security. With advanced wireless technology and seamless integration, Netgear ensures smooth and efficient printing for homes, businesses, and enterprises.",
    "contact": {
      "supportPhone": "+1 (888) 638-4327",
      "supportEmail": "support@netgear.com",
      "website": "https://www.netgear.com/support"
    },
    "benefits": [
    {
      "title": "Seamless Network Integration",
      "desc": "Netgear routers ensure stable and high-speed connectivity for uninterrupted printing.",
      "icon": "https://img.icons8.com/ios-filled/50/000000/network.png"
    },
    {
      "title": "Advanced Security Features",
      "desc": "Protect your network and devices with WPA3 encryption, firewalls, and VPN support.",
      "icon": "https://img.icons8.com/ios-filled/50/000000/security-checked.png"
    },
    {
      "title": "Wi-Fi 6 & Mesh Technology",
      "desc": "Experience faster speeds, wider coverage, and enhanced connectivity for multiple devices.",
      "icon": "https://img.icons8.com/ios-filled/50/000000/wifi-router.png"
    }
  ],
    "features": [
      "High-Speed Wi-Fi 6 and Mesh Networking for smooth printing and connectivity.",
      "Smart Parental Controls and Security for safe browsing and data protection.",
      "Dual-Band and Tri-Band Technology for optimized bandwidth allocation.",
      "Netgear Nighthawk App for easy setup and remote management.",
      "Seamless Compatibility with AirPrint, Google Cloud Print, and other wireless protocols.",
      "MU-MIMO & Beamforming+ Technology for stable and fast connections.",
      "Gigabit Ethernet Ports for high-speed wired connectivity.",
      "Cloud-Based Management for business and enterprise solutions.",
      "USB Printer Sharing for network-wide access to a single printer.",
      "Automatic Firmware Updates for security and performance improvements.",
      "Advanced QoS (Quality of Service) to prioritize printing tasks.",
      "Eco-Friendly Design with low power consumption.",
      "24/7 Netgear Customer Support for assistance and troubleshooting."
    ],
    "testimonials": [
      {
        "quote": "Netgear’s Wi-Fi 6 router improved my printer’s connectivity and speed dramatically.",
        "author": "John D."
      },
      {
        "quote": "The security features give me peace of mind while printing sensitive documents.",
        "author": "Emily S."
      },
      {
        "quote": "I love the seamless integration with my wireless printer and smart home devices.",
        "author": "Michael B."
      },
      {
        "quote": "Mesh networking has eliminated dead zones, making printing easier anywhere in my home.",
        "author": "Sarah W."
      },
      {
        "quote": "The Nighthawk app is so easy to use—I can manage everything from my phone.",
        "author": "Daniel M."
      },
      {
        "quote": "Printer sharing via the USB port has been a game-changer for my office setup.",
        "author": "Lisa T."
      },
      {
        "quote": "Fast speeds and stable connections make printing a breeze, even for high-volume jobs.",
        "author": "Kevin J."
      },
      {
        "quote": "Netgear’s support team helped me set up my printer effortlessly.",
        "author": "Sophia L."
      },
      {
        "quote": "The dual-band technology ensures smooth printing without network congestion.",
        "author": "Rachel P."
      },
      {
        "quote": "Great performance and reliable connectivity—perfect for my small business!",
        "author": "Mark R."
      }
    ]
  },
  "tplink": {
    "title": "TP-Link Printer Support",
    "bannerImg": "https://res.cloudinary.com/dcf3mojai/image/upload/v1738675001/tp-link-banner.png",
    "backgroundImage": "",
    "logo": "https://res.cloudinary.com/dcf3mojai/image/upload/v1740500857/TP-Link-Logo.wine_fdplj8.png",
    "whyChoose": "TP-Link delivers high-speed, reliable networking solutions designed for seamless printing and smart connectivity. With innovative Wi-Fi technology, security features, and easy setup, TP-Link ensures smooth printing experiences for home and business users.",
    "contact": {
      "supportPhone": "+1 (866) 225-8139",
      "supportEmail": "support@tp-link.com",
      "website": "https://www.tp-link.com/support"
    },
    "benefits": [
    {
      "title": "Stable & High-Speed Connectivity",
      "desc": "TP-Link routers provide strong, uninterrupted network connections for seamless printing.",
      "icon": "https://img.icons8.com/ios-filled/50/000000/network.png"
    },
    {
      "title": "Advanced Security & Encryption",
      "desc": "Secure your network with WPA3, VPN support, and built-in firewalls to protect your data.",
      "icon": "https://img.icons8.com/ios-filled/50/000000/security-checked.png"
    },
    {
      "title": "Easy Setup & Smart Management",
      "desc": "Manage your network and printing devices with the TP-Link Tether App and cloud services.",
      "icon": "https://img.icons8.com/ios-filled/50/000000/settings.png"
    }
  ],
    "features": [
      "Wi-Fi 6 & Dual-Band Connectivity for faster, more reliable printing.",
      "OneMesh Technology for seamless whole-home coverage and stable connections.",
      "Smart Connect for automatic optimization of bandwidth allocation.",
      "TP-Link Tether App for easy setup, monitoring, and management.",
      "USB Printer Sharing for network-wide printer access.",
      "WPA3 Encryption & Built-in Firewalls for enhanced security and data protection.",
      "Parental Controls & Guest Network options for controlled access.",
      "Cloud-Based Management via TP-Link Cloud for remote monitoring.",
      "Gigabit Ethernet Ports for high-speed wired connections.",
      "Multi-Device Support with MU-MIMO and OFDMA technology.",
      "Energy-Efficient Networking to reduce power consumption.",
      "Seamless Compatibility with AirPrint, Google Cloud Print, and Wi-Fi Direct Printing.",
      "Automatic Firmware Updates to keep your network secure and optimized.",
      "24/7 TP-Link Customer Support for troubleshooting and technical assistance."
    ],
    "testimonials": [
      {
        "quote": "TP-Link’s router eliminated my printer connectivity issues with its strong signal.",
        "author": "James T."
      },
      {
        "quote": "The easy setup and mobile app make managing my network and printer simple.",
        "author": "Emily D."
      },
      {
        "quote": "I love the OneMesh feature—printing is seamless from anywhere in my house.",
        "author": "Michael S."
      },
      {
        "quote": "Network security is a priority for me, and TP-Link delivers with WPA3 encryption.",
        "author": "Sarah K."
      },
      {
        "quote": "The USB printer sharing feature has been a game-changer for my office setup.",
        "author": "Daniel P."
      },
      {
        "quote": "Fast speeds, no drops—perfect for my high-volume printing needs.",
        "author": "Lisa R."
      },
      {
        "quote": "I appreciate the energy-efficient design, reducing my power costs.",
        "author": "Kevin B."
      },
      {
        "quote": "Great support team! They quickly helped me configure my network printer.",
        "author": "Sophia J."
      },
      {
        "quote": "The guest network feature lets my clients print without accessing my main network.",
        "author": "Rachel H."
      },
      {
        "quote": "Seamless printing with my TP-Link router—no more connectivity headaches!",
        "author": "Mark L."
      }
    ]
  },
  "asus": {
    "title": "Asus Printer Support",
    "bannerImg": "https://res.cloudinary.com/dcf3mojai/image/upload/v1738675001/asus-banner.png",
    "backgroundImage": "",
    "logo": "https://res.cloudinary.com/dcf3mojai/image/upload/v1740500941/Asus-Logo_pindua.png",
    "whyChoose": "Asus offers high-performance networking solutions with ultra-fast speeds, advanced security, and seamless connectivity for efficient printing. With innovative Wi-Fi technology and AI-driven optimization, Asus routers provide reliable and stable connections for home and business printing needs.",
    "contact": {
      "supportPhone": "+1 (888) 678-3688",
      "supportEmail": "support@asus.com",
      "website": "https://www.asus.com/support"
    },
    "benefits": [
    {
      "title": "Ultra-Fast & Stable Connectivity",
      "desc": "Asus routers deliver high-speed, uninterrupted connections for hassle-free wireless printing.",
      "icon": "https://img.icons8.com/ios-filled/50/000000/network.png"
    },
    {
      "title": "AI-Driven Security & Protection",
      "desc": "Advanced AiProtection Pro with WPA3 encryption ensures your network and printers are secure.",
      "icon": "https://img.icons8.com/ios-filled/50/000000/security-checked.png"
    },
    {
      "title": "Easy Setup & Smart Management",
      "desc": "The Asus Router App and Web UI allow seamless setup, monitoring, and printer integration.",
      "icon": "https://img.icons8.com/ios-filled/50/000000/settings.png"
    }
  ],
    "features": [
      "Wi-Fi 6 & Dual-Band / Tri-Band Connectivity for faster, more reliable printing.",
      "AiMesh Technology for whole-home seamless network coverage.",
      "AiProtection Pro with WPA3 encryption for enhanced security and privacy.",
      "Adaptive QoS for prioritizing printer tasks in busy networks.",
      "USB Printer Sharing for network-wide access to a single printer.",
      "Gaming & Work Optimization with ultra-low latency connections.",
      "Asus Router App for real-time monitoring and easy management.",
      "Parental Controls & Guest Network for restricted access options.",
      "OFDMA & MU-MIMO Technology for multiple device support.",
      "Cloud-Based Remote Access for easy printer and network control.",
      "Energy-Efficient Networking to reduce power consumption.",
      "Seamless Compatibility with AirPrint, Google Cloud Print, and Wi-Fi Direct Printing.",
      "Automatic Firmware Updates for security and performance enhancements.",
      "24/7 Asus Customer Support for troubleshooting and technical assistance."
    ],
    "testimonials": [
      {
        "quote": "Asus’s AiMesh feature ensures my printer stays connected everywhere in my home.",
        "author": "James T."
      },
      {
        "quote": "The security features give me peace of mind while printing sensitive documents.",
        "author": "Emily D."
      },
      {
        "quote": "I love the Asus Router App—managing my network and printer has never been easier!",
        "author": "Michael S."
      },
      {
        "quote": "Ultra-fast Wi-Fi 6 speeds make printing quick and seamless, even with multiple devices.",
        "author": "Sarah K."
      },
      {
        "quote": "The USB printer sharing feature is a game-changer for my home office.",
        "author": "Daniel P."
      },
      {
        "quote": "Stable connectivity and fast speeds—perfect for my high-volume printing needs.",
        "author": "Lisa R."
      },
      {
        "quote": "Asus AiProtection Pro keeps my printers and network secure from threats.",
        "author": "Kevin B."
      },
      {
        "quote": "Customer support was quick and helpful in setting up my network printer.",
        "author": "Sophia J."
      },
      {
        "quote": "I love the Adaptive QoS feature—it prioritizes my printer jobs automatically.",
        "author": "Rachel H."
      },
      {
        "quote": "Asus’s advanced networking makes printing effortless, no more connectivity issues!",
        "author": "Mark L."
      }
    ]
  },
  "dlink": {
    "title": "D-Link Printer Support",
    "bannerImg": "https://res.cloudinary.com/dcf3mojai/image/upload/v1738675001/d-link-banner.png",
    "backgroundImage": "",
    "logo": "https://res.cloudinary.com/dcf3mojai/image/upload/v1740500998/D-Link-Logo.wine_b2amaw.svg",
    "whyChoose": "D-Link offers advanced networking solutions that provide high-speed, secure, and stable connections for seamless printing. With innovative Wi-Fi technology and smart management tools, D-Link ensures effortless printing for both home and business users.",
    "contact": {
      "supportPhone": "+1 (877) 453-5465",
      "supportEmail": "support@dlink.com",
      "website": "https://www.dlink.com/support"
    },
    "benefits": [
    {
      "title": "Reliable & High-Speed Connectivity",
      "desc": "D-Link routers provide strong and consistent network coverage for uninterrupted printing.",
      "icon": "https://img.icons8.com/ios-filled/50/000000/network.png"
    },
    {
      "title": "Advanced Security Features",
      "desc": "Protect your network and printers with WPA3 encryption, VPN support, and firewall protection.",
      "icon": "https://img.icons8.com/ios-filled/50/000000/security-checked.png"
    },
    {
      "title": "Easy Setup & Smart Management",
      "desc": "The D-Link Wi-Fi App allows easy router setup, printer connectivity, and remote monitoring.",
      "icon": "https://img.icons8.com/ios-filled/50/000000/settings.png"
    }
  ],
    "features": [
      "Wi-Fi 6 & Dual-Band Technology for faster and more reliable printing.",
      "D-Link Mesh Wi-Fi for seamless whole-home coverage and stable printer connections.",
      "Smart QoS for prioritizing print jobs in busy networks.",
      "USB Printer Sharing for network-wide printer access.",
      "WPA3 Encryption & Firewall Security for enhanced data protection.",
      "D-Link Wi-Fi App for easy setup, monitoring, and network management.",
      "Parental Controls & Guest Network for controlled access.",
      "OFDMA & MU-MIMO Technology for multiple device connectivity.",
      "Energy-Efficient Networking to reduce power consumption.",
      "Seamless Compatibility with AirPrint, Google Cloud Print, and Wi-Fi Direct Printing.",
      "Automatic Firmware Updates to keep your network optimized and secure.",
      "Cloud-Based Management for remote network control.",
      "24/7 D-Link Customer Support for technical assistance and troubleshooting."
    ],
    "testimonials": [
      {
        "quote": "D-Link’s mesh networking ensures my printer stays connected anywhere in my home.",
        "author": "James P."
      },
      {
        "quote": "The security features keep my network and printer safe from cyber threats.",
        "author": "Emily R."
      },
      {
        "quote": "I love how easy it is to set up my printer with the D-Link Wi-Fi App!",
        "author": "Michael T."
      },
      {
        "quote": "Fast speeds and seamless connectivity make printing effortless.",
        "author": "Sarah K."
      },
      {
        "quote": "The USB printer sharing feature is perfect for my office setup.",
        "author": "Daniel P."
      },
      {
        "quote": "Reliable performance and excellent customer support!",
        "author": "Lisa M."
      },
      {
        "quote": "D-Link’s smart QoS helps prioritize my print jobs without slowing down my network.",
        "author": "Kevin R."
      },
      {
        "quote": "I appreciate the energy-efficient design—it reduces my power consumption.",
        "author": "Sophia J."
      },
      {
        "quote": "Customer support quickly helped me set up my wireless printer.",
        "author": "Rachel H."
      },
      {
        "quote": "The print quality is excellent, and I never experience network drops!",
        "author": "Mark L."
      }
    ]
  },
  "cisco": {
    "title": "Cisco Printer Support",
    "bannerImg": "https://res.cloudinary.com/dcf3mojai/image/upload/v1738675001/cisco-banner.png",
    "backgroundImage": "",
    "logo": "https://res.cloudinary.com/dcf3mojai/image/upload/v1740584434/Cisco-logo_mttz72.png",
    "whyChoose": "Cisco provides enterprise-grade networking solutions with high-speed connectivity, advanced security, and seamless printer integration. Designed for reliability, Cisco routers and switches ensure stable connections for uninterrupted printing in home and business environments.",
    "contact": {
      "supportPhone": "+1 (800) 553-2447",
      "supportEmail": "support@cisco.com",
      "website": "https://www.cisco.com/support"
    },
    "benefits": [
    {
      "title": "Enterprise-Grade Network Reliability",
      "desc": "Cisco routers and switches offer fast, stable, and uninterrupted printing connectivity.",
      "icon": "https://img.icons8.com/ios-filled/50/000000/network.png"
    },
    {
      "title": "Advanced Security & Encryption",
      "desc": "Protect printers and sensitive data with Cisco’s industry-leading firewalls and VPN security.",
      "icon": "https://img.icons8.com/ios-filled/50/000000/security-checked.png"
    },
    {
      "title": "Intelligent Network Management",
      "desc": "Monitor and optimize printer connections with Cisco’s cloud-based network solutions.",
      "icon": "https://img.icons8.com/ios-filled/50/000000/settings.png"
    }
  ],
    "features": [
      "Wi-Fi 6 & Multi-Gigabit Connectivity for seamless and high-speed printing.",
      "Cisco Secure Firewall & WPA3 Encryption for maximum network protection.",
      "Cloud-Managed Networking with Cisco Meraki for remote printer monitoring.",
      "USB Printer Sharing for easy network-wide printing access.",
      "Intelligent QoS for prioritizing printing traffic in busy networks.",
      "Cisco AnyConnect VPN for secure remote access to printers.",
      "AI-Powered Network Analytics for enhanced performance and troubleshooting.",
      "Energy-Efficient Networking to optimize power consumption.",
      "Seamless Compatibility with AirPrint, Google Cloud Print, and Wi-Fi Direct.",
      "Cisco Webex Integration for collaborative printing and sharing.",
      "24/7 Cisco TAC (Technical Assistance Center) for enterprise-level support.",
      "Automatic Firmware Updates to ensure security and performance.",
      "Multi-Device Support with MU-MIMO and OFDMA technology.",
      "Layer 3 Switching for advanced network management and traffic control."
    ],
    "testimonials": [
      {
        "quote": "Cisco’s networking solutions ensure my office printers work flawlessly without interruptions.",
        "author": "James P."
      },
      {
        "quote": "The enterprise-level security features keep our printer network completely secure.",
        "author": "Emily R."
      },
      {
        "quote": "Cisco Meraki makes it easy to monitor and manage printer connections remotely.",
        "author": "Michael T."
      },
      {
        "quote": "I love how the intelligent QoS automatically prioritizes printing jobs when needed.",
        "author": "Sarah K."
      },
      {
        "quote": "Fast speeds and stable connections—perfect for high-volume office printing.",
        "author": "Daniel P."
      },
      {
        "quote": "Cisco’s VPN support allows me to access my network printer securely from anywhere.",
        "author": "Lisa M."
      },
      {
        "quote": "The cloud management feature helps us monitor print activity across multiple locations.",
        "author": "Kevin R."
      },
      {
        "quote": "Energy-efficient networking saves costs while keeping our printers running smoothly.",
        "author": "Sophia J."
      },
      {
        "quote": "Cisco’s customer support is top-notch—they quickly resolved my connectivity issues.",
        "author": "Rachel H."
      },
      {
        "quote": "We’ve never had a better printing experience since upgrading to Cisco networking.",
        "author": "Mark L."
      }
    ]
  }         
      
  };


// Context Provider Component
export const CatedataProvider = ({ children }) => {
  return (
    <CategorydataContext.Provider value={categoryData}>
      {children}
    </CategorydataContext.Provider>
  );
};

// Hook to use the Metadata Context
export const useCatedata = () => {
  return useContext(CategorydataContext);
};
