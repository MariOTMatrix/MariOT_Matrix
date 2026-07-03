---
sidebar_label: 'Module Firmware'
sidebar_position: 6
---

# Module Firmware

# Summary
Adversaries may install malicious or vulnerable firmware onto modular hardware devices within maritime systems. Control system devices on ships and offshore platforms often contain modular hardware components, each with its own firmware separate from the main control system equipment.

This technique is similar to System Firmware attacks but targets other system components that may lack the same capabilities or level of integrity checking. Despite resulting in a device re-image, malicious firmware can provide persistent access to remaining maritime devices.

An easy point of access for an adversary in maritime environments is the Ethernet card, which may have its own CPU, RAM, and operating system. The adversary may attack and exploit the computer on an Ethernet card. Exploitation of the Ethernet card computer can enable the adversary to accomplish additional attacks, such as the following:

* Delayed Attack: The adversary may stage an attack in advance and choose when to launch it, such as at a particularly damaging time for maritime operations.
* Brick the Ethernet Card: Malicious firmware may be programmed to cause an Ethernet card failure, necessitating a factory return and potentially disrupting maritime communications.
* Random Attack or Failure: The adversary may load malicious firmware onto multiple maritime field devices. Execution of an attack and its timing is determined by a pseudo-random number generator.
* A Field Device Worm: The adversary may identify all field devices of the same model within the maritime network, aiming for a device-wide compromise.
* Attack Other Cards on the Field Device: Although not the most critical module in a maritime field device, the Ethernet card is most accessible to the adversary and malware. Compromising the Ethernet card can provide a more direct route to compromising other modules, such as the CPU module.

By targeting these modular hardware devices, adversaries may significantly impact maritime operations and system integrity.


