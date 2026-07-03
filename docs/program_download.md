---
sidebar_label: 'Program Download'
sidebar_position: 17
---

# Program Download

# Summary
Adversaries may perform a program download to transfer a user program to a maritime control system controller.

Variations of program download, such as online edit and program append, allow a controller to continue running during the transfer and reconfiguration process without interruption to process control. However, before starting a full program download (i.e., download all), a controller may need to go into a stop state. This can have negative consequences on the maritime process, especially if the controller is not able to fulfill a time-sensitive action. Adversaries may choose to avoid a download all in favor of an online edit or program append to avoid disrupting the maritime process. An adversary may need to use the technique Detect Operating Mode or Change Operating Mode to make sure the controller is in the proper mode to accept a program download.

The granularity of control to transfer a user program in whole or parts is dictated by the management protocol (e.g., S7CommPlus, TriStation) and underlying controller API. Thus, program download is a high-level term for the suite of vendor-specific API calls used to configure a controller's user program memory space.

Modify Controller Tasking and Modify Program represent the configuration changes that are transferred to a maritime controller via a program download.

# Procedure Examples
| ID      | Name       | Description |
|:------------|:-----------|:--------------|
| S0606 | [Bad Rabbit](https://attack.mitre.org/software/S0606/) | Bad Rabbit initially infected IT networks, but by means of an exploit (particularly the SMBv1-targeting MS17-010 vulnerability) spread to industrial networks.  |
| S0368 | [NotPetya](https://attack.mitre.org/software/S0368/) |NotPetya initially infected IT networks, but by means of an exploit (particularly the SMBv1-targeting MS17-010 vulnerability) spread to industrial networks. |
| S0603	| [Stuxnet](https://attack.mitre.org/software/S0603/) | Stuxnet executes malicious SQL commands in the WinCC database server to propagate to remote systems. The malicious SQL commands include xp_cmdshell, sp_dumpdbilog, and sp_addextendedproc. |
| S0366| [WannaCry](https://attack.mitre.org/software/S0366/) | WannaCry initially infected IT networks, but by means of an exploit (particularly the SMBv1-targeting MS17-010 vulnerability) spread to industrial networks. |

&nbsp;

# Targeted Assets
| ID      | Asset       |
|:------------|:-----------|
| A0001 | [Workstation](https://attack.mitre.org/assets/A0001/) |
| A0002 | [Human-Machine Interface (HMI)](https://attack.mitre.org/assets/A0002/) |
| A0003 | [Programmable Logic Controller(PLC)](https://attack.mitre.org/assets/A0003/) |
| A0004 | [Remote Terminal Unit (RTU)](https://attack.mitre.org/assets/A0004/) |
| A0005 | [Intelligent Electronic Device (IED)](https://attack.mitre.org/assets/A0005/) |
| A0006 | [Data Historian](https://attack.mitre.org/assets/A0006/) |
| A0007 | [Control Server](https://attack.mitre.org/assets/A0007/) |
| A0008 | [Application Server](https://attack.mitre.org/assets/A0008/) |
| A0009 | [Data Gateway](https://attack.mitre.org/assets/A0009/) |
| A0010 | [Safety Controller](https://attack.mitre.org/assets/A0010/) |
| A0011 | [Virtual Private Network (VPN) Server](https://attack.mitre.org/assets/A0011/) |
| A0012 | [Jump Host](https://attack.mitre.org/assets/A0012/) |
| A0014 | [Routers](https://attack.mitre.org/assets/A0014/) |

&nbsp;

# Mitigations
| ID      | Mitigation       | Description |
|:------------|:-----------|:--------------|
| M0948 | [Application Isolation and Sandboxing](https://attack.mitre.org/mitigations/M0948/) | Make it difficult for adversaries to advance their operation through exploitation of undiscovered or unpatched vulnerabilities by using sandboxing. Other types of virtualization and application microsegmentation may also mitigate the impact of some types of exploitation. Risks of additional exploits and weaknesses in these systems may still exist. |
| M0942 | [Disable or Remove Feature or Program](https://attack.mitre.org/mitigations/M0942/) | Ensure that unnecessary ports and services are closed to prevent risk of discovery and potential exploitation. |
| M0950 | [Exploit Protection](https://attack.mitre.org/mitigations/M0950/) | ecurity applications that look for behavior used during exploitation such as Windows Defender Exploit Guard (WDEG) and the Enhanced Mitigation Experience Toolkit (EMET) can be used to mitigate some exploitation behavior. Control flow integrity checking is another way to potentially identify and stop a software exploit from occurring. Many of these protections depend on the architecture and target application binary for compatibility and may not work for all software or services targeted. |
| M0930 | [Network Segmentation](https://attack.mitre.org/mitigations/M0930/) | Segment networks and systems appropriately to reduce access to critical system and services communications. |
| M0926 | [Privileged Account Management](https://attack.mitre.org/mitigations/M0926/) | Minimize permissions and access for service accounts to limit impact of exploitation.  |
| M0919 | [Threat Intelligence Program](https://attack.mitre.org/mitigations/M0919/) | Develop a robust cyber threat intelligence capability to determine what types and levels of threat may use software exploits and 0-days against a particular organization. |
| M0951 | [Update Software](https://attack.mitre.org/mitigations/M0951/) | Update software regularly by employing patch management for internal enterprise endpoints and servers. |
| M0916 | [Vulnerability Scanning](https://attack.mitre.org/mitigations/M0916/) | Regularly scan the internal network for available services to identify new and potentially vulnerable services. |



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
    <td>Detecting software exploitation may be difficult depending on the tools available. Software exploits may not always succeed or may cause the exploited process to become unstable or crash, which may be recorded in the application log.</td>
  </tr>
  <tr>
    <td>DS0029</td>
    <td>[Network Traffic](https://attack.mitre.org/datasources/DS0029/)</td>
    <td>[Network Traffic Content](https://attack.mitre.org/datasources/DS0029/#Network%20Traffic%20Content)</td>
    <td>Use deep packet inspection to look for artifacts of common exploit traffic, such as known payloads.</td>
  </tr>
</table>

##

# References
1. [MITRE ATT&CK Technique: Exploitation of Remote Services. Retrieved 01JUL2024.](https://attack.mitre.org/techniques/T0866/)
2. [Procedure Examples: Bad Rabbit. Retrieved 01JUL2024.](https://attack.mitre.org/software/S0606/)
3. [Procedure Examples: NotPetya. Retrieved 01JUL2024.](https://attack.mitre.org/software/S0368/)
4. [Procedure Examples: Stuxnet. Retrieved 01JUL2024.](https://www.langner.com/wp-content/uploads/2017/03/to-kill-a-centrifuge.pdf)
5. [Procedure Examples: WannaCry. Retrieved 01JUL2024.](https://attack.mitre.org/software/S0366/)
6. [Targeted Assets: Workstation. Retrieved 01JUL2024.](https://attack.mitre.org/assets/A0001/)
7. [Targeted Assets: Human-Machine Interface (HMI). Retrieved 01JUL2024.](https://attack.mitre.org/assets/A0002/)
8. [Targeted Assets: Programmable Logic Controller(PLC). Retrieved 01JUL2024.](https://attack.mitre.org/assets/A0003/)
9. [Targeted Assets: Remote Terminal Unit (RTU). Retrieved 01JUL2024.](https://attack.mitre.org/assets/A0004/)
10. [Targeted Assets: Intelligent Electronic Device (IED). Retrieved 01JUL2024.](https://attack.mitre.org/assets/A0005/)
11. [Targeted Assets: Data Historian. Retrieved 01JUL2024.](https://attack.mitre.org/assets/A0006/)
12. [Targeted Assets: Control Server. Retrieved 01JUL2024.](https://attack.mitre.org/assets/A0007/)
13. [Targeted Assets: Application Server. Retrieved 01JUL2024.](https://attack.mitre.org/assets/A0008/)
14. [Targeted Assets: Data Gateway. Retrieved 01JUL2024.](https://attack.mitre.org/assets/A0009/)
15. [Targeted Assets: Safety Controller. Retrieved 01JUL2024.](https://attack.mitre.org/assets/A0010/)
16. [Targeted Assets: Virtual Private Network (VPN) Server. Retrieved 01JUL2024.](https://attack.mitre.org/assets/A0011/)
17. [Targeted Assets: Jump Host. Retrieved 01JUL2024.](https://attack.mitre.org/assets/A0012/)
18. [Targeted Assets: Routers. Retrieved 01JUL2024.](https://attack.mitre.org/assets/A0014/)
19. [MITRE ATT&CK Mitigation: Application Isolation and Sandboxing. Retrieved 01JUL2024.](https://attack.mitre.org/mitigations/M0948/)
20. [MITRE ATT&CK Mitigation: Disable or Remove Feature or Program. Retrieved 01JUL2024.](https://attack.mitre.org/mitigations/M0942/)
21. [MITRE ATT&CK Mitigation: Exploit Protection. Retrieved 01JUL2024.](https://attack.mitre.org/mitigations/M0950/)
22. [MITRE ATT&CK Mitigation: Network Segmentation. Retrieved 01JUL2024.](https://attack.mitre.org/mitigations/M0930/)
23. [MITRE ATT&CK Mitigation: Privileged Account Management. Retrieved 01JUL2024.](https://attack.mitre.org/mitigations/M0926/)
24. [MITRE ATT&CK Mitigation: Threat Intelligence Program. Retrieved 01JUL2024.](https://attack.mitre.org/mitigations/M0919/)
25. [MITRE ATT&CK Mitigation: Update Software. Retrieved 01JUL2024.](https://attack.mitre.org/mitigations/M0951/)
26. [MITRE ATT&CK Mitigation: Vulnerability Scanning. Retrieved 01JUL2024.](https://attack.mitre.org/mitigations/M0916/)
27. [MITRE ATT&CK Detection: Application Log. Retrieved 01JUL2024.](https://attack.mitre.org/datasources/DS0015/)
28. [MITRE ATT&CK Detection: Application Log Content. Retrieved 01JUL2024.](https://attack.mitre.org/datasources/DS0015/#Application%20Log%20Content)
29. [MITRE ATT&CK Detection: Network Traffic. Retrieved 01JUL2024.](https://attack.mitre.org/datasources/DS0029/)
30. [MITRE ATT&CK Detection: Network Traffic Content. Retrieved 01JUL2024.](https://attack.mitre.org/datasources/DS0029/#Network%20Traffic%20Content)
