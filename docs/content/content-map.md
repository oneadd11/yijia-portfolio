# Portfolio Page Copy Map

This document defines the page sequence, copy, and content slots for Kaia's reliability engineering portfolio. It is written for top-company reliability, failure analysis, validation, and product quality roles.

Core rule: never imply "root cause confirmed" unless the evidence publicly supports it. Use observed, indicated, suggested, refined, and follow-up validation when the evidence is not fully conclusive.

## Global Direction

Design style:
Apple-like, bright, quiet, precise. Use system sans-serif typography, a white canvas, light border structure, and one blue action color. Avoid decorative engineering images. Use placeholders for diagrams or anonymized evidence only.

Hiring signal:
The portfolio should show engineering judgment, not tool operation. The strongest message is: I connect failure signatures, physical evidence, process variables, and next-step decisions.

Navigation order:
Overview
Case Studies
Capabilities
Career Journey
Contact

## Overview

### Hero

Position:
First screen. Large left-aligned headline, short supporting copy, one primary action to Case Studies, one secondary action to Capabilities.

Headline:
Engineering clarity from failure to decision.

Supporting copy:
I investigate reliability failures by connecting test conditions, physical evidence, and engineering decisions. My strength is finding what failed, what evidence supports it, and what should be validated next.

Primary CTA:
View case studies

Secondary CTA:
See capabilities

中文意图:
首页不需要讲很多工具。第一屏要让招聘方立刻知道你是做 reliability / FA / validation 的，并且你的价值不是拍图，而是把证据变成工程判断。

### Overview Evidence Strip

Position:
Below hero, compact horizontal metric area.

Metric 1:
50+ investigations

Label:
Failure analysis cases across validation and manufacturing support

Metric 2:
10+ product batches

Label:
Reliability testing and process feedback support

Metric 3:
3 products

Label:
Moved toward mass production through validation and process action

中文意图:
这里放职业可信度，不要变成炫耀数字。数字要支持能力范围。

## Case Studies Opening

Position:
Full-screen case selector. Three equal 9:16 cards. No diagram in cards. No tags. Card title is vertically centered but left-aligned. Metric stays at the bottom and should not dominate.

### Case 01 Card

Case number:
Case 01

Mode:
Investigate

Title:
Multilayer Module Failure Localization & Root Cause Investigation

Metric:
~90%

Metric label:
area narrowed down

Click target:
/cases/heat-soak.html

中文意图:
Opening card 只负责让人愿意点开。不要在卡片里解释复杂证据链。

### Case 02 Card

Case number:
Case 02

Mode:
Coordinate

Title:
Cross-functional Coordination for NAND Test Equipment Deployment

Metric:
3

Metric label:
months coordinated

Click target:
/cases/nand.html

中文意图:
Case 02 证明跨团队推进能力。它不是主技术 FA case，但对 top company 很重要，因为 reliability 工作经常卡在协作和执行。

### Case 03 Card

Case number:
Case 03

Mode:
Validate

Title:
MLCC Reliability Validation & Process Optimization

Metric:
3

Metric label:
products moved to MP

Click target:
/cases/mlcc.html

中文意图:
第三个 case 用 MLCC，不用 CSAM。它补足 reliability testing、process feedback、statistical reasoning 和 product readiness。

## Case 01 Detail Page

### Hero

Position:
Top of case page. Case number, title, one precise summary, right-side diagram placeholder.

Label:
Case 01 / Investigate

Title:
Multilayer Module Failure Localization & Root Cause Investigation

Summary:
Correlated functional failure signatures with physical structures and refined the investigation when initial targeted analysis did not reveal a conclusive defect.

Hero metadata:
Post heat-soak failure
Multilayer structure
Functional-to-physical correlation
Follow-up validation

Diagram placeholder:
Reserved for anonymized failure map to physical-coordinate mapping.

中文意图:
Hero 要立刻改掉之前过强的 "root cause confirmed" 暗示。这里明确说 refined the investigation，不说 confirmed。

### 01 Challenge

Position:
Text-led section. Three concise challenge blocks.

Section title:
The challenge

Main line:
The functional failure map was clear. The physical cause was not.

Block 1 title:
Complex multilayer structure

Block 1 copy:
Multiple physical locations could plausibly relate to the observed functional abnormality.

Block 2 title:
Functional-to-physical translation

Block 2 copy:
The electrical failure pattern had to be translated into device coordinates before targeted physical analysis.

Block 3 title:
No immediate physical confirmation

Block 3 copy:
Targeted FIB at the most severe functional location did not show an obvious defect.

中文意图:
第三条是这个 case 的高级点。它说明真实 FA 不一定按教科书闭环，也能体现你的 evidence discipline。

### 02 Investigation Logic

