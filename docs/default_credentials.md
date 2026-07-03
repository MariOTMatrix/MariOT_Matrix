---
sidebar_label: 'Default Credentials'
sidebar_position: 15
---

# Default Credentials

# Summary
Adversaries may seek to capture radio frequency (RF) communication used for remote control and reporting in maritime environments. RF communication frequencies vary between 3 kHz to 300 GHz, although are commonly between 300 MHz to 6 GHz. The wavelength and frequency of the signal affect how the signal propagates through open air, obstacles (e.g., ship structures and cargo), and the type of radio required to capture them. These characteristics are often standardized in the protocol and hardware and may affect how the signal is captured. Some examples of wireless protocols that may be found in maritime environments are: WirelessHART, Zigbee, WIA-FA, and 700 MHz Public Safety Spectrum.

Adversaries may capture RF communications by using specialized hardware, such as software-defined radio (SDR), handheld radio, or a computer with a radio demodulator tuned to the communication frequency. Information transmitted over a wireless medium may be captured in-transit whether the sniffing device is the intended destination or not. This technique may be particularly useful to an adversary when the communications are not encrypted.

In a hypothetical maritime incident, adversaries might capture wireless command message broadcasts on a specific frequency during routine system tests. These messages could then be replayed to trigger unauthorized actions or alarms within the maritime systems.

&nbsp;

# Procedure Examples
| ID      | Name       | Description |
|:------------|:-----------|:--------------|
| C0031 | [Unitronics Defacement Campaign](https://attack.mitre.org/campaigns/C0031/) | During the Unitronics Defacement Campaign, the CyberAv3ngers discovered and exploited default credentials found on many Unitronics Programmable Logic Controller (PLC) Human-Machine Interface (HMI). For many of these devices, the default password was set to ‘1111’. |


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
| A0013 | [Field I/O](https://attack.mitre.org/assets/A0013/) |
| A0014 | [Routers](https://attack.mitre.org/assets/A0014/) |


&nbsp;

# Mitigations
| ID      | Mitigation       | Description |
|:------------|:-----------|:--------------|
| M0801 | [Access Management](https://attack.mitre.org/mitigations/M0801/) | Ensure embedded controls and network devices are protected through access management, as these devices often have unknown default accounts which could be used to gain unauthorized access. |
| M0927 | [Password Policies](https://attack.mitre.org/mitigations/M0927/) | Review vendor documents and security alerts for potentially unknown or overlooked default credentials within existing devices. |


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
    <td >DS0028</td>
    <td>[Logon Session](https://attack.mitre.org/datasources/DS0028/)</td>
    <td>[Logon Session Creation](https://attack.mitre.org/datasources/DS0028/#Logon%20Session%20Creation)</td>
    <td>Monitor logon sessions for default credential use.</td>
  </tr>
  <tr>
    <td >DS0029</td>
    <td>[Network Traffic](https://attack.mitre.org/datasources/DS0029/)</td>
    <td>[Network Traffic Content](https://attack.mitre.org/datasources/DS0029/#Network%20Traffic%20Content)</td>
    <td>Monitor network traffic for default credential use in protocols that allow unencrypted authentication.</td>
  </tr>
</table>

##

# References
1. [MITRE ATT&CK Technique: Default Credentials. Retrieved 01JUL2024.](https://attack.mitre.org/techniques/T0812/)
2. [Procedure Examples: Unitronics Defacement Campaign. Retrieved 01JUL2024.](https://attack.mitre.org/campaigns/C0031/)
3. [Targeted Assets: Workstation. Retrieved 01JUL2024.](https://attack.mitre.org/assets/A0001/)
4. [Targeted Assets: Human-Machine Interface (HMI). Retrieved 01JUL2024.](https://attack.mitre.org/assets/A0002/)
5. [Targeted Assets: Programmable Logic Controller(PLC). Retrieved 01JUL2024.](https://attack.mitre.org/assets/A0003/)
6. [Targeted Assets: Remote Terminal Unit (RTU). Retrieved 01JUL2024.](https://attack.mitre.org/assets/A0004/)
7. [Targeted Assets: Intelligent Electronic Device (IED). Retrieved 01JUL2024.](https://attack.mitre.org/assets/A0005/)
8. [Targeted Assets: Data Historian. Retrieved 01JUL2024.](https://attack.mitre.org/assets/A0006/)
9. [Targeted Assets: Control Server. Retrieved 01JUL2024.](https://attack.mitre.org/assets/A0007/)
10. [Targeted Assets: Application Server. Retrieved 01JUL2024.](https://attack.mitre.org/assets/A0008/)
11. [Targeted Assets: Data Gateway. Retrieved 01JUL2024.](https://attack.mitre.org/assets/A0009/)
12. [Targeted Assets: Safety Controller. Retrieved 01JUL2024.](https://attack.mitre.org/assets/A0010/)
13. [Targeted Assets: Virtual Private Network (VPN) Server. Retrieved 01JUL2024.](https://attack.mitre.org/assets/A0011/)
14. [Targeted Assets: Jump Host. Retrieved 01JUL2024.](https://attack.mitre.org/assets/A0012/)
15. [Targeted Assets: Field I/O. Retrieved 01JUL2024.](https://attack.mitre.org/assets/A0013/)
16. [Targeted Assets: Routers. Retrieved 01JUL2024.](https://attack.mitre.org/assets/A0014/)
17. [MITRE ATT&CK Mitigation: Access Management. Retrieved 01JUL2024.](https://attack.mitre.org/mitigations/M0801/)
18. [MITRE ATT&CK Mitigation: Password Policies. Retrieved 01JUL2024.](https://attack.mitre.org/mitigations/M0927/)
19. [MITRE ATT&CK Detection: Logon Session. Retrieved 01JUL2024.](https://attack.mitre.org/datasources/DS0028/)
20. [MITRE ATT&CK Detection: Logon Session Creation. Retrieved 01JUL2024.](https://attack.mitre.org/datasources/DS0028/#Logon%20Session%20Creation)
21. [MITRE ATT&CK Detection: Network Traffic](https://attack.mitre.org/datasources/DS0029/)
22. [MITRE ATT&CK Detection: Network Traffic Content](https://attack.mitre.org/datasources/DS0029/#Network%20Traffic%20Content)

