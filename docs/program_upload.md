---
sidebar_label: 'Program Upload'
sidebar_position: 25
---

# Program Upload

# Summary
Adversaries may attempt to upload a program from a ship's PLC to gather information about a maritime process. Uploading a program may allow them to acquire and study the underlying logic. Methods of program upload include vendor software, which enables the user to upload and read a program running on a PLC. This software can be used to upload the target program to a workstation, jump box, or an interfacing device on the vessel.

&nbsp;

# Procedure Examples
| ID      | Name       | Description |
|:------------|:-----------|:--------------|
| S1045 | [INCONTROLLER](https://attack.mitre.org/software/S1045/) | INCONTROLLER can use the CODESYS protocol to upload programs from Schneider PLCs.<br/><br/>INCONTROLLER can obtain existing program logic from Omron PLCs by using either the program upload or backup functions available through the HTTP server. |
| S1009 | [Triton](https://attack.mitre.org/software/S1009/) | Triton calls the SafeAppendProgramMod to transfer its payloads to the Tricon. Part of this call includes preforming a program upload.  |

&nbsp;

# Targeted Assets
| ID      | Asset       |
|:------------|:-----------|
| A0003 | [Programmable Logic Controller(PLC)](https://attack.mitre.org/assets/A0003/) |
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
    <td>Monitor for device alarms produced when program uploads occur, although not all devices will produce such alarms.</td>
  </tr>
  <tr>
    <td rowspan='2'>DS0029</td>
    <td rowspan='2'>[Network Traffic](https://attack.mitre.org/datasources/DS0029/)</td>
    <td>[Network Traffic Content](https://attack.mitre.org/datasources/DS0029/#Network%20Traffic%20Content)</td>
    <td>Program uploads may be observable in ICS management protocols or file transfer protocols. Note when protocol functions related to program uploads occur. In cases where the ICS protocols is not well understood, one option is to examine network traffic for the program files themselves using signature-based tools.</td>
  </tr>
  <tr>
    <td>[Network Traffic Flow](https://attack.mitre.org/datasources/DS0029/#Network%20Traffic%20Flow)</td>
    <td>Monitor device communication patterns to identify irregular bulk transfers of data between the embedded ICS asset and other nodes within the network. Note these indicators are dependent on the profile of normal operations and the capabilities of the industrial automation protocols involved (e.g., partial program uploads).</td>
  </tr>
</table>

##

# References
1. [MITRE ATT&CK Technique: Program Upload. Retrieved 01JUL2024.](https://attack.mitre.org/techniques/T0845/)
2. [Procedure Examples: INCONTROLLER. Retrieved 01JUL2024.](https://attack.mitre.org/software/S1045/)
3. [Procedure Examples: Triton. Retrieved 01JUL2024.](https://attack.mitre.org/software/S1009/)
4. [Targeted Assets: Programmable Logic Controller(PLC). Retrieved 01JUL2024.](https://attack.mitre.org/assets/A0003/)
5. [Targeted Assets: Safety Controller. Retrieved 01JUL2024.](https://attack.mitre.org/assets/A0010/)
6. [MITRE ATT&CK Mitigation: Access Management. Retrieved 01JUL2024.](https://attack.mitre.org/mitigations/M0801/)
7. [MITRE ATT&CK Mitigation: Authorization Enforcement. Retrieved 01JUL2024.](https://attack.mitre.org/mitigations/M0800/)
8. [MITRE ATT&CK Mitigation: Communication Authenticity. Retrieved 01JUL2024.](https://attack.mitre.org/mitigations/M0802/)
9. [MITRE ATT&CK Mitigation: Filter Network Traffic. Retrieved 01JUL2024.](https://attack.mitre.org/mitigations/M0937/)
10. [MITRE ATT&CK Mitigation: Human User Authentication. Retrieved 01JUL2024.](https://attack.mitre.org/mitigations/M0804/)
11. [MITRE ATT&CK Mitigation: Network Allowlists. Retrieved 01JUL2024.](https://attack.mitre.org/mitigations/M0807/)
12. [MITRE ATT&CK Mitigation: Network Segmentation. Retrieved 01JUL2024.](https://attack.mitre.org/mitigations/M0930/)
13. [MITRE ATT&CK Mitigation: Software Process and Device Authentication. Retrieved 01JUL2024.](https://attack.mitre.org/mitigations/M0813/)
14. [MITRE ATT&CK Detection: Application Log. Retrieved 01JUL2024.](https://attack.mitre.org/datasources/DS0015/)
15. [MITRE ATT&CK Detection: Application Log Content. Retrieved 01JUL2024.](https://attack.mitre.org/datasources/DS0015/#Application%20Log%20Content)
16. [MITRE ATT&CK Detection: Network Traffic. Retrieved 01JUL2024.](https://attack.mitre.org/datasources/DS0029/)
17. [MITRE ATT&CK Detection: Network Traffic Content. Retrieved 01JUL2024.](https://attack.mitre.org/datasources/DS0029/#Network%20Traffic%20Content)
18. [MITRE ATT&CK Detection: Network Traffic Flow. Retrieved 01JUL2024.](https://attack.mitre.org/datasources/DS0029/#Network%20Traffic%20Flow)