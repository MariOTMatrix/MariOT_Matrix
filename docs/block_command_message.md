---
sidebar_label: 'Block Command Message'
sidebar_position: 29
---

# Block Command Message

# Summary
Adversaries may block a command message from reaching its intended target to prevent command execution in maritime environments. In maritime OT networks, command messages are sent to provide instructions to control system devices. A blocked command message can inhibit response functions from correcting a disruption or addressing an unsafe condition.


# Procedure Examples
| ID      | Name       | Description |
|:------------|:-----------|:--------------|
| C0028 | [2015 Ukraine Electric Power Attack](https://attack.mitre.org/campaigns/C0028/) | During the 2015 Ukraine Electric Power Attack, Sandworm Team blocked command messages by using malicious firmware to render serial-to-ethernet converters inoperable. |
| S0604 | [Industroyer](https://attack.mitre.org/software/S0604/) | In Industroyer the first COM port from the configuration file is used for the actual communication and the two other COM ports are just opened to prevent other processes accessing them. Thus, the IEC 101 payload component is able to take over and maintain control of the RTU device. |

&nbsp;

# Targeted Assets
| ID      | Asset       |
|:------------|:-----------|
| A0002 | [Human-Machine Interface (HMI)](https://attack.mitre.org/assets/A0002/) |
| A0003 | [Programmable Logic Controller(PLC)](https://attack.mitre.org/assets/A0003/) |
| A0004 | [Remote Terminal Unit (RTU)](https://attack.mitre.org/assets/A0004/) |
| A0005 | [Intelligent Electronic Device (IED)](https://attack.mitre.org/assets/A0005/) |
| A0007 | [Control Server](https://attack.mitre.org/assets/A0007/) |
| A0010 | [Safety Controller](https://attack.mitre.org/assets/A0010/) |
| A0013 | [Field I/O](https://attack.mitre.org/assets/A0013/) |

&nbsp;

# Mitigations
| ID      | Mitigation       | Description |
|:------------|:-----------|:--------------|
| M0807 | [Network Allowlists](https://attack.mitre.org/mitigations/M0807/) | Utilize network allowlists to restrict unnecessary connections to network devices (e.g., comm servers, serial to ethernet converters) and services, especially in cases when devices have limits on the number of simultaneous sessions they support. |
| M0810 | [Out-of-Band Communications Channel](https://attack.mitre.org/mitigations/M0810/) | Provide an alternative method for sending critical commands message to outstations, this could include using radio/cell communication to send messages to a field technician that physically performs the control function. |
| M0814 | [Static Network Configuration](https://attack.mitre.org/mitigations/M0814/) | Unauthorized connections can be prevented by statically defining the hosts and ports used for automation protocol connections. |


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
    <td>Monitor application logs for changes to settings and other events associated with network protocols that may be used to block communications.</td>
  </tr>
  <tr>
    <td >DS0029</td>
    <td>[Network Traffic](https://attack.mitre.org/datasources/DS0029/)</td>
    <td>[Network Traffic Flow](https://attack.mitre.org/datasources/DS0029/#Network%20Traffic%20Flow)</td>
    <td>Monitor for a loss of network communications, which may indicate this technique is being used.</td>
  </tr>
  <tr>
    <td rowspan='2'>DS0040</td>
    <td rowspan='2'>[Operational Databases](https://attack.mitre.org/datasources/DS0040/)</td>
    <td>[Process History/Live Data](https://attack.mitre.org/datasources/DS0040/#Process%20History/Live%20Data)</td>
    <td>Monitor for lack of operational process data which may help identify a loss of communications. This will not directly detect the technique’s execution, but instead may provide additional evidence that the technique has been used and may complement other detections.</td>
  </tr>
  <tr>
    <td>[Process/Event Alarm](https://attack.mitre.org/datasources/DS0040/#Process/Event%20Alarm)</td>
    <td>Monitor asset alarms which may help identify a loss of communications. Consider correlating alarms with other data sources that indicate traffic has been blocked, such as network traffic. In cases where alternative methods of communicating with outstations exist alarms may still be visible even if command messages are blocked.</td>
  </tr>
  <tr>
    <td>(MITRE)DS0009</td>
    <td>[Process](https://attack.mitre.org/datasources/DS0009/)</td>
    <td>[Process Termination](https://attack.mitre.org/datasources/DS0009/#Process%20Termination)</td>
    <td>Monitor for the termination of processes or services associated with ICS automation protocols and application software which could help detect blocked communications.</td>
  </tr>


</table>


##

# References
1. [MITRE ATT&CK Technique: Block Command Message. Retrieved 01JUL2024.](https://attack.mitre.org/techniques/T0803/)
2. [Procedure Examples: 2015 Ukraine Electric Power Attack. Retrieved 01JUL2024.](https://attack.mitre.org/campaigns/C0028/)
3. [Procedure Examples: Industroyer. Retrieved 01JUL2024.](https://attack.mitre.org/software/S0604/)
4. [Targeted Assets: Human-Machine Interface (HMI). Retrieved 01JUL2024.](https://attack.mitre.org/assets/A0002/)
5. [Targeted Assets: Programmable Logic Controller(PLC). Retrieved 01JUL2024.](https://attack.mitre.org/assets/A0003/)
6. [Targeted Assets: Remote Terminal Unit (RTU). Retrieved 01JUL2024.](https://attack.mitre.org/assets/A0004/)
7. [Targeted Assets: Intelligent Electronic Device (IED). Retrieved 01JUL2024.](https://attack.mitre.org/assets/A0005/)
8. [Targeted Assets: Control Server. Retrieved 01JUL2024.](https://attack.mitre.org/assets/A0007/)
9. [Targeted Assets: Safety Controller. Retrieved 01JUL2024.](https://attack.mitre.org/assets/A0010/)
10. [Targeted Assets: Field I/O. Retrieved 01JUL2024.](https://attack.mitre.org/assets/A0013/)
11. [MITRE ATT&CK Mitigation: Network Allowlists. Retrieved 01JUL2024.](https://attack.mitre.org/mitigations/M0807/)
12. [MITRE ATT&CK Mitigation: Out-of-Band Communications Channel. Retrieved 01JUL2024.](https://attack.mitre.org/mitigations/M0810/)
13. [MITRE ATT&CK Mitigation: Static Network Configuration. Retrieved 01JUL2024.](https://attack.mitre.org/mitigations/M0814/)
14. [MITRE ATT&CK Detection: Application Log. Retrieved 01JUL2024.](https://attack.mitre.org/datasources/DS0015/)
15. [MITRE ATT&CK Detection: Application Log Content. Retrieved 01JUL2024.](https://attack.mitre.org/datasources/DS0015/#Application%20Log%20Content)
16. [MITRE ATT&CK Detection: Network Traffic. Retrieved 01JUL2024.](https://attack.mitre.org/datasources/DS0029/)
17. [MITRE ATT&CK Detection: Network Traffic Flow. Retrieved 01JUL2024.](https://attack.mitre.org/datasources/DS0029/#Network%20Traffic%20Flow)
18. [MITRE ATT&CK Detection: Operational Databases. Retrieved 01JUL2024.](https://attack.mitre.org/datasources/DS0040/)
19. [MITRE ATT&CK Detection: Process History/Live Data. Retrieved 01JUL2024.](https://attack.mitre.org/datasources/DS0040/#Process%20History/Live%20Data)
20. [MITRE ATT&CK Detection: Process/Event Alarm. Retrieved 01JUL2024.](https://attack.mitre.org/datasources/DS0040/#Process/Event%20Alarm)
21. [MITRE ATT&CK Detection: Process. Retrieved 01JUL2024.](https://attack.mitre.org/datasources/DS0009/)
22. [MITRE ATT&CK Detection: Process Termination. Retrieved 01JUL2024.](https://attack.mitre.org/datasources/DS0009/#Process%20Termination)