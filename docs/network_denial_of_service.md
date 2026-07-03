---
sidebar_label: 'Network Denial of View'
sidebar_position: 2
---

# Network Denial of View

# Summary

Adversaries may cause a denial of view to disrupt and prevent operator oversight on the status of a maritime environment. This may manifest as a temporary communication failure between a device and its control source, with the interface recovering and becoming available once the interference ceases.

An adversary may attempt to deny operator visibility by preventing them from receiving status and reporting messages. Denying this view may temporarily block operators from noticing a change in state or anomalous behavior. The environment's data and processes may still be operational but functioning in an unintended or adversarial manner.

##

# Procedure Examples
| ID      | Name     | Description |
|:------------|:-----------|:--------------|
| N0001      | Network Attacks Against Marine Radar Systems     | 1.25         |
| N0002     | Yellow     | 0.75         |
| N0003     | Orange     | 1.00         |

##

# Mitigations
| ID      | Mitigation    | Description |
|:------------|:-----------|:--------------|
| M0953       | Data Backup        | Take and store data backups from end user systems and critical servers. Ensure backup and storage systems are hardened and kept separate from the corporate network to prevent compromise. Maintain and exercise incident response plans, including the management of gold-copy back-up images and configurations for key systems to enable quick recovery and response from adversarial activities that impact control, view, or availability.         |
| Banana     | Yellow     | 0.75         |

##

# References
1. [Network Attacks Against Marine Radar Systems:
A Taxonomy, Simulation Environment, and Dataset](https://ieeexplore.ieee.org/document/9843801).
