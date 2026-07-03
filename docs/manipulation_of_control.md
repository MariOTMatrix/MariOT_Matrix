---
sidebar_label: 'Manipulation of Control'
sidebar_position: 50
---

# Manipulation of Control

# Summary
Adversaries may manipulate physical process control within maritime environments. Methods can include changing setpoint values, tags, or other parameters. Adversaries may manipulate control system devices or use their own to command physical processes, either temporarily or for extended periods depending on detection. Techniques include:

* Man-in-the-middle
* Spoof command message
* Changing setpoints

For example, a malicious actor could capture and replay legitimate control signals to alter ship navigation systems, potentially causing collisions or grounding. This manipulation poses serious risks to vessel safety and maritime operations.



# Procedure Examples
| ID      | Name       | Description |
|:------------|:-----------|:--------------|
| C0028 | [2015 Ukraine Electric Power Attack](https://attack.mitre.org/campaigns/C0028/) | During the 2015 Ukraine Electric Power Attack, Sandworm Team opened live breakers via remote commands to the HMI, causing blackouts. |
| S0604 | [Industroyer](https://attack.mitre.org/software/S0604) | Industroyer toggles breakers to the open state utilizing unauthorized command messages. |
| S0603 | [Stuxnet](https://attack.mitre.org/software/S0603) | Stuxnet can reprogram a PLC and change critical parameters in such a way that legitimate commands can be overridden or intercepted. In addition, Stuxnet can apply inappropriate command sequences or parameters to cause damage to property. |

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
1. [MITRE ATT&CK Technique: Manipulation of Control. Retrieved 01JUL2024.](https://attack.mitre.org/techniques/T0831/)
2. [Procedure Examples: 2015 Ukraine Electric Power Attack. Retrieved 01JUL2024.](https://attack.mitre.org/campaigns/C0028/)
3. [Procedure Examples: Industroyer. Retrieved 01JUL2024.](https://attack.mitre.org/software/S0604/)
4. [Procedure Examples: Stuxnet. Retrieved 01JUL2024.](https://attack.mitre.org/software/S0603 )
5. [MITRE ATT&CK Mitigation: Communication Authenticity. Retrieved 01JUL2024.](https://attack.mitre.org/mitigations/M0802)
6. [MITRE ATT&CK Mitigation: Data Backup. Retrieved 01JUL2024.](https://attack.mitre.org/mitigations/M0953)
7. [MITRE ATT&CK Mitigation: Out-of-Band Communications Channel. Retrieved 01JUL2024.](https://attack.mitre.org/mitigations/M0810)




