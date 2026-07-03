---
sidebar_label: 'Service Stop'
sidebar_position: 37
---

# Service Stop

# Summary
Adversaries may stop or disable services on a maritime system to render those services unavailable to legitimate users. Stopping critical services can inhibit or stop response to an incident or aid in the adversary's overall objectives to cause damage to the vessel's operations. Services may not allow for modification of their data stores while running. Adversaries may stop services in order to conduct Data Destruction.

&nbsp;

# Procedure Examples
| ID      | Name       | Description |
|:------------|:-----------|:--------------|
| S0605 | [EKANS](https://attack.mitre.org/software/S0605/) | Before encrypting the process, EKANS first kills the process if its name matches one of the processes defined on the kill-list. EKANS also utilizes netsh commands to implement firewall rules that blocks any remote communication with the device. |
| S0604 | [Industroyer](https://attack.mitre.org/software/S0604/) | Industroyer has the capability to stop a service itself, or to login as a user and stop a service as that user. |
| S1072 | [Industroyer2](https://attack.mitre.org/software/S1072/) | Industroyer2 has the capability to terminate specified processes (i.e., PServiceControl.exe and PService_PDD.exe) and rename each process to prevent restart. These are defined through a hardcoded configuration. |
| S0607 | [KillDisk](https://attack.mitre.org/software/S0607) | KillDisk looks for and terminates two non-standard processes, one of which is an ICS application.  |
| S0496 | [REvil](https://attack.mitre.org/software/S0496/) | REvil searches for all processes listed in the prc field within its configuration file and then terminates each process. |

&nbsp;

# Targeted Assets
| ID      | Asset       |
|:------------|:-----------|
| A0001 | [Workstation](https://attack.mitre.org/assets/A0001/) |
| A0002 | [Human-Machine Interface (HMI)](https://attack.mitre.org/assets/A0002/) |
| A0004 | [Remote Terminal Unit (RTU)](https://attack.mitre.org/assets/A0004/) |
| A0005 | [Intelligent Electronic Device (IED)](https://attack.mitre.org/assets/A0005/) |
| A0006 | [Data Historian](https://attack.mitre.org/assets/A0006/) |
| A0007 | [Control Server](https://attack.mitre.org/assets/A0007/) |
| A0008 | [Application Server](https://attack.mitre.org/assets/A0008/) |
| A0009 | [Data Gateway](https://attack.mitre.org/assets/A0009/) |
| A0010 | [Safety Controller](https://attack.mitre.org/assets/A0010/) |
| A0011 | [Virtual Private Network (VPN) Server](https://attack.mitre.org/assets/A0011/) |
| A0012 | [Jump Host](https://attack.mitre.org/assets/A0012/) |


&nbsp;

# Mitigations
| ID      | Mitigation       | Description |
|:------------|:-----------|:--------------|
| M0930 | [Network Segmentation](https://attack.mitre.org/mitigations/M0930/) | Segment operational network and systems to restrict access to critical system functions to predetermined management systems. |
| M0922 | [Restrict File and Directory Permissions](https://attack.mitre.org/mitigations/M0922/) | Ensure proper process and file permissions are in place to inhibit adversaries from disabling or interfering with critical services. |
| M0924 | [Restrict Registry Permissions](https://attack.mitre.org/mitigations/M0924/) | Ensure proper registry permissions are in place to inhibit adversaries from disabling or interfering with critical services. |
| M0918 | [User Account Management](https://attack.mitre.org/mitigations/M0918/) | Limit privileges of user accounts and groups so that only authorized administrators can change service states and configurations. |


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
    <td>onitor executed commands and arguments that may stop or disable services on a system to render those services unavailable to legitimate users.</td>
  </tr>
  <tr>
    <td >DS0022</td>
    <td>[File](https://attack.mitre.org/datasources/DS0022/)</td>
    <td>[File Modification](https://attack.mitre.org/datasources/DS0022/#File%20Modification)</td>
    <td>Monitor for changes made to files that may stop or disable services on a system to render those services unavailable to legitimate users.</td>
  </tr>
  <tr>
    <td rowspan='3'>DS0009</td>
    <td rowspan='3'>[Process](https://attack.mitre.org/datasources/DS0009/)</td>
    <td>[OS API Execution](https://attack.mitre.org/datasources/DS0009/#OS%20API%20Execution)</td>
    <td>Remote access tools with built-in features may interact directly with the Windows API to perform these functions outside of typical system utilities. For example, ChangeServiceConfigW may be used by an adversary to prevent services from starting. For added context on adversary procedures and background see Service Stop.</td>
  </tr>
  <tr>
    <td>[Process Creation](https://attack.mitre.org/datasources/DS0009/#Process%20Creation)</td>
    <td>Monitor for newly executed processes that may stop or disable services on a system to render those services unavailable to legitimate users.</td>
  </tr>
  <tr>
    <td>[Process Termination](https://attack.mitre.org/datasources/DS0009/#Process%20Termination)</td>
    <td>Monitor processes and command-line arguments to see if critical processes are terminated or stop running. For added context on adversary procedures and background see Service Stop.</td>
  </tr>
  <tr>
    <td>DS0019</td>
    <td>[Service](https://attack.mitre.org/datasources/DS0019/)</td>
    <td>[Service Metadata](https://attack.mitre.org/datasources/DS0019/#Service%20Metadata)</td>
    <td>Alterations to the service binary path or the service startup type changed to disabled may be suspicious.</td>
  </tr>
  <tr>
    <td>DS0024</td>
    <td>[Windows Registry](https://attack.mitre.org/datasources/DS0024/)</td>
    <td>[Windows Registry Key Modification](https://attack.mitre.org/datasources/DS0024/#Windows%20Registry%20Key%20Modification)</td>
    <td>Monitor for changes made to Windows registry keys and/or values that may stop or disable services on a system to render those services unavailable to legitimate users.</td>
  </tr>
</table>

##

# References
1. [MITRE ATT&CK Technique: Service Stop. Retrieved 01JUL2024.](https://attack.mitre.org/techniques/T0881/)
2. [Procedure Examples: EKANS. Retrieved 01JUL2024.](https://attack.mitre.org/software/S0605/)
3. [Procedure Examples: Industroyer. Retrieved 01JUL2024.](https://attack.mitre.org/software/S0604/)
4. [Procedure Examples: Industroyer2. Retrieved 01JUL2024.](https://attack.mitre.org/software/S1072/)
5. [Procedure Examples: KillDisk. Retrieved 01JUL2024.](https://attack.mitre.org/software/S0607/)
6. [Procedure Examples: REvil. Retrieved 01JUL2024.](https://attack.mitre.org/software/S0496/)
7. [Targeted Assets: Workstation. Retrieved 01JUL2024.](https://attack.mitre.org/assets/A0001/)
8. [Targeted Assets: Human-Machine Interface (HMI). Retrieved 01JUL2024.](https://attack.mitre.org/assets/A0002/)
9. [Targeted Assets: Remote Terminal Unit (RTU). Retrieved 01JUL2024.](https://attack.mitre.org/assets/A0004/)
10. [Targeted Assets: Intelligent Electronic Device (IED). Retrieved 01JUL2024.](https://attack.mitre.org/assets/A0005/)
11. [Targeted Assets: Data Historian. Retrieved 01JUL2024.](https://attack.mitre.org/assets/A0006/)
12. [Targeted Assets: Control Server. Retrieved 01JUL2024.](https://attack.mitre.org/assets/A0007/)
13. [Targeted Assets: Application Server. Retrieved 01JUL2024.](https://attack.mitre.org/assets/A0008/)
14. [Targeted Assets: Data Gateway. Retrieved 01JUL2024.](https://attack.mitre.org/assets/A0009/)
15. [Targeted Assets: Safety Controller. Retrieved 01JUL2024.](https://attack.mitre.org/assets/A0010/)
16. [Targeted Assets: Virtual Private Network (VPN) Server. Retrieved 01JUL2024.](https://attack.mitre.org/assets/A0011/)
17. [Targeted Assets: Jump Host. Retrieved 01JUL2024.](https://attack.mitre.org/assets/A0012/)
18. [MITRE ATT&CK Mitigation: Network Segmentation. Retrieved 01JUL2024.](https://attack.mitre.org/mitigations/M0930/)
19. [MITRE ATT&CK Mitigation: Restrict File and Directory Permissions. Retrieved 01JUL2024.](https://attack.mitre.org/mitigations/M0922/)
20. [MITRE ATT&CK Mitigation: Restrict Registry Permissions. Retrieved 01JUL2024.](https://attack.mitre.org/mitigations/M0924/)
21. [MITRE ATT&CK Mitigation: User Account Management. Retrieved 01JUL2024.](https://attack.mitre.org/mitigations/M0918/)
22. [MITRE ATT&CK Detection: Command. Retrieved 01JUL2024.](https://attack.mitre.org/datasources/DS0017/)
23. [MITRE ATT&CK Detection: Command Execution. Retrieved 01JUL2024.](https://attack.mitre.org/datasources/DS0017/#Command%20Execution)
24. [MITRE ATT&CK Detection: File. Retrieved 01JUL2024.](https://attack.mitre.org/datasources/DS0022/)
25. [MITRE ATT&CK Detection: File Modification. Retrieved 01JUL2024.](https://attack.mitre.org/datasources/DS0022/#File%20Modification)
26. [MITRE ATT&CK Detection: Process. Retrieved 01JUL2024.](https://attack.mitre.org/datasources/DS0009/)
27. [MITRE ATT&CK Detection: OS API Execution. Retrieved 01JUL2024.](https://attack.mitre.org/datasources/DS0009/#OS%20API%20Execution)
28. [MITRE ATT&CK Detection: Process Creation. Retrieved 01JUL2024.](https://attack.mitre.org/datasources/DS0009/#Process%20Creation)
29. [MITRE ATT&CK Detection: Process Termination. Retrieved 01JUL2024.](https://attack.mitre.org/datasources/DS0009/#Process%20Termination)
30. [MITRE ATT&CK Detection: Service. Retrieved 01JUL2024.](https://attack.mitre.org/datasources/DS0019/)
31. [MITRE ATT&CK Detection: Service Metadata. Retrieved 01JUL2024.](https://attack.mitre.org/datasources/DS0019/#Service%20Metadata)
32. [MITRE ATT&CK Detection: Windows Registry. Retrieved 01JUL2024.](https://attack.mitre.org/datasources/DS0012/)
33. [MITRE ATT&CK Detection: Windows Registry Key Modification. Retrieved 01JUL2024.](https://attack.mitre.org/datasources/DS0024/#Windows%20Registry%20Key%20Modification)

