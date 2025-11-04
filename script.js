// Quiz dataset with all questions
const quizData = [
    {
        id: 1,
        question: "Which feature of Microsoft Entra ID (formerly Azure Active Directory) will require users to have their mobile phone in order to be able to log in?",
        choices: [
            "Microsoft Defender for Cloud",
            "Azure Information Protection (AIP)",
            "Advanced Threat Protection (ATP)",
            "Multi-Factor Authentication"
        ],
        correct: "Multi-Factor Authentication",
        multi: false
    },
    {
        id: 2,
        question: "Which Azure service is meant to be a security dashboard that contains all the security and threat protection in one place?",
        choices: [
            "Azure Monitor",
            "Azure Portal Dashboard",
            "Microsoft Defender for Cloud",
            "Azure Key Vault"
        ],
        correct: "Microsoft Defender for Cloud",
        multi: false
    },
    {
        id: 3,
        question: "What is a DDoS attack?",
        choices: [
            "A denial of service attack that sends so much traffic to a network that it cannot respond fast enough; legitimate users become unable to use the service",
            "An attempt to send SQL commands to the server in a way that it will execute them against the database",
            "An attempt to read the contents of a web page from another website, thereby stealing the user's private information",
            "An attempt to guess a user's password through brute force methods"
        ],
        correct: "A denial of service attack that sends so much traffic to a network that it cannot respond fast enough; legitimate users become unable to use the service",
        multi: false
    },
    {
        id: 4,
        question: "You have decided to subscribe to Azure DDoS Protection at the IP Protection Tier. This provides advanced protection to defend against DDoS attacks. What type of DDoS attack does DDoS Protection NOT protect against?",
        choices: [
            "Network (L3) level attacks",
            "Application (L7) level attacks",
            "Transport (L4) level attacks"
        ],
        correct: "Application (L7) level attacks",
        multi: false
    },
    {
        id: 5,
        question: "Which of the following elements is considered part of the \"perimeter\" layer of security?",
        choices: [
            "Separate servers into distinct subnets by role",
            "Locks on the data center doors",
            "Keep operating systems up to date with patches",
            "Use a firewall"
        ],
        correct: "Use a firewall",
        multi: false
    },
    {
        id: 6,
        question: "In what way does Multi-Factor Authentication increase the security of a user account?",
        choices: [
            "It requires single sign-on functionality",
            "It requires the user to possess something like their phone to read an SMS, use a mobile app, or biometric identification.",
            "It requires users to be approved before they can log in for the first time.",
            "It doesn't. Multi-Factor Authentication is more about access and authentication than account security."
        ],
        correct: "It requires the user to possess something like their phone to read an SMS, use a mobile app, or biometric identification.",
        multi: false
    },
    {
        id: 7,
        question: "Which free Azure security service checks all traffic travelling over a subnet against a set of rules before allowing it in, or out.",
        choices: [
            "Azure DDoS Protection",
            "Azure Firewall",
            "Network Security Group",
            "Advanced Threat Protection (ARP)"
        ],
        correct: "Network Security Group",
        multi: false
    },
    {
        id: 8,
        question: "Application Gateway contains what additional optional security feature over a regular Load Balancer?",
        choices: [
            "Web Application Firewall (or WAF)",
            "Advanced DDoS Protection",
            "Azure AD Advanced Information Protection",
            "Multi-Factor Authentication"
        ],
        correct: "Web Application Firewall (or WAF)",
        multi: false
    },
    {
        id: 9,
        question: "What two types of DDoS protection services does Azure provide? Select two.",
        choices: [
            "DDoS Network Protection",
            "DDoS IP Protection",
            "DDoS Advanced Protection",
            "DDoS Premium Protection"
        ],
        correctMultiple: ["DDoS Network Protection", "DDoS IP Protection"],
        multi: true
    },
    {
        id: 10,
        question: "Why should you divide your application into multiple subnets as opposed to having all your web, application and database servers running on the same subnet?",
        choices: [
            "Each server type of your application requires its own subnet. It's not possible to mix web servers, database servers and application servers on the same subnet.",
            "Separating your application into multiple subnets allows you to have different NSG security rules for each subnet, which can make it harder for a hacker to get from one compromised server onto another.",
            "There are only a limited number of IP addresses available per subnet, so you need multiple subnets over a certain number."
        ],
        correct: "Separating your application into multiple subnets allows you to have different NSG security rules for each subnet, which can make it harder for a hacker to get from one compromised server onto another.",
        multi: false
    },
    {
        id: 11,
        question: "How does Multi-Factor Authentication make a system more secure?",
        choices: [
            "It doesn't make it more secure",
            "It is another password that a user has to memorize, making it more secure",
            "It requires the user to have access to their verified phone in order to log in",
            "It allows the user to log in without a password because they have already previously been validated using a browser cookie"
        ],
        correct: "It requires the user to have access to their verified phone in order to log in",
        multi: false
    },
    {
        id: 12,
        question: "Which Azure service, when enabled, will automatically block traffic to or from known malicious IP addresses and domains?",
        choices: [
            "Azure Firewall",
            "Azure Active Directory",
            "Load Balancer",
            "Network Security Groups"
        ],
        correct: "Azure Firewall",
        multi: false
    },
    {
        id: 13,
        question: "What advantage does an Application Gateway have over a Load Balancer?",
        choices: [
            "Application Gateway is more like an enterprise-grade product. You should not use a load balancer in production.",
            "Application gateway understands the HTTP protocol and can interpret the URL and make decisions based on the URL.",
            "Application Gateway can be scaled so that two, three or more instances of the gateway can support your application."
        ],
        correct: "Application gateway understands the HTTP protocol and can interpret the URL and make decisions based on the URL.",
        multi: false
    },
    {
        id: 14,
        question: "What is the goal of a DDoS attack?",
        choices: [
            "To extract data from a database",
            "To crack the password from administrator accounts",
            "To overwhelm and exhaust application resources",
            "To trick users into giving up personal information"
        ],
        correct: "To overwhelm and exhaust application resources",
        multi: false
    },
    {
        id: 15,
        question: "Which of the following is a key principle of the Zero Trust security model?",
        choices: [
            "Trust all users and devices by default once they are inside the network perimeter.",
            "Verify explicitly and enforce least-privilege access for all users and devices.",
            "Allow unrestricted access to resources for all authenticated users.",
            "Rely solely on network firewalls to secure resources."
        ],
        correct: "Verify explicitly and enforce least-privilege access for all users and devices.",
        multi: false
    },
    {
        id: 16,
        question: "What is the primary benefit of using Microsoft Entra Conditional Access?",
        choices: [
            "Simplified user authentication.",
            "Reduced reliance on passwords.",
            "Enhanced security by limiting access to authorized users and devices.",
            "Improved user experience."
        ],
        correct: "Enhanced security by limiting access to authorized users and devices.",
        multi: false
    },
    {
        id: 17,
        question: "What is the primary purpose of Microsoft Entra Conditional Access?",
        choices: [
            "To enforce strong password policies.",
            "To protect against phishing attacks.",
            "To implement granular access controls based on specific conditions.",
            "To provide multi-factor authentication for all users."
        ],
        correct: "To implement granular access controls based on specific conditions.",
        multi: false
    },
    {
        id: 18,
        question: "How does a defense-in-depth model improve overall security?",
        choices: [
            "By simplifying the security infrastructure.",
            "By reducing the need for security updates.",
            "By making it more difficult for attackers to breach multiple layers of security.",
            "By eliminating the need for user training."
        ],
        correct: "By making it more difficult for attackers to breach multiple layers of security.",
        multi: false
    },
    {
        id: 19,
        question: "What is the principle of least privilege in the context of Azure RBAC?",
        choices: [
            "Granting users the maximum amount of access necessary to perform their job duties.",
            "Assigning the \"Owner\" role to all users.",
            "Granting users the minimum amount of access necessary to perform their job duties.",
            "Disabling user accounts when they are not in use."
        ],
        correct: "Granting users the minimum amount of access necessary to perform their job duties.",
        multi: false
    },
    {
        id: 20,
        question: "What is the primary purpose of single sign-on (SSO)?",
        choices: [
            "To add an extra layer of security to user accounts.",
            "To allow users to log in to multiple applications with a single set of credentials.",
            "To enforce strong password policies.",
            "To prevent unauthorized access to cloud resources."
        ],
        correct: "To allow users to log in to multiple applications with a single set of credentials.",
        multi: false
    },
    {
        id: 21,
        question: "What is the core principle of Zero Trust security?",
        choices: [
            "Trust but verify.",
            "Never trust, always verify.",
            "Assume trust until proven otherwise.",
            "Security through obscurity."
        ],
        correct: "Never trust, always verify.",
        multi: false
    },
    {
        id: 22,
        question: "Which of the following is NOT a key feature of Microsoft Defender for Cloud?",
        choices: [
            "Vulnerability assessment",
            "Threat detection and response",
            "Password management",
            "Security posture management"
        ],
        correct: "Password management",
        multi: false
    },
    {
        id: 23,
        question: "Fill in the blank: _______________ is a malicious attempt to disrupt or prevent a cloud service from functioning as intended by overwhelming it with excessive traffic or requests.",
        choices: [
            "A Denial of Service attack",
            "Malware",
            "Phishing",
            "A SQL Injection attack"
        ],
        correct: "A Denial of Service attack",
        multi: false
    }
];