Position:
Two-phase process section. Can use two large horizontal bands or one split layout. Avoid too many small tool cards.

Section title:
Investigation logic

Intro:
The analysis path changed as the evidence changed.

Phase A title:
Phase A - Localize

Phase A flow:
Functional map -> NDT comparison -> IR correlation -> target region

Phase A copy:
Compared X-ray, acoustic, and infrared inspection results. Infrared imaging showed the strongest spatial correlation with the functional failure pattern and guided physical localization.

Phase B title:
Phase B - Correlate physically

Phase B flow:
Backside exposure -> pixel mapping -> targeted FIB -> expanded structural review

Phase B copy:
Translated functional coordinates into physical locations, then used targeted and surrounding-area inspection to evaluate potential structural abnormalities.

Diagram placeholder:
Reserved for staged investigation flow. No real product image in the public version.

中文意图:
这一页要从 "used tools" 转成 "why this evidence led to the next step"。工具可以出现，但不能成为主角。

### 03 Key Findings

Position:
Second visual focus after hero. Three finding panels or one wide section with three columns.

Section title:
Key findings

Finding 1 title:
Targeted FIB

Finding 1 copy:
No obvious defect was observed directly at the most severe functional location.

Finding 2 title:
Particle anomaly

Finding 2 copy:
An adjacent layer contained particles consistent with the layer material, but with locally oversized morphology compared with the normal structure.

Finding 3 title:
Geometry and thickness variation

Finding 3 copy:
Another layer showed a pronounced thickness gradient and larger-than-expected geometric variation across the structure.

Safety note:
These observations refined the structural hypotheses for follow-up validation. They should not be presented as final root-cause proof.

中文意图:
这里要克制。用 anomaly、variation、observed、hypothesis。不要用 caused、confirmed、proved。

### 04 Engineering Contribution and Outcome

Position:
Final case section. Keep it concise and interview-ready.

Section title:
Contribution and outcome

Contribution 1:
Correlated functional failure patterns with physical coordinates to guide targeted analysis.

Contribution 2:
Adapted the investigation when initial FIB inspection did not provide conclusive evidence.

Contribution 3:
Identified particle and geometry-related abnormalities for subsequent validation.

Outcome:
The investigation narrowed the suspected area by about 90% and gave the validation team a more specific evidence path for follow-up root-cause evaluation.

Takeaway:
Evidence should refine the hypothesis, not be forced to fit it.

中文意图:
这部分不要写太多 metric。重点是成熟 FA 判断: 没看到预期 defect 时，你没有硬解释，而是调整路径。

## Case 02 Detail Page

### Hero

Label:
Case 02 / Coordinate

Title:
Cross-functional Coordination for NAND Test Equipment Deployment

Summary:
Kept a non-standard test-system deployment moving across global engineering, a local vendor, and FA lab owners.

Hero metadata:
3-month deployment
Remote technical collaboration
Vendor coordination
Routine operation

Diagram placeholder:
Reserved for stakeholder and issue-flow diagram.

中文意图:
Case 02 的价值是跨团队技术推进。不要写成行政协调，要强调 technical issue flow。

### Background

Section title:
Background

Copy:
A non-standard NAND test-system setup required coordination across an overseas engineering team, a local equipment vendor, and FA lab users. The setup moved from initial commissioning into routine operation while support shifted from on-site to remote.

### Challenge

Section title:
Challenge

Main line:
Several teams had to move as one technical system.

Challenge points:
Non-standard system setup
Cross-functional dependency
Remote technical collaboration
Configuration and alarm visibility

### Strategy

Section title:
Strategy

Strategy 1:
Align - establish shared understanding of requirements, ownership, and readiness criteria.

Strategy 2:
Track - maintain visibility of alarms, communication failures, configuration issues, and next actions.

Strategy 3:
Stabilize - move progressively from commissioning into routine equipment operation.

### My Contribution

Section title:
My contribution

Copy block 1:
Coordinated technical communication between the overseas NAND engineering team, local equipment vendor, and FA lab so requirements, issue status, and follow-up actions stayed aligned.

Copy block 2:
Tracked equipment alarms, communication failures, and configuration issues during commissioning, maintaining visibility of open items and troubleshooting progress.

Copy block 3:
Supported setup and troubleshooting activities with the vendor, including basic tuning, calibration, configuration checks, and communication recovery.

Copy block 4:
Maintained continuity after support shifted from on-site to remote by translating engineering feedback into practical local actions.

Copy block 5:
Took on chip loading and parameter configuration after stabilization, supporting the transition into routine operation.

### Outcome

Section title:
Outcome

Metric:
3 months

Metric label:
coordinated deployment work

Outcome copy:
The setup progressed from non-standard commissioning toward stable routine operation, with clearer ownership for issues, requirements, and follow-up actions.

