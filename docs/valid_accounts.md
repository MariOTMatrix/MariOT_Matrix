---
sidebar_label: 'Valid Accounts'
sidebar_position: 19
---

# Valid Accounts

# Summary
Adversaries may steal the credentials of a specific crew member or service account using credential access techniques. In some cases, default credentials for maritime control system devices may be publicly available. Compromised credentials may be used to bypass access controls placed on various resources on ships and within the maritime network, and may even be used for persistent access to remote systems. Compromised and default credentials may also grant an adversary increased privilege to specific systems and devices or access to restricted areas of the maritime network. Adversaries may choose not to use malware or tools, in conjunction with the legitimate access those credentials provide, to make it harder to detect their presence or to control devices and send legitimate commands in an unintended way.

Adversaries may also create accounts, sometimes using predefined account names and passwords, to provide a means of backup access for persistence.

The overlap of credentials and permissions across a network of maritime systems is of concern because the adversary may be able to pivot across accounts and systems to reach a high level of access (i.e., domain or enterprise administrator) and possibly between the maritime enterprise and operational technology environments. Adversaries may be able to leverage valid credentials from one system to gain access to another system.


# Procedure Examples
| ID      | Name       | Description |
|:------------|:-----------|:--------------|
| C0028 | [2015 Ukraine Electric Power Attack](https://attack.mitre.org/campaigns/C0028/) | During the 2015 Ukraine Electric Power Attack, Sandworm Team overwrote the serial-to-ethernet gateways with custom firmware to make systems either disabled, shutdown, and/or unrecoverable. |
| C0025 | [2016 Ukraine Electric Power Attack](https://attack.mitre.org/campaigns/C0025/) | During the 2016 Ukraine Electric Power Attack, Sandworm Team used valid accounts to laterally move through VPN connections and dual-homed systems. |
| G1000 | [ALLANITE](https://attack.mitre.org/groups/G1000/) | ALLANITE utilized credentials collected through phishing and watering hole attacks. |
| S0089 | [BlackEnergy](https://attack.mitre.org/software/S0089/) | BlackEnergy utilizes valid user and administrator credentials, in addition to creating new administrator accounts to maintain presence. |
| S1045 | [INCONTROLLER](https://attack.mitre.org/software/S1045/) | INCONTROLLER can brute force password-based authentication to Schneider PLCs over the CODESYS protocol (UDP port 1740). <br/><br/> INCONTROLLER can perform brute force guessing of passwords to OPC UA servers using a predefined list of passwords. |
| G0049 | [OilRig](https://attack.mitre.org/groups/G0049/) | OilRig utilized stolen credentials to gain access to victim machines. |
| C0030 | [Triton Safety Instrumented System Attack](https://attack.mitre.org/campaigns/C0030/) | In the Triton Safety Instrumented System Attack, TEMP.Veles used valid credentials when laterally moving through RDP jump boxes into the ICS environment. |



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



&nbsp;

# Mitigations
| ID      | Mitigation       | Description |
|:------------|:-----------|:--------------|
| M0801 | [Access Management](https://attack.mitre.org/mitigations/M0801/) | All devices or systems changes, including all administrative functions, should require authentication. Consider using access management technologies to enforce authorization on all management interface access attempts, especially when the device does not inherently provide strong authentication and authorization functions. |
| M0936 | [Account Use Policies](https://attack.mitre.org/mitigations/M0936/) | Configure features related to account use like login attempt lockouts, specific login times, and password strength requirements as examples. Consider these features as they relate to assets which may impact safety and availability. |
| M0915 | [Active Directory Configuration](https://attack.mitre.org/mitigations/M0915/) |Consider configuration and use of a network-wide authentication service such as Active Directory, LDAP, or RADIUS capabilities which can be found in ICS devices. |
| M0913 | [Application Developer Guidance](https://attack.mitre.org/mitigations/M0913/) | Ensure that applications and devices do not store sensitive data or credentials insecurely (e.g., plaintext credentials in code, published credentials in repositories, or credentials in public cloud storage).  |
| M0947 | [Audit](https://attack.mitre.org/mitigations/M0947/) | Routinely audit source code, application configuration files, open repositories, and public cloud storage for insecure use and storage of credentials. |
| M0937 | [Filter Network Traffic](https://attack.mitre.org/mitigations/M0937/) | Consider using IP allowlisting along with user account management to ensure that data access is restricted not only to valid users but only from expected IP ranges to mitigate the use of stolen credentials to access data. |
| M0932 | [Multi-factor Authentication](https://attack.mitre.org/mitigations/M0932/) | Integrating multi-factor authentication (MFA) as part of organizational policy can greatly reduce the risk of an adversary gaining access to valid credentials that may be used for additional tactics such as initial access, lateral movement, and collecting information. MFA can also be used to restrict access to cloud resources and APIs. |
| M0927 | [Password Policies](https://attack.mitre.org/mitigations/M0927/) | Applications and appliances that utilize default username and password should be changed immediately after the installation, and before deployment to a production environment. |
| M0926 | [Privileged Account Management](https://attack.mitre.org/mitigations/M0926/) | Audit domain and local accounts and their permission levels routinely to look for situations that could allow an adversary to gain system wide access with stolen privileged account credentials. These audits should also identify if default accounts have been enabled, or if new local accounts are created that have not be authorized. Follow best practices for design and administration of an enterprise network to limit privileged account use across administrative tiers. |
| M0918 | [User Account Management](https://attack.mitre.org/mitigations/M0918/) | Ensure users and user groups have appropriate permissions for their roles through Identity and Access Management (IAM) controls. Implement strict IAM controls to prevent access to systems except for the applications, users, and services that require access. Implement user accounts for each individual for enforcement and non-repudiation of actions. |


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
    <td rowspan='2'>DS0028</td>
    <td rowspan='2'>[Logon Session](https://attack.mitre.org/datasources/DS0028/)</td>
    <td>[Logon Session Creation](https://attack.mitre.org/datasources/DS0028/#Logon%20Session%20Creation)</td>
    <td>Monitor for logon behavior that may abuse credentials of existing accounts as a means of gaining Lateral Movement or Persistence. Correlate other security systems with login information (e.g., a user has an active login session but has not entered the building or does not have VPN access).</td>
  </tr>
  <tr>
    <td>[Logon Session Metadata](https://attack.mitre.org/datasources/DS0028/#Logon%20Session%20Metadata)</td>
    <td>Monitor for suspicious account behavior across systems that share accounts, either user, admin, or service accounts. Examples: one account logged into multiple systems simultaneously; multiple accounts logged into the same machine simultaneously; accounts logged in at odd times or outside of business hours. Activity may be from interactive login sessions or process ownership from accounts being used to execute binaries on a remote system as a particular account.</td>
  </tr>
  <tr>
    <td>DS0002</td>
    <td>[User Account](https://attack.mitre.org/datasources/DS0002/)</td>
    <td>[User Account Authentication](https://attack.mitre.org/datasources/DS0002/#User%20Account%20Authentication)</td>
    <td>Monitor for an authentication attempt by a user that may obtain and abuse credentials of existing accounts as a means of gaining Initial Access, Persistence, Privilege Escalation, or Defense Evasion.</td>
  </tr>
</table>

##

# References
1. [MITRE ATT&CK Technique: Valid Accounts. Retrieved 01JUL2024.](https://attack.mitre.org/techniques/T0859/)
2. [Procedure Examples: 2015 Ukraine Electric Power Attack. Retrieved 01JUL2024.](https://attack.mitre.org/campaigns/C0028/)
3. [Procedure Examples: 2016 Ukraine Electric Power Attack. Retrieved 01JUL2024.](https://attack.mitre.org/campaigns/C0025/)
4. [Procedure Examples: ALLANITE Retrieved 01JUL2024.](https://attack.mitre.org/groups/G1000/)
5. [Procedure Examples: BlackEnergy. Retrieved 01JUL2024.](https://attack.mitre.org/software/S0089/)
6. [Procedure Examples: INCONTROLLER. Retrieved 01JUL2024.](https://attack.mitre.org/software/S1045/)
7. [Procedure Examples: OilRig. Retrieved 01JUL2024.](https://attack.mitre.org/groups/G0049/)
8. [Procedure Examples: Triton Safety Instrumented System Attack. Retrieved 01JUL2024.](https://attack.mitre.org/campaigns/C0030/)
9. [Targeted Assets: Workstation. Retrieved 01JUL2024.](https://attack.mitre.org/assets/A0001/)
10. [Targeted Assets: Human-Machine Interface (HMI). Retrieved 01JUL2024.](https://attack.mitre.org/assets/A0002/)
11. [Targeted Assets: Programmable Logic Controller(PLC). Retrieved 01JUL2024.](https://attack.mitre.org/assets/A0003/)
12. [Targeted Assets: Remote Terminal Unit (RTU). Retrieved 01JUL2024.](https://attack.mitre.org/assets/A0004/)
13. [Targeted Assets: Intelligent Electronic Device (IED). Retrieved 01JUL2024.](https://attack.mitre.org/assets/A0005/)
14. [Targeted Assets: Data Historian. Retrieved 01JUL2024.](https://attack.mitre.org/assets/A0006/)
15. [Targeted Assets: Control Server. Retrieved 01JUL2024.](https://attack.mitre.org/assets/A0007/)
16. [Targeted Assets: Application Server. Retrieved 01JUL2024.](https://attack.mitre.org/assets/A0008/)
17. [Targeted Assets: Data Gateway. Retrieved 01JUL2024.](https://attack.mitre.org/assets/A0009/)
18. [Targeted Assets: Safety Controller. Retrieved 01JUL2024.](https://attack.mitre.org/assets/A0010/)
19. [Targeted Assets: Virtual Private Network (VPN) Server. Retrieved 01JUL2024.](https://attack.mitre.org/assets/A0011/)
20. [Targeted Assets: Jump Host. Retrieved 01JUL2024.](https://attack.mitre.org/assets/A0012/)
21. [Targeted Assets: Field I/O. Retrieved 01JUL2024.](https://attack.mitre.org/assets/A0013/)
22. [MITRE ATT&CK Mitigation: Access Management. Retrieved 01JUL2024.](https://attack.mitre.org/mitigations/M0801/)
23. [MITRE ATT&CK Mitigation: Account Use Policies. Retrieved 01JUL2024.](https://attack.mitre.org/mitigations/M0936/)
24. [MITRE ATT&CK Mitigation: Active Directory Configuration. Retrieved 01JUL2024.](https://attack.mitre.org/mitigations/M0915/)
25. [MITRE ATT&CK Mitigation: Application Developer Guidance. Retrieved 01JUL2024.](https://attack.mitre.org/mitigations/M0913/)
26. [MITRE ATT&CK Mitigation: Audit. Retrieved 01JUL2024.](https://attack.mitre.org/mitigations/M0947/)
27. [MITRE ATT&CK Mitigation: Filter Network Traffic. Retrieved 01JUL2024.](https://attack.mitre.org/mitigations/M0937/)
28. [MITRE ATT&CK Mitigation: Multi-factor Authentication. Retrieved 01JUL2024.](https://attack.mitre.org/mitigations/M0932/)
29. [MITRE ATT&CK Mitigation: Password Policies. Retrieved 01JUL2024.](https://attack.mitre.org/mitigations/M0927/)
30. [MITRE ATT&CK Mitigation: Privileged Account Management. Retrieved 01JUL2024.](https://attack.mitre.org/mitigations/M0926/)
31. [MITRE ATT&CK Mitigation: User Account Management. Retrieved 01JUL2024.](https://attack.mitre.org/mitigations/M0918/)
32. [MITRE ATT&CK Detection: Logon Session. Retrieved 01JUL2024.](https://attack.mitre.org/datasources/DS0028/)
33. [MITRE ATT&CK Detection: Logon Session Creation. Retrieved 01JUL2024.](https://attack.mitre.org/datasources/DS0028/#Logon%20Session%20Creation)
34. [MITRE ATT&CK Detection: Logon Session Metadata. Retrieved 01JUL2024.](https://attack.mitre.org/datasources/DS0028/#Logon%20Session%20Metadata)
35. [MITRE ATT&CK Detection: User Account. Retrieved 01JUL2024.](https://attack.mitre.org/datasources/DS0002/)
36. [MITRE ATT&CK Detection: User Account Authentication. Retrieved 01JUL2024.](https://attack.mitre.org/datasources/DS0002/#User%20Account%20Authentication)