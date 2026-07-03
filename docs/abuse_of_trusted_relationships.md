---
id: abuse_of_trusted_relationships
sidebar_label: 'Abuse of Trusted Relationships'
sidebar_position: 0
---

# Abuse of Trusted Relationships

# Summary

Abuse of Trusted Relationships in maritime OT environments refers to scenarios where attackers manipulate or impersonate third parties trusted by vessel systems—such as shore-based IT support staff, remote diagnostics providers, maintenance technicians, equipment vendors, or system integrators—to gain unauthorized access, perform malicious actions, or further infiltrate shipboard control networks. These attacks often exploit existing remote access privileges or leverage social engineering tactics to impersonate trusted entities and bypass perimeter defenses.[^1](https://www.cisa.gov/APTs-Targeting-IT-Service-Provider-Customers) In maritime operations, the high level of trust between shore and vessel systems, combined with the reliance on remote management, makes this technique especially damaging. Successful exploitation may impact critical systems such as navigation and onboard SCADA control systems.[^2](https://support.microsoft.com/en-us/topic/partners-offer-delegated-administration-26530dc0-ebba-415b-86b1-b55bc06b073e?ui=en-us&rs=en-us&ad=us)

# Procedure Examples
| ID      | Name       | Description |
|:------------|:-----------|:--------------|
| P0001      | [Port Antwerp Cyberattack](https://www.europol.europa.eu/sites/default/files/documents/cyberbits_04_ocean13.pdf) | The adversary (drug cartel) had hijacked its container management system. In fact, the port’s computer network had been spied on since June 2011, when the network was reportedly infiltrated by malware, specifically a keylogger (which allowed the adversary to record the keystrokes used by the loading / unloading operators, and thereby obtain usernames and passwords).[^3](https://www.europol.europa.eu/sites/default/files/documents/cyberbits_04_ocean13.pdf) |
| ZD0001      | [SolarWinds Compromise](https://attack.mitre.org/campaigns/C0024/) | In 2020, attackers compromised SolarWinds, a network management software company, and planted malicious code in its Orion software update. SolarWinds' customers trusted the company and downloaded the official update, resulting in 18,000+ businesses and government agencies being affected. Victims include the U.S. Department of the Treasury, Department of Homeland Security, Microsoft, Cisco, Intel, and others. Attackers abused customer trust in SolarWinds vendors to allow malicious code to spread through legitimate software updates. |

&nbsp;

# Targeted Assets
| ID      | Asset       |
|:------------|:-----------|
| L0001 | [Remote Access Gateways](/assets/remote_access_gateways) |
| L0002 | [Third-Party IT and OT Support Systems](/assets/third-party_it_and_ot_support_systems) |
| L0004 | [Supervisory Control and Data Acquisition (SCADA) Systems](/assets/supervisory_control_and_data_acquisition_systems) |


&nbsp;

# Mitigations
| ID      | Mitigation       | Description |
|:------------|:-----------|:--------------|
| [M1032](https://attack.mitre.org/mitigations/M1032/) | Multi-factor Authentication |Enable MFA on all remote access paths (e.g., VPNs, crew shore access, remote diagnostics systems). This is critical when access to vessel systems depends on trust relationships with shore-side IT networks or third-party service providers. |
| [M1018](https://attack.mitre.org/mitigations/M1018/) | User Account Management | Implement strict account controls for third-party vendors, contractors, and partners. Enforce least privilege access and remove inactive accounts to minimize exposure. |
| [M1026](https://attack.mitre.org/mitigations/M1026/) | Privileged Account Management | Limit the use of privileged accounts for external vendors and partners. Implement just-in-time (JIT) access for maintenance activities instead of always-on access. |
| [M1030](https://attack.mitre.org/mitigations/M1030/) | Network Segmentation |Segment networks between shipboard IT systems (e.g., crew internet or email services) and OT systems (e.g., SCADA, PMS, navigation control). Without segmentation, attackers compromising trusted IT systems can laterally move into critical control networks aboard the vessel. |


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
    <td> Monitor for anomalous logins from trusted third parties (e.g., vendors, contractors, or partners), including off-hours access or login attempts from new locations.</td>
  </tr>
  <tr>
    <td>FL0002</td>
    <td>[Network Traffic Logs](/detections/network_traffic_logs)</td>
    <td>Network Flow Data</td>
    <td>Analyze network traffic patterns for unusual activity from third-party accounts, such as unexpected access to sensitive OT assets.</td>
  </tr>
   <tr>
    <td>FL0003</td>
    <td>[Engineering Workstation Actions](/detections/engineering_workstation_actions)</td>
    <td>Privileged command execution</td>
    <td>Detect abnormal actions by third-party privileged accounts, including privilege escalation, lateral movement, or access to restricted resources.</td>
  </tr>
</table>

##

# References
1. [CISA. (n.d.). APTs Targeting IT Service Provider Customers. Retrieved March 13, 2025.](https://www.cisa.gov/APTs-Targeting-IT-Service-Provider-Customers)
2. [Microsoft. (n.d.). Partners: Offer delegated administration. Retrieved March 13, 2025.](https://support.microsoft.com/en-us/topic/partners-offer-delegated-administration-26530dc0-ebba-415b-86b1-b55bc06b073e?ui=en-us&rs=en-us&ad=us)
3. [Procedure Examples: Port Antwerp Cyberattack Retrieved March 13, 2025.](https://www.europol.europa.eu/sites/default/files/documents/cyberbits_04_ocean13.pdf)

