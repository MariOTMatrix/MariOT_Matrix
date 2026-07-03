---
sidebar_label: 'Remote Services'
sidebar_position: 18
---

# Remote Services

# Summary
Adversaries may leverage remote services to move between maritime assets and network segments. These services are often used to allow operators to interact with systems remotely within the network; some examples are RDP, SMB, SSH, and other similar mechanisms.

Remote services could be used to support remote access, data transmission, authentication, name resolution, and other remote functions. Further, remote services may be necessary to allow operators and administrators to configure maritime systems within the network from their engineering or management workstations. An adversary may use this technique to access devices which may be dual-homed to multiple network segments and can be used for program download or to execute attacks on control devices directly through valid accounts.

Specific remote services (RDP & VNC) may be a precursor to enable graphical user interface execution on devices such as HMIs or engineering workstation software.

Based on incident data, CISA and FBI assessed that Chinese state-sponsored actors also compromised various authorized remote access channels, including systems designed to transfer data and/or allow access between corporate and maritime control networks.


# Procedure Examples
| ID      | Name       | Description |
|:------------|:-----------|:--------------|
| C0028 | [2015 Ukraine Electric Power Attack](https://attack.mitre.org/campaigns/C0028/) | During the 2015 Ukraine Electric Power Attack, Sandworm Team used an IT helpdesk software to move the mouse on ICS control devices to maliciously release electricity breakers. |
| C0025 | [2016 Ukraine Electric Power Attack](https://attack.mitre.org/campaigns/C0025/) | During the 2016 Ukraine Electric Power Attack, Sandworm Team used MS-SQL access to a pivot machine, allowing code execution throughout the ICS network. |
| S1045 | [INCONTROLLER](https://attack.mitre.org/software/S1045/) | INCONTROLLER can use the CODESYS protocol to remotely connect to Schneider PLCs and perform maintenance functions on the device. <br/><br/> INCONTROLLER can use Telnet to upload payloads and execute commands on Omron PLCs. The malware can also use HTTP-based CGI scripts (e.g., cpu.fcgi, ecat.fcgi) to gain administrative access to the device. |
| S0496 | [REvil](https://attack.mitre.org/software/S0496/) | REvil uses the SMB protocol to encrypt files located on remotely connected file shares.  |
| S0603	| [Stuxnet](https://www.langner.com/wp-content/uploads/2017/03/to-kill-a-centrifuge.pdf) | Stuxnet executes malicious SQL commands in the WinCC database server to propagate to remote systems. The malicious SQL commands include xp_cmdshell, sp_dumpdbilog, and sp_addextendedproc. |
| C0030 | [Triton Safety Instrumented System Attack](https://attack.mitre.org/campaigns/C0030/) | In the Triton Safety Instrumented System Attack, TEMP.Veles utilized remote desktop protocol (RDP) jump boxes, poorly configured OT firewalls, along with other traditional malware backdoors, to move into the ICS environment. |

&nbsp;

# Targeted Assets
| ID      | Asset       |
|:------------|:-----------|
| A0002 | [Human-Machine Interface (HMI)](https://attack.mitre.org/assets/A0002/) |
| A0006 | [Data Historian](https://attack.mitre.org/assets/A0006/) |
| A0007 | [Control Server](https://attack.mitre.org/assets/A0007/) |
| A0008 | [Application Server](https://attack.mitre.org/assets/A0008/) |
| A0009 | [Data Gateway](https://attack.mitre.org/assets/A0009/) |
| A0011 | [Virtual Private Network (VPN) Server](https://attack.mitre.org/assets/A0011/) |
| A0012 | [Jump Host](https://attack.mitre.org/assets/A0012/) |




&nbsp;

# Mitigations
| ID      | Mitigation       | Description |
|:------------|:-----------|:--------------|
| M0801 | [Access Management](https://attack.mitre.org/mitigations/M0801/) | Access Management technologies can help enforce authentication on critical remote service, examples include, but are not limited to, device management services (e.g., telnet, SSH), data access servers (e.g., HTTP, Historians), and HMI sessions (e.g., RDP, VNC). |
| M0800 | [Authorization Enforcement](https://attack.mitre.org/mitigations/M0800/) | Provide privileges corresponding to the restriction of a GUI session to control system operations (examples include HMI read-only vs. read-write modes). Ensure local users, such as operators and engineers, are giving prioritization over remote sessions and have the authority to regain control over a remote session if needed. Prevent remote access sessions (e.g., RDP, VNC) from taking over local sessions, especially those used for ICS control, especially HMIs. |
| M0937 | [Filter Network Traffic](https://attack.mitre.org/mitigations/M0937/) | Filter application-layer protocol messages for remote services to block any unauthorized activity. |
| M0804 | [Human User Authentication](https://attack.mitre.org/mitigations/M0804/) | All remote services should require strong authentication before providing user access. |
| M0807 | [Network Allowlists](https://attack.mitre.org/mitigations/M0807/) | Network allowlists can be implemented through either host-based files or system host files to specify what external connections (e.g., IP address, MAC address, port, protocol) can be made from a device. |
| M0930 | [Network Segmentation](https://attack.mitre.org/mitigations/M0930/) | Segment and control software movement between business and OT environments by way of one directional DMZs. Web access should be restricted from the OT environment. Engineering workstations, including transient cyber assets (TCAs) should have minimal connectivity to external networks, including Internet and email, further limit the extent to which these devices are dual-homed to multiple networks. |
| M0927 | [Password Policies](https://attack.mitre.org/mitigations/M0927/) | Enforce strong password requirements to prevent password brute force methods for lateral movement. |
| M0813 | [Software Process and Device Authentication](https://attack.mitre.org/mitigations/M0813/) | All communication sessions to remote services should be authenticated to prevent unauthorized access. |
| M0918 | [User Account Management](https://attack.mitre.org/mitigations/M0918/) | Limit the accounts that may use remote services. Limit the permissions for accounts that are at higher risk of compromise; for example, configure SSH so users can only run specific programs. |



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
    <td>Monitor executed commands and arguments to services specifically designed to accept remote connections, such as RDP, Telnet, SSH, and VNC. The adversary may then perform these actions using Valid Accounts.</td>
  </tr>
  <tr>
    <td >DS0028</td>
    <td>[Logon Session](https://attack.mitre.org/datasources/DS0028/)</td>
    <td>[Logon Session Creation](https://attack.mitre.org/datasources/DS0028/#Logon%20Session%20Creation)</td>
    <td>Monitor for user accounts logged into systems they would not normally access or abnormal access patterns, such as multiple systems over a relatively short period of time. Correlate use of login activity related to remote services with unusual behavior or other malicious or suspicious activity. Adversaries will likely need to learn about an environment and the relationships between systems through Discovery techniques prior to attempting Lateral Movement. For added context on adversary procedures and background see Remote Services and applicable sub-techniques.</td>
  </tr>
  <tr>
    <td >DS0011</td>
    <td>[Module](https://attack.mitre.org/datasources/DS0011/)</td>
    <td>[Module Load](https://attack.mitre.org/datasources/DS0011/#Module%20Load)</td>
    <td>Monitor DLL file events, specifically creation of these files as well as the loading of DLLs into processes specifically designed to accept remote connections, such as RDP, Telnet, SSH, and VNC.</td>
  </tr>
  <tr>
    <td >DS0033</td>
    <td>[Network Share](https://attack.mitre.org/datasources/DS0033/)</td>
    <td>[Network Share Access](https://attack.mitre.org/datasources/DS0033/#Network%20Share%20Access)</td>
    <td>Monitor interactions with network shares, such as reads or file transfers, using remote services such as Server Message Block (SMB). For added context on adversary procedures and background see Remote Services and applicable sub-techniques.</td>
  </tr>
  <tr>
    <td rowspan='2'>DS0029</td>
    <td rowspan='2'>[Network Traffic](https://attack.mitre.org/datasources/DS0029/)</td>
    <td>[Network Connection Creation](https://attack.mitre.org/datasources/DS0029/#Network%20Connection%20Creation)</td>
    <td>Monitor for newly constructed network connections into a service specifically designed to accept remote connections, such as RDP, Telnet, SSH, and VNC. Monitor network connections involving common remote management protocols, such as ports tcp:3283 and tcp:5900, as well as ports tcp:3389 and tcp:22 for remote logins. The adversary may use Valid Accounts to enable remote logins.</td>
  </tr>
  <tr>
    <td>[Network Traffic Flow](https://attack.mitre.org/datasources/DS0029/#Network%20Traffic%20Flow)</td>
    <td>Monitor network data for uncommon data flows (e.g., time of day, unusual source/destination address) that may be related to abuse of Valid Accounts to log into a service specifically designed to accept remote connections, such as RDP, Telnet, SSH, and VNC.</td>
  </tr>
  <tr>
  <td >DS0009</td>
    <td>[Process](https://attack.mitre.org/datasources/DS0009/)</td>
    <td>[Process Creation](https://attack.mitre.org/datasources/DS0009/#Process%20Creation)</td>
    <td>Monitor for newly executed processes related to services specifically designed to accept remote connections, such as RDP, Telnet, SSH, and VNC. The adversary may use Valid Accounts to login and may perform follow-on actions that spawn additional processes as the user.</td>
  </tr>
</table>

##

# References
1. [MITRE ATT&CK Technique: Program Download. Retrieved 01JUL2024.](https://attack.mitre.org/techniques/T0843/)
2. [Procedure Examples: 2015 Ukraine Electric Power Attack. Retrieved 01JUL2024.](https://attack.mitre.org/campaigns/C0028/)
3. [Procedure Examples: 2016 Ukraine Electric Power Attack. Retrieved 01JUL2024.](https://attack.mitre.org/campaigns/C0025/)
4. [Procedure Examples: INCONTROLLER. Retrieved 01JUL2024.](https://attack.mitre.org/software/S1045/)
5. [Procedure Examples: REvil. Retrieved 01JUL2024.](https://attack.mitre.org/software/S0496/)
6. [Procedure Examples: Stuxnet. Retrieved 01JUL2024.](https://www.langner.com/wp-content/uploads/2017/03/to-kill-a-centrifuge.pdf)
7. [Procedure Examples: Triton Safety Instrumented System Attack. Retrieved 01JUL2024.](https://attack.mitre.org/campaigns/C0030/)
8. [Targeted Assets: Human-Machine Interface (HMI). Retrieved 01JUL2024.](https://attack.mitre.org/assets/A0002/)
9. [Targeted Assets: Data Historian. Retrieved 01JUL2024.](https://attack.mitre.org/assets/A0006/)
10. [Targeted Assets: Control Server. Retrieved 01JUL2024.](https://attack.mitre.org/assets/A0007/)
11. [Targeted Assets: Application Server. Retrieved 01JUL2024.](https://attack.mitre.org/assets/A0008/)
12. [Targeted Assets: Data Gateway. Retrieved 01JUL2024.](https://attack.mitre.org/assets/A0009/)
13. [Targeted Assets: Virtual Private Network (VPN) Server. Retrieved 01JUL2024.](https://attack.mitre.org/assets/A0011/)
14. [Targeted Assets: Jump Host. Retrieved 01JUL2024.](https://attack.mitre.org/assets/A0012/)
15. [MITRE ATT&CK Mitigation: Access Management. Retrieved 01JUL2024.](https://attack.mitre.org/mitigations/M0801/)
16. [MITRE ATT&CK Mitigation: Authorization Enforcement. Retrieved 01JUL2024.](https://attack.mitre.org/mitigations/M0800/)
17. [MITRE ATT&CK Mitigation: Filter Network Traffic. Retrieved 01JUL2024.](https://attack.mitre.org/mitigations/M0937/)
18. [MITRE ATT&CK Mitigation: Human User Authentication. Retrieved 01JUL2024.](https://attack.mitre.org/mitigations/M0804/)
19. [MITRE ATT&CK Mitigation: Network Allowlists. Retrieved 01JUL2024.](https://attack.mitre.org/mitigations/M0807/)
20. [MITRE ATT&CK Mitigation: Network Segmentation. Retrieved 01JUL2024.](https://attack.mitre.org/mitigations/M0930/)
21. [MITRE ATT&CK Mitigation: Password Policies. Retrieved 01JUL2024.](https://attack.mitre.org/mitigations/M0927/)
22. [MITRE ATT&CK Mitigation: Software Process and Device Authentication. Retrieved 01JUL2024.](https://attack.mitre.org/mitigations/M0813/)
23. [MITRE ATT&CK Mitigation: User Account Management. Retrieved 01JUL2024.](https://attack.mitre.org/mitigations/M0918/)
24. [MITRE ATT&CK Detection: Command](https://attack.mitre.org/datasources/DS0017/)
25. [MITRE ATT&CK Detection: Command Execution](https://attack.mitre.org/datasources/DS0017/#Command%20Execution)
26. [MITRE ATT&CK Detection: Logon Session. Retrieved 01JUL2024.](https://attack.mitre.org/datasources/DS0028/)
27. [MITRE ATT&CK Detection: Logon Session Creation. Retrieved 01JUL2024.](https://attack.mitre.org/datasources/DS0028/#Logon%20Session%20Creation)
28. [MITRE ATT&CK Detection: Module. Retrieved 01JUL2024.](https://attack.mitre.org/datasources/DS0011/)
29. [MITRE ATT&CK Detection: Module Load. Retrieved 01JUL2024.](https://attack.mitre.org/datasources/DS0011/#Module%20Load)
30. [MITRE ATT&CK Detection: Network Share. Retrieved 01JUL2024.](https://attack.mitre.org/datasources/DS0033/)
31. [MITRE ATT&CK Detection: Network Share Access. Retrieved 01JUL2024.](https://attack.mitre.org/datasources/DS0033/#Network%20Share%20Access)
32. [MITRE ATT&CK Detection: Network Traffic. Retrieved 01JUL2024.](https://attack.mitre.org/datasources/DS0029/)
33. [MITRE ATT&CK Detection: Network Connection Creation. Retrieved 01JUL2024.](https://attack.mitre.org/datasources/DS0029/#Network%20Connection%20Creation)
34. [MITRE ATT&CK Detection: Network Traffic Flow. Retrieved 01JUL2024.](https://attack.mitre.org/datasources/DS0029/#Network%20Traffic%20Flow)
35. [MITRE ATT&CK Detection: Process](https://attack.mitre.org/datasources/DS0009/)
36. [MITRE ATT&CK Detection: Process Creation](https://attack.mitre.org/datasources/DS0009/#Process%20Creation)