# Procedure Examples
| ID      | Name       | Description |
|:------------|:-----------|:--------------|
| G1000      | [Cyble](https://cyble.com/blog/critical-vulnerabilities-in-serial-to-ethernet-devices/) | Cyble Research Lab's Analysis On How Critical Vulnerabilities In Serial-To-Ethernet Devices Can Lead To Attacks Or Compromises On Critical National Infrastructure And ICS. |

&nbsp;

# Targeted Assets
| ID      | Asset       |
|:------------|:-----------|
| A0003 | [Programmable Logic Controller(PLC)](https://attack.mitre.org/assets/A0003/) |
| A0010 | [Safety Controller](https://attack.mitre.org/assets/A0010/) |


&nbsp;

# Mitigations
| ID      | Mitigation       | Description |
|:------------|:-----------|:--------------|
| M0801 | [Access Management](https://attack.mitre.org/mitigations/M0801/) | All devices or systems changes, including all administrative functions, should require authentication. Consider using access management technologies to enforce authorization on all management interface access attempts, especially when the device does not inherently provide strong authentication and authorization functions. |
| M0947 | [Audit](https://attack.mitre.org/mitigations/M0947/) | Perform integrity checks of firmware before uploading it on a device. Utilize cryptographic hashes to verify the firmware has not been tampered with by comparing it to a trusted hash of the firmware. This could be from trusted data sources (e.g., vendor site) or through a third-party verification service. |
| M0946 | [Boot Integrity](https://attack.mitre.org/mitigations/M0946/) | Check the integrity of the existing BIOS or EFI to determine if it is vulnerable to modification. Use Trusted Platform Module technology. Move system's root of trust to hardware to prevent tampering with the SPI flash memory. Technologies such as Intel Boot Guard can assist with this. |
| M0945 | [Code Signing](https://attack.mitre.org/mitigations/M0945/) |Devices should verify that firmware has been properly signed by the vendor before allowing installation. |
| M0802 | [	Communication Authenticity](https://attack.mitre.org/mitigations/M0802/) | Protocols used for device management should authenticate all network messages to prevent unauthorized system changes. |
| M0808 | [Encrypt Network Traffic](https://attack.mitre.org/mitigations/M0808/) | The encryption of firmware should be considered to prevent adversaries from identifying possible vulnerabilities within the firmware. |
| M0941 | [Encrypt Sensitive Information](https://attack.mitre.org/mitigations/M0941/) | The encryption of firmware should be considered to prevent adversaries from identifying possible vulnerabilities within the firmware. |
| M0937 | [Filter Network Traffic](https://attack.mitre.org/mitigations/M0937/) | Filter for protocols and payloads associated with firmware activation or updating activity. |
| M0804 | [Human User Authentication](https://attack.mitre.org/mitigations/M0804/) | Devices that allow remote management of firmware should require authentication before allowing any changes. The authentication mechanisms should also support Account Use Policies, Password Policies, and User Account Management. |
| M0807 | [Network Allowlists](https://attack.mitre.org/mitigations/M0807/) | Use host-based allowlists to prevent devices from accepting connections from unauthorized systems. For example, allowlists can be used to ensure devices can only connect with master stations or known management/engineering workstations. |
| M0930 | [Network Segmentation](https://attack.mitre.org/mitigations/M0930/) | Segment operational network and systems to restrict access to critical system functions to predetermined management systems. |
| M0813 | [Software Process and Device Authentication](https://attack.mitre.org/mitigations/M0813/) | Authenticate connections fromsoftware and devices to prevent unauthorized systems from accessing protected management functions. |



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
1. [MITRE ATT&CK Technique: Module Firmware. Retrieved 01JUL2024.](https://attack.mitre.org/techniques/T0839/)
2. [Procedure Examples: Cyble Retrieved 01JUL2024.](https://cyble.com/blog/critical-vulnerabilities-in-serial-to-ethernet-devices/)
3. [Targeted Assets: Programmable Logic Controller(PLC). Retrieved 01JUL2024.](https://attack.mitre.org/assets/A0003/)
4. [Targeted Assets: Safety Controller. Retrieved 01JUL2024.](https://attack.mitre.org/assets/A0010/)
5. [MITRE ATT&CK Mitigation: Access Management. Retrieved 01JUL2024.](https://attack.mitre.org/mitigations/M0801/)
6. [MITRE ATT&CK Mitigation: Audit. Retrieved 01JUL2024.](https://attack.mitre.org/mitigations/M0947/)
7. [MITRE ATT&CK Mitigation: Boot Integrity. Retrieved 01JUL2024.](https://attack.mitre.org/mitigations/M0946/)
8. [MITRE ATT&CK Mitigation: Code Signing. Retrieved 01JUL2024.](https://attack.mitre.org/mitigations/M0945/)
9. [MITRE ATT&CK Mitigation: Communication Authenticity. Retrieved 01JUL2024.](https://attack.mitre.org/mitigations/M0802/)
10. [MITRE ATT&CK Mitigation: Encrypt Network Traffic. Retrieved 01JUL2024.](https://attack.mitre.org/mitigations/M0808/)
11. [MITRE ATT&CK Mitigation: Encrypt Sensitive Information. Retrieved 01JUL2024.](https://attack.mitre.org/mitigations/M0941/)
12. [MITRE ATT&CK Mitigation: Filter Network Traffic. Retrieved 01JUL2024.](https://attack.mitre.org/mitigations/M0937/)
13. [MITRE ATT&CK Mitigation: Human User Authentication. Retrieved 01JUL2024.](https://attack.mitre.org/mitigations/M0804/)
14. [MITRE ATT&CK Mitigation: Network Allowlists. Retrieved 01JUL2024.](https://attack.mitre.org/mitigations/M0807/)
15. [MITRE ATT&CK Mitigation: Network Segmentation. Retrieved 01JUL2024.](https://attack.mitre.org/mitigations/M0930/)
16. [MITRE ATT&CK Mitigation: Software Process and Device Authentication. Retrieved 01JUL2024.](https://attack.mitre.org/mitigations/M0813/)
17. [MITRE ATT&CK Detection: Application Log. Retrieved 01JUL2024.](https://attack.mitre.org/datasources/DS0015/)
18. [MITRE ATT&CK Detection: Application Log Content. Retrieved 01JUL2024.](https://attack.mitre.org/datasources/DS0015/#Application%20Log%20Content)
19. [MITRE ATT&CK Detection: Firmware. Retrieved 01JUL2024.](https://attack.mitre.org/datasources/DS0001/)
20. [MITRE ATT&CK Detection: Firmware Modification. Retrieved 01JUL2024.](https://attack.mitre.org/datasources/DS0001/#Firmware%20Modification)
21. [MITRE ATT&CK Detection: Network Traffic. Retrieved 01JUL2024.](https://attack.mitre.org/datasources/DS0029/)
22. [MITRE ATT&CK Detection: Network Traffic Content. Retrieved 01JUL2024.](https://attack.mitre.org/datasources/DS0029/#Network%20Traffic%20Content)
23. [MITRE ATT&CK Detection: Operational Databases. Retrieved 01JUL2024.](https://attack.mitre.org/datasources/DS0040//)
24. [MITRE ATT&CK Detection: Device Alarm. Retrieved 01JUL2024.](https://attack.mitre.org/datasources/DS0040/#Device%20Alarm)
25. [Cyble: Critical Vulnerabilities in Serial-to-Ethernet Devices](https://cyble.com/blog/critical-vulnerabilities-in-serial-to-ethernet-devices/)
26. [Microsoft: Firmware attacks on the rise](https://www.microsoft.com/en-us/security/blog/2021/03/30/new-security-signals-study-shows-firmware-attacks-on-the-rise-heres-how-microsoft-is-working-to-help-eliminate-this-entire-class-of-threats/)
27. [INFOSEC: How to identify and prevent firmware vulnerabilities](https://www.infosecinstitute.com/resources/vulnerabilities/how-to-identify-and-prevent-firmware-vulnerabilities/)