---
sidebar_label: 'Denial of View'
sidebar_position: 43
---

# Denial of View

# Summary
Adversaries may cause a denial of view to disrupt and prevent operator oversight of a maritime vessel's status. This can involve leveraging Denial-of-Service (DoS) attacks to overwhelm onboard systems with data requests, rendering them inoperable and disrupting essential communication channels. This tactic can hinder the crew's ability to send and receive critical messages, jeopardizing their response to emergencies and compromising safe navigation.

By disrupting the communication link between a ship's control system and the operator interface, adversaries can blind operators to vital information, masking malicious activity and preventing the detection of system anomalies. While the vessel's processes may continue to operate, they may do so in unintended or adversarial ways, leaving operators susceptible to further attacks or unnoticed operational issues.

##

# Procedure Examples
| ID      | Name     | Description |
|:------------|:-----------|:--------------|
| C0028 | [Network Attacks Against Marine Radar Systems](https://ieeexplore.ieee.org/abstract/document/9843801) | Illustrating a novel attack on radar systems, the adversary can manipulate the navigation radar display, obstructing the crew's ability to accurately monitor the vessel's navigational status. |
| S0604 | [Industroyer](https://attack.mitre.org/software/S0604/) | Industroyer is able to block serial COM channels temporarily causing a denial of view.  |
| C0020 | [Maroochy Water Breach](https://attack.mitre.org/campaigns/C0020) | In the Maroochy Water Breach, the adversary temporarily shut an investigator out of the network, preventing them from viewing the state of the system. |

##

# Mitigations
| ID      | Mitigation    | Description |
|:------------|:-----------|:--------------|
| M0953 | [Data Backup](https://attack.mitre.org/mitigations/M0953/) | Take and store data backups from end user systems and critical servers. Ensure backup and storage systems are hardened and kept separate from the corporate network to prevent compromise. Maintain and exercise incident response plans, including the management of gold-copy back-up images and configurations for key systems to enable quick recovery and response from adversarial activities that impact control, view, or availability. |
| M0810 | [Out-of-Band Communications Channel](https://attack.mitre.org/mitigations/M0810/) | Provide operators with redundant, out-of-band communication to support monitoring and control of the operational processes, especially when recovering from a network outage. Out-of-band communication should utilize diverse systems and technologies to minimize common failure modes and vulnerabilities within the communications infrastructure. For example, wireless networks (e.g., 3G, 4G) can be used to provide diverse and redundant delivery of data. |
| M0811 | [Redundancy of Service](https://attack.mitre.org/mitigations/M0811/) | Hot-standbys in diverse locations can ensure continued operations if the primarily system are compromised or unavailable. At the network layer, protocols such as the Parallel Redundancy Protocol can be used to simultaneously use redundant and diverse communication over a local network.  |


##

# References
1. [MITRE ATT&CK Technique: Denial of View. Retrieved 01JUL2024.](https://attack.mitre.org/techniques/T0815/)
2. [Procedure Examples: Network Attacks Against Marine Radar Systems: A Taxonomy, Simulation Environment, and Dataset. Retrieved 01JUL2024.](https://ieeexplore.ieee.org/document/9843801)
3. [Procedure Examples: Industroyer. Retrieved 01JUL2024.](https://attack.mitre.org/software/S0604/)
4. [Procedure Examples: Maroochy Water Breach. Retrieved 01JUL2024.](https://attack.mitre.org/campaigns/C0020)
5. [MITRE ATT&CK Mitigation: Data Backup. Retrieved 01JUL2024.](https://attack.mitre.org/mitigations/M0953)
6. [MITRE ATT&CK Mitigation: Out-of-Band Communications Channel. Retrieved 01JUL2024.](https://attack.mitre.org/mitigations/M0810)
7. [MITRE ATT&CK Mitigation: Redundancy of Service. Retrieved 01JUL2024.](https://attack.mitre.org/mitigations/M0811)

