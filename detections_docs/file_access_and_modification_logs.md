---
id: file_access_and_modification_logs
title: File Access & Modification Logs
---

# File Access & Modification Logs

File Access and Modification Logs are critical components of security monitoring within shipboard systems, recording changes to files, directories, and executable content. In maritime OT environments, such logs are essential for tracking unauthorized modifications in propulsion control units, navigation systems such as ECDIS, and remote maintenance interfaces accessed by external vendors or classification societies [^1]. These logs are particularly valuable for identifying persistent advanced threats, manipulation of control logic, and configuration changes outside of approved operational procedures [^2].
## Data Components

### Autostart Folder and Executable Changes
Detect unauthorized modifications in shipboard autostart folders, including changes to boot scripts or unauthorized executable files added to ship control systems.This is especially critical in shipboard Windows-based systems where OEM tools or diagnostic agents are set to auto-run, such as on engine room monitoring stations or bridge control panels.


| ID      | Name       | 
|:------------|:-----------|
| SS0007      | [Startup Execution](/docs/startup_execution)     | 

### Unauthorized File Changes (Script/Config Files)
Monitors unauthorized modifications to critical script and configuration files within maritime OT systems. Adversaries may alter startup scripts, scheduled task configurations, or service configuration files to establish persistence. Detection includes unauthorized changes to batch scripts, PowerShell scripts, shell scripts, system initialization files (rc.local, systemd service units), and Windows Registry keys related to task execution.Such changes are often introduced through remote maintenance sessions or vendor-deployed scripts, particularly during firmware updates or emergency diagnostics conducted over satellite VPN links.


| ID      | Name       | 
|:------------|:-----------|
| SS0008      | [Automated Task Execution](/docs/automated_task_execution)     | 

# References
1. [Guidelines for Cyber Resilience of Ships. Retrieved June 3, 2025.](https://www.classnk.or.jp/hp/pdf/activities/cybersecurity/gl_CyberResilienceofShips_202407e.pdf)
2. [Enhancing Maritime Cybersecurity through Operational Technology. Retrieved June 3, 2025.](https://www.mdpi.com/1424-8220/24/11/3458)
