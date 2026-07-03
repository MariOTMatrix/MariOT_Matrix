---
sidebar_label: 'Data from Local System'
sidebar_position: 21
---

# Data from Local System

# Summary
Adversaries may target and collect data from maritime system sources, such as vessel file systems, configuration files, or onboard databases. This can include sensitive data such as ship specifications, navigation schematics, or diagrams of control system layouts, maritime devices, and operational processes.

Adversaries may do this using Command-Line Interface or Scripting techniques to interact with the vessel's file system to gather information. Adversaries may also use Automated Collection on the maritime system.


# Procedure Examples
| ID      | Name       | Description |
|:------------|:-----------|:--------------|
| S1000 | [ACAD/Medre.A](https://attack.mitre.org/software/S1000/) | ACAD/Medre.A collects information related to the AutoCAD application. The worm collects AutoCAD (*.dwg) files with drawings from infected systems. |
| S0038 | [Duqu](https://attack.mitre.org/software/S0038/) | Duqu downloads additional modules for the collection of data from local systems. The modules are named: infostealer 1, infostealer 2 and reconnaissance.  |
| S0143 | [Flame](https://attack.mitre.org/software/S0143/) | Flame has built-in modules to gather information from compromised computers.  |

&nbsp;

# Targeted Assets
| ID      | Asset       |
|:------------|:-----------|
| A0001 | [Workstation](https://attack.mitre.org/assets/A0001/) |
| A0002 | [Human-Machine Interface (HMI)](https://attack.mitre.org/assets/A0002/) |
| A0006 | [Data Historian](https://attack.mitre.org/assets/A0006/) |
| A0007 | [Control Server](https://attack.mitre.org/assets/A0007/) |
| A0008 | [Application Server](https://attack.mitre.org/assets/A0008/) |
| A0012 | [Jump Host](https://attack.mitre.org/assets/A0012/) |

&nbsp;

# Mitigations
| ID      | Mitigation       | Description |
|:------------|:-----------|:--------------|
| M0803 | [Data Loss Prevention](https://attack.mitre.org/mitigations/M0803/) | Data loss prevention can restrict access to sensitive data and detect sensitive data that is unencrypted. |
| M0941 | [Encrypt Sensitive Information](https://attack.mitre.org/mitigations/M0941/) | Information which is sensitive to the operation and architecture of the process environment may be encrypted to ensure confidentiality and restrict access to only those who need to know. |
| M0922 | [Restrict File and Directory Permissions](https://attack.mitre.org/mitigations/M0922/) | Protect files stored locally with proper permissions to limit opportunities for adversaries to interact and collect information from the local system. |
| M0917 | [User Training](https://attack.mitre.org/mitigations/M0917/) | Develop and publish policies that define acceptable information to be stored on local systems. |


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
    <td>DS0022</td>
    <td>[Command](https://attack.mitre.org/datasources/DS0017/)</td>
    <td>[Command Execution](https://attack.mitre.org/datasources/DS0017/#Command%20Execution)</td>
    <td>Monitor executed commands and arguments that may search and collect local system sources, such as file systems or local databases, to find files of interest and sensitive data. Remote access tools with built-in features may interact directly with the Windows API to gather data. Data may also be acquired through Windows system management tools such as Windows Management Instrumentation and PowerShell.</td>
  </tr>
  <tr>
    <td>DS0022</td>
    <td>[File](https://attack.mitre.org/datasources/DS0022/)</td>
    <td>[File Access](https://attack.mitre.org/datasources/DS0022/#File%20Access)</td>
    <td>Monitor for unexpected/abnormal access to files that may be malicious collection of local data, such as user files (e.g., .pdf, .docx, .jpg, .dwg ) or local databases.</td>
  </tr>
  <tr>
    <td rowspan='2'>DS0009</td>
    <td rowspan='2'>[Process](https://attack.mitre.org/datasources/DS0009/)</td>
    <td>[OS API Execution](https://attack.mitre.org/datasources/DS0009/#OS%20API%20Execution)</td>
    <td>Monitor for API calls that may search local system sources, such as file systems or local databases, to find files of interest and sensitive data.</td>
  </tr>
  <tr>
    <td>[Process Creation](https://attack.mitre.org/datasources/DS0009/#Process%20Creation)</td>
    <td>Monitor for newly executed processes that may search local system sources, such as file systems or local databases, to find files of interest and sensitive data.</td>
  </tr>
  <tr>
    <td>DS0012</td>
    <td>[Script](https://attack.mitre.org/datasources/DS0012/)</td>
    <td>[Script Execution](https://attack.mitre.org/datasources/DS0012/#Script%20Execution)</td>
    <td>Monitor for any suspicious attempts to enable scripts running on a system. If scripts are not commonly used on a system, but enabled, scripts running out of cycle from patching or other administrator functions are suspicious. Scripts should be captured from the file system when possible to determine their actions and intent. Data may also be acquired through Windows system management tools such as Windows Management Instrumentation and PowerShell.</td>
  </tr>
</table>


##

# References
1. [MITRE ATT&CK Technique: Data from Local System. Retrieved 01JUL2024. ](https://attack.mitre.org/techniques/T0893/).
2. [Procedure Examples: ACAD/Medre.A. Retrieved 01JUL2024.](https://attack.mitre.org/software/S1000/)
3. [Procedure Examples: Duqu. Retrieved 01JUL2024.](https://attack.mitre.org/software/S0038/)
4. [Procedure Examples: Flame. Retrieved 01JUL2024.](https://attack.mitre.org/software/S0143/)
5. [Targeted Assets: Workstation. Retrieved 01JUL2024.](https://attack.mitre.org/assets/A0001/)
6. [Targeted Assets: Human-Machine Interface (HMI). Retrieved 01JUL2024.](https://attack.mitre.org/assets/A0002/)
7. [Targeted Assets: Data Historian. Retrieved 01JUL2024.](https://attack.mitre.org/assets/A0006/)
8. [Targeted Assets: Control Server. Retrieved 01JUL2024.](https://attack.mitre.org/assets/A0007/)
9. [Targeted Assets: Application Server. Retrieved 01JUL2024.](https://attack.mitre.org/assets/A0008/)
10. [Targeted Assets: Jump Host. Retrieved 01JUL2024.](https://attack.mitre.org/assets/A0012/)
11. [MITRE ATT&CK Mitigation: Data Loss Prevention. Retrieved 01JUL2024.](https://attack.mitre.org/mitigations/M0803/)
12. [MITRE ATT&CK Mitigation: Encrypt Sensitive Information. Retrieved 01JUL2024.](https://attack.mitre.org/mitigations/M0941/)
13. [MITRE ATT&CK Mitigation: Restrict File and Directory Permissions. Retrieved 01JUL2024.](https://attack.mitre.org/mitigations/M0922/)
14. [MITRE ATT&CK Mitigation: User Training. Retrieved 01JUL2024.](https://attack.mitre.org/mitigations/M0917/)
15. [MITRE ATT&CK Detection: Command](https://attack.mitre.org/datasources/DS0017/)
16. [MITRE ATT&CK Detection: Command Execution](https://attack.mitre.org/datasources/DS0017/#Command%20Execution)
17. [MITRE ATT&CK Detection: File. Retrieved 01JUL2024.](https://attack.mitre.org/datasources/DS0022/)
18. [MITRE ATT&CK Detection: File Access. Retrieved 01JUL2024.](https://attack.mitre.org/datasources/DS0022/#File%20Access)
19. [MITRE ATT&CK Detection: Process](https://attack.mitre.org/datasources/DS0009/)
20. [MITRE ATT&CK Detection: OS API Execution](https://attack.mitre.org/datasources/DS0009/#OS%20API%20Execution)
21. [MITRE ATT&CK Detection: Process Creation](https://attack.mitre.org/datasources/DS0009/#Process%20Creation)
22. [MITRE ATT&CK Detection: Script](https://attack.mitre.org/datasources/DS0012/)
23. [MITRE ATT&CK Detection: Script Execution](https://attack.mitre.org/datasources/DS0012/#Script%20Execution)