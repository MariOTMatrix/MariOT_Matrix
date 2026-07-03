---
sidebar_label: 'Point & Tag Identification'
sidebar_position: 24
---

# Point & Tag Identification

# Summary
Adversaries may collect point and tag values to gain a more comprehensive understanding of the maritime process environment. Points may be values such as inputs, memory locations, outputs, or other process-specific variables. Tags are the identifiers given to points for operator convenience.

Collecting such tags provides valuable context to environmental points and enables an adversary to map inputs, outputs, and other values to their control processes. Understanding the points being collected may inform an adversary on which maritime processes and values to keep track of over the course of an operation.

&nbsp;

# Procedure Examples
| ID      | Name       | Description |
|:------------|:-----------|:--------------|
| S0093 | [Backdoor.Oldrea](https://attack.mitre.org/software/S0093/) | The Backdoor.Oldrea payload has the capability of enumerating OPC tags, in addition to more generic OPC server information. The server data and tag names can provide information about the names and function of control devices. |
| S1045 | [INCONTROLLER](https://attack.mitre.org/software/S1045/) | INCONTROLLER can remotely read the OCP UA structure from devices. |

&nbsp;

# Targeted Assets
| ID      | Asset       |
|:------------|:-----------|
| A0002 | [Human-Machine Interface (HMI)](https://attack.mitre.org/assets/A0002/) |
| A0003 | [Programmable Logic Controller(PLC)](https://attack.mitre.org/assets/A0003/) |
| A0004 | [Remote Terminal Unit (RTU)](https://attack.mitre.org/assets/A0004/) |
| A0005 | [Intelligent Electronic Device (IED)](https://attack.mitre.org/assets/A0005/) |
| A0006 | [Data Historian](https://attack.mitre.org/assets/A0006/) |
| A0007 | [Control Server](https://attack.mitre.org/assets/A0007/) |
| A0009 | [Data Gateway](https://attack.mitre.org/assets/A0009/) |
| A0010 | [Safety Controller](https://attack.mitre.org/assets/A0010/) |

&nbsp;

# Mitigations
| ID      | Mitigation       | Description |
|:------------|:-----------|:--------------|
| M0801 | [Access Management](https://attack.mitre.org/mitigations/M0801/) | Authenticate all access to field controllers before authorizing access to, or modification of, a device's state, logic, or programs. Centralized authentication techniques can help manage the large number of field controller accounts needed across the ICS. |
| M0800 | [Authorization Enforcement](https://attack.mitre.org/mitigations/M0800/) | Systems and devices should restrict access to any data with potential confidentiality concerns, including point and tag information. |
| M0802 | [Communication Authenticity](https://attack.mitre.org/mitigations/M0802/) | Protocols used for control functions should provide authenticity through MAC functions or digital signatures. If not, utilize bump-in-the-wire devices or VPNs to enforce communication authenticity between devices that are not capable of supporting this (e.g., legacy controllers, RTUs). |
| M0937 | [Filter Network Traffic](https://attack.mitre.org/mitigations/M0937/) | Perform inline allowlisting of automation protocol commands to prevent devices from sending unauthorized command or reporting messages. Allow/denylist techniques need to be designed with sufficient accuracy to prevent the unintended blocking of valid messages. |
| M0804 | [Human User Authentication](https://attack.mitre.org/mitigations/M0804/) | All field controllers should require users to authenticate for all remote or local management sessions. The authentication mechanisms should also support Account Use Policies, Password Policies, and User Account Management. |
| M0807 | [Network Allowlists](https://attack.mitre.org/mitigations/M0807/) | Use host-based allowlists to prevent devices from accepting connections from unauthorized systems. For example, allowlists can be used to ensure devices can only connect with master stations or known management/engineering workstations. |
| M0930 | [Network Segmentation](https://attack.mitre.org/mitigations/M0930/) | Segment operational assets and their management devices based on their functional role within the process. Enabling more strict isolation to more critical control and operational information within the control environment. |
| M0813 | [Software Process and Device Authentication](https://attack.mitre.org/mitigations/M0813/) | Devices should authenticate all messages between master and outstation assets. |

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
    <td>DS0029</td>
    <td>[Network Traffic](https://attack.mitre.org/datasources/DS0029/)</td>
    <td>[Network Traffic Content](https://attack.mitre.org/datasources/DS0029/#Network%20Traffic%20Content)</td>
    <td>Monitor ICS automation network protocols for functions related to reading an operational process state (e.g., "Read" function codes in protocols like DNP3 or Modbus). In some cases, there may be multiple ways to monitor an operational process’ state, one of which is typically used in the operational environment. Monitor for the operating mode being checked in unexpected ways.</td>
  </tr>
</table>

##

# References
1. [MITRE ATT&CK Technique: Point & Tag Identification. Retrieved 01JUL2024.](https://attack.mitre.org/techniques/T0861/)
2. [Procedure Examples: Backdoor.Oldrea. Retrieved 01JUL2024.](https://attack.mitre.org/software/S0093/)
3. [Procedure Examples: INCONTROLLER. Retrieved 01JUL2024.](https://attack.mitre.org/software/S1045/)
4. [Targeted Assets: Human-Machine Interface (HMI). Retrieved 01JUL2024.](https://attack.mitre.org/assets/A0002/)
5. [Targeted Assets: Programmable Logic Controller(PLC). Retrieved 01JUL2024.](https://attack.mitre.org/assets/A0003/)
6. [Targeted Assets: Remote Terminal Unit (RTU). Retrieved 01JUL2024.](https://attack.mitre.org/assets/A0004/)
7. [Targeted Assets: Intelligent Electronic Device (IED). Retrieved 01JUL2024.](https://attack.mitre.org/assets/A0005/)
8. [Targeted Assets: Data Historian. Retrieved 01JUL2024.](https://attack.mitre.org/assets/A0006/)
9. [Targeted Assets: Control Server. Retrieved 01JUL2024.](https://attack.mitre.org/assets/A0007/)
10. [Targeted Assets: Data Gateway. Retrieved 01JUL2024.](https://attack.mitre.org/assets/A0009/)
11. [Targeted Assets: Safety Controller. Retrieved 01JUL2024.](https://attack.mitre.org/assets/A0010/)
12. [MITRE ATT&CK Mitigation: Access Management. Retrieved 01JUL2024.](https://attack.mitre.org/mitigations/M0801/)
13. [MITRE ATT&CK Mitigation: Authorization Enforcement. Retrieved 01JUL2024.](https://attack.mitre.org/mitigations/M0800/)
14. [MITRE ATT&CK Mitigation: Communication Authenticity. Retrieved 01JUL2024.](https://attack.mitre.org/mitigations/M0802/)
15. [MITRE ATT&CK Mitigation: Filter Network Traffic. Retrieved 01JUL2024.](https://attack.mitre.org/mitigations/M0937/)
16. [MITRE ATT&CK Mitigation: Human User Authentication. Retrieved 01JUL2024.](https://attack.mitre.org/mitigations/M0804/)
17. [MITRE ATT&CK Mitigation: Network Allowlists. Retrieved 01JUL2024.](https://attack.mitre.org/mitigations/M0807/)
18. [MITRE ATT&CK Mitigation: Network Segmentation. Retrieved 01JUL2024.](https://attack.mitre.org/mitigations/M0930/)
19. [MITRE ATT&CK Mitigation: Software Process and Device Authentication. Retrieved 01JUL2024.](https://attack.mitre.org/mitigations/M0813/)
20. [MITRE ATT&CK Detection: Application Log. Retrieved 01JUL2024.](https://attack.mitre.org/datasources/DS0015/)
21. [MITRE ATT&CK Detection: Application Log Content. Retrieved 01JUL2024.](https://attack.mitre.org/datasources/DS0015/#Application%20Log%20Content)
22. [MITRE ATT&CK Detection: Network Traffic. Retrieved 01JUL2024.](https://attack.mitre.org/datasources/DS0029/)
23. [MITRE ATT&CK Detection: Network Traffic Content. Retrieved 01JUL2024.](https://attack.mitre.org/datasources/DS0029/#Network%20Traffic%20Content)
24. [Ralph Langner. A Technical Analysis of What Stuxnet’s Creators Tried to Achieve. Retrieved 01JUL2024.](https://www.langner.com/wp-content/uploads/2017/03/to-kill-a-centrifuge.pdf)
25. [Nicolas Falliere, Liam O Murchu, and Eric Chien. W32.Stuxnet Dossier. Retrieved 01JUL2024.](https://www.wired.com/images_blogs/threatlevel/2011/02/Symantec-Stuxnet-Update-Feb-2011.pdf)

