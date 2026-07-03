---
sidebar_label: 'System Firmware'
sidebar_position: 8
---

# System Firmware

# Summary
System firmware on modern maritime assets is often designed with an update feature. Older device firmware may be factory installed and require special reprogramming equipment. When available, the firmware update feature enables vendors to remotely patch bugs and perform upgrades. Device firmware updates are often delegated to the user and may be done using a software update package. It may also be possible to perform this task over the network.

An adversary may exploit the firmware update feature on accessible maritime devices to upload malicious or out-of-date firmware. Malicious modification of device firmware may provide an adversary with root access to a device, given firmware is one of the lowest programming abstraction layers.


# Procedure Examples
| ID      | Name       | Description |
|:------------|:-----------|:--------------|
| C0028 | [2015 Ukraine Electric Power Attack](https://attack.mitre.org/campaigns/C0028/) | During the 2015 Ukraine Electric Power Attack, Sandworm Team overwrote the serial-to-ethernet gateways with custom firmware to make systems either disabled, shutdown, and/or unrecoverable. |
| S1009 | [Triton](https://attack.mitre.org/software/S1009/) | Triton is able to read, write and execute code in memory on the safety controller at an arbitrary address within the devices firmware region. This allows the malware to make changes to the running firmware in memory and modify how the device operates.  |


&nbsp;

# Targeted Assets
| ID      | Asset       |
|:------------|:-----------|
| A0002 | [Human-Machine Interface (HMI)](https://attack.mitre.org/assets/A0002/) |
| A0003 | [Programmable Logic Controller (PLC)](https://attack.mitre.org/assets/A0003/) |
| A0004 | [Remote Terminal Unit (RTU)](https://attack.mitre.org/assets/A0004/) |
| A0005 | [Intelligent Electronic Device (IED)](https://attack.mitre.org/assets/A0005/) |
| A0009 | [Data Gateway](https://attack.mitre.org/assets/A0009/) |
| A0010 | [Safety Controller](https://attack.mitre.org/assets/A0010/) |
| A0011 | [Virtual Private Network (VPN) Server](https://attack.mitre.org/assets/A0011/) |


&nbsp;

# Mitigations
| ID      | Mitigation       | Description |
|:------------|:-----------|:--------------|
| M0801 | [Access Management](https://attack.mitre.org/mitigations/M0801/) | All devices or systems changes, including all administrative functions, should require authentication. Consider using access management technologies to enforce authorization on all management interface access attempts, especially when the device does not inherently provide strong authentication and authorization functions. |
| M0947 | [Audit](https://attack.mitre.org/mitigations/M0947/) | Perform integrity checks of firmware before uploading it on a device. Utilize cryptographic hashes to verify the firmware has not been tampered with by comparing it to a trusted hash of the firmware. This could be from trusted data sources (e.g., vendor site) or through a third-party verification service. |
| M0946 | [Boot Integrity](https://attack.mitre.org/mitigations/M0946/) | Check the integrity of the existing BIOS or EFI to determine if it is vulnerable to modification. Use Trusted Platform Module technology. Move system's root of trust to hardware to prevent tampering with the SPI flash memory. Technologies such as Intel Boot Guard can assist with this. |
| M0945 | [Code Signing](https://attack.mitre.org/mitigations/M0945/) |Devices should verify that firmware has been properly signed by the vendor before allowing installation. |
| M0802 | [Communication Authenticity](https://attack.mitre.org/mitigations/M0802/) | Protocols used for device management should authenticate all network messages to prevent unauthorized system changes. |
| M0808 | [Encrypt Network Traffic](https://attack.mitre.org/mitigations/M0808/) | The encryption of firmware should be considered to prevent adversaries from identifying possible vulnerabilities within the firmware. |
| M0941 | [Encrypt Sensitive Information](https://attack.mitre.org/mitigations/M0941/) | The encryption of firmware should be considered to prevent adversaries from identifying possible vulnerabilities within the firmware. |
| M0937 | [Filter Network Traffic](https://attack.mitre.org/mitigations/M0937/) | Filter for protocols and payloads associated with firmware activation or updating activity. |
| M0804 | [Human User Authentication](https://attack.mitre.org/mitigations/M0804/) | Devices that allow remote management of firmware should require authentication before allowing any changes. The authentication mechanisms should also support Account Use Policies, Password Policies, and User Account Management. |
| M0807 | [Network Allowlists](https://attack.mitre.org/mitigations/M0807/) | Use host-based allowlists to prevent devices from accepting connections from unauthorized systems. For example, allowlists can be used to ensure devices can only connect with master stations or known management/engineering workstations. |
| M0930 | [Network Segmentation](https://attack.mitre.org/mitigations/M0930/) | Segment operational network and systems to restrict access to critical system functions to predetermined management systems. |
| M0813 | [Software Process and Device Authentication](https://attack.mitre.org/mitigations/M0813/) | Authenticate connections fromsoftware and devices to prevent unauthorized systems from accessing protected management functions. |
| M0951 | [Update Software](https://attack.mitre.org/mitigations/M0951/) | Patch the BIOS and EFI as necessary. |

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
    <td>Firewalls and proxies can inspect URLs for potentially known-bad domains or parameters. They can also do reputation-based analytics on websites and their requested resources such as how old a domain is, who it's registered to, if it's on a known bad list, or how many other users have connected to it before.</td>
  </tr>
  <tr>
    <td>DS0001</td>
    <td>[Firmware](https://attack.mitre.org/datasources/DS0001/)</td>
    <td>[Firmware Modification](https://attack.mitre.org/datasources/DS0001/#Firmware%20Modification)</td>
    <td>Monitor firmware for unexpected changes. Asset management systems should be consulted to understand known-good firmware versions. Dump and inspect BIOS images on vulnerable systems and compare against known good images. Analyze differences to determine if malicious changes have occurred. Log attempts to read/write to BIOS and compare against known patching behavior. Likewise, EFI modules can be collected and compared against a known-clean list of EFI executable binaries to detect potentially malicious modules. The CHIPSEC framework can be used for analysis to determine if firmware modifications have been performed.</td>
  </tr>
  <tr>
    <td>DS0029</td>
    <td>[Network Traffic](https://attack.mitre.org/datasources/DS0029/)</td>
    <td>[Network Traffic Content](https://attack.mitre.org/datasources/DS0029/#Network%20Traffic%20Content)</td>
    <td>Monitor ICS management protocols / file transfer protocols for protocol functions related to firmware changes</td>
  </tr>
  <tr>
    <td>DS0040</td>
    <td>[Operational Databases](https://attack.mitre.org/datasources/DS0040/)</td>
    <td>[Device Alarm](https://attack.mitre.org/datasources/DS0040/#Device%20Alarm)</td>
    <td>Monitor for firmware changes which may be observable via operational alarms from devices.</td>
  </tr>
</table>

##

# References
1. [MITRE ATT&CK Technique: System Firmware. Retrieved 01JUL2024.](https://attack.mitre.org/techniques/T0857/)
2. [Procedure Examples: 2015 Ukraine Electric Power Attack. Retrieved 01JUL2024.](https://attack.mitre.org/campaigns/C0028/)
3. [Procedure Examples: Triton. Retrieved 01JUL2024.](https://attack.mitre.org/software/S1009/)
4. [Targeted Assets: Human-Machine Interface (HMI). Retrieved 01JUL2024.](https://attack.mitre.org/assets/A0002/)
5. [Targeted Assets: Programmable Logic Controller (PLC). Retrieved 01JUL2024.](https://attack.mitre.org/assets/A0003/)
6. [Targeted Assets: Remote Terminal Unit (RTU). Retrieved 01JUL2024.](https://attack.mitre.org/assets/A0004/)
7. [Targeted Assets: Intelligent Electronic Device (IED). Retrieved 01JUL2024.](https://attack.mitre.org/assets/A0005/)
8. [Targeted Assets: Data Gateway. Retrieved 01JUL2024.](https://attack.mitre.org/assets/A0009/)
9. [Targeted Assets: Safety Controller. Retrieved 01JUL2024.](https://attack.mitre.org/assets/A0010/)
10. [Targeted Assets: Virtual Private Network (VPN) Server. Retrieved 01JUL2024.](https://attack.mitre.org/assets/A0011/)
11. [MITRE ATT&CK Mitigation: Access Management. Retrieved 01JUL2024.](https://attack.mitre.org/mitigations/M0801/)
12. [MITRE ATT&CK Mitigation: Audit. Retrieved 01JUL2024.](https://attack.mitre.org/mitigations/M0947/)
13. [MITRE ATT&CK Mitigation: Boot Integrity. Retrieved 01JUL2024.](https://attack.mitre.org/mitigations/M0946/)
14. [MITRE ATT&CK Mitigation: Code Signing. Retrieved 01JUL2024.](https://attack.mitre.org/mitigations/M0945/)
15. [MITRE ATT&CK Mitigation: Communication Authenticity. Retrieved 01JUL2024.](https://attack.mitre.org/mitigations/M0802/)
16. [MITRE ATT&CK Mitigation: Encrypt Network Traffic. Retrieved 01JUL2024.](https://attack.mitre.org/mitigations/M0808/)
17. [MITRE ATT&CK Mitigation: Encrypt Sensitive Information. Retrieved 01JUL2024.](https://attack.mitre.org/mitigations/M0941/)
18. [MITRE ATT&CK Mitigation: Filter Network Traffic. Retrieved 01JUL2024.](https://attack.mitre.org/mitigations/M0937/)
19. [MITRE ATT&CK Mitigation: Human User Authentication. Retrieved 01JUL2024.](https://attack.mitre.org/mitigations/M0804/)
20. [MITRE ATT&CK Mitigation: Network Allowlists. Retrieved 01JUL2024.](https://attack.mitre.org/mitigations/M0807/)
21. [MITRE ATT&CK Mitigation: Network Segmentation. Retrieved 01JUL2024.](https://attack.mitre.org/mitigations/M0930/)
22. [MITRE ATT&CK Mitigation: Software Process and Device Authentication. Retrieved 01JUL2024.](https://attack.mitre.org/mitigations/M0813/)
23. [MITRE ATT&CK Mitigation: Update Software. Retrieved 01JUL2024.](https://attack.mitre.org/mitigations/M0951)
24. [MITRE ATT&CK Detection: Application Log. Retrieved 01JUL2024.](https://attack.mitre.org/datasources/DS0015/)
25. [MITRE ATT&CK Detection: Application Log Content. Retrieved 01JUL2024.](https://attack.mitre.org/datasources/DS0015/#Application%20Log%20Content)
26. [MITRE ATT&CK Detection: Firmware. Retrieved 01JUL2024.](https://attack.mitre.org/datasources/DS0001/)
27. [MITRE ATT&CK Detection: Firmware Modification. Retrieved 01JUL2024.](https://attack.mitre.org/datasources/DS0001/#Firmware%20Modification)
28. [MITRE ATT&CK Detection: Network Traffic. Retrieved 01JUL2024.](https://attack.mitre.org/datasources/DS0029/)
29. [MITRE ATT&CK Detection: Network Traffic Content. Retrieved 01JUL2024.](https://attack.mitre.org/datasources/DS0029/#Network%20Traffic%20Content)
30. [MITRE ATT&CK Detection: Operational Databases. Retrieved 01JUL2024.](https://attack.mitre.org/datasources/DS0040//)
31. [MITRE ATT&CK Detection: Device Alarm. Retrieved 01JUL2024.](https://attack.mitre.org/datasources/DS0040/#Device%20Alarm)

