---
id: network_traffic_logs
title: Network Traffic Logs
---

# Network Traffic Logs

Network traffic logs  document data exchange between the IT and OT systems. In maritime environments, these logs encompass conventional protocols, including HTTP, DNS, email and file transfer, in addition to industrial and maritime-specific communication standards such as Modbus/TCP, NMEA 0183[^9], IEC 61162, and proprietary telemetry used in navigation, propulsion, and power control systems. Traffic records may be stored in summarized formats (e.g., NetFlow) or captured as raw packet traces (e.g., PCAP) to support detailed forensic investigations [^10]. These logs are essential for identifying anomalies, including unauthorized remote access, exploitation of encrypted communication channels, and manipulation of control layer protocols. Within maritime OT infrastructures, continuous monitoring of network traffic is fundamental for detecting remote maintenance interface abuse, lateral movement through trusted industrial protocols, and improper use of vendor-provided VPN connections and administrative access tools operating over satellite links such as VSAT or Iridium[^11].

## Data Components

### Network Flow Data
Records authentication activities, including successful and failed login attempts, account lockouts, and password changes.

| ID      | Name       |  Detection     |
|:------------|:-----------|:-----------|
| SS0003      | [Command and Scripting Interpreter](/docs/command_and_scripting_interpreter)     |  [Network Emulation in ns3](https://link.springer.com/chapter/10.1007/978-3-642-12331-3_2)|
| SS0003      | [Command and Scripting Interpreter](/docs/command_and_scripting_interpreter)     |  [Packet Analysis and Traffic Monitoring](https://www.sciencedirect.com/book/9781597490733/wireshark-and-ethereal-network-protocol-analyzer-toolkit)|
| SS0009      | [ AIS Spoofing](/docs/ais_spoofing)     | [Time Difference of Arrival (TDOA) Analysis](https://www.crfs.com/blog/ais-spoofing-detection-with-tdoa?) |

### Remote Administration Activity
Remote administration activity refers to actions taken by administrators or automated processes to manage IT and OT (Operational Technology) systems from a distance. These activities typically involve the use of remote desktop protocols (RDP), Secure Shell (SSH), VPNs, remote management tools (e.g., TeamViewer, AnyDesk), or proprietary remote administration platforms. While remote access is essential for system maintenance, troubleshooting, and updates, it also introduces significant security risks if not properly secured.These tools are frequently used by shore-based vendors to access shipboard SCADA, PMS, and navigation control systems.

| ID      | Name       |  Detection      |
|:------------|:-----------|:-----------|
| SS0002      | [Remote Maintenance Exploitation](/docs/remote_maintenance_exploitation)     |[Industrial Internet Intrusion Detection](https://crad.ict.ac.cn/cn/article/doi/10.7544/issn1000-1239.20211147)                      |

### Encrypted Channel Communications
Monitors encrypted network traffic to detect abnormal use of secure channels for command execution.

| ID      | Name       |  Detection       |
|:------------|:-----------|:-----------|
| SS0005      | [Native API Execution](/docs/native_api_execution)     |[Monitor SIS-related network traffic ](https://www.dragos.com/blog/industry-news/ethernet-vulnerabilities-in-safety-instrumented-systems-sis-a-key-difference/?utm_source=chatgpt.com)                       |
| SS0003      | [Command and Scripting Interpreter](/docs/command_and_scripting_interpreter)     |  [Network Emulation in ns3](https://link.springer.com/chapter/10.1007/978-3-642-12331-3_2)|
| SS0008      | [Automated Task Execution](/docs/automated_task_execution)     | [Network-based Countermeasures](https://www.sciencedirect.com/science/article/pii/S1874548213000243) |
| SS0007      | [Hardcoded or Default Credentials](/docs/hardcoded_or_default_credentials)     | [Intrusion Detection System (IDS) Deployment](https://www.aii-alliance.org/uploads/1/20211220/15c921056a5017ff2fa54cbafc04dcdf.pdf?) |

### Remote Desktop Protocol (RDP) Sessions
Captures network traffic related to RDP, VNC, or other remote GUI access protocols.

| ID      | Name       |  Detection       |
|:------------|:-----------|:-----------|
| SS0006      | [Execution via GUI](/docs/execution_via_gui)     | [Protocol-aware anomaly detection](https://www.sciencedirect.com/science/article/pii/S1874548213000243)                    |
| SS0003      | [Command and Scripting Interpreter](/docs/command_and_scripting_interpreter)     |  [Packet Analysis and Traffic Monitoring](https://www.sciencedirect.com/book/9781597490733/wireshark-and-ethereal-network-protocol-analyzer-toolkit)|

### ARP request/reply
| ID      | Name       | 
|:------------|:-----------|
| SS0012      | [Network Connection Enumeration](/docs/network_connection_enumeration)        | 
| SS0016      | [Adversary in the Middle](/docs/adversary_in_the_middle)        | 

### SYN scan detection
| ID      | Name       | 
|:------------|:-----------|
| SS0013      | [Network Connection Enumeration](/docs/network_connection_enumeration)        | 

### Captured pcap files
| ID      | Name       | 
|:------------|:-----------|
| SS0014      | [Network Sniffing](/docs/network_sniffing)        | 

### Unencrypted AIS/NMEA data
| ID      | Name       | 
|:------------|:-----------|
| SS0015      | [Network Sniffing](/docs/network_sniffing)        | 

### MAC-IP mismatch indicators
| ID      | Name       | 
|:------------|:-----------|
| SS0017      | [Adversary in the Middle](/docs/adversary_in_the_middle)        | 

##

# References
1. [G. F. Riley and T. R. Henderson, The ns-3 Network Simulator. Berlin, Heidelberg: Springer Berlin Heidelberg, 2010, pp. 15–34. Retrieved March 26, 2025.](https://link.springer.com/chapter/10.1007/978-3-642-12331-3_2)
2. [A. Orebaugh, G. Ramirez, J. Beale, and J. Wright, Wireshark & Ethereal Network Protocol Analyzer Toolkit. Syngress Publishing, 2007. Retrieved March 26, 2025.](https://www.sciencedirect.com/book/9781597490733/wireshark-and-ethereal-network-protocol-analyzer-toolkit)
3. [ Goldenberg, N., Wool, A.: Accurate modeling of Modbus/TCP for intrusion detection in SCADA systems. International Journal of Critical Infrastructure Protection 6(2), 63–75 (2013). Retrieved March 26, 2025.](https://www.sciencedirect.com/science/article/pii/S1874548213000243)
4. [ Ethernet Vulnerabilities in Safety Instrumented Systems (SIS): A ‘Key’ Difference. Retrieved March 28, 2025.](https://www.dragos.com/blog/industry-news/ethernet-vulnerabilities-in-safety-instrumented-systems-sis-a-key-difference/?utm_source=chatgpt.com)
5. [Accurate modeling of Modbus/TCP for intrusion detection in SCADA systems. Retrieved March 28, 2025.](https://www.sciencedirect.com/science/article/pii/S1874548213000243)
6. [China Industrial Internet Security Situation Report. Retrieved March 28, 2025.](https://www.aii-alliance.org/uploads/1/20211220/15c921056a5017ff2fa54cbafc04dcdf.pdf?)
7. [A review of intrusion detection in industrial Internet based on machine learning. Retrieved March 28, 2025.](https://crad.ict.ac.cn/cn/article/doi/10.7544/issn1000-1239.20211147)
8. [AIS Spoofing Detection with TDOA. Retrieved April 8, 2025.](https://www.crfs.com/blog/ais-spoofing-detection-with-tdoa?)
9. [NMEA 0183 Standard. Retrieved June 3, 2025.](https://tronico.fi/OH6NT/docs/NMEA0183.pdf)
10. [NetFlow and PCAP Logs Reveal Multi-Stage Attacks In Corporate Networks. Retrieved June 3, 2025.](https://gbhackers.com/netflow-and-pcap-logs-reveal-multi-stage-attacks-in-corporate-networks/)
11. [Uncovering Inherent Security Issues in Current VSAT System Practices. Retrieved June 3, 2025.](https://lenders.ch/publications/conferences/wisec24.pdf)