---
sidebar_label: 'User Execution'
sidebar_position: 6
---

# User Execution

# Summary
Adversaries may rely on a targeted maritime organization's user interaction for the execution of malicious code. User interaction may consist of installing applications, opening email attachments, or granting higher permissions to documents.

Adversaries may embed malicious code or Visual Basic code into files such as Microsoft Word and Excel documents or software installers. Execution of this code requires that the user enable scripting or write access within the document. Embedded code may not always be noticeable to the user, especially in cases of trojanized software.

For example, a spearphishing campaign could target maritime personnel, delivering malware through spearphishing attachments that require user action to achieve execution.

&nbsp;

# Procedure Examples
| ID      | Name       | Description |
|:------------|:-----------|:--------------|
| S0093 | [Backdoor.Oldrea](https://attack.mitre.org/software/S0093/) | Execution of Backdoor.Oldrea relies on a user opening a trojanized installer attached to an email. |
| S0606 | [Bad Rabbit](https://attack.mitre.org/software/S0606/) | Bad Rabbit ransomware spreads through drive-by attacks where insecure websites are compromised. While the target is visiting a legitimate website, a malware dropper is being downloaded from the threat actors infrastructure.  |
| S0496 | [REvil](https://attack.mitre.org/software/S0496/) | REvil initially executes when the user clicks on a JavaScript file included in the phishing emails .zip attachment. |
| MAT-S0603	| [Stuxnet](https://www.langner.com/wp-content/uploads/2017/03/to-kill-a-centrifuge.pdf) | Conficker is a notorious computer worm that first emerged in November 2008. It exploits vulnerabilities in the Windows operating system to spread rapidly across networks, affecting millions of computers worldwide. The name "Conficker" is derived from the words "configure" and a German obscenity. The worm is also known by other names, such as Downadup and Kido. |

&nbsp;

# Targeted Assets
| ID      | Asset       |
|:------------|:-----------|
| A0001 | [Workstation](https://attack.mitre.org/assets/A0001/) |
| A0002 | [Human-Machine Interface (HMI)](https://attack.mitre.org/assets/A0002/) |
| A0012 | [Jump Host](https://attack.mitre.org/assets/A0012/) |

&nbsp;

# Mitigations
| ID      | Mitigation       | Description |
|:------------|:-----------|:--------------|
| M0949 | [Antivirus/Antimalware](https://attack.mitre.org/mitigations/M0949/) | Ensure anti-virus solution can detect malicious files that allow user execution (e.g., Microsoft Office Macros, program installers). |
| M0945 | [Code Signing](https://attack.mitre.org/mitigations/M0945/) | Prevent the use of unsigned executables, such as installers and scripts. |
| M0938 | [Execution Prevention](https://attack.mitre.org/mitigations/M0938/) | Application control may be able to prevent the running of executables masquerading as other files. |
| M0931 | [Network Intrusion Prevention](https://attack.mitre.org/mitigations/M0931/) | If a link is being visited by a user, network intrusion prevention systems and systems designed to scan and remove malicious downloads can be used to block activity. |
| M0921 | [Restrict Web-Based Content](https://attack.mitre.org/mitigations/M0921/) | If a link is being visited by a user, block unknown or unused files in transit by default that should not be downloaded or by policy from suspicious sites as a best practice to prevent some vectors, such as .scr, .exe, .pif, .cpl, etc. Some download scanning devices can open and analyze compressed and encrypted formats, such as zip and rar that may be used to conceal malicious files. |
| M0917 | [User Training](https://attack.mitre.org/mitigations/M0917/) | Use user training as a way to bring awareness to common phishing and spearphishing techniques and how to raise suspicion for potentially malicious events. |

&nbsp;

# Detection
<table>
  <tr>
    <th>ID</th>
    <th>Data Source</th>
    <th>Data Components</th>
    <th>Detects</th>
  </tr>
  <tr>
    <td >DS0015</td>
    <td>[Application Log](https://attack.mitre.org/datasources/DS0015/)</td>
    <td>[Application Log Content](https://attack.mitre.org/datasources/DS0015/#Application%20Log%20Content)</td>
    <td>Monitor for application logging, messaging, and/or other artifacts that may rely upon specific actions by a user in order to gain execution.</td>
  </tr>
  <tr>
    <td>DS0022</td>
    <td>[Command](https://attack.mitre.org/datasources/DS0017/)</td>
    <td>[Command Execution](https://attack.mitre.org/datasources/DS0017/#Command%20Execution)</td>
    <td>Monitor for newly executed processes that depend on user interaction, especially for applications that can embed programmatic capabilities (e.g., Microsoft Office products with scripts, installers, zip files). This includes compression applications, such as those for zip files, that can be used to Deobfuscate/Decode Files or Information in payloads. For added context on adversary procedures and background see User Execution and applicable sub-techniques.</td>
  </tr>
  <tr>
    <td>DS0022</td>
    <td>[File](https://attack.mitre.org/datasources/DS0022/)</td>
    <td>[File Access](https://attack.mitre.org/datasources/DS0022/#File%20Access)</td>
    <td>Anti-virus can potentially detect malicious documents and files that are downloaded and executed on the user's computer. Endpoint sensing or network sensing can potentially detect malicious events once the file is opened (such as a Microsoft Word document or PDF reaching out to the internet or spawning PowerShell).</td>
  </tr>
  <tr>
    <td rowspan="2">DS0029</td>
    <td rowspan="2">[Network Traffic](https://attack.mitre.org/datasources/DS0029/)</td>
    <td >[Network Connection Creation](https://attack.mitre.org/datasources/DS0029/#Network%20Connection%20Creation)</td>
    <td>Monitor for newly constructed web-based network connections that are sent to malicious or suspicious destinations (e.g., destinations attributed to phishing campaigns). Consider correlation with process monitoring and command line to detect anomalous processes execution and command line arguments (e.g., monitor anomalies in use of files that do not normally initiate network connections or unusual connections initiated by regsvr32.exe, rundll.exe, SCF, HTA, MSI, DLLs, or msiexec.exe).</td>
  </tr>
  <tr>
    <td>[Network Traffic Content](https://attack.mitre.org/datasources/DS0029/#Network%20Traffic%20Content)</td>
    <td>Monitor and analyze traffic patterns and packet inspection associated with web-based network connections that are sent to malicious or suspicious destinations (e.g., destinations attributed to phishing campaigns). Consider correlation with process monitoring and command line to detect anomalous processes execution and command line arguments (e.g., monitor anomalies in use of files that do not normally initiate network connections or unusual connections initiated by regsvr32.exe, rundll.exe, SCF, HTA, MSI, DLLs, or msiexec.exe).</td>
  </tr>
  <tr>
    <td>(MITRE)DS0009</td>
    <td> [Process](https://attack.mitre.org/datasources/DS0009/)</td>
    <td>[Process Creation](https://attack.mitre.org/datasources/DS0009/#Process%20Creation)</td>
    <td>Monitor for newly executed processes that depend on user interaction, especially for applications that can embed programmatic capabilities (e.g., Microsoft Office products with scripts, installers, zip files). This includes compression applications, such as those for zip files, that can be used to Deobfuscate/Decode Files or Information in payloads.</td>
  </tr>
</table>

##

# References
1. [MITRE ATT&CK Technique: User Execution. Retrieved 01JUL2024.](https://attack.mitre.org/techniques/T0863/)
2. [Procedure Examples: Backdoor.Oldrea. Retrieved 01JUL2024.](https://attack.mitre.org/software/S0093/)
3. [Procedure Examples: Bad Rabbit. Retrieved 01JUL2024.](https://attack.mitre.org/software/S0606/)
4. [Procedure Examples: REvil. Retrieved 01JUL2024.](https://attack.mitre.org/software/S0496/)
5. [Procedure Examples: Stuxnet. Retrieved 01JUL2024.](https://www.langner.com/wp-content/uploads/2017/03/to-kill-a-centrifuge.pdf)
6. [Targeted Assets: Workstation. Retrieved 01JUL2024.](https://attack.mitre.org/assets/A0001/)
7. [Targeted Assets: Human-Machine Interface (HMI). Retrieved 01JUL2024.](https://attack.mitre.org/assets/A0002/)
8. [Targeted Assets: Jump Host. Retrieved 01JUL2024.](https://attack.mitre.org/assets/A0012/)
9. [MITRE ATT&CK Mitigation: Antivirus/Antimalware. Retrieved 01JUL2024.](https://attack.mitre.org/mitigations/M0949/)
10. [MITRE ATT&CK Mitigation: Code Signing. Retrieved 01JUL2024.](https://attack.mitre.org/mitigations/M0945/)
11. [MITRE ATT&CK Mitigation: Execution Prevention. Retrieved 01JUL2024.](https://attack.mitre.org/mitigations/M0938/)
12. [MITRE ATT&CK Mitigation: Network Intrusion Prevention. Retrieved 01JUL2024.](https://attack.mitre.org/mitigations/M0931/)
13. [MITRE ATT&CK Mitigation: Restrict Web-Based Content. Retrieved 01JUL2024.](https://attack.mitre.org/mitigations/M0921/)
14. [MITRE ATT&CK Mitigation: User Training. Retrieved 01JUL2024.](https://attack.mitre.org/mitigations/M0917/)
15. [MITRE ATT&CK Detection: Application Log. Retrieved 01JUL2024.](https://attack.mitre.org/datasources/DS0015/)
16. [MITRE ATT&CK Detection: Application Log Content. Retrieved 01JUL2024.](https://attack.mitre.org/datasources/DS0015/#Application%20Log%20Content)
17. [MITRE ATT&CK Detection: Command. Retrieved 01JUL2024.](https://attack.mitre.org/datasources/DS0017/)
18. [MITRE ATT&CK Detection: Command Execution. Retrieved 01JUL2024.](https://attack.mitre.org/datasources/DS0017/#Command%20Execution)
19. [MITRE ATT&CK Detection: File. Retrieved 01JUL2024.](https://attack.mitre.org/datasources/DS0022/)
20. [MITRE ATT&CK Detection: File Access. Retrieved 01JUL2024.](https://attack.mitre.org/datasources/DS0022/#File%20Access)
21. [MITRE ATT&CK Detection: Network Traffic. Retrieved 01JUL2024.](https://attack.mitre.org/datasources/DS0029/)
22. [MITRE ATT&CK Detection: Network Connection Creation. Retrieved 01JUL2024.](https://attack.mitre.org/datasources/DS0029/#Network%20Connection%20Creation)
23. [MITRE ATT&CK Detection: Network Traffic Content. Retrieved 01JUL2024.](https://attack.mitre.org/datasources/DS0029/#Network%20Traffic%20Content)
24. [MITRE ATT&CK Detection: Process. Retrieved 01JUL2024.](https://attack.mitre.org/datasources/DS0009/)
25. [MITRE ATT&CK Detection: Process Creation. Retrieved 01JUL2024.](https://attack.mitre.org/datasources/DS0009/#Process%20Creation)
26. [Ralph Langner. A Technical Analysis of What Stuxnet’s Creators Tried to Achieve. Retrieved 01JUL2024.](https://www.langner.com/wp-content/uploads/2017/03/to-kill-a-centrifuge.pdf)
27. [Nicolas Falliere, Liam O Murchu, and Eric Chien. W32.Stuxnet Dossier. Retrieved 01JUL2024.](https://www.wired.com/images_blogs/threatlevel/2011/02/Symantec-Stuxnet-Update-Feb-2011.pdf)