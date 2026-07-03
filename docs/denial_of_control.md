---
sidebar_label: 'Denial of Control'
sidebar_position: 42
---

# Denial of Control

# Summary
Adversaries may cause a denial of control to temporarily prevent maritime operators and engineers from interacting with process controls. An adversary may attempt to deny process control access to cause a temporary loss of communication with the control device or to prevent operator adjustment of maritime process controls. An affected process may still be operating during the period of control loss, but not necessarily in a desired state.

In a notable maritime incident, operators were unable to disable false alarms on a vessel's emergency alert system, leading to significant confusion and disruption among the crew and nearby vessels.


# Procedure Examples
| ID      | Name       | Description |
|:------------|:-----------|:--------------|
| C0028 | [2015 Ukraine Electric Power Attack](https://attack.mitre.org/campaigns/C0028/) | During the 2015 Ukraine Electric Power Attack, KillDisk rendered devices that were necessary for remote recovery unusable, including at least one RTU. Additionally, Sandworm Team overwrote the firmware for serial-to-ethernet converters, denying operators control of the downstream devices.  |
| S0604 | [Industroyer](https://attack.mitre.org/software/S0604/) | Industroyer is able to block serial COM channels temporarily causing a denial of control. |
| C0020 | [Maroochy Water Breach](https://attack.mitre.org/campaigns/C0020) | In the Maroochy Water Breach, the adversary temporarily shut an investigator out of the network preventing them from issuing any controls. |


&nbsp;

# Mitigations
| ID      | Mitigation       | Description |
|:------------|:-----------|:--------------|
| M0953 | [Data Backup](https://attack.mitre.org/mitigations/M0953/) | Take and store data backups from end user systems and critical servers. Ensure backup and storage systems are hardened and kept separate from the corporate network to prevent compromise. Maintain and exercise incident response plans, including the management of gold-copy back-up images and configurations for key systems to enable quick recovery and response from adversarial activities that impact control, view, or availability. |
| M0810 | [Out-of-Band Communications Channel](https://attack.mitre.org/mitigations/M0810/) | Provide operators with redundant, out-of-band communication to support monitoring and control of the operational processes, especially when recovering from a network outage. Out-of-band communication should utilize diverse systems and technologies to minimize common failure modes and vulnerabilities within the communications infrastructure. For example, wireless networks (e.g., 3G, 4G) can be used to provide diverse and redundant delivery of data. |
| M0811 | [Redundancy of Service](https://attack.mitre.org/mitigations/M0811/) | Hot-standbys in diverse locations can ensure continued operations if the primarily system are compromised or unavailable. At the network layer, protocols such as the Parallel Redundancy Protocol can be used to simultaneously use redundant and diverse communication over a local network.  |


&nbsp;

##

# References
1. [MITRE ATT&CK Technique: Denial of Control. Retrieved 01JUL2024.](https://attack.mitre.org/techniques/T0813/)
2. [Procedure Examples: 2015 Ukraine Electric Power Attack. Retrieved 01JUL2024.](https://attack.mitre.org/campaigns/C0028/)
3. [Procedure Examples: Industroyer. Retrieved 01JUL2024.](https://attack.mitre.org/software/S0604/)
4. [Procedure Examples: Maroochy Water Breach. Retrieved 01JUL2024.](https://attack.mitre.org/campaigns/C0020)
5. [MITRE ATT&CK Mitigation: Data Backup. Retrieved 01JUL2024.](https://attack.mitre.org/mitigations/M0953)
6. [MITRE ATT&CK Mitigation: Out-of-Band Communications Channel. Retrieved 01JUL2024.](https://attack.mitre.org/mitigations/M0810)
7. [MITRE ATT&CK Mitigation: Redundancy of Service. Retrieved 01JUL2024.](https://attack.mitre.org/mitigations/M0811)



