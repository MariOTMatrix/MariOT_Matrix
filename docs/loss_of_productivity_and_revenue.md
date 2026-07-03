---
sidebar_label: 'Loss of Productivity and Revenue'
sidebar_position: 46
---

# Loss of Productivity and Revenue

# Summary
Adversaries may cause loss of productivity and revenue in maritime operations by disrupting and damaging control system operations, devices, and processes. This can occur directly through ICS-targeting attacks or indirectly through IT-targeting attacks in non-segregated environments. When port operations or maritime services are halted, it impacts the entire supply chain, causing shortages and increased prices. For instance, a ransomware attack on a major shipping company could halt cargo handling, leading to potential shortages and delays in goods delivery. Similarly, a cyberattack on port operations could significantly disrupt fuel transportation, akin to the 2021 Colonial Pipeline incident.


# Procedure Examples
| ID      | Name       | Description |
|:------------|:-----------|:--------------|
| C0028 | [2015 Ukraine Electric Power Attack](https://attack.mitre.org/campaigns/C0028/) | During the 2015 Ukraine Electric Power Attack, power breakers were opened which caused the operating companies to be unable to deliver power, and left thousands of businesses and households without power for around 6 hours. |
| S0606 | [Bad Rabbit](https://attack.mitre.org/software/S0606/) | Several transportation organizations in Ukraine have suffered from being infected by Bad Rabbit, resulting in some computers becoming encrypted, according to media reports. |
| S0608 | [Conficker](https://attack.mitre.org/software/S0608/) | A Conficker infection at a nuclear power plant forced the facility to shutdown and go through security procedures involved with such events, with its staff scanning computer systems and going through all the regular checks and motions before putting the plant back into production. |
| S0605 | [EKANS](https://attack.mitre.org/software/S0605/) | EKANS infection resulted in a temporary production loss within a Honda manufacturing plant. |
| S0372 | [LockerGoga](https://attack.mitre.org/software/S0372) | While Norsk Hydro attempted to recover from a LockerGoga infection, most of its 160 manufacturing locations switched to manual (non-IT driven) operations. Manual operations can result in a loss of productivity. |
| S0368 | [NotPetya](https://attack.mitre.org/software/S0368/) | NotPetya disrupted manufacturing facilities supplying vaccines, resulting in a halt of production and the inability to meet demand for specific vaccines. |
| S0496 | [REvil](https://attack.mitre.org/software/S0496/) | RThe REvil malware gained access to an organizations network and encrypted sensitive files used by OT equipment. |
| S0446 | [Ryuk](https://attack.mitre.org/software/S0446/) | An enterprise resource planning (ERP) manufacturing server was lost to the Ryuk attack. The manufacturing process had to rely on paper and existing orders to keep the shop floor open. |
| C0030 | [Triton Safety Instrumented System Attack](https://attack.mitre.org/campaigns/C0030/) | In the Triton Safety Instrumented System Attack, TEMP.Veles tripped a controller into a failed safe state, which caused an automatic shutdown of the plant, this resulted in a pause of plant operations for more than a week. Thereby impacting industrial processes and halting productivity. |
| C0031 | [Unitronics Defacement Campaign](https://attack.mitre.org/campaigns/C0031) | During the Unitronics Defacement Campaign, the CyberAv3ngers caused multiple businesses to halt operations in their industrial environments, impacting their typical business operations. These victims covered multiple sectors. |


&nbsp;

# Mitigations
| ID      | Mitigation       | Description |
|:------------|:-----------|:--------------|
| M0953 | [Data Backup](https://attack.mitre.org/mitigations/M0953/) | Take and store data backups from end user systems and critical servers. Ensure backup and storage systems are hardened and kept separate from the corporate network to prevent compromise. Maintain and exercise incident response plans, including the management of gold-copy back-up images and configurations for key systems to enable quick recovery and response from adversarial activities that impact control, view, or availability. |


&nbsp;

##

# References
1. [MITRE ATT&CK Technique: Loss of Productivity and Revenue. Retrieved 01JUL2024.](https://attack.mitre.org/techniques/T0828/)
2. [Procedure Examples: 2015 Ukraine Electric Power Attack. Retrieved 01JUL2024.](https://attack.mitre.org/campaigns/C0028/)
3. [Procedure Examples: Bad Rabbit. Retrieved 01JUL2024.](https://attack.mitre.org/software/S0606/)
4. [Procedure Examples: Conficker. Retrieved 01JUL2024.](https://attack.mitre.org/software/S0608/)
5. [Procedure Examples: EKANS. Retrieved 01JUL2024.](https://attack.mitre.org/software/S0605/)
6. [Procedure Examples: LockerGoga. Retrieved 01JUL2024.](https://attack.mitre.org/software/S0372)
7. [Procedure Examples: NotPetya. Retrieved 01JUL2024.](https://attack.mitre.org/software/S0368/)
8. [Procedure Examples: REvil. Retrieved 01JUL2024.](https://attack.mitre.org/software/S0496/)
9. [Procedure Examples: Ryuk. Retrieved 01JUL2024.](https://attack.mitre.org/software/S0446/)
10. [Procedure Examples: Triton Safety Instrumented System Attack. Retrieved 01JUL2024.](https://attack.mitre.org/campaigns/C0030)
11. [Procedure Examples: Unitronics Defacement Campaign. Retrieved 01JUL2024.](https://attack.mitre.org/campaigns/C0031)
12. [MITRE ATT&CK Mitigation: Data Backup. Retrieved 01JUL2024.](https://attack.mitre.org/mitigations/M0953)



