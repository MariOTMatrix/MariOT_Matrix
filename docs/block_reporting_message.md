---
sidebar_label: 'Block Reporting Message'
sidebar_position: 30
---

# Block Reporting Message

# Summary
Adversaries may block or prevent a reporting message from reaching its intended target in maritime environments. In maritime control systems, reporting messages contain telemetry data (e.g., I/O values) pertaining to the current state of equipment and the vessel's operations. By blocking these reporting messages, an adversary can potentially hide their actions from an operator.

Blocking reporting messages in control systems that manage maritime processes may contribute to system impact, causing inhibition of a response function. A control system may not be able to respond properly or timely to an event, such as a dangerous fault, if its corresponding reporting message is blocked.


# Procedure Examples
| ID      | Name       | Description |
|:------------|:-----------|:--------------|
| C0028 | [2015 Ukraine Electric Power Attack](https://attack.mitre.org/campaigns/C0028/) | During the 2015 Ukraine Electric Power Attack, Sandworm Team blocked reporting messages by using malicious firmware to render serial-to-ethernet converters inoperable. |
| S0604 | [Industroyer](https://attack.mitre.org/software/S0604/) | Industroyer uses the first COM port from the configuration file for the communication and the other two COM ports are opened to prevent other processes accessing them. This may block processes or operators from getting reporting messages from a device. |

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
    <td>Monitor asset alarms which may help identify a loss of communications. Consider correlating alarms with other data sources that indicate traffic has been blocked, such as network traffic. In cases where alternative methods of communicating with outstations exist alarms may still be visible even if reporting messages are blocked.</td>
  </tr>
  <tr>
    <td>DS0009</td>
    <td>[Process](https://attack.mitre.org/datasources/DS0009/)</td>
    <td>[Process Termination](https://attack.mitre.org/datasources/DS0009/#Process%20Termination)</td>
    <td>Monitor for the termination of processes or services associated with ICS automation protocols and application software which could help detect blocked communications.</td>
  </tr>
</table>


##

# References
1. [MITRE ATT&CK Technique: Block Reporting Message. Retrieved 01JUL2024.](https://attack.mitre.org/techniques/T0804/)
2. [Procedure Examples: 2015 Ukraine Electric Power Attack. Retrieved 01JUL2024.](https://attack.mitre.org/campaigns/C0028/)
3. [Procedure Examples: Industroyer. Retrieved 01JUL2024.](https://attack.mitre.org/software/S0604/)
4. [Targeted Assets: Human-Machine Interface (HMI). Retrieved 01JUL2024.](https://attack.mitre.org/assets/A0002/)
5. [Targeted Assets: Programmable Logic Controller(PLC). Retrieved 01JUL2024.](https://attack.mitre.org/assets/A0003/)
6. [Targeted Assets: Remote Terminal Unit (RTU). Retrieved 01JUL2024.](https://attack.mitre.org/assets/A0004/)
7. [Targeted Assets: Intelligent Electronic Device (IED). Retrieved 01JUL2024.](https://attack.mitre.org/assets/A0005/)
8. [Targeted Assets: Control Server. Retrieved 01JUL2024.](https://attack.mitre.org/assets/A0007/)
9. [Targeted Assets: Data Gateway. Retrieved 01JUL2024.](https://attack.mitre.org/assets/A0009/)
10. [Targeted Assets: Safety Controller. Retrieved 01JUL2024.](https://attack.mitre.org/assets/A0010/)
11. [Targeted Assets: Field I/O. Retrieved 01JUL2024.](https://attack.mitre.org/assets/A0013/)
12. [MITRE ATT&CK Mitigation: Network Allowlists. Retrieved 01JUL2024.](https://attack.mitre.org/mitigations/M0807/)
13. [MITRE ATT&CK Mitigation: Out-of-Band Communications Channel. Retrieved 01JUL2024.](https://attack.mitre.org/mitigations/M0810/)
14. [MITRE ATT&CK Mitigation: Static Network Configuration. Retrieved 01JUL2024.](https://attack.mitre.org/mitigations/M0814/)
15. [MITRE ATT&CK Detection: Application Log. Retrieved 01JUL2024.](https://attack.mitre.org/datasources/DS0015/)
16. [MITRE ATT&CK Detection: Application Log Content. Retrieved 01JUL2024.](https://attack.mitre.org/datasources/DS0015/#Application%20Log%20Content)
17. [MITRE ATT&CK Detection: Network Traffic. Retrieved 01JUL2024.](https://attack.mitre.org/datasources/DS0029/)
18. [MITRE ATT&CK Detection: Network Traffic Flow. Retrieved 01JUL2024.](https://attack.mitre.org/datasources/DS0029/#Network%20Traffic%20Flow)
19. [MITRE ATT&CK Detection: Operational Databases. Retrieved 01JUL2024.](https://attack.mitre.org/datasources/DS0040/)
20. [MITRE ATT&CK Detection: Process History/Live Data. Retrieved 01JUL2024.](https://attack.mitre.org/datasources/DS0040/#Process%20History/Live%20Data)
21. [MITRE ATT&CK Detection: Process/Event Alarm. Retrieved 01JUL2024.](https://attack.mitre.org/datasources/DS0040/#Process/Event%20Alarm)
22. [MITRE ATT&CK Detection: Process. Retrieved 01JUL2024.](https://attack.mitre.org/datasources/DS0009/)
23. [MITRE ATT&CK Detection: Process Termination. Retrieved 01JUL2024.](https://attack.mitre.org/datasources/DS0009/#Process%20Termination)
