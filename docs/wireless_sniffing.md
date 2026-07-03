---
sidebar_label: 'Wireless Sniffing'
sidebar_position: 14
---

# Wireless Sniffing

# Summary
Adversaries may seek to capture radio frequency (RF) communication used for remote control and reporting in maritime environments. RF communication frequencies vary between 3 kHz to 300 GHz, although are commonly between 300 MHz to 6 GHz. The wavelength and frequency of the signal affect how the signal propagates through open air, obstacles (e.g., ship structures and cargo), and the type of radio required to capture them. These characteristics are often standardized in the protocol and hardware and may affect how the signal is captured. Some examples of wireless protocols that may be found in maritime environments are: WirelessHART, Zigbee, WIA-FA, and 700 MHz Public Safety Spectrum.

Adversaries may capture RF communications by using specialized hardware, such as software-defined radio (SDR), handheld radio, or a computer with a radio demodulator tuned to the communication frequency. Information transmitted over a wireless medium may be captured in-transit whether the sniffing device is the intended destination or not. This technique may be particularly useful to an adversary when the communications are not encrypted.

In a hypothetical maritime incident, adversaries might capture wireless command message broadcasts on a specific frequency during routine system tests. These messages could then be replayed to trigger unauthorized actions or alarms within the maritime systems.

&nbsp;

# Targeted Assets
| ID      | Asset       |
|:------------|:-----------|
| A0001 | [Workstation](https://attack.mitre.org/assets/A0001/) |
| A0013 | [Field I/O](https://attack.mitre.org/assets/A0013/) |


&nbsp;

# Mitigations
| ID      | Mitigation       | Description |
|:------------|:-----------|:--------------|
| M0808 | [Encrypt Network Traffic](https://attack.mitre.org/mitigations/M0808/) | Utilize strong cryptographic techniques and protocols to prevent eavesdropping on network communications. |
| M0806 | [	Minimize Wireless Signal Propagation](https://attack.mitre.org/mitigations/M0806/) | Reduce the range of RF communications to their intended operating range when possible. Propagation reduction methods may include (i) reducing transmission power on wireless signals, (ii) adjusting antenna gain to prevent extensions beyond organizational boundaries, and (iii) employing RF shielding techniques to block excessive signal propagation. |


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
    <td>Purely passive network sniffing cannot be detected effectively. In cases where the adversary interacts with the wireless network (e.g., joining a Wi-Fi network) detection may be possible. Monitor for new or irregular network traffic flows which may indicate potentially unwanted devices or sessions on wireless networks. In Wi-Fi networks monitor for changes such as rogue access points or low signal strength, indicating a device is further away from the access point then expected and changes in the physical layer signal. Network traffic content will provide important context, such as hardware (e.g., MAC) addresses, user accounts, and types of messages sent.</td>
  </tr>
</table>

##

# References
1. [MITRE ATT&CK Technique: Wireless Sniffing. Retrieved 01JUL2024.](https://attack.mitre.org/techniques/T0887/)
2. [Targeted Assets: Workstation. Retrieved 01JUL2024.](https://attack.mitre.org/assets/A0001/)
3. [Targeted Assets: Field I/O. Retrieved 01JUL2024.](https://attack.mitre.org/assets/A0013/)
4. [MITRE ATT&CK Mitigation: Encrypt Network Traffic. Retrieved 01JUL2024.](https://attack.mitre.org/mitigations/M0808/)
5. [MITRE ATT&CK Mitigation: Minimize Wireless Signal Propagation. Retrieved 01JUL2024.](https://attack.mitre.org/mitigations/M0806/)
6. [MITRE ATT&CK Detection: Network Traffic](https://attack.mitre.org/datasources/DS0029/)
7. [MITRE ATT&CK Detection: Network Traffic Flow](https://attack.mitre.org/datasources/DS0029/#Network%20Traffic%20Flow)

