---
sidebar_label: 'Sensor & Actuator Manipulation'
sidebar_position: 57
---

# Sensor & Actuator Manipulation

# Summary
Adversaries may exploit sensor and actuator systems in Operational Technology (OT) environments to disrupt critical operations, compromise safety measures, and influence decision-making. This could be achieved through various methods such as tampering with sensor readings, manipulating actuator commands, or even creating phantom operations in the system. Such manipulations can cause operational anomalies, misdirect resources, or lead to incorrect strategic decisions. The impact of these actions can be significant, given the pivotal role of sensors and actuators in maintaining the efficiency, safety, and reliability of OT systems.


# Procedure Examples
| ID      | Name       | Description |
|:------------|:-----------|:--------------|
| R0009 | [SWaT: a water treatment testbed for research and training on ICS security](https://ieeexplore.ieee.org/abstract/document/7469060) | The "SWaT: A Water Treatment Testbed for Research and Training on ICS Security" study by Mathur and Tippenhauer (2016) demonstrated that manipulating sensors and actuators could disrupt water treatment operations. Similarly, maritime ships, which rely on sensors and actuators for navigation, engine control, and safety, are vulnerable to comparable attacks. For instance, altering GPS data or engine sensors could mislead operators, leading to severe consequences. |

# Targeted Assets
| ID      | Asset       |
|:------------|:--------|
| A0018 | Sensors & Actuators |

&nbsp;

# Mitigations
| ID      | Mitigation       | Description |
|:------------|:-----------|:--------------|
| M0930 | [Network Segmentation](https://attack.mitre.org/mitigations/M0930/) | Segment operational assets and their management devices based on their functional role within the process. Enabling more strict isolation to more critical control and operational information within the control environment. The use of Ethernet-based ring topology (Device Level Ring protocol) to ensure redundancy and fault tolerance in communication links. This helps in mitigating the risk of single-point failures​|
| M0801 | [Access Management](https://attack.mitre.org/mitigations/M0801/) | All devices or systems changes, including all administrative functions, should require authentication. Consider using access management technologies to enforce authorization on all management interface access attempts, especially when the device does not inherently provide strong authentication and authorization functions. ​|

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
    <td rowspan='3'>DS1008</td>
    <td rowspan='3'>Sensors</td>
    <td>Sensor Readings</td>
    <td>Process Invariant Detection leverages rules based on physical laws governing system behavior to identify anomalies. By continuously monitoring data from sensors that track parameters like pressure, flow rate, water level, and chemical concentration, this method ensures that these physical conditions remain within expected bounds. Deviations from these invariants, such as abnormal pressure drops across filters, indicate potential tampering or faults in sensor data, enabling early detection of cyber attacks or system malfunctions.</td>
  </tr>
  <tr>
    <td>Tag Values</td>
    <td>Specific memory locations in the PLCs where sensor data is stored. Each sensor has a corresponding tag that can be accessed across the system.</td>
  </tr>
  <tr>
    <td>Historical Data</td>
    <td>Stored sensor data over time used for establishing baselines and identifying deviations from normal operating conditions.</td>
  </tr>

  <tr>
    <td rowspan='4'>DS1009</td>
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

</table>

&nbsp;

# References
1. [SWaT: a water treatment testbed for research and training on ICS security. Retrieved 01JUL2024.](https://ieeexplore.ieee.org/abstract/document/7469060)
2. [MITRE ATT&CK Mitigations: Network Segmentation. Retrieved 01JUL2024.](https://attack.mitre.org/mitigations/M0930/)
3. [MITRE ATT&CK Mitigations: Access Management. Retrieved 01JUL2024.](https://attack.mitre.org/mitigations/M0801/)