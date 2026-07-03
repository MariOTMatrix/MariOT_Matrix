---
sidebar_label: 'False Data Injection'
sidebar_position: 55
---

# False Data Injection

# Summary
Adversary may execute a False Data Injection (FDI) attack, compromising the integrity of a system by introducing incorrect data. The intention is to mislead or disrupt the system’s standard operations. By manipulating system behaviors and misleading users, the adversary can weaken security measures, leading to erroneous decisions and malfunctions. For example, in a smart grid, an FDI attack could disrupt power distribution.

This attack technique is a serious threat to any system, with the potential to cause significant consequences. In critical infrastructure systems like smart grids, the impact can be widespread and severe.


# Procedure Examples
| ID      | Name       | Description |
|:------------|:-----------|:--------------|
| R0007 | [EPIC: An Electric Power Testbed for Research and Training in Cyber Physical Systems Security](https://www.researchgate.net/publication/328900639_EPIC_An_Electric_Power_Testbed_for_Research_and_Training_in_Cyber_Physical_Systems_Security) | Four potential attack scenarios targeting EPIC are outlined. Two of these scenarios, specifically a power supply interruption attack and a physical damage attack, have been demonstrated on EPIC, along with possible mitigation strategies. Despite the scarcity of literature on cyberattacks on maritime ship power systems, the attack methodology remains relevant for modern ship systems. |
| R0008 | [A narrative perspective of island detection methods under the lens of cyber-attack in data-driven smart grid](https://jesit.springeropen.com/articles/10.1186/s43067-023-00083-4) | By injecting false data, an adversary can destabilize system operations and manipulate islanding detection. Altering the relay setting's threshold value can trigger false alarms, even in the absence of actual faults. This deceptive tactic can lead to incorrect islanding detection, potentially causing unnecessary load shedding and grid rescheduling. |

&nbsp;

# Targeted Assets
| ID      | Asset       |
|:------------|:-----------|
| A0002 | [Human-Machine Interface (HMI)](https://attack.mitre.org/assets/A0002/) |
| A0003 | [Programmable Logic Controller (PLC)](https://attack.mitre.org/assets/A0003/) |


&nbsp;


# Mitigations
| ID      | Mitigation       | Description |
|:------------|:-----------|:--------------|
| M0937 | [Filter Network Traffic](https://attack.mitre.org/mitigations/M0937/) | Perform inline allowlisting of automation protocol commands to prevent devices from sending unauthorized command or reporting messages. Allow/denylist techniques need to be designed with sufficient accuracy to prevent the unintended blocking of valid reporting messages. |
| M0807 | [Network Allowlists](https://attack.mitre.org/mitigations/M0807/) | Use host-based allowlists to prevent devices from accepting connections from unauthorized systems. For example, allowlists can be used to ensure devices can only connect with master stations or known management/engineering workstations. |
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
    <td>DS1006</td>
    <td>Operation Data of maritime ship</td>
    <td>Historical Data & Real-Time Sensor Data</td>
    <td>Monitors real-time sensor data and compare to predicted values via machine learning techniques. The system is pre-trained on historical data to recognize patterns of normal operation. Any deviation of values is flagged as a potential attack.</td>
  </tr>

</table>

&nbsp;


# References
1. [EPIC: An Electric Power Testbed for Research and Training in Cyber Physical Systems Security. Retrieved 01JUL2024.](https://www.researchgate.net/publication/330758995_EPIC_An_Electric_Power_Testbed_for_Research_and_Training_in_Cyber_Physical_Systems_Security_17th_International_Workshop_IWDW_2018_Jeju_Island_Korea_October_22-24_2018_Proceedings)
2. [A narrative perspective of island detection methods under the lens of cyber-attack in data-driven smart grid. Retrieved 01JUL2024.](https://jesit.springeropen.com/articles/10.1186/s43067-023-00083-4)
3. [Targeted Assets: Human-Machine Interface (HMI). Retrieved 01JUL2024.](https://attack.mitre.org/assets/A0002/)
4. [Targeted Assets: Programmable Logic Controller(PLC). Retrieved 01JUL2024.](https://attack.mitre.org/assets/A0003/)
5. [MITRE ATT&CK Mitigation: Filter Network Traffic. Retrieved 01JUL2024.](https://attack.mitre.org/mitigations/M0937/)
6. [MITRE ATT&CK Mitigation: Network Allowlists. Retrieved 01JUL2024.](https://attack.mitre.org/mitigations/M0807/)
7. [MITRE ATT&CK Mitigation: Network Segmentation. Retrieved 01JUL2024.](https://attack.mitre.org/mitigations/M0930/)
8. [MITRE ATT&CK Detection: Application Log. Retrieved 01JUL2024.](https://attack.mitre.org/datasources/DS0015/)
9. [MITRE ATT&CK Detection: Application Log Content. Retrieved 01JUL2024.](https://attack.mitre.org/datasources/DS0015/#Application%20Log%20Content)
10. [MITRE ATT&CK Detection: Network Traffic. Retrieved 01JUL2024.](https://attack.mitre.org/datasources/DS0029/)
11. [MITRE ATT&CK Detection: Network Traffic Content. Retrieved 01JUL2024.](https://attack.mitre.org/datasources/DS0029/#Network%20Traffic%20Content)
12. [MITRE ATT&CK Detection: Network Traffic Flow. Retrieved 01JUL2024.](https://attack.mitre.org/datasources/DS0029/#Network%20Traffic%20Flow)
13. [MITRE ATT&CK Detection: Operational Databases. Retrieved 01JUL2024.](https://attack.mitre.org/datasources/DS0040//)
14. [MITRE ATT&CK Detection: Device Alarm. Retrieved 01JUL2024.](https://attack.mitre.org/datasources/DS0040/#Device%20Alarm)