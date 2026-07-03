---
sidebar_label: 'Network Sniffing'
sidebar_position: 13
---

# Network Sniffing

# Summary
Network sniffing is the practice of using a network interface on a maritime system to monitor or capture information regardless of whether it is the specified destination for the information.

An adversary may attempt to sniff the traffic to gain information about the maritime target. This information can vary in the level of importance. Relatively unimportant information includes general communications to and from maritime systems. Relatively important information would be login details. User credentials may be sent over an unencrypted protocol, such as Telnet, that can be captured and obtained through network packet analysis.

In addition, ARP and Domain Name Service (DNS) poisoning can be used to capture credentials to maritime websites, proxies, and internal systems by redirecting traffic to an adversary.

&nbsp;

# Procedure Examples
| ID      | Name       | Description |
|:------------|:-----------|:--------------|
| S1045 | [INCONTROLLER](https://attack.mitre.org/software/S1045/) | INCONTROLLER can deploy Tcpdump to sniff network traffic and collect PCAP files. |
| MAT-S0603	| [Stuxnet](https://www.langner.com/wp-content/uploads/2017/03/to-kill-a-centrifuge.pdf) | DP_RECV is the name of a standard function block used by network coprocessors. It is used to receive network frames on the Profibus a standard industrial network bus used for distributed I/O. The original block is copied to FC1869, and then replaced by a malicious block. Each time the function is used to receive a packet, the malicious Stuxnet block takes control: it will call the original DP_RECV in FC1869 and then perform postprocessing on the packet data. The replaced DP_RECV block (later on referred to as the DP_RECV monitor) is meant to monitor data sent by the frequency converter drives to the 315-2 CPU via CP 342-5 Profibus communication modules. |
| S1010 | [VPNFilter](https://attack.mitre.org/software/S1010/) | The VPNFilter packet sniffer looks for basic authentication as well as monitors ICS traffic, and is specific to the TP-LINK R600-VPN. The malware uses a raw socket to look for connections to a pre-specified IP address, only looking at TCP packets that are 150 bytes or larger. Packets that are not on port 502, are scanned for BasicAuth, and that information is logged. This may have allowed credential harvesting from communications between devices accessing a modbus-enabled HMI. |

&nbsp;

# Targeted Assets
| ID      | Asset       |
|:------------|:-----------|
| A0001 | [Workstation](https://attack.mitre.org/assets/A0001/) |
| A0002 | [Human-Machine Interface (HMI)](https://attack.mitre.org/assets/A0002/) |
| A0003 | [Programmable Logic Controller(PLC)](https://attack.mitre.org/assets/A0003/) |
| A0004 | [Remote Terminal Unit (RTU)](https://attack.mitre.org/assets/A0004/) |
| A0005 | [Intelligent Electronic Device (IED)](https://attack.mitre.org/assets/A0005/) |
| A0006 | [Data Historian](https://attack.mitre.org/assets/A0006/) |
| A0007 | [Control Server](https://attack.mitre.org/assets/A0007/) |
| A0008 | [Application Server](https://attack.mitre.org/assets/A0008/) |
| A0009 | [Data Gateway](https://attack.mitre.org/assets/A0009/) |
| A0010 | [Safety Controller](https://attack.mitre.org/assets/A0010/) |
| A0011 | [Virtual Private Network (VPN) Server](https://attack.mitre.org/assets/A0011/) |
| A0012 | [Jump Host](https://attack.mitre.org/assets/A0012/) |


&nbsp;

# Mitigations
| ID      | Mitigation       | Description |
|:------------|:-----------|:--------------|
| M0808 | [Encrypt Network Traffic](https://attack.mitre.org/mitigations/M0808/) | Ensure that wired and/or wireless traffic is encrypted when feasible. Use best practices for authentication protocols, such as Kerberos, and ensure web traffic that may contain credentials is protected by SSL/TLS. |
| M0932 | [Multi-factor Authentication](https://attack.mitre.org/mitigations/M0932/) | Use multi-factor authentication wherever possible. |
| M0930 | [Network Segmentation](https://attack.mitre.org/mitigations/M0930/) | Segment networks and systems appropriately to reduce access to critical system and services communications. |
| M0926 | [Privileged Account Management](https://attack.mitre.org/mitigations/M0926/) | Restrict root or administrator access on user accounts to limit the ability to capture promiscuous traffic on a network through common packet capture tools. |
| M0814 | [Static Network Configuration](https://attack.mitre.org/mitigations/M0814/) | Statically defined ARP entries can prevent manipulation and sniffing of switched network traffic, as some AiTM techniques depend on sending spoofed ARP messages to manipulate network host's dynamic ARP tables. |


&nbsp;

# Detection
<table>
  <tr>
    <th>ID</th>
    <th>Data Source</th>
    <th>Data Components</th>
    <th>Detects</th>
  </tr>
  <tr>
    <td >DS0017</td>
    <td>[Command](https://attack.mitre.org/datasources/DS0017/)</td>
    <td>[Command Execution](https://attack.mitre.org/datasources/DS0017/#Command%20Execution)</td>
    <td>Monitor for newly constructed drive letters or mount points to removable media.</td>
  </tr>
  <tr>
    <td>DS0009</td>
    <td> [Process](https://attack.mitre.org/datasources/DS0009/)</td>
    <td>[Process Creation](https://attack.mitre.org/datasources/DS0009/#Process%20Creation)</td>
    <td>Monitor for behaviors on the endpoint system that might indicate successful compromise, such as abnormal behaviors of browser processes. This could include suspicious files written to disk.</td>
  </tr>
</table>

##

# References
1. [MITRE ATT&CK Technique: Network Sniffing. Retrieved 01JUL2024.](https://attack.mitre.org/techniques/T0842/)
2. [Procedure Examples: INCONTROLLER. Retrieved 01JUL2024.](https://attack.mitre.org/software/S1045/)
3. [Procedure Examples: Stuxnet. Retrieved 01JUL2024.](https://www.langner.com/wp-content/uploads/2017/03/to-kill-a-centrifuge.pdf)
4. [Procedure Examples: VPNFilter. Retrieved 01JUL2024.](https://attack.mitre.org/software/S1010/)
5. [Targeted Assets: Workstation. Retrieved 01JUL2024.](https://attack.mitre.org/assets/A0001/)
6. [Targeted Assets: Human-Machine Interface (HMI). Retrieved 01JUL2024.](https://attack.mitre.org/assets/A0002/)
7. [Targeted Assets: Programmable Logic Controller(PLC). Retrieved 01JUL2024.](https://attack.mitre.org/assets/A0003/)
8. [Targeted Assets: Remote Terminal Unit (RTU). Retrieved 01JUL2024.](https://attack.mitre.org/assets/A0004/)
9. [Targeted Assets: Intelligent Electronic Device (IED). Retrieved 01JUL2024.](https://attack.mitre.org/assets/A0005/)
10. [Targeted Assets: Data Historian. Retrieved 01JUL2024.](https://attack.mitre.org/assets/A0006/)
11. [Targeted Assets: Control Server. Retrieved 01JUL2024.](https://attack.mitre.org/assets/A0007/)
12. [Targeted Assets: Application Server. Retrieved 01JUL2024.](https://attack.mitre.org/assets/A0008/)
13. [Targeted Assets: Data Gateway. Retrieved 01JUL2024.](https://attack.mitre.org/assets/A0009/)
14. [Targeted Assets: Safety Controller. Retrieved 01JUL2024.](https://attack.mitre.org/assets/A0010/)
15. [Targeted Assets: Virtual Private Network (VPN) Server. Retrieved 01JUL2024.](https://attack.mitre.org/assets/A0011/)
16. [Targeted Assets: Jump Host. Retrieved 01JUL2024.](https://attack.mitre.org/assets/A0012/)
17. [MITRE ATT&CK Mitigation: Encrypt Network Traffic. Retrieved 01JUL2024.](https://attack.mitre.org/mitigations/M0808/)
18. [MITRE ATT&CK Mitigation: Multi-factor Authentication. Retrieved 01JUL2024.](https://attack.mitre.org/mitigations/M0932/)
19. [MITRE ATT&CK Mitigation: Network Segmentation. Retrieved 01JUL2024.](https://attack.mitre.org/mitigations/M0930/)
20. [MITRE ATT&CK Mitigation: Privileged Account Management. Retrieved 01JUL2024.](https://attack.mitre.org/mitigations/M0926/)
21. [MITRE ATT&CK Mitigation: Static Network Configuration. Retrieved 01JUL2024.](https://attack.mitre.org/mitigations/M0814/)
22. [MITRE ATT&CK Detection: Command](https://attack.mitre.org/datasources/DS0017/)
23. [MITRE ATT&CK Detection: Command Execution](https://attack.mitre.org/datasources/DS0017/#Command%20Execution)
24. [MITRE ATT&CK Detection: Process](https://attack.mitre.org/datasources/DS0009/)
25. [MITRE ATT&CK Detection: Process Creation](https://attack.mitre.org/datasources/DS0009/#Process%20Creation)
