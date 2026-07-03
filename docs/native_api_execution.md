---
id: native_api_execution
sidebar_label: Native API Execution
---

# Native API Execution

# Summary

In the maritime sector, Native API Execution poses a significant cybersecurity threat, particularly within shipboard operational technology (OT) environments. [^1](https://redops.at/en/blog/direct-syscalls-vs-indirect-syscalls)Attackers can leverage low-level system API calls to execute unauthorized commands on vessel control systems, manipulate navigation, propulsion, power management, and disrupt port automation systems. [^2](https://dotnet.microsoft.com/zh-cn/learn/dotnet/what-is-dotnet-framework)[^3](https://developer.apple.com/library/archive/documentation/MacOSX/Conceptual/OSX_Technology_Overview/CocoaApplicationLayer/CocoaApplicationLayer.html#//apple_ref/doc/uid/TP40001067-CH274-SW1)

# Procedure Examples
| ID      | Name       | Description |
|:------------|:-----------|:--------------|
| ZD0007 | [Stuxnet](https://www.langner.com/wp-content/uploads/2017/03/to-kill-a-centrifuge.pdf) | The attack used system function blocks within PLC firmware to perform low-level system tasks, such as clock reads and memory operations. In maritime OT systems, a similar attack could abuse native system APIs on PLCs embedded in vessel automation systems. By leveraging these calls, an attacker could invisibly manipulate propulsion timing or alter engine monitoring data in Power Management Systems (PMS), without detection via HMI. |
| ZD0014 | [Triton](https://cloud.google.com/blog/topics/threat-intelligence/attackers-deploy-new-ics-attack-framework-triton/) | Triton’s payload executed low-level memory access and control instructions on SIS controllers. In maritime contexts, similar attacks could target Safety Instrumented Systems aboard ships, such as fire suppression or emergency engine shutdown PLCs. By abusing memory manipulation APIs, attackers could bypass protection logic, modify controller behavior, or disable critical safeguards in Vessel Management or PMS systems. |

&nbsp;

# Targeted Assets
| ID      | Asset       |
|:------------|:-----------|
| L0004 | [Supervisory Control and Data Acquisition (SCADA) Systems](/assets/supervisory_control_and_data_acquisition_systems) |
| L0012 | [Shipboard Remote Maintenance Software](/assets/shipboard_remote_maintenance_software) |
| L0015 | [Power Management Systems](power_management_systems) |
| L0011 | [Maritime Distress and Safety System]( maritime_distress_and_safety_system) |

&nbsp;

# Mitigations
| ID      | Mitigation       | Description |
|:------------|:-----------|:--------------|
| [R0010](https://cdn.standards.iteh.ai/samples/20175/7fb652270626406d9e2e83711b1fe5e4/IEC-61511-1-2016.pdf) | [SIS Engineering and Integration Review] |Ship operators and engineers should regularly review the engineering design and integration of Safety Instrumented Systems (SIS) — such as fire detection, emergency shutdown, and engine protection systems — to ensure they are implemented according to maritime safety standards and best practices (e.g. IEC 61511). Proper isolation from non-critical networks, strict access control, and periodic validation of SIS logic reduce the risk of unauthorized manipulation via low-level system APIs. |
| [M0938](https://attack.mitre.org/mitigations/M0938/) | [Execution Prevention] |Limit exposure of critical system APIs on shipboard control systems. Only authorized components should be allowed to invoke low-level system functions to prevent abuse.|
| [M0801](https://attack.mitre.org/mitigations/M0801/) | [Access Management] |Enforce access control in maritime networks using firewalls, authentication gateways, or jump hosts to restrict access to critical systems like SCADA or PMS.|
| [M0802](https://attack.mitre.org/mitigations/M0802/) | [Human User Authentication] | Require strong user authentication (e.g., password + token) before allowing sensitive operations such as PLC reprogramming or SIS override via system APIs.|

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
1. [Feichter, D. (2023, June 30). Direct Syscalls vs Indirect Syscalls. Retrieved March 18, 2025.](https://redops.at/en/blog/direct-syscalls-vs-indirect-syscalls)
2. [Microsoft. (n.d.). What is .NET Framework? Retrieved March 18, 2025.](https://dotnet.microsoft.com/zh-cn/learn/dotnet/what-is-dotnet-framework)
3. [Apple. (2015, September 16). Cocoa Application Layer. Retrieved March 18, 2025.](https://developer.apple.com/library/archive/documentation/MacOSX/Conceptual/OSX_Technology_Overview/CocoaApplicationLayer/CocoaApplicationLayer.html#//apple_ref/doc/uid/TP40001067-CH274-SW1)
4. [Ralph Langner. (2013, November). To Kill a Centrifuge: A Technical Analysis of What Stuxnet's Creators Tried to Achieve. Retrieved March 24, 2025.](https://ieeexplore.ieee.org/document/10220539)
5. [Blake Johnson, Dan Caban, Marina Krotofil, Dan Scali, Nathan Brubaker, Christopher Glyer 2017, December 14 Attackers Deploy New ICS Attack Framework TRITON and Cause Operational Disruption to Critical Infrastructure. Retrieved March 24, 2025.](https://www.langner.com/wp-content/uploads/2017/03/to-kill-a-centrifuge.pdf)
6. [ IEC 61511. Retrieved March 28, 2025.](https://cdn.standards.iteh.ai/samples/20175/7fb652270626406d9e2e83711b1fe5e4/IEC-61511-1-2016.pdf)
