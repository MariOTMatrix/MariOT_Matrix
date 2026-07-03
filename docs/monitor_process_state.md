---
sidebar_label: 'Monitor Process State'
sidebar_position: 23
---

# Monitor Process State

# Summary
Adversaries may gather information about the physical process state on a vessel. This information may be used to gain more insight into the maritime process itself or as a trigger for malicious actions. The sources of process state information may vary, such as OPC tags, historian data, specific PLC block information, or network traffic.


# Procedure Examples
| ID      | Name       | Description |
|:------------|:-----------|:--------------|
| S0604 | [Industroyer](https://attack.mitre.org/software/S0604/) | Industroyer's OPC and IEC 61850 protocol modules include the ability to send stVal requests to read the status of operational variables. |
| S1072 | [Industroyer2](https://attack.mitre.org/software/S1072/) | Industroyer2 uses a General Interrogation command to monitor the device’s Information Object Addresses (IOAs) and their IO state values. |
| S0603	| [Stuxnet](https://www.langner.com/wp-content/uploads/2017/03/to-kill-a-centrifuge.pdf) | Stuxnet examines fields recorded by the DP_RECV monitor to determine if the target system is in a particular state of operation. |

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
| A0013 | [Field I/O](https://attack.mitre.org/assets/A0013/) |

&nbsp;

# Mitigations
| ID      | Mitigation       | Description |
|:------------|:-----------|:--------------|
| M0816 | [Mitigation Limited or Not Effective](https://attack.mitre.org/mitigations/M0816/) | This type of attack technique cannot be easily mitigated with preventive controls since it is based on the abuse of system features. |


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
    <td>Monitor applications logs for any access attempts to operational databases (e.g., historians) or other sources of operational data within the ICS environment. These devices should be monitored for adversary collection using techniques relevant to the underlying technologies (e.g., Windows, Linux).</td>
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
1. [MITRE ATT&CK Technique: Monitor Process State. Retrieved 01JUL2024. ](https://attack.mitre.org/techniques/T0801/).
2. [Procedure Examples: Industroyer. Retrieved 01JUL2024.](https://attack.mitre.org/software/S0604/)
3. [Procedure Examples: Industroyer2. Retrieved 01JUL2024.](https://attack.mitre.org/software/S1072/)
4. [Procedure Examples: Stuxnet. Retrieved 01JUL2024.](https://www.langner.com/wp-content/uploads/2017/03/to-kill-a-centrifuge.pdf)
5. [Targeted Assets: Human-Machine Interface (HMI). Retrieved 01JUL2024.](https://attack.mitre.org/assets/A0002/)
6. [Targeted Assets: Programmable Logic Controller(PLC). Retrieved 01JUL2024.](https://attack.mitre.org/assets/A0003/)
7. [Targeted Assets: Remote Terminal Unit (RTU). Retrieved 01JUL2024.](https://attack.mitre.org/assets/A0004/)
8. [Targeted Assets: Intelligent Electronic Device (IED). Retrieved 01JUL2024.](https://attack.mitre.org/assets/A0005/)
9. [Targeted Assets: Data Historian. Retrieved 01JUL2024.](https://attack.mitre.org/assets/A0006/)
10. [Targeted Assets: Control Server. Retrieved 01JUL2024.](https://attack.mitre.org/assets/A0007/)
11. [Targeted Assets: Data Gateway. Retrieved 01JUL2024.](https://attack.mitre.org/assets/A0009/)
13. [Targeted Assets: Safety Controller. Retrieved 01JUL2024.](https://attack.mitre.org/assets/A0010/)
14. [Targeted Assets: Jump Host. Retrieved 01JUL2024.](https://attack.mitre.org/assets/A0012/)
15. [MITRE ATT&CK Detection: Application Log. Retrieved 01JUL2024.](https://attack.mitre.org/datasources/DS0015/)
16. [MITRE ATT&CK Detection: Application Log Content. Retrieved 01JUL2024.](https://attack.mitre.org/datasources/DS0015/#Application%20Log%20Content)
17. [MITRE ATT&CK Detection: Network Traffic](https://attack.mitre.org/datasources/DS0029/)
18. [MITRE ATT&CK Detection: Network Traffic Content](https://attack.mitre.org/datasources/DS0029/#Network%20Traffic%20Content)