// Fisher-Yates shuffle algorithm
function shuffleArray(array) {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}

// Render the quiz
function renderQuiz() {
    const container = document.getElementById('quiz-container');
    container.innerHTML = '';
    
    // Shuffle questions
    const shuffledQuestions = shuffleArray(quizData);
    
    shuffledQuestions.forEach((question, questionIndex) => {
        // Shuffle choices for this question
        const shuffledChoices = shuffleArray(question.choices);
        
        const questionElement = document.createElement('div');
        questionElement.className = 'question';
        questionElement.id = `question-${question.id}`;
        
        const questionText = document.createElement('p');
        questionText.className = 'question-text';
        questionText.textContent = `${questionIndex + 1}. ${question.question}`;
        questionElement.appendChild(questionText);
        
        const choicesList = document.createElement('ul');
        choicesList.className = 'choices';
        
        shuffledChoices.forEach((choice, choiceIndex) => {
            const choiceElement = document.createElement('li');
            choiceElement.className = 'choice';
            choiceElement.id = `choice-${question.id}-${choiceIndex}`;
            
            const inputType = question.multi ? 'checkbox' : 'radio';
            const inputName = `question-${question.id}`;
            
            const label = document.createElement('label');

            const input = document.createElement('input');
            input.type = inputType;
            input.name = inputName;
            input.value = choice;
            // No need for id or htmlFor when input is inside label

            label.appendChild(input);
            label.appendChild(document.createTextNode(choice));

            choiceElement.appendChild(label);
            choicesList.appendChild(choiceElement);
        });
        
        questionElement.appendChild(choicesList);
        
        // Add message container
        const messageContainer = document.createElement('div');
        messageContainer.className = 'message';
        messageContainer.id = `message-${question.id}`;
        questionElement.appendChild(messageContainer);
        
        container.appendChild(questionElement);
        
        // Add event listeners
        if (question.multi) {
            handleMultiSelectQuestion(question);
        } else {
            handleSingleAnswerQuestion(question);
        }
    });
}

