---
id: hardcoded_or_default_credentials
sidebar_label: Hardcoded or Default Credentials
---

# Hardcoded or Default Credentials

# Summary

Hardcoded or Default Credentials refer to pre-configured administrative usernames and passwords that are embedded in maritime equipment OT during manufacturing. These credentials are often not changed or removed after the deployment, creating a persistent configuration weakness. If an attacker obtains low-privilege access to the system, the presence of default or hardcoded accounts can enable privilege escalation to administrative levels. Many shipboard control systems, including navigation platforms such as ECDIS and programmable controllers such as PLC, come with factory-default passwords or undocumented maintenance accounts. Without proper reconfiguration during installation or commissioning, these default credentials may remain active in operational environments. Attackers can exploit this oversight by logging into the system using known credentials to gain administrator-level control. This issue is considered a configuration flaw rather than a software vulnerability. However, it represents a notable security risk as it provides a direct path from user-level access to full system control.

# Procedure Examples
| ID      | Name       | Description |
|:------------|:-----------|:--------------|
| ZD00012      | [Cyberattack Models for Ship Equipment](https://www.mdpi.com/1424-8220/22/5/1860#:~:text=Some%20ECDISs%20use%20a%20factory,Escalation%2C%20and%20Initial%20Access%20phases) |The researchers logged into the system using default credentials and found that they were able to escalate privileges.Inside the ship's server room, the researchers used the default Wi-Fi to access the network and later found that they could use a MOXA IP-to-Serial converter to access the cargo management system and CCTV surveillance management system. |

&nbsp;

# Targeted Assets
| ID      | Asset       |
|:------------|:-----------|
| L0013 | [Maritime Satellite Communications](/assets/maritime_satellite_communications) |
| L0001 | [Remote Access Gateways](/assets/remote_access_gateways) |
| L0020 | [Cargo Loading Management System]( /assets/cargo_loading_management_system) |

&nbsp;

# Mitigations
| ID      | Mitigation       | Description |
|:------------|:-----------|:--------------|
| [R0002](https://www.mdpi.com/1424-8220/22/5/1860#:~:text=Some%20ECDISs%20use%20a%20factory,Escalation%2C%20and%20Initial%20Access%20phases) | [Changing Default Credentials on ECDIS Systems] | Ship operators should change all factory default passwords upon deployment. Enforce strong password policies to prevent easy guessing. |
| [R0003](https://www.mdpi.com/1424-8220/22/5/1860#:~:text=Some%20ECDISs%20use%20a%20factory,Escalation%2C%20and%20Initial%20Access%20phases) | [Implementing RBAC and Least Privilege] |Role-Based Access Control (RBAC) should be applied to restrict account permissions. Least Privilege Principle must be enforced to prevent unnecessary admin access. |
| [R0004](https://www.mdpi.com/1424-8220/22/5/1860#:~:text=Some%20ECDISs%20use%20a%20factory,Escalation%2C%20and%20Initial%20Access%20phases) | [ Regular Firmware Updates ] | Regularly update firmware to remove hardcoded credentials. Ensure patches from equipment manufacturers are applied to mitigate known vulnerabilities. |
| [R0005](https://www.mdpi.com/1424-8220/22/5/1860#:~:text=Some%20ECDISs%20use%20a%20factory,Escalation%2C%20and%20Initial%20Access%20phases) | [Network Segmentation] | Segment IT and OT networks to prevent credential abuse from spreading. Deploy firewalls and intrusion detection systems (IDS) to monitor credential misuse. |

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
    <td >FL0001</td>
    <td>[Authentication Logs](/detections/authentication_logs)</td>
    <td>User Login Events</td>
    <td> Monitor shipboard authentication logs for anomalous login activity that may indicate the use of hardcoded or default credentials. In maritime OT environments, repeated login attempts using default usernames (e.g., admin, root) on systems such as vessel satellite communication terminals, cargo loading systems, or remote maintenance platforms can signify unauthorized access attempts. Flag failed login bursts, unusual login times, and access from new IPs to detect credential abuse in vessel management and communication systems.</td>
  </tr>
   <tr>
    <td>FL0004</td>
    <td>[Engineering Workstation Actions](/detections/engineering_workstation_actions)</td>
    <td>Configuration Changes</td>
    <td>Perform scheduled audits of system configuration to identify unchanged factory-default or hardcoded credentials. In maritime OT, configuration files on devices such as PLCs, HMIs, and marine satellite terminals should be monitored for credential policy enforcement. Alerts should be generated when default usernames or unchanged initial passwords remain configured after deployment, especially for assets accessible via remote gateways or exposed to shore-side management systems.</td>
  </tr>
  <tr>
    <td>FL0002</td>
    <td>[Network Traffic Logs](/detections/network_traffic_logs)</td>
    <td>Encrypted Channel Communications</td>
    <td>Deploy intrusion detection systems (IDS) on maritime operational networks to inspect traffic for patterns consistent with brute-force or unauthorized login attempts. Monitor for excessive authentication attempts over protocols such as SSH, Telnet, HTTPS, or proprietary maintenance interfaces used by systems like Dualog, VSAT, and cargo management PLCs. Anomalous authentication traffic targeting known OT devices with factory-default ports and services should trigger alerts in the context of vessel control security.</td>
  </tr>
</table>

##

# References
1. [File Integrity Monitoring Best Practices. Retrieved March 23, 2025.](https://www.netwrix.com/security_best_practices_and_file_integrity_monitoring.html)
2. [Event ID 4663: An attempt was made to access an object. Retrieved March 23, 2025.](https://learn.microsoft.com/en-us/previous-versions/windows/it-pro/windows-10/security/threat-protection/auditing/event-4663)
3. [Procedure Examples: Port Antwerp Cyberattack. Retrieved March 23, 2025.](https://www.europol.europa.eu/sites/default/files/documents/cyberbits_04_ocean13.pdf)
4. [On Ladder Logic Bombs in Industrial Control Systems. Retrieved March 24, 2025.](https://arxiv.org/pdf/1702.05241)
5. [THE GUIDELINES ON CYBER SECURITY ONBOARD SHIPS. Retrieved March 25, 2025.](https://www.ics-shipping.org/wp-content/uploads/2020/08/guidelines-on-cyber-security-onboard-ships-min.pdf)


