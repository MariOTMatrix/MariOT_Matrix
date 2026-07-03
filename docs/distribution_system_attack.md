---
sidebar_label: 'Distribution System Attack'
sidebar_position: 59
---

# Distribution System Attack

# Summary
Adversaries may target maritime distribution systems by exploiting vulnerabilities in communication and control networks. This could involve attacking systems that manage power distribution on ships or ports, leading to potential network blockades or power outages. Such attacks may include false data injection, denial of service and replay attacks.

# Procedure Examples
| ID      | Name       | Description |
|:------------|:-----------|:--------------|
| R0007 | [A narrative perspective of island detection methods under the lens of cyber‑attack in data‑driven smart grid](https://jesit.springeropen.com/articles/10.1186/s43067-023-00083-4#:~:text=Remote%20islanding%20detection%20method%20utilizes,to%20isolate%20the%20DG%20systems.) | An adversary can target a maritime power distribution system by manipulating the control systems that manage power distribution. They can disrupt the operation of distribution transformers and switchgear, leading to voltage and power instability, and deceive control systems into unnecessary load shedding. Additionally, tampering with circuit breakers can desynchronize distribution networks, causing overall grid instability and delays in power restoration. |

&nbsp;

# Targeted Assets
| ID      | Asset       |
|:------------|:--------|
| A0019 | Power Systems |

&nbsp;

# Mitigations
| ID      | Mitigation       | Description |
|:------------|:-----------|:--------------|
| M0801 | [Access Management](https://attack.mitre.org/mitigations/M0801/) | All devices or systems changes, including all administrative functions, should require authentication. Consider using access management technologies to enforce authorization on all management interface access attempts, especially when the device does not inherently provide strong authentication and authorization functions. ​|
| M0931 | [Network Intrusion Prevention](https://attack.mitre.org/mitigations/M0931/) | Network intrusion detection and prevention systems that can identify traffic patterns indicative of AiTM activity can be used to mitigate activity at the network level. ​|

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
    <td rowspan='4'>DS1001</td>
    <td rowspan='4'>Real-time Sensor Data</td>
    <td>Historical Data</td>
    <td>Anomaly Detection Systems identify discrepancies between expected and actual sensor readings by collecting and analyzing data from various sensors. These systems monitor for abnormal patterns and deviations from established baselines, which can indicate potential cyber attacks or system malfunctions. By continuously comparing real-time data to expected values, anomaly detection systems provide early warning of unauthorized activities or operational issues.</td>
  </tr>
  <tr>
    <td>PLC Communication Data</td>
    <td>Data exchanged between PLCs, which may include control commands and status updates.</td>
  </tr>
  <tr>
    <td>Historical Data Logs</td>
    <td>Records of sensor readings, actuator states, and system events stored in the historian for retrospective analysis.</td>
  </tr>
  <tr>
    <td>Network Traffic Data</td>
    <td>Data packets transmitted over the network, which can be analyzed for unusual patterns or unauthorized activities.</td>
  </tr>

  <tr>
    <td rowspan='4'>DS1003</td>
    <td rowspan='4'>Sensors and Measurement Devices</td>
    <td>Voltage Levels</td>
    <td>Measured at various points in the distribution network to detect any deviations from the norm.</td>
  </tr>
  <tr>
    <td>Current Levels</td>
    <td>Monitored to ensure that current levels are within safe limits and to identify any unusual patterns that might indicate a problem.</td>
  </tr>
  <tr>
    <td>Frequency</td>
    <td>Constantly checked to ensure that the system frequency remains stable and within acceptable limits.</td>
  </tr>
  <tr>
    <td>Power Flow</td>
    <td>Measured to track the distribution of power across the network and identify any discrepancies or inefficiencies.</td>
  </tr>


</table>

&nbsp;

# References
1. [A narrative perspective of island detection methods under the lens of cyber‑attack in data‑driven smart grid. Retrieved 01JUL2024.](https://jesit.springeropen.com/articles/10.1186/s43067-023-00083-4#:~:text=Remote%20islanding%20detection%20method%20utilizes,to%20isolate%20the%20DG%20systems.)
2. [EPIC: An Electric Power Testbed for Research and Training in Cyber Physical Systems Security. Retrieved 01JUL2024.](https://www.researchgate.net/publication/330758995_EPIC_An_Electric_Power_Testbed_for_Research_and_Training_in_Cyber_Physical_Systems_Security_17th_International_Workshop_IWDW_2018_Jeju_Island_Korea_October_22-24_2018_Proceedings)
3. [MITRE ATT&CK Mitigations: Access Management. Retrieved 01JUL2024.](https://attack.mitre.org/mitigations/M0801/)
4. [MITRE ATT&CK Mitigations: Network Intrusion Prevention. Retrieved 01JUL2024.](https://attack.mitre.org/mitigations/M0931/)

