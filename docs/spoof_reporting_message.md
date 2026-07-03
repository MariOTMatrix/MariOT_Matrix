---
sidebar_label: 'Spoof Reporting Message'
sidebar_position: 11
---

# Spoof Reporting Message

# Summary
Adversaries may spoof reporting messages in maritime control system environments for evasion and to impair process control. In maritime control systems, reporting messages contain telemetry data (e.g., I/O values) pertaining to the current state of ship equipment and maritime processes. Reporting messages are important for monitoring the normal operation of a system or identifying important events such as deviations from expected values.

If an adversary has the ability to spoof reporting messages, they can impact the maritime control system in many ways. The adversary can spoof reporting messages that state the process is operating normally, as a form of evasion. The adversary could also spoof reporting messages to make the defenders and operators think that other errors are occurring in order to distract them from the actual source of a problem.


# Procedure Examples
| ID      | Name       | Description |
|:------------|:-----------|:--------------|
| C0020 | [Maroochy Water Breach](https://attack.mitre.org/campaigns/C0020/) | In the Maroochy Water Breach, the adversary used a dedicated analog two-way radio system to send false data and instructions to pumping stations and the central computer. |


&nbsp;

# Targeted Assets
| ID      | Asset       |
|:------------|:-----------|
| A0002 | [Human-Machine Interface (HMI)](https://attack.mitre.org/assets/A0002/) |
| A0003 | [Programmable Logic Controller(PLC)](https://attack.mitre.org/assets/A0003/) |
| A0004 | [Remote Terminal Unit (RTU)](https://attack.mitre.org/assets/A0004/) |
| A0005 | [Intelligent Electronic Device (IED)](https://attack.mitre.org/assets/A0005/) |
| A0007 | [Control Server](https://attack.mitre.org/assets/A0007/) |
| A0009 | [Data Gateway](https://attack.mitre.org/assets/A0009/) |
| A0010 | [Safety Controller](https://attack.mitre.org/assets/A0010/) |


&nbsp;

# Mitigations
| ID      | Mitigation       | Description |
|:------------|:-----------|:--------------|
| M0802 | [Communication Authenticity](https://attack.mitre.org/mitigations/M0802/) | Protocols used for control functions should provide authenticity through MAC functions or digital signatures. If not, utilize bump-in-the-wire devices or VPNs to enforce communication authenticity between devices that are not capable of supporting this (e.g., legacy controllers, RTUs). |
| M0937 | [Filter Network Traffic](https://attack.mitre.org/mitigations/M0937/) | Perform inline allowlisting of automation protocol commands to prevent devices from sending unauthorized command or reporting messages. Allow/denylist techniques need to be designed with sufficient accuracy to prevent the unintended blocking of valid reporting messages. |
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
    <td rowspan='2'>DS0029</td>
    <td rowspan='2'>[Network Traffic](https://attack.mitre.org/datasources/DS0029/)</td>
    <td>[Network Traffic Content](https://attack.mitre.org/datasources/DS0029/#Network%20Traffic%20Content)</td>
    <td>Spoofed reporting messages may be detected by reviewing the content of automation protocols, either through detecting based on expected values or comparing to other out of band process data sources. Spoofed messages may not precisely match legitimate messages which may lead to malformed traffic, although traffic may be malformed for many benign reasons. Monitor reporting messages for changes in how they are constructed.<br/><br/>
    Various techniques enable spoofing a reporting message. Consider monitoring for Rogue Master and Adversary-in-the-Middle activity.</td>
  </tr>
  <tr>
    <td>[Network Traffic Flow](https://attack.mitre.org/datasources/DS0029/#Network%20Traffic%20Flow)</td>
    <td>Various techniques enable spoofing a reporting message. Consider monitoring for Rogue Master and Adversary-in-the-Middle activity which may precede this technique.</td>
  </tr>
  <tr>
    <td>DS0040</td>
    <td>[Operational Databases](https://attack.mitre.org/datasources/DS0040/)</td>
    <td>[Device Alarm](https://attack.mitre.org/datasources/DS0040/#Device%20Alarm)</td>
    <td>Monitor asset logs for alarms or other information the adversary is unable to directly suppress. Relevant alarms include those from a loss of communications due to Adversary-in-the-Middle activity.</td>
  </tr>
  <tr>
    <td>DS0024</td>
    <td>[Windows Registry](https://attack.mitre.org/datasources/DS0024/)</td>
    <td>[Windows Registry Key Modification](https://attack.mitre.org/datasources/DS0024/#Windows%20Registry%20Key%20Modification)</td>
    <td>Various techniques enable spoofing a reporting message. Monitor for LLMNR/NBT-NS poisoning via new services/daemons which may be used to enable this technique. For added context on adversary procedures and background see LLMNR/NBT-NS Poisoning and SMB Relay.</td>
  </tr>
</table>

##

# References
1. [MITRE ATT&CK Technique: Spoof Reporting Message. Retrieved 01JUL2024.](https://attack.mitre.org/techniques/T0856/)
2. [Procedure Examples: Maroochy Water Breach. Retrieved 01JUL2024.](https://attack.mitre.org/campaigns/C0020/)
3. [Targeted Assets: Human-Machine Interface (HMI). Retrieved 01JUL2024.](https://attack.mitre.org/assets/A0002/)
4. [Targeted Assets: Programmable Logic Controller(PLC). Retrieved 01JUL2024.](https://attack.mitre.org/assets/A0003/)
5. [Targeted Assets: Remote Terminal Unit (RTU). Retrieved 01JUL2024.](https://attack.mitre.org/assets/A0004/)
6. [Targeted Assets: Intelligent Electronic Device (IED). Retrieved 01JUL2024.](https://attack.mitre.org/assets/A0005/)
7. [Targeted Assets: Control Server. Retrieved 01JUL2024.](https://attack.mitre.org/assets/A0007/)
8. [Targeted Assets: Data Gateway. Retrieved 01JUL2024.](https://attack.mitre.org/assets/A0009/)
9. [Targeted Assets: Safety Controller. Retrieved 01JUL2024.](https://attack.mitre.org/assets/A0010/)
10. [MITRE ATT&CK Mitigation: Communication Authenticity. Retrieved 01JUL2024.](https://attack.mitre.org/mitigations/M0802/)
11. [MITRE ATT&CK Mitigation: Filter Network Traffic. Retrieved 01JUL2024.](https://attack.mitre.org/mitigations/M0937/)
12. [MITRE ATT&CK Mitigation: Network Allowlists. Retrieved 01JUL2024.](https://attack.mitre.org/mitigations/M0807/)
13. [MITRE ATT&CK Mitigation: Network Segmentation. Retrieved 01JUL2024.](https://attack.mitre.org/mitigations/M0930/)
14. [MITRE ATT&CK Mitigation: Software Process and Device Authentication. Retrieved 01JUL2024.](https://attack.mitre.org/mitigations/M0813/)
15. [MITRE ATT&CK Detection: Network Traffic. Retrieved 01JUL2024.](https://attack.mitre.org/datasources/DS0029/)
16. [MITRE ATT&CK Detection: Network Traffic Content. Retrieved 01JUL2024.](https://attack.mitre.org/datasources/DS0029/#Network%20Traffic%20Content)
17. [MITRE ATT&CK Detection: Network Traffic Flow. Retrieved 01JUL2024.](https://attack.mitre.org/datasources/DS0029/#Network%20Traffic%20Flow)
18. [MITRE ATT&CK Detection: Operational Databases. Retrieved 01JUL2024.](https://attack.mitre.org/datasources/DS0040/)
19. [MITRE ATT&CK Detection: Device Alarm. Retrieved 01JUL2024.](https://attack.mitre.org/datasources/DS0040/#Device%20Alarm)
20. [MITRE ATT&CK Detection: Windows Registry. Retrieved 01JUL2024.](https://attack.mitre.org/datasources/DS0024/)
21. [MITRE ATT&CK Detection: Windows Registry Key Modification. Retrieved 01JUL2024.](https://attack.mitre.org/datasources/DS0024/#Windows%20Registry%20Key%20Modification)

