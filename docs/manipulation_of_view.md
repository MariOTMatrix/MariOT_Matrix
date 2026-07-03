---
sidebar_label: 'Manipulation of View'
sidebar_position: 51
---

# Manipulation of View

# Summary
Adversaries may attempt to manipulate information reported to maritime operators or controllers. This manipulation, whether short-term or sustained, can cause operators to believe the system is in a different state than it actually is. As a result, operators might issue harmful commands, introducing faults or catastrophic failures. Inaccurate data can also mislead business analysis systems, leading to poor management decisions. For example, manipulated data might cause inappropriate navigational adjustments, potentially resulting in collisions or grounding of vessels.



# Procedure Examples
| ID      | Name       | Description |
|:------------|:-----------|:--------------|
| S0604 | [Industroyer](https://attack.mitre.org/software/S0604) | Industroyer's OPC module can brute force values and will send out a 0x01 status which for the target systems equates to a Primary Variable Out of Limits misdirecting operators from understanding protective relay status. |
| S0603 | [Stuxnet](https://attack.mitre.org/software/S0603) | Stuxnet manipulates the view of operators replaying process input and manipulating the I/O image to evade detection and inhibit protection functions. |

&nbsp;

# Mitigations
| ID      | Mitigation       | Description |
|:------------|:-----------|:--------------|
| M0802 | [Communication Authenticity](https://attack.mitre.org/mitigations/M0802/) | Protocols used for control functions should provide authenticity through MAC functions or digital signatures. If not, utilize bump-in-the-wire devices or VPNs to enforce communication authenticity between devices that are not capable of supporting this (e.g., legacy controllers, RTUs). |
| M0953 | [Data Backup](https://attack.mitre.org/mitigations/M0953/) | Take and store data backups from end user systems and critical servers. Ensure backup and storage systems are hardened and kept separate from the corporate network to prevent compromise. Maintain and exercise incident response plans [7], including the management of gold-copy back-up images and configurations for key systems to enable quick recovery and response from adversarial activities that impact control, view, or availability. |
| M0810 | [Out-of-Band Communications Channel](https://attack.mitre.org/mitigations/M0810/) | Utilize out-of-band communication to validate the integrity of data from the primary channel. |

&nbsp;

##

# References
1. [MITRE ATT&CK Technique: Manipulation of View. Retrieved 01JUL2024.](https://attack.mitre.org/techniques/T0832/)
2. [Procedure Examples: Industroyer. Retrieved 01JUL2024.](https://attack.mitre.org/software/S0604/)
3. [Procedure Examples: Stuxnet. Retrieved 01JUL2024.](https://attack.mitre.org/software/S0603 )
4. [MITRE ATT&CK Mitigation: Communication Authenticity. Retrieved 01JUL2024.](https://attack.mitre.org/mitigations/M0802)
5. [MITRE ATT&CK Mitigation: Data Backup. Retrieved 01JUL2024.](https://attack.mitre.org/mitigations/M0953)
6. [MITRE ATT&CK Mitigation: Out-of-Band Communications Channel. Retrieved 01JUL2024.](https://attack.mitre.org/mitigations/M0810)




