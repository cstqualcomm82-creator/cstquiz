const quizQuestions = [
    {
        question: "What is the primary purpose of the Component Model in Qualcomm’s integration workflow?",
        options: [
            "To merge all code into one monolithic branch",
            "To modularize development by isolating components for independent build, test, and release",
            "To replace Gerrit with GitHub",
            "To automate JIRA ticket creation"
        ],
        correctAnswer: "To modularize development by isolating components for independent build, test, and release"
    },
    {
        question: "Which dashboard in Jarvis displays SU tags and component tag differences?",
        options: [
            "Build Status Dashboard",
            "Component Dashboard",
            "Release Tracker",
            "Gerrit Review Board"
        ],
        correctAnswer: "Component Dashboard"
    },
    {
        question: "What does “SU” stand for in the context of component model builds?",
        options: [
            "System Update",
            "Sanity Update",
            "Software Upgrade",
            "Sync Utility"
        ],
        correctAnswer: "Sanity Update"
    },
    {
        question: "Which gate in the component model checks per-Gerrit compilation before merge?",
        options: [
            "Preflight gate",
            "Lookahead gate",
            "Postflight gate",
            "Integration gate"
        ],
        correctAnswer: "Lookahead gate"
    },
    {
        question: "In Component Model 2.0, what does “+2 CR” signify in Gerrit workflow?",
        options: [
            "Two commits merged",
            "Code Review approval by tech approvers",
            "Two reviewers assigned",
            "Critical Release tag applied"
        ],
        correctAnswer: "Code Review approval by tech approvers"
    },
    {
        question: "What is the role of AU sync in component model automation?",
        options: [
            "To archive unused tags",
            "To consume latest changes from other components into the current component manifest",
            "To trigger PF testing",
            "To delete old manifests"
        ],
        correctAnswer: "To consume latest changes from other components into the current component manifest"
    },
    {
        question: "In CM 2.0, what does “Preflight” validate?",
        options: [
            "Tag promotion readiness",
            "Bulk Gerrit compilation and merge readiness",
            "AU sync status",
            "JIRA ticket closure"
        ],
        correctAnswer: "Bulk Gerrit compilation and merge readiness"
    },
    {
        question: "What automation metric improves due to Jarvis-driven auto-promotion of SU tags?",
        options: [
            "Code coverage",
            "Reduction in manual intervention and faster tag promotion cycle",
            "Increased AU frequency",
            "Gerrit review time"
        ],
        correctAnswer: "Reduction in manual intervention and faster tag promotion cycle"
    },
    {
        question: "Which workflow kicks in after Preflight failure in CM 2.0?",
        options: [
            "AU Sync Workflow",
            "Triage Workflow",
            "Tag Promotion Workflow",
            "PF Retry Workflow"
        ],
        correctAnswer: "Triage Workflow"
    },
    {
        question: "What is the significance of “PF Tag Generation” in component release testing?",
        options: [
            "It skips mandatory tests",
            "It ensures baseline + component changes pass mandatory and tech-specific tests before release",
            "It only validates AU sync",
            "It triggers JIRA ticket closure"
        ],
        correctAnswer: "It ensures baseline + component changes pass mandatory and tech-specific tests before release"
    },
    {
        question: "Which one of below is not applicable for Release branch manifest.",
        options: ["LA", "PF", "Devpool", "All"],
        correctAnswer: "Devpool"
    },
    {
        question: "Which one of these is mandatory for Lookahead to start.",
        options: ["Code review+1", "Code review+2", "Developer-Verified+1", "windevpool+1"],
        correctAnswer: "Developer-Verified+1"
    },
    {
        question: "Can we deliver ST on EOLed program?",
        options: ["Yes", "No"],
        correctAnswer: "Yes"
    },
    {
        question: "What you mean by source history shipment.",
        options: [
            "Ship NHLOS source with history format",
            "Ship HLOS source with history format",
            "Ship HLOS binary with history format",
            "Ship NHLOS binary with history format"
        ],
        correctAnswer: "Ship HLOS source with history format"
    },
    {
        question: "Can we deliver ST with Source history enabled?",
        options: ["Yes", "No"],
        correctAnswer: "No"
    },
    {
        question: "Which of the following is applicable for Mainline change.",
        options: ["Mainline source check", "Devpool", "PE voting", "None of the above"],
        correctAnswer: "Devpool"
    },
    {
        question: "Which of the following combo is not correct.",
        options: ["HK-Pine", "CYP-PINE", "HK-WKK", "ALD-WKK"],
        correctAnswer: "HK-WKK"
    },
    {
        question: "Which of the Radio supported for HK,CYP,ALD,MPL.",
        options: ["WKK", "Spruce", "Pine", "None"],
        correctAnswer: "Pine"
    },
    {
        question: "What is the primary goal of Wi-Fi sanity testing?",
        options: [
            "To perform deep packet inspection",
            "To validate basic Wi-Fi functionality after a change",
            "To test all features of the Wi-Fi system",
            "To perform security audits"
        ],
        correctAnswer: "To validate basic Wi-Fi functionality after a change"
    },
    {
        question: "Which tool is commonly used to test Wi-Fi throughput during sanity testing?",
        options: ["Selenium", "iperf", "Postman", "Chariot"],
        correctAnswer: "iperf"
    },
    {
        question: "What is the primary purpose of Helix Perforce in software development?",
        options: [
            "To manage distributed builds",
            "To provide version control for large-scale codebases",
            "To automate CI/CD pipelines",
            "To replace code review tools"
        ],
        correctAnswer: "To provide version control for large-scale codebases"
    },
    {
        question: "Which feature of Swarm is used for collaborative code reviews?",
        options: [
            "Shelving",
            "Changelists",
            "Review Workflow",
            "Branch Mapping"
        ],
        correctAnswer: "Review Workflow"
    },
    {
        question: "In Helix Perforce, what is a 'changelist'?",
        options: [
            "A list of users who made changes",
            "A set of file revisions grouped for submission",
            "A branch created for testing",
            "A review comment thread"
        ],
        correctAnswer: "A set of file revisions grouped for submission"
    },
    {
        question: "Which command in Perforce is used to sync your workspace to the latest depot version?",
        options: [
            "p4 submit",
            "p4 sync",
            "p4 edit",
            "p4 revert"
        ],
        correctAnswer: "p4 sync"
    },
    {
        question: "What does Swarm provide in addition to code review?",
        options: [
            "Automated build execution",
            "Continuous integration",
            "Activity streams and collaboration tools",
            "Binary artifact storage"
        ],
        correctAnswer: "Activity streams and collaboration tools"
    },
    {
        question: "What does Qualcomm's internal software bug tracking and change management tool?",
        options: [
            "Orbit",
            "Casqade",
            "ARIS",
            "JIRA"
        ],
        correctAnswer: "Orbit"
    },
    {
        question: "Is Lookahead and Devpool required for release branch check-in?",
        options: [
            "Yes",
            "No",
        ],
        correctAnswer: "No"
    },
    {
        question: "What tool is used for propogating change from mainline to release branch?",
        options: [
            "Casqade",
            "PCM",
            "FindIt",
            "Perforce"
        ],
        correctAnswer: "Casqade"
    },
    {
        question: "What is the correct flow of FW Code check-in?",
        options: [
            "Lookahead -> Devpool -> Promotion",
            "Lookahead -> Promotion-> Devpool",
            "Devpool -> Promotion-> Lookahead",
            "Promotion -> Devpool -> Lookahead"
        ],
        correctAnswer: "Lookahead -> Devpool -> Promotion"
    },
    {
        question: "What tool is used for integrate component labels to SI?",
        options: [
            "Casqade",
            "PCM",
            "ARIS",
            "Package Warehouse"
        ],
        correctAnswer: "ARIS"
    }
];