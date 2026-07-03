---
sidebar_label: 'Standard Application Layer Protocol'
sidebar_position: 27
---

# Standard Application Layer Protocol

# Summary
Adversaries may establish command and control capabilities over commonly used maritime application layer protocols such as HTTP(S), OPC, RDP, telnet, DNP3, and modbus. These protocols may be used to disguise adversary actions as benign network traffic. Standard protocols may be seen on their associated port or, in some cases, over a non-standard port. Adversaries may use these protocols to reach out of the vessel's network for command and control, or, in some cases, to other infected devices within the maritime network.

&nbsp;

# Procedure Examples
| ID      | Name       | Description |
|:------------|:-----------|:--------------|
| S0089 | [BlackEnergy](https://attack.mitre.org/software/S0089/) | BlackEnergy uses HTTP POST request to contact external command and control servers. |
| S1045 | [INCONTROLLER](https://attack.mitre.org/software/S1045/) | INCONTROLLER can remotely send commands to a malicious agent uploaded on Omron PLCs over HTTP or HTTPS. |
| G0049 | [OilRig](https://attack.mitre.org/groups/G0049/) | OilRig communicated with its command and control using HTTP requests. |
| S0496 | [REvil](https://attack.mitre.org/software/S0496/) | REvil sends HTTPS POST messages with randomly generated URLs to communicate with a remote server.  |
| S0603	| [Stuxnet](https://www.langner.com/wp-content/uploads/2017/03/to-kill-a-centrifuge.pdf) | Stuxnet uses a thread to monitor a data block DB890 of sequence A or B. This thread is constantly running and probing this block (every 5 minutes). On an infected PLC, if block DB890 is found and contains a special magic value (used by Stuxnet to identify his own block DB890), this blocks data can be read and written. This thread is likely used to optimize the way sequences A and B work, and modify their behavior when the Step7 editor is opened. |
| S1009 | [Triton](https://attack.mitre.org/software/S1009/) | Triton can communicate with the implant utilizing the TriStation 'get main processor diagnostic data' command and looks for a specifically crafted packet body from which it extracts a command value and its arguments.  |


&nbsp;

# Targeted Assets
| ID      | Asset       |
|:------------|:-----------|
| A0001 | [Workstation](https://attack.mitre.org/assets/A0001/) |
| A0002 | [Human-Machine Interface (HMI)](https://attack.mitre.org/assets/A0002/) |
| A0003 | [Programmable Logic Controller(PLC)](https://attack.mitre.org/assets/A0003/) |
| A0004 | [Remote Terminal Unit (RTU)](https://attack.mitre.org/assets/A0004/) |
| A0005 | [Intelligent Electronic Device (IED)](https://attack.mitre.org/assets/A0005/) |
| A0006 | [Data Historian](https://attack.mitre.org/assets/A0006/) |
| A0007 | [Control Server](https://attack.mitre.org/assets/A0007/) |
| A0008 | [Application Server](https://attack.mitre.org/assets/A0008/) |
| A0009 | [Data Gateway](https://attack.mitre.org/assets/A0009/) |
| A0010 | [Safety Controller](https://attack.mitre.org/assets/A0010/) |
| A0011 | [Virtual Private Network (VPN) Server](https://attack.mitre.org/assets/A0011/) |
| A0012 | [Jump Host](https://attack.mitre.org/assets/A0012/) |


&nbsp;

# Mitigations
| ID      | Mitigation       | Description |
|:------------|:-----------|:--------------|
| M0807 | [Network Allowlists](https://attack.mitre.org/mitigations/M0807/) | Network allowlists can be implemented through either host-based files or system host files to specify what external connections (e.g., IP address, MAC address, port, protocol) can be made from a device. Allowlist techniques that operate at the application layer (e.g., DNP3, Modbus, HTTP) are addressed in the Filter Network Traffic mitigation. |
| M0931 | [Network Intrusion Prevention](https://attack.mitre.org/mitigations/M0931/) | Network intrusion detection and prevention systems that use network signatures to identify traffic for specific adversary malware can be used to mitigate activity at the network level. |
| M0930 | [Network Segmentation](https://attack.mitre.org/mitigations/M0930/) | Ensure proper network segmentation between higher level corporate resources and the control process environment. |



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
    <td>Monitor and analyze traffic patterns and packet inspection associated to protocol(s), leveraging SSL/TLS inspection for encrypted traffic, that do not follow the expected protocol standards and traffic flows (e.g., extraneous packets that do not belong to established flows, gratuitous or anomalous traffic patterns, anomalous syntax, or structure). Consider correlation with process monitoring and command line to detect anomalous processes execution and command line arguments associated to traffic patterns (e.g., monitor anomalies in use of files that do not normally initiate connections for respective protocol(s)).</td>
  </tr>
  <tr>
    <td>[Network Traffic Flow](https://attack.mitre.org/datasources/DS0029/#Network%20Traffic%20Flow)</td>
    <td>Monitor and analyze traffic flows that do not follow the expected protocol standards and traffic flows (e.g., extraneous packets that do not belong to established flows , or gratuitous or anomalous traffic patterns). Consider correlation with process monitoring and command line to detect anomalous processes execution and command line arguments associated to traffic patterns (e.g., monitor anomalies in use of files that do not normally initiate connections for respective protocol(s)).</td>
  </tr>
</table>

##

# References
1. [MITRE ATT&CK Technique: Standard Application Layer Protocol. Retrieved 01JUL2024.](https://attack.mitre.org/techniques/T0869/)
2. [Procedure Examples: BlackEnergy. Retrieved 01JUL2024.](https://attack.mitre.org/software/S0089/)
3. [Procedure Examples: INCONTROLLER. Retrieved 01JUL2024.](https://attack.mitre.org/software/S1045/)
4. [Procedure Examples: OilRig. Retrieved 01JUL2024.](https://attack.mitre.org/groups/G0049/)
5. [Procedure Examples: REvil. Retrieved 01JUL2024.](https://attack.mitre.org/software/S0496/)
6. [Procedure Examples: Stuxnet. Retrieved 01JUL2024.](https://www.langner.com/wp-content/uploads/2017/03/to-kill-a-centrifuge.pdf)
7. [Procedure Examples: Triton. Retrieved 01JUL2024.](https://attack.mitre.org/software/S1009/)
8. [Targeted Assets: Workstation. Retrieved 01JUL2024.](https://attack.mitre.org/assets/A0001/)
9. [Targeted Assets: Human-Machine Interface (HMI). Retrieved 01JUL2024.](https://attack.mitre.org/assets/A0002/)
10. [Targeted Assets: Programmable Logic Controller(PLC). Retrieved 01JUL2024.](https://attack.mitre.org/assets/A0003/)
11. [Targeted Assets: Remote Terminal Unit (RTU). Retrieved 01JUL2024.](https://attack.mitre.org/assets/A0004/)
12. [Targeted Assets: Intelligent Electronic Device (IED). Retrieved 01JUL2024.](https://attack.mitre.org/assets/A0005/)
13. [Targeted Assets: Data Historian. Retrieved 01JUL2024.](https://attack.mitre.org/assets/A0006/)
14. [Targeted Assets: Control Server. Retrieved 01JUL2024.](https://attack.mitre.org/assets/A0007/)
15. [Targeted Assets: Application Server. Retrieved 01JUL2024.](https://attack.mitre.org/assets/A0008/)
16. [Targeted Assets: Data Gateway. Retrieved 01JUL2024.](https://attack.mitre.org/assets/A0009/)
17. [Targeted Assets: Safety Controller. Retrieved 01JUL2024.](https://attack.mitre.org/assets/A0010/)
18. [Targeted Assets: Virtual Private Network (VPN) Server. Retrieved 01JUL2024.](https://attack.mitre.org/assets/A0011/)
19. [Targeted Assets: Jump Host. Retrieved 01JUL2024.](https://attack.mitre.org/assets/A0012/)
20. [MITRE ATT&CK Mitigation: Network Allowlists. Retrieved 01JUL2024.](https://attack.mitre.org/mitigations/M0807/)
21. [MITRE ATT&CK Mitigation: Network Intrusion Prevention. Retrieved 01JUL2024.](https://attack.mitre.org/mitigations/M0931/)
22. [MITRE ATT&CK Mitigation: Network Segmentation. Retrieved 01JUL2024.](https://attack.mitre.org/mitigations/M0930/)
23. [MITRE ATT&CK Detection: Network Traffic. Retrieved 01JUL2024.](https://attack.mitre.org/datasources/DS0029/)
24. [MITRE ATT&CK Detection: Network Traffic Content. Retrieved 01JUL2024.](https://attack.mitre.org/datasources/DS0029/#Network%20Traffic%20Content)
25. [MITRE ATT&CK Detection: Network Traffic Flow. Retrieved 01JUL2024.](https://attack.mitre.org/datasources/DS0029/#Network%20Traffic%20Flow)
