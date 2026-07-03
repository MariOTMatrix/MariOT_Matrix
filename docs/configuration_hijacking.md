---
id: configuration_hijacking
sidebar_label: Configuration Hijacking
---

# Configuration Hijacking

# Summary

An adversarial technique in which the attacker modifies application-level configuration files to reroute inputs, alter system behavior, or masquerade as legitimate components. In maritime OT systems, this may involve changing data source paths in navigation software (e.g., OpenCPN) to redirect serial input to adversary-controlled interfaces, achieving persistent control without escalating privileges. The behavior aligns with persistence goals and enables covert interception or injection of operational data streams.

# Procedure Examples
| ID      | Name       | Description |
|:------------|:-----------|:--------------|
| ZD00016      | [Impact Through Malware](https://link.springer.com/chapter/10.1007/978-3-031-17143-7_26) | Configuration Hijacking involves modifying the configuration of maritime software (e.g., OpenCPN) to reroute AIS and NMEA inputs from a serial interface to an attacker-controlled UDP source. |

&nbsp;

# Targeted Assets
| ID      | Asset       |
|:------------|:-----------|
| L0025 | [OpenCPN Charting Software](/assets/opencpn_charting_software) |

&nbsp;

# Mitigations
| ID      | Mitigation       | Description |
|:------------|:-----------|:--------------|
| [R0019](https://www.acsac.org/2022/program/artifacts_competition/Tripwire-final.pdf?) |  Configuration File Integrity Monitoring | Utilize file integrity monitoring (FIM) tools, such as Tripwire, to establish a baseline of critical configuration files and detect unauthorized changes. |
| [R0020](https://arxiv.org/abs/2203.04072?) | Enforce the Principle of Least Privilege |Restrict write permissions to configuration files, ensuring only authorized users or processes can modify them.|

##

# References
1. [From Click to Sink: Utilizing AIS for Command and Control in Maritime Cyber Attacks. Retrieved May 21, 2025.](https://link.springer.com/chapter/10.1007/978-3-031-17143-7_26)
2. [Tripwire: Pioneering Integrity Scanning for Cybersecurity. Retrieved May 23, 2025.](https://www.acsac.org/2022/program/artifacts_competition/Tripwire-final.pdf?)
3. [Guidelines for cyber risk management in shipboard operational technology systems. Retrieved May 23, 2025.](https://arxiv.org/abs/2203.04072?)