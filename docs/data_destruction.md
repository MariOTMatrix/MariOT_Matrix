---
sidebar_label: 'Data Destruction'
sidebar_position: 32
---

# Data Destruction

# Summary
Adversaries may perform data destruction over the course of an operation in maritime environments. They may drop or create malware, tools, or other non-native files on a target system to accomplish this, potentially leaving behind traces of malicious activities. Such non-native files and other data may be removed over the course of an intrusion to maintain a small footprint or as a standard part of the post-intrusion cleanup process.

Data destruction may also be used to render operator interfaces unable to respond and to disrupt response functions from occurring as expected. An adversary may also destroy data backups that are vital to recovery after an incident.

Standard file deletion commands are available on most operating systems and device interfaces to perform cleanup, but adversaries may use other tools as well. Two examples are Windows Sysinternals SDelete and Active@ Killdisk.


# Procedure Examples
| ID      | Name       | Description |
|:------------|:-----------|:--------------|
| S1045 | [INCONTROLLER](https://attack.mitre.org/software/S1045/) | IINCONTROLLER can wipe the memory of Omron PLCs and reset settings through the remote HTTP service. |
| S0604 | [Industroyer](https://attack.mitre.org/software/S0604/) | Industroyer has a destructive wiper that overwrites all ICS configuration files across the hard drives and all mapped network drives specifically targeting ABB PCM600 configuration files. |
| S0607 | [KillDisk](https://attack.mitre.org/software/S0607) | KillDisk is able to delete system files to make the system unbootable and targets 35 different types of files for deletion. |

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
| A0013 | [Field I/O](https://attack.mitre.org/assets/A0013/) |
| A0014 | [Routers](https://attack.mitre.org/assets/A0014/) |

&nbsp;

# Mitigations
| ID      | Mitigation       | Description |
|:------------|:-----------|:--------------|
| M0953 | [Data Backup](https://attack.mitre.org/mitigations/M0953/) | Utilize central storage servers for critical operations where possible (e.g., historians) and keep remote backups. For outstations, use local redundant storage for event recorders. Have backup control system platforms, preferably as hot-standbys to respond immediately to data destruction events. |
| M0926 | [Privileged Account Management](https://attack.mitre.org/mitigations/M0926/) |Minimize permissions and access for service accounts to limit the information that may be impacted by malicious users or software. |
| M0922 | [Restrict File and Directory Permissions](https://attack.mitre.org/mitigations/M0922/) | Protect files stored locally with proper permissions to limit opportunities for adversaries to impact data storage. |

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
    <td >DS0017</td>
    <td>[Command](https://attack.mitre.org/datasources/DS0017/)</td>
    <td>[Command Execution](https://attack.mitre.org/datasources/DS0017/#Command%20Execution)</td>
    <td>Monitor executed commands and arguments for binaries that could be involved in data destruction activity, such as SDelete.</td>
  </tr>
  <tr>
    <td rowspan='2'>DS0022</td>
    <td rowspan='2'>[File](https://attack.mitre.org/datasources/DS0022/)</td>
    <td>[File Deletion](https://attack.mitre.org/datasources/DS0022/#File%20Deletion)</td>
    <td>Monitor for unexpected deletion of files.</td>
  </tr>
  <tr>
    <td>[File Modification](https://attack.mitre.org/datasources/DS0022/#File%20Modification)</td>
    <td>Monitor for changes made to a large quantity of files for unexpected modifications in both user directories and directories used to store programs and OS components (e.g., C:\Windows\System32).</td>
  </tr>
  <tr>
    <td>DS0009</td>
    <td>[Process](https://attack.mitre.org/datasources/DS0009/)</td>
    <td>[Process Creation](https://attack.mitre.org/datasources/DS0009/#Process%20Creation)</td>
    <td>Monitor for newly executed processes of binaries that could be involved in data destruction activity, such as SDelete.</td>
  </tr>


</table>


##

# References
1. [MITRE ATT&CK Technique: Block Command Message. Retrieved 01JUL2024.](https://attack.mitre.org/techniques/T0803/)
2. [Procedure Examples: INCONTROLLER. Retrieved 01JUL2024.](https://attack.mitre.org/software/S1045/)
3. [Procedure Examples: Industroyer. Retrieved 01JUL2024.](https://attack.mitre.org/software/S0604/)
4. [Procedure Examples: KillDisk. Retrieved 01JUL2024.](https://attack.mitre.org/software/S0607/)
5. [Targeted Assets: Workstation. Retrieved 01JUL2024.](https://attack.mitre.org/assets/A0001/)
6. [Targeted Assets: Human-Machine Interface (HMI). Retrieved 01JUL2024.](https://attack.mitre.org/assets/A0002/)
7. [Targeted Assets: Programmable Logic Controller(PLC). Retrieved 01JUL2024.](https://attack.mitre.org/assets/A0003/)
8. [Targeted Assets: Remote Terminal Unit (RTU). Retrieved 01JUL2024.](https://attack.mitre.org/assets/A0004/)
9. [Targeted Assets: Intelligent Electronic Device (IED). Retrieved 01JUL2024.](https://attack.mitre.org/assets/A0005/)
10. [Targeted Assets: Data Historian. Retrieved 01JUL2024.](https://attack.mitre.org/assets/A0006/)
11. [Targeted Assets: Control Server. Retrieved 01JUL2024.](https://attack.mitre.org/assets/A0007/)
12. [Targeted Assets: Application Server. Retrieved 01JUL2024.](https://attack.mitre.org/assets/A0008/)
13. [Targeted Assets: Data Gateway. Retrieved 01JUL2024.](https://attack.mitre.org/assets/A0009/)
14. [Targeted Assets: Safety Controller. Retrieved 01JUL2024.](https://attack.mitre.org/assets/A0010/)
15. [Targeted Assets: Virtual Private Network (VPN) Server. Retrieved 01JUL2024.](https://attack.mitre.org/assets/A0011/)
16. [Targeted Assets: Jump Host. Retrieved 01JUL2024.](https://attack.mitre.org/assets/A0012/)
17. [Targeted Assets: Field I/O. Retrieved 01JUL2024.](https://attack.mitre.org/assets/A0013/)
18. [Targeted Assets: Routers. Retrieved 01JUL2024.](https://attack.mitre.org/assets/A0014/)
19. [MITRE ATT&CK Mitigation: Data Backup. Retrieved 01JUL2024.](https://attack.mitre.org/mitigations/M0953/)
20. [MITRE ATT&CK Mitigation: Privileged Account Management. Retrieved 01JUL2024.](https://attack.mitre.org/mitigations/M0926/)
21. [MITRE ATT&CK Mitigation: Restrict File and Directory Permissions. Retrieved 01JUL2024.](https://attack.mitre.org/mitigations/M0922/)
22. [MITRE ATT&CK Detection: Command](https://attack.mitre.org/datasources/DS0017/)
23. [MITRE ATT&CK Detection: Command Execution](https://attack.mitre.org/datasources/DS0017/#Command%20Execution)
24. [MITRE ATT&CK Detection: File. Retrieved 01JUL2024.](https://attack.mitre.org/datasources/DS0022)
25. [MITRE ATT&CK Detection: File Deletion. Retrieved 01JUL2024.](https://attack.mitre.org/datasources/DS0022/#File%20Deletion)
26. [MITRE ATT&CK Detection: File Modification. Retrieved 01JUL2024.](https://attack.mitre.org/datasources/DS0022/#File%20Modification)
27. [MITRE ATT&CK Detection: Process. Retrieved 01JUL2024.](https://attack.mitre.org/datasources/DS0009/)
28. [MITRE ATT&CK Detection: Process Creation. Retrieved 01JUL2024.](https://attack.mitre.org/datasources/DS0009/#Process%20Creation)