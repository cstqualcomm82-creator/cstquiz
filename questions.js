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
        question: "Which dashboard in Jarvis is used to trigger Testmeta?",
        options: [
            "Meta Dashboard",
            "Ondemand Dashboard",
            "Program Dashboard",
            "winint"
        ],
        correctAnswer: "Ondemand Dashboard"
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
        question: "Name of the process which does per-Gerrit or per-CL compilation before merge?",
        options: [
            "Preflight",
            "Lookahead",
            "Postflight",
            "Integration"
        ],
        correctAnswer: "Lookahead"
    },
    {
        question: "In Component Model 2.0, what does “CR +2” signify in Gerrit workflow?",
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
        options: ["Promotion", "PF", "Devpool", "All"],
        correctAnswer: "Devpool"
    },
    {
        question: "Which one of these is mandatory for Lookahead to start.",
        options: ["Code review+1", "Code review+2", "Developer-Verified+1", "windevpool+1"],
        correctAnswer: "Developer-Verified+1"
    },
    {
        question: "Can we deliver Service Task on EOLed program?",
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
        question: "Can we deliver Service Task with Source history enabled?",
        options: ["Yes", "No"],
        correctAnswer: "No"
    },
    {
        question: "Where do customers download proprietary code from?",
        options: ["Chipcode", "Docs and Downloads", "git", "Contact Qualcomm CE"],
        correctAnswer: "Chipcode"
    },
    {
        question: "Which of the following is applicable for Mainline change.",
        options: ["Mainline source check", "Devpool", "PE voting", "None of the above"],
        correctAnswer: "Devpool"
    },
    {
        question: "Which of the following combo is not correct.",
        options: ["HK+Pine", "CYP+PINE", "HK+WKK", "ALD+WKK"],
        correctAnswer: "HK+WKK"
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
        question: "What is Qualcomm's internal software bug tracking and change management tool?",
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
        question: "What tool is used for propogating perforce changelist from mainline to release branch?",
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
    },
    {
        question: "When a Gerrit is not picked for CI, what should you do?",
        options: [
        "Ping BAIT team immediately",
        "Mail BAIT team for support",
        "Don’t check with anyone, wait for it to be picked on its own",
        "Check task status on Gerrit UI"
        ],
        correctAnswer: "Check task status on Gerrit UI"
    },
    {
        question: "When there is no task status on Gerrit UI, what does it indicate?",
        options: [
        "Issue in BAIT CI system",
        "Gerrit raised on wrong repo/branch",
        "Gerrit/IT issue",
        "Ping BAIT team"
        ],
        correctAnswer: "Gerrit raised on wrong repo/branch"
    },
    {
        question: "How do we add the correct Gerrit dependency?",
        options: [
        "Mention the dependent Gerrit in patch comments",
        "Add a Git submodule reference",
        "Edit the Depends-On section on Gerrit UI",
        "Link the Gerrits manually in GitLab"
        ],
        correctAnswer: "Edit the Depends-On section on Gerrit UI"
    },
    {
        question: "When Gerrit A already has an internal Git dependency with Gerrit B, do we still need to add external dependency with Gerrit B on Gerrit A?",
        options: [
        "No",
        "Yes",
        "Only if CI fails",
        "Depends on repo type"
        ],
        correctAnswer: "No"
    },
    {
        question: "When a Gerrit fails in CI (LA/PF/KW), how do you rule out that the error is not a genuine dev issue?",
        options: [
        "Check AT report on Gerrit comment and triage failure",
        "Send mail to BAIT team to check",
        "Wait for Gerrit to be merged without reset",
        "Wait for Gerrit auto reset and merge"
        ],
        correctAnswer: "Check AT report on Gerrit comment and triage failure"
    },
    {
        question: "When can a CR be stuck in Ready state even when SI satisfies all required prerequisites?",
        options: [
        "If SI/CR moved manually from Fix to Ready by user",
        "If SI is tagged incorrectly",
        "If CR is missing post-CS tags",
        "If CI job is delayed"
        ],
        correctAnswer: "If SI/CR moved manually from Fix to Ready by user"
    },
    {
        question: "Who should add the post-CS tags in CR?",
        options: [
        "Dev",
        "BAIT team",
        "Customer",
        "ATT team"
        ],
        correctAnswer: "ATT team"
    },
    {
        question: "When will a CR move to Closed state?",
        options: [
        "Only when all the SIs mapped are in either Built/NA/Postponed",
        "When the CR is manually closed by BAIT",
        "When all Gerrits are merged",
        "When CI passes for all SIs"
        ],
        correctAnswer: "Only when all the SIs mapped are in either Built/NA/Postponed"
    },
    {
        question: "Source check bypass by automation is applicable for Gerrit only when?",
        options: [
        "Associated CR is mapped with Tag: Mainline-NA, Mainline-Built",
        "Gerrit is raised by BAIT team",
        "Gerrit is tagged with “Skip-Check”",
        "Gerrit is part of a hotfix release"
        ],
        correctAnswer: "Associated CR is mapped with Tag: Mainline-NA, Mainline-Built"
    },
    {
        question: "After root causing a genuine failure due to the Gerrit itself in CI jobs (LA/PF/KW), what is the next action to be taken?",
        options: [
        "Reset the failed CI bit and retry",
        "Ping BAIT team to override",
        "Do not reset the failed bit, upload new patch with correct fix",
        "Wait for CI to auto-reset and merge"
        ],
        correctAnswer: "Do not reset the failed bit, upload new patch with correct fix"
    }
    ];