// Handle single answer questions
function handleSingleAnswerQuestion(question) {
    const questionElement = document.getElementById(`question-${question.id}`);
    const inputs = questionElement.querySelectorAll('input[type="radio"]');
    
    inputs.forEach(input => {
        input.addEventListener('change', function() {
            if (this.checked) {
                gradeSingleAnswer(question, this.value);
                disableQuestion(question.id);
            }
        });
    });
}

// Handle multi-select questions
function handleMultiSelectQuestion(question) {
    const questionElement = document.getElementById(`question-${question.id}`);
    const inputs = questionElement.querySelectorAll('input[type="checkbox"]');
    
    inputs.forEach(input => {
        input.addEventListener('change', function() {
            const selectedChoices = Array.from(inputs)
                .filter(input => input.checked)
                .map(input => input.value);
            
            if (selectedChoices.length === question.correctMultiple.length) {
                gradeMultiSelect(question, selectedChoices);
                disableQuestion(question.id);
            }
        });
    });
}

// Grade single answer question
function gradeSingleAnswer(question, selectedAnswer) {
    const questionElement = document.getElementById(`question-${question.id}`);
    const messageContainer = document.getElementById(`message-${question.id}`);
    const choices = questionElement.querySelectorAll('.choice');
    
    const isCorrect = selectedAnswer === question.correct;
    
    choices.forEach(choice => {
        const input = choice.querySelector('input');
        if (input.value === question.correct) {
            choice.classList.add('correct');
        }
    });
    
    if (isCorrect) {
        messageContainer.textContent = 'Correct';
        messageContainer.className = 'message correct';
    } else {
        messageContainer.textContent = 'Incorrect';
        messageContainer.className = 'message error';
    }
}

// Grade multi-select question
function gradeMultiSelect(question, selectedChoices) {
    const questionElement = document.getElementById(`question-${question.id}`);
    const messageContainer = document.getElementById(`message-${question.id}`);
    const choices = questionElement.querySelectorAll('.choice');
    
    // Check if selected choices exactly match correct choices
    const sortedSelected = [...selectedChoices].sort();
    const sortedCorrect = [...question.correctMultiple].sort();
    const isCorrect = sortedSelected.length === sortedCorrect.length && 
                     sortedSelected.every((choice, index) => choice === sortedCorrect[index]);
    
    choices.forEach(choice => {
        const input = choice.querySelector('input');
        if (question.correctMultiple.includes(input.value)) {
            choice.classList.add('correct');
        }
    });
    
    if (isCorrect) {
        messageContainer.textContent = 'Correct';
        messageContainer.className = 'message correct';
    } else {
        messageContainer.textContent = 'Incorrect';
        messageContainer.className = 'message error';
    }
}

// Disable question inputs after grading
function disableQuestion(questionId) {
    const questionElement = document.getElementById(`question-${questionId}`);
    const inputs = questionElement.querySelectorAll('input');
    const choices = questionElement.querySelectorAll('.choice');
    
    inputs.forEach(input => {
        input.disabled = true;
    });
    
    choices.forEach(choice => {
        choice.classList.add('disabled');
    });
}

// Initialize the quiz when the page loads
document.addEventListener('DOMContentLoaded', function() {
    renderQuiz();
});