中文意图:
保留你的五条 contribution，但页面上可以设计成一段主文案加少量分组，不要变成密密麻麻的段落。

## Case 03 Detail Page

### Hero

Label:
Case 03 / Validate

Title:
MLCC Reliability Validation & Process Optimization

Summary:
Connected reliability stress results, physical failure evidence, and process variables to support product release and process decisions.

Hero metadata:
Trial-production reliability
TC and HALT
DPA and SEM review
Process feedback

Diagram placeholder:
Reserved for reliability feedback loop or anonymized process-decision map.

中文意图:
第三个 case 用 MLCC。它和 Case 01 区分开: Case 01 是 complex FA reasoning，Case 03 是 reliability validation + process action。

### Background

Section title:
Background

Copy:
During MLCC product development, multiple trial-production batches needed reliability evaluation before mass-production introduction. The team needed to understand whether electrical performance, manufacturability, and product stability were strong enough to move forward.

### Challenge

Section title:
Challenge

Main line:
A pass/fail test result could not explain product risk.

Challenge points:
Reliability results needed physical interpretation.
Physical evidence had to be connected to process variables.
The team needed a release decision, not isolated test data.

### Investigation Logic

Section title:
Reliability feedback loop

Flow:
Trial build -> TC / HALT -> electrical result -> DPA / SEM evidence -> Minitab analysis -> process adjustment -> product release decision

Copy:
Used reliability stress results to trigger physical failure review, then connected the observed failure modes with process-parameter analysis.

### Key Findings

Finding 1 title:
Stress response

Finding 1 copy:
TC and HALT results exposed reliability behavior that needed further physical interpretation.

Finding 2 title:
Physical evidence

Finding 2 copy:
DPA and SEM review identified failure evidence such as electrode delamination and ceramic microcracks.

Finding 3 title:
Process factor

Finding 3 copy:
Minitab analysis connected capacitance distribution with process parameters and pointed to ceramic powder type as a major influencing factor.

### Contribution and Outcome

Contribution 1:
Supported reliability testing for 10+ product batches under established procedures.

Contribution 2:
Reviewed physical failure evidence and connected it with product stability questions.

Contribution 3:
Used process data to support adjustment decisions before broader release.

Outcome:
Three products progressed to mass production, and the process adjustment supported a 3% improvement in trial-production yield.

Takeaway:
Reliability testing is strongest when it becomes a feedback loop between stress result, physical evidence, and process action.

中文意图:
Case 03 要明确你能把 reliability testing 从 pass/fail gate 提升到 process decision support。

## Capabilities

Position:
After Case Studies. This page should not be a tool list. It should be grouped by engineering outcome.

### Capability 1

Title:
Failure localization and evidence planning

Web copy:
I start from the symptom, sample history, and engineering question, then choose the analysis path that protects evidence and reduces uncertainty.

Supporting methods:
LIT, CSAM, X-ray, IR imaging, cross-section, FIB, SEM / EDS

Proof cases:
Case 01, backup 50+ FA investigations

中文意图:
这组体现你不是工具操作员，而是会设计 FA path。

### Capability 2

Title:
Reliability validation and failure interpretation

Web copy:
I connect stress-test results with physical evidence so product teams can judge whether a failure is random, mechanism-driven, or process-related.

Supporting methods:
TC, HALT, DPA, SEM review, electrical result interpretation

Proof cases:
Case 03

中文意图:
这组对应 Apple reliability JD，强调 test result to decision。

### Capability 3

Title:
Process feedback and statistical reasoning

Web copy:
I use process data to understand variation and identify controllable factors that affect product stability.

Supporting methods:
Minitab, capacitance distribution review, process-factor comparison, yield feedback

Proof cases:
Case 03

中文意图:
这组补足 DOE / data / process thinking，不要写得像纯数据分析师。

### Capability 4

Title:
Cross-functional technical execution

Web copy:
I keep multi-party engineering work moving by making requirements, issue status, ownership, and next actions visible.

Supporting methods:
Vendor communication, issue tracking, remote engineering coordination, lab readiness support

Proof cases:
Case 02

中文意图:
这组让招聘方看到你能在复杂组织里推进，不只是单点分析。

### Capability 5

Title:
Technical reporting and decision communication

Web copy:
I write reports that separate observations, interpretations, hypotheses, and recommended validation.

Supporting methods:
FA reports, SOP writing, evidence summaries, validation recommendations

Proof cases:
Case 01, CSAM SOP backup case

中文意图:
这是非常重要的高级信号。尤其 Case 01 要强调 observed vs interpreted vs next validation。

## Career Journey

Position:
After Capabilities. Use timeline or chapter layout. Keep it concise and role-oriented.

