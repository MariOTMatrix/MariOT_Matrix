---
id: endpoint_detection_and_response
title: Endpoint Detection and Response
---

# Endpoint Detection and Response

Endpoint Detection and Response (EDR) refers to a cybersecurity solution designed to monitor, detect, and respond to threats on endpoint devices, including shipboard workstations, control servers, human-machine interfaces (HMIs), and industrial control systems. In maritime OT environments, EDR is critical for detecting anomalous behavior on propulsion management consoles, navigation terminals, and vendor-managed remote access platforms.


## Data Components

### File Access & Modification Logs
File Access & Modification Logs track interactions with files and directories on a system, including actions such as opening, reading, editing, copying, renaming, and deleting files. These logs provide critical visibility into file-based activities, helping organizations detect unauthorized access, data exfiltration attempts, or system integrity violations.In maritime OT contexts, these logs are especially valuable for monitoring unauthorized changes to configuration files, firmware binaries, or safety automation scripts within systems such as PMS, SCADA, or ECDIS.


| ID      | Name       |  Detection       |
|:------------|:-----------|:-----------|
| SS0002      | [Remote Maintenance Exploitation](/docs/remote_maintenance_exploitation)     | [Automated Detection & Response (EDR)](https://www.computerweekly.com/news/252464773/NotPetya-offers-industry-wide-lessons-says-Maersks-tech-chief?)    |

### Remote Administration Activity
Tracks the use of remote management protocols (e.g., SSH, RDP, VNC) on vessel control systems. These logs are vital for detecting unauthorized vendor access, maintenance abuse, or remote persistence mechanisms introduced through trusted administration channels.

| ID      | Name       |  Detection       |
|:------------|:-----------|:-----------|
| SS0009      | [ AIS Spoofing](/docs/ais_spoofing)     | [ Received Signal Strength Indicator (RSSI) Analysis](https://www.mdpi.com/2076-3417/11/11/5015?) |

### Process Creation
TProcess creation logs in maritime OT help identify suspicious binaries or scripts launched on control terminals or embedded devices. This includes unauthorized firmware flashing utilities, diagnostic tools executed via remote sessions, or scripts affecting navigation logic.


| ID      | Name       | 
|:------------|:-----------|

##

# References
1. [NotPetya offers industry-wide lessons, says Maersk’s tech chief. Retrieved April 4, 2025.](https://www.computerweekly.com/news/252464773/NotPetya-offers-industry-wide-lessons-says-Maersks-tech-chief?)
2. [AIS Data Vulnerability Indicated by a Spoofing Case-Study. Retrieved April 8, 2025.](https://www.mdpi.com/2076-3417/11/11/5015?)