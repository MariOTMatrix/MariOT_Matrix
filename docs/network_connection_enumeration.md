---
sidebar_label: 'Network Connection Enumeration'
sidebar_position: 12
---

# Network Connection Enumeration

# Summary
Adversaries may perform network connection enumeration to discover information about maritime device communication patterns. If an adversary can inspect the state of a network connection with tools, such as Netstat, in conjunction with system firmware, they can determine the role of certain devices on the maritime network. The adversary can also use network sniffing to watch maritime network traffic for details about the source, destination, protocol, and content.

&nbsp;

# Procedure Examples
| ID      | Name       | Description |
|:------------|:-----------|:--------------|
| S0605 | [EKANS](https://attack.mitre.org/software/S0605/) | EKANS performs a DNS lookup of an internal domain name associated with its target network to identify if it was deployed on the intended system. |
| S0604 | [Industroyer](https://attack.mitre.org/software/S0604/) | Industroyer contains an IEC 61850 module that enumerates all connected network adapters to determine their TCP/IP subnet masks. |

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


&nbsp;

# Mitigations
| ID      | Mitigation       | Description |
|:------------|:-----------|:--------------|
| M0816 | [Mitigation Limited or Not Effective](https://attack.mitre.org/mitigations/M0816/) | Network connection enumeration is likely obtained by using common system tools (e.g., netstat, ipconfig). |



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
    <td>Monitor executed commands and arguments that may look for details about the network configuration and settings, such as IP and/or MAC addresses, of systems they access or through information discovery of remote systems. Also monitor executed commands and arguments that may attempt to get a listing of network connections to or from the compromised system they are currently accessing or from remote systems by querying for information over the network. Information may also be acquired through Windows system management tools such as Windows Management Instrumentation and PowerShell.</td>
  </tr>
  <tr>
    <td rowspan='2'>DS0009</td>
    <td rowspan='2'> [Process](https://attack.mitre.org/datasources/DS0009/)</td>
    <td>[OS API Execution](https://attack.mitre.org/datasources/DS0009/#OS%20API%20Execution)</td>
    <td>Monitor for API calls (such as GetAdaptersInfo() and GetIpNetTable()) that may gather details about the network configuration and settings, such as IP and/or MAC addresses. Also monitor for API calls that may attempt to get a listing of network connections to or from the compromised system they are currently accessing or from remote systems by querying for information over the network. For added context on adversary procedures and background see System Network Configuration Discovery and System Network Connections Discovery.</td>
  </tr>
  <tr>
    <td>[Process Creation](https://attack.mitre.org/datasources/DS0009/#Process%20Creation)</td>
    <td>Monitor for executed processes (such as ipconfig/ifconfig and arp) with arguments that may look for details about the network configuration and settings, such as IP and/or MAC addresses. Also monitor for executed processes that may attempt to get a listing of network connections to or from the compromised system they are currently accessing or from remote systems by querying for information over the network.</td>
  </tr>
  <tr>
    <td>DS0012</td>
    <td>[Script](https://attack.mitre.org/datasources/DS0012/)</td>
    <td>[Script Execution](https://attack.mitre.org/datasources/DS0012/#Script%20Execution)</td>
    <td>Monitor for any suspicious attempts to enable script execution on a system. If scripts are not commonly used on a system, but enabled, scripts running out of cycle from patching or other administrator functions are suspicious. Scripts should be captured from the file system when possible to determine their actions and intent.</td>
  </tr>
</table>

##

# References
1. [MITRE ATT&CK Technique: Network Connection Enumeration. Retrieved 01JUL2024.](https://attack.mitre.org/techniques/T0840/)
2. [Procedure Examples: EKANS. Retrieved 01JUL2024.](https://attack.mitre.org/software/S0605/)
3. [Procedure Examples: Industroyer. Retrieved 01JUL2024.](https://attack.mitre.org/software/S0604/)
4. [Targeted Assets: Workstation. Retrieved 01JUL2024.](https://attack.mitre.org/assets/A0001/)
5. [Targeted Assets: Human-Machine Interface (HMI). Retrieved 01JUL2024.](https://attack.mitre.org/assets/A0002/)
6. [Targeted Assets: Programmable Logic Controller(PLC). Retrieved 01JUL2024.](https://attack.mitre.org/assets/A0003/)
7. [Targeted Assets: Remote Terminal Unit (RTU). Retrieved 01JUL2024.](https://attack.mitre.org/assets/A0004/)
8. [Targeted Assets: Intelligent Electronic Device (IED). Retrieved 01JUL2024.](https://attack.mitre.org/assets/A0005/)
9. [Targeted Assets: Data Historian. Retrieved 01JUL2024.](https://attack.mitre.org/assets/A0006/)
10. [Targeted Assets: Control Server. Retrieved 01JUL2024.](https://attack.mitre.org/assets/A0007/)
11. [Targeted Assets: Application Server. Retrieved 01JUL2024.](https://attack.mitre.org/assets/A0008/)
12. [Targeted Assets: Data Gateway. Retrieved 01JUL2024.](https://attack.mitre.org/assets/A0009/)
13. [Targeted Assets: Safety Controller. Retrieved 01JUL2024.](https://attack.mitre.org/assets/A0010/)
14. [Targeted Assets: Virtual Private Network (VPN) Server. Retrieved 01JUL2024.](https://attack.mitre.org/assets/A0011/)
15. [Targeted Assets: Jump Host. Retrieved 01JUL2024.](https://attack.mitre.org/assets/A0012/)
16. [MITRE ATT&CK Mitigation: Mitigation Limited or Not Effective. Retrieved 01JUL2024.](https://attack.mitre.org/mitigations/M0816/)
17. [MITRE ATT&CK Detection: Command](https://attack.mitre.org/datasources/DS0017/)
18. [MITRE ATT&CK Detection: Command Execution](https://attack.mitre.org/datasources/DS0017/#Command%20Execution)
19. [MITRE ATT&CK Detection: Process](https://attack.mitre.org/datasources/DS0009/)
20. [MITRE ATT&CK Detection: OS API Execution](https://attack.mitre.org/datasources/DS0009/#OS%20API%20Execution)
21. [MITRE ATT&CK Detection: Process Creation](https://attack.mitre.org/datasources/DS0009/#Process%20Creation)
22. [MITRE ATT&CK Detection: Script](https://attack.mitre.org/datasources/DS0012/)
23. [MITRE ATT&CK Detection: Script Execution](https://attack.mitre.org/datasources/DS0012/#Script%20Execution)

