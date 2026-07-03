---
sidebar_label: 'Brute Force I/O'
sidebar_position: 38
---

# Brute Force I/O

# Summary
Adversaries may stop or disable services on a maritime system to render those services unavailable to legitimate users. Stopping critical services can inhibit or stop response to an incident or aid in the adversary's overall objectives to cause damage to the vessel's operations. Services may not allow for modification of their data stores while running. Adversaries may stop services in order to conduct Data Destruction.


# Procedure Examples
| ID      | Name       | Description |
|:------------|:-----------|:--------------|
| S0604 | [Industroyer](https://attack.mitre.org/software/S0604/) | The Industroyer IEC 104 module has 3 modes available to perform its attack. These modes are range, shift, and sequence. The range mode operates in 2 stages. The first stage of range mode gathers Information Object Addresses (IOA) and sends select and execute packets to switch the state. The second stage of range mode has an infinite loop where it will switch the state of all of the previously discovered IOAs. Shift mode is similar to range mode, but instead of staying within the same range, it will add a shift value to the default range values. |
| S1072 | [Industroyer2](https://attack.mitre.org/software/S1072/) | Industroyer2 can iterate across a device’s IOAs to modify the ON/OFF value of a given IO state. |


&nbsp;

# Targeted Assets
| ID      | Asset       |
|:------------|:-----------|
| A0002 | [Human-Machine Interface (HMI)](https://attack.mitre.org/assets/A0002/) |
| A0003 | [Programmable Logic Controller (PLC)](https://attack.mitre.org/assets/A0003/) |
| A0004 | [Remote Terminal Unit (RTU)](https://attack.mitre.org/assets/A0004/) |
| A0005 | [Intelligent Electronic Device (IED)](https://attack.mitre.org/assets/A0005/) |
| A0007 | [Control Server](https://attack.mitre.org/assets/A0007/) |
| A0010 | [Safety Controller](https://attack.mitre.org/assets/A0010/) |



&nbsp;

# Mitigations
| ID      | Mitigation       | Description |
|:------------|:-----------|:--------------|
| M0937 | [Filter Network Traffic](https://attack.mitre.org/mitigations/M0937/) |Allow/denylists can be used to block access when excessive I/O connections are detected from a system or device during a specified time period. |
| M0807 | [Network Allowlists](https://attack.mitre.org/mitigations/M0807/) | Utilize network allowlists to restrict unnecessary connections to network devices (e.g., comm servers, serial to ethernet converters) and services, especially in cases when devices have limits on the number of simultaneous sessions they support. |
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
    <td>Some asset application logs may provide information on I/O points related to write commands. Monitor for write commands for an excessive number of I/O points or manipulating a single value an excessive number of times.</td>
  </tr>
  <tr>
    <td>DS0029</td>
    <td>[Network Traffic](https://attack.mitre.org/datasources/DS0029/)</td>
    <td>[Network Traffic Content](https://attack.mitre.org/datasources/DS0029/#Network%20Traffic%20Content)</td>
    <td>Monitor network traffic for ICS functions related to write commands for an excessive number of I/O points or manipulating a single value an excessive number of times.</td>
  </tr>
  <tr>
    <td>DS0019</td>
    <td>[Service](https://attack.mitre.org/datasources/DS0019/)</td>
    <td>[Service Metadata](https://attack.mitre.org/datasources/DS0019/#Service%20Metadata)</td>
    <td>Alterations to the service binary path or the service startup type changed to disabled may be suspicious.</td>
  </tr>
  <tr>
    <td>DS0040</td>
    <td>[Operational Databases](https://attack.mitre.org/datasources/DS0040/)</td>
    <td>[Process History/Live Data](https://attack.mitre.org/datasources/DS0040/#Process%20History/Live%20Data)</td>
    <td>Monitor operational process data for write commands for an excessive number of I/O points or manipulating a single value an excessive number of times. This will not directly detect the technique’s execution, but instead may provide additional evidence that the technique has been used and may complement other detections.</td>
  </tr>
</table>

##

# References
1. [MITRE ATT&CK Technique: Brute Force I/O. Retrieved 01JUL2024.](https://attack.mitre.org/techniques/T0806/)
2. [Procedure Examples: Industroyer. Retrieved 01JUL2024.](https://attack.mitre.org/software/S0604/)
3. [Procedure Examples: Industroyer2. Retrieved 01JUL2024.](https://attack.mitre.org/software/S1072/)
4. [Targeted Assets: Human-Machine Interface (HMI). Retrieved 01JUL2024.](https://attack.mitre.org/assets/A0002/)
5. [Targeted Assets: Programmable Logic Controller (PLC). Retrieved 01JUL2024.](https://attack.mitre.org/assets/A0003/)
6. [Targeted Assets: Remote Terminal Unit (RTU). Retrieved 01JUL2024.](https://attack.mitre.org/assets/A0004/)
7. [Targeted Assets: Intelligent Electronic Device (IED). Retrieved 01JUL2024.](https://attack.mitre.org/assets/A0005/)
8. [Targeted Assets: Control Server. Retrieved 01JUL2024.](https://attack.mitre.org/assets/A0007/)
9. [Targeted Assets: Safety Controller. Retrieved 01JUL2024.](https://attack.mitre.org/assets/A0010/)
10. [MITRE ATT&CK Mitigation: Filter Network Traffic. Retrieved 01JUL2024.](https://attack.mitre.org/mitigations/M0937/)
11. [MITRE ATT&CK Mitigation: Network Allowlists. Retrieved 01JUL2024.](https://attack.mitre.org/mitigations/M0807/)
12. [MITRE ATT&CK Mitigation: Network Segmentation. Retrieved 01JUL2024.](https://attack.mitre.org/mitigations/M0930/)
13. [MITRE ATT&CK Mitigation: Software Process and Device Authentication. Retrieved 01JUL2024.](https://attack.mitre.org/mitigations/M0813/)
14. [MITRE ATT&CK Detection: Application Log. Retrieved 01JUL2024.](https://attack.mitre.org/datasources/DS0015/)
15. [MITRE ATT&CK Detection: Application Log Content. Retrieved 01JUL2024.](https://attack.mitre.org/datasources/DS0015/#Application%20Log%20Content)
16. [MITRE ATT&CK Detection: Network Traffic. Retrieved 01JUL2024.](https://attack.mitre.org/datasources/DS0029/)
17. [MITRE ATT&CK Detection: Network Traffic Content. Retrieved 01JUL2024.](https://attack.mitre.org/datasources/DS0029/#Network%20Traffic%20Content)
18. [MITRE ATT&CK Detection: Operational Databases. Retrieved 01JUL2024.](https://attack.mitre.org/datasources/DS0040//)
19. [MITRE ATT&CK Detection: Process History/Live Data. Retrieved 01JUL2024.](https://attack.mitre.org/datasources/DS0040/#Process%20History/Live%20Data)

