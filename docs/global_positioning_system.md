---
sidebar_label: 'GPS Spoofing'
sidebar_position: 54
---

# Global Positioning System(GPS) Spoofing

# Summary
Adversaries may exploit GPS systems by spoofing coordinates, causing significant disruptions in maritime operations. This can mislead navigation systems like the Electronic Chart Display and Information System (ECDIS) to display inaccurate positions. By injecting false GPS data through Ethernet-based networks using the IEC 61162-450 standard, adversaries can execute the Maritime GPS Spoofing Injection (M-GPSI) technique. This manipulation compromises the safety and efficiency of maritime operations, potentially leading to navigational errors, collisions, or groundings.


# Procedure Examples
| ID      | Name       | Description |
|:------------|:-----------|:--------------|
| R0006 | [Defending Marine Ships against Ethernet based Cyberattacks](https://ieeexplore.ieee.org/document/10179830) | Attacks on radar systems can be launched by exploiting vulnerabilities in radar communication protocols, often through methods like Denial of Service (DoS), transformation, object manipulation, and context-aware attacks. An attacker might use a Radar Attack Tool (RAT) to manipulate the radar data by altering scanline pixels or injecting false information, potentially misleading navigators. Such attacks can disrupt the radar's ability to accurately represent the environment, posing significant risks to navigation and vessel safety​. |

&nbsp;

# Targeted Assets
| ID      | Asset       |
|:------------|:-----------|
| A0017 | Global Positioning System(GPS) |

&nbsp;

# Mitigations
| ID      | Mitigation       | Description |
|:------------|:-----------|:--------------|
| M0937 | [Filter Network Traffic](https://attack.mitre.org/mitigations/M0937/) | Perform inline allowlisting of automation protocol commands to prevent devices from sending unauthorized command or reporting messages. Allow/denylist techniques need to be designed with sufficient accuracy to prevent the unintended blocking of valid reporting messages. |
| M0930 | [Network Segmentation](https://attack.mitre.org/mitigations/M0930/) | Segment operational assets and their management devices based on their functional role within the process. Enabling more strict isolation to more critical control and operational information within the control environment. |



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
    <td>DS0015</td>
    <td>[Application Log](https://attack.mitre.org/datasources/DS0015/)</td>
    <td>[Application Log Content](https://attack.mitre.org/datasources/DS0015/#Application%20Log%20Content)</td>
    <td>Monitor for application logging, messaging, and/or other artifacts that may result from Denial of Service (DoS) attacks which degrade or block the availability of services to users. In addition to network level detections, endpoint logging and instrumentation can be useful for detection.</td>
  </tr>
  <tr>
    <td rowspan='2'>DS0029</td>
    <td rowspan='2'>[Network Traffic](https://attack.mitre.org/datasources/DS0029/)</td>
    <td>[Network Traffic Content](https://attack.mitre.org/datasources/DS0029/#Network%20Traffic%20Content)</td>
    <td>Monitor and analyze traffic patterns and packet inspection associated to protocol(s) that do not follow the expected protocol standards and traffic flows (e.g., extraneous packets that do not belong to established flows, gratuitous or anomalous traffic patterns, anomalous syntax, or structure). Consider correlation with process monitoring and command line to detect anomalous processes execution and command line arguments associated to traffic patterns (e.g., monitor anomalies in use of files that do not normally initiate connections for respective protocol(s)).</td>
  </tr>
  <tr>
    <td>[Network Traffic Flow](https://attack.mitre.org/datasources/DS0029/#Network%20Traffic%20Flow)</td>
    <td>Monitor network data for uncommon data flows. Processes utilizing the network that do not normally have network communication or have never been seen before are suspicious.</td>
  </tr>
  <tr>
    <td>DS0040</td>
    <td>[Operational Databases](https://attack.mitre.org/datasources/DS0040/)</td>
    <td>[Device Alarm](https://attack.mitre.org/datasources/DS0040/#Device%20Alarm)</td>
    <td>Monitor asset logs for alarms or other information the adversary is unable to directly suppress. Relevant alarms include those from a loss of communications due to Adversary-in-the-Middle activity.</td>
  </tr>
</table>



&nbsp;

# References
1. [Defending Marine Ships against Ethernet based Cyberattacks. Retrieved 01JUL2024.](https://ieeexplore.ieee.org/document/10179830)
2. [MITRE ATT&CK Mitigation: Filter Network Traffic. Retrieved 01JUL2024.](https://attack.mitre.org/mitigations/M0937/)
3. [MITRE ATT&CK Mitigation: Network Segmentation. Retrieved 01JUL2024.](https://attack.mitre.org/mitigations/M0930/)
4. [MITRE ATT&CK Detection: Application Log. Retrieved 01JUL2024.](https://attack.mitre.org/datasources/DS0015/)
5. [MITRE ATT&CK Detection: Application Log Content. Retrieved 01JUL2024.](https://attack.mitre.org/datasources/DS0015/#Application%20Log%20Content)
6. [MITRE ATT&CK Detection: Network Traffic. Retrieved 01JUL2024.](https://attack.mitre.org/datasources/DS0029/)
7. [MITRE ATT&CK Detection: Network Traffic Content. Retrieved 01JUL2024.](https://attack.mitre.org/datasources/DS0029/#Network%20Traffic%20Content)
8. [MITRE ATT&CK Detection: Network Traffic Flow. Retrieved 01JUL2024.](https://attack.mitre.org/datasources/DS0029/#Network%20Traffic%20Flow)
9. [MITRE ATT&CK Detection: Operational Databases. Retrieved 01JUL2024.](https://attack.mitre.org/datasources/DS0040//)
10. [MITRE ATT&CK Detection: Device Alarm. Retrieved 01JUL2024.](https://attack.mitre.org/datasources/DS0040/#Device%20Alarm)
