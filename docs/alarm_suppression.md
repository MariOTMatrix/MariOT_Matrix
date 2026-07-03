---
sidebar_label: 'Alarm Suppression'
sidebar_position: 28
---

# Alarm Suppression

# Summary
Adversaries may target protection function alarms to prevent them from notifying operators of critical conditions in maritime environments. Alarm messages are often part of an overall reporting system, making them particularly interesting to adversaries. However, disrupting the alarm system does not necessarily imply disrupting the reporting system as a whole.

A Secura presentation on targeting OT notes a dual-fold goal for adversaries attempting alarm suppression: preventing outgoing alarms from being raised and preventing incoming alarms from being responded to. The method of suppression may greatly depend on the type of alarm in question:

* An alarm raised by a protocol message
* An alarm signaled with I/O
* An alarm bit set in a flag (and read)

In maritime ICS environments, adversaries may need to suppress or contend with multiple alarms and/or alarm propagation to achieve specific goals, such as evading detection or preventing intended responses. Methods of suppression may involve tampering or altering device displays and logs, modifying in-memory code to fixed values, or even tampering with assembly-level instruction code.


# Procedure Examples
| ID      | Name       | Description |
|:------------|:-----------|:--------------|
| C0020 | [Maroochy Water Breach](https://attack.mitre.org/campaigns/C0020) | In the Maroochy Water Breach, the adversary suppressed alarm reporting to the central computer. |


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
| M0807 | [Network Allowlists](https://attack.mitre.org/mitigations/M0807/) | Utilize network allowlists to restrict unnecessary connections to network devices (e.g., comm servers, serial to ethernet converters) and services, especially in cases when devices have limits on the number of simultaneous sessions they support. |
| M0930 | [Network Segmentation](https://attack.mitre.org/mitigations/M0930/) | Segment operational assets and their management devices based on their functional role within the process. Enabling more strict isolation to more critical control and operational information within the control environment. |
| M0810 | [Out-of-Band Communications Channel](https://attack.mitre.org/mitigations/M0810/) | Provide an alternative method for alarms to be reported in the event of a communication failure. |
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
    <td >DS0029</td>
    <td>[Network Traffic](https://attack.mitre.org/datasources/DS0029/)</td>
    <td>[Network Traffic Flow](https://attack.mitre.org/datasources/DS0029/#Network%20Traffic%20Flow)</td>
    <td>Monitor for loss of network traffic which could indicate alarms are being suppressed. A loss of expected communications associated with network protocols used to communicate alarm events or process data could indicate this technique is being used. This will not directly detect the technique’s execution, but instead may provide additional evidence that the technique has been used and may complement other detections.</td>
  </tr>
  <tr>
    <td rowspan='3'>DS0040</td>
    <td rowspan='3'>[Operational Databases](https://attack.mitre.org/datasources/DS0040/)</td>
    <td>[Device Alarm](https://attack.mitre.org/datasources/DS0040/#Device%20Alarm)</td>
    <td>Monitor for loss of expected device alarms which could indicate alarms are being suppressed. As noted in the technique description, there may be multiple sources of alarms in an ICS environment. Discrepancies between alarms may indicate the adversary is suppressing some but not all the alarms in the environment. This will not directly detect the technique’s execution, but instead may provide additional evidence that the technique has been used and may complement other detections.</td>
  </tr>
  <tr>
    <td>[Process History/Live Data](https://attack.mitre.org/datasources/DS0040/#Process%20History/Live%20Data)</td>
    <td>Monitor for loss of operational process data which could indicate alarms are being suppressed. This will not directly detect the technique’s execution, but instead may provide additional evidence that the technique has been used and may complement other detections.</td>
  </tr>
  <tr>
    <td>[Process/Event Alarm](https://attack.mitre.org/datasources/DS0040/#Process/Event%20Alarm)</td>
    <td>Monitor for loss of expected operational process alarms which could indicate alarms are being suppressed. As noted in the technique description, there may be multiple sources of alarms in an ICS environment. Discrepancies between alarms may indicate the adversary is suppressing some but not all the alarms in the environment. This will not directly detect the technique’s execution, but instead may provide additional evidence that the technique has been used and may complement other detections.</td>
  </tr>
</table>


##

# References
1. [MITRE ATT&CK Technique: Alarm Suppression. Retrieved 01JUL2024.](https://attack.mitre.org/techniques/T0878/)
2. [Procedure Examples: Maroochy Water Breach. Retrieved 01JUL2024.](https://attack.mitre.org/campaigns/C0020)
3. [Targeted Assets: Human-Machine Interface (HMI). Retrieved 01JUL2024.](https://attack.mitre.org/assets/A0002/)
4. [Targeted Assets: Programmable Logic Controller(PLC). Retrieved 01JUL2024.](https://attack.mitre.org/assets/A0003/)
5. [Targeted Assets: Remote Terminal Unit (RTU). Retrieved 01JUL2024.](https://attack.mitre.org/assets/A0004/)
6. [Targeted Assets: Intelligent Electronic Device (IED). Retrieved 01JUL2024.](https://attack.mitre.org/assets/A0005/)
7. [Targeted Assets: Data Historian. Retrieved 01JUL2024.](https://attack.mitre.org/assets/A0006/)
8. [Targeted Assets: Control Server. Retrieved 01JUL2024.](https://attack.mitre.org/assets/A0007/)
9. [Targeted Assets: Data Gateway. Retrieved 01JUL2024.](https://attack.mitre.org/assets/A0009/)
10. [Targeted Assets: Safety Controller. Retrieved 01JUL2024.](https://attack.mitre.org/assets/A0010/)
11. [MITRE ATT&CK Mitigation: Network Allowlists. Retrieved 01JUL2024.](https://attack.mitre.org/mitigations/M0807/)
12. [MITRE ATT&CK Mitigation: Network Segmentation. Retrieved 01JUL2024.](https://attack.mitre.org/mitigations/M0930/)
13. [MITRE ATT&CK Mitigation:Out-of-Band Communications Channel](https://attack.mitre.org/mitigations/M0810/)
14. [MITRE ATT&CK Mitigation: Static Network Configuration. Retrieved 01JUL2024.](https://attack.mitre.org/mitigations/M0814/)
15. [MITRE ATT&CK Detection: Network Traffic. Retrieved 01JUL2024.](https://attack.mitre.org/datasources/DS0029/)
16. [MITRE ATT&CK Detection: Network Traffic Flow. Retrieved 01JUL2024.](https://attack.mitre.org/datasources/DS0029/#Network%20Traffic%20Flow)
17. [MITRE ATT&CK Detection: Operational Databases. Retrieved 01JUL2024.](https://attack.mitre.org/datasources/DS0040/)
18. [MITRE ATT&CK Detection: Device Alarm. Retrieved 01JUL2024.](https://attack.mitre.org/datasources/DS0040/#Device%20Alarm)
19. [MITRE ATT&CK Detection: Process History/Live Data. Retrieved 01JUL2024.](https://attack.mitre.org/datasources/DS0040/#Process%20History/Live%20Data)
20. [MITRE ATT&CK Detection: Process/Event Alarm. Retrieved 01JUL2024.](https://attack.mitre.org/datasources/DS0040/#Process/Event%20Alarm)
