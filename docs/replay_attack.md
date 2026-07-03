---
sidebar_label: 'Replay Attack'
sidebar_position: 56
---

# Replay Attack

# Summary
Adversaries may perform a replay attack to exploit the communication protocols within maritime systems. In a replay attack, an adversary captures valid data transmissions and retransmits them to create unauthorized effects. This type of attack can disrupt operations, cause navigational errors, or lead to unauthorized control of systems. By replaying previously captured data, adversaries can mislead shipboard systems into executing commands based on outdated or falsified information.


# Procedure Examples
| ID      | Name       | Description |
|:------------|:-----------|:--------------|
| R0009 | [A Triggering Mechanism for Cyber-Attacks in Naval Sensors and Systems](https://www.mdpi.com/1424-8220/21/9/3195) | Four potential attack scenarios targeting EPIC are outlined. Two of these scenarios, specifically a power supply interruption attack and a physical damage attack, have been demonstrated on EPIC, along with possible mitigation strategies. Despite the scarcity of literature on cyberattacks on maritime ship power systems, the attack methodology remains relevant for modern ship systems. |

&nbsp;

# Targeted Assets
| ID      | Asset       |
|:------------|:--------|
| A0015 | Radar Systems |
| A0016 | Automatic Identification System(AIS) |
| A0017 | Global Positioning System(GPS) |

&nbsp;

# Mitigations
| ID      | Mitigation       | Description |
|:------------|:-----------|:--------------|
| M1002 | Timestamping and Nonce Values | Implementing timestamps and nonce values in communication protocols ensures that each data packet has a unique identifier and is timely. A nonce is a random or pseudo-random number that can be used only once, ensuring that the same data packet cannot be resent by an attacker to trick the system. |
| M1003 | Message Authentication Codes (MACs) | Utilizing Message Authentication Codes (MACs) ensures data integrity and authenticity. A MAC is a short piece of information that uses a secret key to verify that a message has not been altered. It is included in each message sent over the network. |

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
    <td>DS1007</td>
    <td>Radar Systems & Automatic Identification Systems (AIS)</td>
    <td>Radar PPI (Plan Position Indicator) Screen Data & AIS/ECDIS (Electronic Chart Display and Information System) Screen Data</td>
    <td>Uses specific patterns transmitted to the ship’s radar or AIS to detect replay attacks by matching these patterns to known legitimate commands. Particularly useful for detecting commands that may trigger malicious actions in radar or AIS systems​.</td>
  </tr>
  <tr>
    <td>DS1008</td>
    <td>Radar Systems & AIS/ECDIS Systems</td>
    <td>Radar PPI Screen Captures, AIS Data, Electronic Chart Data.</td>
    <td>Uses a triggering mechanism that scans graphical interfaces like radar PPI (Plan Position Indicator) to detect specific patterns indicating an attack. Simulates scenarios to validate the effectiveness of this mechanism in detecting replay attacks in radar systems​. </td>
  </tr>
</table>

&nbsp;

# References
1. [A Triggering Mechanism for Cyber-Attacks in Naval Sensors and Systems. Retrieved 01JUL2024.](https://www.mdpi.com/1424-8220/21/9/3195)
2. [Targeted Assets: Radar Systems. Retrieved 01JUL2024.](https://www.comsys.rwth-aachen.de/fileadmin/papers/2022/2022-wolsing-radar.pdf)
3. [Targeted Assets: Automatic Identification System(AIS). Retrieved 01JUL2024.](https://ieeexplore.ieee.org/document/9733358)
4. [Targeted Assets: Global Positioning System(GPS). Retrieved 01JUL2024.](https://ieeexplore.ieee.org/document/10179830)
5. [MITRE ATT&CK Detection: Application Log. Retrieved 01JUL2024.](https://attack.mitre.org/datasources/DS0015/)
6. [MITRE ATT&CK Detection: Application Log Content. Retrieved 01JUL2024.](https://attack.mitre.org/datasources/DS0015/#Application%20Log%20Content)
10. [MITRE ATT&CK Detection: Network Traffic. Retrieved 01JUL2024.](https://attack.mitre.org/datasources/DS0029/)
11. [MITRE ATT&CK Detection: Network Traffic Content. Retrieved 01JUL2024.](https://attack.mitre.org/datasources/DS0029/#Network%20Traffic%20Content)
12. [MITRE ATT&CK Detection: Network Traffic Flow. Retrieved 01JUL2024.](https://attack.mitre.org/datasources/DS0029/#Network%20Traffic%20Flow)
13. [MITRE ATT&CK Detection: Operational Databases. Retrieved 01JUL2024.](https://attack.mitre.org/datasources/DS0040//)
14. [MITRE ATT&CK Detection: Device Alarm. Retrieved 01JUL2024.](https://attack.mitre.org/datasources/DS0040/#Device%20Alarm)