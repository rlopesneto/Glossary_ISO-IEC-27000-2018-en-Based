document.addEventListener("DOMContentLoaded", function() {
    const glossaryList = document.getElementById('glossary-list');
    const termInput = document.getElementById('term');
    const definitionInput = document.getElementById('definition');
    const addTermForm = document.getElementById('add-term-form');

    const glossaryItems = [
        { term: "Access Control", definition: "Means to ensure that access to assets is authorized and restricted based on business and security requirements." },
        { term: "Attack", definition: "Attempt to destroy, expose, alter, disable, steal, or gain unauthorized access to or make unauthorized use of an asset." },
        { term: "Audit", definition: "Systematic, independent, and documented process for obtaining audit evidence and evaluating it objectively." },
        { term: "Audit Scope", definition: "Extent and boundaries of an audit." },
        { term: "Authentication", definition: "Provision of assurance that a claimed characteristic of an entity is correct." },
        { term: "Authenticity", definition: "Property that an entity is what it claims to be." },
        { term: "Availability", definition: "Property of being accessible and usable on demand by an authorized entity." },
        { term: "Base Measure", definition: "Measure defined in terms of an attribute and the method for quantifying it." },
        { term: "Competence", definition: "Ability to apply knowledge and skills to achieve intended results." },
        { term: "Confidentiality", definition: "Property that information is not made available or disclosed to unauthorized individuals, entities, or processes." },
        { term: "Conformity", definition: "Fulfillment of a requirement." },
        { term: "Consequence", definition: "Outcome of an event affecting objectives." },
        { term: "Continual Improvement", definition: "Recurring activity to enhance performance." },
        { term: "Control", definition: "Measure that is modifying risk." },
        { term: "Control Objective", definition: "Statement describing what is to be achieved as a result of implementing controls." },
        { term: "Correction", definition: "Action to eliminate a detected nonconformity." },
        { term: "Corrective Action", definition: "Action to eliminate the cause of a nonconformity and to prevent recurrence." },
        { term: "Derived Measure", definition: "Measure that is defined as a function of two or more values of base measures." },
        { term: "Documented Information", definition: "Information required to be controlled and maintained by an organization and the medium on which it is contained." },
        { term: "Effectiveness", definition: "Extent to which planned activities are realized and planned results achieved." },
        { term: "Event", definition: "Occurrence or change of a particular set of circumstances." },
        { term: "External Context", definition: "External environment in which the organization seeks to achieve its objectives." },
        { term: "Governance of Information Security", definition: "System by which an organization’s information security activities are directed and controlled." },
        { term: "Governing Body", definition: "Person or group of people who are accountable for the performance and conformity of the organization." },
        { term: "Indicator", definition: "Measure that provides an estimate or evaluation." },
        { term: "Information Need", definition: "Insight necessary to manage objectives, goals, risks, and problems." },
        { term: "Information Processing Facilities", definition: "Any information processing system, service, or infrastructure, or the physical location housing it." },
        { term: "Information Security", definition: "Preservation of confidentiality, integrity, and availability of information." },
        { term: "Information Security Continuity", definition: "Processes and procedures for ensuring continued information security operations." },
        { term: "Information Security Event", definition: "Identified occurrence of a system, service, or network state indicating a possible breach of information security policy or failure of controls." },
        { term: "Information Security Incident", definition: "Single or a series of unwanted or unexpected information security events that have a significant probability of compromising business operations." },
        { term: "Information Security Incident Management", definition: "Set of processes for detecting, reporting, assessing, responding to, dealing with, and learning from information security incidents." },
        { term: "ISMS Professional", definition: "Person who establishes, implements, maintains, and continuously improves one or more information security management system processes." },
        { term: "Information Sharing Community", definition: "Group of organizations that agree to share information." },
        { term: "Information System", definition: "Set of applications, services, information technology assets, or other information-handling components." },
        { term: "Integrity", definition: "Property of accuracy and completeness." },
        { term: "Interested Party", definition: "Person or organization that can affect, be affected by, or perceive itself to be affected by a decision or activity." },
        { term: "Internal Context", definition: "Internal environment in which the organization seeks to achieve its objectives." },
        { term: "Level of Risk", definition: "Magnitude of a risk expressed in terms of the combination of consequences and their likelihood." },
        { term: "Likelihood", definition: "Chance of something happening." },
        { term: "Management System", definition: "Set of interrelated or interacting elements of an organization to establish policies and objectives and processes to achieve those objectives." },
        { term: "Measure", definition: "Variable to which a value is assigned as the result of measurement." },
        { term: "Measurement", definition: "Process to determine a value." },
        { term: "Measurement Function", definition: "Algorithm or calculation performed to combine two or more base measures." },
        { term: "Measurement Method", definition: "Logical sequence of operations, described generically, used in quantifying an attribute with respect to a specified scale." },
        { term: "Monitoring", definition: "Determining the status of a system, process, or activity." },
        { term: "Nonconformity", definition: "Non-fulfillment of a requirement." },
        { term: "Non-repudiation", definition: "Ability to prove the occurrence of a claimed event or action and its originating entities." },
        { term: "Objective", definition: "Result to be achieved." },
        { term: "Organization", definition: "Person or group of people that has its own functions with responsibilities, authorities, and relationships to achieve its objectives." },
        { term: "Performance", definition: "Measurable result." },
        { term: "Policy", definition: "Intentions and direction of an organization as formally expressed by its top management." },
        { term: "Preventive Action", definition: "Action to eliminate the cause of a potential nonconformity or other undesirable potential situation." },
        { term: "Process", definition: "Set of interrelated or interacting activities that transforms inputs into outputs." },
        { term: "Risk", definition: "Effect of uncertainty on objectives." },
        { term: "Risk Acceptance", definition: "Informed decision to take a particular risk." },
        { term: "Risk Analysis", definition: "Process to comprehend the nature of risk and to determine the level of risk." },
        { term: "Risk Communication and Consultation", definition: "Set of continual and iterative processes that an organization conducts to provide, share or obtain information, and to engage in dialogue with stakeholders regarding the management of risk." },
        { term: "Risk Criteria", definition: "Terms of reference against which the significance of risk is evaluated." },
        { term: "Risk Evaluation", definition: "Process of comparing the results of risk analysis with risk criteria to determine whether the risk and/or its magnitude is acceptable or tolerable." },
        { term: "Risk Identification", definition: "Process of finding, recognizing and describing risks." },
        { term: "Risk Management Process", definition: "Systematic application of management policies, procedures and practices to the activities of communicating, consulting, establishing the context and identifying, analysing, evaluating, treating, monitoring and reviewing risk." },
        { term: "Risk Owner", definition: "Person or entity with the accountability and authority to manage a risk." },
        { term: "Risk Treatment", definition: "Process to modify risk." },
        { term: "Residual Risk", definition: "Risk remaining after risk treatment." },
        { term: "Review", definition: "Activity undertaken to determine the suitability, adequacy and effectiveness of the subject matter to achieve established objectives." },
        { term: "Review Object", definition: "Specific item being reviewed." },
        { term: "Review Objective", definition: "Statement describing what is to be achieved as a result of a review." },
        { term: "Security Implementation Standard", definition: "Document specifying authorized ways for realizing security." },
        { term: "Top Management", definition: "Person or group of people who directs and controls an organization at the highest level." },
        { term: "Trusted Information Communication Entity", definition: "Autonomous organization supporting information exchange within an information sharing community." },
        { term: "Outsource", definition: "Make an arrangement where an external organization performs part of an organization’s function or process." },
        { term: "Reliability", definition: "Property of consistent intended behaviour and results." },
        { term: "Requirement", definition: "Need or expectation that is stated, generally implied or obligatory." },
    ];

    // Populate glossary
    function populateGlossary() {
        glossaryList.innerHTML = ''; // Clear the existing list
        glossaryItems.forEach(item => {
            const glossaryItem = document.createElement('div');
            glossaryItem.classList.add('glossary-item');

            const glossaryHeader = document.createElement('div');
            glossaryHeader.classList.add('glossary-header');
            glossaryHeader.textContent = item.term;

            const glossaryDefinition = document.createElement('div');
            glossaryDefinition.classList.add('glossary-definition', 'hidden');
            glossaryDefinition.innerHTML = `<strong>Definition:</strong> ${item.definition}`;

            glossaryHeader.addEventListener('click', () => {
                glossaryDefinition.classList.toggle('hidden'); // Toggle visibility
            });

            const deleteButton = document.createElement('button');
            deleteButton.textContent = 'Delete';
            deleteButton.classList.add('delete-button');
            deleteButton.addEventListener('click', () => {
                glossaryItems.splice(glossaryItems.indexOf(item), 1);
                populateGlossary(); // Re-populate glossary
            });

            glossaryItem.appendChild(glossaryHeader);
            glossaryItem.appendChild(glossaryDefinition);
            glossaryItem.appendChild(deleteButton);
            glossaryList.appendChild(glossaryItem);
        });
    }

    // Add new term
    addTermForm.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevent page reload
        const newTerm = termInput.value.trim();
        const newDefinition = definitionInput.value.trim();
        if (newTerm && newDefinition) {
            glossaryItems.push({ term: newTerm, definition: newDefinition });
            populateGlossary(); // Re-populate glossary
            termInput.value = ""; // Clear input
            definitionInput.value = ""; // Clear input
        }
    });

    populateGlossary(); // Initial population of glossary
});
