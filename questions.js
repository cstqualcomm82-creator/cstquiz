// Array of 30 connectivity system testing questions with options
const quizQuestions = [
    {
        question: "Which protocol operates at the Transport layer of the OSI model?",
        options: ["HTTP", "TCP", "IP", "Ethernet"],
        correctAnswer: "TCP"
    },
    {
        question: "What is the default subnet mask for a Class C network?",
        options: ["255.0.0.0", "255.255.0.0", "255.255.255.0", "255.255.255.255"],
        correctAnswer: "255.255.255.0"
    },
    {
        question: "Which command is used to test connectivity to another network device?",
        options: ["ipconfig", "tracert", "ping", "netstat"],
        correctAnswer: "ping"
    },
    {
        question: "What does DHCP stand for?",
        options: ["Dynamic Host Configuration Protocol", "Domain Host Control Program", "Digital Host Control Protocol", "Dynamic Host Control Program"],
        correctAnswer: "Dynamic Host Configuration Protocol"
    },
    {
        question: "Which of the following is not a private IP address range?",
        options: ["10.0.0.0/8", "172.16.0.0/12", "192.168.0.0/16", "192.0.2.0/24"],
        correctAnswer: "192.0.2.0/24"
    },
    {
        question: "What is the maximum transmission unit (MTU) size for standard Ethernet?",
        options: ["1500 bytes", "1000 bytes", "576 bytes", "9000 bytes"],
        correctAnswer: "1500 bytes"
    },
    {
        question: "Which protocol is used to automatically assign IP addresses to devices on a network?",
        options: ["DNS", "DHCP", "SMTP", "FTP"],
        correctAnswer: "DHCP"
    },
    {
        question: "What does NAT stand for in networking?",
        options: ["Network Address Translation", "Network Access Terminal", "Network Authentication Technology", "Native Address Transfer"],
        correctAnswer: "Network Address Translation"
    },
    {
        question: "Which layer of the OSI model is responsible for routing and forwarding?",
        options: ["Data Link Layer", "Network Layer", "Transport Layer", "Session Layer"],
        correctAnswer: "Network Layer"
    },
    {
        question: "Which protocol is used to resolve IP addresses to MAC addresses?",
        options: ["DNS", "ARP", "DHCP", "ICMP"],
        correctAnswer: "ARP"
    },
    {
        question: "What is the port number for HTTPS?",
        options: ["80", "443", "22", "25"],
        correctAnswer: "443"
    },
    {
        question: "Which command shows the routing table on a Windows system?",
        options: ["route print", "show route", "netstat -r", "Both A and C"],
        correctAnswer: "Both A and C"
    },
    {
        question: "What is the purpose of a subnet mask?",
        options: ["To identify the network portion of an IP address", "To encrypt network traffic", "To block unwanted traffic", "To increase network speed"],
        correctAnswer: "To identify the network portion of an IP address"
    },
    {
        question: "Which of the following is a link-state routing protocol?",
        options: ["RIP", "OSPF", "BGP", "EIGRP"],
        correctAnswer: "OSPF"
    },
    {
        question: "What is the purpose of DNS in networking?",
        options: ["To assign IP addresses", "To resolve domain names to IP addresses", "To secure network connections", "To route network traffic"],
        correctAnswer: "To resolve domain names to IP addresses"
    },
    {
        question: "Which protocol is used for secure shell connections?",
        options: ["Telnet", "FTP", "SSH", "HTTP"],
        correctAnswer: "SSH"
    },
    {
        question: "What is the default gateway in a network?",
        options: ["The router that connects to the internet", "The DNS server", "The DHCP server", "The main switch"],
        correctAnswer: "The router that connects to the internet"
    },
    {
        question: "Which command is used to display all current TCP/IP network configuration values?",
        options: ["ping", "ipconfig /all", "netstat", "tracert"],
        correctAnswer: "ipconfig /all"
    },
    {
        question: "What is the purpose of a firewall in a network?",
        options: ["To boost network speed", "To filter network traffic based on security rules", "To assign IP addresses", "To connect multiple networks"],
        correctAnswer: "To filter network traffic based on security rules"
    },
    {
        question: "Which of the following is not a valid IPv4 address?",
        options: ["192.168.1.1", "256.0.0.1", "10.0.0.1", "172.16.0.1"],
        correctAnswer: "256.0.0.1"
    },
    {
        question: "What does TTL stand for in networking?",
        options: ["Time To Live", "Transfer Type Layer", "Total Traffic Load", "Transmission Time Limit"],
        correctAnswer: "Time To Live"
    },
    {
        question: "Which command would you use to trace the route to a destination?",
        options: ["ping", "tracert", "netstat", "ipconfig"],
        correctAnswer: "tracert"
    },
    {
        question: "What is the purpose of VLAN in a network?",
        options: ["To increase network speed", "To segment a network into multiple broadcast domains", "To connect to the internet", "To assign IP addresses"],
        correctAnswer: "To segment a network into multiple broadcast domains"
    },
    {
        question: "Which of the following is used to connect different networks with different protocols?",
        options: ["Hub", "Switch", "Router", "Gateway"],
        correctAnswer: "Gateway"
    },
    {
        question: "What is the IPv6 loopback address?",
        options: ["127.0.0.1", "::1", "0.0.0.0", "fe80::"],
        correctAnswer: "::1"
    },
    {
        question: "Which protocol is used for transferring files between a client and server?",
        options: ["HTTP", "SMTP", "FTP", "SNMP"],
        correctAnswer: "FTP"
    },
    {
        question: "What is the purpose of a proxy server?",
        options: ["To assign IP addresses", "To act as an intermediary between clients and servers", "To connect multiple networks", "To increase network speed"],
        correctAnswer: "To act as an intermediary between clients and servers"
    },
    {
        question: "Which network device operates at the Data Link layer?",
        options: ["Router", "Switch", "Firewall", "Load Balancer"],
        correctAnswer: "Switch"
    },
    {
        question: "What is the purpose of STP (Spanning Tree Protocol)?",
        options: ["To prevent routing loops", "To prevent switching loops", "To encrypt network traffic", "To assign IP addresses"],
        correctAnswer: "To prevent switching loops"
    },
    {
        question: "Which of the following is a connectionless protocol?",
        options: ["TCP", "UDP", "HTTP", "FTP"],
        correctAnswer: "UDP"
    }
];