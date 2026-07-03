---
sidebar_label: 'Loss of View'
sidebar_position: 49
---

# Loss of View

# Summary
Adversaries may cause a sustained or permanent loss of view in maritime systems, requiring local, hands-on operator intervention such as a restart or manual operation. By disrupting reporting or visibility, adversaries can effectively hide the current state of maritime operations without affecting the physical processes themselves. This can prevent operators from detecting issues in real-time, increasing the risk of undetected faults and potential safety hazards.



# Procedure Examples
| ID      | Name       | Description |
|:------------|:-----------|:--------------|
| S0604 | [Industroyer](https://attack.mitre.org/software/S0604) | Industroyer's data wiper component removes the registry image path throughout the system and overwrites all files, rendering the system unusable. |
| S0607 | [KillDisk](https://attack.mitre.org/software/S0607) | KillDisk erases the master boot record (MBR) and system logs, leaving the system unusable. |
| S0372 | [LockerGoga](https://attack.mitre.org/software/S0372) | Some of Norsk Hydro's production systems were impacted by a LockerGoga infection. This resulted in a loss of view which forced the company to switch to manual operations. |
| C0031 | [Unitronics Defacement Campaign](https://attack.mitre.org/campaigns/C0031) | During the Unitronics Defacement Campaign, the CyberAv3ngers replaced the existing graphic on the Programmable Logic Controller (PLC) Human-Machine Interface (HMI) with their own, thereby preventing PLC owners and operators from viewing PLC information on the HMI. |



&nbsp;

# Mitigations
| ID      | Mitigation       | Description |
|:------------|:-----------|:--------------|
| M0953 | [Data Backup](https://attack.mitre.org/mitigations/M0953/) | Take and store data backups from end user systems and critical servers. Ensure backup and storage systems are hardened and kept separate from the corporate network to prevent compromise. Maintain and exercise incident response plans [10], including the management of gold-copy back-up images and configurations for key systems to enable quick recovery and response from adversarial activities that impact control, view, or availability. |
| M0810 | [Out-of-Band Communications Channel](https://attack.mitre.org/mitigations/M0810/) | Provide operators with redundant, out-of-band communication to support monitoring and control of the operational processes, especially when recovering from a network outage [11]. Out-of-band communication should utilize diverse systems and technologies to minimize common failure modes and vulnerabilities within the communications infrastructure. For example, wireless networks (e.g., 3G, 4G) can be used to provide diverse and redundant delivery of data. |
| M0811 | [Redundancy of Service](https://attack.mitre.org/mitigations/M0811/) | Hot-standbys in diverse locations can ensure continued operations if the primarily system are compromised or unavailable. At the network layer, protocols such as the Parallel Redundancy Protocol can be used to simultaneously use redundant and diverse communication over a local network.  |


&nbsp;

##

# References
1. [MITRE ATT&CK Technique: Loss of View. Retrieved 01JUL2024.](https://attack.mitre.org/techniques/T0829/)
2. [Procedure Examples: Industroyer. Retrieved 01JUL2024.](https://attack.mitre.org/software/S0604/)
3. [Procedure Examples: KillDisk. Retrieved 01JUL2024.](https://attack.mitre.org/software/S0607/)
4. [Procedure Examples: LockerGoga. Retrieved 01JUL2024.](https://attack.mitre.org/software/S0372)
5. [Procedure Examples: Unitronics Defacement Campaign. Retrieved 01JUL2024.](https://attack.mitre.org/campaigns/C0031)
6. [MITRE ATT&CK Mitigation: Data Backup. Retrieved 01JUL2024.](https://attack.mitre.org/mitigations/M0953)
7. [MITRE ATT&CK Mitigation: Out-of-Band Communications Channel. Retrieved 01JUL2024.](https://attack.mitre.org/mitigations/M0810)
8. [MITRE ATT&CK Mitigation: Redundancy of Service. Retrieved 01JUL2024.](https://attack.mitre.org/mitigations/M0811)



