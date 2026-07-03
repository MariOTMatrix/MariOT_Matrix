---
sidebar_label: 'Automated Collection'
sidebar_position: 20
---

# Automated Collection

# Summary
Adversaries may automate collection of maritime environment information using tools or scripts. This automated collection may leverage native maritime control protocols and tools available in the maritime systems environment. For example, the NMEA protocol may be used to enumerate and gather information. Access to a system or interface with these native protocols may allow collection and enumeration of other attached, communicating servers and devices.


# Procedure Examples
| ID      | Name       | Description |
|:------------|:-----------|:--------------|
| S0093 | [Backdoor.Oldrea](https://attack.mitre.org/software/S0093/) | Using OPC, a component of Backdoor.Oldrea gathers any details about connected devices and sends them back to the C2 for the attackers to analyze. |
| S0604 | [Industroyer](https://attack.mitre.org/software/S0604/) | Industroyer automatically collects protocol object data to learn about control devices in the environment. |
| S1072 | [Industroyer2](https://attack.mitre.org/software/S1072/) | Industroyer2 leverages a hardcoded list of remote-station IP addresses to iteratively initiate communications and collect information across multiple priority IEC-104 priority levels. |

&nbsp;

# Targeted Assets
| ID      | Asset       |
|:------------|:-----------|
| A0003 | [Programmable Logic Controller(PLC)](https://attack.mitre.org/assets/A0003/) |
| A0006 | [Data Historian](https://attack.mitre.org/assets/A0006/) |
| A0007 | [Control Server](https://attack.mitre.org/assets/A0007/) |

&nbsp;

# Mitigations
| ID      | Mitigation       | Description |
|:------------|:-----------|:--------------|
| M0807 | [Network Allowlists](https://attack.mitre.org/mitigations/M0807/) | Utilize network allowlists to restrict unnecessary connections to network devices (e.g., comm servers, serial to ethernet converters) and services, especially in cases when devices have limits on the number of simultaneous sessions they support. |
| M0930 | [Network Segmentation](https://attack.mitre.org/mitigations/M0930/) | Prevent unauthorized systems from accessing control servers or field devices containing industrial information, especially services used for common automation protocols (e.g., DNP3, OPC). |


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
    <td>DS0022</td>
    <td>[Command](https://attack.mitre.org/datasources/DS0017/)</td>
    <td>[Command Execution](https://attack.mitre.org/datasources/DS0017/#Command%20Execution)</td>
    <td>Monitor executed commands and arguments for actions that could be taken to collect internal data.</td>
  </tr>
  <tr>
    <td>DS0022</td>
    <td>[File](https://attack.mitre.org/datasources/DS0022/)</td>
    <td>[File Access](https://attack.mitre.org/datasources/DS0022/#File%20Access)</td>
    <td>Monitor for unexpected files (e.g., .pdf, .docx, .jpg) viewed for collecting internal data.</td>
  </tr>
  <tr>
    <td>DS0029</td>
    <td>[Network Traffic](https://attack.mitre.org/datasources/DS0029/)</td>
    <td>[Network Traffic Content](https://attack.mitre.org/datasources/DS0029/#Network%20Traffic%20Content)</td>
    <td>Monitor for information collection on assets that may indicate deviations from standard operational tools. Examples include unexpected industrial automation protocol functions, new high volume communication sessions, or broad collection across many hosts within the network.</td>
  </tr>
  <tr>
    <td>DS0012</td>
    <td>[Script](https://attack.mitre.org/datasources/DS0012/)</td>
    <td>[Script Execution](https://attack.mitre.org/datasources/DS0012/#Script%20Execution)</td>
    <td>Monitor for any suspicious attempts to enable script execution on a system. If scripts are not commonly used on a system, but enabled, scripts running out of cycle from patching or other administrator functions are suspicious. Scripts should be captured from the file system when possible, to determine their actions and intent.</td>
  </tr>
</table>


##

# References
1. [MITRE ATT&CK Technique: Automated Collection. Retrieved 01JUL2024. ](https://attack.mitre.org/techniques/T0802/).
2. [Procedure Examples: Backdoor.Oldrea. Retrieved 01JUL2024.](https://attack.mitre.org/software/S0093/)
3. [Procedure Examples: Industroyer. Retrieved 01JUL2024.](https://attack.mitre.org/software/S0604/)
4. [Procedure Examples: Industroyer2. Retrieved 01JUL2024.](https://attack.mitre.org/software/S1072/)
5. [Targeted Assets: Programmable Logic Controller(PLC). Retrieved 01JUL2024.](https://attack.mitre.org/assets/A0003/)
6. [Targeted Assets: Data Historian. Retrieved 01JUL2024.](https://attack.mitre.org/assets/A0006/)
7. [Targeted Assets: Control Server. Retrieved 01JUL2024.](https://attack.mitre.org/assets/A0007/)
8. [MITRE ATT&CK Mitigation: Network Allowlists. Retrieved 01JUL2024.](https://attack.mitre.org/mitigations/M0807/)
9. [MITRE ATT&CK Mitigation: Network Segmentation. Retrieved 01JUL2024.](https://attack.mitre.org/mitigations/M0930/)
10. [MITRE ATT&CK Detection: Command](https://attack.mitre.org/datasources/DS0017/)
11. [MITRE ATT&CK Detection: Command Execution](https://attack.mitre.org/datasources/DS0017/#Command%20Execution)
12. [MITRE ATT&CK Detection: File. Retrieved 01JUL2024.](https://attack.mitre.org/datasources/DS0022/)
13. [MITRE ATT&CK Detection: File Access. Retrieved 01JUL2024.](https://attack.mitre.org/datasources/DS0022/#File%20Access)
14. [MITRE ATT&CK Detection: Network Traffic](https://attack.mitre.org/datasources/DS0029/)
15. [MITRE ATT&CK Detection: Network Traffic Content](https://attack.mitre.org/datasources/DS0029/#Network%20Traffic%20Content)
16. [MITRE ATT&CK Detection: Script](https://attack.mitre.org/datasources/DS0012/)
17. [MITRE ATT&CK Detection: Script Execution](https://attack.mitre.org/datasources/DS0012/#Script%20Execution)