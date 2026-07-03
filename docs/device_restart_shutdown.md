---
sidebar_label: 'Device Restart/Shutdown'
sidebar_position: 34
---

# Device Restart/Shutdown

# Summary
Adversaries may forcibly restart or shut down a system in a maritime environment to disrupt and potentially negatively impact vessel operations. Methods of system restart and shutdown exist in some maritime systems as built-in, standard functionalities. These functionalities can be executed using interactive system web interfaces, CLIs, and network protocol commands.

Unexpected restart or shutdown of maritime systems may prevent expected response functions from occurring during critical states.

A system restart can also be a sign of malicious system modifications, as many updates require a shutdown in order to take effect.


# Procedure Examples
| ID      | Name       | Description |
|:------------|:-----------|:--------------|
| C0028 | [2015 Ukraine Electric Power Attack](https://attack.mitre.org/campaigns/C0028) | During the 2015 Ukraine Electric Power Attack, Sandworm Team scheduled the uninterruptable power supplies (UPS) to shutdown data and telephone servers via the UPS management interface. |
| S0604 | [Industroyer](https://attack.mitre.org/software/S0604/) | The Industroyer SIPROTEC DoS module exploits the CVE-2015-5374 vulnerability in order to render a Siemens SIPROTEC device unresponsive. While the vulnerability does not directly cause the restart or shutdown of the device, the device must be restarted manually before it can resume operations. |


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
| M0801 | [Access Management](https://attack.mitre.org/mitigations/M0801/) | All devices or systems changes, including all administrative functions, should require authentication. Consider using access management technologies to enforce authorization on all management interface access attempts, especially when the device does not inherently provide strong authentication and authorization functions. |
| M0800 | [Authorization Enforcement](https://attack.mitre.org/mitigations/M0800/) | All field controllers should restrict the modification of programs to only certain users (e.g., engineers, field technician), preferably through implementing a role-based access mechanism. |
| M0802 | [Communication Authenticity](https://attack.mitre.org/mitigations/M0802/) | Protocols used for control functions should provide authenticity through MAC functions or digital signatures. If not, utilize bump-in-the-wire devices or VPNs to enforce communication authenticity between devices that are not capable of supporting this (e.g., legacy controllers, RTUs). |
| M0942 | [Disable or Remove Feature or Program](https://attack.mitre.org/mitigations/M0942/) | Ensure remote commands that enable device shutdown are disabled if they are not necessary. Examples include DNP3's 0x0D function code or unnecessary device management functions. |
| M0937 | [Filter Network Traffic](https://attack.mitre.org/mitigations/M0937/) | Application denylists can be used to block automation protocol functions used to initiate device shutdowns or restarts, such as DNP3's 0x0D function code, or vulnerabilities that can be used to trigger device shutdowns (e.g., CVE-2014-9195, CVE-2015-5374). |
| M0804 | [Human User Authentication](https://attack.mitre.org/mitigations/M0804/) | All field controllers should require users to authenticate for all remote or local management sessions. The authentication mechanisms should also support Account Use Policies, Password Policies, and User Account Management. |
| M0807 | [Network Allowlists](https://attack.mitre.org/mitigations/M0807/) | Use host-based allowlists to prevent devices from accepting connections from unauthorized systems. For example, allowlists can be used to ensure devices can only connect with master stations or known management/engineering workstations. |
| M0930 | [Network Segmentation](https://attack.mitre.org/mitigations/M0930/) | Segment operational network and systems to restrict access to critical system functions to predetermined management systems. |
| M0813 | [Software Process and Device Authentication](https://attack.mitre.org/mitigations/M0813/) | Authenticate connections from software and devices to prevent unauthorized systems from accessing protected management functions. |


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
    <td >DS0015</td>
    <td>[Application Log](https://attack.mitre.org/datasources/DS0015/)</td>
    <td>[Application Log Content](https://attack.mitre.org/datasources/DS0015/#Application%20Log%20Content)</td>
    <td>Device restarts and shutdowns may be observable in device application logs. Monitor for unexpected device restarts or shutdowns.</td>
  </tr>
  <tr>
    <td rowspan='2'>DS0029</td>
    <td rowspan='2'>[Network Traffic](https://attack.mitre.org/datasources/DS0029/)</td>
    <td>[Network Traffic Content](https://attack.mitre.org/datasources/DS0029/#Network%20Traffic%20Content)</td>
    <td>Monitor ICS automation protocols for functions that restart or shutdown a device. Commands to restart or shutdown devices may also be observable in traditional IT management protocols.</td>
  </tr>
  <tr>
    <td>[Network Traffic Flow](https://attack.mitre.org/datasources/DS0029/#Network%20Traffic%20Flow)</td>
    <td>Monitor for a loss of network communications, which may indicate a device has been shutdown or restarted. This will not directly detect the technique’s execution, but instead may provide additional evidence that the technique has been used and may complement other detections.</td>
  </tr>
  <tr>
    <td>DS0040</td>
    <td>[Operational Databases](https://attack.mitre.org/datasources/DS0040/)</td>
    <td>[Process History/Live Data](https://attack.mitre.org/datasources/DS0040/#Process%20History/Live%20Data)</td>
    <td>Devices may produce alarms about restarts or shutdowns. Monitor for unexpected device restarts or shutdowns.</td>
  </tr>
</table>

&nbsp;

# References
1. [MITRE ATT&CK Technique: Denial of Service. Retrieved 01JUL2024.](https://attack.mitre.org/techniques/T0814/)
2. [Procedure Examples: 2015 Ukraine Electric Power Attack. Retrieved 01JUL2024.](https://attack.mitre.org/campaigns/C0028/)
3. [Procedure Examples: Industroyer. Retrieved 01JUL2024.](https://attack.mitre.org/software/S0604/)
4. [Targeted Assets: Workstation. Retrieved 01JUL2024.](https://attack.mitre.org/assets/A0001/)
5. [Targeted Assets: Human-Machine Interface (HMI). Retrieved 01JUL2024.](https://attack.mitre.org/assets/A0002/)
6. [Targeted Assets: Programmable Logic Controller(PLC). Retrieved 01JUL2024.](https://attack.mitre.org/assets/A0003/)
7. [Targeted Assets: Remote Terminal Unit (RTU). Retrieved 01JUL2024.](https://attack.mitre.org/assets/A0004/)
8. [Targeted Assets: Intelligent Electronic Device (IED). Retrieved 01JUL2024.](https://attack.mitre.org/assets/A0005/)
9. [Targeted Assets: Data Historian. Retrieved 01JUL2024.](https://attack.mitre.org/assets/A0006/)
10. [Targeted Assets: Control Server. Retrieved 01JUL2024.](https://attack.mitre.org/assets/A0007/)
11. [Targeted Assets: Application Server. Retrieved 01JUL2024.](https://attack.mitre.org/assets/A0008/)
12. [Targeted Assets: Data Gateway. Retrieved 01JUL2024.](https://attack.mitre.org/assets/A0009/)
13. [Targeted Assets: Safety Controller. Retrieved 01JUL2024.](https://attack.mitre.org/assets/A0010/)
14. [Targeted Assets: Virtual Private Network (VPN) Server. Retrieved 01JUL2024.](https://attack.mitre.org/assets/A0011/)
15. [Targeted Assets: Jump Host. Retrieved 01JUL2024.](https://attack.mitre.org/assets/A0012/)
16. [Targeted Assets: Field I/O. Retrieved 01JUL2024.](https://attack.mitre.org/assets/A0013/)
17. [Targeted Assets: Routers. Retrieved 01JUL2024.](https://attack.mitre.org/assets/A0014/)
18. [MITRE ATT&CK Mitigation: Access Management. Retrieved 01JUL2024.](https://attack.mitre.org/mitigations/M0801/)
19. [MITRE ATT&CK Mitigation: Authorization Enforcement. Retrieved 01JUL2024.](https://attack.mitre.org/mitigations/M0800)
20. [MITRE ATT&CK Mitigation: Communication Authenticity. Retrieved 01JUL2024.](https://attack.mitre.org/mitigations/M0802/)
21. [MITRE ATT&CK Mitigation: Disable or Remove Feature or Program. Retrieved 01JUL2024.](https://attack.mitre.org/mitigations/M0942)
22. [MITRE ATT&CK Mitigation: Filter Network Traffic. Retrieved 01JUL2024.](https://attack.mitre.org/mitigations/M0937/)
23. [MITRE ATT&CK Mitigation: Human User Authentication. Retrieved 01JUL2024.](https://attack.mitre.org/mitigations/M0804/)
24. [MITRE ATT&CK Mitigation: Network Allowlists. Retrieved 01JUL2024.](https://attack.mitre.org/mitigations/M0807/)
25. [MITRE ATT&CK Mitigation: Network Segmentation. Retrieved 01JUL2024.](https://attack.mitre.org/mitigations/M0930/)
26. [MITRE ATT&CK Mitigation: Software Process and Device Authentication. Retrieved 01JUL2024.](https://attack.mitre.org/mitigations/M0813/)
27. [MITRE ATT&CK Detection: Application Log. Retrieved 01JUL2024.](https://attack.mitre.org/datasources/DS0015/)
28. [MITRE ATT&CK Detection: Application Log Content. Retrieved 01JUL2024.](https://attack.mitre.org/datasources/DS0015/#Application%20Log%20Content)
29. [MITRE ATT&CK Detection: Network Traffic](https://attack.mitre.org/datasources/DS0029/)
30. [MITRE ATT&CK Detection: Network Traffic Content](https://attack.mitre.org/datasources/DS0029/#Network%20Traffic%20Content)
31. [MITRE ATT&CK Detection: Network Traffic Flow](https://attack.mitre.org/datasources/DS0029/#Network%20Traffic%20Flow)
32. [MITRE ATT&CK Detection: Operational Databases. Retrieved 01JUL2024.](https://attack.mitre.org/datasources/DS0040/)
33. [MITRE ATT&CK Detection: Device Alarm. Retrieved 01JUL2024.](https://attack.mitre.org/datasources/DS0040/#Device%20Alarm)
