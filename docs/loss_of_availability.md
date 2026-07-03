---
sidebar_label: 'Loss of Availability'
sidebar_position: 44
---

# Loss of Availability

# Summary
Adversaries may attempt to disrupt essential maritime components or systems to prevent ship owners and operators from delivering cargo or services.

Adversaries may leverage malware to delete or encrypt critical data on shipboard HMIs, navigational workstations, or cargo management databases.

In July 2021, South Africa's Transnet suffered a major ransomware attack, disrupting key ports including Durban and Cape Town, and forcing a switch to manual operations. This incident, compounded by recent civil unrest, caused significant delays during the peak citrus export season, highlighting critical infrastructure vulnerabilities and the need for robust cybersecurity measures​.


# Procedure Examples
| ID      | Name       | Description |
|:------------|:-----------|:--------------|
| C0028 | [2015 Ukraine Electric Power Attack](https://attack.mitre.org/campaigns/C0028/) | During the 2015 Ukraine Electric Power Attack, Sandworm Team opened the breakers at the infected sites, shutting the power off for thousands of businesses and households for around 6 hours. |
| S0608 | [Conficker](https://attack.mitre.org/software/S0608/) | A Conficker infection at a nuclear power plant forced the facility to temporarily shutdown. |
| C0031 | [Unitronics Defacement Campaign](https://attack.mitre.org/campaigns/C0031) | During the Unitronics Defacement Campaign, the CyberAv3ngers caused multiple businesses to halt operations due to the unavailability of the Programmable Logic Controller (PLC) and Human-Machine Interface (HMI). These victims covered multiple sectors. |


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
3. [Procedure Examples: Conficker. Retrieved 01JUL2024.](https://attack.mitre.org/software/S0608/)
4. [Procedure Examples: Unitronics Defacement Campaign. Retrieved 01JUL2024.](https://attack.mitre.org/campaigns/C0031)
5. [MITRE ATT&CK Mitigation: Data Backup. Retrieved 01JUL2024.](https://attack.mitre.org/mitigations/M0953)
6. [MITRE ATT&CK Mitigation: Out-of-Band Communications Channel. Retrieved 01JUL2024.](https://attack.mitre.org/mitigations/M0810)
7. [MITRE ATT&CK Mitigation: Redundancy of Service. Retrieved 01JUL2024.](https://attack.mitre.org/mitigations/M0811)
8. [History of cyberattacks against ports: South Africa, July 2021: a case of cyber-force majeure. Retrieved 01JUL2024.](https://resilientmaritimelogistics.unctad.org/guidebook/case-study-17-port-durban-south-africa)


