---
sidebar_label: 'Damage to Property'
sidebar_position: 41
---

# Damage to Property

# Summary
Adversaries may cause damage and destruction of property to maritime infrastructure, vessels, and the surrounding marine environment when attacking control systems. This technique may result in equipment failure or operational breakdown, or represent collateral damage from other techniques used in an attack. Depending on the severity of physical damage and disruption caused to control processes and systems, this technique may result in Loss of Safety. Operations that result in Loss of Control may also cause damage to property, which may be directly or indirectly motivated by an adversary seeking to cause impact in the form of Loss of Productivity and Revenue.

The German Federal Office for Information Security (BSI) reported a targeted attack on a maritime facility under an incidents affecting business section of its 2014 IT Security Report. These targeted attacks affected maritime operations and resulted in breakdowns of control system components and even entire installations. As a result of these breakdowns, massive impact and damage resulted from the uncontrolled shutdown of critical maritime operations.

A Polish student used a remote controller device to interface with a port's logistics system in Poland. Using this remote, the student was able to capture and replay legitimate control signals. This resulted in damage to impacted vessels, crew members, and the surrounding property. Reportedly, multiple vessels were misdirected and forced to make emergency maneuvers. Commands issued by the student may have also resulted in vessel collisions, causing harm to those on board and the environment outside.


# Procedure Examples
| ID      | Name       | Description |
|:------------|:-----------|:--------------|
| C0020 | [Maroochy Water Breach](https://attack.mitre.org/campaigns/C0020) | In the Maroochy Water Breach, the adversary gained remote computer access to the control system and altered data so that whatever function should have occurred at affected pumping stations did not occur or occurred in a different way. This ultimately led to 800,000 liters of raw sewage being spilled out into the community. The raw sewage affected local parks, rivers, and even a local hotel. This resulted in harm to marine life and produced a sickening stench from the community's affected rivers. |


&nbsp;


# Mitigations
| ID      | Mitigation       | Description |
|:------------|:-----------|:--------------|
| M0805 | [Mechanical Protection Layers](https://attack.mitre.org/mitigations/M0805) | Protection devices should have minimal digital components to prevent exposure to related adversarial techniques. Examples include interlocks, rupture disks, release valves, etc. |
| M0807 | [Network Allowlists](https://attack.mitre.org/mitigations/M0807/) | Use host-based allowlists to prevent devices from accepting connections from unauthorized systems. For example, allowlists can be used to ensure devices can only connect with master stations or known management/engineering workstations. |
| M0812 | [Safety Instrumented Systems](https://attack.mitre.org/mitigations/M0812/) | Ensure that all SIS are segmented from operational networks to prevent them from being targeted by additional adversarial behavior. |

&nbsp;

##

# References
1. [MITRE ATT&CK Technique: Damage to Property. Retrieved 01JUL2024.](https://attack.mitre.org/techniques/T0879/)
2. [Procedure Examples: Maroochy Water Breach. Retrieved 01JUL2024.](https://attack.mitre.org/campaigns/C0020)
3. [MITRE ATT&CK Mitigation: Mechanical Protection Layers. Retrieved 01JUL2024.](https://attack.mitre.org/mitigations/M0805)
4. [MITRE ATT&CK Mitigation: Network Allowlists. Retrieved 01JUL2024.](https://attack.mitre.org/mitigations/M0807/)
5. [MITRE ATT&CK Mitigation: Safety Instrumented Systems. Retrieved 01JUL2024.](https://attack.mitre.org/mitigations/M0812)