### Journey Intro

Headline:
A path built around evidence, reliability, and decision quality.

Copy:
My work has moved from materials characterization into failure analysis, reliability validation, and cross-functional execution. Each stage strengthened how I turn technical evidence into practical next steps.

中文意图:
Journey 不是简历复述。它要解释你的成长逻辑: material evidence -> FA reasoning -> reliability decision。

### Chapter 1

Title:
Materials and structure foundation

Role focus:
Materials characterization, physical inspection, structure-property thinking

Web copy:
Built a foundation in material structure, defect observation, and physical evidence interpretation. This shaped how I look at failure signatures before choosing an analysis method.

Evidence:
SEM / EDS, cross-section review, material morphology comparison

### Chapter 2

Title:
Failure analysis judgment

Role focus:
Failure localization, evidence sequencing, FA reporting

Web copy:
Worked on failure investigations where the main task was not only finding abnormalities, but deciding which evidence was strong enough to support the next engineering step.

Evidence:
50+ FA investigations, Case 01, CSAM / LIT / FIB / SEM experience

### Chapter 3

Title:
Reliability and validation context

Role focus:
Stress testing, product readiness, process feedback

Web copy:
Connected reliability test results with physical failure evidence and process variables, helping product teams make better release and improvement decisions.

Evidence:
Case 03, TC / HALT, DPA / SEM, process analysis

### Chapter 4

Title:
Cross-functional execution

Role focus:
Vendor coordination, remote engineering collaboration, issue visibility

Web copy:
Supported technical coordination across global engineering, local vendors, and lab users when equipment readiness depended on clear ownership and practical follow-up.

Evidence:
Case 02

中文意图:
Timeline 最好写成能力进化，而不是时间流水账。如果有公司和年份，可以后续补上，但公开版可以先弱化具体公司。

## Contact

Position:
Final page.

Headline:
Open to reliability engineering conversations.

Copy:
Best fit: reliability engineering, failure analysis, validation, or product quality roles where physical evidence and clear judgment shape product decisions.

Primary CTA:
Email Kaia

Secondary links:
LinkedIn
GitHub

中文意图:
Contact 要直接写适配岗位，别写空泛的 "Let's connect"。

## Information Still Needed

Use this checklist to fill the remaining gaps before implementation.

### Personal and role information

Need:
Target role title, target company type, preferred public name, email, LinkedIn URL, GitHub URL.

Prompt:
My target role is [role]. My strongest target companies are [companies or company type]. Use the public name [name]. My contact links are [links].

### Case 01 details

Need:
Public-safe wording for the module, failure symptom type, whether "pixel" can be used publicly, which NDT methods can be named, whether "~90%" can be displayed, and whether IR imaging is the correct public term.

Prompt:
For Case 01, public-safe terms are [terms]. The functional issue can be described as [description]. The localization methods I can name are [methods]. The physical abnormalities I can mention are [abnormalities]. The number I can show is [number].

### Case 02 details

Need:
Whether "NAND" can be public, whether "3 months" can be shown, exact stakeholder labels, public-safe equipment wording, and final outcome wording.

Prompt:
For Case 02, I can publicly mention [NAND/test equipment/vendor/global team]. The deployment duration was [duration]. The outcome should be described as [outcome]. The sensitive terms to avoid are [terms].

### Case 03 details

Need:
Whether "MLCC" can be public, whether "10+ batches", "3 products", and "3% yield improvement" can be public, and how specific the process factor can be.

Prompt:
For Case 03, I can publicly mention [MLCC/product type/process factor]. The metrics I can show are [metrics]. The failure modes I can name are [failure modes]. The process finding should be described as [description].

### Career Journey details

Need:
Public-safe job titles, year ranges, company names or anonymized labels, and whether education should be included.

Prompt:
Use this career timeline: [year range] [role/company or anonymous label] [main responsibility]. Include education as [yes/no] with [degree/program] if useful.

### Visual placeholders

Need:
Which placeholder slots will eventually receive diagrams, and whether they should be "diagram", "evidence map", "workflow", or "data plot".

Prompt:
Use placeholders only. For Case 01 use [visual type]. For Case 02 use [visual type]. For Case 03 use [visual type]. Do not generate real engineering images.

## Copy Guardrails

Use:
observed, indicated, suggested, localized, correlated, refined, narrowed, follow-up validation, evidence path, structural hypothesis.

Avoid:
caused, proved, root cause confirmed, final mechanism, defect confirmed, failure solved, guaranteed, obvious root cause.

Case 01 interview spine:
The initial targeted analysis did not confirm the expected defect, so I did not stop at the first hypothesis. I used the mismatch between functional and physical evidence to refine the investigation and identify new structural hypotheses.
