---
sidebar_label: 'Loss of Safety'
sidebar_position: 48
---

# Loss of Safety

# Summary
Adversaries may compromise maritime safety system functions designed to maintain safe operations during dangerous conditions. These systems, similar to control systems, ensure processes fail safely. Rapid unsafe conditions often exceed human reaction times, making automated safety responses critical. Adversaries may disable these functions to enable further attacks or allow unsafe conditions to persist. Detecting such compromises can lead to process shutdowns due to strict safety policies, causing significant productivity and revenue losses, aligning with adversaries' goals to disrupt maritime operations.


# Procedure Examples
| ID      | Name       | Description |
|:------------|:-----------|:--------------|
| S1009 | [Triton](https://attack.mitre.org/software/S1009) | Triton has the capability to reprogram the SIS logic to allow unsafe conditions to persist or reprogram the SIS to allow an unsafe state while using the DCS to create an unsafe state or hazard. |

&nbsp;

# Mitigations
| ID      | Mitigation       | Description |
|:------------|:-----------|:--------------|
| M0805 | [Mechanical Protection Layers](https://attack.mitre.org/mitigations/M0805/) | Protection devices should have minimal digital components to prevent exposure to related adversarial techniques. Examples include interlocks, rupture disks, release valves, etc. |
| M0812 | [Safety Instrumented Systems](https://attack.mitre.org/mitigations/M0812/) | Ensure that all SIS are segmented from operational networks to prevent them from being targeted by additional adversarial behavior. |

&nbsp;

##

# References
1. [MITRE ATT&CK Technique: Loss of Safety. Retrieved 01JUL2024.](https://attack.mitre.org/techniques/T0880/)
2. [Procedure Examples: Triton. Retrieved 01JUL2024.](https://attack.mitre.org/software/S1009)
3. [MITRE ATT&CK Mitigation: Mechanical Protection Layers. Retrieved 01JUL2024.](https://attack.mitre.org/mitigations/M0805)
4. [MITRE ATT&CK Mitigation: Safety Instrumented Systems. Retrieved 01JUL2024.](https://attack.mitre.org/mitigations/M0812)
5. [History of cyberattacks against ports: Shahid Rajaee, May 2020: a cyberattack amidst geopolitical conflict. Retrieved 01JUL2024.](https://www.washingtonpost.com/national-security/officials-israel-linked-to-a-disruptive-cyberattack-on-iranian-port-facility/2020/05/18/9d1da866-9942-11ea-89fd-28fb313d1886_story.html)


