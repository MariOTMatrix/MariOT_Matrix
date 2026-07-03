---
id: hmi_interaction_logs
title: HMI interaction logs
---

# HMI interaction logs

HMI interaction logs record operator actions performed via onboard interfaces, such as charting software, bridge displays, or SCADA terminals. These logs capture button presses, screen navigation events, manual overrides, and parameter adjustments initiated by crew members [^1].

## Data Components

### Anomalous GUI Interactions
Analyzes deviations in user behavior, including rapid configuration changes, excessive login attempts, or unauthorized system commands issued through graphical menus.Particularly relevant for detecting command misuse on onboard terminals used to configure propulsion, cargo automation, or communication systems.

| ID      | Name       |  Detection       |
|:------------|:-----------|:-----------|
| SS0009      | [ AIS Spoofing](/docs/ais_spoofing)     | [ Cross-Verification with Radar Data](https://www.mdpi.com/2072-4292/12/4/702?) |

# References
1. [Prediction of Human–Machine Interface (HMI) Operational Errors for Maritime Autonomous Surface Ships (MASS). Retrieved June 3, 2025.](https://www.researchgate.net/publication/353033965_Prediction_of_human-machine_interface_HMI_operational_errors_for_maritime_autonomous_surface_ships_MASS)
2. [Detection of AIS Closing Behavior and MMSI Spoofing Behavior of Ships Based on Spatiotemporal Data. Retrieved April 8, 2025.](https://www.mdpi.com/2072-4292/12/4/702?)