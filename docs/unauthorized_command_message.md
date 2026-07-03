---
sidebar_label: 'Unauthorized Command Message'
sidebar_position: 40
---

# Unauthorized Command Message

# Summary
Adversaries may send unauthorized command messages to instruct maritime control system assets to perform actions outside of their intended functionality or without the logical preconditions to trigger their expected function. Command messages are used in maritime control networks to give direct instructions to control system devices. If an adversary can send an unauthorized command message to a maritime control system, they can instruct the device to perform an action outside the normal bounds of its operations. An adversary could potentially instruct a maritime control system device to perform an action that will cause an impact.

For example, an adversary could send command messages to activate the ship's emergency alarms or navigation systems without an actual emergency or navigational need, potentially causing panic or misdirection.


# Procedure Examples
| ID      | Name       | Description |
|:------------|:-----------|:--------------|
| C0028 | [2015 Ukraine Electric Power Attack](https://attack.mitre.org/campaigns/C0028/) | During the 2015 Ukraine Electric Power Attack, Sandworm Team issued unauthorized commands to substation breaks after gaining control of operator workstations and accessing a distribution management system (DMS) application. |
| C0034 | [2022 Ukraine Electric Power Attack](https://attack.mitre.org/campaigns/C0034/) | During the 2022 Ukraine Electric Power Attack, Sandworm Team used the MicroSCADA SCIL-API to specify a set of SCADA instructions, including the sending of unauthorized commands to substation devices. |
| S1045 | [INCONTROLLER](https://attack.mitre.org/software/S1045/) | INCONTROLLER can send custom Modbus commands to write register values on Schneider PLCs.<br/><br/> INCONTROLLER can send write tag values on OPC UA servers. |
| S0604 | [Industroyer](https://attack.mitre.org/software/S0604/) | Using its protocol payloads, Industroyer sends unauthorized commands to RTUs to change the state of equipment. |
| S1072 | [Industroyer2](https://attack.mitre.org/software/S1072/) | Industroyer2 is capable of sending command messages from the compromised device to target remote stations to open data channels, retrieve the location and values of Information Object Addresses (IOAs), and modify the IO state values through Select Before Operate I/O, Select/Execute, and Invert Default State operations. |
| C0020 | [Maroochy Water Breach](https://attack.mitre.org/campaigns/C0020) | In the Maroochy Water Breach, the adversary used a dedicated analog two-way radio system to send false data and instructions to pumping stations and the central computer. |
| C0030 | [Triton Safety Instrumented System Attack](https://attack.mitre.org/campaigns/C0030/) | In the Triton Safety Instrumented System Attack, TEMP.Veles leveraged Triton to send unauthorized command messages to the Triconex safety controllers. |



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




&nbsp;

# Mitigations
| ID      | Mitigation       | Description |
|:------------|:-----------|:--------------|
| M0802 | [Communication Authenticity](https://attack.mitre.org/mitigations/M0802/) | Protocols used for control functions should provide authenticity through MAC functions or digital signatures. If not, utilize bump-in-the-wire devices or VPNs to enforce communication authenticity between devices that are not capable of supporting this (e.g., legacy controllers, RTUs). |
| M0937 | [Filter Network Traffic](https://attack.mitre.org/mitigations/M0937/) | Perform inline allowlisting of automation protocol commands to prevent devices from sending unauthorized command or reporting messages. Allow/denylist techniques need to be designed with sufficient accuracy to prevent the unintended blocking of valid messages. |
| M0807 | [Network Allowlists](https://attack.mitre.org/mitigations/M0807/) | Use host-based allowlists to prevent devices from accepting connections from unauthorized systems. For example, allowlists can be used to ensure devices can only connect with master stations or known management/engineering workstations. |
| M0930 | [Network Segmentation](https://attack.mitre.org/mitigations/M0930/) | Segment operational assets and their management devices based on their functional role within the process. Enabling more strict isolation to more critical control and operational information within the control environment.  |
| M0813 | [Software Process and Device Authentication](https://attack.mitre.org/mitigations/M0813/) | Devices should authenticate all messages between master and outstation assets. |
| M0818 | [Validate Program Inputs](https://attack.mitre.org/mitigations/M0818/) | Devices and programs that receive command messages from remote systems (e.g., control servers) should verify those commands before taking any actions on them. |

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
    <td>Monitor for anomalous or unexpected commands that may result in changes to the process operation (e.g., discrete write, logic and device configuration, mode changes) observable via asset application logs.</td>
  </tr>
  <tr>
    <td rowspan='2'>DS0029</td>
    <td rowspan='2'>[Network Traffic](https://attack.mitre.org/datasources/DS0029/)</td>
    <td>[Network Traffic Content](https://attack.mitre.org/datasources/DS0029/#Network%20Traffic%20Content)</td>
    <td>Monitor for unexpected ICS protocol command functions to controllers from existing master devices (including from new processes) or from new devices. The latter is like detection for Rogue Master but requires ICS function level insight to determine if an unauthorized device is issuing commands (e.g., a historian).<br/><br/>Monitoring for unexpected or problematic values below the function level will provide better insights into potentially malicious activity but at the cost of additional false positives depending on the underlying operational process.</td>
  </tr>
  <tr>
    <td>[Network Traffic Flow](https://attack.mitre.org/datasources/DS0029/#Network%20Traffic%20Flow)</td>
    <td>Monitor for new or unexpected connections to controllers, which could indicate an Unauthorized Command Message being sent via Rogue Master.</td>
  </tr>
  <tr>
    <td rowspan='2'>DS0040</td>
    <td rowspan='2'>[Operational Databases](https://attack.mitre.org/datasources/DS0040/)</td>
    <td>[Process History/Live Data](https://attack.mitre.org/datasources/DS0040/#Process%20History/Live%20Data)</td>
    <td>Monitor industrial process history data for events that correspond with command message functions, such as setpoint modification or changes to system status for key devices. This will not directly detect the technique’s execution, but instead may provide additional evidence that the technique has been used and may complement other detections.</td>
  </tr>
  <tr>
    <td>[Process/Event Alarm](https://attack.mitre.org/datasources/DS0040/#Process/Event%20Alarm)</td>
    <td>Monitor for anomalous or unexpected commands that may result in changes to the process operation (e.g., discrete write, logic and device configuration, mode changes) observable via asset application logs.</td>
  </tr>
</table>

##

# References
1. [MITRE ATT&CK Technique: Unauthorized Command Message. Retrieved 01JUL2024.](https://attack.mitre.org/techniques/T0855/)
2. [Procedure Examples: 2015 Ukraine Electric Power Attack. Retrieved 01JUL2024.](https://attack.mitre.org/campaigns/C0028/)
3. [Procedure Examples: 2022 Ukraine Electric Power Attack. Retrieved 01JUL2024.](https://attack.mitre.org/campaigns/C0034)
4. [Procedure Examples: INCONTROLLER. Retrieved 01JUL2024.](https://attack.mitre.org/software/S1045/)
5. [Procedure Examples: Industroyer. Retrieved 01JUL2024.](https://attack.mitre.org/software/S0604/)
6. [Procedure Examples: Industroyer2. Retrieved 01JUL2024.](https://attack.mitre.org/software/S1072/)
7. [Procedure Examples: Maroochy Water Breach. Retrieved 01JUL2024.](https://attack.mitre.org/campaigns/C0020)
8. [Procedure Examples: Triton Safety Instrumented System Attack. Retrieved 01JUL2024.](https://attack.mitre.org/campaigns/C0030/)
9. [Targeted Assets: Human-Machine Interface (HMI). Retrieved 01JUL2024.](https://attack.mitre.org/assets/A0002/)
10. [Targeted Assets: Programmable Logic Controller(PLC). Retrieved 01JUL2024.](https://attack.mitre.org/assets/A0003/)
11. [Targeted Assets: Remote Terminal Unit (RTU). Retrieved 01JUL2024.](https://attack.mitre.org/assets/A0004/)
12. [Targeted Assets: Intelligent Electronic Device (IED). Retrieved 01JUL2024.](https://attack.mitre.org/assets/A0005/)
13. [Targeted Assets: Control Server. Retrieved 01JUL2024.](https://attack.mitre.org/assets/A0007/)
14. [Targeted Assets: Safety Controller. Retrieved 01JUL2024.](https://attack.mitre.org/assets/A0010/)
15. [MITRE ATT&CK Mitigation: Communication Authenticity. Retrieved 01JUL2024.](https://attack.mitre.org/mitigations/M0802/)
16. [MITRE ATT&CK Mitigation: Filter Network Traffic. Retrieved 01JUL2024.](https://attack.mitre.org/mitigations/M0937/)
17. [MITRE ATT&CK Mitigation: Network Allowlists. Retrieved 01JUL2024.](https://attack.mitre.org/mitigations/M0807/)
18. [MITRE ATT&CK Mitigation: Network Segmentation. Retrieved 01JUL2024.](https://attack.mitre.org/mitigations/M0930/)
19. [MITRE ATT&CK Mitigation: Software Process and Device Authentication. Retrieved 01JUL2024.](https://attack.mitre.org/mitigations/M0813/)
20. [MITRE ATT&CK Mitigation: Validate Program Inputs. Retrieved 01JUL2024.](https://attack.mitre.org/mitigations/M0818)
21. [MITRE ATT&CK Detection: Application Log. Retrieved 01JUL2024.](https://attack.mitre.org/datasources/DS0015/)
22. [MITRE ATT&CK Detection: Application Log Content. Retrieved 01JUL2024.](https://attack.mitre.org/datasources/DS0015/#Application%20Log%20Content)
23. [MITRE ATT&CK Detection: Network Traffic](https://attack.mitre.org/datasources/DS0029/)
24. [MITRE ATT&CK Detection: Network Traffic Content](https://attack.mitre.org/datasources/DS0029/#Network%20Traffic%20Content)
25. [MITRE ATT&CK Detection: Network Traffic Flow](https://attack.mitre.org/datasources/DS0029/#Network%20Traffic%20Flow)
26. [MITRE ATT&CK Detection: Operational Databases. Retrieved 01JUL2024.](https://attack.mitre.org/datasources/DS0040/)
27. [MITRE ATT&CK Detection: Process History/Live Data. Retrieved 01JUL2024.](https://attack.mitre.org/datasources/DS0040/#Process%20History/Live%20Data)
28. [MITRE ATT&CK Detection: Process/Event Alarm. Retrieved 01JUL2024.](https://attack.mitre.org/datasources/DS0040/#Process/Event%20Alarm)