// New question set for CST questions
const quizQuestions_cst = [
  {
    question: "What is the best source for designing functional test cases?",
    options: [
      "Source code",
      "User manuals",
      "Requirements documents",
      "Developer notes"
    ],
    correctAnswer: "Requirements documents"
  },
  {
    question: "Which of the following is a functional testing technique?",
    options: [
      "Stress testing",
      "Boundary value analysis",
      "Soak testing",
      "Profiling"
    ],
    correctAnswer: "Boundary value analysis"
  },
  {
    question: "Functional testing is usually performed at which level?",
    options: [
      "Unit level",
      "Integration level",
      "System level",
      "Deployment level"
    ],
    correctAnswer: "System level"
  },
  {
    question: "What is regression testing used for?",
    options: [
      "To test new features",
      "To validate performance",
      "To ensure existing functionality is not broken",
      "To test UI responsiveness"
    ],
    correctAnswer: "To ensure existing functionality is not broken"
  },
  {
    question: "Which of the following is NOT typically part of a functional test strategy?",
    options: [
      "Test objectives",
      "Performance benchmarks",
      "Test data requirements",
      "Entry and exit criteria"
    ],
    correctAnswer: "Performance benchmarks"
  },
  {
    question: "What does a traceability matrix help with in functional testing?",
    options: [
      "Mapping test cases to code",
      "Mapping test cases to requirements",
      "Mapping test cases to defects",
      "Mapping test cases to UI elements"
    ],
    correctAnswer: "Mapping test cases to requirements"
  },
  {
    question: "Which of the following is a type of functional testing?",
    options: [
      "Load testing",
      "Smoke testing",
      "Spike testing",
      "Volume testing"
    ],
    correctAnswer: "Smoke testing"
  },
  {
    question: "What is the role of automation in functional testing?",
    options: [
      "To simulate user load",
      "To reduce manual effort and improve efficiency",
      "To monitor system health",
      "To analyze memory usage"
    ],
    correctAnswer: "To reduce manual effort and improve efficiency"
  },
  {
    question: "What is the purpose of defining entry and exit criteria in a test strategy?",
    options: [
      "To manage test data",
      "To control test environment",
      "To ensure testing starts and ends under defined conditions",
      "To track defects"
    ],
    correctAnswer: "To ensure testing starts and ends under defined conditions"
  },
  {
    question: "Which of the following is a benefit of functional testing?",
    options: [
      "Identifies performance bottlenecks",
      "Validates user requirements",
      "Measures system throughput",
      "Detects memory leaks"
    ],
    correctAnswer: "Validates user requirements"
  },
  {
    question: "What is the first step in creating a functional test strategy?",
    options: [
      "Writing test cases",
      "Defining test environment",
      "Understanding requirements",
      "Executing tests"
    ],
    correctAnswer: "Understanding requirements"
  },
  {
    question: "Which of the following is most important for test case prioritization?",
    options: [
      "Developer availability",
      "Risk and impact of failure",
      "UI design",
      "Code complexity"
    ],
    correctAnswer: "Risk and impact of failure"
  },
  {
    question: "What is the main purpose of a test strategy document?",
    options: [
      "To list all test cases",
      "To define the overall approach to testing",
      "To assign tasks to developers",
      "To track defects"
    ],
    correctAnswer: "To define the overall approach to testing"
  },
  {
    question: "Which of the following is typically included in a test strategy?",
    options: [
      "Code review checklist",
      "Test environment details",
      "Deployment schedule",
      "Source code repository"
    ],
    correctAnswer: "Test environment details"
  },
  {
    question: "What does the term “entry criteria” refer to in a test strategy?",
    options: [
      "Conditions to start development",
      "Conditions to start testing",
      "Conditions to release the product",
      "Conditions to log defects"
    ],
    correctAnswer: "Conditions to start testing"
  },
  {
    question: "Which of the following is a key benefit of having a well-defined test strategy?",
    options: [
      "Faster coding",
      "Reduced documentation",
      "Consistent testing approach",
      "Increased hardware usage"
    ],
    correctAnswer: "Consistent testing approach"
  },
  {
    question: "What is the importance of defining scope in a test strategy?",
    options: [
      "To reduce the number of test cases",
      "To avoid testing altogether",
      "To clarify what will and won’t be tested",
      "To assign roles to developers"
    ],
    correctAnswer: "To clarify what will and won’t be tested"
  },
  {
    question: "Which of the following is most useful for managing test coverage in a test strategy?",
    options: [
      "Test execution report",
      "Traceability matrix",
      "Defect summary",
      "Code complexity chart"
    ],
    correctAnswer: "Traceability matrix"
  },
  {
    question: "Which statement best describes functional testing?",
    options: [
      "It evaluates system performance under load",
      "It validates the software against specified requirements and user-facing behavior",
      "It measures code coverage at statement and branch level",
      "It checks power and thermal profiles"
    ],
    correctAnswer: "It validates the software against specified requirements and user-facing behavior"
  },
  {
    question: "Arrange in release milestone order.",
    options: [
      "PC0, PC1, PC2, PCR, POR, TO, SoD, ES, FC, CS",
      "PC2, PC1, PC0, PCR, POR, TO, SoD, ES, FC, CS",
      "CS, FC, ES, SoD, TO, POR, PCR, PC2, PC1, PC0",
      "PC0, PC1, PC2, PCR, POR, TO, SoD, ES, FC, CS"
    ],
    correctAnswer: "PC0, PC1, PC2, PCR, POR, TO, SoD, ES, FC, CS"
  },
  {
    question: "Which interim milestone is applicable only for pure software cadence release?",
    options: [
      "CS",
      "Post-CS",
      "SBA",
      "ED"
    ],
    correctAnswer: "ED"
  },
  {
    question: "Which document tells the test strategy for release or a new FR?",
    options: [
      "FR",
      "PRD",
      "None",
      "TCR"
    ],
    correctAnswer: "TCR"
  },
  {
    question: "What is the prerequisite document for a FR before its design phase?",
    options: [
      "TCR",
      "L0 document",
      "None",
      "PRD"
    ],
    correctAnswer: "PRD"
  },
  {
    question: "What will be the timeline for L4 with respect to CS?",
    options: [
      "2 weeks",
      "3 weeks",
      "5 weeks",
      "6 weeks before CS"
    ],
    correctAnswer: "6 weeks before CS"
  },
  {
    question: "Where can you find the 'anytime time CSRR' report?",
    options: [
      "Program dashboard",
      "CR dashboard",
      "Integration Dashboard",
      "Project dashboard"
    ],
    correctAnswer: "Project dashboard"
  },
  {
    question: "Which driver might not have anymore full release starting now?",
    options: [
      "UD",
      "Ath",
      "RDK",
      "Prop"
    ],
    correctAnswer: "Prop"
  },
  {
    question: "When should new FR automation be done?",
    options: [
      "PostCS",
      "Before PRD",
      "Anytime",
      "Same release before CS"
    ],
    correctAnswer: "Same release before CS"
  },
  {
    question: "What is linked out off cadence and has the ability to incorporate functionality addition to the core driver?",
    options: [
      "Host",
      "FW",
      "Halphy",
      "GWAPPS"
    ],
    correctAnswer: "GWAPPS"
  },
  {
    question: "What are the 3 phases of Dogfooding test in a program?",
    options: [
      "Alpha, Beta, Gamma",
      "Design, Develop, Deploy",
      "Plan, Execute, Review",
      "Unit, Integration, System"
    ],
    correctAnswer: "Alpha, Beta, Gamma"
  }
];

