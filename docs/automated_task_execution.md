---
id: automated_task_execution
sidebar_label: Automated Task Execution
---

# Automated Task Execution

# Summary

Automated Task Execution in maritime operational technology (OT) environments refers to adversaries leveraging PLC cyclic tasks, HMI automation routines, vessel automation scripts, or remote maintenance scheduling to maintain persistence within shipboard and port control systems. Attackers exploit these mechanisms to execute unauthorized commands on navigation control units, cargo management systems, power distribution networks, and propulsion control systems, allowing continuous and covert access to critical maritime OT infrastructure.[^1](https://www.ics-shipping.org/wp-content/uploads/2020/08/guidelines-on-cyber-security-onboard-ships-min.pdf)

# Procedure Examples
| ID      | Name       | Description |
|:------------|:-----------|:--------------|
| ZD00011 | [On Ladder Logic Bombs in Industrial Control Systems](https://arxiv.org/pdf/1702.05241) | The paper demonstrates how ladder logic bombs (LLBs) can be covertly embedded into PLC control logic to trigger malicious operations under specific conditions. In maritime OT environments, attackers could inject LLBs into PLCs managing Power Management Systems (PMS) or Vessel Management Systems (VMS), causing unauthorized behaviors such as delayed breaker trips, hidden actuator overrides, or false sensor reporting, all triggered without operator awareness. |


&nbsp;

# Targeted Assets
| ID      | Asset       |
|:------------|:-----------|
| L0004 | [Supervisory Control and Data Acquisition (SCADA) Systems](/assets/supervisory_control_and_data_acquisition_systems) |
| L0012 | [Shipboard Remote Maintenance Software](/assets/shipboard_remote_maintenance_software) |
| L0015 | [Power Management Systems](/assets/power_management_systems) |
| L0018 | [Vessel Performance Monitoring System]( /assets/vessel_performance_monitoring_system) |

&nbsp;

# Mitigations
| ID      | Mitigation       | Description |
|:------------|:-----------|:--------------|
| [R0011](https://www.sciencedirect.com/science/article/pii/S1874548213000243) | [Network-based Countermeasures] |Deploy IDS/IPS in the ship's local area network (VLAN) to monitor the communication traffic between the SCADA, PMS or remote maintenance system and the PLC. If unauthorized logic uploads, programming commands or data flow anomalies (such as ladder diagram injection, online programming events) are detected, an alarm should be triggered immediately to prevent the logic bomb from being executed. |
| [M0805](https://attack.mitre.org/mitigations/M0805/) | [Network Intrusion Prevention] | Deploy deep protocol-aware IDS (such as Snort/Zeek that can identify EtherNet/IP and Modbus) in the ship network to perform real-time detection of logical uploads from PMS or SCADA.  |
| [R0012](https://arxiv.org/pdf/1702.05241) | [Centralized Logic Store ] |Establish a central PLC logic version library for key ship control systems (such as PMS, VMS, and thrust systems). By regularly downloading the current running logic from the PLC and comparing it with the golden version, it can automatically detect whether it has been illegally modified or embedded with malicious ladder logic (such as timing triggers and sensor condition camouflage logic).|
| [M0807](https://attack.mitre.org/mitigations/M0807/) | [Unauthorized Command Prevention ] |  The PLC program is periodically pulled through the ship's remote maintenance system, and the differences are automatically compared with the central version (which can be combined with hash verification, rule comparison, etc.), and the logic is isolated or reset when an abnormality is found.  |

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
    <td>FL0002</td>
    <td>[Network Traffic Logs](/detections/network_traffic_logs)</td>
    <td>Encrypted Channel Communications</td>
    <td>In maritime OT networks, encrypted communications between engineering workstations and SIS (e.g., fire detection or ESD systems) should be continuously monitored. Abnormal command sequences or unexpected connection attempts—especially using custom protocols or uncommon timing—may indicate attempts to subvert safety logic or inject native API commands.</td>
  </tr>
   <tr>
    <td>FL0004</td>
    <td>[Engineering Workstation Actions](/detections/engineering_workstation_actions)</td>
    <td>Configuration Changes</td>
    <td>Configuration logs on marine engineering workstations (e.g., SCADA or PMS terminals) should be monitored for unauthorized modifications—such as changes to safety system logic, firewall rules, or startup scripts. These could signal that an attacker is attempting to alter system behavior through low-level API execution or malicious configuration injection.</td>
  </tr>
</table>

##

# References
1. [File Integrity Monitoring Best Practices. Retrieved March 23, 2025.](https://www.netwrix.com/security_best_practices_and_file_integrity_monitoring.html)
2. [Event ID 4663: An attempt was made to access an object. Retrieved March 23, 2025.](https://learn.microsoft.com/en-us/previous-versions/windows/it-pro/windows-10/security/threat-protection/auditing/event-4663)
3. [Procedure Examples: Port Antwerp Cyberattack. Retrieved March 23, 2025.](https://www.europol.europa.eu/sites/default/files/documents/cyberbits_04_ocean13.pdf)
4. [On Ladder Logic Bombs in Industrial Control Systems. Retrieved March 24, 2025.](https://arxiv.org/pdf/1702.05241)
5. [THE GUIDELINES ON CYBER SECURITY ONBOARD SHIPS. Retrieved March 25, 2025.](https://www.ics-shipping.org/wp-content/uploads/2020/08/guidelines-on-cyber-security-onboard-ships-min.pdf)



