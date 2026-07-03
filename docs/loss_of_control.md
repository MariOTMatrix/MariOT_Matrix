---
sidebar_label: 'Loss of Control'
sidebar_position: 45
---

# Loss of Control

# Summary
Adversaries may seek to achieve a sustained loss of control or a runaway condition in which maritime operators cannot issue any commands even if the malicious interference has subsided. This could result in significant disruptions to shipping traffic, cargo handling, and overall port operations, leading to unsafe conditions and potential economic losses.

The May 2020 cyberattack on Iran's Shahid Rajaee port exemplifies the "loss of control" technique. By targeting the port's computer systems, the attackers halted all shipping traffic and caused severe congestion, preventing operators from managing port operations. This incident illustrates how adversaries can create sustained disruptions, rendering control systems inoperable and leaving operators unable to issue commands even after the initial attack subsides​.



# Procedure Examples
| ID      | Name       | Description |
|:------------|:-----------|:--------------|
| C0028 | [2015 Ukraine Electric Power Attack](https://attack.mitre.org/campaigns/C0028/) | During the 2015 Ukraine Electric Power Attack, Sandworm Team opened the breakers at the infected sites, shutting the power off for thousands of businesses and households for around 6 hours. |
| S0604 | [Industroyer](https://attack.mitre.org/software/S0604) | Industroyer's data wiper component removes the registry image path throughout the system and overwrites all files, rendering the system unusable. |
| S0372 | [LockerGoga](https://attack.mitre.org/software/S0372) | Some of Norsk Hydro's production systems were impacted by a LockerGoga infection. This resulted in a loss of control which forced the company to switch to manual operations. |


&nbsp;

# Mitigations
| ID      | Mitigation       | Description |
|:------------|:-----------|:--------------|
| M0953 | [Data Backup](https://attack.mitre.org/mitigations/M0953/) | Take and store data backups from end user systems and critical servers. Ensure backup and storage systems are hardened and kept separate from the corporate network to prevent compromise. Maintain and exercise incident response plans [9], including the management of gold-copy back-up images and configurations for key systems to enable quick recovery and response from adversarial activities that impact control, view, or availability. |
| M0810 | [Out-of-Band Communications Channel](https://attack.mitre.org/mitigations/M0810/) | Provide operators with redundant, out-of-band communication to support monitoring and control of the operational processes, especially when recovering from a network outage. Out-of-band communication should utilize diverse systems and technologies to minimize common failure modes and vulnerabilities within the communications infrastructure. For example, wireless networks (e.g., 3G, 4G) can be used to provide diverse and redundant delivery of data. |
| M0811 | [Redundancy of Service](https://attack.mitre.org/mitigations/M0811/) | Hot-standbys in diverse locations can ensure continued operations if the primarily system are compromised or unavailable. At the network layer, protocols such as the Parallel Redundancy Protocol can be used to simultaneously use redundant and diverse communication over a local network.  |


&nbsp;

##

# References
1. [MITRE ATT&CK Technique: Loss of Control. Retrieved 01JUL2024.](https://attack.mitre.org/techniques/T0827/)
2. [Procedure Examples: 2015 Ukraine Electric Power Attack. Retrieved 01JUL2024.](https://attack.mitre.org/campaigns/C0028/)
3. [Procedure Examples: Industroyer. Retrieved 01JUL2024.](https://attack.mitre.org/software/S0604/)
4. [Procedure Examples: LockerGoga. Retrieved 01JUL2024.](https://attack.mitre.org/software/S0372)
5. [MITRE ATT&CK Mitigation: Data Backup. Retrieved 01JUL2024.](https://attack.mitre.org/mitigations/M0953)
6. [MITRE ATT&CK Mitigation: Out-of-Band Communications Channel. Retrieved 01JUL2024.](https://attack.mitre.org/mitigations/M0810)
7. [MITRE ATT&CK Mitigation: Redundancy of Service. Retrieved 01JUL2024.](https://attack.mitre.org/mitigations/M0811)



