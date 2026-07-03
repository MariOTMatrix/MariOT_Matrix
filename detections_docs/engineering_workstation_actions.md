---
id: engineering_workstation_actions
title: Engineering Workstation Actions
---

# Engineering Workstation Action

Engineering workstation action logs document user activities on board EWS, which function as centralized interfaces to configure, update, and manage operational technology assets such as PLC, HMI and navigation control systems. In maritime OT environments, these logs include events such as downloads of control logic to propulsion units, parameter modifications in automation routines, firmware deployment actions, and access to remote terminal sessions[^1][^2].

## Data Components

### User login records
| ID      | Name       | 
|:------------|:-----------|
| SS0011      | [Abuse of Trusted Relationships](/docs/abuse_of_trusted_relationships)        | 


### Privileged command execution
| ID      | Name       |  Detection       |
|:------------|:-----------|:-----------|
| SS0001      | [Abuse of Trusted Relationships](/docs/abuse_of_trusted_relationships)     |[Detect abnormal actions by third-party privileged accounts](https://www.dco.uscg.mil/Portals/9/2021CyberTrendsInsightsMarineEnvironmentReport.pdf)            |
| SS0002      | [Remote Maintenance Exploitation](/docs/remote_maintenance_exploitation)     | [APT-Level Behavioral Analytics](https://blog.isa.org/lessons-learned-forensic-analysis-ukrainian-power-grid-cyberattack-malware?)         |

### Script execution
| ID      | Name       |  Detection       |
|:------------|:-----------|:-----------|
| SS0018      | [Command and Scripting Interpreter](/docs/command_and_scripting_interpreter)        | 
| SS0025      | [Infiltration Through Removable Media](/docs/infiltration_through_removable_media)        | 
| SS0003      | [Command and Scripting Interpreter](/docs/command_and_scripting_interpreter)     |  [Chaos Testing with pumba](https://github.com/alexei-led/pumba)|

### Command line arguments
| ID      | Name       |  Detection       |
|:------------|:-----------|:-----------|
| SS0019      | [Command and Scripting Interpreter](/docs/command_and_scripting_interpreter)        | 
| SS0003      | [Command and Scripting Interpreter](/docs/command_and_scripting_interpreter)     |  [Chaos Testing with pumba](https://github.com/alexei-led/pumba)|

### USB device event
| ID      | Name       | 
|:------------|:-----------|
| SS0024      | [Infiltration Through Removable Media](/docs/infiltration_through_removable_media)        | 

### File drop event
| ID      | Name       | 
|:------------|:-----------|
| SS0026      | [Infiltration Through Removable Media](/docs/infiltration_through_removable_media)        | 

### Configuration file modification
| ID      | Name       | 
|:------------|:-----------|
| SS0027      | [Configuration Hijacking](/docs/configuration_hijacking)        | 

### Modified Configuration at Startup
| ID      | Name       | 
|:------------|:-----------|
| SS0028      | [Configuration Hijacking](/docs/configuration_hijacking)        | 

### Persistence Mechanism Indicator
| ID      | Name       | 
|:------------|:-----------|
| SS0029      | [Configuration Hijacking](/docs/configuration_hijacking)        | 

### Command Execution Logging
Logs commands executed on a system, including command-line arguments, user context, and privileges.
| ID      | Name       |  Detection       |
|:------------|:-----------|:-----------|
| SS0009      | [ AIS Spoofing](/docs/ais_spoofing)     | [ Anomaly Detection Algorithms](https://www.researchgate.net/publication/354558013_Algorithms_for_detecting_vessel_spoofing_of_space-based_AIS_data) |

### Configuration Changes
Tracks modifications in system configurations, including firewall rules, access control lists (ACLs),startup services, registry keys, configuration files  and software/firmware updates.

| ID      | Name       |  Detection       |
|:------------|:-----------|:-----------|
| SS0005      | [Native API Execution](/docs/native_api_execution)     | [Analyze engineering workstation logs](https://www.linkedin.com/pulse/logs-monitoring-industrial-control-systems-mohamed-nouh-dazahra-vgioe/)                    |
| SS0008      | [Automated Task Execution](/docs/automated_task_execution)     | [Golden Logic Comparison](https://arxiv.org/pdf/1702.05241) |
| SS0007      | [Hardcoded or Default Credentials](/docs/hardcoded_or_default_credentials)     | [Configuration Audit of Default Credentials](https://mp.weixin.qq.com/s?__biz=MzU3MzQyOTU0Nw==&mid=2247492991&idx=1&sn=9517fcd3799805dc752de89075d90a9b&chksm=fcc3673bcbb4ee2dd0dd22583a15b29cd0ee3f7588ae233acb264ea890d2bf73f985f6122a69&scene=58&subscene=0#rd) |


# References
1. [Guide to Operational Technology (OT) Security. Retrieved June 3, 2025.](https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-82r3.pdf)
2. [Incident Response for Operational Technology (OT). Retrieved June 3, 2025.](https://hub.dragos.com/hubfs/Dragos_WP_OT-Incident-Response-0323.pdf)
3. [Logs Monitoring in Industrial Control Systems. Retrieved March 28, 2025.](https://www.linkedin.com/pulse/logs-monitoring-industrial-control-systems-mohamed-nouh-dazahra-vgioe/)
4. [On Ladder Logic Bombs in Industrial Control Systems. Retrieved March 24, 2025.](https://arxiv.org/pdf/1702.05241)
5. [Industrial Control Network Security Landscape 2024 White Paper. Retrieved March 28, 2025.](https://mp.weixin.qq.com/s?__biz=MzU3MzQyOTU0Nw==&mid=2247492991&idx=1&sn=9517fcd3799805dc752de89075d90a9b&chksm=fcc3673bcbb4ee2dd0dd22583a15b29cd0ee3f7588ae233acb264ea890d2bf73f985f6122a69&scene=58&subscene=0#rd)
6. [A. Ledenev, “Alexei-led/pumba: Chaos testing, network emulation, and stress testing tool for containers.” Retrieved March 26, 2025.](https://github.com/alexei-led/pumba)
7. [Algorithms for detecting vessel spoofing of space-based AIS data. Retrieved April 8, 2025.](https://www.researchgate.net/publication/354558013_Algorithms_for_detecting_vessel_spoofing_of_space-based_AIS_data)